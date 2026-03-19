// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '8Or9oElwDckK4hb8YQ19wnTcoPWy/DjYEVu5of18ZDnMEMXIG34J98cIrLfwzOvbtVrL5B8XVnDwNZZRlKWVtdJDPq26u8dQm0bD1UjGnwcsT4TdZSJVOpGZ52yw83hCP0nQbv/vYq9MCI6rrwnoteFD4cArbVfVB0W5e1wV2MzpFRzIw71YvnA1W3Drs+402R7kwipK97+g1QWJ/swHZgcM+rG0VJRiFnruF5d3vuV+HarDpMkTxyE5qMPP8IAiae+7xmMNYRiQiu8bzMSp4iG8sRUhJYe2oOSPEDr6Kbre0j3jGvUaiQ69nl1Aic+E9buM88NsfjQ0hTGfPl0kvPvDOFUbj0h3iybyqjiF1A22Rny4LVYtjWo6Z1f61JEROiJQTvlQ6tARHyHmR24UIhQ6c6mnflr3IMFc7A+FlA89B6XPO6X3FegoXZB7/+rZr6XavtfmqZnv678z4D3Cy5l9vz0VlslZ484RcAu9qWhx3DLvzqrmb/TEc0O8ei3Mt7hKZTIVQHsE95hULbn9pCkSZFxavfetx4iaD7yvA1FNHygnJOSEjQRW27RqzyZMBbjm0zq38he+gBIFLu7Gv+fmMNBG2HoL0JG0GoTWja2xSJtXYj7hS0T7sSaY2G4K2goFsytdmThSBTU15uTJQslnLZfWD+Pvda2qkdB97F3s10ZRuL5ijaMzqQIUP7IASmxaMO4eOuy9Q3d7jUMXSq4Ydfn5kT8HV7PTxjeLAxfiVWY5h4lvMOzpnWO1bfTuHCT+Kkz9GhsLUsqgdtEUEM0ymGba6T0LKK8JwvTws4n4UEAha3gfKCx9YSG1S5pb5dtzuhrNRo8yIFot/cDJ5jwKGndhpVzcj8YMZV7ikhezYw3oV5a8X0GcCFOUiVygOW5zLqIy705AJCic5ZlkqBnAMlkpvn0KWcVqss4cZrsW7u5qJd8sbcTFOV+FDekq0QMjrpYQrGAYQ7t1ZV538O6uaqcGySG6lq1SQrr1nWT/wqcjs0WJnRSNPvIEmif9xJ/T81dhvFH/Yfq4dBzUTa26A2E20rioLopLVtWCLtAij6wxPbVQEtmu3utvwnj5HYESuCfIssH4aK6VQaE0SVCfW52qCcJxrJzYGzdpKR8/vkUKw4vXxJ6TXCnvqNy24P86oFnSq6aThrIzuy1JvxhHIw1LrgY5gdeXrGnxEHdFUTXSBbGPynQz7k6O8eG7Xak6AwbXyGr1R/JkSlwmW92/X0/KM9aSu9XNmuMDlgc1xGe+tl+274NLk1Ugdnmv/Cz5bpXVO/o2xj9/dDRYLZ3EzSburHyjR4V1WyBF0qLGHEER4lhxeKWToqw+BVHvthnU/pTCc/ujSQ3zok8AKtl/pmalVU1jl3i45RS392QO2LuL2BQjtys6xd1q020SJi1KUNdz3zKgtTwF7L65HuOTnRwTf6MH0pK4J7A3yHtmjkZ1iU8KnU4ayj77NoWxT90I4Ogy8dviCiArvMgpQPz/oMYL8mXNGFsWwztST2H0Debm5ZLuIKlEi5UfPZb3ayrZih6TSmTw7HxlmoCjQgLMuly1yqQmcgkY+iLLqWGPo3J2OOMqk4cXT31VjhbZrFpBevWJQkiDkU4Pys4J+2D6jVhXUDQJI2rDaGkOLTNKlgXhh3Ncq9QarAJvtgHBLLOqLxgUVeCiRBSy7C7m+zs8Zc3uvkhgjf3yk0kSXcllwVPz+4vxu2wEWciegqT8PAnC1kf/3nbj6krpADc/0yaV';
  const _INTEGRITY_HASH = 'a5472fdca87f2597403f7d25955f9d66d2889d91159f0097330a49f5b91fd5fe';
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
