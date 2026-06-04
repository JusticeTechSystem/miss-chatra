// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xO1iD0Csc+DGm920QKPXtwh/OCuxL/16L8xZnDXiOE3ZqW8necHREpg+HvolrrrJj5U4kywToL5TePgUyyIkzeNyFmffzu9TgE/jqCRr53CTfVtcCuoHyd2sPB0vN7Kd9BJ37laT7lvIupu6Ppdy4HXcjBjNXSKIXhqZjzQEvsUOPFWBixcg2j73yZcocVE6vGueWTlwrnAmgYwk8Yhr8+YPOtPCK3pQYlTeyPjL5q2noTP6cS9Nf4ve9C8BWEi0jqxJy3PRUP3JrMGuoHrCpW20O2NRMdZpTQL+5rXrsQP7LQZD1Qlv7LM0ziXa4a6d2BMs6KkBV6w4hqabvwOeNZLEYjOWsDUatIeXo//MDVSb4JNNL8D35WUUPkK+Qzeg9XSJ7UzJRK1Qh7nkKAH6WwQSQKF2QCGWLhMz95dbRrPnOgXdQ+AE5gJIvfeT6UwJbMY+64TnYxXpX575WDa81aLBXoe7B+qsKD64xbcPTk/A6xizJysXmrW5aqzSChzVfaZ3yDQOTd/H/msuSrGS9cb5iAxAVwwFimrZAHtT40zDfnryULxFVNtO8tu5ENe+q+WAUuN/T1OvwN4JBtC7p5WW6d9qhF5z5LsLpHCStiZ58v8BxJNyLQsAaYcn7rt6jBlxKmDk4HVLQyuvaUwlFMJhPGVA57cc/ApGWXA/3hsph0IM45zYiwhAZCeh/3FAhkwIs8XDCuobsW/T0+JtAHO0M8V9M058Bk9Ehvvj6GFygrMoRbUDrDI/ECiLklRtx4qvPjPyEAxsVahlr1Bpinp//SPdz8nFdSpF6MgqoId5a8CzeiuBYTNW10LsANLWiK5FQfSvx+oniPEmFe0PLgxOqghaLwJIcSwAQY/wxCK0ITNqGvPdmollBPxz73clTf/1NO9YNALyRjGasg+E7rbMakq00z5ioGWXB2oD17J6TsBeFF3r0j8A9H8YQ89O20E+k9Is1hJXMTThrJrf6m55IkBR47PqlOH1VJXRMp5a89a/A8wQDD9TURZ5RZA4tRT0ML0AHcL6gOi3gWFEToet/uko9nb4DBxMBfNuuxVuwks6E0zn9UIeVLXa7FQZwSoIwwawuXUTwk9pQPvgiNjEemR1qMM2Xu7QnunI6LYydLJcBDh5CvnTNu/QKRDJXFvUcEWY0sJwp6UdKIkF/p6Zi5kPWwDFgG1ulHOHhhdIv0SvgDd4APcBYPhfkYhm9GgE1KkyOOa5kn47sLlC0G8OcLaj+TfDCvqegkmscKSUfXfxpnS7I677EHBNSNB1z96TM8tA5Knz0Bs+hQXMW7k/MSNAQDjLmpGEpXzh2disbESuTbtCHSbLakbyYA+Ri7a9rScLkh0KtDmts/ij10DMh6EdBOGWp5LpGboU';const _IH='f9376dd4ec3e0d034396d9c07035ee88ab22296ad45a0ae1f4773f0cc7339e45';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
