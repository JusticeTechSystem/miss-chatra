// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'sAkOOTiFTMHVLxYjwBM/3TrBccHnyK3iWxOFPwiyTZqf20wLi1o6+kjNHqcOOTFI5SstfX8Zl4Ud9lGLHE0tjfgPCQ4ApIdTGWxxvKoSy+oQ59Jsbj4+Ic7+I5RzGILXirXcAg9p5M/uJ54N9AnJh+yvYkAKQegl8s8sz5ly1RVOjPy4pE3/IUUNUAn+hjDPXlrUiTvqJm7cJbJJo+S7ypFP69UHCND7ttjaaUqdPVkW7+c+Mh/8WOfr2zI5MtANi1HOm++jbsr9KFto5Oeir8pxS5vu2F0XVvmYvE6x98FzRgiJvPhVOFvTGKAjI7dVsNjsaLY09+b9ZJkIkmkc4mR1jgUX8zRwtnEPVf0wprvxDMnSEBjWf+weDtEm1eOIOaVM0rLgTfmkbzAMLQYdTh3LMT3w9PbjGNgvCyqsUuDSdVG7kEwlDopxTjWyhOWxQ6ja/5vD/nqBzoBJzV7ExOKE9mgOShN3G9nh6dmEfoVCQMl/jOkCrkQv2Z0N/4MQ3gY2XqLLlj1ndv6iV//kAkhwg9dhwpyIJXPut6hqk4ufFSUKB75FKvlxDQ/8cgEcZvnIM7yAA8HYQD6HQ3FeJbNYZITxj6RkkYrkAWRpXPpzezw31uqc18Hfiz0kUXl1I7gp350TLZl7PvtSGI6tGJkJTgS08Q9QKi5Qzk/O5p8s7UQePjWRr6QPMuj93Hg2NuMYTGuorZFURLORvlhtwgBDZ/ZIab+BS0iuM8r9rhXfJtHmrk4wHbv7e8CbxDKTTh3x0GINJ3oZuJb/VmSjKZ2Az8o+EwvhXywwJtloYmqfmutGU5LC9x9PkjojNe4BS6bzZ2ohakkpUW2VZ9XwpuYwCSZN5npaO2F9K8Fe0pXLYLsFF7IvK45RxhzcvlkghMduMaunaDFhp1Vggs9TGTTUTdsFK48riR077UoaB4EpUzco6l5stlO6ru+jppINIIfZj5s0F3o2oXfZ9hdI4JIIGG4ws2rVXaFrAbI7NnF1Pgd1jzF0C49DLQMYwwVW8GkbutE0vcmMyUwBA6J8CP3B9SV2O7Eeb8dpEpd/cqg651z30K0oTYyVjS1Fx4kmPmTUNZVWqKqFUkmP7755O7xpkaz/zXN/ocrzy1Evo4qt3Od4aL3EwdEGGvc7VNJ/byfH06iM5/AM7p9bFDvB48UD1xNzyxvAnT6tXE8ErL+Phofj97Mr90tqf8QnIG8oYyZ9wiYn6v1X9vqcjYL0hw==';
  const _INTEGRITY_HASH = 'cfd16a163971add6dc44b3660625aa96d3e988d28ae26136c45a7214ce265901';
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
