// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '8woafHxw8KNKzw0oOd2eoHHt/awcrhtxzGEtt+EeO1O497RURabvVuIj50O0AGctm70YXGVqCp6q4UTR2tzAbuqnnTNqbUwscC/QzZ0Gz6YDtYocxwwO/cTmySvEWOVuuIzlV5ZMjft9lmHKPpt5WSbslToHIEMdJKsuEcHy2TRyyuC6vQ9BD6caNeJPDl/OxMEbwGgvjR08CxqXQkzwmNXxK2bLji9LDqcg/ip+lU09+RKhLhPwSBm43RWmaSJcZ2y2IsB920SkQ3sgm2TLK/1xExyyqQuPb1yIcpU1apfboqUNKb+ViRWbO/M3ACzRbkkwf2FvCwNfLG1Pzn04S4qKye9wd/qY9w72v4gKEMigW1FowS9E6ClRxzD4n/4zawx3pnoZDrCWit/qdrHcMSRzOPZxNDVw9rh76T2X8SvPZYgIZ3H88M9AsqKieiVgIi41enbZ/YvWnQPNWPYD8NK6gZBj14C8skGqkn8Lh1Tctcz7CIDKV/7pQPPdAs2im8Oyxa9dHZAVrz69c/ws/WiRsZhHppxQasuO29TKwRMwEHYapE/qGPT1d8FkOsfTA8VrRo8JvLkJ8mer+CbVTIAvckL2cxnYCqHmmINIW980YxFYoNpu2TsvVQKFrlvjs0/J47AnLen2z8N6xkKaYlDTKYGb163veGH5CkfSDdIn766MuFmpgeAYaHpEj1kcTNb/4wgacP/rVmapFpRtejawSi3IpwTPQTA6nLnZGiio8Q==';
  const _INTEGRITY_HASH = 'ee359e01d91b7b0f92bdcb8c898454c83da8eb2564db2918be04d6d83a57c5b0';
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
