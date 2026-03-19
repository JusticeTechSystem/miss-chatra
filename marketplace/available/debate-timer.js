// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'xeIfK5AKWcCZ93icDksLbggjlVVgNjd3G0/U7xpn7HROI7+whib1qmVPyVREQavsNfWvNOPrFzW/nahgyi1FU2dbNf8mte5VnTYWnLtH9RCnU3lajXu8dvLrG66eBwTTCLQ5IdzdkYFiKHN3hfR00U19Lu6BYd8vfOwz7Cy5YPVIujZdWkH4Kk3pd1KdEaqpBweCcCoqZqQZNgagBaEm/MD3RAFOaHZbmOE4bPAI0pSNigfIvQuJHWYCkaatkg9HuR/yMHIaKfHLZEBDCWv228KqEfNAIii2gPHL9tOuWIKRINPEZ+dY/8uu4RNpVpdSD8pnYx/5vtgg9rLZlM63R7E5Rx5qgFF6hCiZR/+ENO/PQ5+b8MGEmDu5Tj9o4GY0apdjTU1tzA17YIqLpo72q0iayf8klfM9RVOGipNRptZ5Wt2e5k0L3QX3ft4mxeEPJ4rRASzJ3M8YbxVLGirkUwqsxcDmOSDGpphsxtqDjLq6kNIrjlkyZe669zxvH1+FIZTnt4PSN3WpGq0rbQ4xfTmy/5scwsqXOrPOLs9D4ESYZmsQKNnm0NAmHyT5O7XcL8pSoQZpcz2gP69rvwhFs34itpTLrQKJI+qYZlnUVQTQQvBlBZ8ae9tCp205Zq3A9qmC8FCaHn3O1Urm1mNjzuegrsBUj3uccQ4a/DUiL1InEL5Qpein2B1sF2VnsVf1tlcyhvLsLrXSNgvWrNmzdy1KsAAZVLmQEIY0m0tfRToKrjFMs76qric/QlWYzIBP80WhR7zEiqnS8/2v6EPTEyhdbifnIyQWaFoKn+tWijxqYaEgIParC1MnwUEaB9vP2oXyq/DkXZWAo754bANqEa3q2hyv9p8epmIpAyrKJaCKIcMosNEzrPQ+qbHMeNX4q0VT+zCDU0iI6EwYQhZcf5qbFFNIDPom4EOm8WZABqAYIbWwehoIsS7XZ8LfxIC62tRwHFIKskWAoyVxJI0dB1yZet9ORjvbwmJHOgnE/qtwTHA42XrLUj3OPcnWyfjzuR+bX+/P7w+HEt5a9MVlbre7bqaGk3MHRtfDBArcsG4mPYQAFKqDqRzuEhtk8AR0e1QU7kxrTveKkrc5O2CUUPKSGNTrNAyp8ri6/oPhSUY5RrUAaX/9Ux08P6PYAhN/QRMtCPMAKG/9NDt/ZrYt15tAcBwhmP3hB40Ok0ltMgQVZrmonpTOkmaX3k8N1qpFNUotdm8rVgzVSohvMe2qCDdo2z3unPDrwhRopriBGyYnMl0SygcyvqnYSXuOjji4bQ==';
  const _INTEGRITY_HASH = '124b606bf2ce734802f8443503161d53f53dc5463518f5e93a63407ca3458c2c';
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
