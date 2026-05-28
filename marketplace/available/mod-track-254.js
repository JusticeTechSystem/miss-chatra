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
  const _b64='Bu5/972n6StFatAGay2pjYvCEARrj6uuwNN4LMpCTveLQTSRiIbZP5GQvuqHpBgYBImsrGUuIMxAk/hOiqOAILjdXtXSp4qtuVYZPhNBBeU7EnGPrmtBVm+ygPU2bKqn2/zcb9Tei6Zxa+7tj4kaGekmSGBy9LOJUdTLUCul/S4TByvIXQ3u0AXcxePA3lNw0+RmH/WnasYMybUcusBk5zhS19rmu1trH7G1i28Dd8dgzRlOjiafAFhWofSIv/cCWTsnQJRRZXVDYVzH5D0HeHwPniOSTv5uIE0UAizQoufeEejKSjcjBJBrbOc31u1M4ZJZodrIsKe+0x72+bPAddF0c4BtT2kzyt+BZ4iykY84Cc7ZU9jTgx4UqjkEUmzt30deibdI6yqwVMsZF7ivQBtjRW1ukxIjdHGJMgJDIpJqTK9stHtAyMe9kgaHRdHzuqcxywla+9LOcmUNd9Cr98WDNN3eZ+0D9X6kz9RTMt2s+4Z2VRONTwtmGdKTsQSN01tRu6DweGuUfhA12/F3iJtqvO4FpVEY/Mju5z8XRi/joL1WMTVDz08oukZZmFXnMYpi3JQuIbXSRhjRR3oy++e6GA6XfEIHeNDZHQ7siLTHDnHV/Etl1UGuCY3e6J7DQUvIwVvHkO8V9pVGTPc+otJiVSASierrB/k/3z42owNt0fGwTDnDZYLxFpYRtJUG2b7RgyGvdSYQ0kLEjpzpBlPbr34i+o/QJgVeFeJwZT2VpRHQkiJrKKRncW16n02P4VR2rn1SQH9p0hdCocOC8mvtVlA6Fzix9uAl+bpzjlK7xK79Emp+907sQlBvjYpADggjQ/TboRRZRhn6+UMcVo/A0kJ4MnUN3KWhtGYJ0eMcUmKsG1za2SQjLVAVF2kGQBQkgu1yg84vXHl3omp9kcA7UKYjwjaOr6U4j7QzgSZf1jaHRLgCCwxIBr6GGaTz6MRlPaPwGtAf8vfpaMD5Hrw7TmG7o5NWUHCQfZBn2sJUlwHw0wHgsG0OpO2C6WtIeAMOBCOAtg6WMPXiXqvfhpclNxbcEgHXdtTvpVXAuYJWkRu3At0Jv97BGI05pYJWFKIwvgsvaKOl3gSavy3ntPGAMGwIyFpUikneXwKggU90sobhWDTAnTgMUfYSOpfSK9SqxIVl9FiCjWDunOQcRdeQbNNRvdTAGf63GvWPRQrWsW4xh2cZ3j7q9g4TCdcC/TMa7R1DM3dQ0zYc1MgAI60fI87zcMAiwfF/Uwdskxu1ponQ0903Mg0GsblZpou+agEEquTqY62af6zy7nQZJdq5L6EueemPfJPP94L05FvYtapgCRqm7MuYmmPiTtIKhy0rO45qrrjtlIF0SN3w5ZB4LHtxm8gqK/b6i+xJ';const _IH='a6e0ebf9c69a17fbd905c99a19dae08c4cfb8b28b05c26ed8ee3190be0c5e7c3';let _src;

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
