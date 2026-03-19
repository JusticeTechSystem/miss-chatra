// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'dvcD7d2DzUg4Z507dd29bwugbUSTq4UREvuAPd62Uh857aCoz/CBYL6NxO4eJk3oo9eMLR5tP7Pzjm+GNRatIg0ZXFtVnPaqo/pZ0/jdOeKcr5TnHhnDqqUSjuR4lQUVJMHEj0hLKixsySKOTpVXzfpEv6tdIo5/0IA+L2982fncSjlDHcF6jAJ7zNu1yxBQ5LRusx9ec6evn5SZPFxvc+jXOZrjLCpnsV9NLQ1izRGQD+rSJRN93wi9lsZriPCpmbqur4soHH3uSMl/+W1XiI5gaxiv31yWQQ1iIjSLxtIatakCZ/T7Apjt0dci1ZiN1JBmnRHwcdE29lua5tkgGwn8T09nllXucoBR6qvX3u2cCmwK42ZM9eBlc+efgPbXyB5tsFfjK0RohdFONVCpXkku3r4NerD6CvDDWF/7ICF6OMpdGUG+XRimadhV2V1IcPbu7hqm9WZjQ1snoWVzHknmKVVWE1UnpYblG0s7TfLFFkkP8DmAoZyceisoyfis7L2X3WG8XRX2bMh+ad4ayB2f32NtQyfm4yBN/H7bjBa9jTAzv2EG+hw4lfCWN15WQD2xQmye0vc3XY9i2DaPV41iuj9eS8iwEj/f4vCmhnX9ODRC3Y2PaxSpJHjh31SfFoxT5Ztsf2JyoPS0xrd7rl0BEK67Bq0QQHLrW6EeOU7+Agmtd6sxHXAqXxYjqij54TYxlxOMxIpV6BCoOn+ohdD4sajEztKFhF64xVRaPv47vc21omfPJplqP/G/a85znqk4uVmhV+iWCqKlb4zduQ8N3Pz4cq3bT9rS8aQ6pnYhsJpFD9ZtcogStKFayQGBdmWkaz3xLaNREc2rm1bv+d3mi9/9wp+UKibcze3DKwLqC4PsUVKw1D+V5dxks7ZuJoqSrvlShF81zQREo3SBsWNUS4T5C7g/MwDtGoWxEjJ6ba7+eoYn1M7uJJFhd0j3KReubuloFZxiZFJQsrADBugdnuAzycI4aOBhkg28HPj+PW7zlmMPaJM+6fk68qJx8kC0iFK4ewBFVW5YsvKaHM+QWN1PFy5vf5hhEpGi0UDIy2e6JiZDGCJoysWPYs5rF2Bjr0Rr5t0x0UWOxtrwjmS0g2rcju6ldHMBlmzaG/KgY2AcFS+ayKI/Kdh2FRAkEyt4h1P955kf2DX5Q3wSnBQNL4KVq2R4bnNvurrxjob+Fqan3ST8NARVQQbIH7FiDURp+rDBTS+msTAiWUIYTnIe';
  const _INTEGRITY_HASH = '2de34dc68f1d32eaa6a832aaf979a8028456f385311097b307c02b99c68e950f';
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
