import {createHmac}                 from 'crypto';

import {Ident, Descriptor, Locator} from './types';

export function makeHash(... args: Array<string | null>): string {
  const hmac = createHmac(`sha512`, `berry`);

  for (const arg of args)
    hmac.update(arg ? arg : ``);

  return hmac.digest(`hex`);
}

export function makeIdent(scope: string | null, name: string): Ident {
  return {identHash: makeHash(scope, name), scope, name};
}

export function makeDescriptor(ident: Ident, range: string): Descriptor {
  return {identHash: ident.identHash, scope: ident.scope, name: ident.name, descriptorHash: makeHash(ident.identHash, range), range};
}

export function makeLocatorFromIdent(ident: Ident, reference: string): Locator {
  return {identHash: ident.identHash, scope: ident.scope, name: ident.name, locatorHash: makeHash(ident.identHash, reference), reference};
}

export function makeLocatorFromDescriptor(descriptor: Descriptor, reference: string): Locator {
  return {identHash: descriptor.identHash, scope: descriptor.scope, name: descriptor.name, locatorHash: makeHash(descriptor.identHash, reference), reference};
}

export function convertDescriptorToLocator(descriptor: Descriptor): Locator {
  return {identHash: descriptor.identHash, scope: descriptor.scope, name: descriptor.name, locatorHash: descriptor.descriptorHash, reference: descriptor.range};
}

export function convertLocatorToDescriptor(locator: Locator): Descriptor {
  return {identHash: locator.identHash, scope: locator.scope, name: locator.name, descriptorHash: locator.locatorHash, range: locator.reference};
}

export function areIdentsEqual(a: Ident, b: Ident) {
  return a.identHash === b.identHash;
}

export function areDescriptorsEqual(a: Descriptor, b: Descriptor) {
  return a.descriptorHash === b.descriptorHash;
}

export function areLocatorsEqual(a: Locator, b: Locator) {
  return a.locatorHash === b.locatorHash;
}

export function parseIdent(string: string): Ident {
  const match = string.match(/^(?:@([^\/]+?)\/)?([^\/]+?)$/);

  if (!match)
    throw new Error(`Parse error (${string})`);

  const [, scope, name] = match;
  return makeIdent(scope, name);
}

export function parseDescriptor(string: string): Descriptor {
  const match = string.match(/^(?:@([^\/]+?)\/)?([^\/]+?)(?:@(.+))?$/);

  if (!match)
    throw new Error(`Parse error (${string})`);

  let [, scope, name, range] = match;

  if (!range)
    range = `latest`;

  return makeDescriptor(makeIdent(scope, name), range);
}

export function parseLocator(string: string): Locator {
  const match = string.match(/^(?:@([^\/]+?)\/)?([^\/]+?)@(.+)$/);

  if (!match)
    throw new Error(`Parse error (${string})`);

  let [, scope, name, reference] = match;
  return makeLocatorFromIdent(makeIdent(scope, name), reference);
}

export function stringifyIdent(ident: Ident) {
  if (ident.scope) {
    return `@${ident.scope}/${ident.name}`;
  } else {
    return `${ident.name}`;
  }
}

export function stringifyDescriptor(descriptor: Descriptor) {
  if (descriptor.scope) {
    return `@${descriptor.scope}/${descriptor.name}@${descriptor.range}`;
  } else {
    return `${descriptor.name}@${descriptor.range}`;
  }
}

export function stringifyLocator(locator: Locator) {
  if (locator.scope) {
    return `@${locator.scope}/${locator.name}@${locator.reference}`;
  } else {
    return `${locator.name}@${locator.reference}`;
  }
}

export function prettyIdent(ident: Ident) {
  if (ident.scope) {
    return `@${ident.scope}/${ident.name}`;
  } else {
    return `${ident.name}`;
  }
}

export function prettyDescriptor(descriptor: Descriptor) {
  if (descriptor.scope) {
    return `@${descriptor.scope}/${descriptor.name}@${descriptor.range}`;
  } else {
    return `${descriptor.name}@${descriptor.range}`;
  }
}

export function prettyLocator(locator: Locator) {
  if (locator.scope) {
    return `@${locator.scope}/${locator.name}@${locator.reference}`;
  } else {
    return `${locator.name}@${locator.reference}`;
  }
}
