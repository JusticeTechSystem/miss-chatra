// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:36 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1xYDAZ6li6i/kI57mg3NuE8dab/O19h/6awehrhyqR5NtnSN6dGHCc8SM3KVtR8oWs9bAIIxZbLnSM9RKAOIuTFKyFoRxg5jZpReZB2CrMWIXlJydRb2WNr7FBi2ouFGXILAetwfPFFngM6cjoECBqO8LBt7vD0r4kIYEmHPWJHxW1fw4G5l5jS9bZF7XVZ4GOr8nccfyCxqMyXhnjN83lERohqOQDTSOb336nr5xOGB2lxGVsEFySdCLR7FIA6+z2FX3zlfoKMQeP4zOaYdBQoLmsngEmg6rjXp+IyI1+XrsI/dfHOfG+5uhrPm4f5IDaPy9TCLv09lXVnnr5HqDsOK6FvkbyaXMBS6McnkQT3k78MKjMaAposvy46zrKLb1fBgnIucdoBDzyxf4QxAc30dV/LtEQuihTjhA56mQi1DSazrRCDc6nlF1VlBACeb/78tAdwabVBF8GBEKgucZ3v4sjKnsjgdDuaGPMHUPXQ6K6x6HMFdWFSNMFP6QXfD50WyQ4/h9gFAT5PP40cPUqHGOE9hvh++Au29hlkE7aM+MxAxRlVC9jpj+c78vkr2IlU2uQzt7A5L3NaT5BJB/zhL5FUPkzEd4xRM9R9798GKQerzAEqOYwW8YLpn/tbCzft+tjuE2mZVQM5UPJdT/XVaRQ5MgNCWnGDaBMssL55cMhqCRmK+oBAX69k+6EfP9HbMv1NDO/ZcSFypja08BMSSXXHKRNJHaPFX/ZJnavjI2nLeVs8sU6pq5ovYud82su6e67L8dgtOueuWBZz4LKzKCdLaR1CJDKEsuQpMxLvfETKwVUeyw9IirmHrZZ55DKpxmtkFzio2T9pVyopATUWL14VxbtwZP+UoNe+MeI1QYxY7x1Nhii290VBfgSo2vQXyYD13cZWRH39jPggWoylyoQoQKS2bSFOJcG6KSkyN3jhMauMVIyhJ1sRnMikybP6zvhned77TOMNmM6NFbWsq5SI+MkxkBEariyL46M=';const _IH='0253d92ffa93ed05a27c8c498fd2d9d156cb8a7e877b2ba2bd62cd7a18c6110a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
