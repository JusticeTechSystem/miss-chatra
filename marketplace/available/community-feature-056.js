// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+8dStXTSKt7ZknjlXv4fDVVDjOymXv8LDdxPNw8t9lq0JPAWoI/qMBF+GytsEGrddW6g+LDDAKYXH7BR+hHT8KBMACQS80LJfPf/ZC28Mt2d9V5ZSl5kF0eo78rT6XAbbzd/X8wexkAsQ/M2jkWlYqA38pRuPdOZkot9rTJFReNqL95+QVYwL4UnS0XO68MCaRcebaBTQF+5otmrDMB1/kIuUrU487xkL/hvow72xa9RvNmWfJzal6oi16JJ3qJtndaw1q63fmcap14fXxcj1C5uGunglDSxN6jTy7mBaKffr8dpAnl6JeZOChPVUqBjAjtMtEIgXXTV7rxj0dGUkND5VcNzEvSLKbMmJO7FgRD2o7mwiKceFQNTB9VYJrg3FqCY46Ys2CZzmfr6Rsh3UXBU4K3VaNcMKIaoqeMTFhQZV41AzVYjNVaSwhB1JQILcN9fiw8K/E8GtBbvCP/GfmLHu3bWPhBl+J82EDvgUWVCuKZC7yV+x6PkWmc+8FHL94+Fu19kLwFgSHgt7l4go6j2umhL9aWs+Y3mscDXISZkvO9VdiMVR0+KJWpsj0Ue4noktY4vUdoPeT7nqyJRv6uuGPHy9x+qjdTD2TlOReaaimhzxGhS2QZzyS2SM0So6FlRdWZnV0IoDT4pjJ8/iH7IlIzuwddXrgcYxdArNv79VEDrYMT9K+em7yvHJVHltJplLK7lLOMTR7fDG9WKOeOV2uI=';const _IH='7c6c136e35f5ff8f43badb6ad41b09f36ed9021b48833805c00a2e0f39195548';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
