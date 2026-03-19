// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'vWeybl3wbkHU6rABPKB0uisxEF2gVtTM+6c7vdq5AiyFrffq1OTF3l/nUVwyW8quWtviNIFUAJVUZ7g1lvPlGixeqyhN/0jI3C4UIluqG2qvgGUmVGQ58B7tC8NLGestsoeGiQD/jHuxBitvMvunzYX1FU4cRN2/vCLxxV++C0H/yW2yfxvuaegsEgGnvqxc1VA5P1OAW88jAeTTRA2YqwYXQve1Cjd6VBkgNMfYkeC1Hfa+va5G767ys8Du9kzi51AnIn7EfgdgCY60eRFcEMrc7wEEe5VaRKKJZ0WCvQHfqPV6E7MOZSMka8SBx3jjxXm6ckv21tR3jDxbPD1r0Wi6CqcOrYeB/qre/cqI0ah0sLVY5WiZ6IlQvwvtQ+t0KiJKi1Q2BwQZpUkIEAB7CutSOgmH+fz5B5Tr7pDQARTjkZ60mlc2CUdhXQDeLIXODLGxZEfr5eDQ1AJW1G6QOEAsDQqmydPudpxi71DfRn/2qGtXUEhw8jH246nslmUg3Ax61RkwljmhmLcCZov0v48Rokn8d3QN3lhsJurueL/K7+39L2OwYMAxmmXvaRzp2Ob9+Tf/ZeWgLl0wEBvxcaS6h2bP/ygkLI04r1+olOTaakPOn7lm9b5CPeNMSDwWTPnQSIU08I9VslpXLoK9cxZd7T0Xm7l8KiWWAZZDjIx/eEEZoOG+qg6so1iILoOdHQ4PGcEkbSN3D5nSqDTMapwMnXyS1ClDcK4XJeG93fM5hQit4zYVx9GtbaL8ztE6JoWdO6lIF6VL4J0fsqOFK7fvt0mF8Tx7I6E2LhhngIt+XlBChpFSOLOb5CYsBXb/Sb5TVoO15CylZvqmNcLJxOygBHiA1m/MZ8Zb0XY4YU8wJu61p2P8wp/szP/yNJohzuCHLCBrzn+zinyO1LfXggZ+GvhoBgNTMI0dcYV5hmWHPDpyroKl793PE+mJL0qVnOHUmGVRnRKSC5IjDTeA5YbE24q/BZF68CGPuGM3LNqoL1t/jbPjE3A5Q26kp7iB01wkHlSgv5NrAv9uAyH8AvH+PYodZBPU/M6yO5NZHCVj2TDwS8kC4vss3LX0GkGtZvnwfW8tBv3b8bioy0ZQghTkQHnEs/nN2yLfaU0rz8KMrgtN8y6xvK81xgZ584Kczn3iFBcwTiFvP1txYZOPrQ4V31M4OxWFPJx+O8Gbdm5SUyUuXatbSkKE0Sy4Ybs7kS5QWw==';
  const _INTEGRITY_HASH = 'b9d94551dcbbeb134cc34467229c245b0473981ceab92152e5686113ce251d27';
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
