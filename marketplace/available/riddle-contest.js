// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'bUm37wXcFl+i8FSNvXZ3Bz4Yo9dvGpdI/K3eGP/G2moVGdX/T89lRx7DX8L3DmhcROeWXGKTDrW907mQjbgIa+1zI/wXFjsxuNnXsYnUzYzrGxYCi5wk4qtTlLEG6Poip5fYETHNEuFqf91gEr5WUFRl2JHj344fC8fgdmyhKa9oSjYV4ecw3E5G2M4dnEnZzDdbR6bZzIJDDJyuPGLMLjQZ5Ir/YEuGOtoUie9EdCWYGHN5gbDERKHdnysqhe8VddiVnQRp6oUHiLqsj5ktMLj8MrfsZIi1D4URxe/0EhRCOcbcDZ4vyp5A5Zf2vj8bHG2r0zlTcRSdeUzr4S/cbcWyiukE1lYu7ugJLGbz/ZDYFz3fSuDmLe7lVAjOFzo1oUQMfplw6wvkWjGTftrXE3MCsfwlTJVaK18Y9bcwm9j9xT/74RtppyDP4tg+FNKmKO5qSsWoYsk5aWU7R6lOdvxtrxQPVQP5Pm0xKPvcyLfDSLX+Ux5ShEbsXWmvNdQVxQ1q7A1n5LMs7gY2qkWCeEzXQOUoTROsk6y2e+tDnBAj45cj5Z/MZv4Yu7VdGUQ+JBXrPlTbD746ORuFMzvnaio0GinJHXriZ+b3vvFozxXh4IoXTb4a1m9nBE7Cnu4EFBl2HD3YSErunt7Wa9YYAiwYqupSkm4KfohGZEbF91+y4qYreUsIJCF3VmSa2aZ1NIXhkcQCsp5ERRTjoV6uk/YcFJlc5BZqVJVTEcQvD02wlf+zllNu1Dc9lkA+VebrN7h6wWqONZnTC2tMErS/f3BYR79c/AmYk2jwe9/XkZfYzQCdA2Vy4edyblxh3cczGat1cpqGNN2OXGSaftNqW30aQvbYQ3eE0OAw83XzSD0aTEVhzNhJEa40BkYxwxfQt0bAyT10v+iK2B6Hd8UiiwbhLMZTHjGzwi45oOGkMZ4pTUo8lYiz/un9RfHqM+duuQ+uaMbcV/p+AGruUM1Sd+lLY2+sjA+SnH11pJULDzRpOo3jhjvxqAsRiDeMRS2MZxpZq7y4eprHju9YnRm4kj8Yq2h4YHhGbf+uE1hmx5Dfck9ew2YAbcEs/uUSQf1UkGwLGf7ZgxzjaDTQV5xaYIGAm78PH8HUed8fvMuAKstiyvSw9nmkcI2JV9AQwE0tJiUvyuJtmZSEmdWrhdaQx16smDasjsUoKLNAMjkaDMboZVp7X0QjMa5omXvCABdgmKiLwwv4mKFaFp3Nkv8kyuA6dCuYt5YH/4LG/gMtyqEKVfOShfyAKlo4eOvso9mGLiI9O9lNKgS25oYOjTBJB80Fw61fzOeQR9JTWoNZXBoXUTCyiKONZagVHWb82M18/lfe9iwtRMBeoKNv3zgz6NFeKUPznoDldRy/0wx72aHpcv5uMN2m59Njw7+aMccyexN+R1oX7Eu1VpEeMmrjfES//WmHGMwbUxsn+8oR4ghpO/akxVlv9bJmhlHegsYWkM6Redxs3LZFRNdcHPl/brAOzE94jbLOq17X4UYiyvmPHfYL5/CV1R1oJ752fHYxYlnTllhBomt4vzJLfBHfaxs7FnUH8rDZS1FyeVdw4eyMjMp4WGatIKDoDKVNqtSHW7kY1t/dL00g/m6yxLzCiymwjkCDU7CWGjfuiiT/FhoAZHDsSykX9VRdmL7POLahahPtvZ0cVxvfCTtvM3LF/dXtszn1Fy45Nf3b5iBA/Zs8+/WyQYSdqwdeGjCtz6SUwPxn1VGFEzk+kvmrLdD7GM/+zJVXENwhIhqBiF9tXe6StrgGSZEnIVeMXVFgT/OxMGz7TqCWKfoTF38N1GQ5Ho8Ylf5XipqQFWkxYSDpij1zjVa+3ydERa/zjYDI4FGtOpyDtGGG4g==';
  const _INTEGRITY_HASH = 'd20c1639a959c0f3809ddcf01b56c79cc0d1880fb4b114db301b8a6568d6ae21';
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
