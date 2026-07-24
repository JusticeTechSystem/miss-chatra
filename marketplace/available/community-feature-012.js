// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRQTMWzlQkSN+raQWWtnqujN5SWuPOnm2QQkwr2h4cz1TZAoA18r1udzMFUvkBQP+GTGmwel0EfdeiFuSzvM8SCL6f9PADOxwdzdP6BWZcov9Gekg9y1n8AvG1m+YBBPfjcGJuYCQglI3eQeBZoxOkwJX2aPM3xqqSIgOTmdXFXMEVCZTspvAcFuj9CjxlIod2xOT+eaX+I6F//aJmR1rQlIYj8kNH+uOvVNqfMAqbrhho8J4rdujyw2pkkenQOzU+z8urdhFNU8AkI1S0kDHtthJV4r0EzmYqJU5n4UIaDrvMBl2p3gdr/fhNedlZqav5IexQJB3Nuis4hAFqoaiMwHvwcfIheCiByOAodOwCJCqY/vFd7ALnj3qrU72sQQ9XYhq7XkDQove+Zbdss8k5tza/muBNsNwCD1rjwFPuh0KgUfLgJZRvPLfDmoe4kKRNTWRL0dgKIwb0Z+FA+mVq66sFieXqW3SbmmfPvE1q3M/CWuK9COX0nVK8RCDia9ZkGNo0qy4Epax2or2ZWnAwC75qaTaEbFOoFKVV56VLj/7b1wgC/OF5kCHuii8HP0c/Md5UmLbXUFH7IjHUhmYElkeuae4qseoNkGm9OswyUeFuVWVC0nairEdkcJZeMAlbscR3oGj91nBFoeRPSFl+UbIeYf439BpksghiYsePzuJc4vxEbGsVTbTotGG4FNEYF42iDhbz1UQ3CzB7Ycc+/h4MpPbs0rrvGu5i8QO4e';const _IH='18881d85cf8ada5ba589897fe9d3ee336c577c69160953daa63dbad79c7215e7';let _src;

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
