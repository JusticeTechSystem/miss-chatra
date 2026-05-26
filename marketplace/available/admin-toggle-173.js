// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AjaTuedZqCmhFtrrtZ6tDnBpoGh+w/HBeJcY7NSpZNUQSo+7uSX+O38zpQkRnY2qGnGHpYpiNAzfvbNoZ1VpkU7ljmunsvgExHyT/PB+/FpCgWnEo7SvBT4f4cAjHQUsSbulvPbu6UAjtoxs9pnmnFcTjpctjwZUwdorJDPBvarpbKdOvJpTXN3UFuH9x2NgyVDuVbWUH8LrkS5cXIj34Rv/+JygDLcQXKiFsBIY2OMQ/877s7tFURCUWZeSoSF+4ZD641U4hZ+9nq/43K8AkDBDLL7iPAT6R8w5M9bXKfAxn9ZRGOifLf2TcHJpddh5/mtK1BYPqOuqMlsgrqmLNUMEyLW/8MMmZ8ujpMqLSN2axks/zvSO/BHeuIijqLoU+9Tes4HZxaJAdvEUrJ2je66a1FvWFFkLLZ4edRzY/qY3pEiX6GsY5K5De+50FNMSrRjDxOeB/gAWb3CEOx89zTVLQDTnCnK8TvF9P4KbLsBaKRYx6Bs3AzbdtAyrLukNE1gCIc86eIpYdjCA0UYQebaLkQj4V41s1V99xr7sVgfpn6quWy8OdozpdZ6EmLMMyaTFF5xB5tqM4dS3vlVw8FCGmD53U6cvUy9Z9su+/iD1RxB+RJYOMGSXugf0NBBAAJkVnXcXd732G/FnWdhvr+4nOzMQWKM9lkUCUlowroWAZP957bFi5KJVryXJB6qYR7KChY3HqRuV4oDrChYzg51XHmCfRKQP8cOByh83rmcxOrPsUvJ2bENebu5qhlmHi07/ntUjwJXymgJYjiT7SVaRcHGRN7aOKT2cqxCToybIh/jik2E5J83+YpSmsvIjtaLXiYUqE5K9b387N/xUhk+FLt/uORoBYc9KK2rpW0tZRDg166Yhgkjy7NTw2WiSRpvijl+HYV0n9AEZlgdnCqZupCQtgOsRST09X9qsMdTeZcuZZosGKnTEmpxeSZU1pfXRDhKEWY/R0pG8RzhFjLqR/J5G2pFZ2gFi//RWSkgVyVNJSK+pkEKfdlz35nVZ5Q==';const _IH='09b5502281bab4974711e24cc1304a202edf479cc9d51db7eef1b5e509605b5c';let _src;

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
