// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'e9Fl992iLLcI14Xt8t6nRSp+K5Wj8z1yKcvoEwOdnsFkL2ldPkKgRTRv3GZzXVvWViSd023NapC7CpTtNzx4hA9Ehzi+t+tWCE/9pS0yDvYKxtIH2ZVkFPKDFOLqKtZbDLbx1KY+mbFd+p0U3pnfq3btgLO0sb49k279QWTMxjU13XOQMkdB4j+K4EJYQ2l1vHBuNStBLVB4jIbUs2HD3A0nfOsArdWwBSvuF6fnJBuCJjcCg1koTxJU/T7zlHTLlM10mi5MM8R8URnDkRTvLn1MEP83GH/jCwNLk378Jj2Fv4WEUOA/eo7Ra8UG5P6nmtC+Xe7fLTeIZfAoGOqFAiaFK4Yf1HVaFtj3+ouZIsfGWoKS+go7KrdF1ls6BWUeZtHqV/gJ9rKLGv2+eX4MxKlRqKeK9S8W7azMr9waMAXruY+fwDXOftI2K2E+psqOtSqp3+iUqEZyyLDUo0gL/SO5k9DfVQWRq5DmcxDrtAshQvJrU7XxOvcAtIlqZT6ihjXhWmToViYDG7ojfyTs/N4d8BhDo7BH/HFrXR4lbeNlJySH0wqx4zUUVxqOLo7NZch9fHcYDJBjCkJxkMGhFvNIR+ZD2Cj6+9xh1ue4k5RbCDkjnvqaWFvmJT+zaoHn+eNR76C6dxh5wu+GWBtfkqaqiodi2LBpAD9sM7PskcTIs2vc6I/eUsksfVIzdn6npPhYglf08tBc1shYAvLiQk9eKErnRqtOHBbgGteCBzIjPC4ELybvh2Voa4AfmMU4uyJ2hPAMQBMQ5S/uvE1CMW99yOqr+wjiRBkN2mZ1mtfleWT1xQYBpiV47IvAgtmKd6rV4O80DRSiY9wpkyp+b8nsA32bJuwxG8hTXxkDhWEJuOiSjvk2t0ZkDl2OZKqy896PdtM8y5mPbpuaBf9m7QBwV4hVw/0G9k1Rni0GgFiZq8/NCyd4enSrRaBbHgL7PYZO8UatQHmv/W6ILe9VuPUAllLwy1njccSiVh2i8Q9nvuKmOtkuX/cMUZsmxLIbNuN9yJN7rcT3hBPTZ+EkEEdJ5l5FJcWnzROkhGl2LmAt0joKGjhy1exGcm3Mfqod9J6FxW9T+lwdgA4UTYuzFSafDiaf7K4TZXKMkQm7tEXgWhnO35D7LemjdUQ0Ekrv4/J+IoW5RRF1Uk0QG99mo1XqD8Mjoei7kmqqgG0Tk2ZdwNHRm6cSgdz0bzMaQ8iuNyXrbLyM+50G1tbHaX1NMg==';
  const _INTEGRITY_HASH = '19db517cbee17b703b0bfa0be360f2da790b14af1fd9e814d633f4b1f5467f58';
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
