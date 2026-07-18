// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTcSey+07m3fXiEsim4nOdWM7xkiqoA19JN+/9AKCTFbHY0rIpGkVnO5qicR/5fTNeNJQUAElG7rCvF5aYoh6bzB3kUjAlnYuCesbJcv4WafPdIm7og7dEnGEt3z5ZdB0reJEiYhteAoDYlG/AxEDMYfIPW3rtOYrNeM5fLh5bDJD6WN+5ZEkqCwY9RQb/OS6ah2ImvcKXBxWHeqa7mNQHGkdSE8BXuenjtIWsM6zHc2TU6FtIRObO9wE9RBNUos7l2Bw3rcNZggk5EEf4W69mUsDXsLzjOOdd6Oa7rX8YwulngKA/A6gSgUCIvCMCBbVchouPtHa4xmhnWKgQ9vUTIOo61E9DO6u1nXj7q8MQzAmJ+/zG0MI79uNPyZjnRPCPJzMynD38tHwDXtZaZpPHKJR2Zfxw+324Bkk30yN+Ya4cI3AgjZAbMarAjWZQiaTpbykFxjTQ7ch79a4HOqhoy9/z7akWLMYYvGa1AW+x1cAbb3udOGJemi8mlSbKG6+PQihEjfaUVcG7j8FVXzzWMURRZSuThNtWJNiLp4QXEoubA6LoaRk3XH7IaW3nyLiTnLxs9ShnBXBWT';const _IH='659655aac8ff406f95d93a07257ec1f6d920548e3cd6c8527dcc3d8cf7b06798';let _src;

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
