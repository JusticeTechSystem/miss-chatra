// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='r40T68BzdvLQw1SLFOb+NmuxfOz2oJFoAYYVdkEl1xBw3ZsKh/R08SU5Sf4vA+tOvYHr+IHcjAz+WZf3GGKAi3pevKyyoSc2mj9JRqsrALbbY7AaEo34h3rAbeuvObaUzARLbHauRDgyHAtfPMbhnW61pYNkZ0iDUZjui34OqozB14MtNrNbXXrmxyFxSmJcQzLggZtijiC/ydmjk2xn8AXb2RxqiZHJk+rtii3CXvFcrcjDccFrQTc5X1AmD/S/7aVREiBvNHC6qYx7H1J9vLaIf63/KQxrXi+axrUS4ElXAjJRQKtxxH7Lzzwz8v2FfeaREOm415MUWnyKqz+Uw70LpnGO7S2O05jctZpZ0MtmE9ADkYPHLDKtw0WRjsGCxRVuYgBymSsljCWsYZIoGXwSbNt7FnHMFf5qWfGNLU9nhbD/8CMTLa2Ozzr5fSaZEPOmJhMzMKeArTcWna7VEsEiTPHRrS8LrPRZbRYfgPGP06ksh4ESf50vcElDCUlHZGJBtOxqV9VHDu4RJTZAZPYpIy++gjpYOH1MmuhorRy4bTDVqHprP3jmc8ZlyT7hkswotLPanaUWzSVqW1m3pi5dbmsj8SsrqfM3to6+zFplfQNWr1mIf/VLjgNrEalW79FBohrJT7sVdDuiWUHcPfrNIH2MsKmOs9iMLtEONsrA4Chbzeq/c9B1LcP2UXTXUpVi1TObPMAPHyxp1CA77HOqkP3kvFVJsKqJIKEhwLwmfWRdhfox31hUrmS/uyYib2TpxSy2ChpfA6G93CJYcLtpcrUQ1LrBP7PwtwRH3xq/Nd6fuqMBxIwBQ3stH/O67NW3DSCsad4yItdCjihjFNnBUsOrM66K4d9h2gC+W88gSjkj7yHOOYroVz/5ZXFPVeIsNmoNKPH6u4zmWqzXnhq7VHEuIccQczPWWisSM5xEavCPYYZ9/HWTUWRbEufJOQN+0kqOKOyYgSsIS4R+T5395xeOFkeHu6Kr+XcI1GxLWRkcQ2xjmvFR1BfWqzC9nA==';const _IH='bfb8bf8c47741a833d49bc92cba0f1261c1d318895198b74690282bc819d5663';let _src;

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
