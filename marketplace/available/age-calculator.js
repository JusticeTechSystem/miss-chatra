// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '/hmVp0JLwC3MHe7KDeSTssf8s3br2YAIMt3E5eRoNLlUUzwIjxPuCZJB/uHn7bB8yQ9WrQhAmAxhNu8RX8ACUKW6TMytpaMFrTBsaGBG3UAzcGcz1oAXb6LHlqPdhsfY/NCrVk3xtWkbSHE7jxCXQKbGmEYBlahj3TAL+xzk/c9t8LZ/SRHQf8SHmxVZd4bhLI4yCgtbV3gJ1EF7v4Y4rE2I9mBnzTqLVEEvter6CdxKNOSc/BsHcupLT6ptMBbg5iWCoqK8/VDk7UnIQUuwbtAvzZdxkr2aTwDnL4RwpaDl7HSKWH28+PT6BXs4XBtYR2z10W3KO0ucGcaQnn49IPJKyOs03ibDaT06GXNvR2X3bdnXRhmIOptL6ZKKCz5vMrk13yYJAy4u4bdzGvHrXfNnMlyO2OYSjoVkLMKL+XXYC77rBSV/MkFIptSxi9Do+IdCxRX5AdefhpuJpNv+Swlz3ZmUq25Hbs8MTph+nHi7rzUqZr7VNtTHOWOFRKPwwlD66ADGouq8cFvcyT+m1zaCv1/K6to51fuOEanU1iJ4Fxaz2uQbKMEUAtZatMVfUyXPlHYkixxK2Tfubeuw85apsHi+yLlJEp8Jo1fUKBdEOOgzOE0vlWXAJr/Wrd1gGemFyx43hy/P/lVxBb01IWV9NtyKMTWskCbFAkYwjtqsev1lq5RZAAf/R+/auIFtWKA1gAblKfvRqoAX9Kh/OmmQOV+IyIm4ba55TyvoGyzZR52ipuS5VwO/9Z9IAq7oGwHhSNyyLK6ASyEgUro51r7UA3uyYs9qsDaGTFRw608hv+UwuAgQXxAi70mrnGD0EwdeXxXO5Fi+Z/51TITXshLI+vCfUc8c8U51GTXtrwXXFc9CCI9KpWnUTVErR8AfZR2eGb+xJMHlR48EXJgyaG14yaH9R5yCxLLx6rFKL2TyYuqq75Ke3mgkmWtlCCWa0GPK2BAeGx6REySOXGLy3XNICM9U2McngWjSdvP+wE3X4DzS5bMOra0yS3cjCnspJwS/e1xxVZC4gTJb/B2dY9xfyTdTcMykLjMSdrLjj8mEcElNvQKxk15rBOYuTYI8evFn9DIEuuHk5ySKxrRAHrduEojlCNQseKWd4eVRCASMcEAWjdAeSVOcalU7HtkBxbFdn7QaitckwFWTbR3bSdetWwMfdzVO+dT9sjJslmj9JNROhVpbqtod9/SDwx7kmdTw1VWj4BQsj7/tMnQzItzyNyArzpM58/dmuGzkiuYGLdNbItgAFpCYHcfWizuKmarhxu5JcEO3cD0xJV6fKbwVN5KXD09/Ip8+rr+jSR7H+Fyc0+VYjr/cGjClyULrZBdK2Rafe44vxECY3lETMUJaDYpLs0fZANFBRmCn5cl/xLVEBP3SyYlqBml1mZSteLrGo6wNtNAmugF0a6gIlVcJ2iDfjnvuDAhy0g5CA74pZ6HSgBX4F3ExHMfuCc0TqG1cFtV2tKg9xPYXMRCeBMx9KefhtYarz0+EQ2ZwAE+VugLE6jSIhN3pvO2kTRfg28LmE5arzzFBwBMZGuKUiHv+f+QRjzHmJ6Qu9QsKYD15NUa3oYapFsZ7LlQdZ0f6206kj34PNzd/dErdXT1FYOWDsowH7iuL5y7N5M9eg3yR4eKbGdZc7z1l3cAH5aWYS/FROETNtv0lObW0AID0XOL489Cqe40GFM19VoHTLDg6SCV+8c1ujpIsjyfo3NBruaNYMKKkKtZkXn0u0WqrhfXU9NKrF6Q06DYLhVOdw6LW3lBwSM/KCpA07/e72PQEfVdcBLbTblMCWugCb19oG2QhQ6T25MqNEB0PxiOg4nGFbUrPwEpXa1cQK1anGHyoqEXklE2nKWxUsc+R7xqDr9tuMDDcpoLr56x8nvGmEJun6OUXDQ==';
  const _INTEGRITY_HASH = '4ffa69803c7a53c07aed213bf1325d8733167b5fa7482bc3379a73a69a6bb9c4';
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
