// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'UycVRVKK/A3mxPqtq3borG3ESVLZB4P/8lt3peiNcL8E63LpnM0h2fpNe1LLcp5oWYGUwvUoD2VOujPW0ku8UUTN1uFj9v9K3x+1+N2XGN4DIfOB4hFL5QtDfoJjoummXCNaPAtV6sdGAxC+imqGpHvTNnCXxKHx09QpNV8NCgI6P6VfHQ3+boNmWqguPvIb+SfhXCj1/EVYMtpiqTI+At7S/8+6dJ5XXbBD9l8XttBemi2aYsrla5jbhyJLtq870R26kzYtkPi0HIS8T7ohRzOQo9huewgbt2UTs6DLrnmCUPdYlzXtWooZid/9X3PoUKE7+4nYMWEl/p4OwtTwdG6Ih9BCfcPOWNgBykDuWw7tmWsyZAQQnzfSVqMiJVpakPRX969qYVfR1O3LpIL3S+MP4NWfSGE9ftplW+E5PpJWnDVLUEis0GSJdwbYx7dqErGRJTlheAkmtzO9i+nmAju3cxBW98NtJCqXOHHzOFVkHydkbUAYNF2fJSkOPE7Jss3ppAUoZjKHnFdbudRd9nxUPHzOSMQ1tsy/Kzr33OOE2JcXRJHMHlj1EjMPkYGegbkYfGMZesfpuheIYzi/v9cJmAsNBuJPtnQ1sHQGkaBiyVCDzEZ/hSzz/Sfb2J+j1rmGL7zWpWSOZ4UwixhjmV42Kigb8g+2DNjP0sUmT1FxdE07mUUIz+mgN4bhm/1MiWRBcnt3isnsTlNkwme6EVYd8WjheVVZ4gRVQEVGgT2+8PYgyoXcskfD6i+fJ7pGJkmlrwnVkYRPr9kHlp2tVF7R792ioVL/TBkHNspzjHmdMG+ZNI9pgIBa3Ne58COV5pPGhU++tlQoSBUabs/6sRcfxsYcWus9L6RALQ8CIx7Eh08H0+XKxxBFvGjtt4FZ6j+7i2bmkBnKfXoMn8lMoEE8XJ0M+M+kCnMrmTimoWWCmp52tOjBM79To0NI1T7L1TSyF8EV7PTv/xXmL0dbkmZEoHVAfBVU7kibYQE/CSdjxEmRY5UqHZNOvll7N4U1yCzePDJw3xicez9TR440i1YkosjuKzSukl3Q4p6qoY8/RULaWF9GYfH+k3v0nJoN/6HrMfUvyM9A/FefsLG3j3N5aoS/yjzqv3w4f+kdL34SERraAdLAx/1EI8JHglKO+ez+flyHDrHbe0W33ulgDuHxOGJ92VP4GdPk/aONmoTyiA7R8JliCBfsX5pJJrINVGwtedAsZHwRyl8v9/ZPAECAj5fxa0mR4jIVs2ajqnodW4edtcnfIV14pvNWx2yh07DFAIq6oqpMKmgMugUQblmcCgJhWLi1ncP9WYC1aFHAzk1Eldaj+udHhb/6q1jF4gLs1W/NtlLLr2ZrErbf4bU47jLw64mOzswsaVpvmcl5s25PbWHAyA==';
  const _INTEGRITY_HASH = 'c620db5548a17236f9b6588fa6e755375878d63961c0886e428db94d0a9546d8';
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
