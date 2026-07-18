// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQyT8tDA9kfUSVZLwKt6TGPlN2qlOM096LrcfHIBdZGaJrtAVq8CQGlmUiN+WimjWekK/M44ddNCW9cjNAQhzsqGKwyVI3a2CfB0Y2qmhy57lMtUA+GMZtk/G6+S5Ysy0kK1Hj/KtOeYEplbmFinx3uDA3xvmF3udTDDaubPH0YoJWowKntN6gfGCnMjzLWWO8Z+iOjtDaKjcgkMo7SqNeC0wmZ9pgU5jLkTaqX+dDYC0RUCtK5pNWUjxzt7ReqWW3DpA4yFR8PHzJYgEjkk4UVKisZ0WNiJt/akWt/cEaThR7MjQ4ORekDbHW9A7EnTCoS43qLPzb0ndOUNOEQeiU6rc9MW5tsDSZDNjuv5v9K5Iup9RVlTzFTAyAaG4Qh5F6+wEyfOOW4wpSjZISsqjCIq7Goj0Ipp/Hiu7jG2kHX/9pbxHVB5WQLhF+HE7/PIdJOCbedDF3fu5voBo/13kJMvXfumKPOEbjSM1irN65xD4cnVwHEDCHcO4IKpj5Y3+ARKncSjPxF8XsFsKkemPyOsvbaGClMjdPP/7K9DLjQpLewkPr1HVWKZsCLVIFXOxNATdxKeZS1j4P/Dv5IFfFjtzJlTjTkCSt++SBVvBUteSBtnwJGfym5EjfoqDYf8ejnbmHSER5nALyNp+xeKN8/G0w/gdFsbgAw2ygGvcCIa7axjYC5ze++nvb3Wix98e4alV6yoaEVDe3ShZE0toQnaToulcYfUhVQrlVnXybNMqwek6aO5HbCGICIDB9XR9GuXPa7SZL+kzKnTVNjJIYzgErdrzHRPxJ6lQDy4xytGOJX+9akZrTHeWOKik3oXZFCkRLMHGZvt2ocUpADPQUkmP/dpa8PyXgQ7wBK8RYSvJnnJrEU4ayVj6BQkeqfRYifg6CU+EiReoyVX8n+hR8BEFk6obbJ4whJF1KMezo+bVYqH4n0MhqEdZXWiQTbu3wBAUZ4AaTE8EsyET4fkNC6pJsIcoFHLXMnp3KB09ngPif2wz/IlKtw8/jMhpA=';const _IH='3d94b439c1b2f038b32b47c4d8e16a1a7f63ca7c1f7c934b57fa3e5efb89cf19';let _src;

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
