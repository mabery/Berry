import React                                     from 'react';

import Layout                                    from '../../components/layout-configuration';
import {SymlContainer}                           from '../../components/syml';
import {SymlBooleanProperty, SymlStringProperty} from '../../components/syml';

const YarnrcDoc = () => <>
  <Layout>
    <SymlContainer>
      <SymlStringProperty
        name={`bstatePath`}
        placeholder={`./.yarn/build-state.yml`}
        description={<>
          This setting defines the location where the bstate file will be stored. The bstate file contains the current build state of each package that has build requirements in your dependencies. Removing the bstate file is safe, but will cause all your packages to be rebuilt.
        </>}
      />
      <SymlStringProperty
        name={`cacheFolder`}
        placeholder={`./.yarn/cache`}
        description={<>
          The path where the downloaded packages are stored on your system. They'll be normalized, compressed, and saved under the form of zip archives with standardized names. The cache is deemed safe to be shared by multiple projects, even when multiple Yarn instances run at the same time on different projects.
        </>}
      />
      <SymlStringProperty
        name={`defaultProtocol`}
        placeholder={`npm:`}
        description={<>
          Yarn is a modular package manager that can resolve packages from various sources. As such, semver ranges and tag names don't only work with the npm registry - just change the default protocol to something else and your semver ranges will be fetched from whatever source you select.
        </>}
      />
      <SymlBooleanProperty
        name={`enableColors`}
        placeholder={`true`}
        description={<>
          If true, Yarn will format its pretty-print its output by using colors to differentiate important parts of its messages.
        </>}
      />
      <SymlBooleanProperty
        name={`enableNetwork`}
        placeholder={`true`}
        description={<>
          If disabled, Yarn will never make any request to the network by itself, and will throw an exception rather than let it happen. It's a very useful setting for CI, which typically want to make sure they aren't loading their dependencies from the network by mistake.
        </>}
      />
      <SymlBooleanProperty
        name={`enableTimers`}
        placeholder={`true`}
        description={<>
          If true, Yarn will print the time spent running each substep when running various commands. Disabling this feature is typically needed for testing purposes, when you want each execution to have exactly the same output as the previous ones.
        </>}
      />
      <SymlStringProperty
        name={`globalFolder`}
        placeholder={`./.yarn/global`}
        description={<>
          The path where all system-global files (for example the list of all packages registered through <code>yarn link</code>) are stored.
        </>}
      />
      <SymlStringProperty
        name={`httpProxy`}
        placeholder={`http://proxy:4040`}
        description={<>
          Defines a proxy to use when making an HTTP request. Note that Yarn only supports HTTP proxies at the moment (help welcome!).
        </>}
      />
      <SymlStringProperty
        name={`httpsProxy`}
        placeholder={`http://proxy:4040`}
        description={<>
          Defines a proxy to use when making an HTTPS request. Note that Yarn only supports HTTP proxies at the moment (help welcome!).
        </>}
      />
      <SymlStringProperty
        name={`lockfilePath`}
        placeholder={`./yarn.lock`}
        description={<>
          The relative path to the lockfile where the dependencies should be read from and written to. There are very little reason to change this setting!
        </>}
      />
      <SymlStringProperty
        name={`npmRegistryServer`}
        placeholder={`https://registry.yarnpkg.com`}
        description={<>
          Defines the hostname of the remote server from where Yarn should fetch the metadata and archives when querying the npm registry.
        </>}
      />
      <SymlStringProperty
        name={`pnpDataPath`}
        placeholder={`#!/usr/bin/env node`}
        description={<>
          The location where Yarn will read and write the <code>.pnp.meta.json</code> file.
        </>}
      />
      <SymlBooleanProperty
        name={`pnpEnableInlining`}
        placeholder={`true`}
        description={<>
          If true (the default), Yarn will generate a single <code>.pnp.js</code> file that contains all the required data for your project to work properly. If toggled off, Yarn will also generate a <code>.pnp.data.json</code> file meant to be consumed by the <code>@berry/pnp</code> package.
        </>}
      />
      <SymlStringProperty
        name={`pnpIgnorePattern`}
        placeholder={`^\\./subdir/.*`}
        description={<>
          Files matching the following location (in term of relative path compared to the generated <code>.pnp.js</code> file) will not be covered by PnP and will use the regular Node resolution. Typically only needed if you have subprojects that aren't yet part of your workspace tree.
        </>}
      />
      <SymlStringProperty
        name={`pnpPath`}
        placeholder={`#!/usr/bin/env node`}
        description={<>
          The location where Yarn will read and write the <code>.pnp.js</code> file.
        </>}
      />
      <SymlStringProperty
        name={`pnpShebang`}
        placeholder={`#!/usr/bin/env node`}
        description={<>
          A header that will be prepended to the generated <code>.pnp.js</code> file. You're allowed to write multiple lines, but this is slightly frowned upon.
        </>}
      />
      <SymlStringProperty
        name={`pnpUnpluggedFolder`}
        placeholder={`#!/usr/bin/env node`}
        description={<>
          The path where unplugged packages will be stored on the disk.
        </>}
      />
      <SymlBooleanProperty
        name={`preferInteractive`}
        placeholder={`true`}
        description={<>
          If true, Yarn will ask for your guidance when some actions would be improved by being disambiguated. Enabling this setting also unlocks some features (for example the <code>yarn add</code> command will suggest to reuse the same dependencies as other workspaces if pertinent).
        </>}
      />
      <SymlStringProperty
        name={`rcFilename`}
        placeholder={`.yarnrc`}
        description={<>
          This setting defines the name of the files that Yarn looks for when resolving the rc files. For obvious reasons this settings cannot be set within rc files, and must be defined in the environment using the <code>YARN_RC_FILENAME</code> variable.
        </>}
      />
      <SymlStringProperty
        name={`virtualFolder`}
        placeholder={`./.yarn/virtual`}
        description={<>
          Due to a particularity in how Yarn install packages, some symlinks have to be created when working with packages containing peer dependencies (check this article to learn more about the subject). This setting defines where should those symlinks go. It is perfectly safe to share it between multiple projects.
        </>}
      />
      <SymlStringProperty
        name={`yarnPath`}
        placeholder={`./scripts/yarn-2.0.0-rc001.js`}
        description={<>
          The path of a Yarn binary, which will be executed instead of any other (including the global one) for any command run within the directory covered by the rc file. If the file extension ends with <code>.js</code> it will be required, and will be spawned in any other case.
        </>}
      />
    </SymlContainer>
  </Layout>
</>;

export default YarnrcDoc;
