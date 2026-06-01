// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:50 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0cCFqlBibsDc9/uu400UtcZiYuZZoD07K8k2hqKTA3neL8CYINshFOywqS+erxQuXow+iZZi1QJMZMiOsUeawYfdYnAYSccg5O7K0ktXBROr81/OGsNP26uVPFxKq2m43hKs9JLJ03Uwfls9QF/XMe93q8wfldAl6A4IdyJ/FjqgnMhtXXb5IRbxTuQFa7XFfkC6xHXClxwP/Ke4/cmCkTx3O+Sc53+MlhGslVk7HY31Vm3K2mkz2NSzn6qHJVvfpJb3fjisXNodgb7rbMAkomWPFGp4eEmgeQvPqj7M3a3N2T5yQq9V1bWfvTz/TatLJAZMbU/SNqtfGNszK46zl1isJo+h/TYeNS3WrSC9ljT7rneMrMjAUU5XBKUuwk7hqTYWo+FP5yR9k8P3JPR0fgwSbz2o25zpLdN5eTxvylOjTaFNfg76uY2kT3Pq5KB6VkzDSzu+XUK7U6fuCHteUH7pP3TNPLmom5TLIaTvdH7Xpxol5zsADAQRAlEfDEBgdbpOuAZ2CkPQCNC9Ao/nRocmihXWCLgREECGzIveTFhSJTmMkz9+YVNCZU45IOfv2eRl1GKrREeS8HhaZgDYj7cZVrXQQ5x08NYgPLlwbxZv1jGRyHlSTk3wEKMkck5mbyhUJ9Ly9NGJd1lzS8KeXjlwBVUQqaGkYPzKXvM1KKMWXpyPH4kjOcMh9fj0rhMXityeXg7SayXXVHZfrUSDG2oM79N9Hq45Tu5hoVw3Ty7EPk8MUUJAIKYLaO2ztJd/0XBEBd2OIkQlQ9lMmZVL6P8IcfKmWSF1m/0eH+8A6oMSBxyM2XBQIopuaL4TYjx/WQmsA/DooZROMykCJC6jXlKbosrWQo7E60uFXRdRK2IaZIfGzNLuZ6Ek5UFT3ZJQyp5VgUQMfGTxM+9Rsf2WueKgzZoCUdso9umwhZzhIfVah6zO/gvDJp+j4w720vsNpoMLJk0nwfq5bRekaKRzjo3VOZ8kEVksz8hV8jpEOdhZcb4K1e+GOeSpKDubEDNPWEx6rsc3qNlFbQJfR7ubLP5tpF5/8bH9g1yZXvkLhrUo2MokT327VOjzAAuXN2ElL91D9zMFP3JPDMNcFCYN5oFn1rw7bCbEhqrOWODoKPNgvy9NPnYP08pqR1OcJAOLa9peXzb33g+GTCtr+avag3RFGCxFWH6HyyG0+13ad1nzfJINLzO9L3J98AI9Nmytbz8vZMl3JBVA0a42+JQjVjlTyt9F5bzxvD1988Ty+riYPZySDsyu10ERkuHdP8By0zcpfJ7Yn7pfI/rPIy3qaj1lOF7uY+LAzLIZP6U2yeRpaIZaKaGJHJvVAn/EtfVpXy2+LV6GBruM0s=';const _IH='ad0b2911befa387c5db6cea10d4b7a975b3c61b0456fc90d968cb0477f6de28d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
