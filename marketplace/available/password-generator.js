// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'wzQC59nrAdqWMc1YJAuuu15p0x6gJfMa7tn4PfVUQ2nnO0NIFlzOWjJ1OpGIh9dpDbvSHPNWiFWWhj1DrhqmnQ7DXTiOomyYJCn7lYmZHb0jFi1wYNiUqWWyFnGsGYxXgiuzav8YcfZSLswNRHo2UIXoNe50sV+Zn/2Ji2sbYbBQtA8bCKEOWg7hxfLydW6ZqarwCQ463OHIfK9QMra52ef6qUc6mf7Uw/tDhkRBMxJM/1crqY8sxR2eprk1d0nzCMFLu7aj9E78QUpoMXsjUGCRca6XRDjW/99GAtO1z3GJ/j7AHdFU/e1Upj9n3rF0cfF/DtS9MIqCtNSMlZ0j+03VQ4ST1xR5TYYiKUVM0yuZFnU5ldB01J2AzQia7Dh1taVkvdJzO75qZQmeml1bBas06om+kBWmp6p6Zo61VQa/360HoG4z7Atb6WrSndbivdcX5Sj8R0upF38VpFyxpu+9i9gNlBJApy8WS1AeME6N7PfqNSxrAYBVOsLV9V+GZOYxenAhKTSBc36FSEsTC56CE564+vLG0SlyN3v60CU4zvL3ZbjoMWZ23fK5XlWqNhNA27lPr5BP/Nt1dyCJFdazd9i4HNlWzwpSL1gwXxsXf1YLsTwPX2ytZsyopop7nx5UnAJivEER/k0rB/Yz/kzA/pxOJY4R1uQFjVtHxJdwXeamiE9+i+eGQrpXrTsp0h7/usv1p9RpeVhia2o1mC8HEMnj+T6LMSzNccRAGEq6lR/JanNxVgC97caPmgnK+vCSmwKksDIfaur+9v/8psvMmlJ3W6LSpGgC1oF5WurdpOdFXkgfqbkBihnPmUvtRt/ZT0yje6HLqf227OQznL8WGMAEy3UWR0Xr/s4tK3wJLdJagViuCdp5gjdybIQaDHLX6DxTuLSed7R9mQ3jKp71ZwKKKPpJVsofjPsE7CBvNoYNrDZmCButZ9CKDZr4vmK8kTAV8wafcuaY74i6Ka0KhZnIHZSQodRf86XpiPs4dTcyFoEbsujOM5PoIHU2dJrlG0m3alZK0rOvQZuKI5KQjcSbJoFdB7NYUkqWEF0HDQjjrHeCmQYu+C73Mes8gAE3hePlWY9pbHNSu070761Psj4LyJDiOZ6JfFu8NbTYXBecIXUm4fMWEhlKfRRp41PaW/LPkKDUl8PyztDTOs3WmBlzDKiTExpQ3bBaC97vcfnih/rGg+wDFkKEa9pv7AZdfhx5WFp+wH4utFkzGJhyr6XJ+BqnIRwXzCu+8B3rPStXiMjSCahcZlLkjO+HFmSvQj++pWRyfxynHEVEEm1m90q00jcHwIlTX3FB72LHdl4+ky/nKn3EJHXTtVacx+nTjJFzRv1NgnyenyuVupb7O2nk+Mi11gkFY91TEXS31Jyx/VnDPnb2elrE2S2/9Yd7XEEKO/isC5wN+bE+UqxmiN0nlNPx3nIuZ8bJzvMxiyZeuDjVWsxgFQzeQUPxY+fmAEE2fU3iypiK6jWnZeG6u79vNNn/3XFvDRRxrx6Bq7MC6hE4/HQk9oGNuGmSfc98muvdCQf31kmPQ+0p3WHHcXbIzcn4sP+8HNQ1Z5A2/T3TzxEE9fmBtaB9yEZC7yCvqlIEiCPGGqWodY9ijRsH5Qz7ZT3KZKMz/z78INV0J5z4vB8QqlRV1EVLkMw1D6WoIFX6S1BhC6YPII26ct1njoyJrKxADXqLwi0cESocazmU9ogPNMZfzWaE5nVGyMQlAR+2SKTtIIBdMEL7RLHG/ZYhUlxV2khBIR4GM9JW';
  const _INTEGRITY_HASH = '576408783dd621a8a00f98bcceb24087ac92e32ab147d1e2ab2216a28f156384';
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
