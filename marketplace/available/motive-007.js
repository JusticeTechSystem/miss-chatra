// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IrE/+lLhf5K2T0SS23ijtvkCte7Czm37H+fr2ulXG3tAv1gQOy4NddwLj/OdSe2XJXSUF6r2LwQqhIRssHuC4JbfiGVQ120HibR/wxAGxf784kBIJjUrv2NkGXeplt2dl8nVZiy7Po5/C1FtvzVd7RtQE76dpA7isFyzmFxoO/UL6nQMl8LdpK9JFwq5MN8B6WuHrmkZbu5cSe161YEAE90XiMrSys5HeLiBvC7Y4V1004b88aJzmwm2/D6lGxN+VtJ07rWPQH4YipEHpwdneJHaKfcyXClOQTuo1pIvXLz+z3OTa1rgCBT/FTZZs+TS0Su7s7xUUxkLRvQ2QWdP1aGNtrmRFWPOwJol/wg1wBLxwFLm4wmLaBh1sOtupfwywyarpFKSLqD7In5ijOaX6jCjSQd4ZDqPzJ5tWrSr/6B/2QxJc5q4SrFjCTl0wW00KYTx0YJgutYwnUZnaSaCa1um9hMJFsvkb01i3koX962WfNN40CbOApKAxnw32tlKQqIDGAm6IjJdYb+3iUdI2DLNRvF0KebIRG9m8rXUiNH3Ekb6KBOAcVuzEsJPQy6q8F94jbb82e023hAeS/qgz6z42MB70FXyq+CcortA6hPcjjMdDTwePXNpFZlTpYV9JXPVINKDWZts8stSglyRh7GJnZ35+9kmtmgTsve+u79g0nji/WCpXhbr0/IOECLCsKpQCLUOqsYoUkYMiVzT/82dJnZJ9VCM1vhvXzMFeEcGvOwGcpMs2IgeUtKBd2owz0kyevyOVGmc9fRV+uc05bu0qCkF/sTcDHDZN9qqTPVhXQy38tDc3zbbf+FpIu0e9yAmvl3mDWBtFJpz6O65KaORnLeTbA+49gkSVhPSZHdVxCvpdY+ej+GbNwbEozES5VjlnKGCvHuJ3jN/6RBHRVOACi9BW+oIa6W0dlo1FhIA/ipElrJF3BRGyg1QmfMBeJ+SaSiNN9dvcGNJ3a8o+tbgoKWWl1uqaaUPAvcrxuNWYRA85U3hEiLhRzZgEpLzyg/e8Gm83Q663cdzBBc=';const _IH='dbb8933744cb5c553b97b03989052b03a158b3bbce9e35a9a3cb065863b0d07f';let _src;

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
