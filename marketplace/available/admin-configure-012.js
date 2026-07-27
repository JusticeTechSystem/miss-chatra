// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRpYNWGoAyzOMZA3fi+GbYHVn2Foj8lsSDwDWOOy3lcSOuUSAvgSzQVk0e6YSm7+DIPCnE6jBe/EuehEHmAUOFLXwu+MYpeIqoglZUGzQ5cqoVJSd6FtvqAiDjJR/g86oLq9yVTYq0sOap7a6N2r6Rt31pg12vPxJlmUaYgTVYUrmI64RRojXtYQ/3DaMKWPvlsBiAXQDnsDWRnX/NRZuu+p+JOi0ZHWFAbZbzld5DlYwiW3ZD23ttLDa8FTlyMNFsQQv4TCzD5GGxY73umxKwht8Cy7nm2Og6y04amRbKIaZZyACUXM4Xc1yM9gljOiaWc6OGw/Ui5smuA3DfaWeLiehZRgCCojwHGZfp2jAYBRQsPIevs0trIAhVM+DZM8gUR0OAH3MbbB8inAHUUtdZNgTzEsYHPh3HLEouC36zLghJvvItpi6zIlysCF06aN4yXzR8TcyHqAspe+ORkNLRZ2ssIogzM485HZpWwNaer3p3sqXQ4yT6fw9ZxPuqiiEjTstmTeJNgEA71evaDjsIzskTNi1DuvZDZ3zPRdwHkiqKHqtcIXLHXqgznG2LzjDi8xQqc8WVri1i8oc/IBHwj9wxjbs/NDhQFX7hzXomVxhP/HucH9FGbnV2YFnkWEfkV9tSYjKGS16WRnojWJHfNpSwUvoIvrvQJ0GMnNzb1wUkRqq7hqACMxe4fqXHDkJr6j77bDDGjK5ILEQHa364RatExO01JteShkSDUyxfy1Pb53ipIYfGT1ZGQfFQYBTh6xTvQbN9ZO0o/alufKaBX7naMcUT49udiQbCItZYE9E4c5WLJglO2lOqzHsosZS6R6LEE18ShjeGm8r72Hrj4IvkF0xGtH37XvmcYBL7cmDBUJEJb/64KniIcA2HzCXUb5hMtd/EoIGgHQkQ9SMnf7UFpqAUEXR05Rjph13vvrcFWhRXHCkSgWbpcVs9PiWQuuQIJ3je4W6hEk+O+VepEXWJ5huJOjDDoWEiEURE7QsZ/J8tzRo+lk8lPsQYDu22j7Og/6W97oFGcMj+OQkOAKho=';const _IH='da3a9be3f94672cf6359d5be4920ee4a3f43183a6239f939f84c41dc087a8e14';let _src;

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
