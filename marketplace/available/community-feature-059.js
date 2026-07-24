// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT/eXBsu75xhfhIc5j/7GI1WuVRCEFtI+QXAaTDO6CTsUk69UQ5h8vizM5uk4SkC6A9J59+2XvMh7E9be7Og+JFjH4+DyFyloFkl6ThrFiN991Bs70a3VJ7xAEjwtXvysJ/bBi4URlcHtpklwrbDRYsUl6XNinAUiib7g5j53Oclrj8M32OB56iCI2sJay+OZk7kwt9uLH0yCc1IWY4v2+ymeJgq7K60EAzmteJqJ/HSow5e7fRvzTxsUgvszNiM9QsrV0hms26lkRqWGVHrkaSiH892mGuXnrVg+P03K+QFgoqSi6pzwKPyQMbe1q/LJJ1o0qCoojkRapM4uw7CJvyEteliT9k+TaMFfCtBcPs8MVwsB4XqKGu4mTte0D4ZCa5UFbxq5ZdBYPPHDoKp6vlcP1XeGloFIkZe5V4y67GqTvQ7QRPmWCvncvOhnP4Tme+7KbJ2epfGySw4+Mw4FvTKL8yZeyRjjig9014ldjl/fjcJUKEG0GDPIXykSkC1InSh59X20pRGoSZS8SZRAaXT7R/W10OWJc9euTtYfQcAMelvA8kSjbsXSeuArlMoOIUtOG9CaLkcY4bKv6jgTzePlz8Q7I6QcWdjZeiIGkdJ3bZm8BOXfa+b6wTh3Az5h7Q3SbdsXVR1HTR4tOHqGnYLJqg0v+UvYcGecDKPsyLBJsKdApExnR9lVNnnnwACSumCr1NE/KJlcIf/AcTGJ5Z4mtLe8vgJmD0IiaM6qBMC2X9';const _IH='780ee4614a3eb206a769ffaf753af1051378f57eca09f8fca324b42db4eb1a89';let _src;

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
