// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='osnlfdmCbUXJAV8TOuguugIwM1i3bXYkT3+7jUPKJNih5djqtTGm1fdCdbA8UnpasOAOiUMLaMwQUJmrHoG7uRVM2lJT0pIYkpc0qV2nZy80tyIY4TN5QiDN73lXPUYRpuxk2O2iG3Avr9PrwnFDfjZnAbjKv7DcxZ82hogjtaGn8jSMGgrYkqCmrqTsCa1MIzkwVZcDB/WYVMtoQPvxElau0tiwtTgg7bBROoietsqbZ6qK4B5oxc5x67jg+JM/QlfqJfAdGMwgfmxXu0G056f6aDbuZ0jYWkxOtbRcpLg3tGeypbTjhWDdomxv0cY13iLoechMbQ2ttpe/iY7WwlNbAYoSCrjOYl00QbxWvk4DFTXmCrI+dLB8g382r1cywr9h3VKouIj4XuyKdZ+UfjAbFYU7ia1SXrlryFwuxp4GxsKAiCBtJzGetkF9DsaeJwOS4k2vxUWpZ88N1f9efkiuDo+bnYZUj7HNwl6aFKFFUBt3ajGTr4zIEEyzVSa7cAtfwqQdWPLcf7uo5x0CAmSyiUv4Af3XmYG1lSByqsfZr5TH2zgVKDZ8bMEjpR016+YbuAF2uOTzMgWzyQ84w6NaOWCAOa4ipjoltr6OgrPAHVTUtxok3PuxEGvcpOCHMetPRNNar4IQM7ec0dJmuSo6JhRFnh1n6amLGDhv98Mq8Wpd65OuUcbNjwM7T8e7FGMP0ASiD/icBW0E0IxDEXVMWz49ma15dsHXvYd2hcpqeujeOFs0ktHuGt4CLaeIcxL3mIh8JIC1YL9jUbHz/FG8Qqy44jIZae+uOX/kzU9kIaWCTY3fmWy24gtq14bJ2xkO+ThFXCjySAGjt/TQH8/XPHlPQX8Pnv6DszYwv7KvM/eCiBQ2d6obPU5NO0i2+WA5OQHnaoiHaAp3x9U7eQYK9NYVdgsiD+iBS75YoUD+/yy+jMGvBlZW896GHRZlIQc46vcasuu/i+xym2nTa2ZAWUmluKnSkpDxYD2z+Kns6v6ikFz+m68gxMe0lmZ6pf4YPJOYM1PS1KtzB0l2Ug7CBLM++8CWBO7gnQibV448r6431cbfyTu6+/HCxzPlNuMkUQD243SNPBUxD8bzzq8Y6QJE9F7qf4Ez9VOyh+bZ1RvK0leOo4DGTN/I8Lu2Rc98uKHtkxehTl71/8MVePmmn8Z0DOZno88GJuSXzLjYJdqmxGDTQe7YlL7/IAcQnL1NE6IUl4+PINsj56JtP+G8Kd/Jyb5zM3aqYrOV5bwNz1NGDJzQdJFxOaKrzUppxcdWw4YePlboLWqPNVVCg42fvGDZcrYlt9bO86u6BWkL2vBLYIndWkVgGGbOsVsSQQwXXoO7R6G62rA7Zt39T+GPC1zIGJ39REpHrdCw';const _IH='731672251178aa896d0eb308cd6554d7afcfa6801b3d8a0e9d54a487f14fa3a5';let _src;

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
