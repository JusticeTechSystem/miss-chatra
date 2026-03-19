// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '7CtZNdD5JGbqdj9XXPEMJwhjcn2zEJacO2nMeNihIRjiOp/LkOptrkXcHAhEa2LLZB+/QMMZovd0Lt6yMXLwhJMe1OBMF1vtxVe0wOpa00Ev/hRL2bzKvyj4n8Ep910hen8Coq/5L0PieccjhPNLFbe8M4eU2aYwqjr0PHuDn8AtFMKSTtMNcnsqyucnaPu7+F4a9LRCBDQjNFXKwxozpZjvgLRB8P5j/eZbHnh2+yBvTCB2xMNQ8Q0XGK8GRhKfCAkFnUu9njznoiqyD8b6ZxlGhoswtYqR1dN5Di80RGC6XJJSrujc/Npd9D5Jh8daZAIRl1klIdGvo3D5YjFHgh/e7aACbdAvulXWL3KkA2M2Vc0rKjl3zhEvnijFaYfwEmWxDyB9oyWTyA5sNN+ryiM6gR/VUl0YEkg7PAu+6UN037ZR+cq+wiYyQObLEkycAqi/gacs1ucJhGciiPWsQg5kx6Ts7ULN2M2Z3sMz/5nL6mJscl7nxNm0Wg7/NkHIZHNHSbvV/jF5Dur3P7SYv1UY58VvftifwqYXJtN5rUTLWPPDiDNOo53T8uTwjzEStYSiUtqHAgZozo7sQdR2BFAP2YVdIY69yEW9jG5z3rZuGPicG0CfFEnV8gnGccQgRTNAjg5OamapSQdzi6O77103TBfnOR3eGC9DCSwxY6JKArr0iNi+nd9KHVW+HObt4HMTe65Y+mKCFoH4put3N8mZuHGrimzLaSfqvomGm9MbXXioMSnRtWTdGjr9QwY0V2q97JpFqDELVzoNp51ltlRLeA8dfLoioElTZxOaQsJEFGz6Zusuv8RBEQUfStC8x5vsCBVHifUheihNwaGi00Pr2gN8s7C2HpwytSbvS9xyEuHZ/Lx/+GfPVJkpNWrj5HSOzGTHiy4Lx8uyWKnQOA5M7JABt4epgi9kFswEhe9090RYBCWZRJQ8nfRzdchJp4oBi79k8UqRRqCtAGQzANkZZ91gvUrfhHmb4axz/6tarfnk0yCwW+hivWbPFndmDWoG5AjxE3HplNcFYP/peUo6';
  const _INTEGRITY_HASH = '2a80cf2eda37b276ce1fc3765c84cf41b95412c4d7bd4e3069192f331ebc112c';
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
