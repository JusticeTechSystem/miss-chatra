// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS/xGf0YrKK/WZ7KDJhARuMHXDkEhn3soCa33bLXyMNY353F47qFogjDxj9lgUxNsvu8af+vfGOAyw1skJt4nwu6cGDd8Gr8uVU87HdNHto5c+kM+uNl4thZRPx0DZF7t/WLo7Q8V3R4Kgjc1kiWf99FYa7b6fnT7ZSiKnHlMf5Krcop7U236/6hVA/xvbfokNqyXNM2t/QHHZFwohepg6OH1NgXBO3ajKodtZ8XdwPq765c0wCiicnfPWO1A+SIPQcLwDGHIrziMypNZDnFbz5k3Rou7fhgpX2Rx5Uv5Wp9FNW29WNig4osK7pCrH9MIW8YJmGRuKG7uytOgP3ipBN4+19tPD1n6FPH+apChBOp/S7wn/17D1QySWrb8zwlCmE/tqcPZ1a97mG5x7Cb3KsEy4HsjrcFmOAgcnUkZ3A6RMyOKd47KhpmEGp3/biWMKsdc4IxluNCbBjfley+StHVmunM7tVq7osJolb/h179q6kANeD1Zjmx+hcSG5Wzyp4D7pj6O2QuNeWroIu1CrAdMAMZsK7qZ30APD6Q8DkbyANTdnyjEgGUqrDO80Vhlanj/xN8JH+oQL0bFESXlqMBCo/zdc6E1KG54iCbRmKEL1bV1l4tGi5Y6+usSOmX7+4TfYDBjkrplAO4/HYHrgm2IhyqLilBnZfNoMQfQbETFehDNmZGzv4J38q1jzOtoZFXRPpgdAxycX9YjuVWxow0RLJdlEhoafIcyPOXmxe4l28ezpAjhzFafT20JE2nbjNsIunL3ckIyShf8WLDkt7zQtVg4twMl5xTTEFTV6ilTv9jX19oSV27VU6mBDj7AQdBvc2vfbgjlqK7vCLJxNwGUjkwMIzydn6VsZnYbvZ5PrdiCqaAH7cLIhSlOXXDBOpoCCj/BcNkGyDRM8pjbjq2jf9t0X2zYtCWn8ZMt1ws2Yle03XjEJAlupkukZ8eVpXduN5fioDuyuexWsRV+reSJmvsnGn1gObAzqekmDzd+lBukBKnc95/LnWIYo=';const _IH='6eba1bea541cd03e2ebc623071e593f463a603a07da2f6a3c544509dba68358b';let _src;

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
