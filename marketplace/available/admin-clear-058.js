// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSRusyu1CoVvtg2RS8PeT3JrozSwU38b5W6Wq8fTMfPP37m7KWlqpS5b5g3bDAlstU79k45pzzamn/5Jo88dqjGcAHWNtudVpRCNT70oczM50w6KLj7BjiONIl4FL93GB7AKAeYGYRrjOw9x4cjGeg5PH439IUqB1pvdjfNGzf0QFOlyb76OKGdkS2XFE8M8GAYhdIwAIKdPWNpeG4cJdSe43J9PXkSS3KeYwi7xSMCcApxbcfllRpvCUZzh3RV27wtIU4o6e/NylCki+1wYpHz1hpsT1mCBQ1qi99pvTQHyizgpTTXwWq8Bv6myLPMID/F+awiLSDdL6i1i4yC8KBW56Lmge4G3wZlEHLgI1cZZuF4E2IAAIPrK6RU8rmqFA+ENlnW3TbItb5zTZBU9CYMxtiiB/Tem0IcX5kOlNKRo7qW8uf+EF9OhHB8cfJ9hQhMrUeZ/hhq9Sj2bvIrjWUVLxFxcNQjo4nOfiEMpeo+O2p8AQmFycoT8bomWFJqhVNQW1Wv19oteVB3MlnWX5WaaxMcqHJHJcC3iAYUNIhyFOO4828JwfR50wrPp6GiOKS+haSvOLagplY2QelMNa0/ZXSUsZmJrrvuIWvrmdJNEDYme6u1T0v5yFDeYz+Sb1giyOt7+NS2KH2SFJN/X1d1Hoe6RAca0HbQFwaWh1lMQEqQe9z3zCGi1fZrj1BW7F45DYwaOL5mElNcFB8pjsowryLKiLUdRIjdtSd3/e/XuO8HBPoFaC53kisQpxK/szpVwngqXXKPdOwrxmxdYvKCc6b9ZUQIFM/ol7RpKlQS9FUcopAdsBtLfrjG7zEf+WrKytzcQDBL2eDQathkZz4M05l0GVVrHIJnC3bnba1mOExmBcp2NpF+uyImpKzumMttAzESpvYUepvav1YTfNe3+iWvauS9HrxR6TFz/HL8WFMx8WvVPuVT+mszkdZ4Ok+rIIU1y8uN0utMK3e7txHW4A+Agx1uZyF8rxHGIXva0zD8eLkxRQ==';const _IH='73e8d99f54dc8852766bd43ff349c3077ed5bff5b4749f9a939b578dceed5f74';let _src;

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
