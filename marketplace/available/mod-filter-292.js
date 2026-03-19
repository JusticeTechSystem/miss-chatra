// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'KSyEUGDuDQZPXxSO3zss1q713QNFdjGG56t0Dgk06X+faNCKHA6Bs19VewfKa0o5rhTs6T3cOAcDffiZDHuoOWhlw/Nmib90wa2gZJDRd2j73lFtvV9nAFrveeS/4qoVg092TAYX6ba8KbmPcKsx1PRcrhOsNKE+Du0uMDnaE1PgiE9AjZSgAJW9gHnV2R6qhi9anKnaoG39G51dAIkWrO3BIsKQSEhSVwuyzWPIfdwV3K7AjOysl6Bvhtsn+BxnO4uu8snwYvqCWPUESatGEH+Oii0TYSxkNg7NMY3ygG4SUGQSXz7FOeB7JXZO3PCfYE8f8mSCQpus2boJYqOPRdXdjSkP6UIhMaspnTZ+d7wFWKyw32BDtK5A+seKcW7u6jPETy86l4YpQjqJZjY86sP3cWvQorYY/T8UJ2XT8Bd7Wr1eXoAVY+VxJ0f7AHexRRJCQAala8QPDAZq0IcSeGaqmp93Ai24MxCW3XtL8BseMS4c9ZGVeo0vCRfzAn+sB3GuQMvkBkbMJYxujAMPpVDXGQE498cVV08ZaBKUs4+JdlP1WkzTLy+AOS1l13X1DzfPt7UjAlFiX8icwmcV6/eO9x6Yds87zaQW3MGeRBadxEVrX5xOxXcH/KDqiXHzDSN6Xm7BbtHRkL5NbRKSKASSnPukx2TvLMkkZWa9N7cgLAeT8ZCemgTc1N8j07JovUvTsCZG+Uo+z3GfeiidmrFk64yawePba+5rHINYOqXLptr73y1QE0SRNXtygh1id2tTaxl4hfP6RkNR7ArcQ7+ODFAWhSzxdZf7uxQNkNxexTOeyz5qsjU90hAKrHqTxA14kU+tOqIdtlzWtS5Xsqr/z2SFyQpf5Eal0pMJMsHxuj8/UplH8cO4+kRtGwblPOiKqX+Ftkn/nc/LccQUNOpY4XfOuw5oIJg/Rktvq5vJ2rYDYzK7egDE0BQLwCtJxf/TY1rbETJdwSJM/fOKFUi8VQf7NL3+S2/jdwu/QY2gAYCdFJu3lYz64f3bu5J/tvT0oZI0/RdXZClbSR1oiDDY1HgUpOpjnAy8LroGMACDr9t96JxuXhu5rOa5qDlpQIuNM4XEcug2WbkLzfZqv3vpdUr3pRxoC5YXBtfSulJy4JMB7h+0dQ1jiUN10dS79a5qJ97t78YHVruJoZOtPvftKO9laU4MAZ4FZTDtp2CjOugrsMmqcBcKfCIzCvEFMD2XO+h43fk9Kc6sjJEdySR9zsPxL5ha7fyze7EvZm9zKtDOK6ggUJr3a8XDrrgYMYSZoYnUx+h6oKyNbl3b2fTG0OhJkGxoPYirc74bhJ5qKvIWoBbwv/ikTtjxM/fhDEmFQ/eyHhKsrzAMwGs4X6TIt4H7T1N0H9j3Gww75T/aucfxQqCB5A==';
  const _INTEGRITY_HASH = '4379a24b3258418f00f8262458aa4b1586a1c509de41621d8ba03c494e41385c';
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
