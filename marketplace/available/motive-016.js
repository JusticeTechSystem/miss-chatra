// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7wlw0KacUI8hYjoPB8NgmM9civmfye+/nC1V0IzZLmiEetxOZxyiE9lm83M47FhqAdOJeK9npBijxjKQqqGM3Q2mIjlkkOtsKgzpqVvMEp0Pu+a4f+TDEUnOsjcOr6uiIxCPRLrCndQXKOLKdHSi1QyoMcfKgmMh6I16+rFWCkbrvbwKX0IU/S2Olozt1N5TNZ8qRCUrYU5JJST0ZVS+omSrALdF2pcWVSvfyoNWtVWw+rNstQgKJlvaWyxgGhRzFUp4R2qfkDKaBzYZKzghWkopc93YnkcgemnGPS+IBq9r8QMN6elOxu5CAqwTqUSv5yIs0F9CoYNwFMKXkRoq7kwIYdX2oM3MlJaiQd94G27n41cdE4rS5Nm+ACszECW4aHQ6RRdR+3Qpaivsw7qH/Qg3ez9nOeIUfVVm+UHBXJh9LbsAmq8/AweDT66BhclBpW/FImfBZnxjDgVUld4KLlOxyQMdj2f61Nq5c1L3bLR7sQa+5rAYSD3wSPblhDBM3Mw1XJs7NsUT9G0EfN5AVBZzmhq+MCeFI5HxbUyH6iZrhQbFpIG5p57RFDEzyzSCYOVX1vuYCwHsvNvjZ466PCq6upjmHCl0JNq5ZbCfZUV7pPO07r72vztiUps+Jt+ABOERrO4AlmD35mzS461m+KGbjFYiAEzTbokivSjqRyxm5xCeYKxPSCtYtUaq06a99BYdey615s5BjGoSnbjRhQZ1ZI5U4n7tLsXjRJR4sNq1eEUlhNbOV4Kqe0fRhZnLKtpy38La8lRnnEV+7eGIAjd6eFo7op5LwMc+lmj3kNG7DfsgVUgOhEROJIj9UUBol8+LNREFsGBFgE5lfdkQSyJ/bQOpA15xTtXpKCy34zyT4QjZsUU2tMvB5O8ZwFuN1BghNPZxkP9WbGtKybuO5kBTaLLGc51A4mCttNWZF9/i/X9R2QRczE0SbjMDmACYRrAVQKPtXCqPOxHyTUQytTnuhe7RZ97pe0zCt5tboZ69oyFxDaU0POsVnI7hkRclHZYEIVjEg28kch6KSh020q/F';const _IH='d4a00b95124caa406536b1f718301751a77988bbb91002d9204a35f48d215007';let _src;

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
