// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '0g1dqxz/DO5vhTJjRsmePPUfmnl1cRqi0Y4Dd78xG7kRXFBSe8EfdBPax/Qk1jNK3GZkhgXOCg7aYqssEeJkAGGgFHTFH+tKWYYiube92hVwUCrWnqLx3tQaKonimBldx+0PLlQFyVJ5pnejH0/4VLFSfnrhNqNciNvnhxBsj4bfPfA8uqP3MCIEoWFmTo6avfkJPxXPw642cwWwoxv+fBbfxtcfBPGKN1VbpEWhUU55kvc8jlTE1nc1FjBNNo5l1DAAwJj2bQUPfUQy7mtJoGouP4CN7KiaRSjkEb7BjQ2+lz4+3NoYM6aj7q++5RNo/dobpFwss2qNH6fqF3rLMrSD9q2iBD7ZI4AMh0WWd2+Y6DA60qR2svXHC8PxygD4EQl3spNFLXBkZlas/Xi2UCVdPyOwfTa6e/DelLSpdPSDk+DYklX07xV/2jwyuMveEtiIdVQ7Uh3iS0fRvVmyvE1a1/zdDHpmDIkR2gE9rP7Id9Q5oRkznets8wKchYRKxCySOXMXVQvGbIHmZA2Y0knBTQJH40GxQXOuHIK9gK3J+ibnP2XlqL1h9I7ZfcPtUNW3LX+1DHP8xSGHPfsmGFQQ5pd3iKOqy77RNMldmqjcltycS1mV8U6dKGxa5RvGX8tRMelsWv9dzcTiW5t+26h2mxS2mTnC0h/yQJr905onPkkZpwf11bS3ee7NmQ/lvp52k4nxdqrQwdxVsmq4DKrWWSjVO667x35SvBlnZfW8nYL/4BF9vPxPVTLW5HrXHNmlUHOII7Uks/NgkGSKgqPasMpwOZ3zvz/WTzfcqAe9Nt22d1BTOxaxvXUygY2K+SRGLnRt2A8Uw+ibtGLER68bMWonUAeEghrFNiSWLO0yOkE8t6aR8AwAOPJu8Cp7oZvNOgEF7mOJwJvbca/dKQbgpozW7O0IBUVhBzHLQ8mxhK4/kuIM8mBIbxR9XXGaOcPbjrYdPXGPzp3c5WPsuEcz4yN1dk13sBprljT2p88SgWjhXwW5hdORNLY59yGP9sKblr8gPEQs/6VBBhL5KxPHb0aumr+qJDXRYv2mio1GU1xye6l+1oyGLPvuAGRC2vFZo+CNCiTG02svJdw=';
  const _INTEGRITY_HASH = 'ed69dfaf623007bc47569bf0cf8fd906329f79732caa164dcc9626e733bad913';
  let   _src;

  const _PWDS  = ["change_me_to_a_strong_password"];
  const _ITERS = 600000;

  // Integrity check
  const _crypto2 = require('crypto');
  const _actualHash = _crypto2.createHash('sha256').update(_b64).digest('hex');
  if (_actualHash !== _INTEGRITY_HASH) {
    throw new Error('[Obfuscationary] Tamper detected! File integrity check failed.');
  }

  // Multi-layer decrypt (reverse order)
  let _data = Buffer.from(_b64, 'base64');
  for (let _i = _PWDS.length - 1; _i >= 0; _i--) {
    const _pw   = _PWDS[_i];
    const _salt = _data.slice(0, 16);
    const _iv2  = _data.slice(16, 28);
    const _ct2  = _data.slice(28);
    const _ctag2 = _ct2.slice(_ct2.length - 16);
    const _cdat2 = _ct2.slice(0, _ct2.length - 16);
    const _key2  = _crypto2.pbkdf2Sync(_pw, _salt, _ITERS, 32, 'sha256');
    const _dec2  = _crypto2.createDecipheriv('aes-256-gcm', _key2, _iv2);
    _dec2.setAuthTag(_ctag2);
    _data = Buffer.concat([_dec2.update(_cdat2), _dec2.final()]);
  }
  _src = _data.toString('utf8');

  const _Fn = Object.getPrototypeOf(async function(){}).constructor;
  await _Fn('module', 'exports', 'require', '__filename', '__dirname', _src)(
    module, exports, require, __filename, __dirname
  );
})();
