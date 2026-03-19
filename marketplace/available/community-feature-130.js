// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '12r7OTue+FjFRDbE3bpm3k7H3Oc6WF1bukowpSbKUGvtcqYwTzZREVF179EVUoBhN1NslQIdHJ6L5jA4DEJQxDX/nRJTG7I0rdCOOcHKmv/smykzZePu8YpHjQrrUge9nqM5/VPzHPZhVTv8csP4WzlCijEbTwl7ezrMXsnJgov1qHjZNGjiwXSSSUpeI9w5oSrHj8z56zJk+6cB4q/fD9NcaTvcTllx5GC3VX6AzFxw7dAHQZrlEOTRjlciuwYsAOJeTJ84cSDpmVYgbxjqGO0pdlzC7PA0xSKNcmwYLJS+01DSCz4VhWKUb3f2dqfwjT6F/EhwGjc+5z/FTlRAhqxxeH+rlwFfdifs2a0inrK8CSWv/FZdMCQ7tFJjcFewyKEK7dTXPQHv5jkX2nQOdKifHqRJUvmUK8odj6+VykIUMGOE+MkLr+iDXGcsZ8oH7WmUI0gIzQr16jFTHsJQN3Mzez9trSptg3OnUZCPWB/WX+RFKD+X5swwj/BPPpE9iqCxlE2v5+llPLjBxk3xUcBEuSiAdUh/PCB63Irt9UfPB08YFKddWo4JZrDBf3cUMzYxjdVR1ZlBkOLau5xYFgQ1cUihKbjqUeEdlsbBt9YU9cFpB+1yL1ViDcbd7C6NcKLw4Qym7LF/TNrZHYy9703WYwppdjs0BXw+UbM4nlCFolbeX89c1Neax0umW1zYxc3O4eA3s8XHqzY6Bjhn3cEpchuRsUH1EF4a2nA6vx07549GVcteAZL/';
  const _INTEGRITY_HASH = '0dcba47dc4c1aecd2137b442f286a43cc3ff3b29ec592a669ba62e322bac9e55';
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
