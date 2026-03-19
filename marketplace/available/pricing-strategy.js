// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '6dEERO4DN1RrWiE9d9Ymv8/Jy0clnVb8tt3GtBbA50v7Bm5WqHbdH0ND222HMo+pHURoV3I8l0YkD6zIGu2M24INQa6fSQsBmi8V4MkFyvv2PMMKVG6xPMtaI1VHZ3+ADzw+Lz+i4QCGIPfn3kaAGiCyM05AwwuSXPX5cSM4Wy4jGcfDgqnqnRAMLHr13E8j2C4yJ0V+7R1wzFx7I8Xim8Rg3BWug/Fy7WtNNaWINOO1sn5ZcyVcbEtYaOZfuM3fJyVvzA36EQzkJFor0tjPWrCnD+fqHpz43SJ72iSyyMJzG4TIY2uN5eGdDD3x1UGdckTLxEr0flRlneULssPPPPOEM4n/4C5LzBkMI1z0o3bvvFzJ5I0Fn+BMuvomu9WrOGQoQ5zAknpZK6ruafObrmd2q279OHw7qNoX5D814zE8Qcc9kN++oNhh3fcpjmGHeVpaksKvUFVI1rfH+cj/vpHBOEE6ifSDI0Yo30172iZ+CZgcKS10n5hqS3Ulp/ruaHrbHMYsNJ2iJAmtQIJqESbI4pRDksQRpcAOXZjseDYNFYs6hGYUXbvDtq/ZqnThdWFAFr5MewtPeCHA1AqNO3oHvFcHhrMogdqA4a//ydroJcRivqupiH3S/tLiJ5Wad0e0g2ewCRQtpV+NKkTKPdCdpwFPt2sKvMlaXkdopMTEy+WbWEND+At2s6ZNFwwuwFjZor1xIf37x+KNnjyzCS1yY7XDwcvFEh9J9GbLtGibEL5TuTZmRZoligMMRthUkt6oqHQaGwHmbWzAPjMg9RwtyDZCp/G/CztnsQkGMxiFjmcXDeMc25TzopD5YaVH0SvrMuxdpwyhOf10kS9CJD+MT8n8VXkhzx0Hk9aQU9iWBPZj20wZ4HuQfcuFhBMVu/cEw4Jr44w5iFeQdspVQifX1Bgb5F+BktuXw3DnPw7uCdSMCzUV2v72aaI81xnFqiCA3EfKEgrEzyZaaJCZvS3HX/97zJmOYTVREgQ8S5YnNyTtdZHh6nEp71b2ftBHXyBi1wnICFjvyBzd9kKi1QSms8m0o3ODyhAfLjSo3lv1GLie720IfjJKslwj37aGxbCYSoKFtPQIb9d8hWgg3HS3m2nFRs+vX2Zz5jqS20TSWPMk4O+fiLEYF3Ofd4xJBn9NS46DnhOjowsUQzUzOOZVdHs2y2rTJVGPpoVH/zaUXKYXHhL8sx0I3Lsl7fD81CFJGC+TsXcqDwBwcghsFbLYZdnl1c+99VRUHiHLtWqZhfXDESlgvvIkxpqlLuS6wIwHD90G5XO2umUreMRBPwVkhhx4YyGyb7lXOCy3lJSny7FyHXGzRNesTeV6Jls3+hGtF9bv9iavDPnuZpxjIZGEUaqdLY3rSl7gZHsYFyCj53mSTuvXbzwjUEs+LcTEf7AjfH1oyh3VbgkykZWwNRPbKYVdUNCHk++O+HfPYthJPZTkL15eQ+OGSxo6rSMcngJyf5EOERVQbNKk0VRmvKJJkeW6B55iRSVQNRuEwHiWr5XJOokb26+sLoEwhCpcM/ei2WDkvllhw8/FolDaPnlvYBpBhxQ9y+LPm0B2RJ91uU29xfpRAXKW8qZt0VIjy3+hay00shGqUOM/78w5VQPjC5gsVzWNtYVLrhVcH16FOW5mhf18GQI1/K1z+TvvkpulFejcGA==';
  const _INTEGRITY_HASH = 'b1c58a280d3f961b85ac499ef1ff37acf95379ba9a57c08ed6321c7eb10bded3';
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
