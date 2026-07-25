// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQQojJUSlKI5y4FYNvzYin+Q3Kmq4kr3xtOx3pc4Y8pwhRBEDGZCog3IaVXoQm7Ya3y2lo2nJYhkWF8SNJOvkIPIjh3jyYb27WkcTkhDbz2zXjRHz67PkzSSyyduh/MGydu4tKZ0wyxSU+C5HT6zbl4/JzO3cAEsxljKTUQurxvsyOqzRVRTtZz8vELIGgcUmlh7TQpnNil0Ho338kI3T98Iw7QIEKzZcUV008rVqggEb33hW4TKYrn9WWFAML1cOp5BjmqiVwmsFkLazvl5SSK4BTG7RtmWB7BHpvk9EuSiea93RCg2Aszqlvj9wUBCMrZPKS9j5sVZBxg8j8w5nrdN7e1KRNlOLUR5cIxWFTyOUIT2I19wbDRqAmE2TB/rLddhmrqB/ZQuLMuTjhi0SJrkf+XJHR+MLxSrZN6f5giqu9FM8DEV7YY74bcs2ZM+wvmVV7VprioaBbgtBGJBhTgrm/KkdpPD5+2aG05G64kXUIZx0bSncC9GAIs/djEK/uUGjntw8PtU+q/WY20lPafF2f7zTpjLo33n/pjau7O+52D6zqQNh02iDAIBSLk/wfhYHOkrWSuTuBPY0PlbPyCmOr9QgjNd/SBnsoIiuQaPQrBgzDZgxW6wxipk+dM9coKcNtZPs9hg1qS/J3DbOvTgLJrNpwRBfTGXtfC+uKk+UG4ogbx0u+hc8XtvmSq3Dle+J/hltj+nVzxiLMPPN13n2wWvQjTZbE4BthDMmqZirzB873u8WZ0cYev5TWspOxshCp5q9RdsFn0MvUiePN4eAsjhl8lPMDSGpLBCwfhpl36iPfheo9M/VLDgQhg7bQQmUto6HwSUwj92ukB3hkoVLkjKY/E2LmKZBQXKRR58JxUXazkoQsEBnqUF+AqOKPxk99e/IOmdLhjPj4DKL5+93LbfvRKwueFsEDI6WZIXaeCuBnfiImDiQE8VyWTjMmxDoCy/4wzb/NR9WQWVQSRUDhSIApsr4fSeANs+INNE9XhZiUdjeGpxhB5xftqhqaQIenpTRx9HA8P1MTZfym3LjFevDTmf4gcmlamcrweWgAkJUwBzpo6kCR2FV1nMazgTv8EdPwMur0TQZknlFVE6oQiLhy/thxA9DQIkKhvL2WG7GlZ+quimli8wV5IE8ElZ+4rZ7dyZ1BgX1Bnl8Tk2vIdHEFU1oG1U7ufDLOd+DCQTFqPLfuVEjIgaCPrfd46cXQsCLzpNi2Po9U+6SVuZJZaEKV4gykfKK+G9ceA9/0Vy9yb1O0LZ8p9bYNZA6yLQMKlrwwXXkLGsQQHCdFYsZjabmTcI+Y/A+UZBShvyIHNIiX/qtnOwQmEXGgURTR7i7hr8A1VqIWK';const _IH='41415ca5502764a1f01192ffaae9562e6874e7dbe33bd9bae6d00ea655b717f5';let _src;

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
