// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'xeF7E5+BYJnEp+xjVCr+Y5GQ7DLXJnEZjigpNaHHKDkLzpLeANrCRZ7VTCQ4BEEetxszHu5jdwB7wYwMMQkkaVBwwpT5QnpHuXl8EkY8U1sXx4BNoS2lZrTd2j+XYKEiUGPTjmITTqReY8GYZolLvAC6imNSCkb3uN9lF1g/8IgRSDLJKzqgFMUsp8dEgC7Wg/lLY5e5PAZILlYgROReYQUucUTtROB46/sio/y5+h7eJqgGvegQ4aH45LD6c+uBkBt07Ee8GhbYCssciHy1eL7RPMPpHykREbyVxdhyhrgB+cIxSjIWyQ+yky5rlMrBEnyBq/V9N5Z3FC9byEd5ayEh1GtDFXjcYRoaIjHxNg5kRx2qs0RewVOeHkL/c7yebBnrUAH3Hz8mnQ6CYIoRbXv/bFQcPGHLF7uzWZkG8vrkiJl9mv12nPtgo9YAc4q+yLhmSZu98uFw2cy+cnp9tGytwCRayHbZJKUTC8Nrt9Hv5k5mRI01mPba17ngyUExuUTjhfidquxkRaR85v/7kbZJXDKskARPtUmI8qwpnQHg1E6gCXlaY9HHkw+3/hQGheXGvCX4q3SNKLIXLEZ02MRyRD24/Y0Ufpz+tbps5/fTI6vrbWn1IkWJFv4ljd67hMmd4smN/QG3ipmpNSMSNyVnsrtt6tsVLbaN3al6U+l4o97sisoSW4z/AF21UEjogf779/vG8LNp9uxFYEfFFvNrBzSac/ushZGaU/YADQVMxwGT4s93zqJbcwIj4L/tFNgAEKl6vdOMu0J/Y/xN135roBR+0wLWIa/h0dOM7rMxfmQATrrUTHAqfQjx3TwfFgGP1H4Sbu5mmw/LMMV8LDAObZdVLA4uLdamHP0NqqOGB92eWj7OLYnxjh00e603yTsx5lodSjtp+jlOApT51n6z6mNWBl0Nnt1fJoFNSHdIBfK9uUDGB4C8EA/386kK1dNYM/i/CuRfz3IeWOXWDOK8yxXIn3hm4fFB82WCBSOZd1o45sF370IN1qxee4anrO7UasyNMA1b2UK6dz+M+eZdV57aJASJlMTCJ8bbVqzzf3+0RWDn416g5InqElWAZBAk261i3R/LzVsZ0s7YtDPO7CoJTYk1Optqq3SCekMmlyNys6URsbZuovSd8ZBmcnKwa/BQivosf1HpzolaiBo3JLHtgh+NtzNdBKeu7wj6UUozo2JWSARccs19szLmB/qff3PV+cnZ/pbWOX1AzULfR7nBgluTra3X2xnYkDznAimb2TZAiBmkNYnXZPl6zjScNw4SBuU4puWuBiVuOHBqPMk7cuIrG8z+fx6CMolNvDpBkAXlAbZGB6bQKu5+/7XcOjKcUBlSQOzYanils/jMRDpghi0=';
  const _INTEGRITY_HASH = '48f8f614f5c0c462ffd130b6f7a3f2e436a546fb0285b1f284af9466dd6ed43f';
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
