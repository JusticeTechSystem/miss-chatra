// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQEPgwPIWQWNlEpgFAGYBXqwTpMZRBhYEmlKdpnHfvsMRXt9nOycpijpmJtEtKcvoB+FD87HvptM/viJRXs7CoeitWGg+B8waNJKLsu9IXJQHQyzG/qeUcy/VCjDJLd6EizvtK4vOBwxMV6TuAWt/Xew5ZCQssoSBiueCZl4fOJ7ca66fUAFD7y7ztaTC5lM2OyR/Pn6XoPsIUBJJI16yDhuQiH8WH4YX1zPNCxK1yscKOg3Ow2QEIoUJNrmIzJwFXPp+b72rro90R2F1rzEtN60nagOsitIwTtOcBczPesLpphFRJgfD0gQIOtByBqq03ftpa4kRQGIwV2TNK+0gqy7vrqv92irf1IsJPPLN4LwfAgJ0LYyikBhhSIbtEy03DpyKvETFC0PI9Sc3AIg2ncu2N6JMp7sdY4VALmNeVy6J2G+807n64HMKPFk+3Qbj2jh2rkhX5D7Elg+XeeMvoPx0H3jFJE1WS+f5nBH5g4K2abrpfD+/xcSIwy99jWXAxiDfoUKciuVxCVssmi8uTw15Srd+strw6k7Nqh8WAQTr+mi5DIirgjZZoS0OZ5PVw0NWCp4zpklvgz2bY2w1tJPI4dIUOnBAaVGl9cxO9p0bswkoNGyuLjib3gAPH7ENn/kdR1vJzJfZCqhBz39zzgLvt2xcYYeX6e2eDEJsUF9csqxmgkFGxq5eqcGgtctbO8dvpOsiFMUYH+t0vQUZej8+n9oQ9fz90MRW8proFOSmBF6GI1FCPLE561M7IdDgvBg/KiCiOjyElb5YL9ZV5pXf66/CrjcaMN18U7YN02WDpOa9NWgv1CFsZWP6fpCTkDL4D1AuJE/JgFChfT6GOii0rw0Y733B5Y9NgDJ9EYgVy1d3gZmSRj7+YnjhWMVxkU1OOr2b+jGO5zdoW96ncajQuwoxWPh8Dt9rU3GYe/pRYH3dovHiQ/3QyLQ0GEG9TVQWSRcCFU8ujN2bpOb0VaMS4wIYJxOM+7jamv8yBRQ0YzT/sgPRGViomLUxpc7WUqZnKlpYSVwHx3qRBXWjW+m8/MYQUsua40sLKVbX42XUSfeazWhL1xgXQnrlqAvX8GqbZlQEQCubaybR59wzRhyAkv0ZxITH7M7MoaCrumVes6KopYxNeTQOi6yVjAkwZy3GWbvXWVgDl/OkZlLecx+rPwetvxnj/AOSVMgiR/nyDyjigxDhE8dF1o9OTNA/iSORJkWdXUtCq9z8MSlliLyG8hbwKkvsl6PwUW9SQW4rtIGI0ni6K0ATNDViiNbZrXF4HRdducjR05R3uk/KLcl6h2jbRS9fdXAogsYhUjZRCFQZeh1u56Di93jkwBzre58504WeSXVwPh1flx++tGwyoczd2FuUWOVgPLBMU=';const _IH='ec754a5d0f6650b817d39ab985b5e74ac6549b5f0aa1d16f3df3f2ccb427db5a';let _src;

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
