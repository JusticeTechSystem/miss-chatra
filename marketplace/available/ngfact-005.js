// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lQs83+9DMdokuYUhikxfsqWXG6CfzktuKo5obGW3wEECfYsA8fA1BAqHttyZ4XxOBzfHu63FWUPw6ytvQo1e94SnmowgcxwvYwenyS6kCbs9+kKSQYACMj2689cIM2Zn1K++yjQ1w2xqqhsIwrA5+WEA+5La21NmsUIKpDN246v/hnE1NR8cqpXa/w/3seqTLdx76P0uPIwVeOo09NvISlhw8H/vrlv7VergWx43L2V2nwIRcyfEzn23mJCipex3VAkYWFui2kbu1HX0nT5d/BTlkpTTDvg4fOcF3y7dkOzXfS8xsxVcbY4YQD/yaXZDAKjWnOmPaBtx88BsOidnafRzp4w71illEXxayEsiRIlDm8HOlsPJybg9g8TFCQqblUJVxSPOCr1CMML7rZLBSs/synAxTu69GHp/CMLlGlJ+zyvic9lQVtg3cqzJEcekzomCUIG7FzQfRvBN4Lq/f8A8sBasSDqUg5eQbzlihfBRt4ZkH0PP9WFJXu/d13inMyAY6mZcKqTsP8bcFIfh9MBjfj3elm9HaR/+L7YVTbhsRcsqmxdeSiLrWhwrc8a61FESYI7bD5WrIqAzOSMKeyhsvGePUp+6vNaja+mqOS9m1TSDi2G0Dqrp3Waz+9IEyUUdOJ51CTcbgvLIRR/0OY06W03RYO7ZNxR2nQHFOSTLjWYkcbHiufAKAoelkSY=';const _IH='9d946b36af8053adbb56dfdab1de914db977355cf2978d835396aeeae0850b8d';let _src;

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
