// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:52 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTaKwnGSNKhfqTU+/a3IlqW5R6iudRsljhJQASEh5fQ/863P0YU68Xd4wfNC/BhorDDMNXxNM0m12EJpMkKBVC1wgly4V+G7yf5+Ii4hMB4GSEJa/Q+Me2ik2yq9IULkOFDqVgkvhiC0eBFz475sY3uFIkbrOHCym41wT3LuAuVRaEp+y92GEwGHf56UncxLLPN3af73CSwZ4h1QEKo2+Yzv7HfaCtbYPo+7OSvk047DbLKs3B+XXxuyL1OgYBYNxL1s9Tgp0YDZybXgfBSr3DsFIpy13yS+JyyJorR0i2tYdbEWQ7a0GYlrxH+kLHQ9jp/kk+9yFEqUwNcnrr89kFr9AOGCA3Vuv+Pbexiuk8RoqjQk2dJ+RcQoXVycNiDTQy3/0VpINqopGduf1pdoIAmaYfARyAs2KdD9N2MCGlpTHDSXUHgI2htF3m2MypxUTn/1Rhy/k03QJkLHsuVQhJ/Kp8UEa5xPlYsTB0PX4h8swAcN+4tKf/Z6/Pfy7iok2GSdhFeG0qY/N9i7FTFzuApphES4pJkwjrZiGIxYJoV5S+PdaXi778PXQ+zVjnAUSejc/sxczz9Spix5xiiF3+7uWFkg0wFlaPiWggi29e6CCg7UC1Mh5tmGzEUkO6eIj5I5p0iL9cCGzmg9gpZeXSSlwY9VSpnoFL5VycCzAlWYFHNGAp5TfPm6o92juR06GPm+P8UrL8VRbMrw8JXA/z7vSS3c/3/2O8=';const _IH='1b4546471d6524b227d0119c9ce12c2f43ff0cb4ae5b5aed4068849cc4c6282a';let _src;

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
