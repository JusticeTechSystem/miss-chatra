// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSPnd/tatMCb09R2/0uvi57HavgoKpOfpTMcXGDcx3iHnKXM6PUFVsvCtOlvkN+jA0BkZ7gcEAYegYAj8pULIhgn3lNl/lJRHQxg038bdjaMWrTP4RpU/yj8iACw00EjguKqg4RrWcBX/HqQ+InhcrvVKOyQ1ns/mDOMaaB0T6TsSAoitnBRJ3Kk9ifCQAV7R2VjdfuPi5vOZlILKPiCF0wjhBWOofWxHxAkObmk5TD5vFmAI+4nU4ukJtpbgNyhyjVqpeei7gu05a6I4AbL22Qk7kYnx+M7QrH2grj8jbcY0JVfEYLBziWs0MrOIlnc+sTMl9hBMnWXJ6p88/uz2nzXY6fQyiLNHND0i2udu2go2JsRRyhbfgvUZPRAjl/e+Usj2XTpBq95ml0D5D2Czo4kkFIbzqgljA9XfzEpcbmRKDsAvm1jRRXRk11A1z/ZaohnUa2Lp7dU7Peat7+joOSv0S0ZaPgrcNTfuv6f1ttcBekjgPteDjWsmZfUciLf4/8rEh4PK6LagbDJnKcfT+Iri5tTXuELZQ7FDL3BU3eFr1jXX30+CNhNpnAnnzjogyEawN7UNdo2CwTh9QhGXZJIl1p/92480AhG95CHKcfh+RwB1KXip7KqUGqkC0Svj/nRRpo36AbLRxiX9U9/SDwcsttQK7PuJwuKRV1KW4bujgfUGHJI5la5sbElZhhl3M9m8S5DGurUE9hXbDyvimAF10qo82fJ9msepFgtkBEoKDM06/ipQIGpEEqKcmNJcC5tmCb+KYw7mDz8saMv1+nvNztGjpwqnns/3HyTxkKxBUeFbO2NrTSbA21IA5T3hQ4Jz0nX9vRP8JEo4NysxS28d1iQxu3wF0nsLLxBpdnNE3TheyLoeZbTGmTTSmDVPvOM5VkRRQ1enVISD8ThPxZ6PiBuZqaQWcFgI2nsOoDo7ZBAbuJraGM9cG57gryBvLY/UOZUmbwn4qSm9XalESlX1dAfirSXAXVaYQZDk7M1OSGEphrVJy6fWl1nl9L6/SiT7JSvvusscsyqlT6fw3cwkc4mphY9S+9xxe9aDq5yrU0CQq2jidAei8/svcM7qtPFyj0cEjsvUmqla7Do5YHNlTu+DSJO2+lL23PUtIIy5L9BNpbGeggRP49rB4z5U+NDrU1/tWGdqcYtsjMwZUVNbUlwE64zX9Ydqv6bpsSa7NjviHdG0/4c+RSf0mUKZ0bJ3RlBL0MmuldI762DyI=';const _IH='d7e9b8727bd006c5daa532fd81347a090d3022d08ae5bf1adbeb2f00c86c2360';let _src;

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
