// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:37 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2gtbvNvAhbF83Rw0fEYSE9X1UhxbWq1JEZE9X0n50UW6Ghdw1x8kTS0jdFlhrK0Da6MkOHq6iQXyQNpoCUVd8sc5/uB6FQZRJ8rIeK6POeE9sUCVel1M18h/emzEFqci8z9KcWKSSJuVt2hJFwjm3+6C/WEVjKaCJfsbnXuzfcdvHNJqZzXCCWXf+7LZ7ycV+DVAFISVXESXoyLgjKogJ3wTbq4BBUl9O/xciP0sgK5hgK3P2JWXhvjW4yh+6qzcniKKQEnYwbcQh7VZR5Nl9xUrVxpEs0B+de7MwrWAkB0WK5HJ9fZJIv3aNIOuiQDj9N7ZZogNGuQfr5vkwqIDM/M4Xml1LoxM9NbzStyH2cy0lwFRE+8/zSsEVdVc6ihlTivyAwIp38iteyy2H/kGHkCZSETj05/PelRAAuv36nrqZbYqNkRdpsEUbah2AjJIxftJoxuNGrbZaKC3Pop4eKGLTiK81q1ab9n0D+SQuCvJTxmDRUhFt3A93sR1D+L4mYuvakF8+AzFki2y7XmxJ6exbpynFbhJ26GZwxVkBo0jAs8vcnEczMqSf3Ftg1BrFI0LoVcQnsRGJYJfD24eKbf21sLumBn3eWdINnL/w3bOe2MW0XFDnikm1cFpAWp02I5+VFt3qxCnVKWaXnwvTQBjAwy6QFLmJ2l6K2gpMEB1yqAHy5PLdV5h/NxIdXnRW36DelbCI8DbdpHSEyBNNF41ybpuGS2eC7wPcgCeHYZd8/Ao7kp5PpXBl/tgfPZ6zRxpv4DgGmYB0CISFxR4X1p9Fe+VrxIHcCmxc9xzi5VMm16YFeS6VO9CIxC8bEroJm4/d2aM19UpIz2C/J8koEDmqKh90qkcOsGl1dOiVMSyxDTqP3tcC1A/99iEyGUIwoSNxGPkBLZcr8i3bXRmDGhcoLkbLgq0pm33EMByoX78FqQJFNId0ReMrSSEKci4lXU1KNIzMZWydkZuftVtG2h12L535g+5UT8Ly4W8yqFqB8ZRWTkiYvOv9vDomtoKNjM7LSveAK8A81RY+6p958OtustWcSTiLIgZuRaA6BowtlbyQ2EKZTpF+yiNutKDSV/C4yfD6GFxeFkZri2Q9/+Mr9Auwn5tBwpNy6ovDQwTyGtHrBFysr9Fg6O5OtjjvmttbVKNvMCTwFvymhViflOTyDuqrtxXhmZC4oV0eNgtUnT/5czs+bKv1cv+gSsOJgL90ltFfdBW3tS+fHdj8jlDVCvw2BF13BbqqCGEWomqYl0U1uXy8ycgWCWeoMY5zQen+znIVrXT23NjB/+spvkJSmOH36uNNm/MQFj2tLsq3gvl2OYa1Pa4BTQm4lVPWCpeHUXf4rE7Qw=';const _IH='06a830f5e94c4e4080a4d15b660d7a8cb7c389979f2391b37715ab74880eb56d';let _src;

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
