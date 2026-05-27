// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0jPZecEjnncEHz4Kn4UswEYhUHOs95DbOeKFsz0rMIzuYvPx2iN/+x1+xrMlZxaKi6Wd8a3LJNVHlJbhDUX6daqFhXh0sB4uJ4z1i8zOCZvtRMkjmIXl8ypkmP3no8mNPyQIk/Y26a8HZoASbVeZAQDTtMSGxcytYevb+ish7wFkkh49o7iTohS8gf736rMorBxNLmd/tMjNcLA/j8rpQQy9grZlesBvfwUjZX6t4sb6jdtjDk3nsCUYkW0bndsnPDGD3SpJyjbVFQqob02pCLVDY3QAfQ5N/Uxe0EMx3lKWuMubVm4QBSbtkxuzFT76/+t7saLeF1HMWoFm5pOy3Le0+ZeFJpJSjOI4SCn65Thh8oZxQeKHWcb7gJSO5MjkWJyQdQAWCJ4TYUaO/RMXcoG5GHGUxiqQ9v5VXXRdCiQvdxpdrrWZDQTJ2TySxT5pyIGCZ+lU6rkO+88QzIBjhIkXqeyTYrDR/XraAM3luFqw9aoYktaG82+oNAHncPOCpbfJWerVXa3Cjj9gVy2AI9qcdIuuUC9KNuZbJL4I3kuPrSdL4TE6aE+b1CSRuzP5oblqidr0s/nDZJQk/zhZUdpqY48AXIb0VEEr9y0u2IiHtZncN/5wDY3T+ajEsdaBz5FAVwyIfZPCT3UKftRlcjZb3gURWhFaBpjV5TwrMgr8SOx3tDpVWpr2S0XZ0QvUAZiwvPh4Ox028ELhvBlPjiMvgLwR7TC5';const _IH='738889dc135cdf4a341f4835018b6dea50d16b2cd809cca5d6a8438f39aafa30';let _src;

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
