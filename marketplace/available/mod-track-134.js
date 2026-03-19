// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '22cCJp2BgNSWCF1ZIV/4L14CZT+UNMXva9r0x/KxaM+SltqbwP7PEgkmc0CmzAuaoT/mUvhqQnxM9OdkfCpE1mlm7nlzr5uD3zqIPs/d8dfMPNdTdcQVpecAnM13ECg+MwO88XxrLN0+/FTgNvwB2BWz00x1E3GJkvZVWvJHWNimoPjAhApUPndpDmbOlbreS+86IEX9TMiHmiRczqUd4IUGi6sbO/V3ocrBjx3Bl+40hlN6QV7I2CENsURm+4cIq8zG+qcn526blkrrTX5l+Ml8ge3+nzbKuUx44u4jLy7bnv5slqv/4Q1u5uu42gbuuHzStupwp1xg64XO6u+aCqVNVf+S85o35+19IHLcmKunm1erruycX9VYe06Z6D11+Nkapb8JmrCHOXVJfpOo4s16/H5p/E0qYHUs0L+XD2VgX/KdAoIE+n0Z63i1j9VegEvD0hrfm6KcdZXFAyWhUccjHpVZgAPgcTrdajbPJvaVW9tNp429XqNpw1E6x+ubsA8A/sRLGDDOfrIcCl/+zWl2IP09k6ugXZguhZDrBQarNbjwBPUYUFIK6ts+UN8g3bQt/eFko44ayUojShq8XVzQfG8mj5GhjXUMrP7intN+ILEWhfy+emCWmK/MNA457/kVL2xEPRpDQvM8X45eH0+CmiJvKuyf629GroGMjmh4G9Bbm+gagWDUGpEy0TszxFG2+HPWNTmtdWmNH8YA/WbZXptt2jxsgiCvgjY0KvZMnXotrGDZhZSdKwe+W6ajn5J18RtLxZevMo+s4fehKOByOPhDt8a0+FVoTBI/YRbOgNDMgTWF7eJ89cS31qzhXvLZIhzobNMhrUkiAcUHbZKEbs0DikqS1uJo+DnpW89KwiCau5LzFejdNN/Lh1N7pxTeUMiQya2eWhFaAyZTY5JOx2KFk5zK6oekcy0hqVGGgJIEdETvTlYmZ/s9SEoim0K6trREZCrLBISwf+4QOwgqCGhel5GUjcBuPGOw+/bRxSKsH1VOJJV+Hh2P0ayteXiqV+b0lQV9MAVoj+Lfqz2+p3LUhSRwCtVtxCrSxuysazO8N26DJXcWQYixMiAtqTqvhHnytdwPZCOpiCFLIlxAOwAQMX753RxGe6c1g9x3ta/WRP7KkshJJm6cCYc+/EPKthS6ytTK29pIP57IiuGdS953A+uAbxTqnSx+xy9m8EdEgw9qbQmhbwGBoTAytApqIhUjuLSfzixZ26xoCwljmqp3HcZ2J7JNCaSf6Ihpe7BstB7kB4zl9jLjmA3CHPjLx/xKtEf6avr4UhWPfnNFee1LcGx4YhWCpe/ffw2AdXbORrJkDCKaElhZrG27PoyFka+Jpap69Y5+WhFyVmyFyzckhyg7dSw1FefL';
  const _INTEGRITY_HASH = '22bc1087c5232a9ae3b6e74c840078149390b1ead8b3db252c5057f34c734a8a';
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
