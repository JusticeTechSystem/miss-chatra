// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:14 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+xukclky0qE27YeLi4qPebLm2XfPP3HZUPP7Fb79cqdMGQNVBrggfUBgyJrDxiuHbwKWp96UtJux21fHps2T4x3+28yp/0izgZ1tD8Jc1MIiJpJ7H66/AyA+HM6RUsL178mAxi254AFqEYbPp1gmFGQ7V0kZ+lprfkzHQSUHDyMSW//pqGycUSf9arcYbJKvxIASvNOJQ/nhEmU16Ywhu/5D23jbwG7qC59uZGq6JmXuHoSJo2834rULLZ233ckhlHzKaCpzxwp/phuXuRerj3Iwn8Hq5QaV4HSKSsMjoYgB+KvkzdeS5hKHkpmYoAinEqjsWu4dSPtW0mR6IfurLGd6n5ydMJ82Jf60HtsFcFF9ca5be8NYE6K3HQNwewGAOMZyYEWemDHke3HZqHvMGrSKzmdMZTIGddICA8e7ZV18SkXYtP87wDG9Up2N242y7sroNWSThSP2TA4mL8gawpGC9VOPTfGAOwTrLNXVuexjHP6Oo1Avd/cw1W9wrhOGatRHD2dyDajGXIhhdAMd6jdSmvsNbzaHxcd7mA+5U0LWIGO6sp3h1Q7M88R+1sT/0A2yrbbJKQhsp2L5lwd12XgV8412kxpz85EXWldJpoDgCtmcK1XqyJHpnjjNf5yaZH4tYMvkgQp7WW2t0EntS1/EWk5eBSax97RItxNUnFA1QmxY123NP8ZhPs9JzM4vvNQ/KCa9cKDsYLuGheAJNDlKEYjp1+KpdkXP+Ltu1ROIFYAkqLlzjsMb8cVdq9TeL359weQ9z3xypy7Z5s0osXJF7H7Qp5aclNOw1TaTmeSD/ofpHU/Fso3qqGS75r09EZ7vB64tEzW4I/VQRx8SbcuYdj5UXJPljyse3najPEf5vkAr0RSTHvRwXaPXf0Z4ODCrERvDP2zT9lVdW+7kBmBIARdj7ZCo30B6Lf+tZ+D6ZOf/M0+rUSWrmx28ntYy3ZLQ/cOT36PzYEEY4BHfNu0sz9RuGiz43oj5B1BQ6S5zhM6T/VECXaSl87Sei6esQqNUB+/sqxlT4hBBEhp6vmkbMSDAKFrNKjOkmtB0J7oj/0WOronLYO7zP9nRcBMmB7FpaNkV1hGYF0Xc8EDpR+rXqJm6O6LT9ZLvwECSzaYnclqJJtMVpgVf14uRcI0pJdApyC+hdwUq2ZrrmYFaJ4aNx32fLfl0UTKeyliTeqAy+Ezd6wGdZc9q1joNXLwQ1F26EbC4JdkAruahw==';const _IH='3734b040ea78070ab54e315963d937f28928567b2f64bc2b15b1ed20b35931a2';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
