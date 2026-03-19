// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Q7Mxz0VA2+FIIfZGDx7JjOA9pi9r0f5xH+/tFj41RtxH1p8lrojgkzSxM2N+RmALrfXmvAfIhphNudP7yW0aZFA772cHlGPCvDxbcx8DVwJnR6vx+1hVQsAv60ZVTFfNLbRdTpY37wl7RX5nDky0q7uieDpatedzZJohRBaGi/ZkxNscWAcdpAjstmVmKMpxZYPRO0e0HszpwFVdJJsWrRXMkPfuN+S5QXnPUjfxb2DtMmmhwlacaMuiq3iZIW8h3xBsqB8M3l0UTqrjXlog+JWlT433FbSD5wrCJ+CN8TjAV/F+xiMecGCAMN6mB2aWWuQhOVfA7HtnUvIZskZu6CNpF1Puh2Gay9YqjACy33iuqq0glL46tNJMc/ckoBrbpvFHzNiss2S7wYQG12HW2l86MgervND0OVCEsSEOt2B/4IJe70xh7oqygdIy5DTV2o3Ol00Cj9TohEAyq01eH88fTvCJggcokHaZ+R6zZ7oJbUFixkwSYAae9TGN21PcCUP71HImU84FRr6DSzLOoPbrHMAgm/nMe4vKmH+8geAO2yGogtkHtt/YzSvd0aKXGBCwUSIl8NhOzsQKezjXF7Nq1ZbQfax7cTQDRty0vNxgIglS0zoYdzawfai9+DXwhzkRZX7x++T6810FVphXgMF6Va0qsB+YhUlKn60QLCbmpvTWbxaAywIjF8EtoE7EPDpEZ180f/JBJwYYxAuR4FSvZ4DeGnx34+Qi2QG9CvV9PDA//ovrvGI5/SznoNHS1mZ1nv48Ggn3yZNNe0wRcbguWIt/uppuuIuD+hsJ57usaGTfdNDKCfM+wv2wNnVGeSaRrTYicUi+iHEL0eTpstfWt8+auJg+ci/IoSGM+fEEMOWuj8yZ26EvtNVXmkEFpD0KJ8nCR32bWrSxFAnibu6nLZzPLHyDKI8Hb/39JbU4TOLWD/CQ0evz9Ss4zaKx/Xga8EZ2Nm2E6CG1M/2f9kDHDj+0XUOsPf535EBrD10ioyFdbYsAepSZj6ChV0Jl5jf+FNmig5vORFjpgeKicvtNk4ZpQW1fOFF+JsmOt4wY8OpeWRHTyoCGbe2/C85UI9qcXJBHNbrvUydMD5akR3N3C22NSkQAXfH12zFfemnuuPjWC/3YZgRrD4qXhWeszt2E3x3zCtH+th2DfAtMGLXVDIPbcx3YsNsY/WYVplhBaL0xBwbmbEtfGddBS7f9ZHL/5VhTT1K4VkbAI1nrzw==';
  const _INTEGRITY_HASH = '809e953ae5a0c558b29ea28c1978e587560ed63a313a02acfde7b7db430c0e1d';
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
