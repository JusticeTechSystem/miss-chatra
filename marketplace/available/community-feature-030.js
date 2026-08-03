// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQQ23TJDbRAYFXQZ0D9BLigP3oonU2X5nol7lUJncK3cZOtKaA9x6bE4KEkL0Zool+dSuaqJQTncNOnE+mD+/0djb1t8T0x9C+d37MTBOh2fnCJi8vEnSt7ICuQI74PZbs07bMmpeEz379NJ1dccgA1hNfnx+qetrjKo7upoQIDmjYzIUJigjZvYQvRBfAEoyyMDvrpYc2Xd3vAE9dwQ/WTG/ifCfgR4zRm3Y+hf14jxna/hlbtfO50iJ10rAHP87j1CARz5edonL4dhQ4Xw7v4/J6zyq0nHvegBn+qp7o+K0uJ7Ugw//vD2jH07udMMmKroXnGkZvGSVU1v3SSZ0zVaYFXwXOJ6aHA1TdFruXMqn9hUL+L70O2ZMgKWXS8cCakO9LZ3xI5AvxkO7Qds1hr8eU80DechWkzPUkdvtgQ9whon3bEm4QHI652sAnTfmS6BJaB3hEi+FV398NttuNR7VM2V+gMvMREU6VdJYww4ebQ8v+7X3mqMObtnn6iEWcwnaoqSS1im2DX24txfdyZ9LpjrkYxnX0w1thSp0kLEXKJp9V8PAHbfotvuq6PE1JharpJxWuyqn9b1gi8VC7LXtG9w5SPUij/aL4aK6AESUS7MJaFMHwe8Y8NBgzk3n+DneKEecr+QWqrQfytmB81nFnFkdri2Cp8pm29rhNvpxHrZYelfV4BjO+cn9MsnnZllDfmqt77wF2VdE0cyiYF6SIUtcswrbgYZQIR0Xl7xTsr';const _IH='d4b5e4e5ad20cc66916047114c95d6aa50cfb3a9c4e4980e469556b794dae0cb';let _src;

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
