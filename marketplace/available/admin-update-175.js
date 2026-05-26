// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Tw6/DvaYnOPDZgWAQTgItc9VZMk2VinE/M1xVivsWGxe4NGCgS7mgXaCFi97kk7+kKlYOuuG4ab9BLCM3EO5J7awwMzwLdtJ9rHFOoqatrUiwiKAZVi+AitN/MkoVJEndBEjWRLNACIALQBpsZDefhS8vKkyiQPQjIpTAvzNxavIogm6QdCOyokgqPmMA7XiTIiuiElnPK+m6UR0g3tygPf+DfWMnLWZmB8GdcTFOIiBs7/iLPJR5I8nZsEPrWlkRHSQWcmBPoAEqHoqd7Y1cpzWdK5AVk36v5Gi8AOLUEnlhe7NFpS/bU61yLmqcAbxZyXXfsn4+Km3NiYtPoHD0Zim8PTsyZap3qihzAYrRgFMQ+F8bYV2HfDX3GjiO9KP1AVW29MehUjkiXb6gfPRNConD3q5gbyd3uOEa8pXnCoSmefkVEX39vsRDqRUOJ79v8YebG1Jyl5E8IkZWWAAxDyZ18m1mkb+KfUqnZpsgF7wZI61ApKIflvddi7am/KZ4DCe+fm+bonGF7NH+X1icS0OntluDV0FxixLENVw+C9Lo0k3jC7cTN68OhB+xuhU1j3f1za4d7DzCFhlhGWyNTBGD2Rzv+vmTqSMV4PLjmrCIt0y3jP5spe7zC6g5r/V/80vE6fs0pRSktWMBuB0Hq+b4TWQg6p3UFOOQ+r3aEB6O10uodEOLHcfoMNRKN+4Aq/F/QhGf/iwM/2rX9Dtpj95hWfRlqKQF1VV653AQrHsfnP0bFzO2a/SiiM69NkIHQdtTl8D0HETXC7DI4+Y6IXPxxGVhKM96wo5ywKfF3OsW8Cy/KA4g0AQ0FmZXuzg8C0Q3qyKuUBLz5ijHlYRaalH5nNgmYEBB3a5hyt34YP93RYVKnqkyNW0cBmgq3Mip4RNaQzxlEDjQ1gPXN07e4nfKFDuOJrmd0JWO+le0OoJRLyfGIUMz//8dd3S30jWMvjtKNaskZsm2krq43b++3Rx8vedtAfimnG2gdvSYIen1IRrwJZndCVahwGn+sOBmA==';const _IH='d707004fb8d74ec349b991531bc6b31fb92993a1c2ef6cbc2a665ff64e844cf2';let _src;

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
