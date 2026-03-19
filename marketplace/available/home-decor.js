// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'um1VFLXb/sg/wZPU9SFzHXDWmv8B95/Hf23hIbHzkBl0jeO1TuL4gRm6dFwIR7I+IoMAcV7Josz2jpOPzZRM05yKBOmwQBxIXArUECwi68tCZR7TPKe8OOCTsjtmH9dS08pPUWibPDwQ453OBIT0YYtBuJSr0VI6FWJnwNDbDhnUPwVqKaXtlMn8T8z9LL7o6f0v5eY2e9DBf5KuUurbeHG9wwBO3XCiHzBDStkDSywnkC8wplJo+DiUtTINGbOAkm3QWvxGYojpVO4yiN/n4EvfCRLJfoJIENovQXRiWIyVERsbHtHy1cGZbpm3GXb3syOkQ2LcrtEtkqH4LOtspLZO0HWsoCFd9dz1DkJFlLl5gOc7D5WjYjXM0EjXb39YnJ+mtPkGhFeLOv49NJqczg/QXM/kMz2+TxKQkz0SJQZFTRco4ArTZgG5+8VrSWqNILMBHmDJcHPHHdsbCVPXWRrMzv+vSHl+sUNNLBAgQV4/afvtzmLq0Oy7b2qTUtN8BTY+rz0NoqQGY3+s24c+IEyBegZfN3dLwKbDkpd3q0y5h7RfIFo9pSdONxDgk4/I4zGF0yvRh62J0CDY/mK/loITbOrjQiMDJ6pk2r5qddUMG37IyksVL2AfHx9EGUyRi7k2B/1kLoVOC8tpjBHfkKsceeOOG/OWHo8wUANvOtBDz4XiwUuovFcSqnL3PqI5xzMDETsvlrk6HVYlikQ4puSsLJokg35H1UgSvnsKAzod52aZISAR1QRj4x83Epd/kQnz6vWjaD8BKxr4K6gmmjyQwsJDNwFSCdNxLTfBUi3zwjSC1q0aDgwhA4tNft79Wod3C6CuxCOwmxvIGqmewL/KVUkIeDnTsUDiApFNGeEJdkZLDQMh+IgOQpbCt1wSc3ciXvE/KxABLY57WZmbk86XUrfNd/Hi8qAh9+bNuvKYW/gCVtztTiMZ8juayJC556hhlqjJs6jwnDIqLP/NPeGERHyofiTj2OFHfuCS1li7k6/IxZoxvhXUXiEbzGJQKQwMKa8DCCWcfYiaGTTXSaHjW+k62yA/qesoqvxZ0vpWulYt328whYoUqTmuR0bkN6V9QbWFaPB0MQwANIJFvYYcvNv29bCpAugmkIV2s64876JHPkA5Qz337zIutXOQDV57mo7MU2vgOyr8bCJN4IWp6e5+HC+Jgnfw8PtV8zTvYkyMhrWFQbEgxQy/NJ1ZgjM6lQeWVTHabGNiA0GE76iMq1r2jDaxNUwhRRusJA8CyEmN4fWxdkLay2SeSpSbb0PvqgzHodx2Yj26KLxvyohiJ0dHtLfZYUm9rC7NtauRuUUFApypylNbRQe6+ejygvqpSZJR/ogm1Dl8EUK/z01sGbeQICbOVRhijNxs464ZLgRhFmSjh9L67avAPjvDNSeT8AE2Xdb5egh9jIpqYl+vz5MJjE3Lkz2SfTI1+saCj4k3otYPjckt02vDB1vbr8Tw2x4j73Q8EG3uQM6nEn52kKOywSCHmt77CeZfM0fkqesoq/BW/Wp/H7WBzWIdnp46Hzuyl2pXC2p3dV/xH9IaOVSVWaQoPYWGrqNiDU1UvP30e7YKkd57PZwXvqyHp240EX+vPjNKewifHzMiOe/uJwnDR9Xyvzm4zfAdnuerGBY20RsIw9+92/c0z2bY9d1hrAT8ygbm7jcafvlKTbFu2UlS+QNVyMtzsmWjG/U27UX/C5OpiFJw4Ldp4RNgj/3A9wQNTLUYV4PweNCIaN6jIcqwpWnjD3aL4DvTkXdhnugYy97X3Hh3BoYmprqiCUCC+tn/zecsi8QVOf/7usVmq0PKkURPp0OziQfJjf4Tzmoy+LdYOzfQ3yYXKBncrzhgXuGRl5pjMMnO4UZiPNyAA+ky1Pg=';
  const _INTEGRITY_HASH = 'e05830eefc3d98e66d0eaca6f9780546ed9ed44cbb08a3d9db1daf275f00cc3e';
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
