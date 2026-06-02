// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8k/jF29YXiEIJoFRxuoROT3mc638z/HYA33FmKfN04N71Twcr28xbfYau3RP9dKLZZFIrZNFRtsjLBggrpzY4MlONbst6MgBnxtvac09bXJwBN6AWFi4r2RMaaBMS/NQrA5dP5zh6fB1uYbn33v2FWhspDBsDSRNa8RSibyxbqhuAodzemLmK31AkF7rqoukhwR3siCIgw/9JEU+/0DLKBIC++DhCNZ6zOsk49WUEOcpTsiLiFu5zoex2GP9ictIrYD+o4oJFyHA+q1ULKdWZwzZ8WrlqBeildfjs5neB+n3gYAjoTccQHwLMEOxE0gJsYFGXiUEMQ1byz4oQzTHS/qZWOE3Bjnl4J5IC1x/lPoJmFsf8j0ChQTxI2D+CQD3wrziGUuhr1aWbzcrFdc6ale3mEaXiQ/2h0D5/C/VRB3hM3cUGZ2XiIb80Ywh3ZNyz98Borj1H/Dz8TCmLTpD9wCV0k0DfjCnJWHq8a52+9PSH3zte9Cb+lYv/PviG7mmC7cHTefye2U3xiJLuEhgMWyCs+oV8MtiX4uWb32GbIwzaR1Qwy2JEXCp0g2ezVOkYyw/DEatv/M8d6zBKiBpARxUMXeHxFsTH+XMkA/MFKoxjZcp+DA6QrpycTJMHV/g2x6a5lYnlZF8kR/s4qoPkoKrjFxmeEAMg5YJjDM8A+rfmIkJeyt4diHq+d0nTh/57tpvwrQcD+QP3DhsV6UrFzKVr3puWgTGdzk1GDmAxEtM+0yeuIonJT94BCz7oFqpWBSfNZN7FNXMFr4e8Ix4BLEQxgAKT8TaJmdS3CW5HfgVh2hUYHATN5iQ6WvkMVMXYxw4MJbvgobhBi4pLPi7v/H8MhjTiQ+yjOgpdq1WcPX6dqGCwx9qt1rcrj8b6Ci7EUd1DTN+XmfBlE4Q1OnRSlhog1zC5wMfqT3DnnHlB9dJSCsRm5UtpUHyE+g+RvRsuJRX44poK+pXl+Gs48kd0nk4sdg/KpsLu7CRSyGsJnB6izVK+DTr2khPCyVZAyp7HTwQ2LYROdHPyeDpLLH4iD/xuFamHlQ2QKe55v+v8q4+W20Vron4FIHMQacNbuilybN3/+RDT60olqr5sZKCPLbCYKT6Q77e8e0MTYe/Wd2EWceXvT41v7Qm260+gtI0fNDwAJX2wI3FaS7cP8ZnbPJck0pkJ8qlYdkypYXlJB444l9BJ9VFe22fBFCxMJ33gTTFMoL4BN4Pofrg6ukv+x+JGDwPSuWlvVLg9GAp3YlmnbyTPcKeyjqfkziMuUJN8RqT7hGLclrgMUJbsnwIEhz4LO89btPrACsvu2eJx4uptVnt1T424MSkeMbM4YN8dnydkUQOirNGx5WMuaC3pETiMJt3lj6PCZ1qbxpCS0Aa9gIGU6KJi4mdYqP/Xh+XkBU=';const _IH='8d53cc22bc96003c8ed301605304611e00b3ff1cd46ec14770c8246a011fb27c';let _src;

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
