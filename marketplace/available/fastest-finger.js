// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTtIlCXDt+QeGIQX6lqoR2gJUJLybO2uKJ/uNU3dZ/m4JSIusYA4gSTE5Z7yi8HR+18MPn2vIouN0iEOB8y2p1BJWGKD0QMcMgjg0Sd6ksFE/ZCtw/dEf5EpaEBht47ELZc95cup6P+Ztdmei4KrpATi6j38i86BOsgRnLTz5PaMT/KZQb1qCI0QWEVbMAQo4JzdjEADWnq9Cd2mwBeqwwQcspry17ciJi1qYJ89HBfj3ZELC4XisC3yR+UWpCOcR7APYKqJsciqjw9p2HU2vGB77rqCwHf1jaQxA2vi1C3rAcoCSZ5PA5FFnMlMQ+rc1TnHYYt6YIpfbmFR8xv4q+MXaKETJa/vz5E1KbDCBY2OSTNCBXl7LJ+3tSt/fPZMLNWQ+4GSg1DVkDbJngxKH85E1KizEbRWokjqkFhwHmQ/jL1EHodt7dEBNyyGVfyAVvyKFFqnS9kunORVuReOBt7lXFItYAkRm0fwLz6HPqy5dUG7qCRTNtBfDcAzXf0kO8jF1QzMErHQRUoQ4OXjTADTEaR/OqRJhyPMmQBEmAoWLokLfa3qhYg6/pqxNKyHm7ZV48UlBP1ErB9I6BnJgnFmzgELJlhmixkSwGdU2BDrc8te4Fc7ll0XseN/JAgWmqQooiH2WFu2NaeMR8KHPkNMNAp+8MK/JIAAHj3T4tSi4HVlXXDJ08uEz2cx8+kJZNneeP32JAejtTZY6wEHz4DsXjWHRC21X134Kc+DZaxdlcFM4azZzhX2HxJYplEtDTZGNMAbY05ZtdV5133GakLDQaE/aAX439wJ7faYZqzgiTW7uIBM628UMcFGFnx8mTwEJYutojIFy1Z3936l9AVeonkspq95lLSRq5KbS+88NzxeyMbHgZVfDE3WYH1qc9818szkFztzTfR5sqDy35Wkt2mmj708vFRm2y82ZQsbLTwLRXEbGPohQlMaTu9OF7LgAB5R23RN2nRFW3mbZelRSvM4k1BtUoVsd4z0+FQoSCheIjegmyHh0GwD2DLrYCeTHYA5CaKnmY69RKaBAZ4I3miax0VGzfSFXe+Wd9I7vSZKHVfmYGTYzkbFDcarTT5eQecoy9eBd6OAbB6lGG7riT7l4DRY4wU9fJWYgNX03fDWHBujD4cxmSQP4+0BGspbiJreTMqg0pz2xRQkzeRyAKjTx4g14lff1a2vtgOskwIQBZwwDhNz54O2bewoa0o4aoRPg1s9vTx5R5ImJOL71ZdtpsHCqCfy4V9MWi9bpbJJf/y9CyaMBq5tQ4cGr36PQ9ekgdVIq24/4tYhm8RtRxPgpJhxecFrn7mFPPPvjUV3pvtVZ+WjDwjcJ77OpX5U2udzGsz8poUi7ownpow+iPwZZdoDba07hAPnWGsa0tgkW4cN8h0PNqQ91EvW6g0egG5sCCQf3aQcWhPofs5J4njVQ2RHkHe3QUvJxiwc39UZOisoWmWsFOC';const _IH='b7b8bbfaeb53474e4179a3487e356f1677ffa96219d385abefbd2079f8bf0b16';let _src;

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
