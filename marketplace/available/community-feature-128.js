// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MUUr1PzLOqJwIKWq4oUXOic2MHrMj+M2WaIIyW2NyV2+bnQ+HV1QU/ZAPLEggk7KfZ9SOWiIefR5kXzpMcxX/AlDjRJQeXiOT5TWJX3QHkuox2DqrARpQEuNGPXNawgnx4aB1W4PB3h6k3kg1CyZiJO5nxjoa94yZcqlIwu/su4iGmqlmok55ls50XMykZ0uY9mWNCZPRb+d2rdFziMvf8MbKcHGB0wrEgKwS6R4YMJtDCZYKgrVRtn7v0OZzpBFfEt6bs3zTj3IJ4VO/FJ75szyvwHVWV1dom+Psr/0cdlt+mVTY3kHcROiGeJIvWmPv5XiPSjyVP70bqCrVu0o6xPv0zt6LaeUZoGplHhalzKxEw/a3HrIh7Dbag/ySeFXd0CENH7Ff13RJzigYwlQoSNJFyFap5b+d4jZEtTC4Xt+Qd0iECXWgqi3nJjqEEvwE+9L1UvQV6Ho8ekS6C2vuNa/SoO6BZWb2aOIteK249wZkrbL4Plkys9uCn5RARrhktzckdmtizs0GIvcLp2VVh8CuV7qdfgDsUT1bzRuVRlnrfvYwFbAFDghvoDV/vsrK2Cg3DAJva8sfcQlhavJcNqFzR5ZXOkTyeU01tuc3nxzDyqwlldk1qn8x2bWeR4abVRNU3XqLFlLKAycugQFizu70kulwMfgTC6N9i/iTlpfVX5alwm52IfaDMrJzmX1UAxfPxXWXpig3CvE/D7Y6pTwu92r1WbSWRaJfR4=';const _IH='c262c907f757f4c8e71bfc2fbd6680a6be712d9bac1d2f16d4ec3dc2226a425c';let _src;

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
