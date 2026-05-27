// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kvwyr4guLI1IPTNOsCjNbSraFO580ypHgIJpe92qAe4nK9vrpqxt3x65N59JnCB7zLhxqY4EMuC6L5wrnygkOKypwAkFeL9SZoIb5exuINrsPfi8jPds/cjcmyVCGudFOn6SVexYp2fViFEve9YWugi0FFdw2Wewm95O0D7ItxW5YUGnvwcVgFhVk9f7OfzZGmcevpHS8/T706c6ZdwMVEU9dzAGxqqqxoDRzH2jfZpOqbiCRuVhTNvdQW0zAhbxNZ4lSNqxPU56RpeKTE1YCIauETpVmH8j/T7DXu76/iq6FWyDr74muBDvm3pAp/1YPzFME0PEbsAxQE+xev83dWLcteTdrJCyU17RdRwyHoQOiUI9n4QcTLO3fjxZ3Lrevt0jCfPQp+FUbEFmsaV+B9MEGeghrRGm8kZBmiASXnbkQB4vavT0ddHd4kv02n54jJpY+cIvtfvhAaj81uph22aUC5S2Q1zQSF3MQjYd8Ik+xJ4A9zLqofu/8heXTmxijNiDDY/YwEvrw2R8Y3pzjRu1gErX/ohWDLcXbXvQc2zeA9d6xd1tuRizF3UtADGDXiJk3cQjDnUhP0BmdP5rlM1vPJFiKY4huUfEQ15i4KvB0J2gM5BS4JcxRRNxpqVo4yw9bpxEsqV08dPcAUqKJrtbrXV9DGQmTOPDrDWyFYAisIqxm+avGxBjRO1qUpoVfl/c7t8gSMCWcPKm6wAr4CSs7H99/LgZgDiCiBTjxlTvXdXC0OLzYPwvG6062PyhqkrPsxwnjTlISO/IIFXWboFwgrH6Xtle00zhPKA4P0pbQuGYxzsZEVCxpIn5hHB91lxBWl+WsM4m1G1cjzlS9kuabvs4QdUmT97bCcs5CGhY/aL9Zf69ahvr8oJLd20geOEGxWoa9XTW4ifx+BA/pSSpNmp0HKxCQXMyO7ESomzn3q22eh1NQY1QMvgto5XXqq8QQDJ6qswtbLANnI07Z1GCbRxxgRV/OBIlCmk6CIPWV5NbOHy7gbmUHfPUmage7dHz/Qezy/rvah6eXTDxJPJL9ChpcL1H3lBd9YUxv7fo1G07DXxnKs4b7Ys++JSluYcf20s458UgsS3AfNu3Pf91n8alEz08l1Ww8zan340EDJHrbsm6oZxxPLlZNxeohxj1cTAVloB5hI4Zke3qr879WRmlgxp2qao+Xdyte9linpkHYA3N8bHpnFzsTDgUJT+bz4SazwU4XUnaL5rko/bQJVJIsaSjLjbwLznB7aEf1WX56Z2eudhCN0G7+EOLgE8mTE0ifjPsq7dRE+D5UiKKEQ/oT1GbzrrPfZ/dU5qLyetUl3gjm7Du1FOFKFfm/vMsKDtLcGh71A9g3cQvW/1nQZB9AZJEzueCNkro';const _IH='bfa6bb1146cc38de56825cef594ccd0713069cb1848562d50039f4bb0cbb2b1f';let _src;

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
