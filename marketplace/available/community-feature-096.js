// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRdScJSKc/9IsAYAaFP9KD2LdLxQpN08MphBWbzaDp8XSpbbZRxU0Qul4ljs8E2wzkdGTQP/hDkIy5EMRQJUMf9dn40kAN+kaZpVMkqjpJI8xZ7fJji1o2xZRFCGiOmtIKZIjIukumm9fLxMiFNqZMqJk4vfu5NtAkkQ8RpVIxYAbCn94GihZHU+9wGbKETXxxovYVDncvDcttRYtk8cBYY3PF1RnXGdj+hk2fHf0dBtMwRPiqVViF0LgPdT3DKX8eKopqlLm2mpqzsNSuo4rwaCOcsFk6tN7Z5ZDhCDhGbCqSRCOz5hrs+5uQdfEvwr8XJFRoVYJXTRTQO1B1MyblY85AGlMWF/TiaWGRa+JEUqY6jM2NnHXTEabSGY3a4YW6WR4Y4h11Z/DKU2tj5qL9qAyKIhDGx6ZKq21sxOeAEr29TtIkPrylG9+d0Lx780+LY0Qy11whNWIyJjTrRusx6guSdnrQSBiDP0HvV6dE4xgFegJecHjnGIwSt6NVZtMKLnz8pRBJyO2/uS+4jSYVHAUz346ichalmOczk6KRE92rM6eG8eXLa7jKXyLHmM5WV9sM27W+atcOlkI8nqinCvdeKeccOGIwrC9GsyNxQrTjNTzz8ftjnlF0wS3m9wr3j7ax0Vt5rdrWoKOr+FdvVtPANsD9mDxbB8ukey3c/PHj38JN1x/LEm2v28zQjbSAyhPJTY8yP4sApFjXLLDs8';const _IH='234b2f3171d9cac155bd568d8d3d60846bcd5f004833a4fe3981d3e3b48d9eb0';let _src;

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
