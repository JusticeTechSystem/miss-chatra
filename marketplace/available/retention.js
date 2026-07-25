// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRdtAmi9Yx98VHt9oMAtB0i2BWuGcmQGJxS7At8JI9to5ZpjE3ED0h56RTeNIcj6C8Uqpa5Fcbx4OGLNmGqyXElDt0irgP3sTGDSwu6AwxHkoc6CzUbCgKi0E1Jt6AEbfvTD7V7hASHZArGaVMSVzCwBqEgrVfbltDOrUNpTE64EHPGE9AbH6Rd09ZE4TC/6xOeyhXwDPIIhzMmt0159faFWVq+Fp2vMjD0l7FMk2B2lUICejQHWTVqwc8ufGtBhoyBHQguXWEVFM+9UxEwNHW0ssnuaaW35MAaWs9tpDBj+FA8MtvYFShTAwaVvau0jrlSaakUAAE7kMrbFwjJLZDLq2HWxg43mqrVf4ap6zhr+7heRfyWpqhJ4qyAjPyE2rnNOREqG9EwByBp5//wVe4k0PpvZvxftUKbWYKoMXmFNpOh88JgFd2yO61bqxSjXN/XzaDwDWLMA1ZdXsjtt9wMJxFrsz2zMAg1UHuIPT9OqfchlMI/y9R3dfghO45N2TyuqbcdZTMiIleAMVK6FqA5mMNtasqIwuGFCqtM31qjozw933q8U4fPiVIqb3K+BbkJ9xVwmIuOtqGHKpi66O0Z9dtQkbqCORNM3XvnMJcD/997qCw4Mf/5v00nYzQNi7xOV7bcp3mWjF5220/26hnjQZiQoLt6df0RlPZ6F3COhSfKQ0MdRDaNNvRoz2kh5tDzkc/SNOb+/indsjm/QzdkLZ9/jdoVbqCPvWtEuNucEEtWXAsM8V1nLwRmJWJcPm6S4rWanALOcPwchmV/X2ZAwXfwTVCQYH0vZ+reuikCgOXzByq3rEV/OHQsc/c7oW5I5TeBWZv5NnIqLCJKQjP8vufsVUdd7iMYNTDwV4L2K//fX0e2Jiw5RSsPBjuasMYIVVu/kPU7VyUlK02pKEH0Y8zWtlKmEL85QidbSLLEY74CxWOVUxTz3GziMs6IHzZWsmkHsjYA8QLN+UXB8S23tnT/C5npr7db2qCgu6NOsMAD74j2DzrKT6aSxjm33PLltYt3elJUHm0Zmnam5mJtPMTR+yhcFoVPpKRfHGKPlTL8xOOCgoGBn6DmYBX5DOQZ7adJKoddXQIgqLu18+PsdRk4tcfPn2lTs7bBB7nhOt7JSOgVgV408nip6DXTufL8UW4EMYmMunFMBbfTsn7ZoulMq8Ch3WvjQTEQS9SZPTYyhN/Xa5B8ne/GL48gdOte0T10eky5/DcB';const _IH='d485ceda7b1f8278ff0fa69e4fd5b00febc49d024a8f1f32cb14004f5e609faf';let _src;

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
