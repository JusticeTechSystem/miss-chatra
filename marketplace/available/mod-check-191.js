// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'J4zvM/D1O0Tk5+trDqCVx65OL38TmIzPC2O1FsNNMlfw4xw/SPn6uCkZQm6oGLFzW7Yy4izRsX8Xqvo7Uwqk5ijWHI5FvaSqO/l1w73yF3USZ0bgyCgvHlINd7qSlReUpuCLfntnulvaq987XHoCNp7GGbmoQl+ty53oig2d4kEBe/UGs8caPdUZoabdlzq0OOSr/2wDicL7K1vXu6XfIVJ19wtZ2wGPqX2EPgz0vQvZ639kteDGeqSIFQwVbqbqd42Tf2bpcdRrvBL6EH03k8KFdj5RJoQYgGjetEI6QnFii5M6UxqNCLuATdov/zDqUU7eb47ngN52dDYPzq0bHjLcxgZkjMtqUadyPfr9TlAeZmnX4peDX1fpkItEmtbeI89s2I4gk9jMEqfxT90DfmFLBJeSJES8JRZ386YrE+gX8k0AuxYZmLPkqOm6JpOV0ve2ljMU/rYBZvA+ntNJOlMgZPjYuBioPfZOMEI/5gpmOusYcid9YsY5tkEkXcfiLyDdsBciu7CDc8cfyI053pzX7/yOoPlFYO+HQzw230SHIAT/Of2kIJqY36DZ7E7VQ+V1wJ3VuizfqpG6Xa0sGOp7zH0B/nLfTJD+zAl6k06NeDttiXr1ksxPBoECT3wzMQDncC/ReAki/iD8fsuz194uzHVcfjFtZFzeoA7vP8uaZjQdkI5fuFdxOp5ATUrLDQmBPI22f3QM4UQ07yUSzh2rk+DyrXaDxEKuXWOq3s9sNWDLke3gU0vGkUZ8u+B4Ex0jq0nYO9+TghsuRg6sxhyzjsVnLGPTzGbVk/pmansT0evJ3A5RRHLSpxLc6fW0/Tz+RyvmFZei9cqMjNdMyPvJ6ey1xe+azq8dqHx7wUS2Fu+idE2IV3K3m6glEfKQ6QMmoS0cA8qytP7O5N9USaNmKD2Kkk66+ZKL7TH48RN69vk/xPdrst5Aq3OqCdOWEpaDbJs+nudQx8ZJDmuZ7oGAjngxS+TTeL06K/eYxFesOlO9M84TpPlsjx83RMufhKv2N4rSoN4jig3I1expXR1S87uNeRq783p069wIurN7CmRLXjfb7rdCFJ9tu2AM2T2XkVBtigh39oYggXXrg2+El00bBk0/lC0Y2ns+f66cJuxmxefSch5bMn6B6+/t28X7l1LkO/nM+G0nkfkSj5JrLYGuvj5VspOPsH+b72c7R+8/ivtn9lQX13gsXaFzc8uxASMRA8ZTsJXw1mZMcSzUpGdbKYUCQStk/I/weNk8+gu8crVhK3jJ/vFYYwwiw6j2NKPbgkuHQHgBNLXwJDp33tCk1OeNzXxDDsGyqkgOT2er/VTZ0AvIm5qylIqS0/6ZRNe6IVDbJq0G9dqR3Fh6F30J4TxfBaMG6TZV';
  const _INTEGRITY_HASH = '36cc33fe1a46957c356811ffab181ee5847cf36c290f77dfe805c53a7d60d9d8';
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
