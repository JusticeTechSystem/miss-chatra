// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTQypua0b2ioivqP8xbCf7NbFuzubTfdIbL80Bv49GalAT+Ruk4IkOP4Bf/kMCIT8AbMbYcuKQ7/bPfeJuNlhwQtYcBansbATMRpX7PRuB+1iczUO6E0eON5pWj0j1P5foc/twO64Y5dja/YXlfl17Bp2odDJcMZiE4CZU2sABL9qNUilJCjIcMbVAlqzml1r6L/2Q16rQlBwuR91K7uKJGdrnwommGl+oKUACGlloNWRHBZ7m4gGVboYIS7st38pBz/kE1mveKi3pEtmEhC2TBKWxgd4OF8yycNgmdfkKMhGciAUjG/q7L9HXqBTdimPtCg5jfqHWi6VsxNcF87eqGQNfClVrJ48lUiT6KEXjun2CIz1f4LC0W26TJAh3HmLSSx3kc0SPRSTOa3NMHElyEOjrBr3nuIt3br9e9aLEiv40YZSZmFGqMkPtIfvzLXWvbaQXALoUCaMGhxVhF9qew1BVgSU+Qb6rxi94MncvzePEFmOTtpcWxc0bAlXqWh2Pcs+dLeWq1emylzqj7OG8c+OLKHrI2pBsTeg1QkLgpT7MLobxyqLXL/8iwiXlcQoFpYZsJGpDYZ3nATHLBHh1Z6Kfu5b0nlQVbvzsYELCjvhM9t902K659dSrF5fmU8lKJbTMwuPrADcd8IVpQSnNMWLS9GeVx24JiYHjYJMfekCr2OKpnSK2VQB9UZp7wBFmV3WJ9Fte0XvhulFxCBUl0';const _IH='8ca84bf5911737d04b91eef135e202c1abb4e925b03c09ce42793495a8615a7c';let _src;

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
