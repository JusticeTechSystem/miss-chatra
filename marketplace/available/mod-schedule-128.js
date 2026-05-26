// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CIp5POe5J8lYhEJtAHGpC/nbf16Vh1zCtgyWd1KORuGzX0d8HlYxU05h9ZrqiekbikKZVT29pcHMYxqYoKbQYNthyznw9PfzN6sjBY5ooc0F92EgqJw/16Qh8XoM7+7ZlUu24qW9Pw2KsDWYZ5rEQlRkmMer6WE/NBKjy9t6uXdRkFT/AxQOW4HXgOzufLwS+u5S2kSPzUkTNRUxLonSUgBncC7sqOxkqsPXgnvDffGqIIEpny3OX4pwxcaoNKKO9IHPb+zrCnytoKC/mpvdCCo95kwHui7xSbCsUZhsN9KKVJOBQdRSsu9uSIepesW6D9gohRyT6rTM5Cr0lHfN5938+Wlxyg36kG0SCoa3eO1RNOfcTkHPUiUOQGwi+OxNeMZliZ9xUoa71L8cZ7NX4CPLVoeEuK6UlpFnS3c658rmngkcvq7anjLQouAVIW5JDtViKEegm8/+e+TCWrH6lW3PvEhh5QQ3dXkVV6d7Fotmbt31uunuzKGPFMWRCiJQAVbKh/+DPzqqeon8aFZEXSLVJoimG1/QeCBSoMna9RaigQn/ODv24ZUMru2wySkqbayhVs1TcHjx4je5I7IBp1q7skRkWf4PLAi7xq3n/T6Yzgq8YADTLnHz6eZFSUlAldR6htZ11+e5GIJMKp5jdiqx+YL6ce5Gbqh+p8Gk32SRbPYi/CGCz4YzSTgSBydRp/F2fy1VMxpsAWeIptFDRiVHw7bN48wmadHH6+ra26CnTUoIYzMLB5MIDkrSy2jrgXxK2Ro+RX5HZun/AJPlLlLXOUrtrSkkrgUaZxppnhW6VZmQCXM0596JSILHYSegChTc/EWrefvr2Dtunkcj2LUB3atKEkjIY2Yf6ce/9TVtRIEhjzc3ikXOcFuA7MY45EoSDKUtMWWmJaCfGUY85xk+vy2akZ1CDLJ+atCPAhrJN4hjTJHgk3zThX635MFZNCPJ5MHlkSS3Z3nmWHzzBLZlREVhBt7GP+LIwCVfGJ1JwD2hF5pPfiuefGSUY1MwrEEenSBRZ2Na0pl7ZTTsdMjosXPU4fvK6ZCZ52frPcnxsqe75ipe0ZYHgl0+25jrCairI3quoc+5tGlIKSM90Mk+Nwqoipby2lfgL1uJnlrRugr7GYsIz1PW2SVpjz75M+rBMuLjHsTBFLxaGVgJRGWIWK3K7/7F2fp1KiDssLqEyloJDoHklGQQleqAB8zOhmKGk7pByGVSq4gHhEvLqSFr+LNopuoK/X50lxa6LFh0wlcN9vKknKDMfb2u2Yur/Td8hIUempiqsVTc7oVXli334wEACwq11VgRWAdtxfGqTdEHOODRbzOPeCJH/PMIBfirKXSPZM6Jdr0u5E2kMlk3KsiLpcDrUFltSJIiGnKgz+u8YxCcoDJtADwQEYrXzStuuSR3uWOjMmxd';const _IH='80e42dc6e84aee984f2a8d1bb6ecd8eccaf561187afd000ab90a0906c32a178e';let _src;

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
