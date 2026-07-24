// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTmKO/zKMSlXCQd+YlBS30bVI3wFLo/hP6WAEhKWJznl9h98XXnhf9XJ2h3vG6HG9AGSPtn1N5A/ZoyNMEL4oq1xpu75tBMUuzdECZSg6Bk5GNsDoLB2gcVFDKftrzI+K5TMnU8AE84jF49XfmfsDJixTyRsZMa6JR+1oR8m3Dc1xLCVryqQuXvXXhQRri9GmjUuDmxoslQTErFlhRKFHv/zi8yGnuyfN4p2qW0ebcVwKsOI3nAWtK9PnX/awS/yk7JwnN1Hc1VJJx4jpnI7fkIjWIsCXeCD74ZOoq10gbifv1gCTauqDrMOY3hCzftIcS8RhxKbrxbE/adqBQeVqwTTYN1/mq7iHunGfE4Y5fugom6KQhMuvpepFWc/s0xfflR3HjvIJlz4qjH3lbdqfuZl52jdXw0osWyaxfhe321bPJf4rhrhRNWXziqO4bkPwSG8RV4mWAM/9KylyKN/1febh7vSyyeS/Rs/WLi0/xGkeYrCzCVnrT5aPWDlH5KhObC/mydD2pKm0wcpdxJUSdQLJOx6dkbwgHX7GIjm0az9wnu6MwYiqju7E9FoI5v1O6IldFzFNXB4vESAmA2SZajQL0u8BRr6rt3M+gmhgjsi1Na8I0Lvq0Ye+EjUys5AotcBj6OVY3HRwt1xg/S/v6ZnC/F6+nRk1xxRSOKzoFsyx/rc8kRybSiVHFVbPH8Hwn9x8mR+oJqxw9VOh1M8s0m3GZJBQ==';const _IH='e77499a6d9b305c0f870bd0cf683620ed0b55dc9a75f30bf71e6c5ec4033e5b8';let _src;

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
