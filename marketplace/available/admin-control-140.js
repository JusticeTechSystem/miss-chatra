// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTX4Y06yXydN746dYwal80H62g4TbWubbGieblLVDKdX5wadq2y5t2k+u7+KO9Vlj3ashXiJsoWaA1CIq9R3ZVPHUCYIowcKF/zA6f78DUIlL+IN2XUwh4IP2L3wGndv1ZWE0r4JiygkdOVZn5mqVYta7cTYyrDPIQZBc03hvNjXZsNo+PGp080fi0P6N5TH+jk8sNnkfa7zjV4OsuCln3o5aUHkA5Up9UEXQT3NREwYOXFS/ZivUizz34mddQPTFSLiAYXsCFNT0X0HHv6kZFZIN5qkJ+5NeSeT6SK16xIrguRHA+XalsIrehTH5HlpqSsLtlPwGTb7pQXmKMROQ3rx/BI2ZABjsElTLlvampeXTs7yjvXYMXdmXP6QJUlBQrN/LYGc87jXqAmuI8smX5ZZ4LO2hmTsKSU6bskSclfhkv8JJMfJfR1vZ+EvzKy+yMGQL4YbZTyC1Z9jSlDVWKSE7v1v5ookXtFBh32EPrKuvwTrxLphW1YOmgPSJhCKe+qSUPshYGz1u4jdTITP3yagSrGSFhVPst+4xs6QBuN5E7bOkeK2k0dwIh4zD/DUL+qPDmWFsnOIYulbgvGClTe4jdCNhb8QnaCzks1ONi27kvDcKWmiTVwX/iwxNrA1hZXgGZcobtg102zi0nOP+QntbkY0QSob0HM6+icT8HpdoWvS+iKDi6g9LhZsPO1dm1Z8AJ13p7ufFpGwBUSXVl6X8eRpE/D68tvc6Ncxnvr14FpZhEKAexHL2ZTAC4xgGR5IQp7L6rEZdL2CvMcRJnnkjjehHhIbHBSm98ahhSLL7GOX1OdCzKgzVyzUd+msCvfLXJAeNmHT8VrjaHAPvmQ4gKVyQ+Htvd2AHwLbTwE+zr6goIOkgdUN4yRFNQW/Wd7fsGNgEGPeargCMiUMwD4mAEDajd3rsYaYh4cjvsJ8vVmSGdw6asBGyd0vFbHp533C2yAipHVEK4CXiDFHuzuTh+AxJwC3QV8InLL8CQRbBCouisNAib1csY3YYb4ChodLNyt7zmz1Q==';const _IH='87ac81e8495e9b0098fead7b7c6273bc17056e3a9f21fb0e8302373a9f9648f5';let _src;

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
