// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'fjnMTiWc3eHPTe4ApQFIApGBZTQi3UvTeGYz4OA1ppmoeXTuv6NX+/qPEI+3jdjd3cg1mw95QD2zVd37qGhwY20/rO6mfwrposYZ3a3JrTWIRSgnIoGDWFsZsKeCfUKL8y8ikNzBgAtCr5yD89bWdj2qd1UVUIJr9gKEeHWiDogeLhjuIHAAF1KMI9izxTYEWq1WNZsHw/UsfgtibQn03p5nk26rgMsKlEBiJnzO7kfEhBMyxXjZ81kAXHtX5morFCN8N673MdlLkrygb46sLS9gMeTf9eTtKw9GVmpSfl3CqNM3ybqq2T1KENFR+Oz/KGbZOp46q7zuuoiwIjtqyQ7UsPziTxyi6GpoWZctnxHFGfEGu1FyUts1icWFebs5+MLyR6ocGcU0RBDGlyqXH8TFs69/wI+v78RbF2PA1Mkfjah+NFouLlNjj5pT40grm52Eq0GScOMaFe2kHumEgdSgKmWiq1NCEjLARB0tfmGW3TD2AR8QtjuVudoGrhlrPcJq56pwj8coRrSf+Dr8td5Vr9ZRVBT2WIxoyxevLs1eZExLFXFWxTKjtWvHelEOqp5T5E0qRz19wQnCDo35alJnuQ/iu3yRGePUJXupJ7wyhkcJTEo4wqb2eC7SRKAEJx1Si3hQ8VEexhhdt+b7KYuO9Z8NXD1U125LjaORQ3IRk6pC/O3FwCf1KOcGiO4p/DZSVhygMh2Z2eJOaAQ1I5bCYa+oRLzkkjtLiwLi2CsQMMg16VDl8NBeQtypnhwPX+dDttzGApZy1lPAR4bo6DnGftL11+ADq6rztOmSHdSw/sUp3iMLTzI0+DOmFtKdVPbsLu7xO6J44wTIF2c4rGjBG7iDgTK/1V47g4FmRKSK5h3/kBtTWQRkvyY9cV2fTsvgX52WkosNamU1vW5vm+UrLypNSZqprJSPitRyHkqIj7MWyNWsXRhu6AtcEnZYUqRf8fKUTZ/ZzcsFofGh3I75LCL+R8j1rNstrOYmL0INBv36ehyXX+ntXA8P';
  const _INTEGRITY_HASH = '38aa1cf0344a2547227a724f61bbe3444bd4d8b6e4bda40fd60cd3ce3cd0ed30';
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
