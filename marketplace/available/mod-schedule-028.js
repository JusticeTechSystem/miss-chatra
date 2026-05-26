// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OkMxr5VvAgpxgpj5ERoR6ZwieRQmFzu49o3ZBVZlZUdhZJWPlOBz/IlyfNGjO5BqkIpEw7VWN5FMX7SWGR01OVJ650IgmLjGGFj2Sy0wtwJ2UhPJZQkH21W3/XTU3DLJeu5LFnOp+s25MTKZ6wy6OcAlsgKnojrbG9B682xVLOJHKzen33nrMWpBeIFGmcsMVzglOUfVbejH/YpoNuj1a//NdNb4CiYnvmw4Moue0UEayJk+Rcsnke8l4yvXg7yN+MKv+Nu8m65oRXPvRqRW1kVZz7ctmvD+Cg+LMMaqvDKmgCqISOrjQC6HZOJod2Qg5xg1uAhTo2YYQ5kgxQHogrWsJd+5daWuGmv0IIN7/4RwnIbS2w6p4pa2UWm28ZJYlEcneq3XwW2CPhTXyO3uEfKyCgR3u4iGqUbHVAXTRM777UQMbzIAyTfyGnYpkveLcW20WItEREqemuZAFJriM83EnpPPq6BWGArZclMRJqqqKeblbK1JOEpj+yXSD7mSIsyFrjse3VNum8nj6cmd6X1bcPJdZN32JgcELkCO0gxQGVDrzj7iiDF0dTRdvOrqRLHqcKi5CeVWbfxIlGJS50hSV7MgULFuMrYle9bSTcf4sALiCqAI+9QvwL1nuQrW0WAIGx6aFtRNTXDYjkasPvfWABsWJZcgDd3LFjrOTr7HMvbPfQLasIS34fpCGLZzqwW9XaTudP0TYYdr2lB9/ez5Tbwd053cHemQYFiWX6AKmWSfgLQKan4E6Gl74JMRduQX5Oyiz+/yXen6Y6kK9mEYm3h3oiNVgCd9U7q4Xh18UMOEyNeKNhe5eYHU4HZ8ccb1LW9XSDRB2QgRPgsDnzpFFo34/I0sSDJuW/U29ICRcHE5LT5mbdA4U1T6zQlTnUXqkrfujwTNCMJnsvi1MEDdhGBKfB4QocTEHO2O2mISW/vbRsbD2FETqCn/JdtS/bqSwmYtGOZWO6bTNBU95nwuox/s5JcP57PN64iZV07naPdkb6M4nJh3ZlUBT37k0aGD9mz6Fn9F0XapMTAJRCNSJUxkbMxx6hvjhac6ZAeQX4hz4gOS57jfMhkB+cb+T0o79Z0iqA7RB6w0n+C6fPiZMkbH+V8w2ov5aTZi3k1MnqtBb8ZWBcM/3oeMwL8L9O+gToltkzipakinQnQe6CqKI3lmw3Qks3sbSq31jrnY9r8CWMxmZdQLRYH8+uYlnQiivzjnKFMJl7a+iTihdkgalEDpbDadU5kCmd17+grxg3xEqb0WgcIXZkKi2+WIw6Jokvat6yr5uWtnyymBZV5AHJfIBuk7+P3CnOmitNNz7GV9TWVN1/mxsdpHpKgP4q2dZqPDt1UpCQ45sI2We3Wso4Q/2eiIbaVts7eTHyo1SeNfj953RqpKvAX1uzCN2EFGn1yurQ==';const _IH='12643a46c42d92cdf158f06bbe485a3d69e9d1daf72d18c4cc1dd6358580b235';let _src;

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
