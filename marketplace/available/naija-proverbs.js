// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'n91Ikso3WyGqepjHCOwbRR2bz/FE0+oSHqAkCCiTpUtLq9vykSrL3DG62CoQXft9tWzqgha7H2Q89H28WMPv4zuL1E2/53d8ypXH5ZSUGTuXlS43Wiw8X1hg+/Hw+g9TbjFtfLMiTiSDbiiYgWn+baYrtlDgAHu0PTGJbqlUOFM+ATjrPXk7jiouW4kAcfcd0OfgxDrRdzmN5Te82zT8z0u/hJKm1grxBwXY02lGEFkiAkMflO9tcIJygCAGDAUt1QVTYyroZNMQEWS4sVqpY6pN0c1aU9BMaUymds1SenbvBOCD7liLEbYqE4UkIAxIlNCoppsZUausJewk4tpc+MO5Gp6g7xpcHG5+Vt1KWNAzlAM1mEFzHhRTkbhsrMqMnMHskjldCptmo4QKTaKMp+o0k2UnsbJZOcT2EFMV0FVYJToJG4gwAIu/BJiJbubm8ghMyBnJvxsHmMiV6Jat34k+Kr+8OPe6bRaB8KmVFwJlbzlsEom895ZZU0PDy6zePZHRpE8Ki8yeWFJH4wpJrdh/YrVDvnFOPvILlq+yq+/7I3by3t0hT5ZI/bMQPrnOMRqrhS42u36Tl7lXi+80A/iAyRfKCfGMD5UgV9ogawepiVgQmPUak7z0EZ+h+n9MMXBFvMltJUzshin1rW0b07qQdcPGNnGN0lmfXsWGHhWyINBtT7hoywJ26FYzmaKEylX2TqHavGU5hmTqchmDGIefNRurceN99XVKiG/Z8L2pJV32nFW89lyvIqVmNMiudWAooYsbXuW7ksglLs4Ow5Zsg0CC5u161qCUFlpygKsxNJU0oEdJsKWQorAhjcfu9EgQyLm2LI0E685FYLMNGBdxTRPrTve5i/3zxqi1T0CcfCSc/EVT36gatYcJft4ZCnDFP/HgqlFUwUC6xk9+MyB/HaQZYkG+od9ad0+fO1/LALledBgXbuD2Rql37XRWiQ3iQGVa4Vm3/ps6g6Y2Qzvu5blYMhLfH/Tj66vzBPcY8ftXvIv2RVRVBlnIQ/XJ7zoX7sH/bE/fQtFmJsOXbXYZklhwRhwhkrEPaZgWH8pNh7K4gTKSwScPwSd/KXIzy2KTgNxb7TdwYLPAO658PewcNhLdowpV4AgVJqJeeQoychhsSa1aiBbKpOlAnJySA6B2CsGoyZefkSqfd1GsZ8CbS8Q7e15xdAm7DRk2EHTuY+LmZA6V98q2Ed9ApU3lqRFkWcb7lSWGvlH02WhPSW/a+nPhwpZMMYiptyvNz6YMYntfgBjdki8lMBUYwxcDyPr9270G3NoLQOqcSIb8Qb9F77RxLikSywEi3ZmdBO7cIyNc1C4oGrHCP9y4VpzwUeY3fRXkq5MaiL+mSGCZ+FxWf9OqoQ51XomeSUA15B4bxc6K8v1Zkd7SlyJAHfn+gFiukgARbvWM9crLlju7YJqLPYZjW2/pEyUfNqES7BvZUOpjPK55EVp7mxtrJbigqJPfq8h8KQAwBszGPErS0lwpZpg5/fHo10fq1B11IQDYlOVRGLF5B+F5GvcqZ3ZUcxXykzD6SZTP8dsHoVUEC3qD+5yJikgqr3oVc8p72wujJRRsRLePxZq9asnHB8smi6X03TJlHgkxA42CPxaC/s57IZ/OTL9WYHiIoTYQL+hqrN/K+vLBqtLB6DpdlhR+OcKy8aBpzmYvE5h8QkerbFtec3OGgHTxYg+bMvBm0TO0Y9Q6Ov8GmyTH';
  const _INTEGRITY_HASH = '9d9573c9a3a5ad47bc3c273d916fa53765e91c33ad57de69227ce595dd508837';
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
