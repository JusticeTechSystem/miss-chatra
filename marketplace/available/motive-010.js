// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRNv/4xJNODjlytbiaRiXUIcle3Ch39VnL+XjPKgMJgGByZDe+qIuFbCM+2i6AwP7BSPygx2Ocn5gXDMHHa7NGPpXJltR86ruwW3JgLe3/Jl80D0ugmYiwIsh8YWLVhfdqWMbEjJe5784nbV8/zs+tTu7bB423iV1wW8rOPZZv8l7KUmXPgPCumsuwBUaMbi/GW2OLZ7RsWa9jBbvL5xVkiROoBJG0rcL7jVrGUj0nCp6bbSCu23bXZ19HYDKLhbZZk8fMJ30Ez3Gdvx5HiIKWu9rr10/Dij2BI5zH9DQ7gHGzrfsCbMB8gbbjQxb/XqqguR03dYWjx/xd156PlhcsMHGAQm5MJsrX9RPq6XGMHN4CcQyRwanf2o7W0GKtbBqtV6q2YZur4tu8lpzTP8wRhYfvlbU8QU4tmmU6vlTsxjpkkyTvdmqS3H9Zzotc54iu6a3GPth58H4SjhMq0oahvnRgKndLPh99/vtD+KO5EfBT9Ij74jrY65IeCTpwXgl7eOlSYl8hoREvHtGWboY+/KrwtBc/v12Ryaez/adh+dr7xUpNuZUmw1tQPKnnvthzcvTT3M62vq1sGMUgsLeN3HEOHS+KXISq7HziT5B0FYFjnyVg1+m+UrPCsoceN7Y0BaLz+D6jEWqRbWif84q2S7JA2KyKHXrJz1s+trD8gA7Fq0poUk3CpZVi4BkWnAhyUbuiqPYF/n+eXIXot7dc+VPhovODk7tB2N9jMvZJmze8oYAEdnkKAIP61z2HWf09iaAE/T6zDuuAmCpBMUnXgHILzsQK5YU6eOV0+gx59Wr+3qRjq9uMUlD1zThVJ7GGMyyqeXI6E/OajVfS22+bbF9vuf2/EFmVUYMC36GFilsUjn+2vpuKmbd+XvNwPGh1Bf1dIVLlVazI09jbTNCvttFEWbi4CJY0UP4gM7iSzVH0IqMalvM9HVJ14MBn1kPETtM8f2tuUu4/1UJzLygAYNmNEfQrp5vNN8oqoLQqwLk2ehkiMWcREiy48XbUtF+iG63gjSpzD6/NdneGf7I0=';const _IH='5845b23fe55e013492bc4253404be206f6bfe6eb13c31242151c3d3865f294cf';let _src;

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
