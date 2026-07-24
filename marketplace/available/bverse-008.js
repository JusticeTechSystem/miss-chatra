// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ/prheCe/lijvi6E7GLvzlJ/QXLT7rd3woBRJciKhrXRSQimhmDj9YZHbrz5GrSfIoLsRvfrUn460cMwF/NKmVE2ZibDiyGzq5HgyBF5RNyI/npHslxvmey1OhM23uP891G/9Lf2e3aWtjHTc6tu2g1cmA3jjf3P6qqYo9fvLXLN0OwthElRpgVYRwuUUHrQN95RY4EyawCDS2hgBxoT9MQpzpvfLEYYGXrIU5oJ0pqGYgC3v5i0xphi+UAksSTrVoIEURcSowIYj+WDWuwoSb7kRNUQukdkq/mgXsHjzhrMf2nsI06yzIdfyLjLtvCbVICUXZpo6L16WAkY8hfyqKqKIuiwbBSg23BO/yQkMMKOOjlKlNPbm1PxzwJQlPM/pnXz0a72hqwzprZ2jBd+LPctUNuf1lbIRnCDCa5VlZqqnDWFkNyffyYAJjBwtFyLBu+/U0dblLSUZnWrUVbGcLQ5yxO96GGRVSjD4l4Lje3/T2vkUEPdRlJFcoLN1JJX3x7DeBqzYM911weXfcYtJwPMRAlw0aTT3XjcUxoYBUXVx5uNTyOKVsvrPLZcDFuVy6H0+Y2uI5jXiINBvoodKantfZAcp7aF9EK2ts9COwu6MrBmJ1iIqoQkZECyuZqhjc2p0FrY3LfRBb7rt5C+FHWjiUwlyCMQy5LHQNb4kV006zttA/LfuF6tkUjLiBf6nSIylGPLKsvpEq';const _IH='e936186a463cdc3b9b1775a49ae56afe800a9eaa1618eaaab0a8f5308aafcdba';let _src;

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
