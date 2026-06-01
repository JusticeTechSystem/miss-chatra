// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:55 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzBek5RSJ/h529do1c3J5tRG/VLVba4C9CEkTDu/GHaFSVwwRZE04ATaorE7tcXc/+eFs+zVLd7fofH7TsDWAEpgqK2zZBBql3faeizJJlYVuZi9LlEcuhrqljjUl25kAELTQWKad2Vt3+4Zx8xCRD3yhLkwnEbhJyw7w3EikMYKFS4kswfN36jkUIYJmHTZrJ1HRWhTd1FlszBh+C/cmUBMBplOtMjgaL+q3NWfpqpXYRvqqBmvA2f9Vj1z2aqZ5UNIuao1BiPKTHp0ZEWtcMOEOYnvLfSQrNv+yjCbibCF0YlGqkBKk3XiTskgI34MU19KiLvWchy7vucZhSVVzI++/VuP9hG3cLq9pA8hX4nRtd5a3NuIBAFRCNOPbqWYVzX94ZicCUkU3s0Extc4CpdoqRuTonrRiPkWqAMkbv/RD3SerWlLAo45fK1EUzt8nS3hlZG1s7ZRFJCYGphQzBvUtK3et0Q0y+5PXIePEO0EoZTRI1+4lmXJTuYOJUItCjnFx2nFXARzLF13OPsWHmlh+u+ZLbHtgt+VV7aYSpglLMvRZbb/n4XtY6EHhXg7CZKBwzjX7/rcMQfYmIaWEJuzKtTdFej3VPnkOchW++Qp2r4hTmRSTGpqe8Ah2OW63WcadE6lrQlwLNWnthLtZ7914DAH3FWv+x17S6qsQnZIiwY4YgxvyF5SCKXO+Hy0pveggn37qN2n2EEEd0noRRcuyAElsS8C7rA4yhmSIcq6YHTEi7benkcY+cYcN9wJKAzSBBExqiOxy61GXpVFpA13Ly15CDESTpRJLGAks/oLD9RTiQj7a+d4/z8KH/HnepdiH9q/9aXrwPyJexKIiCLdue9qkudyAOA0lJuzCb0Sufs9hZveCy7c0Is2nvP5jwv9QnVDZFDxIpPmk82J5s9mW/vwnIWwTJh7cKEH26VNDz3XNuzJoKLeW4Vh4cxQJ31RSRZovlstSOWvBI1sfFVoxDwVbJzhvcCV5mlvZ85hIXQaBBXg4YJGIAHNcQ==';const _IH='3a5d353ad258444588695ed519c4b1915261d1c4ba78becdd77e67127912de4b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
