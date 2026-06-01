// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:31 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3XtavN/O3k8h93s+IbWmGM6tfMTGvbRziCuLTLsHxOzpzRCH2f6gI7xayizyUl8RKnf4NV7JbhxDmMep13wwMoYdY5SQ5LnkXvej2/q4pu6pXWjULaUMMh3jvudUNKs9d+Txq6+LTJTFgO8QpqDdvXUUrhVIuz1fwtxgNilOSE+ebumFy3GzFV1+DwEkbu4OA3n5ISAdF7NikpqESxO+/lua5tAS77mn4UcYAtTo4w5VMdzDfaPUb/8joayyNd8eQfCR2+fKOaaGx+r5+gwMW02TrRhQLFHqU19ofo2Hg2H4ULGtwsnQp0ADLNxxoSbCLECzolYuHgqs+2Ye0HMUp5nUpbtK4h+nbfrWArKRbIcun8k/JdX8AK6Z0IAzPqX8PPbKR/wpTmzYOA+xmJAbk/iUB6f/3H00gVrMFLB6CFltoftgpL6ZC9fAsgblD3069hEvNH0713mE+o/7xJ83omZuyeyyEnJohum7ddz5sbxqCN7EVO/o8OO5U6419a8BKdFfNyfDSP32JB7YTSeYfdb9Qg6Xmlc1Juh4km7UpjUkce8gYuVesACZeoQ7kX4LDqZIFpr7agD4F2Ke2P/LLLb+B3FPi3nt/RvrlZTtcO/xLNd0yeCoQJ+C8ncf2l96/GvYMuXi4YIdr2A2VYMFEWmlMKdOvKej7tKVGCpTsRYRCrzwVvu4c0KQFzjfRp8IFB4Sz6thcYS5thm4GPUQ6evr2273CQ+4tl7OpJcVjdhrpOMGUicXrqWxNqhScaDTXGijv4TM4AN/SE8+7oBS0FYZRE3I7ukA5rZO0Di66e+nSGP7BzmIyJnKQonBLQrNfH2Tw7bDxJ3Ju8nLXF3AgBlsEYJQ0g02UNk1c+WDh9lPK57G18+GgJILPuLXx3h8Jt48Mes1s1GjbUZkwVbFGA4vvlF6SdKQFSljgeniz+9rvqs8P51jijgt1Ca5IDv8JW3o788hATUd5twH5eMYAGS7EvrxDCf26CI/NxGEKPmiInw/ONZCekisVCXVbpVUN0WFfk+AmLkkCntaYkY4S9wmK7AT4LJ/z+FJYizSDkM5EzUDmjLqGcpFBhx9VrBKsPCZ6wPt8xiQiod1Fg8OAe1iJLqBbRMQxO5zNTuF/mtLZKAxv22WpH6UoSSEWg/Jq74Inpvn8wqe02lFGwkGCbKApS3ntSjkAGSlswD/8ysIDihF/8j68izoO3F1FPjSemOpb2gJvJd';const _IH='5a39caf8620261007f6d2fe3a8b59efeaf3944eaa4739693e5386e3e754d1224';let _src;

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
