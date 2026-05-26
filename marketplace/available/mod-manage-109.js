// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WwWMxumg0phF1bxMd5s9iEhxJmZYSwbgIvsYbly3DEbAHiuFTxK6POJvNL0jN14/rdG4ED1X5cyNkC3nuUbSkYi5iCLUrzf79Knd4cWDONOXMFjy7O7H0+qopOwNVT6UqmsSUGs6wjnM0d0md045iBv4QG8QcIqWKr3MgcM4+MwUvF4pwXkRkuOakVUCI7f14JM0p0u7eMJ/YpL1agEWn8qRbuXQ9dtQgp5HnDpfJQnlxMsZ9+R721N/qZ6xBB0CMvVdZWWN1/gNq8uXh6f5cXiaiqC91hpzWTUM2noEM/gAQMyYWp6s0AZpgzI3l2dRoBOEW4BlVH4yEqGLP/YaVd0uAJOXcziIOBsfh1y2LtxrY+1PT3xqe3mG44VkUuuU2tvX42WRdrEfkAel9GEQSVOB4zEoK+IsUwWpmliobuGEAyfhrdCCJQxk1eOZFIxSM9Wmv5+4wI9XIkOLY7CEHCiCCvLRK0mSdLRk+7+j53Bio7a+J9+Tn3u8db/3/+zw7qIDsR5UVmO882GmJ50+B1xLa6PNshaqOz9vRPhE2VGzFDMw9669Bs0Oc8lU15VXvnnOIyL0t+dKbeH8EeJw8jmma8zD0IiYAz0fwfcXL1zF13iuGIegsjZEGHwQYdzrYlxNk1yWpnJezKCQjl6S3c+wJgOLKy+rLSt0T5gxO3vV3OAnVjjKwJuByhYsmL+j855rKFUtcXNVTyVECPpmarU7kCpWju8skr7ZEuZjtxuby80vKX3PG46I6O1Gm46p4F6OSyD1x5HlC2YVdOkICBPGTmuAZnUNfmfDxTQ4zmdFzAHFUTkzUgFEp+KKuKhZLvjao15DfJIFi/HxL3e6M+lNFigoE6nFlUgRz0d4Z0jL5oXkAZp+5Go9rZtsNPqRqv2cOYDR2Aw6tch/TwsoquP4tBRnt+9CxJ8X9uITrGOFDA0McjVizDf1nJd3s9t47bKQLryQnEwXGwINmaFaN4KJOYAv5e75PZrhbH9pQXUOgCjeNwJvzirWjD+5/qyr+JLQ3JY5Ingdo5S1kx5hUORYmyVkwB1ZSl3UUBMWrWK9oye41VUkPHDpU6JrjAdLK4QAbMWHMTVY+VvmNFJDmZ6ZT1fhJhJkqQP3EO7xCBAPAMtIWeiR7LMiLh7hhjsLCdFX1HTg6eIUEmF/jtwONwElOViCJF71gbC5GkMgkOQoyivkC2tDlRIKwNulzuc3uD2+P4aO99EBGVkr80znFgcvK37Fpd0FpSYUjoouqZ/cy9AIq1anFRAsE+AJUuNpmU4+qS0tYAjKqzXp9bUGE04P7a3nDEoRxZ1PTWuSbHMsOaFZ80pcD86InNvq3fl8LXDiUc8EzvFqvywXV2uNOfL/x67DR34DFzqTl+7Mr/ua8W9cUA2WsQ==';const _IH='eb237b717b79722af858195ce145490e66bf2e5ab77b072e88a9fc90388ffe81';let _src;

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
