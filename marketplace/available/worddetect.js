// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CO9knmDpaUcbFdvwLJOLPLJIAjGMn/YnFpZidU3NQD3vCId3YSL0ssHu1C0xPJudRmSulwR7TVdb2ddv9ty8K+5VoBwLbIjwKsxlWnE9BJq/bKjF2Gm+1D3pXdejOskct7h3u8sSjJq2lFBz/acVN/fr1rbci1por7mruNduUO/VCJQhcK89BJyhedNRyN5vejUaAtqw6AAIs4r87OT7PLlxAOAi2QhUdD/aei8MYyqKYPG4b8ruJQw2LOr8/K/u+9c5wQHHtrVUGpeQ4JMWcWP/oGHZMq2PUWpXYAQNVNPck2Ew3jn2dNsJsJ8OhPURcC8TcbHRBfVYut5d51RL23uT2TRHd8/4IDhDvuVE/4WLh4yxkcHuYnq2c014ZQNYX2zaok3zMFbqqTFk0yZKeoSiDyaNUFS9O4bgu9ka1xaY+RcElW6TW4TX0ESGY6sRs6qha434/TRWYVZ7Qpi2jd3uQxg3lO/BNJYN2UtcG49VY38F4kRnagvkdlUQhFLfrkpp8xka5X9ABj6mbk0INZIFvXg0WKbhmrAgI12+lLaZ+m/FRRxG5PEHSSfSIJ94Q/7MDbW5ZZYF6+tFBzy1aEj6ni2E9s2k/PhZfTKu6UvYiJYE5aZB5IqxLV6NoOknWoYhLAqzWHMhze3/MgCOKWMasoeqWZ1VPiYJDdqHoucEm5nkkgfLbeCC2jJ72MGaeGercFAL7v7YqzVhaQF2vgocq7MUDwP7j4QXHpycAgruXwZUvPgmBV25VFQ8JIbycGiOu+z3wQzXLqgvffeo9ErNCT/ZBvfyKHMD5HGXZh1YJNyVErYoF4wghJKH6V5SURgQuY/7x70ja/neqhMAB69YN5r9mHPuiQWB66AZVsFzh0v1XfVCHIcRnJFdq77WMo9FedZ+Sx6xSHq9h5YivBLaxQIOjzoTUDFVPIcfDOA7vYzXQEpizvKxP/vz9xdoTRozvnQocV49Lzl0JpMQnyui6qcjgEnQlUu9Wfrip22yI4FC+ORdIqJXGLKRuQs7PDhY4VVTAClJlHb3QlrYk4LktwTgHbIsHcTGpz2X9zypCA0VUI83TuhrdAiJg/dhDfopgseXL37lZU5TVJcvj6B2+7QQVrf4pCl+mPhntC8ItICzgKPxFYNfoORhQmj+Duei3YKK3wiDtBKU7vqk2B+nWys1PuGJQQKL/I7ZXHXbj9Kf7/Qd1ohroB8I84Yt';const _IH='6539f4e47283040123f091e3fd724b3477de08c130ba2087610a959cc0d96028';let _src;

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
