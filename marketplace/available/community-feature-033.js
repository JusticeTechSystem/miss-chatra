// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SeII/Rky0gBuLovXx8OAooJFcK07bvO48+ceMS16914wb06rPQV9bapKXcIkcDTp6YnV7Aj4c5NrU1jLBOO8Enlko7Lzmfx4tHdhN/WgUi8ZYv17xs/uT0dCcIEL3Nytckj3amtxxvY1fVhL6+h/vDdAAHYdixst9IC9amTKw4r/26lAvT2kWRD9AqZUbvW3Uyqtd6dJ+LUO6PXtgOo0zXtmGA0Ecxg/EDldM02uRtLhkRMht39usymiiC5VZv/zwtlVdPjfO2RdZ2sFY/TT9416JgYiim7Gn3bNckphndG1l2Nje2UNo2c1AM4LJWJyrsfyQRrcODfR3gVYcZvFxoEzpIZLerK/Lv/oLNcKbNNkdDhsdemQ0WWKnYMlljK7+cIYoSg+n/z8qMrb8GX1yniyivYidTPil3qh5dlke8Q/Qh6ZEKn7H21pEJ7Xj+4cuhKC5b07OqMuqlJqPU7np3PiJslIYoFYt7znDD8xycHiWEzecQmZB/TnirM1cHO1mDOdWK+v66nVoswINw0YmmsugBCXo3Q+rTjssNvpuLp4piP2Hj++KkUELTKhq/e6da1c+alDhq30Vu8Ukmy7Iphzd3/n0tdM7rNT2gl3zTbln4r4vhtFHAKXh9ZHbIR4EHvhMjQ/9j85TRfsv0BxHa5gJZKHZdEnkocFXLwBztePPc5j19PUdbKqkGxjg8gN/X3feCoADD55RBfnrqIks7nJgJvg6IJcOg==';const _IH='953a9b36cb8e588b65a67aef781b0151f20400aa0b72babe283dea29a06b1b18';let _src;

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
