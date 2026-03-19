// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '5Kfa9ELr1SK1aL+Ekv+d3gyqLsa7bnFxVBlYIqdHJa09o5iumsmp/elTZqsubv6l4Ujvtn/uBbKj3f9uFWxHknDV8j+rFj/WsgIFy1VrWh1rewJt5+RJicajKoE1FCTcU26KOs7uGJCp8tTUPnJf5v92J0UsbpCcZ9PVDZTJa+tLo6jKSQvMCTAimgbVDK00i/6h830IvIIdCIrRRBolEOnYNbXo0s7vrzBl2gB1XUrgWRfbSkXiYcB6vUPd19VhMZUItbrJO5Ezpd30VXrz6yjqLbZKUNN6tqaO1BhXq22Na/XqQkoqdeMgnbPVsWFpMEj/NfAp4gZswBqdtOW2iXvZsq28nKrDBik/Xypz6KeQTfWHCI98/9Oj57cAI1qN65zbXrr5gHeo4IXQLJMZa9dKeqTebQOFrlVauJrGc3kjtr3ZpBDmO5XL5VY7Xffvc1N0gPoTQqAygF/50XkH0rAeqAW1seWlLmQQFp9H35KtiLBvnN8BmY/iiP3VRv2y0zUEVToudeg3mpjWrrIcj7MvlYwOxhQeOsAquAqTXNL9xeZf5YPaWFqrMQHgL9cSHBtJ5TtrvBlMYF55TNJ9OfovD1k/Smavxsj6OiDB3qCXPDIuvoRyCK84HhccPImrewrJ7nYVCJqimz0X2na5NcBrnJhTzPXYhibK4qNC3BQ4DiwOA/yotObH6XDAhLcg+2yldxIYe1QNR9mcCEbhKXcZgVLF7A3uBNYVqBYnOypCFJ3bc7rS29U22/6jFu8PpnCUN9CuPew61NO2aUBEEXTufIVG5fcsL4Xy8xcYsfzzYoFS7mvPPuC0enzys8DaxgaYVObfg68HGr3UZfeuRT1JA9ahs1o7o3Oj2aAht9L62afN7UZBHloOpCTti3v1SHzjlxwyySCPE5RUDdB4z1hpFcArPB8XQ7qonPwVK2GIeJDlcmXnOS3rlRINy5YsFiEhs/WrPnOML1g0SVtexUGPNDxU8zdnztwMwP96iGJQvBoDni2wdQcuzIyUzWBdIsVFW+JfjKgzfdL7LuDV/J3PO2Ss90rhhpMO4ZaKU2cPadvwCP6+udoNBJLgNsGR98vfwVQ6+nvhNQVpx7vv9ohxq4Acg6M0NV0J2m0eT99KqezCquSr6MldM4A1AAau1rJFlnwd3jw4KzVsA4M8AhpAIgKwG8sfYMsHv2dY7pV3boSxMwT3pzbWT+N2YuAMVainDJzLR6kl3MsUhU3Y67/xH/i4t6uugyjmcqVhV/nsM6UjF6yxRCyEuXrzTu/u7zNfKu2Wv2gCviduLzCj+lgn95rYSQcONaiMoTs6FDNmjgaz3Ht51SCx8iLlNnQyCm7YPxeGRhwoWKhNiS/hisa3zGyGlZUrLr2gBswmmhnYgCcOBbhdxorJPor6ZVOkVTABk01HliH32oufNSZw8EcbULCImlKhVuezqcRt64x6ipAQdy/S99t0cxtVE9MELZvM/rehuQt19fvKrd81g6SI7qR9LnuzD2ovIqyEcyrBvLjxLa5Tx6g1+wAkAQQqCGEPdFVju+N6nJTv0btYaweUkyBALa8wpXUWxs/5tvwNN2RfC4EFdC1lmThGU0dvZVi1UgCUBp2UnoCTMAWXvgBJnxoARyIORGRWXwuvhcKX6uUJrk6A0mOd8jGbRptqsnJkoI2q+xmXNgWNZXURo20AReXkcaJMB46UzOV6E4miOAJmJhDeel3ihtxLkCA76I/f5EDT/phlhQcHbG47uOBqBwVhekqNkkm03dJk3hKnclDFjzOJ+GVCogWdEikVWUe/8bNoQSOFwhZZVSY2IiQgfjlyVHftrNyfMhJ/Te/f6epd+Py1SVzC1Ln8n6ukZayApvbGh3SpaRd84MFJV8O96GJSiFvzOq8EMewiIr/+6jQmOORDYKHqNdW/cExZBgSdRRRww65Pc5sANn7rCZHRqbkdU6BE';
  const _INTEGRITY_HASH = '5e6c8cc31063bf77f500cfdffcfc286e38cc57d446f8bef6e05c9991931a886e';
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
