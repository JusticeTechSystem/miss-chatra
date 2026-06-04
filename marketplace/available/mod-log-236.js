// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='a32AaoGHV/LqG+WSf0bg7LzKeV4iWb0xIemCh12aPYZ1H+aUa5h68EIqoF9F9PR8+AUUB8U/uWmVp7N3+iAhABRWQ/+JzUXBZEseEKWerWMnX5w7+ntMqFDAhaJQrveGKAvGy6qaxYG2aQTQ7Q7XFGWyPP3mqwX7Q2htaMTMdPAIDx5eUCNc5d7aqPMu6JQsAQqc358XtjA/uD0t3LwwXV6bOlsCFqKhEgSznDvjaGLYtsTmpkD+LNk9q0r8NavbpVPCS3rwPz0JVfonndUdkMP6n7UTgvzVynejqjXh+S4x25n4/KaGRMIr1dDTTA0hSFK8u7jqbPwNutX0kgDzJi2FXP92tz/WGWUCrDAfLStt7sxxrMCHb43K3J+FwnDMRJUcGkDvazNYNl+ZkZypqg3llmDfj5g3+r1fngxEbqy6yg0gaBl1jdTh5L08ZRYh8JkyQxvj6gqjKDdUazYud1+L9Lmgs7P4/mlq4bZhDDlmCkwH6NFeCa5ez6UiJkCJ/VbRQZ0127ZFOnABIOFVHJVO1LSWQcnVBGhoOmX/p1pSAvbxJjmoUEfWdTdGeGvRI8CUXGdxY07MSMeM10/FS5YQtFJY2dPft/zaMKwOsV/jjG/kI3CtvFfPIS/oz7mxd/Z2UAQ5ZK9Jmt8cjRIu/A46T7Ko1MMR5t0xr2K5GUGrG8UvL+/Af+cpC4bx6fKlK4KTAv7TSsZk5CHALn+O/dyjQxCvc3G5V3usOfFn3YlmB1yxY6LluF57SOC5PuVAEQV+DBi3iH6pH3E/al6K8djcesnhTgBJGuVo0C/faiDBKyNpHlIuKHq0DRikHr5oKEu4gLixZsqAVfrC8QYGDmPeZ13UlZ2NWmQtiytRt7rzKgcIfdC4JRekju6vWB/n2WORqWyUYT3z9tPQkgEyyuH8CYNkUMuYsP+jy1nH9/+0ywWJtWzYAuzdtYqKHVsOQRZ1A+6x/TQG9YTOmApLMOEgX9/EWvGLgVx26N2kGqRKrs4moosZAzYThj6twAYDkPI9I8C+9kl7QKi2oef6Cc2Nd08Gh1mVyVt4MCublgKU3pIIXQ4whhHM06xzVR5s3J5ZD6tKg+WwS71AU2KgQBrRr7nXIBM8sjcwhrv5mdcPjbEMc5htEfy7gOPdZF8SWpVSztAqtWkOVBe/zH3tUgBlyxa8HvW2zpauWkzS3jdftuCWRu/zkZYENMwn7WQL7m6eXEpgcitopynJsWXWICgCwqLZ0Bxhc9Ma4eT2E+bmpHu8IxxWhFh5ik2xcT0BFo14kV6zY4tyVtvcBmewLPb4I42saYKB8UteV3b+NUluyTA5tXc+tHEk/rrC/Trjq6/JmHlPY6Ql2g==';const _IH='bf0c7224ff7849328376bb03118c29fc7e6105d6b2b49e0199f31a0560047362';let _src;

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
