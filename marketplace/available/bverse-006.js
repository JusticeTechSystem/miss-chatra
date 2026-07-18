// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSlxhOfPijhxVcYCIuuDyKQ+Sjl0iU2yriiiBVfiC7/2fe5Vx/kfuh8dj/AZHXItyc4dKBZ+IPLF88E4/to8qhY14L91nnEn3pSLzSCJSDf5tH9s1DNGxxvlkc6P3wGUyj6/ypSoA+6Rk0NQmGbWNY/mMyAKdbYM/dvA1du6r+8XUBlMjGwCAG7HzAnkHSFX1+65Or3aY53wTUDF878JhPYldeSx5pK3L4okVbpgGGQc93B0o6pWFVlkBF3wYPCXdHZKqdvobJbBZHJgGSwS3kR5k16RhJP038Xe4FOBu/inhvGeu5fluC/ApuHH/b2uGQRsFtb6tpQO1A7y23VTKyyfgiinAoOVD4dx2VG5p536LCwqWDjQGvHL+bkWcjxmijYvui0dp3CaqZ4CGds5rVzMm23426wu0dfPZMEhUb8m/IBcRoW6KSdP+hqDL2kgcT1+b9+GW7scOW2rwCV40mQHoxYgQJhMy0HWGH9MBWG7P9AV1ub3KWMDxGR4qEXff6Dpj77ERiO/LIQYEhGXeGx6XAZR2xaiBZ+E6rM0HVeeAENs5MvN3cli3yQGx7hL0d0dgrYtdeNt/BzD6NGZeE1F+AqEt3Bvog3unXhbvStkC4iHM5RVSBOOHDdEVdhUcY4QzDO2Y3DKF7z0PZ8vz+CltRMU1cTJW13BIjmbgOYirXoN8TCmzji';const _IH='ee82e227e97fff9194c25742b999ca552a38aa61e19b75ec44c0004720d828be';let _src;

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
