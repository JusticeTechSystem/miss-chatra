// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='h1Bjrz2Vm97uQZlaXUoK9hsxCAkfNwsGb2fbzbNb+CxS5XelIVW1gCMu1Dm195Fc9D0UZMzvFSTTEKxZeljsyfczBzYAt3g8UONAA1gzLl2KqxIn6yQtuOi98FGCkR1G06RSwZWmprZnHf+kaKpQsw2P52stC0HrKtguhqMqEG2b3PhOslTUdTYRm5gvWYiKaQKWDUUt4Atqn6ooV6pBxvKxOJIrnrXaKSChH9kCaQfw83AEMQXWTdeklLovQ4D9FjY/5gAzCfYAebUX//oU63dQ+43C68JDSf7VI6r4GnHXJ//ilhA7p7Rp3nBXJ5qOOQWPgE5iFr8XlIRmMXzlSSFY9KqV8gWIZXdAd0KRUy5b1kVRCwh2CdqRPlZ/Q7rV6/HfxL17zLmxCydnOkyjbJTGByPGHrq0YL3Dv84lOzNO5rCroALNm/BkhZM7vqrnUhrO6CI2MLsPeWBm993SueogoLFz3Fj6apmCOhFUXGP8X1kuuxsGxQM+ADAH3DbvfUfRcB1S27JU/eUAw+u/pfOYOTpjpF5TIN4s5z+emTC6ggqY7ixfmAAzo3WVKaXgoRSzgVWhd+LThNyCuUTSl28mvgTxtvzir8e8ZVBlITuah9HX3kxTZn9zUDraeziaD8KaAq8AvvvrVqe4rY2appf8rjudmvWnHhBt+S71wiDQJoDkWCi+A3bAhevt7TU5sX0MW/tDq0UwPzZj4Xt6T1VyCyp+e7JMYtx/gXJm30kALWJy7Rt5VUjnituDTSWl0K6/OB9fQvJYYpvSxFEuSJ1GJmthmLe/BGT8A06mV9CKMiJJQ32HgHJsLITXUsu24ehN11zKiLcBCsExRu4ru8KRZs6MoyBkh48WA2nYb4TMHkIR7JafR5r6jbtMHn0tDBV3mbhk9iMgUYOWM9xvMLSsWt6QKMMxQBmUwTqWZePNFjZLMlzbOITrunqCG4akdJXvkeC7D5SnPGkMYLQKnFVLU7oIJYquQrPi75RN4JeAF1JxPqpI9OG/DDxansPAno7IOwY6A1G95D2TLzR2ifZYEQt1L4hLWqeJ+6NuafwDxbgRKIVWohTqNRJP+G+R1vv80nWCiYx/YpizpL96I3wxE4DxT/43hHINh5ZpaFFuq0NcrtJBmHtJPmqNv8ilOxBqYBBna8xBLn4iX65bTFFcwW8JdRKQ46I/nvCAdlSlauVcssudXRHsq1Il5/CMqSU51+7xGgcH0zFAYrEQJCPh02YRX05iQFe9yL5oKFQEvb/P4qSgUxPfwt3JJBUfNVu/UVrG2klH+f9BHwVOtXvMUOcuYqhwdNofPIRlUcCtpME4lazHaEnH5LWdLo1RNpID8kNtSQk8Kz1TgdbEdVRRYtZFPUZdPdqep9uCz8djJC15eG/+MfUnJAQ5Xyie2y0NxsOv27xxu5xugcU4YSOHeJLX0lJfpM21WmPl+rFEjkHE2SFMjCHVPyeGm5eO8SN8cw==';const _IH='63eb9246bd6c51cae7e9869e6fa07e828bfb4cde666adcb8de310c6cff0fc6eb';let _src;

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
