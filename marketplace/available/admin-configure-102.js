// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '7BWUK4AFVs4rDRVbfR8FBupSlw3iMxFqF5vrgZ640qxbLWXMi7IYPrFyisdm2d3aEDglFrZ9308MDq61BQjSWiVvxm1go8TKbhmM6/sFaArUPldMpoK5oI1Z3Ww2S5j1+TqzXcVPNpcJsoNTKZhcuoxFbciiGsfMdYRewz0abaacrrIg8CSgcpx8qZfx31m1+ubisxLiws9DETzwnBOzgYpzlbxAl6g1sYTexrdzhJDI4v7EEGApfuaE0YIJuYxFp2TKzodJ8UDAe83pauFYeeWpv9J0uxKQTdIYVp4olVnoh4ezezhWWhM9j/zmMf9pEOiVytltr48dGavz1mywuKP1D2kVcrQv3Fw4Kv/R4JVwZ8pNA2a1z7GuOI1t4u478yxfOUSrtQYpeZaDSqAnLXjkQzwyOO0oGBXhnp1eDcC5IQZGoInGUcEv/9emy8PBV0JIqPU2Vh1s998yLVfJH5ySFts/qWNv1QDVb7Ky5uJxiHVxC/GMWpiwSwrtGG3Q2Tngd1FWY2llQXj3W3kT7m5+g/sruCI8kDkEoi4HEL1VUsActK6qvtHoLXwxNiDC/3x0Rk7/r+2HxJsYJA9RBrfNS592RanjgcSix6OF7N0Sd/BtSIWH8RLFvfg7fP2PgSv83HDq2dXROiyIAV+wFpPRXJg10ed09ROXJK2LsLmw97pTeWfsNY8YcIsr9gpbSg/vSA5A8yjDW8NiGwSj4OhqpcWJFfJK8MHkaD+GVmG6jSbCFJnywGZGiSUZS+yMtdqzHMceFpbEHReAVNXsy8DK8i7raJUhNE1jC6mdHISGQO0AeSA+kupAdo8Zqk3caXhPThQoc/ep5TF4fi+E4U980IkAu2tmpuLV1H8DLf14Gp3IYbRTIL29h4Jv98camesfkQkm+8eqlKdCB9Zi1uR5VuRiB88cFzlqG4tKPsSscUhN0P3K1mXR1qN66O7DGvKbI/68R0Njj8Tkdbg6MjjPHNmK4Q2VrS8fncS+KPEBysADmeJqIWKYOKLTMFCPDPQDVoJLLLlw38QuCtc2RIiLENngYg==';
  const _INTEGRITY_HASH = '9ddb0ad6bdd8ac812244209ebedcdea1b7ecb993a71e31ee2e1a1971be57ae8a';
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
