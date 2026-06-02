// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8SXHPeBhMXa1dJ9Bh7A551MFzLfWWeZcNe4xE2lbxLLPpIxfxD3kwd/ZpTHQ+fPQnt0T5Lr8YA3vT7NuwxETo4qd2SF4UNu+gxuQ0zI4lSwYyJCKJUbuXSVK8hvSGV3XOkn91nGi4uWPAvi38aPlmHAzFpVHB5YwOEU0vnPzMnYgBQJ7rytZLx8Qkm0irGcYiE+o3kzYkeOkl5E7dozUYXhvKYTzv2zx48lz/YIB6TR5MXn6vORKqChD6F33ZDFYPm58FBfcxCMPKlTc5nzy3KMnK/6YhhD9OHkmCCyPAXg9JjNeX1/wxNTPLYh3AUNX7Uq7qZWCrTO3e3836IcaHUjb+8xDJsXxVVaV0qepH6fWglnusbJ8dt1Zp/IZzftybVb6d6/8h00LekU6xuv1OG1peGDxdiZG3CH/vl3EmZjGdL4YGfJiO5qFy9BXQJdKjQOmx62RztCKY/pWKzlqNvw9vJuV2kyhPiwe2v/kEnO+Le+gewvsaBGLgXOwyi7TYsRDSoas/HXJW6jpqtn8Xg6730GD1ka1Z8QWsDSKEYMayl3Pnys0yF/Thz3KmOHco0XkxwFPxtBNGczHmlbvzhRDfmrU4Kxzak38IsdGZECY4FmphaG5aZabx0vWmgXdDo/iiQaUzNmrMPIN6gwcYUpYimzYSZWU+hWYQzUJaPKG74X294XxNqMLuNO79YUSUKyc+XqzhNdrbUjBKITySA5Uhmecf0IIbCRrxTs4iJJD4iLfJ4cuFwV4/TxFQPJ4yiBQDSxQnvRet8NgEF6JbjzhiJDA/gWHegDRMItAxskdP/8Y98opNLIBjAALYS/7ciIvtfPoYEPfkXTvfGGmAx+iKEex5BH5ArG74SPM0xMpQOTo1xOfndSJNZy/jgIMiqNKf/kQUQxUTFIvD6ijZSKmhYz1MCqMdywxy1GUyviZp4r5wkrZ/3oJNuCvEs6OgsVTSOTnAc79+GFSlLSg4zI1ZFyrz4z0+Ktbo+EXF4a7UOo0iuPPROvMX5ehaEeUNSGnrqOJuMe7+qLZ5+1ioBoVd3ezpQuhiF/NAlqXLyoyx6RtRY7/ebrOol0l8zveIxVplhbQdUtcdMcZttMZud6UiYRY+NMh4HqcITQwNFs4TQydbclHFfpU+aPOt7/o7+8RWBehaD6FjTUMG3C1DkxeDykcecsDKhOHjF9T2nU//0Vo9F7E1Ymf7oe9JQku1W2fKe4Miw==';const _IH='2ee3918f7be337333755889718d48008567018ac3796f6b5e9c0c6681ae179b6';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
