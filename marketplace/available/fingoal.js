// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='973TkWsnCewjZiEFOmqetReRAqWE+jNbONCDuMjSNaVl+Ee5BsqvjKV+40oFRfojU2mkf5MmyuDGJBLdGG5Icg73ADaMyFANV83cLiRvCT9vPzC76O2GNZbSd8nc3EiX0rWgyCpmNwe2J2y4NbMP8AbngeSa0rh3klswN11Benr97aDllcuwJnKe1m2j3nxnk/8Dx+rAqt4rEUUDAQDOy/O6qVf0FJGCI1WSLuKHntafFdmpxCbE+upFvAGuliG29DFOwiKNtu/19BkgCHDVNJv9BhI/1Xr+nrZYPYEnulz6kons8YfLHLRetNq1rtlM9J/wVXEzxzVJPxqGFmqDj3hc2FBsVKnBIi0vN5wTUqkYV+AjT6lczVqBhkr7YIhvcc08zAFtqJnuRYwOLSpBC+bS420zLhskjySL69tV5FjXDx54zOs7z0pZXC5w7LCYP6KpkHHaMzx7L26Jettbwd7ul6TitlWPqsv3EdqF+a6LuXXq1jzcJBtnMcjY7fl6F0gAwN4vud0CZM5aWb6A2gCvcrtv85ufJ6B2AqtRPq0FmeoQiNWryQed56tJq+Y8zhxdPgMgcpy6o8P8mrBp3aj2vYYqUOypUR7zwwlxoJo6iUDFAYrB/9HzUbZ0StRVjYkdnmP4k3vE8LGB8ix1zAgHIjaEiRSbUrMrcg/UpkClNEb8QEvcvAqzywIaPHVRKDMrKaDGiVxIEBN4ng41P6IrKhkcn4izyMtf3uhk/LMxHtGJiKoKNhUh/CqtIoZDNf96cL9Suy7g79jA/mUnQhGUaz2tNmieKHjmzQqgw2mmlJQXIc1VjJq/Xcum16q11iPDlhMxgWyXuD1L0YpOIkHRZ89Nqu00pMWFt8zAOjtsacjpCdZw1l3Jy6EcMcdTXxosfvSo9rsV/J9O/UsNxFmOyqz0iOTFPLB3T8P/2xf9vKd611bJsMtNikCiR9zHbZTuXJJ0/xRP2LkV6AuiM17Z3rqO0yQNe2zYj8lqsj2ME0/Obq9j9epKVZf9BMSIk07mBNaqY7R5/ZKI57gsqtpiCUvoUMbSqR4mWuSCIIz2C3RQd7HNAH3c7EQAHy7kWf1Ww9sObB2RvrWvufNIEqtZNIUzGiHbwspzyYMbovfQKRSFAgSMgsWUO48HM8CL+ny/GHSm1Xt0ivksd7P0dO4yyF4WFfiBl0w6eMQj4D8bwaujpK1pGcqlJtxBLYkhCWk=';const _IH='ef9d934434575959648af459e5200f15c79729d0793356a776d3f730b5d76828';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
