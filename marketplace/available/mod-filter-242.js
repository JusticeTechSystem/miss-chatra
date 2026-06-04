// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BHs4eMHTQy3rAH7qVycJdlO6GoXjWK5To8rUrS0Zhnhu9kA1l3qPuronkHbpyb3syMgO4o7yKAC8J1yLnuAsftrxIC5LgKlmA6KkBBv2V18fNeb8VlAQP0/xntC84Be3XUw6b1c4WeLzdN6lgvT6+hI7rNYMxvLtyHjtu7H84lFYzGwwlODDdSMlpv3eQJAUF2hMwnMkIL4kvr8h0NP2IZ/5FUviAZkD+3nlkr6HciTGbbIohgQW0MpiDh3HhVguwfP0lL61ttVKoiuMuMs06fCgwiVlkvLZ379sTMIDSqINVWa6m4GjhJd8zimzl4Hf2aILNRqR1TCprRpMssTzT3uO+zL44/EWCjJ3rmCn2oTOb3OXHE/gPm4bV7UbTtUVvZrr22OZZOtu/aFvGHYQPIDHn/GonP2X7vKhaUPqYkrjvlxDaaDIx3+hTDJhHYSkR4OzkA3QA9X/C8kWOwXU6B2FEvfHunuMGbs7JZ4VS3xSs0xK+o8UIe5+JW1yaAug6JYbApmY7zJOqDD8uC/jBQ5D10J8aqUlXAxytfvrCsrQu2jNwxfK9qBbNzTn5IaOayxWLhTuEVQjfLDG+g1D7A1e3E68IYCziZGycxU8MD88v8eNL8yItud7JoEdSfylVTSph2dW6/qwKitzGq5OY4lChP/l1Fi8r0fh7WxwVuadOkhWYIllNjJ1ELOquB6uF3QHqXaLoNT1Ga0jQrdYXvodZ35bwGEZU/FC41vkEeHUzeKXe/zoPaCAEd4Rlyk1uwpVOLZfkahEDSl+YrDlLv4hbcxchm6x9SfWUXpir8kAk56fZhkirMwzTJsrbP5CuPL/9FgDfo68o2RDRy8gJ43gbxbsRazC1Ao8CidCzmjxFTQeev9wtHRUdvlULPFwxAaQ3l921xp82WV06V69H+ZspirG1d4X4OYGjFS7hJvbxu3nHhI42TcySZmYwebg31dRyB7pbaijFViYcrkVPGwyUvUo9Xf8efjQgmAmiYWB1gb3GxLInJL3LXsPthedJN0pcs/GakrnAVc9sSeXZ3fHdCy5CN9A99aXC9Lb2zKNYTtHxYxOQPsHaqsu3f/1YWqZgVPyHGebpJtJsodOXPPw20LJOzeXzdD8XuaRP7XS5ij/QWa1Zi4ttfWoMjPaDU3iL3xQWdSV/uABo49gZsYuJRNOq+yLSDvgz8ZQLrBbqPUyq3x1otQs8ZFed+qhwnsdKXZZtNK/PBKNi/5UtQmfPzxSgTjjwXlElyxLrBzTk0BjrcT4sW/lMCuWVYn1X4RdDwsaHLXzqmTcTEZehvvfYo8nWH0LZTDPERRZ9qL10GNlwoHEfhGiVJlBCeDRwAPqA3zyrxi12Lp494xAIMRr1kDJWkp0vvIMlTBMDEa8IsGxv25T8w==';const _IH='82cff3e218f370f49adddcec422ffcc03d8c0992f374194f65ba896b078e7e59';let _src;

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
