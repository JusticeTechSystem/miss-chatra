// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AHKHRFwzCGaD9FKKdSoG/3f6sHYetovcfmJVaeY9p4M2koFbdW7pMZcpnAjPK/LRhfUUFDdX35r51pIqL9xDOX06Rjma0877JxMgUyXWPhNP1wUIsIpx5SIZWQwlPy+hzKefrQ5MI78B42gd6yut8/pGsTO5SO5sJt4MFy0na5snl+CPG3rO6ONQ/VU02fUrLAPVj5DeI2midlzEaIqU7Jk33C52JzUV6CyHAnQTbzVzaNsgXLEvsu+GPn4z59i6il4jxw5wvV+bL0EPQ2bj7sIAmPWaOoa/atKJNfgn8dYbT0s1E3LgewWg6mYlqVGxJBFTWqyHAfciFkg3ZwKzVR1pZl9gTvRczsZqQCNhZFBLPw6PTIjX6E6JVPXB8cH6pGmz0sfPneYFKnrnuWK/dDVwuPGNSgzCA9goqSdSvSZC+kLrtKOgqCcUjH7Y7zJKJnfAIFkwTKUxjt5DfqbRHQJrBUczTmcQ2pbxvZ3e/9OwjtVl7QwpuMCJyQ4lcpa+qIQr8CtN2KPx2klnFN5CwFDTAB/+NxqNidRrhqAcVyED1099tC01use2LQric5An658S4SvFPgyXbakuZRdrDOFVQykKxAWbbAExRDILkbebkbPRKWEkeYf1GT64EM44w3ZTHBkyk5hSPHylSn3dwOxKLOCcHuWIptzJm86qVA7/VHgA1PHNE9ZzrgJh3t3Qn+eZmTVoePeQzHGH6dYfQxRHcAtb95vpZZEfsnu6wfuhMSI747vY6T/b54LyoIn+wfq5geL1wE1xLBYhGgRvHybdubsXuI57xEVb5MUqo/oN+QkMzmnUKNqPchpoMkLsjEW9OhP2qdToNcu1w9YLAvKXjaNqL+JZCNcSdVvUzBk72JnLwVvX1VqsRi12oIXLA9yfvsRtwOz83ySg7MGL8H14grjn8cq3tqzEYE9FCCZ0V1AdiHQ7Kgsj/M7P3oIkeVekGK5ly/quf2FbxWQdgblF3zE86CvzpOqIVcwYZUbYhm479Yx/Gyl2vNVh2Dz3v1btwA==';const _IH='97b8a5cded3284d9f024745a126276b783cb06a2c152ab4198b955518c40371a';let _src;

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
