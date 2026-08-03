// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQZ4jLuMDn8hf9YLQrGMiv/wYHmJjftWnb//FjcAdxOfJGmKiv3bSiz1I6uVNzo/EZVWsyyPrkCwrIfIByWnJcncl20sFb19Yaxv4tFmZC3BA7a0jbIC8k2DCcT50vNcpkKf2zJ1tiOmkhUlXTcZwxgiYxow4i1fBL8pg4zBknpBvRBz4lfE21fvWmNYDRSLcWhOa3foiieNTBtEc9A3li7C1R3kQyl5QWGmh/2aiy6hjpKr4cXWrv02dMclsHIVrhJp/BWP7QGYX+7lZFqpYR0J5EPDXCoYGk2+8Gd/9RqaEIxLcLk9/h8Fy52ZjctigovHOK3493JFkIQVddqrpD6eNsYKKy576J2ML7GL0S3sK0/3bBd1yYRzdALF7vBuvv4e5Bhm7zvKJrSz9Sc/o51bG8obxx2W+s06Mls6CAx3UxyZvCWmcjmg/+A8+1K8ffPo5YJA4AJA5Vfn9pv+S491YhpsBcHc9kdi5cChHoxQKGfU6mUT83Cz+zmczuEHBMG0ru7MHwZ9hQRLsAimk6rQxjLz1RVutaUyr8SeTCF2ZqUxoDXiigJr5KjdTSYHagKrZcV24MFOLM85TyerbhdHFJmRaK5n43PXobHL/Bt57VBa5gmvFkSuYAH8BFp4vY1YR8UX0e98ORxd4qx6T3d5/QpyTuyDYPHiL6A2LlsslsSCYTQGUcVrVA8DUmm88omBWIznSVhPyyk/W0rwDtarjBA3SJK3fzyJ58IoSvMFgh2+4xLusr4MWJUiq8oSHWYX3QvrLTkGjowAJV/F0cmhKfDiONvDP1/9Col1pRItQDSutQcXzL20CL1zrOmZiO8wvLE/tHtX392ovV+l/uhktyx1QOznumvyBUGbibJsLF3CyKf0feX0dYA4trtDjthionQpk/18HJSvt/v2B/CMphnL04lQVByhxKpt0WaSg89xDHp1JWw/IrwRZ/HUZ66ECNbwT5spfZUpFAUuJLf8YO9l1fmSGF1YIdqezcR+Ogqswe4AvXvWdGC';const _IH='f81883db147d5222b4345866699541e02a82877d561280a62b34cc5383308364';let _src;

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
