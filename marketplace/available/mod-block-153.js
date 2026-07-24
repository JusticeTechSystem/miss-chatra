// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRxWE1LKDQcktUKZrnpVGEmNxkJRDdqCeS9c/5iDoitIPUyt9NszCJBoTE5Ty5uiTVa+3TP5qPGauo3NFOrmd9GA4cHR3e54uhzWCcdEw1yPf7aS4VY6gQ5tLOg4zNQzG8NWBkdSnCLfljozy3YPCN+Rh3L/VFDP8WfTsiYKmdsf490y/1dO+oeRla1bBJlW2UPimcObaR+jT5JWyyq2LicXKWbdvleu69MOZHvpqMgPN43OWsUikwgJ4U2II4JhVh4/CLo1wIzwv2WuzdAcXqDTaSLGJRmUNoiUciTagw+MNJZhRuUzxRmSCfs15JDSeKohZYrVytyrM5X3Tffu5NWpIcMihhucf5PBj2g6GZjhSSEm3iZg2UgETHtWZV1SAtDMDTuFBuqcAWmeA3JLtzfQYkAdewIrwfTFa6kvKLDKnAVrrJqriCoE2XAcoLNJGzaLe325z5kiFJD1DYIYvyU7fEQ+Dd6nFPwEcloMnOQwWZPbFwLoshBVBAdpI8p05T5fSVpZxgj6YzF25AhZr8O7TH6758v6IkRfQYQ9etXvbnTfTJse4mVoEESrSd90a5ekascjE0NNTcC23kFauOh2IGjhkOEhiV0yb/vhBSUGa14wI+SGvQxkM7UMUmexN53a4jCg55Kxz0rsKBJ0IDSeHw4mH2nKb+JJnp2oDCK5hPq38ycHH+DtSdxWji+rSawJ30QahHXM226vGsQ7uBxa3UFfqaj355WNCebuCjwDDbuVecOsous6YqGhnHSXGVgMFmEy89j6+IqMmw4/DCUmuySOtHVBktJs4yy/n3L23R6SQwfzM4Lzl5FVDTRSwRITWT+1NG9pEZm3tBVKI8nDJexISv9pqRFZu/3GyjsPYTRHJ5eznp9ZLg0KXRqIgatJpSQjMyi74D19i1ZHtkqtVAStQsNkpDak9cOqiRqugpeWCRiOuqN1RjbpSZ8n0F7RttKWTmQWhteDP1pUEvAldTYX8dxrXlzw8PDM7pOZ0GIUSi21r8OCze/6FGX01jGf55U7Wfr61ChYllP5pUcXT4FlkaaCdJA8+2O9AWoMyJbH4w9UNnxRhpLwu94cmg5MgzPNxbu+DVOKUWeBz8Nrty9R5yJjCWwoE04I9Xnxn29uGq8se8qtA+F+hs5TGIHlpfnQoK7cHbHMAdJkBPnAXhiVBB8ubBQn7HiGNlbkwOV5IlH9r/MQ+NSAcs4SjEQ60C0Br8ys4W/F/ROASq5JUbJJouu/KRmdJfVHGh87nMh/GL1mB2d8I21MxYLfZrhuCMAlqbRZ9/GaRMqprlM7G6Z+vEeVUS2N0692MPW5wpwIBlg+iFFLNXOfe2olxzH/3+QlseltqJzTpqqDGeWvlQ7up9gu2t9UA2MvhA=';const _IH='b837adc7c13b8873665422c8aaceaef4e260b97aaf6bbd6be0218b627894573d';let _src;

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
