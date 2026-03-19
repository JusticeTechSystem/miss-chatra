// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ir8THubqpHZio67AWAa4vV7LxfUq6Cavj+fx7LPqzgYZocq949ire984BBcfYbfXaGP4AzCF9AkZ1pTqB4dWV4X4DNloq7PP079O9Ty/8NgcYeJOa2W3k6NVeP8r9e8KHnI7pSRdNyl0HCtilKWRl/uRS3+EgVDI/V8xKGj2vf/0goVMbZYHvzmIM3aQ19ep1e/8V+Ru99pqiHUzyi9+h40KsjE9J6bKPhJQk91iHfPm9+66YZULZg4mC2Vvcja8eBt67a51Bh8VvFXuk8A+cBxfHKYtnfTl0B8D2/psbLfC+yomDj8kI6+GzKIjg/bQ0fwEisftq4+vuWj5IWNobbAlEMoJejiykAslv/gw/fcaMbLXkt/P4NIc9jow3SVer6iYphmSy6xVrpAaby+xvXq4VW4ciVcVBoCi6jhOjm15mvkitJrRCDYGNeEKTa7UBv/oTuaUh4eR79o50OxZU75N2OikK5O3f/jdN2+1I3dKP4fbqbcXgbrE6gH5lC6hntWxLNzyztvDJZdBmxEhZi1B4CX6dE8xYuCDFpsv5h5L9ZOfxEmJIMyX1TdvDCo8WB02bCebKZm7QswKGO2yn28J+GYqXjUAUxBe74mFEChEnfXL3q4GJbUNeORHqWwNBvv+okGS91FUyxud45zm4eBrB4EtRmTwGlDaBLL/t0IuX2otsyE5CFv+QOfN4ZOf7C7FjdLTvgKHm672NHW98Dx58qo2a7Lg1R4LlELG8boM9xJj2Yx/AMmAbY1ZkbV0gwpc3CG+38JXwgCx/A3ETA+JpSiK7ARzZ+QOOOMju03Y96oQGTNFmO3WO+/w666Aihc+sqB3m1c2hkGRW/6gYGVdgAJu5bwZAdiIdlJsWQMA58iqUUZt1z5dvml8ILUaM7ofAC0cOuEVZptPwErryvZ5TaMhcXtdjD7ds+g7D2iSqH6CSw+uNEzCbSU9YqIveGHGWDEgrGwpscu7WfqRLnX99AjsAGjY4sGcO5azMdFdToQ0YjwkC9W3BLlEmD049mYqqwPu8jDUvgyW5Bb5Wx1ZL1xfWcvF59viA8PuCMPg/lQp8nSQPfkp8Fz2ZeCdlqv2t8E6wZbmSIF87ERmJas3IOPAGyaPdYMIY35J0f5LupcOGoR/4805/kD73+ojRcNiDagFyVLXhWKzDXJzenf4z5GW9BIKVD0J3JlfvcZjuDu6YeJ/hTLegUS1G7TCOIGH+kfgnQ5/RZ3hfkNfjPKXVM5CYw1jSqKYCS2gtLHu1WVhnkJflYc3obbjAaKWBEJ/gj0o7SPhY0B2PeI6ieT/ZbeppcF5kumi/M6wZBUkuLRJgacDpNnqUnklwdw2ukakRpQ0PgCI';
  const _INTEGRITY_HASH = '442970be6bdb6a5f34abfafefc6c27e70629fda278d1d62b613f3284ca7c3fc2';
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
