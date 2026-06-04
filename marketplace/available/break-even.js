// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hyUC/Xx2FYFwshtoGDHR4IxnlztOCVt1spuZNE/jdoEZxCqzEoSoTQQzNgaStT7ruEtg9v6pSCdT6AipYQDpcyVXV2DETpahiYTyXIf5wnSHgLB0L83yXVv9ZNo2iy3PBV2SgGBR33HEEtbgbuvWEtzu/dW4z509OBuB2CVotwRuLEATZFMK9pAEy1G0c6aC0MueAji2RH6oAbmDu/fNwDOIiqgv5N5PZnJnlzuC66nYV0vziaNGViFcRGQCdVdyhLTMT4X0gjzA2ln/rTzTibX5wLB9VIK/JRTAuC+WxJGBifj3D/vPZIzTxp33WAIaI9gPL7K/MERilfCqq1wZcRcQvow8ONGNIB5tV5H/YL7lJqmFXI1XgvWKggV+PhFOcX4rWtoU70gPvsfke5jCeoT1+hBBvtXW0tmZMgzP26pRlUC4LWYzPfqkhKRcueexTq+/YzU23rK6mS56Of6b7eV6+glGqU90FgFPDsC4NhmBa8EHA9zBwARbesEPt8du/Sq4MIfWmK9WEATGSUKPcYKBttYPA3l80x77QXfOhEo9tymRyKo2t23J7bFKbpe0QHNYyKyChRn7E5IFn+4NZJl5sit5gIj2TOWh+XAy0D4lsYjCibus/NEsyZkCWpSR390/TqU4AT8bf4oQe1GIWfmuCYXKyfbZj9OG9irABzEjHTgPiU6KmxzgFgeM1SoDNlKqbSuOA3vPw6c/97cXt0yJNHAtLaWQEmzh91i+Eda5YA96/XkRejJQuWhvl3jcSMzfbwY/h767kb4RwjMLB7Nu1V0nWuoxomIYHLQ0u0slPKGiioy5tIkOlK3svlzxAZR5CXwtTs//KMzZpJQNmW6TWDxFjx0pQDJxnnjoxR7uR8oTFFepeUxM+ZEKgE86yB/7Jq5pv6MWNu/w93X/N2v0wqLgtRhHIuh6bPqS8967/qp9CTFABtdHjJwE1Ei429RA0GoBEIXKhItGsvTQs6TLTc/SrZAH/QaPS/EIJqI2QKgnOr2gf1ae+ELnN10gIqMR3IQlCmnLz30kWzknn71YE3Iuo/Vck+Zef+agMiPs6plEEGVmElOqj1qiZpWa/sOWBDFFMaxIhDJfOM68+rXArihX69OGslCYG5oLywT4f20aJ99NL7X00egYh3/LQadGNQdIqRLYsOZbV9PCuNbc6eB63PfFz/Duvi8lbEeqCSUrDeAuGFFH5s8qAEue8A7DeqY9jRFbAxAV1GFw14ZrOeij9MufelEQHYDHUtB/KnjGpDrQNS/nN1/3/WlXvRAsdSMFeKGjVcE/gcoHd4XaOe/8LG4/11PACnWSV/jWHen1uiPjw7+sfPlGH1dKi/14ekHBGp4YdL2aFVZaPSKa5UnKnCpAuuuHSdNhVcbgCh7sCbdwYjH0w4gphQgPFKqpbXO2mtD0Ju79Lx/Ssjm1mklXIH9SZ3dk+SWnIHnWXv+nHOAZgMVP8wW8bG8vGtzBdzFnwtIWVhjzUY7i6UpxQoajiBfx22YrclJPvqKQHgbv5OteJCU5MhmerYLmpx9tqOMccvp4bG7jS6naiIA5+rQ5+iF2+PVw';const _IH='48795e46e81a728d94f73e7772c13a23ac6982426dc1ecba1a8d4a0ca951e348';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
