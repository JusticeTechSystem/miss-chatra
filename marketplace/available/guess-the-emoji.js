// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7sIoxdEqo91CK0WmRPXTMV26I5nxyGlpBDhHga/CCMOpYgWN3tal2weMfwctDt+gVlGEUFBojqbwwOS4Aq20WpfP7hhm7tgfXSxyQwnNmRoXuenfguO+DCKFZLyeDp6Z57Qm4M4gZII6+ROqSssLPwuf4T8dV/V4/N2OkhD7yMZwnWFJCsqnY2AkR8VH7yNYMdSTTbKvejoeBStrEOB+AHHR7wV5Yn2KfvxLoH/i3SBx2pS0YkT/j0s2cDsD3KtxYOTFYTIXeRt0F9p20jCPJ7i+7BUVf9yOVeGcKPa586G3XvrAbEI4RgtDaL9nZx8di7LHIBopL6jpB91cbLFrYyDcGgKkuto12OThVELa9HY4ZZOaKlntMaI7ZbX9kOo6vHSpDpok1j4K4D7779Cv3EDGVZgY5rJTsaDA89zM6nUsKoWGmZ+efJs2SRcd05bSQA3cVpCmD6pfwzu6ZI+O9xt8LYB77ARcE2MTZ/RxpDMykhfi4eh9Nw6GnHR2ExDmxDOQZaL/YC/AvElgOqkigsAaZnpEKvX72gyFqu1emKC3awLbAIOlpO5V11/0ivhUUcB6EkQDeDaJT1ZuFS1NVpQztUNi2GSg91lbyZh631Uhdle+xrS12ZLIaCsBSpjmYUnW6xN+MlVA9S0Dg9rJFzQ05Nm/+OY0fYMHIlv5zNHnwkPoQNTs519lywdD7hAhxO2gMwIv+mHoyLdLL46oekBPcNA6xCLiyqhUsqyrKi3Fz5l1dae8v0D+XzQXqGYtZ2iUs2ZhDgUKA6OVBeBMO01kIL05cgfBOsw0Z/8Zzm1D5F/niKOFb5Y9SLHKdYiquidqgr1LAeqGNdf8B0tXAbXcqmk8WGS/EewGzQWLLuWUSfR9sO1SvLtoFDuNP9mFY5dLamw9vHYGNAZ+fVc5y687VOTUqkGZ6pHKX9IC5xqPRzQma1AmjwqAYLj9DU3LbWK4OuHkL/6gwSBhv/F5mcVetHKP2tRikP/lwiMFqA49DogQ/78vPIk7EJOHLMV1pugbFGjoM6sr4nI2ossnEP9GUaRiV/qR5l6LC7G1U0S8ANWTf5uDzrzTJybwiW4rYSXZcAeRrvubgpJo9T0tlYlLhHAmK943SNCegdAZFIYlq8X1SeNDMVjEPUZHgyL6a94qjDqg9eI7QKWf9NwtR0kn7ZK9zUjNMoAdibDV06iQH8OwLoBB3Yms3xfvhPX/I/I58MuwhcDa6G1uOWjCoBN5rELz4izncubaC+dS48eVgU/q9s+4SlczidakUxOSCvJm2gwhwIfVQ6lLAZ9/KuU0CJAzPir1apGe1aK9a5kTHj4PorFlbDxsnZZjGQxUjb3pMmePF1awkjfGAn+yv8mFefrIE7qs/6b5nnCoM1jEQvd1TjZOH3WDZKiI2CvZ0qLp+pYSs+8nHVrD7RGMXyTLfPFQRLVKSz6hRl28smp8BUE/ZoFd9ywYbgHOW63dkZnu7fAuY5QMHfHx1PqyqWNe4J5f0dOgzumOo8AFJVS0L8gydKEvMyX3yghmmHU9c0fMh1l5Ghvmwws0x4o6lYJiaAVa0Ybw29fkQc8TIHTrhBSjbQPibEvvdGJh1/xjHudww0BV';const _IH='b679e2513b4888506a7d4483eb1b301bb2d23a1c3d544a2be50e00c0d5969279';let _src;

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
