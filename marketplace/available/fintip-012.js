// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Wl8/JJv7X5O4nOaqVivTe8vscYbVwNk2BvzPnEADeUPGPAzJOblP+Lb/uI8K4PTNWH+jO0AdfF9Se3FwQk2cvLqmn5ouGZRNFP2XXZmJjT08Q0eLoRyyDXrJg82cGD9yHPCnVPoS3KfKwubuxX3VBgPEGw+bz39AZYQBS5vvVqKWrzLxXErOGfN9xiJDnNbxlxbyA9NQTnHc8cB/uv6jnfAY0X7dGZSn8zDB2R5Ev8+vWH7V+Nnghpm+biH/7KLpTvcKvmmnXKsfvV1AfCI+uABuLqhBO6oPEhFV+1zHP5+WMXs6WYXAGOdB5CCTzpA0q0/8S6sU6Y2Myr8JyPkBdn/w9VAyD0dwIWFu4hobE/BpiTKnViVtSNl/xQAb8l1fHmdHQ2Vu4rSJ9qovIvWKWu0aj2VgJOvt1b9C/39odwX7NlNS5oQvEcTBHybHUtYqas9eLP5hLj+TC75Mw0mxmrGGeD8C2DDmPMmDlHKhB/Dw6cJrzb1n/LOZNpuf8vTj6bBX+BV3K8DJlsqaxdQ6v25u7l8c4dqeImOZa282+aOvnqXxfj+T+rnghQeZrtB9A7bXy3C6+W7pBZk7SyS3C4yYQQlxdUft/OsfYa+jbP5IpwAuanqci5hyEW7aP6rrSyL0ovyrK9PTj4cU/FSixCC5LreWS2ZWgKIQFHbvVE4P+so2PO2NUK0tX9UB88cotqC7Xch5nRuYg3jSYKxhULcdIH2gQc2WJZYGcZFwOH6BK5O3ivghPCUlHBB8irsVZWWaTfUD4yyApc8jwiEFh/JzruoaaQeBVbswqvAFItsyi1EssYpD+cYZlTVHU/2k/5xR4qBiK9j8hqZhKpQ2crcuRq98jMfm4DKZPjjolJdEedMPLmDiHkWtJCXY8dcEgga1F9plC3XVgbzY8OXwl9zVM4wdw9gchfQf+CHH1DLg7Ck73UewKKAm6/kLBsaCcAvFVA5PoMxUQezDAy3pgYm2PA0zfGmkvU26IhOQcvmLOBJifhEGbM4aycU0Y7Mcb/n9C6OOgjXXM4ZTTfakUhx7YYwsiENXu6XNl5+VMbASig==';const _IH='61c6cdbf808f910ce5b5aecf8283b29221245bfb1e247092c6e850217d451f8e';let _src;

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
