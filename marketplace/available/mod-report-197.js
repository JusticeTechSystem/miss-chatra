// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQB7t/8Xb1IBWwZqqdkQL+aP6xGE6UmOm5T1Kcuo2gMWXmcznk8xnmee6/7NPr9p+C4Z3NNrfHsiStcJtW8MJ1OjLXdKUSo2bQ0i+m3E0UR9BO3Md1Jfndqq3B5NxtU1tecvpwns0CMSTvRfuwy66FG4gBpqOKq7hYjcZpIbtW1Qb6Xd8ACRh2OQcDAt77K68IAyqtgXUaif+psGE2WU7SaxznxjaRBq2EZp1EpqG3TwCadOcW7B2yegUELDr4GjbujQbP0olokvwW2EDXxAOojVDQzHPpQrbAaRBYsVsuMCwLYfAs9+NSDFrvk6Kj4QOVLSrzmrk8WzZIKxpgpPq8TM0azjo7ybJSBlSKYFuw/tVXkzHCILcZVbLhSFstHF7pnO6ozbaxOtUKqbJqAQvlGCJ3qtmbpBxavyAODW5F1wFD4TnePwp5xzJJMqDXfGrJ8vXpKXGGDUF53FI7JVtzrEV/aIeVfCr4DvFJRDvcuJEkJPYvOLkCei/aP5YzmRpWWot6nMrK4QY2D6lhPFlLVG0fgoh5uQ3NKXzurj7m34tkl+cpgmmneCIuyHfjC3GtESjH/BSBgLihEvD8upd0752Y0c84oJfWt3yUfuHHRmXnC78JbT/Dyf0lasXaPbBwz7d5mlVnb/kxsK7nMJXkTOmAlr/9wA+2mvD+CIOmtaOr2pQoXGuKUCRY1OkDw/XLm9mIdxVkY9jln8/rDCOEqI9pbQ9AjtIxreQkcFmr/oV3ce/98xEkM5uT0vMAFtmWBLJAK42xG/WAHvCi5yLErrYfQPRZdHjMykB1M5vKr6o20doMHIseyZnxXa8cTAWkZN5CVoQNNQ8vlj5WPS3NnqbcNLo2HA4O1QTFkD6d0bZrEfH8yahBk6Vo5tvUOiUGLFv+rT2HM6FXnRsDYzMploOV1LMhXNgRpA5CtjM/tgT9U62XzXCZLX4lkWZgFF+1FID1Uv5yGui3emfzsI0ztJcIZkTN7rcgXyXwl8AUml33jkMCyuZmJbwns8WVgQN3rzlj2r2dAwn9A9lJda3cG4rdBL8eMppXqL3fw/LEqjrS/f1ytDTXEGjCKdOsmisZ7VWpq47g/9UVv1yYeb1FRkl3EJgKlzeO52MOdFB9jKAH2VBT6Z8BB3Tt2Cu3y67PBWQHamXgE+oPbpjm54w06KOuxAAvaL2bC5MU0l2D3g+5OQvWiTZWGbSBhCkcXHabf+aJJsjJAU21hsAso1V2Tp4u+AGQG4Iv6W7Hl2u15PlfZbvAYSsjf+hQxl4bubEV7mQoi8tbgzNNmxJ2f4XeAVwZhkAGMrrS6naeflZVddaUYTOxWKDh9KNuafT9D0r1UzJw3zU/aQR9sFVevtKJmELTLv8V297qqNwzCecxe4mNbPCRIcB40';const _IH='85ad9cca24e0cc870e5628d8c591ed7a9bf29795b34266b57e41857ddcec6b4e';let _src;

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
