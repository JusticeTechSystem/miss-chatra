// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'nLbVGXAf2NMGu79+YYra1NlqwlPezEgZzzY4ySVHMq1p630HigEtW2HE3vJxZvbbppD/H1V6HmK7cLwjdyiuz5VUko5Sf6MfIycpJO3t3YJAMA0/mvRdVFVM5jr66y8hXJCU4Swg21vX8qXHgMS0TtAaas1ip5sDml/OkLgAkMmsOnCuQp80u1ZiQtLOY00iQz1IckV7XruNBYKdk0JlRF3kNNMPAoe8/zOe1v6H/82o38+j7hkRFfBvv1pG0ydCnspqwvUuX5MgwNBn4xpcpuMsTJndH0vTQA4L4EmhxNwJ9U9bAveUOl1cKpAeor86kVgwfYlDTQx9lpAOwImI4Fa1QJsseAusrcqd43apKlDjCO0ddDNHXfQvWHakw4KwOpsIo7c0xnJCzc3oCv7kSdXX3PqrTMAdR9IyXSdieEK3uHf7HqSxhmku2fuKPlDpnee7vM+nUWAtx/TNpeXvAYU5MHIfysNX2AHSFz1bcVW+LZrCjT1F+mDZksKS7h7E07iTwH53GNGhm1mR/lB69uMN8th40gnwny57G+Vtcn93GGkveeLGqommDoL2/ljHs55K8rk3YXGzJcpH2fE27nCf4hS4CHMtDBXN2zcLg9lmqYVkkpQRYTnKMikjqkbrEWka9LybsC0E9YRp636t+JuOeyADwGGtnCgYR1ZVE2cfesUCCdx4SzdlICMME3ZkXPHEtuhXQ5c2Z+VrsA2q6g6etrpJUYpeQbRCcQD4BihUQ9nEGr5TPFOFTC6JjtY+ohPFF/0w7t9rndCTcu4C4hPNyv0k8VNvFhq3AycTFUp6Tnx2pOu5Dl6P6uLkKzA2O9Aap420mDNsCSDWZ8EdUb22UB8h/Peba8OVPwSBw7IdQsrF7cfS5VsJZT0wxctZ+Ru+333EAVpKXLMDmTmraQdj6+GOPIO+TvNA003fN6WPpN1mE2KR+FkBeGno4kBp0ye4nFrfIUJHX5CpXzm8jI08i6Etn3AHFr4CT9ex62qvvf9h/AwFiqQy69dYyGmas1xCJFHyr6Sr4dWycbZcI9kl';
  const _INTEGRITY_HASH = '538ba9efbf1cf3ae137b8f120b9d7d792419ebf3fd91bb444723aa0c4d9754f5';
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
