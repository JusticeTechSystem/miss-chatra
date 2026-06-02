// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IDlW0qTiudj58h6CQ0Gfk39qulmf03es9Zuy8n+6Wvukvc/gwtj1zEvJMOt8xnBzNM6GkrmT3SPE7zMfIHpWhuztczNPsgp9xf56wqiTvCHJ0wm86zt3QyjZNGiuyJANKQ3ft+j2FCg78/zj+6YsXQZOAA92VDXwbO+IQuF5GnKN+du64ooIWoLQ3SWsUN4hDINsCCplfHm+5Aq5irOPRr9vA29xX2D3nWPVs5SjtBamBUY9EPwq3F0rXcwp6v0yZWCYx7yZY4p7udFNiK/VQyWx4/6LolnyvkLMTF3FfZ+KGsULxUVo8zb6QuTsAXnkDBK1PIFuiyRK6kxUdIi4yIqVd7mnVosa1xVDz4h+qI+2kKbTOcIylK90aj8nRpkyvoXUhqStTpH8MHitYHQe6XZ3k6nxZ8106OOFFcHA10/NB3koj993v36xjUnT91q8aPZzm/OiTQYm/0OR9lj+UjfMlpfd2V/Q023hdwez8P5AaQ2WwwbYYuFuct3oxEXfwe+eaDcc9//selorqJVmDHHtk7U65uyswxtpJGxxTmEf8i+KpMfCKX3+Jt2P6ZreR5Fs9+ipkmjRJwJX+JuyBYMmsOyBdOTLg12zsb6b0Ju59bVkXQ+15UbkTF7lN4Y42yYJ4ZYsn1L/ORVp07fv3X5Dpi4uAMC98630z7aaoE7SNHsd6H7LvTTrQZEWB7jiHr2CSVFA4c54134La9h8/AqssIbHPSRpV4Odxiug0B+aPj/9rU+bEjem/uRxyEWRHCBJhr4vPMp9UgCm1wV+HR1ki+hxSah9cxEY+3BjiHQSF1/NvVgrXghhej/0vm0EOciSQht+Gzw4vEgk3S+fZIFNHQ1lQ4zK/4gEzRxxXNAIjX4Wwm2Q21ZoOSI6nMSYHtz7F/SWw474jP15bLd3VFSpkOeCyI6gEdLJZwro9hBrNF6aLrxikyjY0YAxcWPxDQ+P3dTtNx4rIlnSNAMKAwXtPvPXHaqhO4QqbdaF9mf2tit43Ma+szU5YztZdLMAe27fz1+nPbJghIqVeqo75hka5MB5B1gx3TQBzc0tjcEhjtcFKJXRnZrrvYDlXbNI1HpmN2vrmRVos+cxQMjMD9C0ZJ+prcDAKg8CSX93deA5v/KQ4Wht2gibWS8Grta9PWpFQDqQatsexuwosDjXxfMRa9Th/8JA439Ryqk92HEh2C5qEm0lQuOjBF6C2KVaaIDhFUXrgdjcVE5qglQX6vaV6tystmtsWcj9HsA8DVD5n0Jrm2UWFXVlSNK7csH9XwTIfZUQYUgh0ld2F7dAmdIP8sS4zXB9iaTO+yglKc0lsTYmlRzsWEHeFM7ClNqp5c9OH1oMTXzRCKJQdeKydUT8SX7KyVJdUw==';const _IH='3ba5736973e8abe11b534da9498b1795569d7637519677a15ca3847ae7c3b278';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
