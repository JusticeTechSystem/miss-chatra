// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+LA5KUnmTZu42RMmseB4+bCyzZaA+sYhJv61oeBRoZDkXTGMf0YE+ao/KvnsCOQHX6/c+zdxHQgf2XYxE+dmDg6NzZHsA3B9DjT+JucyvYgDNDuQVq9Ea4WRNiwBEoFyA72jRi5TzUTKWvuSHoqzLkh8JE/KkuZTmytQpLGr1lA5qqQD2qSn0fuvUYS8cB930R+Da24Zr9y2SCsrWFZojtgMiO+FlelXeGbOztsGahR3SSioUKG/epg9TXWIK/W8uC7bUjPn5SGtuBqNAWWGu53gZnDg/d+L2byucUk0RZKKfKtcmqk8B7qpM0CC1cJa9/BsOADx8sFoqikCLAsYwO9Slf52r79To43mV3k3cyb6eNcxy4sNqGcIxkG2W6JhvYSXFlZodQf+7uiG1yww7kNWqV9solKon12U2GnYh1Nttrz1VtRQMPajL1rLjTCTTK+jRuhYGlBEYG0Qs/nH2NAkGufXIyXqh9odudW/klM6oJNZmYtMGGPU6P/HIpyznTP18GY4Q95MN8NU2ZXG6/Yq36ndOmcMYNgyl3mHj+34OjIKQDqtBngSY3z7MOI6ZwY5B5Mpyc16WN/8W1i8pnlcVmeEZ+NhogT9KWFJCHxq6pyztKxB249oYXCbcFGWs77j9DvrYJU9+yOhocWvHqOaQpf+7FPy2H0Ixym+MypcceQpQRNomxoSqIKBqK4ER3CCj3tzXFALhynkp6NggGS0cMG3PnPCXCxp3dU4nD0Vg+CGSjgj+h75NRsO7ndO/XeQxQ+gbiTjxsyRtb8HSfhunDriN9hEgp1I3lEr/ljiYv3BxME8hcsjuqba2k7zzvBvDN2x+QA2zbc1Yc4rYyAHzqylSE/6+jmijvn4YGGs+iJ1V7+kNEUGG4tXdSqYWTvKwmPSc/dKIoj8vddScE7sT4t1DccZHRrbFcoyftySTha4/qo1HWIdD7D43SqTfpdoP6oO/avWXHzl1pRNuLAPx3m87eFWPB9dIsNwIeVhUJkOG9xeNLJpTrEDj1M/uuRMEjonPTai5t3fckadvyIUFy+IZrTfpE7BXGgbBaAN+m/2m3L0vZaLfblQmCDR4FxEvlldxarjrYvtl9nxVg0z0jsovYjhUuwUUrSltWC9gvFtTuQViD0QStCVvNx/cz5R2gQdZiKyzLeK5eNtojyZWdBzarv48exG4Yy/5MTUX3jq4CO9C66jUZuIE7yNvyAYExxUzD4Z6SkUUovC1hIqtm4e1gxNN3yUJBcUPDk+zFomr9JPl7AdQYHa9mxzhi6pxVnjkepN6LhlQ5SUW4EV2qfF2gFuPOYbv7Z5yZ5wW6h49ZLAKPxSa5rAsZZRd6vyJH0rIBELYSwelri0TRHAWyWLFbWIUOPxGOUdnlsTigazY1KZmCO+417TlWEcvRBQz84NzOAwU6O70jirqSTcumVyonF+4gEnpck7AKkzyqXEcJM1b2ryMbYWyJqD6euJjbM1xwBq54pLMJZgP3WWMZGrxAM4x1e+qHOIhv4Vq9ZJIaiaxDJq0uS938mbbFkY8OqSqw+qMtEkIS+AnED604CcZpSJM3huFTMgmh8i9m26lylP/EorLGuxmg==';const _IH='361cb2c4fbbf6a5bf53def2f1f68ae7ae1418b1798ce929e261c4fb26a4aee8d';let _src;

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
