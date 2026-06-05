// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VrQtzZqXhjj5mvpMzffWjLWwQ2228ZaRmT1Fml+FbmdrnCdBF61h3vKgvK6xhLkMZmjf4RyLGWpGr7ygLQSHDSBqw7T6F4S0zbINT24rKxKUlbg+3VPLyKpj4YDt3gTYZb18QV870ypIqT3WFUbmbazXIIw5bI7MmSjO0zShZw+e4A6F5KvgWb5FLhBkDPCXRK4y/DVcWmqAiPPHK2H0+YQDZmo+AwotcualZ9brFrwepol5MqdSJ6dEws0VD4WnTWyyEZsGnQ8tutliETYZ8xg5nL0Y++Dh2TNbWzJ8R2/OpCwQNIoe19UD8xxfdX4OeFGs/HMVkSiRJc4ip8GFn6ropFZWvtkWvIeySFHXbQUlsUgc8G29xM2+anii2PPwD8N3nIcUrKCmY/R0OwzfyqoVFhJjDLcZ78Yhs41cfyMfod/H0XIb29B1232ZedEfPvtYxrguPwvZscl6xp5Ojc3QNkP8U2gMi2/EfzIYaZub8mBWkx3TSI2M+Gmzr1297v4XU0zrAj63bMbIpIbY/bBb2Aq7LF2QgcGFS5Fm7IVn3kZ7yIdLRCEOQy1LWpej4itx1f813gdRaoAda+z0/ZeY6lnpf0cAiSk9h16SKoq+RHYZwHaLaNLx/jm23k8ihnKfIsob80f3Y79Z1FkZaE2XM6jPVI6QZ4Q8dOdBCzqs8JZuzhvxR0dPOM/nd8lzCifjOrbHPcYpPX2N0mvSUEV1J8UWW4VKj+2WJBpH2KfEnwotlySJPAzvPYIoXWWqflTkAMND+2vGXQR+KdMtXizTZ6ERrW6KwQKKs5hbQk7P7chfQSdTmar9p/QDe+g4iVMmVV5zXiQ+9Xurcrp83rRl9C4phow3pSC2SGfk2mPxEVfAbOLlJgNiU+bkwKzcX3eCmdYKtBJxZNWwTE0Q4aXUWpG9e6S5x1JnNmq7V75qHiQfxPj7j3nYApXuA4iAoWwpXGnS/FvtHEoBkBtfNFaVnrHJ/UoFxCzoOMMb+omfxugI5Ev0EfNgys8Ntw4Hdd3jM5itRXC82H7wi7n/gHxp';const _IH='36a863e27f88c1138643905798b35045ac63a8a636c3c348abea9ce90d67d865';let _src;

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
