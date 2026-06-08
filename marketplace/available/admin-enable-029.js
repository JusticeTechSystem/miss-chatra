// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='j+hb89YflJCkvhp0+43WrPoESgj+cxv87EC2UHNoBdSxXD2uvkIwIgEh7T6YFTGhBfFiYIaUyvVWUuSypO6+RiJ3EFXQxTVGq7Pq44FK9G45++nLC+OYr4+fEw0mHMyU/I6/KlLrg4ucwYIt7TLmQJ+QS8/a0wMWmg2mHoFC+UOns+OaBXG/NlT4zQCr7Hj/ME7IWFcABnS/zeuJyZL4YP8vWi3kpgEEvf0jxIvarA1RltjqQSI9PU+Ud6Xv9sXC+xYUaxXBBFjFumvt8w6Ox6JMZLZ3DNtBHV/3YqZqwGN24UI2mPLmPXkLdfFdDIe4cU1FbfthY4FhVU4K4ARP0GtvqJozD4kMxtYwVzaL4z1D8zpKcSFQnNb7TF1bjtRO6BNN86KCxr9BK1DU6sxgcBEbqoLhN1WuzFGHXWD8V1syvy2KAd4iAePrtva+irpPvIe+q99Uz/w3blDhRr6uSQfIumxB0JT9FIFGgJPw2T0HhchwTX7sEurjw2+LLIkx6NnD769ddXGu5GESeDvpdmUMAZGRmKMMA6WULdV7YPfQDAIywr+GvWbX08cnu40GJ+wnGjzLtNCL/e2L+BYX/5c9c1pi+8UnZQeLQHZt85tsViBhZehs3TxzxWrdd474AsB8wKsDyhjbCYs7myD8Q3BlgLhB+fhM83KXmX/Xyev6yn6PbksHQLT2addCMPt7/eibewd2+5bhPcrtVC6B1zM67azkkroHEsYrtuM06vssxAjh6J+SoGFlVFgWcEXawh8dp49ZXJn198Z+7QolM5VwnAzav1LPqCBKp/LKWywYpKPk8YvMUqE6BvDiZ0d0+RjRN9y+9BC8/7qI5xB+FToNb6RoswV5iLyJEHWG/L25aemZw8smbyVVaJqpQjQCz7Vc2eiNzq5qTvubDNQgHIRIM5rug+vQwuXkOjhSX4Q2gpmALcOvfIIcurdYkPa7q7BvPX9vMJDp6bBD5cWdFLJ35l202MHn8V+iZsPpOV+6D++s6e7BQmyK0buy';const _IH='eadff92d4628e6a7514bc16accea58875577a2ad042a924724218cdb76b2e92c';let _src;

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
