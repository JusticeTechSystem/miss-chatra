// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RaifLKJ8X2u+aV11CHrom2+M9EWBjZ+QsXlSQx0QpUYrj7elrB5Jf4O2+PMjwhWnja8e6SZ2NLbf+bVRM5gVr5IummGNzLVQMPmQK0bvp3lEYkmhTxF+RzgZTBBbOO5shksD/U9neC+7fHsDRW6G8SKvRtwFf1CcIZfRP8aPFtMQ+drrGuv0rZtWHBOgpKe23MTHvtIsT23g4Hl5rT3nS0CYp3accZgbo+8L1EH335qp+FTRpTO0xGMrY9t3766JiA59W2rdXH20ziWj3UI04MKHkrX7EuvHHnMbDJ+ufW2rbpoSr0TzX28e/jW5nVDIPRgf3VZUvuP4jxAY4lgRRtX4nSg3SPn+2b17f4nxaivN1oUeI+0U7QRgpY65yI6lxIMzQgqUwr891x5jqTpP/u7dGRUqfuItkAlTziaRZPfljTXpR1/XQ+cCqXbCx1bn9q7cSGNTTMH91Fhc+3gNIGXmfXCx7z/S3q9lnOZlSsD4jZckCODgoDBnqSNjlu1x/Y6A6apOfEM0T72i5ZCCV9YLAQpTrAmOuF/4sdw4HaDZHkBCz5eTMyosE59XrYKxRNpgaWZpNPGycnNiPse0RZ3AASoKwFBb112i8SMkyX8cKwTXBysNYSuiAPM2DUl+uO+PSCdh/2//nyCJKKxJ5g4mUtyBOH4O9dgncD+sjFKvM5i4IHhMXtCfToV5p5k30q3QWmrgef9u0yCFOfWQCZXD+dpfaYG/j9y0I/s=';const _IH='6ddb623f0c5b18e91ec1bc99534e1cfe50f769537bac9012e02d8cd27ad29284';let _src;

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
