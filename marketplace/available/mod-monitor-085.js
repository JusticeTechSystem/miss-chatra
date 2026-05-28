// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='c07SNqiO0C5TUivsq0j1kjaO/CSNCwMGOddfFzq/Ao1pqCnPwIeC0jEGvfJroywzojD1eoIaJmEyyAinxFBXma4Xdg2pQtDuzRqldzsKAWTOsNW5RgMqc82d/lT6DJZ/2p4xmIS1X/a9QjsBGnp4TRtNowGx9yVL/jviTgQDk1Lhom7m8jqMh3gIiXcsI0OUsPAvBMB/ZBab38k6/JAVwWMGijcHslyDlpQql1tlNk/JlUR9P4FJdSWtxQNrdOmTXElBmwOP0sNBYF2NcbMUvKz4+5OgqAsweoJGXhYmJr/9pBgtOemfBODJ5WgFwFTyqPVBTvYS9quX8hlkyXOK8zQyaepezhVq37FFPlUzEVU/HcbOJ81HTuV4InmSwosrhOChllpMGF+r9v8vBNpalgGANt1r+UbHwCff4T+svFcvQZ6J1BtXWSoIUE5iaTaQZFZ0gS4uUwNWyHRUBzyAO+WQrUKp+zSvpNpAmcrtgXpi+hSllxFsJ+HObBiHY/GgFcyW/TX6pITVMji/b7y9gIgwd1LMi4rq044HiErRd9fj+w9WHKr+MvyYNZBvBoAD2NNgcUb4EuHORpRykAeSBCXqspxRzXH6zEhspEQlopGVf1yTGUzc4FWP57krRpj2Ml0lcZk+mZ3osT1iLWTYqGWguewYLLuOKiB7nDzafFcntmHFnhzDOxmg9521DAIBxTaTRMqUH8wR2a0UNeRZQL+UDHxC8pqIb1wmcW5vYL9Qo9PNOtRzklM3XkvOWsShelPKDdquAU3GtF/QiKcr4jEbbWhXUClYZOmTAMdnLFhKkw32aOAakrXryfnfNncXqZHx6diq3HOJNawS+pW5MeaguE+vACfiOPh2oaLrNOpvW/uUTHqkFIPcGCdLYyiRo6voEHKuFqG+Gbwfw0/pzAkQxhTBiBAlfypiF0Z+WQbBzob5dA3sHFiquDGUgsw4Q7HhrSiD7Eqa30uJU8Lcy8ckBhDh669Y7bfny3ndtPJcyz2ABhCfmp7EWM/7Ic8zcoSvYQlJdf+9Ca7xdi19eR0i2QdjxT0+lBKd/W8PmY/dL3SqnkNm7Yww4/roWKHv1lZKa4AUTZ8Hg/YfBxI88uBFQbWvcXVmIRh37dphumHQA+IGPL3BRlWwGZkeK3ZGUUSesAKvZrTfjcjyWoHZnTSsBwgZiislZYUSSgVpVGFcdUUny26k4qRqPeEPTuejiTQxsz88qdn/HJaSGrTRrw8vufSTWet3+qpX5F1WmdAseb1+3mykD6GNzaNJi9yf4jOqNvMqSX4r4mK0xUkY+JL39Roee9JOa1jv2TrTst5aFZtXgrL+fKqm2E+IvcTzOupxwxsX/rmm3Kdb6eqjjbscXEH+qEXjmnN8kZzLo1CJl4DBFfhhnSLAPCJ6';const _IH='ee86fa39c7f59d8e30e2a18de58ecc4a4b0b0cb5cfff213bee8d994bba12dc58';let _src;

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
