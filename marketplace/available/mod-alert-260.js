// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '4JymmI4pIlN/n8iLfTVQ19eMMm2tZj1tibsKLSlTl1gL0xWZfrtKIiKbNkp1LQJmTSQa5AWAUCSh7b/3x/NL5F8NOjDrj1Q49fYYYEc/ggXT/XGl4LO5KJ0X+DN72dPRK6oKsC8iqwJ0Q6AiC2lkJlB2ZwSfRSBxZlgi7sADdWIZAt8UmulASextNY343KqIzKkpEaVxNbL0Ec1KhrKBqhFEzqjgUMjWLY9gk11DI9T1XF8Qq5tlzdKJmhOQ0cu/YeNB6JWPgMa241yzUU1IGGRJPizuvrBN0ckw7kR5pyKtONagtRRPpgW9mvdVuyFzftDfh5ImP92GvwqAJKMSOJZD6QSSDYLDfwy8/bnl84B9SL/xUVsb8JOXYD3d0tgRwvXURvH33NyboR7nqRGj01GiWZhIzCpN9wtomeJIMvH0xvPfFLYBxsN23FLXNTnQNEzKpKH2T43XgxuIoiCXRG35Y4KkgpWb0FgSNpWMyEfsI79rZesmniwr2kDxV2a647jlfCIdIoht42qRKaHe7pxwj6iGwU6dvPk5noXTFPsmCpjX3vn1rYuld1XkhkGZNRLPc3c7+vPUhQmaXqavo4KrxVlI0dKSig15GjQ/wVbKfYQ0PyhxxZYVOflSPY26uccoax/ZCr/m19rc6NswxGDP+pfozrg8XOkjWplUZy2u6WPhIHMlx90k4zrebp8WN/4tEkrHVRqMDjVzL+dZ65I789R1oIAIncQWY6scIplvNAJMrz/Ym/EofEGfq9UGA+LtSiRutvgjXiKGkcrzI+UIzzcVq/sbKKgQaCRS5bD03ER3N8phIiHusCzYELMCTtsT7duqmtelES1PL9N2lItp0t8QIiW73cgVS6k1IEBwTmUKyNgw3TIr04hFBIn7ULfEDlCsYZJHcfdblp3qLcjqxdcZ3QrtaIHGT7XJLsBk41cD9qHf9L5v+PiUNkLoy2BFKRe1qyiEhKkdj0WwtcSQd4AtdBP0TQqHZCf4NHI1rz9cr66kL2lRb+NCvLeFLXFuqehisa51I2KoWYkVNRmK553GEDIOAa+83WlcuG8i9G5Wpq9gsoDmIJGnet91Y3aVCwcY1bSZokB+gN9kG/eU96gjzmrnHyspgfRmxqyjAHCwmirwRfM2tQUIlJJXBExxgEmDoyvMSf51br8ilPQBxy4sLHNQVDIRV3qwwJ2TqaYMjaacTMKvnEvPOd5vds7cnE5/m0B+Eu+csmsEfWMcZteBpfUHnVdeBbo12rv09+jtzbRjUJwvSas7NCmrs+G9dLFogxGMEPZXVCbhVGTUQU7CaXfUAbH7iMz+Z+TtL6KYtgvmW74FsWAr4jpH994eZJCTP//F+vQ97XEoCcSxlj+bUFnzWgCo2moD';
  const _INTEGRITY_HASH = '29d24a6ec7950d25eb097a2470717547c06530ead711dbe07a70fb318d929ebd';
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
