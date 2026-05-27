// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nSqoHpvA/dI+YDPhvgfN2rwL49uY9io0OR4fElbUvIJybID9kUlnd+i4MhR2yD6rf58akFx5/pfNrA6iBaZd2dBiKhF8C4l2MjEv6BAXWKLj+PujSK1geCLQAJOL27VZrAfshcagijj0hg9kge7TJeBHCE4d2wxVRRZuPVqngFo09MBjiSw3Be8TBBA37I1aQ4J3y5vHKFyIEl26njviFWyMyitQqi14CTxEC8kMu0sBpzTAEiIPXB3QAeplBWPbaSmaR8wEI6mL1ZvJ4PPtvGdczm76Gr6STQN47Xw222TkvZjZ8GB3W4J4TUwEtMYvRRtYjWpjii71HnbW7/fONDwh5krs9xvp3e0BUWYgfrkoATYbBjFVOUw8sCB/USwBW+uYRw6pS45V9viwkmCA53ZIeUiWCZw2AAoG02VccxjB/GIj5Fb3ZKdWJUgVAN3/qqc8bmGCO7CfxPxuO029R+xMAw2pKgc3uOdX4ZeE/QUmHbuJO1vNcwmHZ4Le27kxILpNCcaJaIlp5+nASBvkPToFbEqTTA56JRdiwOBCBbITvwHc79qgOSpyeAsw8z8ibK/l2fy3J1fJ9ZjfU5g+7dq8XBlgfpvkVv2WufECL/ZTxYiWW4NRo1KCtDxuqOb9Cm1DkcjkRjuCKTkQ15p20REklucwuKQz9GqDCaGExVC9cUYhWKZeJzxxLXlgQ/t2ESbUJ3jQsXcyfaeMmd4/TJjwfOT5Y0K+z2lz+b8p0xgrdEuebE5A69RNCNFlHJnWjLQTpW0HJC5CmAcD/9TdFqA8C4+sUL8nddqaLbgeSoluiGpy7QZfWYJtxUEjuM6Bp8mNTi0kJPyAVtKiH9SvmqOa/fuJ1FXbNMOLOGEXnFI3Qy6Wj1rOQkCD+yCzSxtx+w/OEr9gO9rHGebj5fdG1I3Z0hGUUYmVpwGaaJ+beysB4Y14yQ7VaNNkv6AAuuDnRIsAqH0TPMZ3lQn8N2WsutVfJhvwk9cZw4qWHawybTwqzMjXAZ7hZ/ODOqoyaJQSD5/ZRbit6uZW5JmHyOc9nrW1';const _IH='86885c38ded3e7b2e685b2ba9c80ff75af83322f95913020b26068ad9805c9d5';let _src;

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
