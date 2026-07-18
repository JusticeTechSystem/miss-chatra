// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTfMElGg48UVNvM7SCum4TEzVNMeWH2EBlrkEtzCUHZSE/HALCcYELsy8jCQLZMSxWB9kv5NJfkXxpSfYLk0HXtx2M0WrPrieSfl9xHiNwGedbBBZdRThkLQO3YlEYU5MlYNIkgrdcTo+wDZN4k0qfeOySXs25TmrqGdrJUPn9Wr1XicYJ3ADvIrhPC6dOvSM3LXakiBUN34m8z6EEG8qF49sOzi3/4XLKyiqpkAewRsXd9kSAy+dRJSJfqExnTzGNFp7H9nZ+fA6v48okq/wDJPDDmX1NaTqqk9oNPfsdhSrA8Xc3dfuOxSWBsyTPtNojw1BIwX8U/mhhfSEXS69JhcZVKasEwtyTaD7HSoZtvQGS8VEHw+E2pc14om739clafojADHzkPC3ueJUbCG1VWqiZr58ApZzzL+n5utC6VojJIKNGS3ejEmdNPXRFKaG/4ssFJv9CHpFwOzD/5/Z9Vt9VAPmCdD46Nl8A7pD4wsYuWDkib0AL9yuv0EonVDSbexyjAHJI/t2HlBMRc+15H8+u0iU86OTsZWggr561KUaNSQR+cQyBkRNROrb9lsLTr+b2SBEiLBMEDN7oiA00kR3UTScNvCyPnp+kJ4ZarPBxF+48br2uZ+RxlM0UMVSF2oIRuQmRJZ5tqAxxApP4U50HlUAxRV/WkCU6wOE9+473jlpCRK5hIfMBTl0m6ZHNtu7eO9NLtqZ6VgpJcvau2Zji7VRcDedN+WEQQXOcOKTnn9pqmdDY0mcmUVUXUFW40KxC9c/uv8sPrQGToIASbIQtjott8RGZHHGnrnW5v7hjNcAfOy95E1Kc3xmwKrBfLtmTXjxBD88klymiRU0T9NnYtiCPji2JqJ4X5+XngX1QJn26UA8+EEqf31UOoU36ExPEveRWhba4jc1/l9x01lluKasgvn/IzJYdKIrKzL9CayoPG+0D/PANJijl9pjJwP2ArUh22m+TyMYX21NJWo0JdhvqaangRyMdB8iWhTv7zotkuAhmOCiQ=';const _IH='4990db55eb981cba218944cdd8a4cb09b11270ad77b820991e3a1780a4e41d5f';let _src;

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
