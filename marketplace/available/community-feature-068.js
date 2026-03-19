// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'rPxDVicphMcKUfBB65G8TOuXQW8csnV58C7jVv9+EXHK/V/hERsq+5QGw7d0NFsMrj7W3+kUu8zuPP+IKK/KqiE1l65wzYNkOWsL94Mq945hFTXgSKRyG5NZbgCMwFACgv2Cq60XwhhfL3j49DOKvo98fTNFtpPR01LHPahcvhTJHLp613qsKzzEgwSnUNY9y3fECNQtQK/Lvo6iqqw3uRf6FEYmtP3+NZuJSI7eB3XVgBYsnabB73dsBLj/tzTjyp0P62o176A05fdu5RT2n1FY3BokpjDalfCmJTb/Bro+CGS73VYJOOUygvGIvttntzDwMRUipXExxKj7HJ32r5xqX8Xj0YcaMdyTd0sJcrn5LCMezRHNphX1F+84TxcNNfugcjgY9rhxpTP6hueIerciM1wpq27WQtzoZdFSm/M5nPwstoht3ceeAEpZX7qpzfhFtmFg8ayYIFzxRRzXDjn38Y/FTJW5Y69dmPUeO8uaTp6Vr5lmR5yae8K8llUILWFQdOLWqNENFi3+sWzHXBDPP8gG8AotvBwLUxFXvsLEsUJBV/nRw1su1ZqrktF60Kt6BLfd3fO+tWMqos6JDgHtbqU+2GrRTwOyJ8pD+jkSOvPXjHDWmEHZMEWsQIXNvW+LceO7qK3wsrpnbOWM759c+PssFVJd8w7s8PEe9cjbc4oIXWp0UWBzsBvF4+ZBs+zjTnCPyVYtXAz7ymVagq29rCc+FTdEDA==';
  const _INTEGRITY_HASH = 'f1e6ea3b90fd1c572769eab31609baa8cb5c390603271d14910f088bb96fd251';
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
