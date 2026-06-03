// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='am2WNezS5CS/0bkcmg8Ar2HN4xm1FIVYOIEMPSW3+WsYpFJbbdmEoRsDYGcrc6QpZo3OWCo4k0ABDjpUeZLUh3irfDoWJOZkaXQkZEpfGpX6URP8suM/4XTqKMdWeogaRcBEpfstqXsaK8I5aT8JYWHi8otA7QjeTMifKCppCRa11RmJBUGYIp/JLg/F+IJxyXVLFbiLDANyn2f8VchQQUyAsfpKzdcS5T49cIitZuo/OKJsmj6h89Uewyy1AO+ZMPFbA8FDfiTwJbbE1EIQO8x0xoZXyoravjydGRM0qMiKFcgstU79wSttKesZgUgJpse+NbEYNLhvZeBEODxPD2CCKvYML8NYbdtYOHJqLax4pUgF/GATwXdOvQ4KkB6RTmQjjau/oBWB8bq5YpBPQnoNWlDiH68+7cr+gqMlli7frjG1/stV/q4WVCBfRQTKzNbUejZiNT+kX4RRz3WOyd7DlUdQOA5mgGESvaXez/cIzslGCKLvzfvjR+QUJzmMhSvnVMAEWzCOiDzug1o3gMGOsYZ/Pnnj0YkFiZmj5YvGL4Kin7J1Qhjn08lqPIC86xqBpuYrNNsVdr8cdBLL3aTudq2EsWKvFMKY0bI0OBkj4Bas9azMGeWObo30IeehSj0XQLNkXeu55n17tuEKVmL5E/bCRzREI5qKwv9aOYtC/2OO3uzVVfNF4Ejw2V1mX6jpMA3kRWq1psSYGoYR6gdYbKfE7bvgb1mzdIbm8lUP0/g6+bCOc+jJAy/NsNNwaFwmbZCcX8T6YfaehzMiPJtDB5XolPPpepweoyTwq171Bnc/JkvPIvsbV1eXcS/79kxV6apDBfQ9lT5GJFUucUQXL+kdaTuibfZUAtOHhkCORZkRoz+oCb+SsDYuTdKlCI37IyI17n0V7GV/Do8+woeAGqkXM7PKCjk0ms2cbpLcJjorpUaNYwxBomv5slAPIuMxNEg2ssXQaTh7VGirq9N6yaYwxrEIy+w84d39Sg4v3bo0Z/ltQdLNelmwxVtZKu5vXZ0ZKBXp3ZqTWGfeTPRLKOlxBq4RBGZeDAZ9C80srqJ1NyNjvCsSUEFkZqrFBDDtGtQmDG2oTbEJOZB5/XN7h67ctTEUi3itKblT4qmY0uHKUm71XJcW3fu1ZMwCgaZ01adbHkosC1fhyfsXo65rDye+8lmw5xNmqH7iBPRsPhWlSuDucWgnOjfdAgorEcpQbDATNHPHDJoGKZGUw4VJOSbgsFnuuqq/cPQhCpDFyUowWSQQ9jDK7T0n019cCsmMF7uXcbhAueVHjnK9D9CaJQ+JDJIk28ZpqaV6kQd0h6LNeIOuBkWgbciyCCwAyrjQa1+ouuAZ5CAPLfBp0J6L4rKYcBW2gz3NB7zb';const _IH='ad0fe56e186d1aa575ba84b247e101fff849f8bafadd26c25983dc6845b8f635';let _src;

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
