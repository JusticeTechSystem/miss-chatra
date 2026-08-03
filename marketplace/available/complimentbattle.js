// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQW1ckJuCRAEts3c2NQebyO0nciufDpnsCSzgeFJjfs5u3DUIlVNUqRrgbohRZVouU4HDCFwCoaBA4bqsqOegswSVrjAuF3lP4yJ82PuABk1AZ94RConwhXebuzutnAAlW91fxUV2s9evnuFlnbVQpsmxIR+jkSjLItCwZ+ELbQmEpmWJAoaTCHjSx9dAsWG5w6kLApwz6R0yvI3JRSr+mdUI5XZ6wu6A/JQe3fYBYqGVoMcgPxUeINknkOMOQjDz/aZVgKwP64kXbskzqY+rIZEhDiVXl+bhul1Y+kpZoiaahSGBtCx5vx5t1PwVnZbNs629rYIbNpZvx4B1il9SJhzyAEvl4Fzjw3mdnhctHrnweyUFElXV7pebDgWIGh4wKGHdUHcA1sZuJERBbQS+iniUFAc+leNoEtpbCht9PyVnyikRmszFMv2tuuM+CtIjfuTtKQjnwOy2De38qqacYpVjXas+983HmSTSsZLSReqj3iAQdhz8bpnk3mChcIfbOJRGZWONp6TBm4xwOe1skX9h3ZXupQnny3A8Lf4JzLqRvBPeKJifDxyBQA390zNNeTeEhicXsXDadNkY9G/3mUJqsXxUMERqPwNKQSpqpnNmlBJHe/jSeXsyss0A7tq5ASGN9fpyjOdfhC3PBXmEi5WY0cRZ9tlLgwSRxxXJfT7BT28bU0s2zgE5JLQT0BjwOd751DlQr2H2+la1bD8zZ0gq1xv/BjmJAaKVN+ZVIP7jV0SI2seDNrmuy9PmZW+hzD17ZlCJyTQxud3mjs3hKYy8IMdiceOIBR2Sywg7Ozm3VoRbPMzzd+UHmYdHp9oEuZyDm/8WTRRSnrmxY5uFnyAIpbFxsJr+VIisS2dIWjMLs8QqCFGmIHTvLwKtg88gZCCOdiQTpfLP97Zp66ULbAV1oXrF2IoZyROP5KoqvdCGBzi+SCnlxLbDZJ9/oK736lyzKzheXEyXquFVD/Cr9TAxgyuZslW5AGTlmY/VeHw5lSj9V3t7ZVmg6ovetLCWB0KqkZELPS+6juMwpgnj4G9fsctoUuPcG4awsIilbnZQ2Kgm/QSFqco9pSawoUtEgIyT+ZkshJtoZqdtk1auJeHZs3z6YIogw80UQv77mO1DVYPxr2D8aRQm4s6B6zBxPUEXjNnCOWtDFavkLnRmt6sxagljCZAW5HHaUdAVvf5HjHnw75d5L3Uk5sriGPTNvpM+REtAcFBeAi2y04fV5aUwlcd6mHNg==';const _IH='270d1ad7f1f1ac434f3005b8a9c6089648ccb28fbe4edc07ed2863473e94a8de';let _src;

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
