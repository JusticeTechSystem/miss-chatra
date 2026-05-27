// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wQnRqWRteVq8gvkiGBInThUlkxVd7eFusCijRr8YrB9DCLjy0jQJF3NgSvOPNJHwAdXCG4n34WoKWtQ6KPqQzAMSHWFGM2Ybzq7b4VQes2tpHBtllu3Pq3ld0/K/QAOvKbfNTNKllITFjt5RlFWiZEuJ0YS81AfxD2gVzw4vEUVnPjXmfGUDdOVwfhtiafgWyjDeh4PO7Qgh6bjfrsSY/MWeuWoPogDYbhu/kjA1wMvz4nSuh2YPUCqsx7WYHPa3BDC2A98weq2orAVeFjNugG6vLQNuF5B278lalPUA/IVllXR0Xu8wTY1HthX/glhS2K9PwsVA3iTZG/42tf4dtgXGHgAExlWMLY7V8BaL2zdJIVomoh7uBoST+8PrkS8JMmc8iQVLt5D8fUfrA98NVs4Mk2P1Kh63CHhTCJ8VkGb4QgkzXR+uLBGBupN4H6L5KxdMP2N0D7RK+UTo2lTDjPisMxsN2b1yPwd/DR5WUN3LUlFNZkwO9yQIpuj9hdbOGOh3Z5gZWXnZLLswgXLspcjCjuTZICFtWkWUMCkqYa6Dyn20HOhH9VZN39lpph17hsjyD/FedhWu7LMIsocozaqsNWhedvLTW8ND8XEsrz1WnQBWkrlYAcdIYjI+0/chTswy7wYNxtJpuL/kyoQfzYJnq+wsU7oBlIN7yVCBuOT4VJAFqJPbtF2QJiNVMh/Fac7Cf9J0O4t+jGC7CyOutSnZM1Jd4BdUndg5yHXToJuNlTM=';const _IH='d22d461091d8c6d56c1d198da6405a9de530e24882ed38dbfdabfec8e0abb86e';let _src;

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
