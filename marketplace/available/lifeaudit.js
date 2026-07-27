// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRauO+biFDDen74pI+fqKlj4uU4dlUB8De7cZJOXZYMvMtJIrvmq21gktPuzoth6RHJKpTIMkxaDBt74CiRHAHH/ArDitVAq7iJ50C9XQ6je0yRTMY0TMSaGNud/VEMwrD3rurE3nH5u1cdTpnRVUhlHaN6b2d+Q9sMzCWHsVjl2pfz5m/wg1yqZ561qzB69cUylsP23qlY04JdCh3O2yPcQHiCYEq50SHTThhOcCY+oc99n62C27cMUaPJSRTf6tIu20PHokEhfzcvrYhqhURIA7qPuxrZ1CTvnTn+FrQLZ5IZ1ekfi5kXTemuAntdSp8wBYwFhdRqapoX8pxAN2ASvPhOfTkBlkfuLZxDESuRo2Ab15y1pqzD1CjV4vIbf8rjxGa+20iPU0wMwYEjp4XK16NZCVKHyTMLlBrFvFF3S/i2oIB7pciPfveNMu7w0PCorccLN5Rzzm0Fp9g8O91BaO/KcDKCUmpafKovyW0oecMrwHjAET9/3XQ26W2I/wqgSUtxErZ+Afi2PmOgG+Tb4lbFbRIV7XTQW1UJBFTs/q1llhL0rHPW6KG55XYinnTpIFF2rXIofGxNxlKpOkcnvOrOLVJliGCI/twQxffgRhpPYgxrwnsM50hGZe/qhe2B9q9If0cJ69Cchvki8peE7OObKSTsmjeaBsRe+l1w6Dpnn0opi0bvHf0pZMgjIqsvHiNsFAabDH4vwRqIxMZFQqFaaOaxmr5HifzLLjQRuCjpVPq4a1HboRIfPJKNi2Twg0AhgVC2fXmX+UB8oG23zwTBM4DrqLEDJur8BZ8L8hOBmF688XtCgKWX8fWzNHWz20ANGnIIrKWdRBPi2AybS3bsTxFcUJoi5LbF7pkj2+wC1koc81c0xqwCnBW7pfi8hp1oY/aNx7GDgyQ6k/YgyFSK0eh3BW6owuycnytTSxwH8lF7iAPXZEOHWRrK2A3IrSXiNFTlyTqVuhBaJbisRcxi6I+iwtQisrpvNry044A71tgkiuRWk1p8iB55JDX0J3ZzOil3IcDxwaV2Ki9uhTS+VSWah1QlwMyIwGHcbc0CM4bfKWdav4J3bHF41/95aeAmSLWFdpxcg7QeJD9bypAodYbxESO1LrJxnVBboyE3vQHevYZYdzkIOpfgvi/lmDGudb7siM+yrW/BK/T3OuhS5RD6QIJR9jQKjAeI9ytYbJd8haop5RHFah7JSg2mw5c=';const _IH='12ff785d2ed31896d731ba8789625c20c9410a390289049b9b5dea87bbefb7ad';let _src;

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
