// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OAiJk9jquzsdivR6Jbu43dVzuMp0+xU9qSLvagWJZKqkeye3Xi3a2iz9MRAPdTf6gqa8p+HaAV2tv1Fvf/zxEMt3bJxEhhVcZL8LDMUNQU76ianPldCpZgMAPcBr8001WFEWXzTAAyoUJaLO+F+W/rpnN/3XWWLCVoZCke3WBk5MR091GPlSk5GgFPMKnIlR8z4RDaGsbyirupXUegmiZTEIzgPFABVEKhV/S9VIAKlhHS+3ncuXowLJ8MvVwvDU7yqjcFhGH6DYK76lijHwAQcr38ZJVDGpZ/y7ce7e4kHgAPIkquC/xcpw2xhE8QrO5V3bPevcrT74/nhpr9IPGIYaqrfY1QLR/FkyUGjMIphwNiXSB9KHQ8IhRjfbYlUTXic2kPYSzKVdoPtKAMu+udQ8r3Z8MG8bgzSRKw18BZ8ronx4wofvStDaCZwyQFrXBl0iG7vujhgxnNHl4I0cZmqTQ2c+IJ1iYc/A/P3M4AuvT0tB8dIGeBMohBOVp5ynC4FWRFoyk63X2X5ii1QViCu/JrTHI7FmRmUHsgy69jwdY+RbHdH20JI4hkAIS44gZdq3MQ0kfsbC+K9svEMYAOKvYhQ9xaCtAJveBDg9VqLDKFi8C4poFKmZhD6hvHbzsl/ZeLt/doIVPq9cq7kPx9h2MiqPPCGEYDUiTb7GFyzs/+CQCUY8WGuLvXauvGmEZHSmThTLWdtP2g5UhYq+OQc6Qi3aHAJTQu26N7fiM2xIgPnwDFWcY0CeQh4CQn8/wJ+pNLTMV3weS8guST4TN/tezq3lzFJmFLCKxX7EJ6tph33DUOOrnXaYmjj1TfUHMvKrKPjl05fRn9I4HYGkR2T+Hl8mzlZSw2AowXC41YdwLMNPBkg0PDVGlnjOSzYfVWYqgJGi1wN5Gdd4ZpntBGJV/H58T03T4dGI8XD8WhkgvyIM65oAFeFnwEoUPR1fK6EBccxJ8oC+4TG94azA69HYmUEQlAH6pbHUP2pJ/9vEyL4MkyN7Zl85G8NIJiPR79LDrylL9eR/Uwx5wEGy2F7P4YlYOEgQtrZFtYbmGje3FiFWXlKBshwBTh0VigLo5aqUcKnIfsM4yEUguZms4dV3/vj40+BxsTfBDer/l1mtjJ8XMS2FtnOus/ohgilhh7oaVDBkfu5oCm4toXbcjbxEaYds4KcmxD1kEcAn2m6BNm4vr1i0o1kcUuXrCq6bUl5J35+M0XKZ5iuhhBqj9dHH5gZI1n02cfY+fgsLrwc+OFwkLtoM35acoTIFsy7U2gzU0RAAkGUbrSPWgBvA/ApFm8FanOOHVKD2MsoUqJjpQJslVBYpWOl9BpPjKyYJrXNa4tfr6uCeoKwXZ9L7ElxmfCgaKiHvVuRrtC6Z';const _IH='ccedc2c2df731cd69ce33958c69865521a4b15ab9e55291cb0422f640c6d6c76';let _src;

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
