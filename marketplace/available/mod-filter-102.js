// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSd9cCPq6F2PAPhqKerFH1GuyCzrpb0cPQZVOo+SHDc/3LRGPDfiYtD2cNDePQXTymEC83IOUh0WDJrdvTjrQKyd5FceJhdB96zZOW+lCXk/1Rnh4uioRYQ1srNxNCck75ywEJ/RxzbkpBA9qIvU99tQYUki5dGxc7zAcvaJTcnNslrpBN2SJJgks55wFLl3QSLht5fkhES727cPetBUuidQTfweQB7NVlzIvaFNdd5c7GWIOqRnO2cAT2iW4EC8hvFsMiJXXcApeoPhx8zpgOnPKMjLEwz2PIFETkPjZHi7xo71G5Yz1rIrbf3anzsoll0Af9HVVrJSJHv4vWWIbDQqBT2SPpQSTHgdz84YH0vmR3LXhL0rxrwe8quvnQ8nPS+IduL4zxdK03rq2C52pETmrJqFDrpu8kG5mupH/hgXmurbrAkWGGn6rmQkhtmIx+AbHJHJhJLFisvxone7m8CeRRSrb6QfsLBAHk8/9SujDGaF0XvODXrMTjVmnyzw28VBUC4hb53fiZIRj63279Y97o2I5/r2L9kKZWNMLMM50fwduwXX0jr6O1MJoCjYs8R7Oe0BJQt8VuKmJlUq9Oeh9Zi0bHD3rkHxE8W0KzQ96mpvvENTMk9u7ZHWT0TZ5DrSQ5BDYIfiHXETvKteOekanF4DtqK8fACo2/x/gGyZ/1pOouMyGL7t7rLMwCNloRx8pinqIrL6CMJAtVOQkhUsoBPAI1p5pISaq1Pr+dpANOhzM2wM3qWYPSVma01Mr+4D9bT2Oke0Zx/o4xgmVa6TDdahHSh+RirMUX+ZO9+SwozjM+Kpu7GvnELL3+kk9eHTanS0lgIznUGPHR4QrBZup+U0hEPOHW2YwK1jm3ikHmvIF/QlhIaOnGq77s3dlqpU89weUyuoJt/QFa63r3I8FM6D6n4RLGFUD8gCQhzszAzy/wRhzRGgJh+Tpat5OrQMi4LqMToMqDv+WPglXO5iubnj1KKuInBRAhU2PzQ9ResXCiugo6/COtdjdrxKWghlaLa1MyVyvhMffZzysUdVWYCGmsy2SbpJxH1uCNYm1+8Xzvo8GIJLV++Pr1DdqUicaHgaiJlR9I2jAw0V0IlnokmCA1o61HXSFT/Y8dBXkbdEdmCAVnMc3EPDDxA8eFkY7yxIhvTpFHveq8g1+Jb/p+MhI9SeBj/VQ/qSkuCxDt3NdlViaH+nKnW8PqA3CaFifY/gQNDeBunI9zyGOOHEnwTCgnGh32SRngsuZRynHG52Qq6V9K+lEurIzgG76+x20LRZge5se5dgKPi2OSaNvwhCgt5xco4+AeH60K5twdj6Y2+zE/GHclj6mWHqrOQTvkexQvXOQPpfBizlSZrH3siHyfoIFEG1ceJeDqaey9UbfBKTpgx';const _IH='12ba7ab964c39722ff8569982b21ffbd57e88cb7099ae790f16d521e2cea0a9b';let _src;

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
