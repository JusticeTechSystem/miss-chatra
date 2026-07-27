// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQyzIVdMjyUlC/QvSeYPZX1wAL68fTkAogvzOXSibeyJc884tOYlG6r1O568Qf3QwhguynZ+JtrSSylTzYqn/+/XUKsvsftHaLIGTyJ3+P//Ppw6rcjgeUsyfuZPavkoC59x+Jdtv4FH0umZyiNMysDpKegultcQjZPCGU9NLBQBMgfkJNr828+kwfBJiKhRXtJmINekr9T6MZREA8Mei/8ANOf5M0oU8N5nRb/r7h+ea7LWeg6tJldUvdIRbpKIefc2EsQ0s9oECM6o3MexBSr7XfRxk9J72c/PK4JPNN2VHmGSSdpucd2SGNO5y7iSjZbld8hv9xrGpIWom/P3jI5T1amZpAGgRW474SJrRfEBLh6fhdZAZzBHrjEmiWyDIBOqXoaLPpFZ/PsutNvm2bw5nIi6I+kuJHndKMVSthJLjYoa1YP57/bSz3daL2kNpqIwrupQ3Bz8HBIcZUHZuzNDMtle0pVqFat0626FjIl6sZfWdvMhKawM0cSrkAYI8zMacHszLWmw/nYoJqf81vF4Fccq9y9MQ78TKULsXbbDrFnmQ7hscO702OkxMX2TLR8CTBKVz55sYEVuj3HQSI+zn+X+N3I6VGrtF5jcLT6VixdjCPeSm8Acgl7L17x+8tzT3347fVXK794bSpJ65mMGd3o5a9onKovPw3doAR2whHYT/qNxqnfJ5QE3JqSKYOLc3HbDSFLrhgKoRJCcLOwBpZf0zz+vSnXxvJtXZ1RSJCK+BPO0Q==';const _IH='f725921d358c0bdc3b6c76df6ee57cc47536d7eea5a9e44ee9861be2757bfbbb';let _src;

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
