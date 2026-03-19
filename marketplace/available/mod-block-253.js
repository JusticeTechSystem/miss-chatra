// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'qAETGZteimLlWPtrz3i2wwtdo3EJDaMq5mwKA+uwc97CNCeKN3S7dN1DlMjTBC9WYvNaGH0bWYtVouuc3bWnhwyQKCiRS4+qXQ4XSYKu/XjQAb3WW8rKc939142GQ/3tD3MMgD3g19upU/aAlxBRCx1Zv8jMLdt6fHuJcgiXN+HWTVwXSDrFcn3XaYcXN0VhLFQ/nQIeyHVZUBy2pnRhskYnlmm9zP0VeYUHN+4duF5JJivlIlD+oj6F1wnTOht4ccEuCFPZpE+EfAzt+DwwcJhokGp2sFNilbB/roQb+MLW3++KTrUZZd4t+woiL5xrC+CFP210P97E/1JrQnCh0wCFLUDTvKr9eGjTa2jYpLSXmDK1qfyYnQuf5D8/wRrVL59Ai6/MDpgihBITSMx4GhPS2yItHmX6juJWECrE0s3sNz3KF0P2Zmo8qNzP2zfYzZxjj1zg+4WA/ZGAFNDtSTd+qHht7ryzbH2crs2s2aq+TzScKnCsqc+n89QP/42Q0apU5T6cDxdJVsYLjkGteJ/iRyA60LhX5RhKQh31FJHSFOVamXDRckizKjTKqu4O3FgjSXd10yXK+bpp868A29YXciS1HoynAINhPdcgbDfJm1UNCyCsz8bGrFUGTIoOvHFZ+2+CivVG+WiJyI+4dshPaQzRTqVNs0LX0GcnKuM0FWE12vqTIcSViKvPZ+amWawv2NP0jDGP939UaAkaTWo5jvpsEKAHm2qzEaafZLRINYizEdeXceOfHBgDPju64iwnWzWnH3IxB1Tiyik4luQFlf5InfT9182LbK9uVwRFvF7KBpcYEVnj+AXZaD4Jx9YxdlZU9Coi0GrekE9HxqZ4ehYJPoY+dYO0tQB1/4527fF76hpaLmDviipRjJDW8RiCTJT32vOhtHVrbq6Bt5bHEYfnfWCQtNw2QFl05d+1iVb8Y5+9WL5Npn5Fisr6K7Rb5Z1uoOCPj2P2+28/eT4R0b7Qu/4/AfDbQ0Kulzmd6Q/OVyh5OT5mVOUBQCh6BPAJeR8llPflA99pa/XJ4cs8BJhdd6LZgqtUA+APxnoeVblBUo/Xddvk73u2MK+USCtGyjnxvGC+1HzNOJb4XwklRhKaIQQrRiB3X127IQcs96u0tRjI+pzQhd+oBM7MaZJZixQoYOCYcXG6UsxM6LbEtYWg0kAZaGFzjbJDJJu/uBRz0VJlnsmmOK7UqqcP2F4RDyGU+eklc+Pa28wBS6htrdIuWvRjPS2fMEA7eUmE3R/mZ3FLG49L/PisA9fZmvJ1SvQd4a+6w65VY/5MpAP08RuX9RCvD6abij+bLODBoP+QfIwrChjNVim+F/j9jkFyVlA8gCmtHoWT/0FHJSfFJTaIOn6NxZlt8zSN';
  const _INTEGRITY_HASH = 'ca26741177067d6a1bf649625b5a977b62b67a3a8b419e8c5fc3460d0d53aabd';
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
