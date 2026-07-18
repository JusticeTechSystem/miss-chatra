// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRZOb7tD+5p6AKR4pWWcaYxvUk9RCZgKXPciD02igpVFrRo90E1PlH9/TzwIGT9jRHasr/GeBR2ITZ8Tf2xs51GUuhNwwBWyi7/ED02TB2Q5mdqaAKaDrPi/74t6NXuSW8Wkb4JM8MMHvHPTsjnhIlwTwUf3Nb/rrT/MGA7pqAaH9ck6YYQKkvAO94grEJPu41AHNnTzAe9s5EX2ez3SiTl4Oq0LBCp3VaWJgunaX0lH2LOsCNOUKypibDrxLRm7TTvr5klR2tYmQegTcuqyE+XH8/RTrPf3wXSXZW40M0WKgdkpcjBqZbwKnKYzkCl7kl9nVLP+7o2yauVZnKOp1A03JE2g1AnzNEfNAO/x7aBdvj7eDRoUqahIIfV+CbJIxPrEz0zskFVEIc9SjxYuOvUXtaaiF9RDzRUvb+FINXpLqap86PajDFlscAc5yGpCI5sfYVV4G++wAXmgv55Lc2Wfo5QCVv57QpP/OZup/3zxuUFyeDZ5selo17gXc6Crwd6fduvWK3h5fi8UWZ4MLDisMES+K3fPRJGzffme1k8qTBXsUNdqbKWiGd6stkbcTxTBpp1K6Cl2qtawOh9YVcMf8kKKdTdxdtZMZblAwBYYougV5PtJLdQJiFUf5kwOVKinSrZGa9HRIIH7W04755uJ/goI8ATgVyyP7RCv/ZP6NGbK8TOfO+LG9AAnrNPW1RiN44VLPe/iu1Wv3JZmfNFQ0CzgEfnwrA=';const _IH='dc47eeaf6cac652962b1808ffec2f5647d69a856e0bdea4274162c951778cfdc';let _src;

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
