// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kp/BNB29ZHp6a5MPsoPeUCff48M5TjSSqzR0s4eMQsPaqGzmJzFr2RWyV/CxZsdRYqTPf3EZFVvO3dZmv/cMU+Ni0vUlmkuCRz3ovau+HH4x/KepvW4HyXyPzN1QdgilBMr9wztEG5ceudQ3WxaEGKoWcRgEgWL/rm2okb43iwGoiNmXJoECmLU0z+yhZiOP49ON3ijLVHlvPq8BXVh3UcC/dHfbjA9C3s7aaUmeuSYexeTF0NNQ7Kdc65Pi/kaE3EZ1I90INLGgHvnVdpmwPLwj88me8fzJVulxC3nvRCc2ykfi/5vzEAucV/HOFQGi8RdhYucOdLGL9fuvhK9brnjTGWQBzRLjfKIMP/1gqnrnvPohyfGKzy9jFZWlWLsUdidf16b+AHTMwu+PoWBWbcGpNHPfZfuJTpFV4r3/Bc99hjzcIymRcEkoa2NRVagJxMjcBVJ+vmZurBmL5WSOS39yAsbNSMKkl3MkgKU0gz+4+27zAPEjwQPz9oARMz6Pr5Fa1XnjJ16HqvNJz2OXJt7ErS2lZ2egvvAi59OiVzEZSwEmQ6FKpPFbgQNx/m6XomBbj4aDWjGb35Nnh88FE1QoQZJJ3AavtwNhQ/SfzDqBsgbP+c32oXxVeg/zQu9i7J2n3fKGCrlCnXJfsmuWBaPxgEVJz6bPb72c4j+jC+FUQ3Nv4Ju26D84qlUyqi7ieeReliImlDY+Vhb2weuw4z+Gjwo=';const _IH='ff401a8d14dd29a1b52344d9fcead5a7d61bc4a612b0ea1b972b53baa481a487';let _src;

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
