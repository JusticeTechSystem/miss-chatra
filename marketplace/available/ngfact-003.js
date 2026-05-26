// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fB8zwWZ460K2hA11kTNhjD8+yKuGoyl4epfEtqp9FrQI+Py5MYQapNz8WYZC5w5KaTInFIo+Sh8/TQOAhDzz9DNWd7FLs6slG+HeJ9TQPjgCq05Vv2lN7trcAh08bb12Tfr+6fn1fuF3UISsdGjLKds6W6rFTCEjXXP+ZJPFUTIrOJ3wJ9YY8LBtA8QQ1vG0KD/S8f9TEO5DI1qVnLO30OrDBu2aM4malEEpND4sfeYh5mC5/tdRD1aYJKcI1zgEvbTdpCQL2NNfPNv7uCpQLLOmfGrKtp+YSYoUpqGtq27rsttXX/E8mhGWQnv0zluHOowk01Jb+OkGsVsXQ1ZVpCmjbc02lqsERLEDNJTfZmgM6HVKmatqIcglRDBSNrzVJ7Z0h1+pDdj9TTfLd47ZGaDGveiJXGXJ7KG7JRZLjwYS5smsEiqOtnCB3I4yG6hsArb+D8W2ffBApHGleDAgrHeu3wv5bg8hLCuIhs+54YUtPZNcoFr6sRuaBhluJDaeVv/l1nd0ErxUnap5W5vHPjpNaiCX03EXQapIeaWqo0hE4P3rhpx8lE2azzljObB3aoZ7Df5/NCKrWdx2gybj3TwetbxXbfg9CDoI530x3fvJ8qLuxTpMB27/0/Tt3ZfqYLtc83UNYcd08GfGE9Yi8ZPy8hlzAu8lcAX9HcUbf8HP/KDZuGPluCxyxAws/TK2khWyzvmZ3wdWMIMwq8wF0A5Ib6sAp6B/qFSe2zqsnTw=';const _IH='c111c064eaba17b2663e54ce4b8b3f3801bc5579c3c91de893a412c79e1b01c0';let _src;

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
