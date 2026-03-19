// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'owtXyMB1Lrb0Bl2Wl4npkaFC/TaerWIZQsyL748+duJDiuVN7HMJYmOxqJL20JPMitIPQSma19jelCl5uv/dFMxOGQWgzslvmdU83CEZAtT2T6W0+wPhHrcexRQcKWsD3KRzOX9nPrYYAw1hRAn2pvPsYSrf7BFW8Z5uIo1pS9q1dpymwmEoNj3PeqML8S17Z8hgULEuYvHFb+/xhoef/9eVq+UI0QZtwn/iOGlRXcZU2HeSOxy9xt5bm31L8BcJnHZx7swgF5Ji/X5HKNv3a9YALDFe+NqOjM+FsB64fkDuqJeNZWIT5djs7IgtKlGXcG25BVUmHxwCPEd15gENLG96cY+4yCqd6qkNmetfPVTeGCn+mds0xA5LJmnKs5oYZbTDsDcl+c5QxHN7Pr0Q5zKJi5VbXroGKhG6iZpfr5KE5vmL/aONrih2YL/YE6vuBVAtRLb66hNrFxBVibIoi+TbTPKEXnI+Yvu5LHQTUwdqKfwnkkAdNFYgfcaZktzslcPGRe0BgjZ5S1prQw+zvlc/pEn2ulQfxpbZUmdmPKrZn8T0ycDvEBrTBNwIiNIXXXyyQa5q1VAqm0jDaO2NiiH9tpIxaG9lPysF0wsuKvOsEYGrgUGf9z3ZAdljMdCQJifi/3fH/5xgTyTQ2X1B06jtlBK4d3EMOaSTfp0whyo2swZPLm3+XHsPqnUzpHlDkLU0wPbKXYN3zX4yRLb2VK2eFOuEQhW899LLmUmHelY0q2mI6EW2D8QKvsGFTcBruUCze0emnJWKPEjb7NOr5bj0MdrbnFDsHiZ/HfrJyodYkKKVHgG5vz0cEinqf7+iMq/yeX/dloBboaTd/8K+hAROdtzi9fwAUyEb70jZBg4IK9JvqzbwWcwlbKKHuU3WZ7BInAMjByn60bdl2kONU5UVd/iwMIUDS3Yeu5o0jKYp+GvTfQmvuKPwn2Xqx03pMdvkHdqR58ocOD6KvZg9Zr+X5EZcSJRbH+KndhPQM2CtVc7L5x9qU7RazL9C7zwv1dYszTEap1aYU03AZv/H7sv2FtYHGm9j45Iu3hcdd9bOsCM4FGp8v44WrAJk6f24D5klgbrJdK4ED+DanSwfR3C39Jq4MlHC4o7asO055wLs9iUj68fE+p+Z+JFckNfdRb0cl7OPgt+aLAmW6+7ky1X6JcWZ4sQjA1TX5FjVusPxjK+ZMqmycS9XGyWVkKHeAq8qU4zozB0kWpiaDip1s50ELyd2NOYVE1pbtL6pLATgl3E5ipP8NWHxQB9lFQsKlxYQCWFG2tCCuxd/KUM4RAFyR1hMHZ7CMch5DIMZre1PWYnkiIfZoAiR6HJiuGzi+ZLxKVibrXzuu4QoOXwPnnSxrvY=';
  const _INTEGRITY_HASH = '040adb3f5000fc85d87010ccc555d47312e02c9f6566e98e82b51e3aca853648';
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
