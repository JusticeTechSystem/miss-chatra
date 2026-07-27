// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT+RcATEMT+NGyvwcHfB7ROtv9lHKLK+OunB0y6AKrJzCfD1DBDCImlC60hmr64UZgdVkfnXwvu9rOO4PXVYRyavOcZcQOD6QzLvOxSDDIllVohnPzXckqoVQRX5bF4LHyIHkLMS6GilyEpRRz17rmZlRyevvwhESb5u1HecbZf6Br2Ip1KrYgK3JoiskmgtWSh4pLHPVz+px4/oFYFrU4w0CuQ3ZVm+0lMQwTUOXGfA5JmsPFlVEOm3/dv0d/UFXZpzblesbmBCXLdCbZLmEz843zA4tL+BffauCKt4/tGH3k8SOc+yfMBW2y5y+fqaPS27+18IeVMoDlCwQWQpjQgc4rxCQ/BXTBnwWQPnQFfWu1TT1Oo2Bk29JQPvzKuNfma2CtxdlLXD3JpDI73CVx5DUnGRoMLYdCwvpwcar5th71ZQF/7ji3eORNrZ5NmTRsFL/av4ONJYiURqzyaNm3dXhPE/j4Z8cspH+ImxnX5pSn3O8e7yTZzt4UCFONAKYXUPcnD4nndZDwPE4dkNRpDzlG97iDiCOy0yeQAB0BqjJPbJx+IwTF/61oE8w1BzMrXEp171h85P8NqqXR9A2Rmy72w+OoQ+t0DJp3OYYCU7mpB/W3JaJftaFB0SZiuaCxW+mOaRfgM5/jt6q9daxDFIrCSrj3V5+WeDoLaOBJ0dqsr2VQGTYg8KW7Cpp4a3nBNn/nUYQko1j0HCaQsZtPvp4omS4hICqWKnZXKZtzfqNsljiCITcAq+NZc897VISTrKsEkZe4kioKIkKS9GBpwtAybWy6Z9qR0acu31AZ3lBAJIsludljbKJ/Ogc08vlz43Q5yHkiuHpDswu9iWw0hvTB4rEQZshmiY8mF77XdAuoHv9dhvzH41+Q6LfBZmBksaX8hKJ3TPu7CSepYlnoFXMlJKToyEl36m+3Y/udjHLWg6u7M55Xq4zD2v2kr57tN/0b2gOPYZXEQWgHglPMVj5c8nftOcy201k28K8dcQrIHGOFLnlZVAcc=';const _IH='68007874126f05712438a57ef8f00dbf6de81c078b882e6a56bbe74a3e2c19e4';let _src;

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
