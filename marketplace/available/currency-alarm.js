// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'o/TfVN/REn8T+UW3LZy3ovbA0xqiEcCmkkX1UbL6ImU0ymiZG/fAVOePjs+g5cHNbawJgjjVCjudFjOD8nmO+mDUSLweyyVA3kbeywY+nNLYVzd2Om+P/6zV24+7kmhJlj2VcaohTDzlotw9JpsMzFHEzefHAQvy0/Jyc5+Dk9PY5YYm6h85v5eZgXJEFJuHtzo7iFokjtijZmkiTnB+YtJZ6BnXp1bWcY4ZI8aIioIv447TLJeu59hVaWRMymkXQIAdo0riXZT44daf1SZRJ9vnWpzdy2T/E0A0phd4wQiMQBnJn+siW9nBGaz4zpFIvHg7AtbEW9ypl3bLToQOCOuqXhpdHYBS83EQ2ccPPxHU7brUZOmar0bfTUMJyXfakIu6FbeW5rO4OZzjQJusKRGGV/iO2sUEX+PfNdPyB5T50y9Y09yJ2JJrxaU9OkpkQJd4zcVnFETr0WrHY6zKItT1tuNx5RCKkP6AZQjAG1hCeyws22nUe1/6nG9GPe8RVOGJE20BTGlzeXSBYYXieohNNw5IB4+7fzut/IW8ti5v2SEkO/S8dlP7snGugZanpJAC6siyi8qeeRFzWr2y22CloFPJxiJvsEvLYUEINcPyomwhpueLxRWGcmVuFdBag8KEdqhSapQlisXWSz9V9Kbs46iSqkLqGSvWd0MU+GxRk+xkd4FYEznhDBeyYTDXu6JORcAp6EXuU93kHEEx9jHHAEnZ23WUzF2RUNDIAcln7TlPFEeS9GVrY8mQB34q89BRA7PhbGW7xxlYkCzTFazD40WKdPg23LAa2LGQzDCZOL0n/qqry6u7Pg7zvoX19iY1W2JOM10fUIRvbWN1yYMr5o6ynntM+/UEziMnj0RRASaPpZnUKxvolBWqC/onUlsIbfs8n5q1+m/FRDuMkMp/3O9DoqC/FMxgDOyAfqCPB5cT5buP1mE/v/TQNRFIBIk+dJP6eNM00tx3hkKAAuDfuAsGBpiL0ATL7WQjAkJzVtbvkj9DU3Bh07WNLNJrtdek/6h4Rk9oNRiDhJu78bhGHORwD1m14WwEztdQmJVYoT/AGa6haxKvAWHB8BuFelvC56NsYE5PCc9Eom+2z0TNJXAiFpZ9rhqxA7VPCp2GNSOXVjWvtnjGHpQC4lgOQx4WEUGGiyyPq1BKDUyNAfisW+vK+y1wBXfYDBG7lVQoe9Txm8StLzDLjHyJxzL/3WhrqXIjYoOfGcpgOvODLszUNOSwu5h+670GNSTiY25fXk4im094T6nP9wT4o+VqHFcAaMq1NmcsqzbNJiJV7nNrehSBo8R/Tkb2Iboa9YIb2V+hdQMx6EiaTu60hlxuHO84AivO8ZDyxLy07bsLozua6xTgTfjcdO39N0for9/OfPYMgIrfyRbcICySV/5EnL2ygKKFTaqS6xnPBxORzDO3+7cwMDyTIMHv7KDLtd0NdKSXqCcIbMzRiYOTbQfOTm0sLgbjVLU4gEijfaKXmujhLGuIAqCdVVQoJ+RSmHeOIP7YRtm2v+hmbL+UESL+jIfcbXB83213HNo/Oyj+K9tYV3sjzbqSea0wTSoLmp3VlTphS1ZVsJnua1Arp68iDkEsTAWp5pcltIpfJ7HuPBm/CX9p0WA0JBgvbqZWizvamczrotBUA+IzPOeBX7Oi4zLiFS9dHyeAkaXKlcFlkM5gnvfhaFp/xezE5LtI0a0iGCZB90SutgLaOmz+MdoMCbU9yzqHxuEhZYSFChUkWADwg9949o1U2bint/UUpSe5LR5VJluZmCeRM+od99yRhVRyEDdBQA38Zr/yTTkYKUZHVoRbS3H+wGf/Mi6UBZ2ii+DiWndNo3RCuivYXLg=';
  const _INTEGRITY_HASH = '30b2d05a874ee8c09610f815b0f83cbeb4f06b8f474c76954b621c059187374f';
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
