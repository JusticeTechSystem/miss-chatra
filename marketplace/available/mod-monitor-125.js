// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSOOq9L9WOCPi8b8JQ3w8qaTUqe1l66QGY9YmwarQe8hYLX8GroyMUt4moFS+kYyXJhrNk3PUKSvGDPKsH2hNlJPiwLx2HyFRYN2SS8yO1QC9TJff8V9t35ibmJYc9lRrvfWY+N+YSo/8txc9FTGSpETstxFJWccRKUyoTE2F0/Ycri3jWBmnofVMIfBVodrX9BEjbuCh39hrpFACKtrLe84swbgciAR7uKFJSoxGWSjgpb8+BpQeQl0vvmdwAUBKrDl/EBhybyeTydBpU9o3LIYikYfN+QQm4nVC1Nkl51pSvh77U/5EIya2HYgb4VTpKNIAfqTtwrPw1ioaf6P4XFdLkFA48fNjvqmmWozfkKd7V7uItfRWwSI4qxTZ/8oltKYpOitzRzIM5LNBF7YNs1J7n1tXZn8sam3LiouwVIe9hMsUN4Jop6MHOfWVwqyuENBYKp0dpGJZv29RSGiWrxtdCVP2IaM51GFxvKlhDbI2O8/P2iwN5xBd5Usq09TG9V1lUeOkjqLah0kde9UbbKGcR5AIR0klTKgsrKVMwzkFwpG5QQ8EosarXHGyTVwed6mPJC0d41O2srMpUaemLG0gvJ8BzIiHhuX0SX/jgXMGUYHx+/u7ninUEysFlmJJOgSs2lfFO/Dgpz4Zjf+SpgHVqOU1iMQCGZBPbuXDNT0db6ctZ4cgWrCJbD8wlYbHaIDi4IyDTRrKc46B2jScKgbN/ZUHT9AAQfnq1AUMmtXPjowJDdVl2MY3HY0TC/NsQb/aMECToZid9hnT+e7cHbfLABjHBrfDMqxma1RzdlaXE9OASYmH/zx3rVtoDvDCU6hAvoVd0gRmEFnUmOhpjgZYnGalRNZoTwndVSQ1PGo/3yiJ8No7kHQMljs0l43xwpdVsIe8pz1T0CT3fw+F8waowEouDwp+y1U/B6dCsG+/cPxf1FUUkQP3s5CTbUn4T5FUC12+fbCCHYqcqF0hhwdqSjvi4eaKlobS3DxxHdzJxubgcsrYPo3+DAkYlh8CR7Q6htvPKcl1Ejoy/BHzP/j3ymkAAnQFwjY2ZI6Y4EAiJOkVyQAPnEQkPQqLQh/Qi/Z7ozetsb07yBz3Jm+zqi7dRUQyGSMKVusHPeHOxDyPsSJ5dNKcVgPnnrC6ruL5tp7FlMDbNIq6J7XmI02t3xViVsP/ANHAXCEJi4LiC7S4cPy6wYG/KBYyneY96iSAjctRjD7LQ3zZDYdDv5yOUdClbdGgUKjMpJfjZ7pk+sVPbmY/mzX7Cy0c2Jvyd9vd+apVnvNzU9J6xXz2OQgR/le8fYMYKw83xv+Q/nDgHLp3NHAd1O+CIB61+fMnpUSJijYaYaw/hXBVbl39SF63eucZ3SzyOs8/MTjp3niQk2Pe/yRsE085IEzCA+MKIC9xqytA==';const _IH='9cb6f36dbdb5f54638098547bbb844d9c749a60b08ee95b33dea9ee20bc79e9f';let _src;

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
