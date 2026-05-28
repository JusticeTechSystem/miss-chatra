// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HhsQDYgaT96UjfMqoL800fsBS+KEJ+3xQ/wyF7PqYX4LE7WqMFts+aGYuJhoMd9ssghXXEJXJdHwcjxSdKlyQgUWFxEo7uOl9ViKF9kSyp4WDiX6aFqGnYZmHNwuJVUGVuuEJLTGgDG2yyPAm43bWW8Zk8ihSIYhtXVuwehyLoidq5zWej/IE+8vDmQavpZVG7dE9sVsLgFljrRWiszJtY+JR7saLFTk1/VLP4t5PoTEaxKJBoh1bLZEg0/ii1Yd0y/ozZrJZHgy1QzD9sMrVVOunIZbe4q4GKgfWBgUrAOdC8DuqrRlTYJpwbHxuCS0SnPrWDHsxM988cAhWgGT3UGXjuYMf2mrm9eLm8nmYZd/CR8Nh4DYFmwWgO3sOAmgwuoVsLMQJeOqi9ETPawuVwolWDJ3+KZNptGQ7NPsHQVzAQr4VaEG+S7IpwKP+47Z0LpiQJON6eK4cz8RrbS4RDr2Y2msfIfudZu+1/0coGO63py0al08WzIKCaCXEYuwLBXn8ij/nZ2SCkPfD5A/MITLIp88AaQ3B2BRy5Mk15pTMEyEasg8wdJTvIwZluw6iI4Nni2fGC0Bsc7affk+jXh+Tb0fuflFbTX5i8IQdlFl8aHEZvWwscK04wNpp3UdXGhk0+uznHhmsV3pH1ldYpjwfjPabzkldhpfpEfkIZJVROaYJCP576DHtiOUg7/q8uF5hNNQRBbkug926YkhrweaUkjAydpV0OsqsSbsb6bRU5m7RVkAFYtOL1IhaV+wTuqQx2IEFaNMcqQyLmbib5l3V7587wEo8TDbcWbZgj45X31Ppl4voC9wzpmwezJjSz/Yco/a949Wq96boIRig4CU1p6Z76SBI2vX756VbZiuXEyqk1eiGvPJAZ5UEqRATik652TtRTR7Q51c7bt/F8mK/LgACf7B9wBC0IT1YnIZ1jTWBmBU+YNwiF4xfCH7ipjitLnHmLW01hgdauOrUsyOWY8jU+1Ty8jKm/YE30I5KebnSRwNuvoDaE96GubraZ22n//IFb1aP8EpA8mbI5yFSLXDrwjRdXs8zbJA1+0BLYck+MZejqJ8SBWPh7abiKs3YzMfBE/YTNizESjEN9vgBS4Y3FblB+OFDae0q22ozuuX7fMD/BVfz7pYj2IMPsvgMF4AYFQz/FI4NeLE+j9hISDK6ElljEzOmhyhqoS4ciz/BWsyLt607y/x4qcu2vuR+M9zU2WDKttUqHt4ywWO0ibm/D+r2JNDwOxA4Wt+T9b5Bo8dpwX/r/LczNXL02oieHpA1Dy6u9ggQVD5HpZa+SUrj4/WDS04Qckqk0E3bETpG1G8wahVmfk+t/ebH7KnyGWumQYhKF/j9OyQmyxAbjJgt8v08Q77Nnx8ItFzA7WbQkmObw==';const _IH='ab3666a824f8c9bccf3f72c269c149bd9323ea4eb2995cf55a8315e25a5865db';let _src;

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
