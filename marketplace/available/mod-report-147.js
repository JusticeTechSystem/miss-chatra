// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'GHCqUMMuu+M6JQoo98x4aL6gyBgsW71wyAXCuzhQhSVyGlxPgmyAr3mt9uWCeKmfOhz+R1hWqoF8lMwDO2tLuV9PTuU7a/to2yo09gl5oWlKf0/uPNyOYXM7DbS0mJiziL/fDtw5g1JKoteW7AxfjoYNltZY7QvWY7tm+f5O5XwpX2ITFb6kbLEgK0y5uQ4BNOXdOo8N/PSzjR+cudocyM+6wYyr/jmiG5HxzR5a2iaVFbraX+mgFsKhs4Ii4taAcGO/0dNAJxNeFvhtbaQjpP3hQthu8YrYra/oHyBZ2Gi1IwbBz/0pCyTaIVZCWy6Oos6dF7p1+/evniiZtKAxxrmZppG5Qn5IWBurxaM0k/4wsDB9om37P0g+KzDQ/AF7gOsShwx+ttH9lDlbreVfy4Zy001q0LpPVxp57pLE2nAMXJ21xDoXjmcFz3vcyKo5euoSIXC1oKsmNi/8+JuKIujn/HG3VdUIGq7/49kVEjNbgXeKJyiA1ySIuA4RQgBQqP4uRUFkSwd1hWiZeqQDzs3lyv0X7Zsxw0wZ83D0vVfRJnQuc2LRK5elbmjn+wG6edYi6xXwNpU2Mx1I4Z7pQWxkm99EC4ZMDK75tmH2bBAPspFBVK2DHlo9jPUHWG/QjnkiyrXKJIX7uvbq8w+Bm5r/iNy5kcpsa3Iv8tueEsBxjKjqISEryPbEIeKLkNXHByB9fscSY/quj0sdRYXSYIfR3rIBV1PbofCupdTyUaK4y7ZOAqA1BUrMhreZdmbS5zj4qtFDTNoFZHhy2Q0Mi9L8E8BNgwWIpkpRwbioO3Bu2QVH/uIQUDHEeYT8rJBY3LbW5UqvHD5z5e5gWaBCuQJVaCuccKb88yJVTQgj3H2CfLXpix/NrACiYhA/bqTKw4KLr2TmeqZE4XvPkzT0KS2L45jZGsA9aghVJ/2BkZWEd+IxgFcYbf/ZCJakv2dgwMg5cfUmZOFO4ynQyxC0YSnQmHrYelfH7/DDd+NT4BH8hSzJ3veqQyn8L9Kx7ZS/Ic3ouR9GdGCXGeqhETRIIx7EHnuH962miDYVmFiesVZgy+trG0K3QV5TTEkhM0WmML01SIUAcQcn3jxDYswSr2fI4wdsuA1/NQ1onQTEkPUqf++8YxJ8/LkPRAPADgWcwlyJDEZyHTA5zzUBNEkGVybyJ8gZYOIY3lbbIpi6lF7yIjWVFJLS8KfKJuB5ZugRF08MEhiIBoC8dbOczZCvkxkTgcCTX00mv9QLapS4mDV28Bn4Ra8WGOXYAOLLAIm2sa11f4aAU3royePxJjfOqbSCgQrKRHn0ou1gfAo5LX9HNGjifwQ9hfX7mfImRTRgoj3JDoBZVF6lAOKlktASXWQyQiajddlxSLhv5n3gko4H5DHMNuwkjA==';
  const _INTEGRITY_HASH = '96def1e35d70c55fb8a3e2c3185a05fc499ee43ed53ba1c0420a9dfd7b92de7d';
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
