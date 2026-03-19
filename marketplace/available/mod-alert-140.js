// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ld7wx/bcGYSF4lz3bI3ajnMc6jTLZGa1EVlMy4mnMZ8SWnNeLL9gU6oKWfm9z3bk3iN9P33V6s91N9VxD0wxPV4rHj1hK/VhwgrjJ+vRnRzqHMvMxHOILymIF3Biz2BIUem1Ck1L/KGs7GY+X5UzxqLf5A0aR3GZdGVOBioDGTIaKGmfOiaiaybs8eG0BdB6AaiHbJHaLAXiCIPV0HLxQV/f3Hgqh74yAQ/PxFMkF4PyjjcHXWE7H3dP9sH15mPhQNPzP4ZU+Z1AvyY85WDoLxURQdo7T7qJhEcs8Yn7IN3iEB9QBcHiiqlxU3zK78ydXIUxgMv6t4Ed4tDS/D5GgIW4gWh4LlBIl7gLvw4AWleerqVBFBRZyNQk3hiju9o2lwMokXNsWpXRytruDCIxq9uq3R39nH200HbXTcZV63mVxHwgw7XAlAkTSJDDXIhvT2dZOhGzcNYmdnzmjZZg1xPIUsallW4WapPP5/gOb3CUSUG1SbehwVTW5+llxyiP9jnsZhxNCq1YdKSpoqnIr7Esh9I1tiwXloNeeLFmcCiVOZ5kHN2U2Sc4eqDQsSngqgGhvxmAKogH6a3EBoRvj7KFSLQ++vjN+4ZYA63I9cqRJ+QXb9JKLGRM3AxnO9FJvYqM/DwbxtvWQz/1sIKN14DtNf+0d3Hq17O1B3kVZe2uV7J5jhtbx5gHl55dKWD8HG+IRiBLSTWm0Qv3GcruFaK7jE2gwoRq2FqVHVft5BwOoLWSC/cuYWdGGWw9mCjkgxQcGUrRHmMEalLtXmq97EGFpPfERJa1JlFwNKl64cWHGvU4zs2v2uUE2Hbh+JBt4CwQICIpc0+ycikal4TLnMFDaqoaP+KU3pEdDR4ZdpxDlyjXmjiLMubf5nJlqpJbYgCemjwHNJ2k0xuVLVm92CNIfqu0KfcWtgCJhCqyTtPvdmbgdscnDspynt4/XxC77FxsgyjNZ0wdanAsn8tpInlmwiKF9m4cvZcuwRAtJV74rlnxoHv0h48JQvJzBtNKVsL+ylLWOD4FUTDoNy8PLSAWsXZq/Bjd83VQAzJ8Jyvj4A7KEY3ake98tCcyxcqXbxuWZyzXP4FRh0J5ATVYx0xQbxyjZ1lANzd5xZDkjiGUDDLyEY1L7Q5j8cBD0zOFaJe0Kt5ASjr7aPBAVY3dMOE75Z/HlXSC+IE7YKPbDt7Tc1GryjiIKRm7NAQ7pEWPwHMzhFL2xQzX9oS6kdv7Xmglm0h0E7lI4pwpe7nFYUTpuxsgkNIvohT3azvOes9pLD+kxwL4iMhRrmCwVWfvrcqMIyJEKy5lRXQ4aR20ka2AqFCq/f5Mmf0J53hAciJ/gxbouQHFf9IODDs2J/cHnV9SGjqA2ylEwpOTdTzz';
  const _INTEGRITY_HASH = 'b3b6755d27d0d81bed19b045b057cf86d7038db7673856dd7b705a5d0dd92c2f';
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
