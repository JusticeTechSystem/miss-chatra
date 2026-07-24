// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:58 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSIG/E1HotMIO7hKAuXY/i0fLpupo7Cx+XisFK+QM4EG5XPICbLuFT9t2hk0ccWhHMaCm373Zxj8idXKerVyQp1QU/nPLLqSKbaf0SmFB+CqGlpMjD25tWddEOu33H/o4Kj7up2gLuMq3/hpF5+VYwAV5aRnX3RgoJi7G1G8/jpIcU6uBIFXe3+3aXYmqosQH4ihHJwx+jzJL0Rha65bjBeetEwvrTv4ZTgsR1C0nyx8to3QQvFYoIqsffCcmrifVJEtAHDrb0W4EjoWigEmyNTYS/j8Nq7yBco5dNB5O+OKqbXcDcDiOtfqh5jjaRSP9G0SeY3nzks+BATBxH3Rw6Rr7VU13YImS8bJhNjskvihVg4Sf8R9bChdeiWVbMXqaAZh75IiV22qNkUauMZT2UoetFY9cIjNmDk6MZbJXk4onC8sIgXtzUCrLJy+01r8lhGGjxgucSHDlEq+NyZCsgGEN3iZbcwoG5CfE/JWwlNOxh2md7RR28/O7L9SsihcHeyAKSsGUB37I6usPORM+5KDbY2qICqPBJ9q7Qcp3Y+6UJ3goNp1G3wzG/u28vGmVrCYAf6NCFVaKmG5kH/7LITtBVVAzF31Dm0GfUTLp4jm5FrtpFhIsJJZW3WD9Ob0NYTamM1dW3dBg1UJcegy4CyT8Mj8cpPMWTZGXTY/yzP6tAZwaaEdD2m+Ly/9COzJn9BLq33kpX8aQpEf5Ufonv9Ywjf+Boe5yUpiNPlikPuXER99B+sf1+gfvp/Oc4Dfaek0SAKQb8rAF/idT/+i6RtCmPJWqz1xwfkejvWL843am2pFz8SKWh/5XJOUgL+a1vHUIWXg8jN3p77XyEpXNKmnYKQ3B1T0dXbOghN4pbdLefGc9bOLCwCQ6GWfL5koUjwOXlo9XgUWFS69V6HdLwTDTtkOnsSxFfI9aOT6HuHaqmGrwKymlxu5F0WBF0x1EziQ6lR8fj9EddUqYT3ojXcJjt6ByNvt+OnMxOs/cj8ehvV4CQOPQ==';const _IH='642fc77f4e10a12717cb086c986b4bc4986ae079826e371826850b4ee7739163';let _src;

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
