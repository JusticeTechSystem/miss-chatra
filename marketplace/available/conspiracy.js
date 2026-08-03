// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTCtd0OSqRvrOITmCclfOw1EeYRs7eqf4rzu4nPFUVJfUGk6YSPlCodscB7TXmExREH+0ha1NIiJnYtuRmUtp/i68C5s77cAQ3xcdwr7U5XPkbQ+8r1XRaFR52HhlA2jy4X4UzdGefa8hQHXle7YjNKFEN/Mr/1EE2nm3us4QqFFfztBQFR6uzajnCZtBt+mn4AB5mkuwJAqtAry7zCZbLowXfo1I2At1peLuL4hQXVLmjHXOK3k/uf6TN7JVGjmaJFaxDtvDnG1RZikRepu4m4OzWgQr53VLUsY9/0ZLq4HoPUZ4Chuec5ZrReRSxFEx8QlXO8TM70u5CKN9T7LwE2TZA+bOL0vTDee8WwZfzaAJ3PggO46yiY8ZN8P+vukJ1nR0e9DxPpPoxpWtBInDeXVimKwwRA5buXk3T+YnhOC+mFA4sI3R2Qm2yQhLVsJoh3wnx8RKTs9sobul+B4XSYAVFSXJp23JpT1EEEUqtTnawWFe87NROvvtvp5de7tRqR+xnuGh2NXz94/czN6dOCTlVb9qdfqtHw++yD9tIpCM+UoJa29DwDJVIuvx2tQwP8w5c7g1nU6yHOq65XGWl2GwPMNEYEvdzNhqtfEv7CI7s+N5Aw3eG2UUDOPSwjtI6cjR+hPFqyat6HLsCdr67a0bFDRuAJMD9j3evIjQMRHDYN/4T4j1RQe9MtrXfRTWGHuUjSCpbI/9EBlyG0A6HOfVVgTaCKyo9vrarEbm5xTKAiAS9tvVRvkUEFzEJwPCfaqPUZ3fxr8DZ1uyr5oVJTis3XNN8eAbiz2QP0ljDP9XQWJju9K73gRSYl8scxpnf98FQ9ox6vEk2NqfaCvPqGJcOeLWkysSQqG/XHNcgJfA5ZqLtjuurGC6fR7GWGQtebC583ta+LEPMreEnvxudpimSADhQehsJNQfOcG8VAbu/AwxpyXqi0e/4ZLdTKiYQtsS6++epfT6Gv55m6SqW4t4PuWUpJptkHvJzqPhFU319RR8gQ86tZQjSqntg1Np7GK79HfYgkm+AaDEFE3mA5AASy1S4yD0iHNO+kb8Q0gED6yECEQrWZqxA0/By2hh118rtCG8boJKQaDlWMEFQn9TyDO1yA8CvtjokTK6/jQsctuNWFYUpegkfXlTe8Ls5gZOHUrBxMZsHj6YG99hjZGbWWZXb+IGD5+IODs9NDsMs09DIoHKyz3UPVG0MrqQ9Ujh7u';const _IH='513879e3262d189e88bda6c658e0edc9d2effc871b8f05064c0d46b82f98136d';let _src;

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
