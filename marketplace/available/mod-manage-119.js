// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wxVdJKv019ZjL6Wot/rUjSpx2yFEjo1rLn+1moFO8LD2iLxnWqNe2RGce+7FMlXTHp0yLcrZXCKobTYjHHqZA+5wJSEvWNlP9w/C1ETNvB4LuhDXD7i8AcOmFqZj0UpS0UIr9Y3peRxhOwJKlqAktAtYmw7qXiQVeQRzEEUpltSFpazlH56dSFBRkstRgBGcNusZSMyq8BxJ+X/mc57rS/ZmaVp98yKTSPwfYzN1WsA2M6o646aJxQJkjYCa1QBdkHVY3vllDVpotm9V7q3ZWXqujigNdoDEhJ759QAeaI9ehd79Wo8iDq0ZX/r4sqH5VzPdqFDmju3E6XtofKa4knpSAi/C1oT4bCh1ccAj4OpFBr5y7GDFRZJf5Kx4bwUhq7HAoaMY+tGl8fDCzNfTes1KHmymQ4u7YoygDfdg1Q80afkTF5TU+WHfXBNwZ6ISxTyZBAUZPIgrru4X7lgM/xtNhTI4CCXO3/q2cDj1Lw9AcLVyH2BdMZjG1dqkWzktCJOL/XKLPmBCv2GuhopSTUlaUr1DJRpGj2rrK7EHQnXHY8r8jA+sn73qpdGw5rWBQNodDmu55J2iyyEehRwuu8sL8LwbwfA7/ezccONWO8/VKYandnvId2zNV2lo/p8VotiyCD4Mom0r/Xl2cjlaMu3qkff0J5jQmnlEKbYyV+jfW9UAuLXMkrS6o3RIwGdQpo+GItOyiXczunEmQdiwWy5oYKmd6XEzf59Ah7pkv/LwLljYu5SouEN3tKDLr0eSfzFgbF7sLGzBJizw6pRyIdyWGVTfto/4ew1+g7aDOuefEFgx3wR30qI+FOp+fu6bKBhxBB5Fo84HUXNjrqVdENvOtO+Z1ixnJxgkle8TIVyHnTEkrhgyUnGeHc1UGUO6i9aPvrM3Sh/We7b8MLxYZxyf3hnTTcfVTsx5+SN2B12irB5hbZ74iltY4ck0M+GE3kJxOEqc5NNxkkO2FCrvGrkcVaFY21KnIx89k+6w7Fzfyt9297kgcCQdX8fO6Vh4+p7PMhiRZl8kWc1u3OCPhD9BtOcKp5QY0wRwxiDkAe4YbDfB/dImH4PIUBXiC0n3gg4QEAjrGvuV/dpYuegb7RhgdSYAy28SscCPholRRlOvNnknMOJh7Pl3CbV91WLaI4Jmk+E/SjV2/ZedaZivvAObc1/JWWfp+FpEO/1Um6LdYlaS7IyzGSnFAc5zHO9d+dEzhDD8lYLZmOM0TsKsPheZ6qfePKH0yHuhKoVXKHGnuD35CtRKnlne5TEYIqTCdP2If4VOMB5OYR/gVWtwx6L/2fndssam1FRJY5uN2dImx6ydojDWHjWg1aCs2UzuC02kSVMPYhMQJgDTpJbcs36s56RO4iQ8xrGjpavZ7uBWG6Fsk866IA==';const _IH='cf441e00cbc5bbe2b8d7f5a8bab1901d832da79c133ffae8abd46342f0e6bc3b';let _src;

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
