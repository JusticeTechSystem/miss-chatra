// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:32 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0YOWhc01cP4b+8CFgie6ODnXVauS1jDgH2AG+IojWlA2f9yDE5YxkYrvC/mkil2F9sZ0htlf26B7ASmx5ijtNELYxdRJiInnN6oo/h84SxbTHFi4/bcA3hfavHEvGY4nxRrWrNaYEAo9SSucGVQiQKXDIKYmG8G7xw6EUz+BUxQ02DAR63Eheh1Pv/n9/VLeCLAIpI+FS8mmLuYuDQj0CTDsevH1gzsNq1wFv36PVJTJ0Ko/GGSYdnTdPat4oqXxg9U0LF/yOrEgvNtUBNHc7xYK+czMAGrjHQxtJDhU1wrVJ5HVPdwPZtLxSrqdYDO09u6XgijANmZ16G79BrCQ7hqNVTNLvtDiDAupuydeXDoTR2bIvLeZbYPyVQLNq947omTGp9HMWZtp251EKxf68zkqUEjlEYAiINjQC5esATWXrR4ZucBwWVgEXzRNHZo/BBHTvzsSFPor8DT31KDkH9xErz2Xmff0LuMMzBcP3DvF/UKjXujmkmVP1e1/sL2YhCMEvEdAq1tkbj1UlPb5wm2krFkh7y8HhLsmLhgdK0HH2ZEoOV94Z1rWEMOoX7WrW9oNCYco3XuKySTx6RCf9tcNxIMQ5T1ETPKEMM+vATQBDj0tWENHohUqi1ErrSeyvnO8LGk9fUWtznPr5QlKys9qOFaYtrWMBTk+euPdglz3L4XYqigrrIFpYYWSzGNS/VLDZJdEM6fTiHQHQmv4oLeFsEKLAzNO0yYhJ89uN3fWsdBIDQSNmJHGZE0ykws4Ls49PL3eHKvx/dSK3HREh/PI1oZ/4ufKqSG756e3qU55Mgiy5ZQJ4amgmF4nS/ZfTwwBMigyylvPdm0euA/WJ7+1WxDNgBiW9E3EhKg2kngYQGtfDukesQ4kMQfwItRg0LD3mTeB9K+sHY/WZiD6UBJaZ2hzEODe01KsYoeqx5zcNDBvSWVXDSPjg/gVZiKexBfM1wKCCushDWvPJAKiuqXaodIS4q7+Rj8AdOoJVIKkwPUV+16tLr+MB7jQLFTC9/2aFua4XDEYr9ge61KFDE8XvFDw029RYB9JOojkLNa9dPypfLaxHrXlOQgKqo8X30qh3flkHn1Pf+NFrwMhjeYEjkOgLSVYKExQqu2mwennNtSjBTQ/T/gjcxcMdTU5mg9M8Sg6+QZJvHF7gLEfR7PM20PvfdASbHE6ViNbfjOkJXz6p2g3H1KfN46hOsRPp20kFi1HBkFR19QdirIViDG3kihm3Ev7/GCg8E8Qy9+VjJP+BvkcN5IYx+aV9XVEgkw21/lmEhDcyNc5nwC3nqWpY67Xh69pepKY856mECdZrvlhG1BO/H1XQDSCt/jZUi1qEh/iYaNxmhZ1Eynyx0UoTcxcJ5sJUymV2DJ24DoMV3C';const _IH='d94b512de28699083c54d0f622c08cb45643211ed00d7c67375fa2e93a257336';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
