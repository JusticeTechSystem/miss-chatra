// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'uv8WueyOd7yeSvVGj+sZcLyup4/DjpcjO9iB+/fXJOK6VKTwhOIkPZTOm4oWreauD/nUMotVKu+y4oHMwcLD1koXOwz/PvtUcEn0HEsgpGbKXJv503OoNw1lYcLWPtG7Uu9CkYWC5m2R0i57kdcNZDAGcsrorfyjcyTqD0wHjyLIGTt3k9XkcRIu6cdgWlEWeyQUKm3zBL6L+qhpL3ph/Tc8VP3sskUwwxhFfRSSphJdnXVrT6eHCn3+N2YmOaYW3r3j/nC0vTsuw/M6IwlAaoLKpqX6aVb4dIScLLebRYQdNTyPurcBcF+R70luZV32Yo+3jmb5CH/Zvx+C7OzTytETy20Mp/jbwDpPrJSXXaj2YkZ9r5l+IMkXUJFpuqP9tY7d5vAY+7PRYh+ZGBq8Wo0SY/WCHWPA9O5IXoU/yxV5w8UcT0tch9UEwWvbo+cnZ6k6743o87rJL5xIPRijuY8DqXtelEaZZvaxezx1Fh7lMx2Sh7D7NQ1OrIIqLIM6Xs53DY0bh4b+DNGfN/JT9xYt8XebK9P5gS9ayKDO0EOXK3ITkZDFHEekUD/sQX3CaqZ0mK73WYUhjM1k4dLp8VdLyF2Oc5hiY+1PPfML+6EbI824LopkrtS9Sg5yzcYCgUK9tBKcXUVmWNMMZ86ltnqkScjl0tQUez3M+SC0fTtrQcxdHeNrJLqS1sDjlWg49zA6fAbt+uKr+zwahbSZhjxZJlZmhJ26rd9EEGN1Ji/e0rrp+1DZ9xxjtsRGiQq3EL4ftICdXb/5zNAx/Xnt/ZBb4fuALsHOEQ5yAlq7r6Cl3DJgXx0pMFF8y4JX68bJDc17FMfTTBLT889YATT89NF+s8sdx0StpNo86d8WA9EHi814SaWWdY4CPhorur+i9sqS60FyWiYhbVfMivcEPekjph0kVK3BZYuKPRNh62mIhD9H4Bnojv6lT9rm80+HsCH8uuP1VjWKp7mUzAwXjHiswQIvFwKAWFVL4OFeCEiC7b/BcTxwGb7PSjFMpk+jUnIG/2l5emgCqhh//4AxxzlbUcYqtSx7jDwhIoXlVxVrJ9MlgKObzElwYyGb9kdYMl4LJecwArGLPVF5snL+8SbcXNKTno+USjxr/EcB7SGaN+x6XQGwcW8dAaxgy4/wA48R7mZ4P7sVJHF3ksnRown0TMma4OPWrTVddOThiQ+/H8GsSTP1Jg2855illZYLrUuKXOeGjINV1kUpKkIt1/6RcTJvhejyzqHerb/Ktpy5v1sua1LQ/r71kKaeqKnwWQthr1WuEaAfdqlbJ2dZB78Y0uMpH86oqh3Mm2sqSPeL3mhI3V0lHfPj+lUXQE5k3UDoJBiQKGXXDsQbNgg/f799pvuxA+fXHuY4wK1b';
  const _INTEGRITY_HASH = 'f5b605370aa1b4986f5491658d26fdbb1d0dad4eba087ae83ad4d7d7de16490e';
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
