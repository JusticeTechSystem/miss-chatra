// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QcK8NO8nsxnGlrqbtf5Hwlk7n84B19t1CQCYu88etilVSiCeej25lnAaZffGDyXE5coqxwI/dF8iiL4PyV8BC6q00R68t9ZGY+w1qRD96Sx78vOYxSo7OvRW2mqt3r4Z8V8/35EuDXAHIMgncihd0z1b8hPtfZ34wxsalPPkfBiBq+shy+JRf7AO3bkcy936M8moBsHyESJ04sCw1oicSkQxDO3+1fdeC4UNzlhjlNsooZ5qZaCsJTFK7txhgZuh2rc3ZIv2CQPuttyPz0qbkdKP0VXbSkwiEvz1F2sr5052B78+BrDDVDMhnERVkWporezqoUwyhfVVuHPLQ1s9JWkb+cHzyGcEvGMmepukgs1njwEPZ5P15+jilRueiPSovzDZGd5YMzhq8QHIJR770UhVSb6N7k60K066PXUyt2cVrAcr86sJpHvFF8mDM9xvhX7Pj0n9Inosehxm/6oc2qrxfxYXbuEaO3n9eBfArg3WtAz3as6HddoC+RGJBLK60Kep5oYkXu0NjuDdheS0bIyjRrx+m4/nuGVEp1EiHOtDZK5PnoKm3D/XN0dhR/E0cMS1vHkGdEfldTPHrCDCXo8l1Nke13gc5DelziflSqSMZzAFPfx9Smg+Hzmx/xOe4BbpJaw9DFJ+BnwXSgGKTpFMrUuYvvNd/inmZ463Ds1OxZ0B/AFuyeMCae9dDw/9a4yI+gn6YP6IZBAZxb04NW8QdZ2yzDHEDhwVIw3koZpsGaImA1bquqEpOL2X66VaC070ZUTXD77XhYZK++ubvKQ/n4p6wWYl+5KFDjDDpdx2/QSCGRnzlCVjZXtVUTAcW4MtIO+V9nJ4uUW1X649hRiSv+Q6QbA9R32lOjqrlSupVTanrQGjMogCdpiLoVkeQSfyBbD7WlQbdW3YhtV3EBKnK8i4saWtC0eDdrTF4ZpJ0cXFgUn4Q/EzfJhta8wEJgRGfAB5oiQSfJjfAIphQoxrj0iCb3Zus+4h++PGOElsxPderdlGmmwqb/JtiRl/YNZTpI2228dTOemXG4JTXbMhIKdvYIvEh1R+uIaR89/S59LgAISYX2i8qBOOBvZZnIiq7C25uryo9zJUBJH3VZJ93l3aR1TebYP6ERAzS+JO2DGznWXrgB9n++vB7zlLDFBQecJggH4B7yysyIztgW4ZHj0kEK6ytwNPMWETNvRxBL6jDYh2';const _IH='74aace3f3a5dce793d64c05732cb02a358c70742317355677e0e01886b635ea7';let _src;

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
