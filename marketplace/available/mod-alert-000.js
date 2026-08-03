// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRRfFEHPSe/NB1lcLen3ttrHgv0VlSm0xPWsE2G6x70SumNIj3k5KLmMtcoqwZ7HYy2Fj3V1SwpkABz4LOVWoP/ZU4iXpEEpHILU3zVbmcF1QPrmFC2e6GvWSSNbUarC2fVVtugFUqDrup+DxpjY8T98hKUibJSLlFFnkGqgdey6x2sJuQLvDBLmSH79e/l8Udy+Llmqwo3y3IXf2OaOvTpE0v1Y+MbI6eUOuFt7xMQKsBj9SE+6kC3Z+nBAqzPQFVZLlTESUgaOMZxpJuDuyMcfbV8ZKmiGRcgV3JbbI4OBgdAhDuikOqWdCW++xBdDrR+urCevYitwdTlkU5swPyOPfV2MonM1AuS5dl+G++VtcXOkILIOt/jGLolBxE51Mf/yA96oF+b1sYtUIZqCEhReNwij7oPnWuifBC86TrgD698KJXJN0xUvGJDrCUS9N2LREIReUo99lxN8k0Fsn0WK68AOpuJbncwqCwxDzNb6j0OPFGC9nmL4zRmwZllpHn6/vhiFzl2eqADsNB1dm5PXeGFTScJ0tI5PykqFdaRKCxOJcRGcf0RSSroj2Ang34QUOXr3muOY2Vukyq0As2bnurpNiCEbZ74OwRplG+lynHr0ZxR24FXnvbeQ4/RaeFVfyjGO8QMh0g2LWNpaheIPaj/z3OCEozbURQW+yxjVP0OvSHkgNoyzO+B5YbxX1mYnX5gNzNpBVZgZz6MbLT6N/66UmEitd3zDRww9YuSjP4yWMvBFwp4tFdNKkB2IU6mR5j041Q+t/zUxad8iFmu0etXNf+552FuFlsxKJpkk/nqWgcXzTcA0naXszjgQ71c+qVhr64YD92+7IjncgMoxSm7SlSdwOKxEGu4LvvZ/Pa+DVBSjzHFYvsscxV/K+UX5ubKYUPw0DF5Ia3rcKokvQHRaU2zXBE4oFn0sE13/79UnqMnvO+7K9UsRBv0PNl/PYzEO9gUY2QlPW2o4IHrDiQLCSboDnq1uTNdP+hqAsJWrY/T5ZQxb+T++4pBexHelwRkMdWbA+TMzKPAX5IYpsSltKgsimLlk0Fa4O38UeV5TUDpGeAjJ02gMJx4u+Mln6Dw3JDQ/tprgt8vZX4NlC4p6nln5IbPvKC4k7akANpqYNNMRbe6ReBqO3ODQzq2LUoHuNenXweXTEhJ8HD+UbYR4uTVHCa6rW2XmwL0Z0cI4qgTaqBrJnQkziSOTD3f+R5QjmNG4gM8xv0Fj6Zi/zo5a/IR27RI8nXa4tifr4xdAJbgmeZSbmzkyi1EmbmE3fjhi71+fT/gEyEa0W5sHjnr4O3bIcQEXoxWH4TFSWkHUSFTUMH740L7UQwDpYOQ7haq43F+xUg3WIlqOOMo6Q==';const _IH='dba8114674fec4d994de72bc921ac60437964b520ce8ca492063009eae671d08';let _src;

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
