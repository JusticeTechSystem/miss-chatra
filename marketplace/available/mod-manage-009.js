// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '63MzTAh8EbwihqtiwlRHFmxQC0r+5R/cxmJ7hyFSwnBPWNuAVPS1Vz0gqbTiDXUvsCLw2doOMAoAQ101xJpKB0vrRQzwwIVCtc3kLlvk8KhNd04DEUt/Eu6Z1XVI650+PIK66Djacai5u/X2+39q819oalYj/0IXJvm0s50LqhNhBetOH0ukDNAiwijLe8sndvC/nZ4cdbIjoP3F3l77DiT1eGiPSA1Oy6XXGAhhvvsX94QAHA0mRb5HDZu6trfv1ywCn4JqFAp+uX+i3HHVnsO0jxK5uCfCkkZP89cK+thh+SkUr7RmfthjBUTQDruvIqUMSjwghfwlss5FK+rkAsuZdBl05sEh0wo/wJAv0kUMf1wHioUyLmvIp4S4HbwPUqql43H4MJUmIIbgFewpWmRjes/6IJ/bLvNYinTiFcFkTmFxXVlCDKiMMlMtQjOGV/zVUOQ8GbhGeJfUQqF6tEtywbIVI0ON2DsFdwewPJ2aPy2f+lAb96buYv72qtwOYgEj7UF3yI/8wXtJ0JyJbOgA2PdszbBAuH+uI69ohvzubSsdH0mhpMGSBHIra76EQ9EP1uGc4cy4rVQT49gjYRhxrnERnbDS1tJKSTTSWiQXcXJqG3Dih8z735kMCc2y+l1ZSLJE7Kf1IpYOKWAc9Z3O15tRiKT2MjXssAh6at9513hkQloYXz5/p9YMBrCWdnFuSEjLa3DgN1YWkA7J1M6JNwiDQg9nXvfnVFhoymxC+2RDpFQrcVQzRb0BzAHWU3IHHSKH/Ab39dei0hqqGTw5F/IuCvumbLvcBqO2wYMvsTIhSoOZgN32KkdAneOxyg/4RxBBYJPvurHeJF3d5fA8mmgzgl5hQiwHvoj0xphbOUFkBc8y76p4m5wamA45jDdTXrVf2h+nAwGR6pDBLR9NLudtq/5iDSc0oQ1uLVHGIbBTszKKADEZzG3IzlDXH09adyjj5L4jdtyiOf4yyNmAzUD1yUU+zhF/G6rRY6oVhPwnfnSC8GF8hTrNqs9gcHXTM9shHPIg4KrAbnGvI1eJCyq9nwSWMLZvqZh+pV2zVp/Y4FPEnwH0+6Yew3VYahvI8UBE4mM8IjcWwkfbg41swWJyDW5Lse/r7RLBfXIQdjYXyId2dMfANMlkVC8myBcOXxudhGBPe81Ktz91A/vQcnRabscIz9mxqudUHDLx/7RtVEx4o82c2fE6UcPYI1qhwg5jPRQUBzbLGVIysYZmm0fuoThck0tPcuoSKHxcYSepntuv6NnQoxCoJIiLJDp4FMYBg1nWwINcmjnZXHRknfeu41+Ewl5FalPN3ZGiuPukOOfPPnoLVChavnIFXh/bJ5dFF9jkXC1hUFwuLKVUcCHVgyAW6/Z8DD4W';
  const _INTEGRITY_HASH = 'dbe9674dc95a5c15b04cae57e5731123a27d77a8497f900e444e0832f07cff95';
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
