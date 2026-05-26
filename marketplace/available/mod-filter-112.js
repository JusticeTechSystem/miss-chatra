// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qm/RpdJ80gX5yRa1nv4nguxIoergAEwYes4UBqPtNo5hCwBadKktp8d5qAGAtmfcwgbltQJz+aYVhoSGLu/DTx+wn7I+bJcuAa1O/2q0aC03y6lvny2SE7Gg+jLIXOv2F59oXlv141gkQmAGLcI0rQfQTxGU/YxsrEp2qtAb0vQGuHRgY0sufmTKE8E7Vdp0iey/zLKVzKHk0YbtevXr59UKSO+0OYrwEOzEIKnfq29t2OaTvUIW/zJLMaOSnVdXry0HcxXGVy5u2EcFnxJgIzeebBzFCAP5DJAyTGenzTLcfOYYeaxCJkwuoYE3JCNv2eTx2tJaJJTI+N+xsYCBzWUlolt5jM6Vh48stbXEm0LTdMeh6jmL0rxn7dXqGTa0wbxq3oyrGvI0EJ0A1j5hrG0VkozFV9WVjumZ75P92HhEdhLNCZ4J52RbQ1i/e55ra4igJRHD4OE8OVan/aVaVUCeLggh3m4/SIY15Bg+gt6o2RpNyuFrnPj3Q4osQfCy0w5U/iJRwIjwPCZ/6MUhjEiLPRMIfx/VtyR9LpeYi4sodHbYZCW7lKgXfsG/REXD+T6508IjX4b4DhceDjoFbgCx30/OwB1ljbygoJKl4jw7ht4uOR2nrApcdvEsiw3qq/pr9d/s/kmBnKAwpQWA9JgolRgzYemGuigEeQ6n/6ZWNZr3e1YXHPPtp+ZrG4CNHFJRk6qKeyHXvJFgI3OccqSoSvBSmv47e6yXJUtA7EP914g4G3/YLxa93pd6v9L395FWynTZPwhkSHG2LX4zq2/fl3uTYKLEfilgLECyZwJoNr9O2nbSAhaceLI9gU/o3FjdCNNjQ96fjct61EE2gAF9LuRqwPPWVLNywZ/JrN1+i1HJYVr9NoMbYO6Ck6UfXEGCpJ0Mn/9ZE2XLcX1OQN0gm/1LZ5+SXrrrHE1Uh5CuPZGN7SOM44OD0Z2bGQBhUMRZ5MAoji4ieJK4qNHDQQ9F7wrhd2n/QXea9e6NjbLo1jmDdJy1a98lPjFPgcNjCgjwtAu1lAO6fOF0Di5Bv9r8ee3wn9WWKVFUCm4NKQtlgX5LF9Oi/3nDgQ6Wa2lGKyprK6xY7GNz7ONmKmKG3N+UONNXgECDPn6V6f523tx6oufXqfB/DT3R3QvgmNw9jDcUc9FFoyE3oNv1jn4YK1mhj0NPBnB03p/vgagbGvLUjSbIA6u0rex/8JtX3mzXeVPBty33prWMK4Tr0gUNODpoSmz0EDsx90m1b50sXQniaJ5N/dve2hxSv95c44W+3SMp5Z+gZSgScxVfR8D+d66YkBEYQpwocCVcecKJukhpfRdti4Fys063Axo0pvoOD8uPkOWbRvMFzNbB9vILG5W7bfyB+egIMkOg1TyjWcQqr83S4tcfOQ==';const _IH='b33aaadf2d61bbb48627c3b3fb26e22e92dbc1c4d45bcbc89e4445bd95a7e0c7';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
