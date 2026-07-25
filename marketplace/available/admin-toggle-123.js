// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRJghF+hXF+O/+9nyWk85tDmkeypmC4/mSIl2GnibYxvAZfvBk3U0N8UMzFdqVZAtHY/30EoPbmKS/Lf5abp9S+MtQCuBjRlz2SfUYIAKF4KrWunD9rxmxLymuvG94J8YG91Pk4Lun3nzOBFMZrJIdjAjsYcJwS8ovomAdiTy0a1ics5OGftARlAVr4bek2v/KmoiAEQTX5bjy4gPjhNSDerIMoB73B1BgnMwIi5BWHeNunvYoqI+fXqBu3/qezBiWHDK2XoKEs+5UlH0wVYl6bYjHQTY95n4/dqvG8603+7nU2FRMMymjGSyXvUpMqwOgjcNdr96HcH07u8uA/Lf/QaZReExv27MS3P4Obn5Aaf7kemy+ilEMQ763HV0Jl42WmEPZ8g9t4f2wjixrAZK2pFZ3ruxl1dW83U03ImdrFblhTkObMjEAunZoyaNRyVxThBYtzw0uAv/eO0zAYhjk8+vx0zHbwDS4wHRwHw+iGvsvLnCTT00BujTgMxJT0pUD9FFc2pRkIhg+2UfvyLv96WLuAAkUSOwKBry34BnwbW12WpKaktXZy3bzqxVIyACMERu55cB3GygU76vQnGUuf/wZoFLzBbl1rryWYYXDVEnyxNThujP9ieVErFsmbIj3tNRoZOXJFSye08niDJiFRWDmANHMqEApK3x1ZGEza+RpZYl958VFHwWGywPL9eed27QcYhs44EO6+/8wrbSGRXf0Y3ILU7k0V8/mKD/5hzd2NznO0mz8c8iusUgQFXLPlYKJ+OlCUwTht8WVTgaERQqsxdINTaI1gKao8F5ppcijc01iPZCtTCvti0A/SVJIOu3KyjPl+zuGiqpPHcFDlNgfMA6zwlgorZuGqcbR1JELAWSQ1EM+TlCXFpF7MwkjLiB+HbkignlvK1UoeAF3H9XWlsVjqzhaTAKFr8ogCiI+ICoIcDsBxFp0iY0qekF0UbaQzWdGUaQza9pxwWSMjSQimAcIwaU9Gx0tRrCHPQtXNnFaMEsPbXv+OX4yEa/Oo';const _IH='5d725115284580438bd06566e4f47ad9cdac933e7e8af625f5dbddd5b5663533';let _src;

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
