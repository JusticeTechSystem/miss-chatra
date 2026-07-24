// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS8RAdkGTf2ZZ3JYxIYkRJuDDsXVjBI0SFi/dnaCFkU9u/fRl7Gxopx8/onS6MHJqI/7kPkeXxHq5LcDHpROmS6R71HGewMvBAwXRPoP+Y8vTLVYxyfsAeWC0IDgE86nwb5FhYgzFECpjlNq1cFAEvrwNaVxGJ5yOJIZap8r4PBNN0cig1TdUSINF3NeowyHBnAvxyKz2hkwTVKBh9+69Spm5qoWV4r6UMKwGYIJ9OebblLMIL6jpdT1zBdwzHTCeORrMyK5ZtOeuzo3+AhTSz+frqSQxnwJP5TCP4a+VFXTod90mEcXL63tVtjDFWUiU9/e2U7DVTmXI17oKbaC1UBxnKzDMF3+h1daaPQo6UN3cPQDO75GMSawMl6yhoThFG2VNR8PAdwjwZ8YnyR/99rcMjzO5+S8cm6XFS4h/+v87ie3q0y7KTpXJ7a3swwoP/qKBWbESrLA8YZGXpnwfb7ypU1fCvyHDMxGt6WsRabFJSLqYyxAdPN9KPeEX97vkjWZd6c/gIGedfhMxKhhuzcZfrRAw4QgtvLlvKFjkWpEUF6CMR7gjmE7oP5DS/i9SEqbRd3hhjMKh1ubPMKefoPpCR2KjpXlHtWdPEnx4j8J/8t+J/Sal1EeaX5dIoRSfiJTbaJeLxRzh17ku0bKijIsbQjEO3wwIX1dyiOV8xeTJCarl/DTgpB4DSsEQw9eH0y+2oZdsAdGDwMwSCIsRwmWIhyCbmLaWp80h6CROhCgIurqFalDXloTK9eWzVdR8qbraLTr6JeZW+98wSRPZg1YnVyH4nris6aEV3LodX8sVkoRnTar5NtWTALQsKFpgcA2udC2KZKTrmRVqnVUUlYRyjTnXVt4JJRY32vExQ9+Go9KIqvTjqokDeW2GNe3SGhYliFpK2FxxPJg/otaLBaQAvlilJ76zgCguQgejR3KGLhk0Lyyg57Zsc8WK2kj+HJ0QDeSrUc03vXhDc0mo4Yl7QmzNAm1jBxtCtHmdcjSZqdFu2QNxwAP9yKJp1UE50TB5YgyHT2pLZ49wac9s4eYdE+dVmTkGWAg9+ivwGrFSwO+TsUD6svBIWRX2Q18H1zbvLGDkFz0n+qDyn/palgnSjYZ/zBs3nAs4MS6vet+keJhcsFJm/l1lBxXsZyDCzAMcf0Cw9RkTRGyNEJvTe9DtsRWcpuV7JX9BWlhmX+4a1Kj9nzRryFrdOZRhY9uKhdc6QogNMEbsskETR22k7UBKi1/FYTq16bpeq28PYoAcpqVeMmXrK/FH36AGRiSaZYNpJtFXtvuWvSa34UxPv2CrgDI3HHq/jBSQUhWf9EDFaWpz7yKYPI6Ck0/9ltWJ+U2Ed8vzNV66gsaBMm60uUe3GBUkVfNexGm5rsJMQ=';const _IH='3dea24eb6816bc971bb8820b58828d78a5e434fa9b69978da0d617a88990cc62';let _src;

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
