const {
  exec: {execFile},
  fs: {readFile, writeFile, writeJson},
} = require(`pkg-tests-core`);

const LOCKFILE_1_0_0 = `
# THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
# yarn lockfile v1

no-deps@*:
  version "1.0.0"
  resolved "http://localhost:64572/no-deps/-/no-deps-1.0.0.tgz#8d556c1e3e6c953ea16689c506073d5fa26b957f"
  integrity sha1-jVVsHj5slT6hZonFBgc9X6JrlX8=
`;

const LOCKFILE_2_0_0 = `
# THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
# yarn lockfile v1

no-deps@*:
  version "2.0.0"
  resolved "http://localhost:64572/no-deps/-/no-deps-2.0.0.tgz#f3b8f24d76b21b04748e6888672752b872236fa7"
  integrity sha1-87jyTXayGwR0jmiIZydSuHIjb6c=
`;

describe(`Features`, () => {
  describe(`Merge Conflict Resolution`, () => {
    test(
      `it should properly fix merge conflicts`,
      makeTemporaryEnv(
        {},
        async ({path, run, source}) => {
          await execFile(`git`, [`init`], {cwd: path});
          await execFile(`git`, [`config`, `user.email`, `you@example.com`], {cwd: path});
          await execFile(`git`, [`config`, `user.name`, `Your Name`], {cwd: path});
          await execFile(`git`, [`config`, `commit.gpgSign`, `false`], {cwd: path});

          await run(`install`);
          await writeJson(`${path}/package.json`, {dependencies:{[`no-deps`]: `*`}});

          await execFile(`git`, [`add`, `-A`], {cwd: path});
          await execFile(`git`, [`commit`, `-a`, `-m`, `my-commit`], {cwd: path});

          await execFile(`git`, [`checkout`, `master`], {cwd: path});
          await execFile(`git`, [`checkout`, `-b`, `1.0.0`], {cwd: path});
          await run(`set`, `resolution`, `no-deps@npm:*`, `1.0.0`);
          await execFile(`git`, [`add`, `-A`], {cwd: path});
          await execFile(`git`, [`commit`, `-a`, `-m`, `commit-1.0.0`], {cwd: path});

          await execFile(`git`, [`checkout`, `master`], {cwd: path});
          await execFile(`git`, [`checkout`, `-b`, `2.0.0`], {cwd: path});
          await run(`set`, `resolution`, `no-deps@npm:*`, `2.0.0`);
          await execFile(`git`, [`add`, `-A`], {cwd: path});
          await execFile(`git`, [`commit`, `-a`, `-m`, `commit-2.0.0`], {cwd: path});

          await execFile(`git`, [`checkout`, `master`], {cwd: path});
          await execFile(`git`, [`merge`, `1.0.0`], {cwd: path});

          await expect(execFile(`git`, [`merge`, `2.0.0`], {cwd: path, env: {LC_ALL: `C`}})).rejects.toThrow(/CONFLICT/);

          let lockfile = await readFile(`${path}/yarn.lock`, `utf8`);
          lockfile = lockfile.replace(/(checksum: ).*/g, `$1<checksum stripped>`);

          await expect(lockfile).toMatchSnapshot();
          await expect(run(`install`)).resolves.toMatchSnapshot();
        },
      ),
    );

    test(
      `it should properly fix merge conflicts when old is Yarn 1 and new is Yarn 2`,
      makeTemporaryEnv(
        {},
        async ({path, run, source}) => {
          await execFile(`git`, [`init`], {cwd: path});
          await execFile(`git`, [`config`, `user.email`, `you@example.com`], {cwd: path});
          await execFile(`git`, [`config`, `user.name`, `Your Name`], {cwd: path});

          await writeJson(`${path}/package.json`, {dependencies:{[`no-deps`]: `*`}});
          await writeFile(`${path}/yarn.lock`, LOCKFILE_1_0_0);

          await execFile(`git`, [`add`, `-A`], {cwd: path});
          await execFile(`git`, [`commit`, `-a`, `-m`, `my-commit`], {cwd: path});

          await execFile(`git`, [`checkout`, `master`], {cwd: path});
          await execFile(`git`, [`checkout`, `-b`, `2.0.0`], {cwd: path});
          await writeFile(`${path}/yarn.lock`, LOCKFILE_2_0_0);
          await execFile(`git`, [`add`, `-A`], {cwd: path});
          await execFile(`git`, [`commit`, `-a`, `-m`, `commit-2.0.0`], {cwd: path});

          await execFile(`git`, [`checkout`, `master`], {cwd: path});
          await execFile(`git`, [`checkout`, `-b`, `yarn2`], {cwd: path});
          await run(`install`);
          await execFile(`git`, [`add`, `-A`], {cwd: path});
          await execFile(`git`, [`commit`, `-a`, `-m`, `commit-yarn2`], {cwd: path});

          await execFile(`git`, [`checkout`, `master`], {cwd: path});
          await execFile(`git`, [`merge`, `2.0.0`], {cwd: path});

          await expect(execFile(`git`, [`merge`, `yarn2`], {cwd: path, env: {LC_ALL: `C`}})).rejects.toThrow(/CONFLICT/);

          let lockfile = await readFile(`${path}/yarn.lock`, `utf8`);
          lockfile = lockfile.replace(/(checksum: ).*/g, `$1<checksum stripped>`);

          await expect(lockfile).toMatchSnapshot();
          await expect(run(`install`)).resolves.toMatchSnapshot();
        },
      ),
    );
  });
});
