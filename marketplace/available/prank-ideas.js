// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '8bsEcwt8H4+IapSVPpYZP8Fk62ofN1GTEedZlMEEBU67JnVYHIaCbVSbaRs6Hsklf7JcO4GXrlccnRnRWtPFiW5EuKAtOrGF0hR0Pxdg8qza141o39ckUQb8dFw8WY6WGql2ZUWo8kfPOej6BUdQ/MGeTIsui/3ev8vlTxGjmKE84RNfLvhiXbOVsv1iM7fIEWJc1EpiS8rBgwSsjrd6eyF+95aA/NMjz0Ywfxt1qFD5VbXTkBS7kMjFrrObuawMndZ/bZya7HmHYMMxsGq4zmQC5J4u4Z+nCTtcGdbfmJsV0A8waGDQin9G4Jvo02J+5N//V5X2jjTl3fx/ndil/QCvKYEtfxYWF+ndf2toduEtfKhPHT0U/VSrDKlbQ1REvdXXGno9pDzMXICXuoOM6Gp5bLcV0PzLhBRkk3Azes0CXqWVn4jcJPDv0rt7yjoDVuG9Qo68bWiiwymd7fPa1XiABk4wMhpOtXjJgdEAP2QlYcIKi4ufcfgpGQQp1wPPGhCD5SsVEP3GBSoAfANdfhBiRLdrZMhJQnsQbAJIhgRKtR1W0WYuXsR76KKZ8YK5Kxk3oiyGWrhBgFJi6leGiyLBa9qB4k5mLlQFEdUFG3pp0e7JP7xfa7Kk2MJxkeM2KVO1qF9RDy/Pd2l1kn4RHBxh5+Er0DbVIGHMY/zelR2z/mcGMNvP3S9STwuW2WeFPyyqSzr3UOe+nGVaNBZlGHhZX0eigTNAWneV8qNOUWqFHZad4EnPORlhC9teoMD7KqZ53MPRA9WScCLMqtjmR83YEBmdF8XxGaf57hrTWr6gSdJSTqLbn3LkBResqZgt2nFwJ9PwUmI4f6o6p29bdjeJOvl/GftZZ/YHzCMT4vb1byLCUKZSHJQTwtCpAwEXf6TsHlRIIqO3BRMqQd6f44UPSDJAAk6g0aTkZU3/1TJXa2a0FeGz7fc3GxcZ3WUM6oZIA6TCDl20cde/YLTFvYM/DjpL8+o1dZzjoLeFahBf2V+QYzu8YTxpENukolPkmwUST8ONeA+XPKe0XYIJvIeXwk1IGvF4aMwUnaVtXabVDWESK6el83SKf4IDFOmSbZQ0fePw0fw4Qv5vXQRc+GLuT//CaETlOsx/cNhyHMD/4nrkCiWBJkGqMGTQyhCV/sDesAAexwh2R1+iw9DAeuxCwMyDNSmSnZUX/0pQPIsLZd/VbOiVTy67JGkDECSF5AQrLfo7e/GgRKZY5lRvJqt9KR++dSyQgjP8sLIllGjK4/aS40sdOOyv0SwPd7FCRYqtkvLaIzcyCSiJy3ljKDa0ufqY8jM/TS+yP1SDF4EmRIr4TqLi+2sZA01R1R33v6rUL3u8rkhSTC+HLD5+wNA1MuR/W5fi91JF1rWRAeMvbvOISon+STwbebHz/wWGVpwiCTdIV9+o9KtL8tC6hOv+5dPEb/HL4McQwHTK5PwIJ8T/pNXDVL1DAwfDq84MJBcOi4N9RrZalWjYKZghp2QvEUkgXMbfQgWYOGVN6JKECcmuL2UrY18TXzlFAqkIGnpk8brRGkM=';
  const _INTEGRITY_HASH = 'e7d67d62bab0de768a91181d6d9803828af015c278b5d1a7e483640612e1cae0';
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
