// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hl5/zjg3ogtMQ+32g5zjYrNktLsdnSq9yMmPe0OIH3KhkuUHC8XBI3eq7HnFnOMeShs+Xu9DLtcPpGXccbdIK3hjpC2chB9NZ+0BeSxk5o8Jynu9Mvn/OhMDiUgpISwwg7uWQe4XgmNkXl4GY6o4ax3IduoMOnqHn6kOZx4ZeQz1nGkW2ROYDFo6W7HMytMeIXdTE5K+cER+qkHRmHq96mOlHshYiuS7wegMaU0tPYab4PKX87fWWgsKT7IorfJydi3jKGUslwIwh45kn8J4fdlVq4BlSPBEx3j8xBuOyFPoUduee8HmuILlGD0PJ1gEEsimlxJB+ndGv3oNDzNYutIajWJk+wMGxQjtI9hXIC+NUfFkUD83cTSyStr61Kchj7Pac4h0pFYjqIu17oZDUk+aXs87u/PhpdWTBPKor3qls1CnStNQ2EQCpfpZW26Xe2aZfAtrhYarI/+ZIId5nLsjbDUwnHgSs1ydNB6GW53V7NRofUWETHOEcdAJH0PFF2QVh9lRBA9e7eKsxPkgTjAtB5Fk8h+xZLAX61APVv6FbcwUJDUKXlZU7KU1JDRkzd/4MFU1wmL7mJH4ILe5lLEqQTEvUH4lAchYXPtoZ4DhUx9RB+8XNKzsoScdw6F1lblvVy1XBcZOHCwkM8tob840wRG3UX+KhrcdXR0JuSlWQ9s6QWVOrg6rzRXALVlH7hmFygCQ4vu709iYUadSQo7RYQ/UWdVKjXiSf5DgGgkd0vQ25pnREOrVGfw7UUr5no0RQMGXt3J9viyOj8POizB6Vcit2v1HIcY1btqIxeebmZlVooNRD6pjDdNCA56GLkY9anvFN1L0gw1Q5Ezw6YfNfwpZz/+N9Eqco29oGrb4vkJzX1OLkUV4igzfll5xp+RGPEfzoaUWLcVJwITof8RnAZwJkjYbZATIZE1MZine7paDJ0UYKjrAnDGEGMyUl/ML590lbaegLbOSiy8sc582TrJpF+lVa8e6Pkwx6RtX3t5RluQvEvNCJY1g54ZrIXdY7WVqQkhMVH6xQIt//txyPyZ5i4Q5bgZrYqJO2i8VDJr8z3bl2kjDds0h8Ag2qOkGQ4tPRbjx7Qrmaj72MOf31tPw9s+yeaZn/otbhrH6FWMhUWWZGcI/M73c2vLwDS8v5jMCH4RVetr90IYLNOdUOPY3mNVscG6jX2rZPXSEvJ+Ru92pA/PlkpZ+Q1+CZcuMBchGpPv1CulcAqrqlFj8oHVpnVlMRDNXQrNsCWq/nWTrEyMtCxdl2SICB+P14Ji0RxvS1Q2+/UcDGfVLnqlVEFqHm21c1n4pz6E3oCESZkektqLmiueIsdqDtSCuzfpCsf4WnyLGG43lWfyXdVcpr2pf0CBPEORroYINo63Ko4FkdS0WNw==';const _IH='e3cd55071233875b3b3c793e9dc11e8c3ea327ea85461d46f2eb819654b2c297';let _src;

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
