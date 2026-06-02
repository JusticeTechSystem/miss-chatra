// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pZCsrK7W0BxWrYhvLN2mKloKzu5qF1HuRDiCCcITkrgZAWBqEgIRPk6ofLq2fohrSpNqOq2ncIfEcws66VNt1fJiXTCVPMix+v2UmWRvXBFFWMjeUIaZHT23n3V0J+dr5vuIN12YNIWe4e4XT3QcFts8BaKnmQ4VW6lV0qbvJAvCAFQlMkKdu9ITpWbHNzH8J+TJ/KJfz3KP+tAWzu8sos21NWxmn7+59nedJ1CLxm7q3qpwqdURlFxVnHxhMCkplqKoMCfGGvVvgLHbMfIxnjtkuyyBvRnjdQ9CkEAlO9gMJ7a7kxn/XrdMRjzgXWhomGvuSRg1shljL32cI6037pHiw5t4eXsA07YXZyZ0YUmGMFaO2QZ0CC89KMqyPvvAoGy1w8y/YlpDB8X7u955nOMbAFvtBB6WvqT8C9cNVLiFAZyQE/ywTvRc3mAAAfBEjbVAi+7wgyjr+ll2XmWwuU2HXxez6zrBsoiyyOWlLKuvoby6xDinUvf3r6n3HInASubS9JmldjDsn4PH1IM4HmYD0VtbO6+Y4qRkZ7e6aIriPYlQfu/Vw0TNHb932QFN+mxn693X028ZbvNSvQeb8AJBqJvXfuxxfrgSD1Rr9S0O9AMp4klLfd3OMxT2Y7JOXBMQ7Q2E8e5U5EWFGsfK37/5LYphfjp0e/sNvEoeIvNhUy91hOtXDX0X2AkeoUwMnckeVqT5A3BA3qvEasYSxj5YxJG44o3W+Ck656gMunF9r0cEZ94DhwkTDQlAXQAV0sWTMmfjXvTVwWKWWdMxaCgF9WCpIlJtgcfyo4+CnqPQFIFtTlyLjxKkwy3rQj+s6hkG64cWEYaXWdbvbdWmTKvwhLI3O2HVrz5LvSxSA9RPb2uUPPXtEX2N0rObNycvOZemShgdbgr4jHaqyPH6wDmNbEPKZiMaU9f28p7sGHYUmfdfpvz/RyP4HviI6YSVZZG282p8kmvyMTCxmM2oMEatIKEzxkYdf2VFVgaVOfEFWO7EtOk9LXvbCkR9c3BRECrxCY3nZRSAbSgFc8GGVUYv6aVtI6jEWlSQjJn3VHUKv6E9v5cG6Hc9t9yvPGxaQQxdDsPeiie25jmoxUFFFC8tPF9M9MR4Hq7LK9Ya+ky7n6bex4mgW1+O9wWZrNt85Jr+hbkl/5vbW65eOzytS7me69NoGI7o3Bsrz86WzeN9lGysF1+hZTvf5wZ/6mp6EN5AVo1tLUAdVq5TjPbxkMST7IRggvjbhlQtIdpC2j3u5700iPj5H1RN/VJBhS8utks/CVCvCpO8WS/h/NReVUw6W/+ENFHJqrwlV+qGXEBodNutIGiX5RWW4Grq9FUXKHNr1pxZ6PZeTSlAzHTYUYooheVejpb18maUSlvpi91yNqtfMqOaQQ==';const _IH='1dd978ddec5cadd2bb156142f10e196ba4e887905ec8579615ca9faafdd046f8';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
