// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTPF1Idqe8YOwkfjcoFp5F3dCRC2C0e7UHrehV3NKX0b45Mmx4ZUyKBl2GiqXOCGUuY+kJ7wSp3Rry0MtXw8djtDrt77ktUANQIgddnrHEH8D5GhR9uUDkzZ71/rU4m34hCoeCdy+AmOWZW37PL+mYkGiyDjT6PMF8rijjzLYtdJyipIhYay9tmu6fkp2Xka/jjKetnLyByjbPUy9R1XyvyHr+KrDb+iogqba/0VZUbfO8S/KcmMaudseJJVbp4vvWu5nh9vJgvY/FII1uVqRWEd231DEPJXefCrgrWrH7Nj759jkiKKAlSerZiFK36STbfPI4zGnALSdGrnfQNUeGfkRdTiXtiVqW4OCgKgr2o5Fr6SAgSdCQMToU+4yz0WnIi8K0IwcV7HBtqFvY4/QAq2DoCTgE5H4ZizdIdCFZStN6ThkMb7f4p0UpGCTpIrkaPPy6ZLfkY0sQATCmzHmTbp6j3MbkY7gReAWkz1uFrTAeMvjOMW0H62LLYXW2LkBtu2c1rHb1IblJMiYfOvlP2xsPmyF25UnHDEiO8jbwYcvWMDdWYrBaP8FNW7p01PD2gRF2L8jjlNB+dMeISLC+xxaeWZUJ1YVh++cgJ/5PNSV0JsE6jTJ5eHCmZz43JKXeB6LCedZDzx73qxagir+gUp9DI8IE4PEqMfhESoyeH8c7c7RCx38HQD8s8/U61lgyIUPfIW9gsNaQ9zcARyIwKTpq/bLJd+cFhBMX0TRWEGunTw8E3k4DzBm9rdzpjij4t6kwNfB4WSFCSn+3h2cBJd+WKfUIn31TjipRIlWrOFFxFHRoIAkdy50M763ndQ3/ELeJZ/upZkRRRuJlCo5DlkngbesCsJCeJc4diFmq8aZx6HeB5hU2en8OjdliEtIFBkvCtN2pGv1/S7DKve1U/ciFbGVUGgz587zzfzpiY+TY+4t5UerweiWvDtdzuMPrDqZuCsFamPdX4iI11/gKeJxG5ybD4vW4hNRGQvmnjcxcvrbmcZIavoXpuJNISXVf9wcnZFPCc2kPz3e/gHO6YX64=';const _IH='fef1a68c8c59dcfb956698392e8cba8c0929be1c6a061561e7143845a9928ee9';let _src;

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
