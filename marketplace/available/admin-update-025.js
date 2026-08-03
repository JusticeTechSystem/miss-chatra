// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRMl/k0Im/jVZPr/jOZzlK89QZ8qOl4Qsz84EB/ePZ5CRSV86xR1yfvM7nwFJM0Mtl0wz7UjqMelNN8/eBi6M+ZDuzKktUi0pSE1Qxj7SILNtjg794wrLxC26zpv/j5OBk6QhVqTQki1xn8kSWfnQSvsWbzbb7R7i5/Dx/3mCB6RytvxxOLHd9y8gKOFjADZe8ZHJtxctbYKwPpIgomj/ERBE3xnJ8JN1Zpjru3pL7BrYGDgiU9dP6RUDHm4An9MAibePdCxSdnkLzOFp7X7wdIjzB41Tvpo5atQQPV7gPEWgSm0sIC15/S3y6MWsDo109UHeXJeRR82fpHMT4BoeHoAS+bLdk3JlSRhClfxVhR7sbx5BASGzE0nN4Q5AGkYRZpWx3D+xCC0uTEf67RYTQndwPeDT8tJmLUHXrTEBCosffeuVspioqT5urfLGBNLFblDFCNlKNIiUvYpyrImrJUTN8d7T0BJGYn+I2zC+FLf1izpb3+ZwwGkFQaRr7lfMqRFpnrhFPHtcifT6F6xsUyXFjOVBd8UuZukB38aUtYL0Gdv9KCfqp/H7Jfmz46up0ic9C89/XyohWUoea+iYZcwqzYBQGzWgP9Saub7EhZKvA888HoT1cWnqhwBnltj8RzJknQsUd3uuwqdVs0zALUBwvClvt/erC6RrSvFI5GKaxZOszTogQD+MX9mOri5gUBbIfpkmp7OdZjkJ9NXnTf3U/8mKCekw+uvOsAcGDYcBb9Q5xDRyL78XBz/svfiUMETqaffcqIvCIiHFDG1yM2ZSGcZ/JvYzdtazw8CntIhpTX/s//uaKJwfBv9BEzFCFJ0AzCWQj9SXWInrFQBAQLgnNPHW+cDIMOgD7ASboglgCKtoUreW0Uu/FlkCzb02G8HdNq0lkRpGvPUcOfaTuvbz/N+ZFj0ZJFJJ9cUnI0o7rpv/9W5R1JFV0PVFyJ4EfviX+QI5ZkUYOjK84+5xTFEOHqswGDmPwsCmHnjrqOUlfjYIEhgALKuDxo';const _IH='ebdfc366f4a9d320430c7fb5e859a50b806eacf3255bfccb8ef505dddf66211b';let _src;

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
