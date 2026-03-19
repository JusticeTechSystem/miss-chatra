// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:20:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'h/Hou8NaRe8wdTZG39aF3jzX5RRLxyejC7DvqrIxqv96uF3awXYyTquwfBavbOpGXt3bRtDIyzj9eLYpVwTo+ulSlT7Bdcrdo7RFfdjtnkCyPVHHkMSVVFWvf959DY59HI0Vuy5wdcYWPXrxnFxPaXujERKBWtHNzc7qcEbzc6jo+UNWZHoeoY+cXScSHmBzxeh2mPfXXjdIHwZQS4nu3xjXK8PYGbdppvQNElU5uUecpMFDuxMGL5aN7Vnu1TmMRFe9NAoCA+12TgrL4MUhPGs3bJXZYICo+nOewXSiURODfd0EzJgTjlKubFNZLGtOzsEbUxnhDF4cPO4L4sOwcT04s7poM8Mi+jWmJGTiJaToKAU07e8/EeUEEmXQ6MhU0l1QipPcFTflerqDD1lYsmMC47MZmN0LpReRLaQBFpTkUVBvWb4U6ziSpsoPRy8+juqGwkwayOiA1W2IlWL2eXxYRstQs+flh1v28sA94eMwMv4VYVftFx9xk4vRaEE3j7lOvf5qzn5rUqUBW/T6lHB7lVs5qBtX8N02GiwPH2svWQMBEo3n0+fnt9wzBZUEigYzqvpRYUZ9UhqMYMd+03Gpjba5nuNWiEhjdTDC2o2frfPkDTWoeC33NxtVOVPp7VSElX5EA+WVEy3wCZ12sqtVqa3esvktQqWSGlG/0PLbc5mYiPnTYmb3tSOYMH177fMq7Kt+rJrJYmQCR9ytG+luZUtXzxGyj4RKWKfot1i5KbZ8phv+XbkdnB0x16cDUBlnafa7aPtUe4DonIq2AWiyLdWYVreWrcZZl8TuU8v9pyOFwr7Acfi5TaewYFhbkUcWL3z3c7DVXp/nYEVOS+w1Zf5CWqqiajNcXV6fbNM8oXzspDVSRuGILAfjdM85BSSaM/Q6C92XiyvD+GOx0zltvR23tjpdvvIqm8TcUMIQF3egj1z6+puhWf+h96FWrjfjKV4yD/MdI3kzVgdQncfp/WQH8gbJBEDLRKG6iGoxVubbQ6s=';
  const _INTEGRITY_HASH = '5dd5b012951be15a0184b73fa45c71278399dc8c15b6715a63074d9f9b6058e0';
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
