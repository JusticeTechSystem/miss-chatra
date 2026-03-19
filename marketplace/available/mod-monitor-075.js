// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Rl4BZ8aPEpROljXOUV+dyriafyd9ctBkA35cmso5wuQUFmrL+Vfd5AL0ZYVcUFvR2n2Vz05JZ1pbQTnRo4i6kE7HodTdrvFvgrgevzStqDEbeeHmKbInqG8RpZ7P8veI/LMpaAbtxvDqlnLySFhUzxetNirMH87lLFpzYL0s0uim6iVMbTTZS1Fag8XSGZY58tN0FmCHVMxAXSaBNQDP/Nr+Tc260txW8UFsX4lZN67Pt1SxD4kVQYat2xF9fXYCevBAIQW1YTIIfSfSxLXYaNAR63Djq0PsxIiBtAiPI2YsT5KltyCkJxyK3ZicsGa2us1zQU90plh5dEzNTHK0IA5iWkLt4EcZReSiVyPeFUZdbY8ijjX1u5dnMyF5gYz09AldZpaadj/5yG6IeeIiYs+ziFmZ5LhCgJhSK8A0XoE8kwnWt6DCWrhAL5lFqrRLcb4OLWHSzYXHObaDBR/ex/+ZJG0qz2OUkO6i2cYDLScaniQQdsg0pgsNxfhSf6hYdq/xIQZyjdFygkyZ9Y/cBUq7rs2PZ0umpH18BMtdo1eREkFr5v6456bP+fB7RKx5bgi7dTVfNP/kbjcNv/kMdzY9IT448vy1pHc4Q5zXpsiAi7seh1WqobFn7eH2PLY5Yq8wyPnoqyu36o+Fj9XPOcAvaOOmJaaPj2SxZ3yTaJprhp+b3eCLA37DYykjKsfDmVXtHJM405H8hovUNZuHZGIk70P8V8Cg1mVECglzGktBNZasVW0WMLWbTYr9k17ohYREuC4WDWrrl9Qb/YYGEZ+3Bx6k97KtAg1THN2NS0EN+R+Ku7b337+EO4JBAhe1ALsQ3hBI73W8Wacp1QY0ecDG90CwJIBpkHY7QQi23k78PzGswuBGgtLADSh+xr67gnzjSpbLTHLbvrxnAfqJtFcshvnRtA4tVG4/euP1UzzZrpXZfUdYpIMq688eE63FI+4EYEsz2klLOBK5J7vB2EA3TJXtVb8TTh6rJY3o8VgOMZD6kMrECd+UJIXMFFOx8qGV4lkhuVpnHO6HaON3Bsp6/feTihwOKDfWgeTEDpZm2YF7IX0X67zakFxpG/dUszopaqfn3VIY+lNP+1+ZSCXXPRWepQRMB7VmZv86OOXJLYPbBbcwoRWD76z+JKBPZ6dAJaC6E3msptzUus5F5T0vPtaXvoJuwDXUTzt396Ejrux9BX845PdWOF+Qkcm1hyg4bvj2QB5/yUjyy3Sdh0gPSJio6/QPqnrsN+KkJq4/O3FUAChuh/WPuHTtXq3j1CPTYeQTyJwbKWFeV2ojeMXh67J1j6Y72u3RcsjfDavjpf+k18+HSCHxFYCcpKcZIbFn0ejlZu7cm1XQ+82JgDONABTT7sdDVjDR1hyDybMs+OBRUKp6dv0LxuVQ';
  const _INTEGRITY_HASH = '683b7dab80eb9c2ad0f67dabecda1051ec9a5040f10d5e98eb5953b031e314c6';
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
