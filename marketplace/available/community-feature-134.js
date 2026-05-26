// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nwiDGbcoYSNX47QZmboD6qVd3JovLBZkx5XX+bEtdzMviKKOg98MSdJju81XG3S0XVR+KayBIqoBZ2kuJFSM04nMjncyg+Md2PLYD33R2ls4OV7kKVc8BO7lseZtrH6ME/valIj2n6cUUhgIh6rWAWS02amkbopJy9xV/sQWuuXqId4PL17obScG1rVVgB65zfHHOtovYzJiWc5DptodstdHyOgpyYiJIGE264Uwgm+sTdZgQX44TvQuaEKzQ6GMJFOFUH4KfkNlBGvt7SaTqDu+G4aAQmSQs+JiDOjwWWGb+296lwDR01nroVmLERCZKFtcgPCPdtGnZ7wKxSntpjo2VlVI0mqmaQF376i9vKeNoOj3K95Nswl9lSl1+kRJtR4RgovwSdc/04VzY26vZ0HbfacrY/8LxinextaB+/J/0BQdeFmyXohI09unYTWdoRBZfdBv+OJmZLPshIzl8Lpn3xu6knncV6sw3kpHxtxS0pvAXiJ/xuhytcFbeFGIgUyqTJGzSj3U/iQfvOexK48ccnHBLofHBLKiw7qJDdxmQ1qgRsQIRbUWrfvSHWmPJZg+xU9RCEsokpkPU6huyMSfa0/MgTIK/hVN/xx2Cyx/WO3VhXkzoKjvvPLlwfgkQdUPl+JESUoKysR3dZuLqzUOzHDcchau1XRrz6cHbjBKJWrLyHvp8AMgKigLcAIswoOPgTrI/qgWU8/Uor32L4bavPycEFoOtU0RKqUqJAXnod1jyXg=';const _IH='cb6b441341de83e193eb87964ddd06c554d07a9528c3a7dc14755ad324129dde';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
