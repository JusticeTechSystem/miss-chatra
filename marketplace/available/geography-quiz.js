// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rYIrdzYuxDVR4hZjdEm2ozq49jiv0vaP5AiI9xQwE2hcLgwzI2SKSr06LCUaC95J6LTpDcXOnpF/v+u5F3+9jq/Bvq2dJjpND9rM0wehLfwOWxuiAv1MDNQ7jAugeiRce5No9HXwkmtPoL+wE+n0w3xTJyGTSeQHptqitbtaY20fci7wZxElhtqOSVphCYx0m6eGH71P5CeIb/5alEbFLa+gxb+Ahv/30lmJEClABCRyBsErlw82HUirfJ08St5xR4IAkS95a5SB4SPnLaNkdMfnpIrUJVWQXroVDzPc51lrsl7E8WFbFx4et+kl53B0F3VQntW+EZMs1YdSIWNwHOUIK59lAE0HZWiqzk8AqmK1Wy+5h6CsVA1g1oVDtnfUYnT4+JuoOtBe0OTUgdAh7YTf5HarsBNgJBhbpArAxfg8khLyqRBcwVLLsHgxsFC6RbkVMV01KKuBFHzqkBd/FbBr8CPs9zB1njHFR3+TWsSEJNzR9IzBiaOl+Y8dcaPBn7DISFNVLyQATFvmsxYkfrsuTJd27MlTFokOIl8+Zyv/OasFC5yRxz7hg/AmC06ZEJKXy/cDSdLdDgx00l+A/tvlQoq1dAd41fcbw8ieVjqEi65UBJnmBLdhi7fzD59OJX/mNsf2xIcWSO7JOEGE6/2cc43vPJ75hYWH5KxtOWTFCA1mrPCG1xOIiN/3OzUCDfXHnHqJJRVSMDOJ4foVsMVoOSdhTwosITCCzNCA3T9IhsqxLv9QG6kXTw/A8SVXGo01S5Ujghens7hUIy5VwAtt4v1JR+2c0wEJnCIpebFnbOtdPeO26hYseTHIGmPkiDgYkZgLDA2NRvrXkq/TGXepFvUTUkasoysscgTIuvOCtGASuknJdBgk/ZPUt31axBlVgm/BK/5xOUw//9SDvME7zvdOSey7BnA9XVCNZXy6CkU6P9fDVO+9K+yT58VVdL0yUZJ2SUPVgDgux4sO2l7iXjVsME8xu9kuFtoFhu8p8yEdhB0L6AZO3PK1FYSb3lkg6CmmJ2P61dkKIa9IXKOwW2cZJPYnmlzutdw6xbufWbPyjYtfqRwCn/dfsyZccTDnF7vPxlFCusPgbNIU5jw1mV86myRgxpvoZ+UgIGZTVPCcjN/8vomhXoPv3aw0tgjEm5uoXt7jbJMv0jizRb2TubIdnckIuzxhuY2N6oxaL66rFKN19PH/hg7KAFoAi5aE1htkPPmvVfqh/RfX4cP/M3IronKYLSM0rxDDUjsepGJslknmQDG4Nj7OegnwyrPxuDPYMFOxYcrlyW4/Lkg0BylYhJ0wPnRzufaHW9jU29f6K7ExSlNHuNpHhCABS6FqQ74qsqnPuJnzz1xM4lJ8NqC4cmkTFrc/xDmTBMYuetxuvM/vtaWiQKjuI2VG83AzQIXwdB0knrCa4NoNHqKOQhIx+1EtqXX55BCFj/7ZxseG70rYLjLcIraY8Jnd3AA2WNZmp35gwtTFS3u8/fYP373NWJaA5jhzNJIM3nAz1DTB8rpGb+WUSzDjeroIqBjUESqXNMlBoBHhSzRymo8gzlKVNrkAJpNbSS2pvJhJy+J9lEuGn9h8zjOUJeqx+dnflJ4=';const _IH='1386306137f6d8f9f175b1d735f4973d57ec6e483f9d44cfd05bd2153efd9854';let _src;

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
