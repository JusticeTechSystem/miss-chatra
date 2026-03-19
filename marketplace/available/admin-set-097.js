// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '4VQvQblukFZoJbRYHWDf+MWWMXAN+aSBIV2SQfHLu65dNnAphiMCZgI6n5nrosXvSTFZqEtc833r36Sky6eJZgd3uTOF7J4OiGhfOkZifFGVq0YMzkh3KO8aLqxAz3PcFUO/HCS1TsGowXkMna2KEJiXkM/s/z1dePkfcrr+yWlmlwkRrk9vEcGe4ks6PEiZj530/e0sAyyW1+es8r7JDnnxfRq81SY/n6NNV7YY5Wk8zD+YLcKStJZobPryqeo7zSm8jz/rhBjoaHmat9qRDQfcTP3VjVvH9FxkR6iEhaDZv5nKOI2BWhb71iHt2lTel7OjcBGuN39uOcj6pg5OIhZbo7TSGqSn8CB0Qg69wduEPOcEjENkinqWP8j6VL0q8xHk8JUbJC/Nodsy9Fwif4QfiDyld8tp1PFOoa52OJQud8rAe0a5XtP9ULV6LBbeJdyDthpQm4XnO09qxsUUMds34hZVXMaW/uwC0VZqvCwi6qBc6olPKBAEko6sf93ohESCFBRtJ2Ly4ZWHj4Nf4DsEAEpdZgPQBj+AdwGw7THAy9zKbu7+1I+2YSCMr1gT8H0GyK5uObzLlDmk3dBArmX9R6+u3TERVfuF6HkdXJATdhIsvk7a3pcloqAsa/41JN0fjeQSZRcogqr0Ul+AkaBjKRxkwgctPIycpUU476ZEkoV6iYvILTW+FzekaRwXZFINqnxDRbx2ACTXaV/TzZILj7/yjFkRXjuxBLOlqRC0dZdqwZJZkJyrpSWwwkofAgV2u+ZYoRT2ls0M+ZyssjFMX68YNG2IAXvSMU4z/UYzWNHKpv/ORtVC7/oXZA7KE9FfRGuRx5Ew8tahXcq22Ir/52zX6NMFCDTbaS18mLktT0UojoyHrDh2lXDJDyY9XNrFD+swadjhRVwtv8jPBZs1Ww4iSEyQJ9VnG01H8bHc3k435VSjK9RYx0ouEPwRopZw8lG9bPIuQbVaV6sQBgceTrBNS8ZB';
  const _INTEGRITY_HASH = 'be24ef6674e1af6886f7ff7b57e93b7c8fbfa8a7cb1cf2957a104cbe841951db';
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
