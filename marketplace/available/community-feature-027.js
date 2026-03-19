// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'RDzGRUqmP6HPRu+VoULmYeJrw9BIAkRk2PDAs0Rn6aCON5wHq4Mc/SKGeYEPUR7Qv0WV7vPsBKQa+j8LEPHFp6/YG97fdOHh2+P+R0MRhOodqZ7g/apKPOuIJ9kjXvPvBcDpXcmkV7WvMzg7Q1L01mus+sbacSVhmYucoy0sWjBtCy3rvbCVtNsq1BzKx+NP2e6r5rdpLrSe5r8vOtW5WHjPhOdS5rNUWNaCtRh44lcssMBcI9fhrwvffdWvb1M95/V5BJZCb1WOwtqKzKWP9rSfDT0kHCHy7BL9VgxUe2Ecl2N9SyFtEzfwtgHaoG9mau9wPP5EzboVoBYfkbATM4V30Qb6HsK3bu3RlSPaJldAmyYerFusdq8bDnoz+1n5vY/63rfwl+/T13bMrFoM8JuTL91iNUfi2568vw2SM9Kx3iOYRR7D/ZsItCuPCaIAWvY1T8CVLsGmq2sdMMCDbW37v/dg/g432CUJn2zR9tawaVV+MasxNE1YLvdKyw6dnaBtnQo1O7K51TijOn1eO4I2BK5NI/7IBIjsTEKWzRs54OqFBnm73iXlA9jJZJL1XJCy80m/lzoYmps3zT/nnMzqNxSu7mW/dKtvNdFOAT66mkLeHORVSrgXJuPfHukHwDQpDL4mp8psPfrmtxn1y1joYESJv1N0kYEp8/Vb5zGbqvaMF2eSIRV/GGzcb3gVrhtULT+ELs85wnb3eWNXL9ikrlNshTsuiMOQdarMvg==';
  const _INTEGRITY_HASH = '54de8630833496569a2889b70c885e1759e0bcaf96452d0711463e559d9e28e1';
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
