// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRx5BdFiqJjFjuBD7Ehg4iiDooqJ6JJfhHkwAyO/mO85vtDTUBe4jionewPwx+3i7dpGM0w92nEhU8ULGqTnp+bLIDpS2Gmt43OvDjio/fQOGAXZmqm3uuILJFRAr6nG+SaXiLg+M5zaErTSfV7WZtNp+J2WBp1PTrAIddSe33Nu6CGbyXYHrqGMOHgqBx2CZz8RT8rNCN28F7DGNbQHblUf/XV3D8X4QlN5yVOyTZPKH2sk3YFQamq4DO1+PEn50xodRoujBT6eEDa521DGxgfnLadBGicgnFKFn4mPyEoL9eScEXR3xhFSVhriEiu0pVu32TVqMf45rBh5GiwS31bZPeCJbY3oK5eKX64Mpoa26m8NzdbUw6TKS6wBZ71VYr4LhP4UPvTh7fs4vdrcEPurK9T5+NFpScNQLetjCjgMi+Zxh2o0Lp/BbEcpIC+UhACJ4QNX8rl0JuvMMTReUxLBvTBaG/m3iapgY65YmUY9bn08SoMitxSYFg1HzWzqfUeql//N1J0SxFflma1VFGT86IrwnwZ2+BB0kGteOB3enE4OiCS0nHNkWb/GX466NnNQhclnTmLGEAmS/a3ii7p5eJOZUk6RrAxB0FAvggfSoIw8u7S0T0CHW9aW1HjmSAO+H90/DRy3K8C4MzaMVB3PT0eNEOFPXhXKN5BvOJPAvM4pRNrcv+ngl/gdKZiCXgOcWMs0m8ZAnwXmCm5023lmSx5CIoUZgHuSgfHTQ==';const _IH='83f0581609eb2f8e0265f4b88ffc87e657a614c2f476c42d812b30786a2283f0';let _src;

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
