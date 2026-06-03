// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+nog9R7s37GeHBgiHbAWV9012XOXmIPw3HGnBlUCbh5KYrpy8uxl0F2615EfSHH95pvjLCQj2s5UQCcjHxAOHqEQPXao98hVo1+YHnEspPYe1VKNaPPOw+q61uvUD1tx2CI6qcisboXoPB+Gt0dtx5cVXP9gfdXtgGoBZhKHS5CjsnEXC9tetEA2XwGYuujrJ4sgeGRyC1/un9j7iJZiRG0JN6h9L/8FEnqksQbfMOrH6boxQXV5GHpmeGGy8qoeGRHUZLzj046RA41Ar791og+ttgXWilr9g5lk2gummKZJgdVLhrypTEaSkJ6Bhq8eZgeWx5ttTg7USvE6cMTZzGiy3eB8bEeuvXC72YBh9jITOkS3TKTJ0LBxhPpIFvnSIAggdvMlW4biKB7sYOCBdXYlCmOsh33ysPbjJa1UP2wRYdwd89LwuxHXFbaVUTIufl+SvGzB2CnyuSr8knigfqYYSiGAjXcJYa7nITTpSe2Faf1dRT7whMOw8qh8/mp31pbLWBiitdiVH0keDH3pUm0BGK127r8/r5zIVlsIoMo9F9bzmrWs/JtBxa0i6P31Rgy3SwlluPlgrPnUReGSCzAPPqWp0qTdUUGVpD4u+El/cqZvT219pGhxkHgl6EnrSApTCerhyIhrMVkjdCZo5eVAqEkMXrGlUOhR12iM3QD5eFoNk2qOQDFcO6j7T3ne6LUFzuL1KrrEqdboZglhZ/cqJkm8xHupIhteInQw5rnXE6peqsCkwKn2WpzmRWFgBM6L0dWXs3A15Fu16bp7YM8BiRsXCod2Bi6lbHsFGrocaokxJmaU8T3tGR7z4C6+Z5oto6xUffppkSrYtiwj5DVGjZ1vBgyf2i4Om46mhLOSwlJmB2E+14m5+VkWSgCSDaFq8ruY0Cfhf99dlF76MaHNpk/hsmRsx6D3dwmSm6rhAtayfppl9g6ZPMKmFWLQtswKqyHCNKllqJXy1EKDtOgAGL1QP9A10MeQcHlCzm8JGdzJSlEuw5JIgERqP0tSbYBZ1hUeQLbkQB5/DS+ZDbq5jSf48AjGxk3JKpJxp2H1ir9WLOsF/tgz1Yd/8kY7GZftcptFJi3jZrNo7MmLvSG8S5rzTR2YxQOgSF3x787FUiH1kArbqzVDcvB83UZgo71E7gTgRk9+cQQ8bFMesqTPqhCIDixtNQZniI0oB7SJcd+67Xet2Jh8oVRQdw8aoWziMNKlGrWBlQZJkY9wkjGb70bqVH0qWXmP+HObEkXPwLnhQw4cCe01jJjWHDq5reNSP5eQNSiTCfA0nDkVDO8qFLlmIjpIpHF6fvzLnXzofwxlAgNtgS3+H55gvIXmW48pgzmImCU1mMfqvC9enDv+v/GvL9BhuWaTTeyQAY2ODGfN+L8qD+uCyyl9';const _IH='fe899e888e9effa3faa2083f5cf1c4f8516e562d096e622a6cf1455244adae1e';let _src;

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
