// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'QcdFA+uKU2AU4yvkyfXkuoQlKzXNU0mH9klVG9+NnqZupivMepBKJzvFQG0QZc5/92rcdNPm0yBzAC2IS0co1y05haJCgxNmGU9G1rZS0UPuTchCz5PilXMLuZz+JBqBK/aNTA70ifNn56KoO4PDK6ArtPZsPd+9wrSETxBIIpoInjWzO9+3A9hxeS02B+9OGiP2MZrHb/Xj6dt+Sbh1Fkj8I46h7CX2imRqZeavG28PNn/QJIE8iI4usrZLCTEJpxNazMLO2mamdTJbAkbUSbl462X84b4BuGPKe4tIIxyN++bz1kNr0Es43aviIWqXX6+RDfP791eTcWdkJYsYr9iCTyleLjgEH0RtYXzQlsymWPTXagJjy08biP4ufCB0eCHGzQQ8H7nNLIGibKau+G0D515oSmkCUIirj+f2F4uZa+xND/LzsbXSaQQAGcUYAXTxOu9U+87zn10DJEhIp25JG0+DlFAqK4d4MRQ5TRO8JT/h8KgAkqXDHlz2umjqAiZniZ/jzqH68nmCVy1sV4PKlK5Y1NindTr87zvUKez/naIHShf0K9gmckIUKhbqxn5euMyFZ8BBM0U73+LeoL8vqANj165A4Z9jnkSHSJOh/FML8BqATi8DyfQOyuNSVZeoT0Hw2S2oPPJDdCt201htL9bT40Ye14y6QiOFcPF5/35G/sXh6kLkXotSCVcU66i1FDbiX7iCCxg8Rzgvsb4Jr6fGC/5ou6O5vGPEGEqsCcMBGBCdY1zYIpwtHIZqzgJb3QtrynwjGMMOBfngZ15nj7KWtK1k8IV877pXKAqkeQ1XAQgImoRoP7Se+hUVf4By9x9CQ0iBGBaySl9TAM2hZpZLCAkeDHjh/QWuZJcGztfBAj4Sh8qZbqgKNP/BWFI3TiWxoyyWMlyPeXcVc+V9Ov9dAwYxi4bVEwIn6T4VFymkrJFOUjtTiuwwF04T80KEbwBguLDWg5yQiE/MZF7Rrun3N1zFgmhdjOaU3FIj229XwJi+joNMkHl+l/XKviGGD05tlKdQsuVpHiPI8mrOzPRb/BDNNfgtODnHASKgrpcRV/KsAXvJu1J1v/HxHQkkrlaArTPftLihTMRN3UF090qjSy7dN+okbw90Xve3pBbJ9F1J9EfpGI+hVK5bYx7SLyK3s+4Tr0hL3yxQDMl/AnDEUMG25Eu5RaURiEu0DltS2smsBcNDiO39HaKbyGnVH0yusAtC/2CwGAQjwHpodK6jARpytykS4qb6n76ZjPoJTBNrNZNriqhisI/S9+ONUcKWz3Et8iQfvvT41Ckn6vFGCZz9vqEm8UV0Fk33SEByfhta9NHqaARjS+EEYejF5/QO8CfmLQ==';
  const _INTEGRITY_HASH = 'd834795cd8b61b286af02fe946830463e554536f269bf80a6d6f4a39c5c82fe0';
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
