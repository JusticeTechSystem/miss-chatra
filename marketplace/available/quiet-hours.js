// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '9iYjKxHtlEPhgkIzJQaXhVuS8UOmIjByFswnpkey503y8n2BOkZF9IcXIyRyx5y5AuLfjMtWhNjqOOPQwSzthRkaYhzOzlzNvuTTYTc+DyrkYmcIAjCFHKomAjAtNXLLCljGWOAs+pgaLK1SU+2yn+eIOC59MXU6BozrKLvwDSpV206pfrKJOex3LxQ0yviL+ZcoSc/YU5OFNCIWHHTCJrGbsn0UQLaYdeklPweMkSoIVaXQjIPAlMrMSdNzIKMyKGko1nFR7LYJ+CPRTRmlmz0bplgf0WsEeEsFgvT8sn9bn8i005vkhSdJ5gGw0PQIPswQVC/rVowZIS96F4LGxZNO+YkMvHCbB3AVxnZZDt4s6VYaydqigwteHduZsPnbSfkwInqzs3iDeShSgy+/yZfQxtXSUvoR3FN3rNUc/AYP+yW4kK88fyTm8jwtq9swxfz4a62fn9Y5tM5b4xmYt76vl77X9ggPfvY0ymwaocwdaCWC5DY0ZI2ErqUuxdjnjQVsx7B3bJDgzEuk8KDxImkv2Hd0nOIgKhN7D8E06RJPhTbEthuxwfggCHe5EHInw5dib/Fm0uuWXnXYC6F1zkLr8wVKwjK53yGF2ornkpUMpFvFK3uwR378GfYOh3ZpWInF7yXPqArnVP4GPbNjVmHh4IO2ulWYLYr7AsJMVDPCtHZ4GLBdZSQkUU5N/8BnF+CLWdU8MoL4ttjqZilS+QDCjiIm4sqdOUtiipdWUHt3wT4WgCEepmIZWMhdEzL9wsrcFdJOyeWfMXa7dIr4Oq/xvh/AjrvGpqz0ISA7eaLfK7tEpB/HMuRbPQu8y1ELxpnRY2uVHmP9sHqQ2Ei1pItmbgr4w9aITl+UFBYCU5gy8SPZq/gMyyfeLJGss0kdyhRpVMH4oOMkwbW7R6S2QG3H8eGNB+cSUvZ147ZkyZP70QnKxY3XBP6dNEUl1k2GHDVjMwhUFks3XeBJsklkpB17hrrUzQUQRER9Jpp6d2gmYxDUXBytNBGKB3pw8c6yxNaBHwQ0zb2/28sRYHeVskftRkw2dMK4+c/0uMISpJKpJ2nj9+KF8wcNFa079WnmO5et3f9x3+Ey2mGPyyR7UQdxW866ksRuyKJttUWWorTN4+qZGdHfsmvGFTxX9oiLXFDNsdrWMV2zCTZS4SkLpyKD35H4WlMUJ/NoUjbXqe6ZjjGRRC59rgOyyj6RAt/CBoQpAr45M5bGV/pFxQWU3Ax+Q+LZHOQGHOST3Sgwxl8NqnU/rM0c3rIdjOZb5RVhNE0yRBikomwD0KRvBDgSeA1AHBGSX7HgQGtO863DP19SX/LBOMcHxnKQ+lsPxjcj0rz/gsrorHGuKoGwClPmtqO4pqV5YGEvfT/8/dCcVJ/gTgMujL5tiFcqLsbnlAkXUfwU4YipgWYd+Tpyr46VLWKkO2rwOc3MvqSMN2wNsA9Ls2kzu+Vc3y2mHIsxg97uqh+2mO7m00jzCWpUFcDCkwbXM6RKReUdbH5kOofHlpXYRdJU2GUHWFxEx2nNIN2WbTbO0N2pvMM+NzNnj7CkpptEoAU+DM4riNXGxyWwkEaPj8P1yQSKYiVqM5b4/HLwwubANXsojVGrQ60YFcadtWsQINTnK5ChqYymTIpm99aJuFLXBJA+cuVYqKGq0IzH6HNeMzOhH/S1egryiOIttuMzdT6HoS5yA+aFFkAhrOSN';
  const _INTEGRITY_HASH = 'aaf8a487779bbea62c6a511d1da96def101bdc77065d3a16669abaf7e67125b1';
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
