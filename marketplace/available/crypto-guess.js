// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZbThi3YgCXx2wGt4FctCMWRyR3/bU/Jrg8QHkA0zOalmhl4rpjdR/17Kf6lhcf+bRUOa8s9aR7NNwzacjFlUBq6jRQFt9PA4t5kbTMPc7glkgpyznXxY85mLO5NN4KWUBSQIX+4bncq0fENSuXfHtih5ptF12PxWZrWKmG68/1ev8pvwFVUlzwlIT10LLo6AZYyU6fft9IQCxnfmBbgnPgjp4e7vVF+vjfsufmiYWVg3nx8OQaXipRviAuXvCgZLISl+kZF86ODO3iDsgNpFfpqVRbTkDwkXuB1nO8Sd4jfZMcP870K5IlTBmd3+MrNmZm4QfPSrKu9nkosj9gjXUpacJsyp1OD4ztvVOghZaIOafs+TJqEb9+fN0CPLUPq6aINUGcLJTR9AFfmTLyx5xGbAqExEhFyahBhOYvs+/6HxsWGySvnwu1nCZdDJw6Ec8rYTKbVzRTgDP+cVPft1wgH3kwOgY45MB/CSBhV9/q4VdB/fOZOenIzf9XBcbtwmpyzp7kjV/T1EOKNugaZ1ZZ4cMozUb9H/B9Dw4bW/ysa8XWG5FDr8YTszXdCM+LkKR627zIqZQKDOBZKyRlkObGPJvQfzGj+fvPfx4n/19ML+8GvTySLGxQf5JrqCE0mfvFcPzIR3JZ0yxDCwqgc7x23uhysKgyQd2LnbWcYl6Omg30A0u+LsAIbm0WZQegXm7HM8IJ0ScSNyffqpS4PrSZdu3SSSYyzj+rGdjgX3IDDIUNwqX78nyzM/qYDD+GJ1d3AGNBEJIG7uLSPPbRaB09OeyYeqYLUPNRTHRm3S/rnap40MLIB3aj7BpXNKQltHTUDcPkYUL6JMUlwXRgItYy7PaOcxS+3Kmzg96HoL8fQv+bMIEPEhyJzW6G1jn6ZdS2zCNVKLNSfrBLW1aa/7zKOtK6Cdc+p7YsWezspEGKAri3/ifcIdoNiAn7Z2HS3Nk47hZ8JA7SSHLyq01ug8DGm5hdYFESdaC7LiMKSEbOk4nnsRClo9StcLv4WfwUfCJ58OWRANfl4uVhcnvhCW2pygTPKMBR3zF09lRMIj14MizgQ6F2rxpbusRfS4Xuf6Bv7/S7AFq73pzRkBX9VPsATx5ww8tw0783B1Fvln0zofmZPoKsgjC8iCCT8Vkm+AK8uy5Vb5zy0rlDNkJwjnhIvnGJp9X/NbIzyokDBDGL5xCUZPlNI1AHKLkBS06/O+TjsQFMn1BchAoDONIhqtFJHkPeEpFmRVLJdmXxQyReFIaEzd/6IB8th1LjWSqngCxjnkZJOzerbGAdjkLjvKdz372U1MJuccVU0E0+IP2OzeNOsJSV4axXW+Xe1c1UYptAcVd7eF+m4cZwNQeWRdSmM49cf3Pf8yi7I3kFxM2fLnYS7Sm7lVwSRTBM/dradJrbLQ0SKK/6LL8KbEfXiHSJcPIZXttAK+/kIYdthFQU3wgGxjWdrwe0vu/JIwh/PdDvQ2kozZ3CBNkDpyBtLQIvcj1AoYMzb4MLvc+K3zdatNCnvGPOH5L+lqcqkdYMoWhKacQXdgJ+Y4H2CafJ/RxcWZEv2HYGS9f+lipiuKl8+hJ9Lo1a9mjSZUMVxIHHYZ5fd/fHMNPXzFBV2U8anMiTGqb+uvecNoZWJNf6BlK7kA/MjI2RBo/7K1JHcFyVJbfIdDRWNQyQta6TS/+IAUkLtluEehILyz9sXqe7EJl1d5QJ0tfhCoF2WkuSWbihJGdY2GFD91df/uzizNDDrbJGHfuBa7+yDJs4pMX5P2v1kRA/fWLIKagwgOdUaoBM0WWPUI2mc=';const _IH='ffcc9d6924e13b8e52c1fcd96d93a6b67f02278a5dded63d7e6d3aaccd900f6f';let _src;

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
