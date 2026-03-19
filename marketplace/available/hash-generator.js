// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'JUqgQbOetRPr48G22qubixLhGYso3qBKCyGE3y/CBzrK21tubeOuItb26LOGsXUQyyNzrZNn5dDP/S2xisQ6C609PneZG9N38FsiU1AeJBYopIUPZp4hOYmeirAr2KjaAxu5jMizS+ZXJtmPcZnAdL4BzIvjUbbpAjmGv8svgsgqNZEyjxU7ZrpYmW5jphCUa2pTRXr7Yatn5qvGIiEQVE9VBtxJo2SSmZC1vMhfHN2WSy5rCt2mQYiWyZ4XCz746GSGhXAGKz+lpM+nkySsomS9ENQCzTD8id02MEfJS3RAZKBZ8L8mzjPQ1gZHf0mAYO80FIBayZcbdAHAO8jrHFxehelIG7SEyN4z17v4Hf3tXIk4wAQEKFRECR4iKr5Lo4HY+GZpSfKwWxIkjqXEOla0Csez2rX3bUSnbpanoL5x2g9YoHkXPZsydXMkPgjT+fbaMx3Eew2ODvjiv3M+zy4eTy01GtWBkke4dtU6/bdJ90TNjoCPVzuQWNYKXv07PG4BK+MxWYOMnl8LU6ifcN358Bo/OBpfQV8mZeuuNmnvroMSBZB+z8kvZ3bvUE9Dt/aAmtuJ5KqWzWOvMLBD9+Gf59E0tJWRmfwhpuAr9KQGiJDsjfCfLpRo7r4o6jtf+idR69ik4TYKaifjp86UUFCkozBpfh4Za3TYLfE1Kni5ttg6vERnRQ48G53yYYecccpht5ZSPCXTH90Z1BUWP7OWTlegXkANEqUP42O8Jn4wxqksOiINHbbRB5eNWFXKbQhCr1ufDTw0SRCTKvlCxYC8vFwnE/JCWyYDB9t26zMuZPas++baPe5axMH4a6wVGdyzpqKu2yzoFPLWWh+GgUsB+/1Tq43qy/rJtSA641I5z1wjxRzIZ5iMDtNaDzZyyzfUPuhGn+Vec1GlYuSfmBU8s6SzwydsR4Nr6B5xgqYM7sObbYdGdQNGA0+tyB0BPtvsbBymqDw84/uQ577f0mtoNTwJG+NFBH9F2sXGFrLrxbSCQqXBCqv8y2jssA4uQqNPJldkWplL1omtWmKIq5Fe56wVVyzcrNiLO9Gpujckm0uzzhiGoR6GaJIq/rEBY6h9KJMuSvow773SQFS+FKgYiK8xKxkqw4HQSb0RUpO3gUfEUjmtsY/oeR7lkvuKRWlurjM68+JvrSWkbm3Ws2p6EKrcCaQ2xZLIQQzFNNz/bxL6yVDoFNXR/jKTYDy8h5xG7p8GQwViXtjrdtN8/zlB8p+M86uaMuQJxsAOhJnB/vi6gX4QEiOCKlCB7U9N+TjLI9saM6PEYl/Ow7I0bHaVb70NSJH5bvFbZP9/B1ns7LDTsPeNhhLwkGpvDaAv6UM9X1OQUlW98aSC4LNEU1p4te3t9HzVFg4+Yhfwpz6jXVHE13xdFSQwGcSJC3BYDJXsF0RKCEtbnAeo4HAAiN4gg9+IBmwgM+vmqP55uPy+tRFJQEg4aQeRYBZ5SZe1NEdHr9lCHUwcJ9Mi3OmIP6rH4bKHwDs0M87RS+UqxL1eXIP1gzw5ZXowuxApaXFtc8JDX463YntbHdQwB4RLUCv3NGtmOmeZZweVCKWclaEnVvY7CtLL2iSsCi+zw71KCln7T0R0SDjS8w84/Co6xGbpTnYjkuRHcg==';
  const _INTEGRITY_HASH = 'a8379654b5d781ada04038acce2a9ae53889af5c140fccc351371e8c67250f90';
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
