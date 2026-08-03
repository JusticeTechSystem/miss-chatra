// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQMn84XSLnyb31tv4pb+tH/V1PTJ29yHLJ0Q2nZnJz+7rFN9CpOl0XmjYYwVM/i5TCRu4UUF4r1UllFYPEwgJeb48B3GLhZZ0J/T0mkcLlUrJ3XNHW074hx16KhweGcJ8hIg8tOu/OQhbJJ53pkEFg+owJF0xITpd59rlmzF/EE+OZAebQYkX3FzK2EBui1abaIGpQWRlapm3MSRiDTs2G9T4DmXslE7ugys6gZw/mYmINKcMx+woxpF2Blm3/UZVnikH8AIt0+edwUXO6OdLL3QZUnkZ+sqVJF83RIwe1p/oqNEJZuh/rttGuuZ1hBa+Q3CS6sxVYiHN5guaa1MfCIqYoLs34+A2sZXJegU94EekYhKLut2hBItts5DuKAcL4Ylab/5EIDCeq4APbJaEPBQOSodbh+3UPoTGXAnLcSLOA/kramhWFaBy4jOVbjF9uJ5W3dyYzPi+dBaGIHvjgZlKa3iovXngA6xzNocqjt+nObA7nbvcObc2XKg5rIBVcKIDi8rs6rawifEQyNfYsQHxkx9EctN2api0eXak4nxnsflOKnB9Jm4W2OZRyTvC6lYaYuTyu+IkRxZ02flE+/t71kbsIF8a79kXvqUhaMmSlxHQxZyIYh4dfnZSIDS9Bd2HcDfbCcDTrIMfUK6JElDLP0G4Fan2S5V2Dj7kvqDVZ1wjmBi+GEB0HIs/TqPOy02Ia+nlbPZNK4vY134S3nA9yqQxOlav/AcrHUbT5nWPpKOSkopRQbkKkTy+ah4YTr2FWsIl9hlxExZkHjOgzG/2awCjUBG+VqIzGvf5YE33k6Vx+G5f2VB38UZAyUOWl5mmY9l9RDZaqmVYPz6ttpEqRnRugWDqLbl9Mi8J2XokfcByh9+wvatR2D9ic7XY9c31Hq2/4Q3V76g6KjgDreTpfldJqIejHx8gVyV0kfUgIto9XS0pFQA9Qzn1HaztakXEnAivNbn2rpKIJK2f1/uV/ZLYmtbtSvcJemTLO+fjOpHVCBLq+4UoMVziJP7Kxr2gpx3r/O8SBMJP+FER0OsPCNJnBNBt9uf4RajRCBh0lP9DU1j+Vbth7DQI0A7nwFj9YsQwvuiyqn1HUB2CHkjl5YD0K674Fld3lQ+zOuHyptG8VrZOPPS9a1nLUax0jwMbneMrj0WFrfR/KvuRcxF1FrP59EBJ6G+ljfR+Gz0qo=';const _IH='0841d875b4592219c2412f6a28646110fedd57882afe31f16fffaa2bb4fb5a44';let _src;

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
