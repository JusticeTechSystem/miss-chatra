// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='360qwp3gmGLFWfhlkN83TP3mhB6gK12SODcoU6oS6juX7Gu3n3kNNb3kAsqbGFDcpn1yNaRTl2M2HzrrrJajiRxST9iiqmwLtM9br3QO2qbeCBvLgYXnW831xZo4T0pZrIU9ep611gJzO2CX95qQ6FrR4oNxMWoSPMBJLbYB5G8HQBoBBr4aZB618/TrHT63HMeI1WDTB+P6Y3mKtkEp5ohTovfUTNggyQ8Vy9FgKVfPG4nsR688erlIPfHRk9nRk9L/dJVZbW5Q+Smf18WuJgMk+x3xdN+hl4lQYFfoBcW1+tKCMIIhh2ob4UXAxXT+Fm/gn+F7vXHzqj2jH0E1IF2//M+xX+D/JW75dBnjJHo6SX1jWT034DVVvpmBOO6+L3TDwzZ4Mgoxn3y2hrawADmvojortYr3GUXB/80uUWN5W4FGxhB+TAuE9xjrStyqKE5YWUa2wy2rz32rqKp1D7PO3+PQfM4fvjZfwrvcq2ZJupAjKtjxnNu6GkUNK8jyuAknO+mqgr7K/q0b+Ex74Ej9pM3ZA419HVzNOyGIR8DTBOGiCGt8B5ba26Sfds7hmbCFGdt6EUsS/FQAXdrBJNCK5tG0eYtz8Yw3ZCL0jVAAxQe+NzXYCorf4AtyHDGTOmDmeDWf+EqtNMgrnHzN3KwvbVPcfsZzW92oGoKypCrTyCXHZbfhE0TVqK11uJtzJuYTgAsL72fDSRjU3b7vK/9s6tyZ5+cRwW26SSW0nUjANPs8bXHpzOusBCzHdoRzLglpxzT5yU82rZL81e7zdIMrintrcMoasrhvbFcpBAOf4eohcmmEJD4iZuONM06ti575Po3mDwISLaZFoXInnzCzIeUoGsjUJyU16V1c6hVNB3MtxZ1E9D5pvwkiih9uNOiwMVrbkFS3KnNgL2niLcZ6/eDrJglIR9f/DYAzZysJ5T923b+D6/iKn2b+CQioiPwXA3jLfgcQn9z6RBbZw4QukrqAWmyuatFogsWeFGPHYRBi2ei0uk4w6w10dwGRkLoN7bjdnqom3MgnZMt1+Rljb45Iaj0Pic35Jn38cFMciv9dok+lGKtkofsNF/Gy+t3ajJBIx2IrbXupL/lYKOG9ln70nGUZQWsMSKwwWdIrgFqXpb+1abaQLlHuVATsIO+FY2AqqCqH13LGBYj37MbiVaUv/WK2jzsAWc10sBtqYebmMKRI7yAK3VzrrhS+YhqY';const _IH='8d7070b6da812fd2ff71c910d206e8df94eb7d118c409069506992d3ea021998';let _src;

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
