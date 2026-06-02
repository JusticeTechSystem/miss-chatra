// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wLO20xpDY/16mlNOgdRNrkzWBrth4YgANN1RV0gLR1ruppHTpKrpF1FuKJS84nwfVA58Q4orJs7zvCJ3qQ9DiTy47I6I500WpQEE6rpGXfXNWbfSRlaO/UC31d2e6Kbr8/BCEo/EMtrX5YJcwfpxii8BRuDmsFB1o6x5zEgXbd8udTm2pMpAYfyf9q9Wu/j+q9Q90zZXOStdmkLI81oprNicdBw/btC0D4MbNkmPGWP32mfBmXPUBw1/umDuNoVKcVDqL4CXZw5TP9vhUrNytzjZF1BVJK+z9vMI5D6F+hpbgZfZfVuLg+2VA+v+xuOM8+JOG1ULPZ7dKRW73rIPFb6gFpCB/gohfVak/iaA3e8MJv83UkxQL8HIu3PUTaPEjQiH6MzZEGODI4oZkedqFlO7AevfpNWml5UzDMTmpTW1jb0yYF4SohoLywcpaWnlStJIH8VgmtZVWunWsRjjXQitpLsRCCYIAs0LUwpsKWN7vt+KFFTaOz0mfHnQybJeo9xssKcF2n7gMURJSBY61xuku6lJVegjPmIOU4ByRDgSTd2h1zQgnJuaFAEHsTEUfiNczpOBvmq04dwqynSf3beuK24z0kTwKjlXh6z95aCOYTK5YysmMo9Q1joROmX/LHoJy+d9LvZxhS3i4xShXwSETe4ENMd5CJkLwvwSZsX6QpUG6/tT366Q7wTSE+bNYkzgtQBbDZUK2UjDyyEaONezJ+kGQPUafD9CcpQSM/QAdus6tJv952Rg4zCyIj9RYOM/kH2VRKEVHnyvYLVf75JTZEgptici+aO7DNPuAlTnJGUMycqCQ8hLAMTtPqTr2jc6tX2o3DVPEx9x5kByXlSSA7lSaz/pcr95oOM+MQkrpyHjW/XGJ91EnwadTfYBwoStbLBLiEq88F8ZBQCNbKWwsZjLCqPafaEldZC/n9cmL4XFVNnBSg==';const _IH='1626869d7fef4207326092ba78a00224425820cd43f116657df68b422c8a5272';let _src;

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
