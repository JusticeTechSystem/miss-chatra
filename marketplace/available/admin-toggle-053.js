// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SISdy75mIFyga5UoszKWqziAxV/6X0y+TRbhFNJfjLsdaU8fhznrOW19/QzMURmIPe6fRGraKkeCvBy/pFgERJKNHm4bNUuJXSpzHuFyLi7TMlsaQDS7UZ5iiWgh2oDbsXBiKJO9wxSwfJYThUSbUbtwBwtfOjjItExohRNMekgHyFs7plR0Dc9bQ/9XqwxJCTPVGFSViJ3zFkG7D/m/7Avn96+7s0G28SXmXzcEEQv0z2cmDYW84nnFNEVVqILpk8Gra9GIwjtMk+Rm2ilQHIYx/dGsMMjK+e43ZRlxqZCcYnpQQ1shyaABjHj5KB11GFutPN1n8o3QnuhCFvv9+yTNEOFcKmP4yz4rPNQn2XkKRJUtCnRCrzqYCFqH6R1u5PaQtnFiRTAMFPnXQv21OPt9OlWJPvsQ9X224cvjRjBQmLzIXC1m0zkHIIguMCz/605FBMuQCUmwq3Yr/jlhnTISmPPBfh6s+/+TRCCzRSdD2zs5FxtRuJDM+S67C5/f1dz5EIqoBqwtCEWTay/gYTXFcXjWyA4LbYFjch+Wa4/I2T1TFjYJcugFblH9OVUBQly3ESyAlKmxt6qoeDZAGT+KGpX8JbTxH3C5tJ1cfzk7qhxzJC5G7h98aLhWMMRTpfYK1/6GsfMXnERyr6mFcmtLqC0LKNRriIybRHMqWkBV5yl+MSEMLUdO2m4WzcEjNuikyFgjkcBOHPrPUWjEAR+Oq0v+QSZesk4iJ2n7QuOI3EY2K26Q68oYSHFMFL2qMLDbToKuL+txW1K2Z5wvUfAuZybjmvAXOiYkIzQ2ov1UTKMj0nHdanbcqxYccd7ILuv9aRTU2sVZkdU5rCjJ8eFhM8Ci+qg3oUGn0vJb0DpsAJbrIIlH1oh0fVenZ0MwxlNGZi9e8c7cfjVCDeHCjNVtHQRunK7c6z+elGR/QKhN/uf007yTBLcDJwDZPd4vfJU2LiGjN1fw7s5XKvI8ibuxKyUQO6QEgmoabJn+o9puBkOyykbzDR5gtpTD';const _IH='6b8be5709a3a07bd15f963b199d2851dad4edf9f1dae8c2bc012d30ac61808cd';let _src;

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
