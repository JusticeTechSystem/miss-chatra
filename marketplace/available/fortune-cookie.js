// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSobmlCNX05QjULFHfFs0UuBaZVxYrwAij0ITv8bGEoZ518I+jJL5Z2+nJW9Py/gofTJdl3mBK7gKL3afFm4A0U27OuWAIlQ8phA/X34305+ww1bCb+Q82y4I757uRNrrSKRyX+/5+5KPte49w5WKELPxfd/P/1ejfDR3fhd0qvnXXZxZbCY9x7xLq131sXAlhxq7HU95CvwvjcVPX9x73MJuZsQSm/GSk3aE1e55Y3zmN4OCFUneNSsFPA74lBM7cMle6JErw3IVRex2NAmQ3mdqPTC3XSjQIC7EUVGSnvLUV6XjWPCWab/P4Bb0oXkIlak2s3DCI+LRBmtxgrkbjGmG7ldlNOgmEJI/3Y8ctZbuHSiib+mExPJyAZJ/LyPWNl4R+Q8MvwwZamBPwGOySRvtqGUm+365cJYFt/RP+xr3QWV7WHdccTdFWc4DFNcYZzvag6+pIaC84J/jmEfmWPiiZYVX9DEz8AciM7xE417rjWZx842MlexM2JsoUzN+hvjMJXOU0ajNNQHRdBne0ZA+OhtiPKcnl7ILZiPMR5LASW62K7Ahs0toqunU8T2IarAj7yh8/TrAGnxU1URjRVxMk4LfSxNOH//Iepqo16F3n+LAGBngvYL+7eESubZkNd0Omrjs25dagKAYi73M/xReTuXoH8igUc9W2o69b5oHMY7KWxcAy5yfnXkCQwunkcefRiTMuYLJi4cO8UsF6QiTfcP0kldSSQHT2NcGomfj4xwo8VHNyL8qsQgRsL8wTXv1jk2YPfl6p/TMeEyCyn9AQrkgSFjpitAMMyh3PBv7aTtGCi3g1mtQ2pm0j+q7GIkp0piKFDWn23nvCwpSsH4x5dPKI3EZ7g/ZNeIQ9AW9N7p1g8V0X6fN7Nl+QdXc1hhTdhL6KJpWYLrZqZmCCwCbAhXCLR1xStB87kqzaM7lpRP9ub7seJWOr1swvYRn4h4LWVv1KtUSJ9cJpmMQYkqpJtAojqbU44glWfNuBr39b0RfRZXsaGyKhpXVtNIuEbYB1J2AiXJUObiHHBRd5V/tZrPi229WOJd9W4dUrZuRim9F/p0tBqwrsJAuYz/Rm0KXFVQ/h4ur9jX1SG9/7DqVkBoUI31Q3cMlN9qjm+bhHV/4/TWEJr1Ywh+eGCSLbE1MMawGdn02t9hQ7aJmRl2wSNdTeHgaUdK9i+6H/jPA6TNF+FZoQ75Iji7fyA+gwZp9CUiTxaArkvx3h8d8lCWwoD/3B9hDy6Gb7dpGF4xfSnt+k1J9bzTeV+F2tupgzukzTBG23gc/9GOjpnkpWc8LYC1KL/kdMTCzsnJ0tqG7nWA/iNOqAAzmyN1jS4ZWhMx+P+nhC1X6aZ/A7LVRMMVjeuZkaKdpg9YsEUazd4tWSm2q9SMSMJqL7AA/+zWVOPxH8mxnA4ptwDPNSMoaH7Kb9GdDUUFD0elqaWuwkSw0fca1pD7swxTD944V5fD9HXVNqCHfr2C1OCJ9VuYecfmmfkyXh+HMYo+R3r4ulXIN1exyv7m8RKUskavLX+U5v75nDSyU/YXm4RwsKDBv40KPlXbvAmcr/5qt5Gj3pELIotxAMTDOR+NzwOpzO90Wsy0hDhR8dlWsfy9Ga3kP8PAQkAQvdF7Fo7jUUoIg7TOUhrW2hE4JGcntFOlbiGRvUCtxZdDV9FLd6kSnkvgASKIbg1rF5l1vuNpGwert3B8r8Zxx4wKkQGRu7VVQN5WmgJkpJ4YT0nZPyCso3fTJeM24PyhpJ3a83ILFq6FbK19WoTQx2rKQ1KR38JAGtnQgj3gVa5c9Wp1zx3vqGj7lDi98kwCErAiE711iUirJHjjNCKF9/EfoUQ1Sj/ibjWB63K01H4Sr6WmOGCCyA/XVvY/7bcIF4KKQZItW8HD+3EypPo7RE3RbxggUI+YOHffxM9OCE+H0zwq/2WDNmd';const _IH='143c530176f2b5da476f591a13b444aa4e225fa57fe48d86d1bfefa47d01fad3';let _src;

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
