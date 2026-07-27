// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT2lTvYs80dhrJoefupxGkbBGHoNW2DVGeJdsQwR+rSDeVhuzy3DbDf+V9iTpYtP0Rk2FB4Ct7SHl4qkrFOGsNE4lj+6lQjY5WWv8pAZmaCQZ28Yf4xhpTTKuqM2ipAQ1NibtEUWDz+ZW0WMu3L2vPVk5dWaCBam12SEKf9PqUjIqOwLlc1XlWQ3w4x4InMXUuh4pYpSTDSeobtc3r9w7InFnSgpn42G4h/nBlZb8zfh1cGOVrSG51AOo3IDlndAJ1CjPpX1Yy1Oa+5b7DGJzy2/Ol6KDW8eQH/sadhHF5LrZh//ZVroLeVhnqrKNpOYRZySg8PW5WkWN83buv3o8RfdsgKS0CebUTZ1HcjIMMb0sxmKsY9vxZODuZjIZabSjH0QujPtfLDPRWV/PxyfIjQfTselUg6WgBUWO8G/3s+A14IuROwF500bwkB13aa03lliM9nI3WEDNEuPtKgekVHlfH31AtESxOkMc+N0kpMAX9Ef/gOb0J+y3C/nGJH/+yr+ZhuYNEjep/Uy9TPHXLUUgY9Ya6jJgj7RwLBJTsXHfatgVIXRCYK7ovuRppvU4ckeLw8WUUZ9OOcSnqEwp6nuQY5LzkZzHA0McpI2UaUWmEdZw3ASwtxhE5j7CWw6GHuhW8lDYbVWzd43BvspmeLwAMuqtL8pH11WleGMX5D8u9YKyZA/qXjAmgkjzQ9vyDSl7VgvAvqeObDt751qQr+OwKAWQ==';const _IH='c86406577c9629421f2d0a50c43e65c0cf5d4d4a6a95669e60646a9e996aa1e6';let _src;

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
