// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:52 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTj2f+GlEmD1S1y/lFGQdvSKrlM7NAXezm+vKDGvGfy/HZsl1wz/ISx45ObsskK0tb8/DrMs7V0x49S+J13wLLNkf76bYkt5dStGhKarHPcKCmY6u+90pRQW/nAZkpLh8Km8zSXeFQGFS8arHXE5WIcs53z/dd0p4ihw280lJN8bEf9ztLp5HY5Wj24zyJais/77/QA86m5g3f+rAtstlk8WrsrjwNW1Xf3d2QM7SD7MTF4Bcpj15/uJ6DWKWUCex44wt/sDIaB07WPgkSENGrDkfgcUuBZtQIlsCVBCS3S1DuvaSeyckzpiufTc6MbgPuDAWCXG48TLDcxWn+6I/6/SkkrVQmzmETXOeUDS3ww2pSlZhzqPvEM+kwdhfpE4vUUDTSjUXINs5zQ/7wWgn6ptLnjLZpCxlwo3KMPPvVnO8hAZgLa8Ijao/IeGFGKN9gPAUPrVFoocex6/sHPm0hxpEyZIraAKi5VpSbtUZLfxCMnjWjgYuutN6vN+SOeTj9t3+GLt1Po6tNWx0buJ4Z9b6QJtotvic18pwxaArtUH0oMW2BE0SYAOGoCL2JHGPfrnp+X61HciL7wN6HgiOJ8IbMdw3lLmAfvk7X1XiJ31TVjpwOYMQwjxM7t/gHLIF2UOGYIiIIRgat+ZwaEvLGjAUxFgaj5M0hsZEkUnzEa8cx+pOAijigR72LvyBNLtIak48QiiVW+t5mHW2Bz8xOViVuuHCv82qa/c+OSM/U+S3z5VNonZu9ykpZLDSRmoMxA8DP3jIkt3BRBpUUQYG90R4vqgJj0zGXX6QnStppO2IJ71huHumgHFYTIGljkC2RKzUWdmhkRT8z9cL79FFWWnF+55O7h56o8SuZ7oI0VYI4bxAwLBxNLYh8IKEsaqsjvcPrCKcnD7gyWd3dxVdrByMJKkF/xhi7lLIP9nfMdybKNpBqCcyxtim4YcDQZYBZQjWDHfIEzG+CP7REXAqkWtxYBycp1T+kDxUkGCkl5Hb6tMloeFHeCCTd9L9Z+ySSwkYrAHZIZ2W5fTXEtUSIVlO9X035FVFShcZO40qWbjF0dWI8l3cWOrw5zl7Zdda0bpgQ6TsWXM+MmHXEwb0VBkg/+LbdydS9rScRLerP1sQZ16DwN3ktJvJSN5gboaSUsqPv8+GLyCE0RKANBuPzfpioOfGdwGPW0PwyXJ7uWEqEM6lhyjRv1IUrTWxOWZXJ/c5Fvei9W2LTFb+bWa8Xvleo52KpQSO/x8GrLj+b15/4bEZAB/HSgzFVbsrFiKMzQmKI8j8Dh3O+/DRSdDHNnAo4tifBxMnlRGOlBTi5K611usPUHOSU6+ZLn03YsUECJoLu8kWDkYMiiMIU4wCxgqx4eN3lootGsuv5X/9sb';const _IH='8e4a23e44820b6b99b51ec0c1111ce85913e9e64220c4b01c17a32cb9c0f5f28';let _src;

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
