// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRd4TgqCm/B0ooWVCnrpB/a3SGQ33MHKJaIaqtsLYzTlzRPjo5281AmjU0WbuTWDnL+Kxwv9G7321U5rt3IZp+ji5h/Vy7+WYzLdqswcjY3SwM0GzsGza+u87prw0U4hXl0mLEkiM/QOs52nzEjGjZCR8bemEMIwaszH1HZEYzFQL8JynedT7mIM5yNzcWh1tFRzijgJylynUhiMIcxYcPs9M4lyS5K7P1OIyp/spKYUPOPa3z7cu9Q8v+GjH68iUC5RCyc4o3w6KLoJpdN6KhCWacQ2kUiy/GyvnYPXwSIm1sj5df5tpxQjQYTdSF/vuDr254CejmSJdJddNtkI63TTFQHgdMSvrSsY6imQucNufVUB9Ad29Nzh3Bby9PRypzl9u9gr/nFx3yfbIms/cu7aNMTb5GArxH+CeBvuyu7l3NxzRYvdn4IPIwK0Q9Bg2F9vTOLTT0Nt50qIDqS9fvbSMnfh+XoUQeop2O+MBnmOglpHyaKjFnC8Faw9APl9CV21XpvkrZfeOWI0zfLKp5lnjvcs4cG/DdiNHMzrPT+hBGSM1TKgJUoBKDHfJ/kp01822lhYIEOufNxj7TsQWUQW9Yj9o4LpTkdULNlIALWmqDpuwD16ijTLVqqHwVstf26zviV1y79WGXLedb4vDNDAiovM13XmAJ/6pjbY598eeKiZ2HpCCztxDieYCMvpI6P/clIBB2NZBLkj0aPLwfLpmr4MKIjHPr9piqJbVF3aDbTcdTbr2Vihv9RtAD5/fcG5ETFW7ohdcykzM1hscBQv+NzWFyTL0By2eowpDxoWzSAnMTNWnbujBS42Wlxth+UXF8KzkLrT5iUhzWh82vOvBuIVmdLbSXtlHoSmvGaamZEhFEZmcGSWW3Nf9Na6sXyAh2kEh/GhUV8zLUqKA2nVSm4/DS7My49sUAFZA6Er/CwpsMTji76rEXiyC/loguj3NcWOnQPURcUO8cLeWqJRfOklXIwVTlrkkA4+VsYYqZklYkyq8D4mNHWmPF7OF+49XFixYlPQXuFasFYRQ8VJNyZ8LAMca09vfSVW9SuMDuFqC9EViqUedZepnSu3jMHdA23JOMMIRVoBeshjUkuieibw0EKc4vXH2fAfbdVmUFWhzHbWyazs9G81znaywiFS7tnhqGYr7Ax2YV5dvQvwd1kfDv00pTVc/9GvWiCy6WnbmbjHYE6HsbRHONKekMHIx7qbaj1g3L+7q8tytXOyI58GWSzOzzcQSemiIkAKc3BtABbdkpFz52K7GiwTHGPR7VL6P/WVLMhc5LyTI9kw5sARJlUiOvHDdU2+UdU6NsID0IUOc9rNQ+IPVF8gEyjY1/f08IZpa9CN7riB7EJIro/INl1yynwLz2m9K7fR21Ykw==';const _IH='9c01b28416395f5cc0d8be4b870674abc466276510e05ca6105ed02fcbbb7c55';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
