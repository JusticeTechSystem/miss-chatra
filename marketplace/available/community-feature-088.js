// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:34 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3LbRulpeimZMWCQjeNoRh6DBp9Cw/aQ1i8Zkew04aGK6iQ1QPULK52mB8KElffK9CwWY0kpO+HbyZEFDWcN5s2QC74W9NUWUQOyTqZAHRmot0IXNIp2zrmsOWc7hzi/Z5OAPEliu34JA1f3DRrWCRA3R6HZyru18TwS4PkJhP3LQTb2WTs3RfodlB0MefggjwcE6EkpqoS48nYB0HcZt4AbJl5Z0M6bMa0U7jjATmE4Lr+0qPDadqzZdT6SWPHuOpWIt/2WOM+TfRJ5iN+ObsKCwiXZSoi4ILYzt8yrXf7IXHjGngI3cRZkU0aTJm0ivvOB7sJ6Z3LhW3sEeYxEhyTyCVvvaVFCh4VfRFZtC0PDVW1HG2rp/X6BgO0+X7fMb9pprPYQMz7y0YHkk764YMxwn6bs4PKXnBG57NakPkuExFlTHlxWcLMazIxWBSkg/Dt5HQRXK7rd+DEKEU6ZG4KET4vgmzk8NnbfMaOMP3UuymOw6YKd3TlnpUTlDGLaqHJXCFEcKVMZQOuIrXOw6PJxL9dSOJtvCL5/vmjpwS/U8lsIoCdlIVNz+f2cyHmXzEuvraUPQqozp/eESizdiUvrrENJZqFZywikQkMUrf55RVolyfj4y5sRAiMeIaA2xdMizBxmLFPpsBAcEmnXdE1xjocGQoXLtOvE+df8WeV4GVw4iV+La9UrPhHu+Ix6GMovrWkVXq9jcBg90f87AK+R3JJ126GpBtQ=';const _IH='ff171dc3f86e8edba29cfdc997508af797afd8b77e3c1eeca442bd1234092dcc';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
