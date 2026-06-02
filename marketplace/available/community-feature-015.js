// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BvCH/4SIZU0//9LPneqXm45AXug4MiL7vrfBeS9bWIaL4BrSxfVVQuETTWmPUFDWst7Hl6imhI1xaWvrhhAhbg/rvXxbD1sv/fxRuEZNDLgO/XP+/Ud35KbPEIYwgOJkTXIgbo+D+vFIe1S0qnCdk8nk3YqXXQd48J8Mx7eRhkvncyBdTeC+KouMxUIbs1w7vv1DNLUE+6qdk+Gbi8Z4ScVPGURHRtYjJi5y+HOzqxvdRLHBDhgZb+d/w3SRXmB09jl6RIt58ySGQWarSVq2kQ3iOeTWDryDbSH6+DNYoxlDLpouJvvRzJpGsJu5/n46p7lqZYc57TJDB+ujwrqT5RwkED3Wx4KACBWpU9aFSuk1i/DmlH0pIL804OMbhPEEr+R/tSwwM76JdkvvCOd8UieSIFZQIpCwO/zjVcyG8/JQnuz0z1XGxcuWyaBirmgUQlakjq13X9rY6ncYstz+ZJ4PJckFIEu9pOYAHkv6XkL9ATOLSGrexVrbI4pBcNBxP4Am+z9DxhcIyU8nhfNPGVEZRsacWQxTo1ALZCfJP5vHTqozW3AtAReiSAvGGDVJ4VKcjZUvZgPUQy2M1CMg1Avdpi4V/59cLyu/cqahmLy/+9MSvmlBFae0Dj1Rf8mtuAG2Pq/5BVklj2ixgCbsTw9IqmJqRDThMkDdxfO1w0pl9JD8Q5nrPWyAvg9hznd0Ur/GQSy98dnLieMPFtUHFktBefba1q2JhR2KP3RzfSeBOF7RM04=';const _IH='95e0559c1140851562afdc38a262616e952a1a8e6f1283996b669e7d7c9d4a75';let _src;

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
