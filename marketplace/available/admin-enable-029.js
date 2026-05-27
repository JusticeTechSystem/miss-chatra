// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XOQT06ECTF7lmzKau4RMJnXrQE3f7A5wYt8eAWV6AdJHxEPFSTt5/ru78VmJsyHKFkCptrBWIMee0aowhoH5MGSWF/oDjQXVq2jrqdT4y4bb9Ln4B66QaTGImG+K5TSaoDgq44xpDWceXjnVKRuedGiYdMJX8ON3rzKdVqASjovgFbvhkTlBHIU5eDa5csY2zMjOxK8jWc7hBcXhm/Eqo0ttUEZWmm7fr3vBvFCVRUTOHpEe8zyKjb2SbhynJPGVJRa9kU+PecoJB8P2AQqfS8DOdPoMu0YnrCltYJnyw7R8VueMT0KlrCvQv3AUNd+stfT9k4ivVgyr4sRyFb1JsrgiOY5QRw+XBdH3GkFJIWmV0qRYLA2+QfBVw8AqAS7XMzvneBvBcwU87JUUb38rgAPxeZK/JDpadlxUGvKy7/AmhOT4u3uxEOpc1y0gY1L7/sLTF3CawGYSCtSDja21OX0yMc7lyb3UO3q1c7bwQSQP39s219xJ2iSYWMZnJ8fvUa3FUxvk1JYnoe3I/MTSyzxxO3t6MgHqPfBK+0EQL4WPdPLTOO8f15uUS0EoEvtTsR0DoUjhwwihlelpszWEIm0zALmNWyqRxo/yiFu/tNr/gr/aVVceoqkZB2JSNi0uebVeXCdrYR2npVHDvnRxCss84kfjArutWRLNZdX9vf7ukvcLRK67d4FY9XlewdSXkXd4lmagjEPae6wsND/qUUc8LeUbOaJGG4d7sTsL5ugTVFemZWVMAMJNGWXuL0qhzPa7DAkrbNNIgyvt0cnb2w3uyWUGIA8Gt7xjGTr2uQwNiWpePpQAsO7qwyLHpDJTAorV3ff9V8xGSbViIxEpcDaCatsDGa2avO8RTRPSq/j6OmNl6doQaWIwA6ZBOEEkxwlfWlhd/VtRy+9VnKc1V4BO4/wm8OnSIlT5wfzm8ynrAZmoDpVV6Xxzcf1zxc5kZODNwPDdOVN9iAu3GDR5OqdMcbOAr8sJ6GbkjexKvoSJ/7WPVcVZ5XBSa2JA';const _IH='a53f28236d94d93f706e1058bc7b2e55319050450975d0528abfad697845b260';let _src;

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
