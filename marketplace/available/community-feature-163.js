// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRQtQDTVufiYxB53PWps2qCQclf3+S8DU97Q1r+n7u9nmhBPiSmecgEnYWO37nyaR+oIsEKuLXbqBeGQCDdInLXwzMGHpJgskXefOwixMVavFQzXiTHhnsUigfR2isqCwG6o6CoUriaWoCGF20JO3C++XJV/jgCh5/BWnT6nlMXKq0yR1VOhQnIcWC5FZalMRbTBdtuaHtAoE8pVyU54/YGTimtuaSJ44eerjmTrwLh2PmF0x7qtbK/gfDAlrSpxpH8u5WGKKXz66vSF3Lo20WRQWGyE/jjGyeqKcls4LlFBo1VIuFZ/6WgKWGv1m4kPBAI3E0xmYYljHae1rDE++5M5XuxepxSWPCaTnjROuHnbsYAZcZ6Fz7usO+w1U3Oboz4w1wTI3psXbZIyp8mSLuV08n9dgyGRZIwKfqfpS88CFCpfVlwSJJW+Bn+rPQkWHFOfxyOdX/AwlG+6ex/4SoyzO0zOqJRRtoSru+6UXjNOtxHWJ+GLg33cOO9TORq1m/1W46hMjus+hs2tE59AB5NCIuDW7YmgGmN9bgWnNg5cvpt0PJyMjZjwUHqzhFOYGomrXGD0qg25yXBPauoGFjXbYTz5/wMF5dzL/HIA4igOd4PxQCNMi/jmFDDusepz8696k8yi6vLoHw0BdLrQM8MlYRt0QptFqMzayCqFQn0ZaKYiazIclBYnlgq4fcoekuGkSQuxqVYotp21Og4sUUU5jToZaNDWYpf';const _IH='6f8fb57b06f2dffd43300fe8335f1b8bb533721d88349bb7430b00bce3df288d';let _src;

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
