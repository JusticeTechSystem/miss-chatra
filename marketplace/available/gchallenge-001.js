// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'v66FBP72ibvmnIwmQ7cdbYcbRR/9wiUtbc4RQMgi7CUCShMCQUy+mcGXlMsNYB8BDZwgdOPjYiG3a3YDeQPHoru0RfjBfpPfcytvsRhx5cNVNct5+TqRxz2WV5FE4Ad/mKLCrxeNzA9l3FpqOfJeSglN9mPodnF6sdFp8sDTBlU+VouzFWa5+2Fx/npERoszgpBC4ReKcOSE1fgTfda3nU/aw25jeKZi0oXiT48YsMm9wat1dxUZCCwv1vi25511Z0wGroc5v7Yl2rSLTIttR+0CFMX+0bsIoxRAdnUA2wFxtR47YZfnVd9VwfkmNwK5CfKMKlivYMqMXUJb960pihK/HaD5vfsIZ+G6PucsOFK5WquUwgRUYmQJxtm1U7hsVC4J/wvqLf52/ZcWK+BMn5WJHrqvkDNWiYYtCFwIjRtCPc9h4RBWc3F0q60PPyK7tY0LOxUDmKpsxPN5T4aSkBzZ91c05MlURfmwACuOLosfE4yyk2GVeZdS+kEIMNzcrKlfNCvs+ynTYfJnu0nsSbw5fGDqahbgmJwz+ziG9p/VBcBd04AiGQ84nwN+mPGa2ZPt3QFNtrYRNUXDNH0rzskBowiX4yCi7kZ3SpZMWhk5SqDPd/fSsOoZLfmSZibvRlKXa0iRWgkbOHk=';
  const _INTEGRITY_HASH = '89f83053536379b2dc00b938bb2662d18d6809b9e8865a23a7817789896d3b88';
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
