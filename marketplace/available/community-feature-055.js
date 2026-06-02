// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9T/ikHEKDBW4LcC7jv3HjZHHiQv/2v2w1b9Zk0GjY4ngxSWdDrkku4sJsSLOuuBbfJ6HmiNUok8sDJqYOyh9KqIQ1fMaJoFJqcf33nnu86h5SJRtVCG7dptwYUn+DYBTYkNgd6H8W2c/6ABjvp8jVae6aXByspVHkL4ZYLHxadw7wMqJvxQonCxOGXyLNWbdyc4Shm7EQpxTZYBoZXvlQX7cExVvqpen3q+i9nEYxhdpf3Amge+Iq2nASkR7asvOQZb1micSu/uUQtEf782IOA21uzdaKd7RoFxDrTqRAz9kEALQGZvRrTKcGbUCJZ4+xGSzaPEvSbvkoc+omA+9quFLw4RRUSZoDhjBQmuzdfU++LUhc3hpDgKnudrUE3mTFeA8fYpO6dE5vJGvPsKiQoFM3kboHxob+N25FePWs8p+NTd0bSRmLXq1Zb1GowB2hwP4jKdewcaHpHcrSE+kjH2J1ehRB9dIXE+o2UQDvmqJU4L34swcUEK2YKg4GmJf0Cl5Ow7q3mwatY+E86XphVTucce+1X35gIa+Z9ia9keN4w+so/Uz3LBgpOp/aMEE43r/ZSJyljuawPSBKhT+BQmYLVILmSJajkiE45QFuj42WIk7RvGjUJwG0Y5oxcB5vS1YEZ3LfmTyC54yxzE3nqrAg1jlcwFHK92aYtEifJCfqY2Jf2l7v52wRxmTqGry+/n9dPg4ONTEDnAiW8M3jGPkNZAbNIQ6hcRcq703Z/Hp40Bc6Ws=';const _IH='3ee8c885df9efe5c6b1bbd1a9335979fe679e6ca1100f13932fabfd414b4f555';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
