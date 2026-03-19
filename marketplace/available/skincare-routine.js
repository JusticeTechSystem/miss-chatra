// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '7rIb6e5Wskas0+BiqHA8nnqOGZWxwxMfYXK86im5//Q1R/iuQ+dvqvDLVLtiok+IyDURbocVTmUdojaGNx9GQA+rC4j7wAKb0bAXJcXOXxoL8VnyucIDEf6Chg/saRaltAbDQf5T5MtvmLlocalj2WeFMDkYcHKUthzCxGwUFPWYXu5DHoAFXGeKNMa4t6vbUvnrQgTi77P+uoHdDvxgIx9uQAdNil6l6bTKDEbXnMQfqmYSL2gBglmP2qZMHMEOcy0JHQt6+2b0AR45FjZlnphCXDSPmGAh8vSCH0Xy90JJYdNUjSwsnvpk4w51fu3hbAhkRFv3uk0ddh5nazMR6sPKZGLwiL0pXF+dSnRHE8KqZ4KzxsW74q1kk4HFDFbQ0G0SWeM4roAuuVwueb9HC356iY9MJF5VeccPODTPB/Zjuqdx0ecgSqpdHGORAfOivquonp4wp1Mhz94fRhij6JmzuRANbwChqmeRLlsbIoFLuIfFpDgNO2oc1fJG8DDxLSKltYvyck6r1U0OrbWFnM6VUFAymrauWICMCeh9K7IHU8W0dYhyR6C5dIIqFyEy64D8z86sV+nwE51WHOz/PTZfL2cfxVlolsOPAT0OLrdN60TpwBgIP2x1yOl7nmCuZ38dr64PSGtkZ10vBcJ3pB5ftT9goE2kZVsRSosvoPlw9zg1ia3dAkfWtKGJcgilkKtP1Y/wv5NLTm5MFFhtbtmlrWm85T4lXB8s9s7hPtA5qqDjFJzyErDKrkjmVNP7C8OJonbiNbDy1j8DewiJq3CvnBRgNar+aY05wkF72oSDjb4mQ9ljCD45oBZN+wY5nfzVGeJyxeeZOTMryjxAAY6/0RegEKl48bnnbRTeNN8rOBWwJ+3t/Zx4JCEFdQH4ZVa9/2kOH1GuxZ7gpWJkazkBD7AuG+NGS7CUWyZqACXmy1U8GBSlO29so9Q6N4KXFVjd50tnY9IhPDh0aqO+QgXF0mwb3DwD1+XCox6Po2nEu5qsv2nUKWqOhaZh81Kv8lrp3uAvOQ/F9mdVhYze/2nB51xDEluFKhC2dGbx5i9c5FnuRdVmYRprumCj/N+dthjQDrJqe4R2H4vJ2SxwWcbgNSWxIcMpOffcyOyKusXXlAIw0tfwW3wRX/5w2Bq/HNNgxHgsDJ/OvPItO9LsOIH0WniUiRtl/Bjk3MBsiBBzHrINPlYmw97pJbFJHa92AJNOa66z4RTY3Z945ajilBhoDIdNArLf6DitmH4lGOhmH+fMkOK60Mh4xa8WuigWZt6xvIWtacUrUKpVFAw/X+JzdYFTGiz0UzflLPJS/mBa8ysEB18DO9EX4UQQMtpVIYKW72YwRR4xATbjPP9LrOYNtNXmt9vVBfO4r1+3VhP1vox3kqgIuLWe11b4sb5/eeA2YbpdFqBotvlZx3Gj6kvQrIVs+zQ/Bhto4ZDk++WL37DbwD1mbuJ0EUKoXRcPZCwT6sIselrMqX/S29UL/xTf9zDGe31F7fNrDkivMxE9tZL4UEiO06pq8vY//eIg8YkXDSBniZGgL8GgXlVOVZAvtn3jbx/75W+eO8asYX0Jz2r8ze2j0228sc9/naNx64AfYwd41I6OwlYMwnvakH08WsrsZJMC2UTJCMWStLAL1PjMkV4a4Z6a2A+pIUO34NKIhhP+sC/qtkY2FAvhy9s8g4Q6b7+CpQ==';
  const _INTEGRITY_HASH = 'ad358a485743deb4706c69bcf38d196fe572b7baec1cff2b1165abc7cf8eb55d';
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
