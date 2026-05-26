// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DamaLKlZpmhb9Os06P5m01VEUHW2JILOrKquNppEPn5HKBL+1DO+TRcMfcmVo9Lenw2CsmIp0Z2HClEudaKwiQAe7BU0njZlcUQ/i0hVoaLjjJIDKftayKN2Ivf80WG6zmKkLl8mTV5E22pqrAPICZRWfvKix+vW/gvBVA4RUvHy2aD8BF0rEn1PQdvqvnI9zfXiliXI7DK8fjCHJL8RrPos15c8EmEbhYk4SM8dPR8gQbFOSB9dqRZQPSUP+EUIgWfL6b6EP9wBjXUNyy2rldAiVNJSaeQmeasoSEH5fCYp8y1VS6lgXSqJt1au5cjRe9LTlcxszc1xrf9tpjYqMXbt5i/dCMGh08vw5YEzNJPqAXivcDHBeGXNVkFNEWZXDH1v05M9WdD/bmqYESWlqgFNP9w+JVVJsqwiOnbCl/Ww/dLpFSY61v/fqFypWBm5zhXgpap6LKVLRYlOWkEG+HiMomasjeoXwh/z7uTxJ0FyGoxrLra0dGMVYOurxr8yPjRBuAtDmkg7mboRzJSgC0uw4jvCFkaTRdw9wZ1Kq+wsKW6B/H0lK7AvdgIKBWA7apyzCFgWUpY5vkQuq4VaU7c2ouVAiZZy21Hm7VMo1EfW3I3uiwmra17d296bG25GY7mk2thjPWtByuoCxL7uHkC2aaaUJ92JCGZ68WlW58AAzjmuj8JvWNyjd/MlLcP6tIb0lLWFu8RZ43ubOhtYC6uIuTvjcnAjpUVK+hLbZ2wwKegwGSbyWajnTWvHiF++pLobyn6nQpNvN9+oGs3gPSKcvsso2zXTNyoLrSvblf/2Dxqsx68BHDnVs+wZZ7PWaFvl4jtMMvORVLdPXBFzO95WjYUk2o5Vr2ZSem05PEmUGnmaSQkP8jPplfJRMZMbr9y9GD7/ithTZP3nibCLSgnDPdSPblLS1RLN0Ko02/sqTDroxjrTJ68los0/4K+28nX+l15Y8Tf4an4639zjui+RLHzcQ1r2SfR87RSS/5FqkFQI9zxYi9bVDkKdDOeHT9Ue8P90zKNqINC4DUG7pNn6W1tGoBHmQyZ7mWQzgT+T2U/DKJ20Xa+FJ6pkfsAyqLdUKj21jgB+Cq7cMtVHTn653713+HLZhpDZzehvyU3WKyZBvFLuC+TY5USONqugOJ6AiHsKQdfs4hpUv5G7JEpHtfUKx5rY/vkPc6g0zuT3T6JJjMCc53xkSKDMs8fukLwUB3sgTzDbiTcIcM0AH/5wJr1sJMcUJH5Oxb2DR5kqSiChrhRD2m/Zy13iTSbRbe+Ags3jL9ErSFQydtJv1Ozx6zwDV7xIrPceuvVSm2miBdMK9BPUtOXjXDwS1Phu917B/CIY0wnGAVTYwVEe1Cihd9NMC4o0vRGO6x8f0Rsg/eehiN89iw==';const _IH='e616bd3fbc7b54a54a962768eb5b553e4926374ff7e5d2b90cd83d271227c2a0';let _src;

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
