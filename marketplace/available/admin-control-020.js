// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:54 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTCJTxCNSS9VZjCzfVh3+O8v1ov5FYH+uAx/cKQhvLfaE8o+YPwf8jRLUjZ7aOcVCqzsxckQu2FjHct0utssypb9vE6TthXg+CxDXZvBPhmHX7lpwtGvvFLyKQPk9praQIpKNXh54Uyi6e6TfVbdG+sNmtLGFQ2L9Xppa8FCoWeidX7aECh6jcPONTXlZLxk/NGyk3FUES3zSjf3Tx800x1jwGvgnE4udbgkFNpKhePuu7PL62a3rC9p6v1hicqzW8e2cSXsnQbrXw/cncE76ySYsL7GkZAaRa/xxa+pgsToHi7lbY89yd9JtDATkZEpe8X/viQ7Tqn7/pndgqzF2WrHyDFt47bdF9vBkZ9InWIGI8oV74ovQqz4AGLMptn+hW0IqDRRq+Njdf3maM4bVRhBWzxHtTW4mlRpVk8OyQCt45se2EDU8WSleuWzl+YgKhCCdivJAjpeT7xL+waulypY6s8CWFCbad0uQsUZ+9XpQvovf9AVjzjwRGxCVgO+28tFggGiyRUipNNRm2CVW+J1Xfp2xAFoJ7O0frPeXyHPTFMVGCuyTpUagfPzlm9xdqjxq10h3O1MuZEEEgZ67xpqL+WLDsXKc3gUEesyBQZ0+SvgYpKOGQcl/806OAKh10Rwcqxn1F/7sqqRftudcx6r5/1Cc8D+9HDAsNBydeCXNfIpZAQR4KJ+906gxGRXSJN/b28qDpdpDf0NtHAy6ZsdVqrsYUYNEqrzMR24tVeimh5+8nlDmb5AwIgwtxbV4GXIyoBWlKCZfByYl5yKBSlsztMZJpUEjbBJ8LUZmdxYXEYdm3cvcuTNu/GLSH07KgVsBPxekGFRzOVS8ztSvvMPR3nN5sM/xrojht3mpcng4bxacgKjwmOxPuDsMAOU0HAnF1zMHBHYVKAed6G4DWdYsy9FaUe5KJyXAEznzIRbs5IVMmq19hmw4Wc/qswDa2j9dFt00Kk5z6wLZOOT2g59DT64Q5OYhVQSWs0VaTfnRsLuUmS4XtR7f+lRSpgasa8AQ==';const _IH='0ef042ad1c36dd13fd59e58c69f2562f25957f46f8d8fd6aa7e01ef84a8f964d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
