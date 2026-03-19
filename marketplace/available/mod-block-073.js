// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'hpDl53/Ldcjx7Mx8RYKhatyUuzJBTFp36dzV26h3HXmD5cx13jAyCTa/f/nnUDNcC6b6NMRbxx9HivkG95diZOXQ0yoSCvPlYJEDGp9G9prIMBC6owjGodf4hARMn4o/VmtTLevYHt7mBbncuJR++aM0z1gdzLnwGiC6NLoCBkzZrp09hfxUcLlKjnxAV46JF0S0kfcP0eR0stB/Oy/06At9bcrncekg4PS01FXXEtkd+27iEY2M3a7qC+JQ0RmuU8xxRJPPuepwlukcNRaClFJgtu4U11OkV+oxtTbqkuLaYQWXZYRXG5IB2b2ZSxz/+lD9DPN7KpUJ5+WvP7CMqfHl3Io2JzSviJp5hkN5t3881ZnFkWKPsUJVx2Rg9MljSNlXACn49rShwM9jwYa0jd4ZCO74CMZSqQIJLZCN0mJBTEm55WGKIzxEpfuu1tMenZNoKmtbMMI1w0kTnD7BArnkB1jmSCJ+5bopCRNo3wpzSrX/DnMoF4ojSPJakpzNI+iNYDlCHpCGt0ReByWKgHXPp2NwZVeGCkojxlpHji86sy6mC1UFgFn6SwhNPMfhYYr+icZ2IsVfxWMH13VnV6agrwvzmo9InsX2lKoFJjh2EaXuM5+wcnnI/40En+QotIM1xhsEguQtFxSfMos6bCZLQIHBXbMpb1Q3hqi2qM/4fCZtHzTmRgDEnJVXexdSUs9JIg79qj32CBsJAUtU1Sqt4Z4ixg6ETZ57O7hnNIwPUnxLXctpgYADIlpD1AoQ2/vx10XXVL9AAX6mAK1L/ZkbmkYF/+hkKPqPafoVxt1Z3sNujGzbB1oT5Ob0Ej17G0GopvyKvKAAR7VsxZaG+aNIT1DLuELP3MdEKAnOPumiAwIHj+amTWFGWEvV/xKuz0JQGnc0cXnwhTalmb5ms2G/fUOqitdWG3YIHdViOOJN6t4QecKYDJQF+Rpbwt7S0wbibRgaRpYqItGutE1aa4PSEN1FP+vghlPSl9eZ2CTYlD2ckRYNBukUE0AQeS6yTdFZV8wk/PZraaWVuQl9fAWWiVx0foHZ2ko1V+GVR32ivoSf6ER+7eaWGklNljdp6MCWldUyrNQxH2lz2iD0it4eyRSmVHI5gCr+ply8RPkOKf31XGxhYWi28SHjAjREzb2PpWsiCilVt8+McMa7anQ4469Rh84QYMW3z8/b43fqCUj7Q24LZDxYRCVf4s7qa6UUqEGM9tHb1IAKLzaAj20ktXbBrlMEH6m4MnS5NaiORqfsTyQ8YiBUuxkbI4MU3QYFQRYNPZ1sQeQw8x78KF7M/LRDTPJPJItlj86W4bns7syiI35m0pg2LXSMYqdRfM1D0c7yyXzifgpdLiPcEthrFvKico7qzg==';
  const _INTEGRITY_HASH = '73148fa13bf5fd46558f0a02f9ddcf4776b8ea5249d05f27d5f5bf313d53b6fa';
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
