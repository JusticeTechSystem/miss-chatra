// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRhkLcY9iqIU7dhehAQPPfwU9eWERWB92h+tU7NzkI0Aroo+vIdAou0PhPPTD2JFOwaza/+m3fF1JLjZpUG4NBo/6OzR5Ei2wDFcGlU26TWHUZabk2cPimcMxNhohgTM9rCa8WD6+bamnm77u7t7kSbDD/zb6Rp34KOwISbTUbyyeeDIfKXYxYjRpHTfKNFVTsnDonBqCLmx3ZdbRVdBGmrbnXOoiBRakG0NZq8Bbkbh/OvuTnoEzptXcI19hFhIv20654yGF4gAFDgZ5UhFMz7oFtNGw7d0PwKZJqElc8+yND2yV/waEfgWmFsmOKB/xJmWYUw4arqslwW156sOoforQxKTfMboY5aFqRFw4C42l2cWma+8VnfstYWdoGSkvGL/WTUeqpvU8SPtFk7iJbK2strQITkQ/W0vF4I0apgVwKxIypGX8eJl6Gk/+b+pzGdqCfM3RiDZlv1lWg585St+1EQ8ycwYNxMXqOp2eYwY5DCFgNxvn8X/kJEqXG2nTNP7c5zBHzWXUFYX0OOLBUWahMMmiPJkuTjDmumMTFdM5XlZWh7gYpPEM6yxR+ERDJawe4w3j81buo9uw/JfpILj54E2cCvDYYdPfqGRKN2pI20OHZ1JZwxFjZwO8PYEgAO91aZ7I89kFUNgPsuXM/UZCaAwOtzWpQRf8IvoOYNEmsgsEihUR3THUC1GWwCzsOmFfk0Bh32qF4eb7Cek4I=';const _IH='fe3c709520a70a661ed40a701eaf37c19856060a3976ced09a35ae73d997898b';let _src;

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
