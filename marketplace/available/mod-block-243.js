// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'AR/Wka8qFRA46Xp3yjwbtHt94JxJZAxidTV/dnAuDkos9BY+mmZWBZZRgQv4C5BaARLqJf8RFnfDQsXC8kmyBS5EeiAI3fjovV+sY93tfyEGxYPbhOiZV6x7/fKKllDo7oRHPvEBlz7l1PTmasjQLFnnuVOiUsvRvUbBntvaCJ55UPBeK1UKp+UDK3rRaGGnZrTnF+deKIj0n7Xc00IIB4+Ksv3qBF4WiF4Yi8K6oObFhYKuX80+XmkpQC7i7uzVoCR6h/gqWgQ43HKKClQJKMCQjpyjFaVhwAjq6+kiFAfYHcqoSzc0FCbyUCXzmDsbBWUOUk1bKYA/FB56p5jV4bB+1papG4mYQZxJZZ8yU5roQpFs+dPFILzotpUhzisQF3TvwHGM+pMd3WvVV5iv3zhgns3c+C8chzX+PDi1koD1LANcft8yp9sBG0SDpwlsWs2Cj8k5EEI2QLRUn4YPzJ4T7lZebhl5QTiUj3cs0HrQDuBZbMGod9Wq6/I3pRCXMm+tqGV5chqMm3Wv5BG0Ol2pPxw8RoBfau8LLP6xmEnva0NTiHjYFm5wE/mJf61r4EBn/oWcUdbDIeAsVOWl3Nvsz+0+lVF5RbHY7pNeHpvM0PO0EPiZq3OaxTuxLzoovxICALvAEg6ifyj2bh04Vl7ia3OuV+MNuGHa372To9t9NIDHpZSjlcguoEixzf8iUyhWg0YhlTfkEmU2X9JPcIuF0ZpAr/UQ0WR4CyRr3UJTyPr395R5oMqFZm24gkSffB3ncYpQaHHELO9LAwyjbWEGppFV7gVySWK1ElTGPiFA9yXcrJOVreQ/m9C1CkNw5wKjgC0E4uGm3EiF5tNta0bkbvqAanC2YIDn/d/JAqoOkdG+/+4WRq3xKP6STHzJABQ5rtWkHsRCaLSlr35qWl06TEyEuHa6mJ1uSLRrNQuFnsWI3PNi0hYD/pmedGRd5oRhF0w8C+19iku5NgheevGStvjHRP7Fg3/y7v0poYf9B+IBNBxSdxCO/dg01F3eeBGEkD/CHtXTMet4/CcvDI9hCJfN4DdOkQtB++/D7MK5Am8oIGjZsILZwUHsd091FlpfCsgha9IB7ArKAex6iNk+rVxflE1Kb6ZlZh4KAuCFIb9MMyrfOnagJLULRq/oLDrl+Ix5euBbR/8rsBOnkOnu+nboTYXBuQobBXU7xkc27Np6NLTK1xYjbhJ5K8pQz2CpG9sqRQQd1NdNe3Td6dc1V99syFJjd5XQLRjnmxNnytfZ1y1SnuKyRUbmgDC7eCBVQzAiVR7a4xHQLtwD5CAg2+ttAj8nirDfmNGDuZ7zBi6JuhWt8OMriEAZUHJRTI/gousdLLdH3AFaZ/fgX2eM8ZkuKwiRz1Hwnsr9';
  const _INTEGRITY_HASH = 'c692935bf8b5f4865c3388b92b1b4e84e31b9526a4ae42e12d5e1ee5cfacf31e';
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
