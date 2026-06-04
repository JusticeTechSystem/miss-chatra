// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9xLn/T4UqgrZuHscLj4WRg7fDvamha+XlXpVAMZnffxGd3k19gfv0VEPZ/ODgnF+yRwESmCA6HKtXpxD5+ucD7yEKqiNYrEMDiTIyNxweTKmEODF6COAKZPYu3WniDEiXix0sWFDC+eQC1vXqkpaFBll0eClwYvO2PCzk0bqJ1Ak+VTNSQ8iPFTPiqAldpD546TDcAzBpTLIxUL0Y1FECd9GtTwUbEVGxUZNeo3ViHJsXUa43tR/qfLbJczstsV86J8xDb5w/v8oVpIWWcK7bOBIyJI+3T40rrbIDjSTPkQS/kI0CiDIJHVUjYMI6nqnHVrA6weaoVp3Ux0XZwHMq7z5yi2aug+vJ7poY/bRfkBWy5MjAyOITYQVEuDQvqgHhlCf6uYMiU9LMIl4c15vmdCKtSJ4v5JjoX5AF/JPb9cId4Qp/n6sknra1e9b9NsmG5eiT6v40dcQ+96oMg4VNaPCgQaG/jpTEdWDf9d02QmEHmzO5/p3fbx+lY+lrv0+ObmXb1JyI1oWzmqGPjzQBYupRY7QHoCGIrhNc2dP4ReBXiwZ7PsWq5JQtZnZbbVOnxdXQS52RuZ1fmE+hnDrZM4iFN6krZ3JwDvwCKvcWXyA4tVbjG8n71NvyrMGxQrufMHu/LtNw4tRyw8S0ccdIjPVHCX+BYfi9gbSI+cEJ00M7oxnah6IOLgKnYsovBGPegW1yqRaBmVnuWlbXwJBCNzoi5e0j1uuPbOHVvicsbFAmBb4J8gnTB3IrRw2n528Jatz7LEnpx27+lLUfSnWB4npnpzx2mv1aFRIqFEFUp+2DHNqcy7j4DuE8Uk5Ygsr+b439a9Icqcm8ASF3QH6iidhQvaZ14D1SES7Y6MMHcSk7c/QTVwkrCJOH4gd7RDBateRkB/SaaZgvm55X612s0Sodsv2j74e3ZM1aEUQGBrvHTHC3MdlT9eDAnbKz0lEMn3qzHD/u6S8snnb6xwHfMwlTj9VqYo+Ov2uvI7tlw95o/BKaErziEncATeOLgNEY3/MEZTkqFYUUSxl3E4IxN/ETAFAKJ2NN2a1lGkvuJhueXHSwV2mb9ka2yDoKr+h/kgUiXOUyKJVSlp29l1kKaMSdgRjne+M0ah6NkEoXWwT3m7kYAb6DpdAEmtCNajIrlasVPcibV8vfxS2brOKAq0BVi7pDAnYEaBJEokCFqPAA+HTGWx5Axu5K/mbjCZd+pCTOFS6H2+2Y+G99Ef5QSZQonD5BasCyoCHVW1PSu7NeZzMj03PzHVP2RoA8Op1I7KcyRi0wx/KX/D/cyq/XGLuPJ+eFS9/OFDauVWPjFaRf7d3CEHmRyjNJNiMvleNFcAesC7GmjyvnCHTGZldt2HFRo+/p1keO0QXTVbwDVDc3iYZYbMMTRvYWGMjHpfLFOgv/HxqXVJ/oVW+';const _IH='cf37d657aefdd170157f2ddfdeb04f930af0ad06d7cfe7a115f8492f6f7feb0c';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
