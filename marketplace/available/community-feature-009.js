// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ5j+tGpiFpSNQGB5vMeckVUHphYCBuXqdUAhmMag+om6CL/tgvn5Bn5oZTdh3xDbedek/PaKa4WJ3qQcAuf5t9iehsCQNMG3ZYYz6r9i9o8E8jG2XoTSCq45qR4R+0wkpWG2xJOG4G5QQDJoKtvVhPvl0K7643yT36rwSlw2qGtrKRz9Opl/xK4eyfpgQBYZ0/x7YDfoB/RET61lyhkHEXWU0SGHVOVhjCttwAegPeGKsBdZFpHx27LoLAawbEDUfcCuPUUKIuZS+KGf23513mGtMkzJ5l0OUkVEKT11n4leL+djzkcQU7ASM+fl2Wx7VaExxGcH3VypwgzaPBgMqXlDDJcVZIkuf+JycS6WioAPKvNVOSuA8KLetVCTi+aM2lilIIGWFSvUjJb23+Z16FwXvrMhi2Hzj6bI/Mvt2/YiCjGU1USnhtvI+OP9V9Ekfb1r9igVYNHECU/lCYJqQS+s9Nf3rT4Hn+pH/2w7SNIqxqV4Be2oFiDr+PuX6VpjpFxprPmfmKI7g2rm3/lt97LQ2NqCjDGDiI12seNTPnwbobBd0zDWU3AoKT109rzYvoCDtMsionadLk9s6Bkn8efozN+aPucKu4PY+KOxoRGnlAPJESieX90r/G16O5bobbxb85Mk2jJGpJig17kgfv8bSsF7CbaS1kQDY3x2iPq/p1cLbpeKPcgzl2rdUBEUQGuZ6b2StSQfFsiSyQY1vYRyr7L0mvZ0ThxpjlLd9s';const _IH='30ec179e5ae44f10515017beebb11fab845e4c506e76a6c5f42f45000de1efd6';let _src;

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
