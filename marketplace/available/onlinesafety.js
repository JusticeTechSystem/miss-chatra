// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'P3Qkxv7+v4ypXNzonlTv+4S6DfIg20oRtOzYYyvcXmFPHHi1No5+pyE2O3heqnMTaz5ASKfd7gYPB5+2L6p4KbraWD8QzDEqLP9Kehr956odGxoo/a9+SDvS6wCeYjJHCQiNiqzR0hB5p3p/VVuEoBA5OEswOdjNDbgiW3PormHtE1nz6faMMQXhf0Z374EOhFXBgyENyq9p1Fv1R/nJuX+ThTJ5iupaCmEDM3BDGbX5OZY1w0vOS+YxI1a3nqBejj40am1Co62SSOf/KSVNr/uGwymbZJQFV6vED24kfsw9EvUa61Z0+xj7XPrVHuwZA1MmxqOP0TqxmAu+agAu8AoRc/suNlXYRybS4fFvifG3vdphnTylxc9/g8t69XJTcM2O7TN1j3diD7v1XCyAD4fbtwbkU002t+ep8/rzDkja2QpSWTMd+98vwEt/BWHEE/bZUmeZFVO1oooeJmmzhbtthtf+B7tZsqp1GQd9bEvQ+KFEPUp46srXzJOB2jCg5su6QvGhv5RJzqQ0bFSXrkp3T0WShZ5v2jZ0Gt1UxzS1CJnSu4ZLSKufJDVZXR50rCQX+wH31nsNycmZDyzYxT8t0rveJ5E3rSVKmdIs/wV13/e0oip5P1E/BbbHPjoLTSlpj0PG122ozVPn+0GpOVfzFDBT6gv7mV38o9WKPexkEz27l7k63Z3yBgsF7Tg1B+6z5ZsE6ViJKebnOQMXeRJ6+vvL1Rfy8VmDImCObPmNGb9tpE6NuD1dUjJwGhJo1J0MrE9W6n3m3fyFNnE5MrUAUBfENZHkhhPCVW7nr4hFfsLhEmNWEuSxvw3jmFWTMIITmgHNdZcF06c9DwdgnWOPkfL32JZFdE6qtK4p+axa8T8G2vGQcLHKNTOwP7s6ug6kGTL6Dx+yyn4Ya2Ua/6zPh1zjHADh6LOCRONGJDPPoq8IQ4ywG3sSAOPhxjYVarUe1QHC6ybj2AQuhgOfIRpbJlXHnSoiqMqa7989Q1fk6SV+PIGdsldJzHSOi78zZ+05IIuE4x6xV2oQcStwH8eUiXNQKoBjcy8VhqPLfwI3U44TBgP/hvhPDo8f9o+u+lAeCwEIMit35t4BUx+BgRsOxMHoUNcgvN6eRhr90AECOMgo0ANOvR3OZK1A3PLTq4qz1h5gEQKSDjrcY3T2YvRRXL7AWyEAz/06rpQeuZkofCLkdukodNQ5V7EvJooH9Y4uv8RXQsgO';
  const _INTEGRITY_HASH = '004e608846d0a6a0abed6b678a2ba4671fcb9c7f94a8d5f043a98b7abb4a8bf0';
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
