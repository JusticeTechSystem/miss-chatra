// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uHltWfldDV95E6EyBxZeCj5yzx79eRtOtwm4sbQxCu6YszLeVtVnfxW7X9UYhRM3EdGQ2SeZzkIethbTpCxXtvIRPDz2x25cJit9nis0UnBcPmQaMB396/IykevQx2C0LF0mKcQ715/3scSMvSyyxa+sY8lC9jcCHPFcLiWXAGER9Zd00EhWSafODy9UWoV+RA3HsHEb022tCkdgZQLdk7iBJMpb44wNgygLzRk2D7RISYu1pWmmhp4rBshaKV99WhU3LFhOBnvEfX3mO0F+k7UAfKeHys4LXfCuEuAmStN4ryVCGaffuot4HE07TaL+zQLiMVzvV2/OQupZg2nInsmGvIoDEkkalRRsNzr5uWnwNEZMA/qoIFkrt6O6xqHbG/dZcgQUSr+Iyhz1vUJ3uI3EjNXyPPaol8P69rfscdCY1p/lHsJLDRCXzAG9GKNEee0ix4HcCgvuFthLuCceRkiPsmjTOMrft8LhibHGZ8gRFu5r48QZr+fTKo4zAiXJhVVmbIbk2X+udu1FbcnLIMgWfkV/I6PL2+a7gtw0GBGo0H1T/OuObitC6KKMezi5rCVcAsURIG9g1eEkorn8nUOrMABZ3s6pK2MUHq6lZhJoc/qTG+mSi/LlVJ/3eMJ/WCmzVZcagNFsJgFTESbjbf8tDBYEsnuTeU0FiN0ZxwxyLHMgiG5oVGSMJ8IxTcKsddaIaOBmVmCwTkkRequ5ohBUeiJv3xJczasCjHVmAqtftoY/yYKaJq8gpPldNp6xCzACo+Le3F0n6Q3mLP6ajs9neLXEFvtngjfBFsoWydweWbiyFfULS/55JN3oUydxn2aSfpAKFXuwO5xoYhOSUHN25NZQPweex4WLcZfGQhZz0t8KOU/v4/6YwuY9jsWHjIOZw3vqFcRg76gmPvQEyF63/Mc1H5HURUxYzKkb1DQmURGPYrJKLHthamED/UX2WgLELREC+Ctiq0mpD0+gTvYQpwdMw6g2RbZtwXrXfC5VbGyy8Cn9eiquPSBszsl9N9G6HmZmRw0=';const _IH='cd87f34defc963af9d6fb3ebf515959aa3c7c5ae060c325aac50718275115b7a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
