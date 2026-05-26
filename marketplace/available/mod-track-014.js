// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FRqPd0C5/2rlVQPk502JNn5sMHUxxmYn+Aml6+duQuiRpehoMdY1hpqDIvSEOV3qI0uQaUA0h0pUN8MqTvn1BvlyHGSBiCmcXSTeOPstdeIMyZjlrt1ojXiKlXWYTLvdvKv31sPyW0tyDJt4BPR0BUk0OVHbVJysIQB2g2pem2ey2vwiK3a/gKZ2kccHkhjlOqGHlZNRzpMHU2zUsJHW7ui5AV4LfksCU/LWe3QqeM7etEqoLTTZf9BVXtptGm2T/fBOUEOZeUsvdmYzNMEI9vyF7ev5qmNSZ8EppBrm9nfJjorkm3QnYd7K+AXZUdZRhDOXhy41gCfGLHcsNV7ORmZlRtqGwAXNJj9uU0aDiXPtbS6sTZQ2ddz4Whsq5LnM3JMfGQMzoELjKnibTQ+qRaTufp/MqoWraamEDPz1xL3Qz+UHhZGJJ15E/CqEdYCc/iDsrcDRz8xIPLZEoR4qhdrtJ+wv4cF0e21A5V+J2etHoLDELMD7CLYFrVZXDeDzzyF9OFt+NpcJeKYmviAZk0//rxOF/+u947MsQrLS+OwnKt/Znnno+/FDPhXaCqsJeUjZ6EeEXD7ZxRTrmbbdOwXNNz7VB13Gs/mchukixUI8YbLzmYSs6yAavTv8V4gmb6tIQAX8nKiF+/HAeaUv6fnvhXnu1S+eqWVKdmNBbg/I54qUmlAlbvzzJlNLdgmldgxDiBYeNQ1yHLT1mWv+QW8tXt7IzSuc7a3bvB8EPTINgWbPAsxK2z+HQGYFHsMdifXP1CWSsYL7s9whx1M9ppbrudXXFMKN4A6mS6+7rCGQeXaLhRx+ngnEtLmGLpWsPIY1lghpZR3aidXHkbMPtnT65kjmzEb1XbzFSkk8y76AUoHd/64SLbQ7SxCcRCNsGEKX3UGEXFmWZ38/2YqbyqM1DYy3JWPLqMnbMuRtSt5xgcFolViQd2WoCNQdeDFNQw6Jp+Cn5GiHWFvbpiqf4tdrGxSxu+rri5QfLwHka9CBCZrPbeVV3MFaWSHtU0SaR4Tu9dHjd0tdqQZWBo/7tTesYR01/2+ovrkuemamxDTEPuHwYy4xCFmysE1xXUM+/TJxyosecoIsEJptti4xALmXSlqDgyKDQqySXR8HQGvcxRx2bZ58Fqkz+hICabs7L4SgNjKNFY+RFCe0CuqAcM43e+czXR3jmuLW7GP96d+fx/vHCPOqNcyRUhfsPQ/NG/Xrnt9loW6toF6lH8nIdbNzFKDjzMeym37cnKOk1O/BnqxpzM+mcV+FWXLyYWCIvMyeC4/GXV1mT8BJ8NsWqaw/8Ip3i4bWc283B5aXqIfYMyjbOOoRxJC1Boat+u9J+XSJXiLQ7sC6dSDE6HLp/fAoEf1Sk8nJvA==';const _IH='8a4f6793fcc2690495774d39bda2c7c3bde3bc772f22d9b2ed199d62c0a62b9c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
