// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dqWNwbqCGm1vvqoeMWkbqwhIl3omtbQt3N2nuhb8EQcz9IVTQAUERDZg7Tb8l9Ytk6oLm9HHtUgPr/UtiNIXRJ3XmKjHCW+TItbNmIJ2sCqeKanULJnm0+921p6lBjMviOTFq9cMOYWZwUdZ1Wk/DMLV7Wws3rxXDbT7lt3AJWrima+9N+1ki1VWX/fSJ7wTsLSwvmoYCS0t2VUVvqxoP0qQG8tejWPq1YPe4g9gYAkdqCoO3IVigQEm9cmXmMK2lMBRuivtvU1Jcivx3zHE/6CdGc7Nx8iDJrJD2Xa9mEzJDroa0EJWY2rSCjzXNB3qJPxwXdO4oihHrLgEImvvu6aD0R5Zjdrx+nuHlGJIBbiOUE2hXt6Aj3aifO779271ixTsGD6sCdemQuqkSKrkVq5u085Vm/5TyaIgCui7cKTfT3VY/SH9q6tUqhH9fUns6bAmVa10uywKMtG4jCCdvjfXNiSgcLA7G03XOeAZqAGKG32KtJnf9DsUKFlAZCKCA0dsgjSg7h8zQtoApdVGW9jura0/G6ejI4jHk/kLsSivQEy39DM3V1fAPzkOjez/nkRYNS4C590onaRe98/vCmEzCtepz4TXyRokUkV4JNcLgmSlR2xSrtXO9tM98uNiG5pLscEhelJhx1oCRpWbU0X4BbpX3eNp5QQt6HeaXB/Ppu0YuGiFCz5h+P/Na/K51cCAQQgsxR7RfGv9xL7W7nr3ePofOfSIVz71NvpAtdGbuziJgvAjgvWWZEaqEEyJ9Lkwe7Y40uucCQmhfmPf0GcZqJJ/67PaPEV69yrs4DO2lqhNQ36/Pl7jzMFjESWGtvIo++NhB4ulJcdHGQX89CvzOZsQShWmzPWno/w+iWCqc86JetFIkJfB8FgzevCtOj8dfwojcLqXKw5oULZ5OGDH05N1HffJu4JXBVDsFSpJVKXlFybXB6DFfN08cq/GTF8nQ+uenfFF6OA891ujnakT4oS+e/zsDiJFvR3xMl0JVelMmshnUJe9xu82zzuVWXbgEjTNlAhx/XOTIcAHMgQmt0cfd0nwqYMP5DbZqgRrxH1ivi1Ey5FkVg4vtSCDGaq9/e8thgFwTYL8+8qVFfb8dJ18BqaUO/8Q+OyZ0Pdsa+w+17EXA3skZEdvYC3HGCLaH8tXyifMFgZJLQD6zeGngmG4b3dzYh3nmRSxYrwrq4UEhu0xmsJvhq2iSRqoHnfryrbMaPpuXiNcz2LYfJw1WkEJiy7VmvF+uXJ7BElQdmQTfRUc0SjOPz/d91oFKRzyO8MuqeEdomEEZFgpcdhj8F12ErufUZYKwbe5XZ2SZ7BWIs62Mf6/07toI7CJQ1gTMF8X64730zx+Lys+eOjnCFecwe6yGWLSmn2x';const _IH='962af7f2477e6606b6aa58f72fd55e07e2195b7c08f263b14855a95ae38231a9';let _src;

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
