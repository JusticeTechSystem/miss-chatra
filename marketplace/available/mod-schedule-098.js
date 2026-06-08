// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BZZeV7xzeLupYLzR4LY7aMrr4luRD7lp3Gpe5g+BdVLBp5FdAUkh1CzQDghPJNHq1b82IRRB9IJoCCL9SyzqsSE8Ze3U1SUtZikQ+4nMhCSsTq/GpsmBrLJRZVeVbcu1GtO+JWH9S1/rd3NgGBt/qvfS9+qL4m9Npceuveoe/A0HgUCxFjEeGJIlAjlB5yn8SBESNdbyuvd3mbDaLgE+7cv0tOoYfbIAAJw1P+8guNnKaMb+YUE7OQ5dBcBNARhqa3EBPJEZJwBT5qX5X0ug3ZDnn1gHDfQcc6LgzyCBpexmWoKP8C5JLpMPqZnSc0dIr23s6SIY96EhrnX1x5qB05v6kEjQG1ZhYIEHlAEqg7mTuuy6SDSsvx9I5iG5kwMGNVVLxwEN+YLcF7KK9LpodbhzCcUNcZIPpCUejSHMFu9vATjUu7iBj6ccxiSkxwwauJoIk4ouhNUeEmKCc44rHIlNZlUqmg46ZD0JdZOQDBbPg2WgnIo81H4+StGMoLhYczOPFixtuf+CQAFx5aNo0sbaM82EPTARtXkzAROCMY5YwRPB/g7/Grixmn4Il5g/thcQfo5nfDd1k88eN85aVfKC+ECzkibp71cf2V8Wh764DaiqbmLOmS3DmIK9+Tgy8W9yi8nQ8VThVOOP6Rbk7B05zodFjbh0es9fOT6g8ycxk8VWluSqtJCVvqXeZJ4I866h9YIwcIriCHzA4E/3nPyUhXwahe/9p6h3aP5lROolTdgrnSEslYm5BL1QYtPEMJ2ht+aYTUI7XRQXHLXHJNcyuhulu+TocSC3F6HZNi6UdrwNLr5J6Q7tHHX7jL8bZCqY8F5j2aDLL94E42fFMxQ4UkgfcArEra1Mwwh5hUhLOwkAKIrShCFaNgDqAxxUvftffCEv27KI80cEFvi/p+N1U6cvW85TMbG3KMUu3//TwBFARfrfWQtK0iNSsxKHFwZHEeaL8r8IDrvRXdDWKPkktHCogkFMymfKMWVfU1JXGtV98NEVWXOWER99mR820ovrfjdYp5qW8wP56b/s7b2s+slTm+AgOZxj0q5DG6VrZApacUjkqOvEASz+zRoC5CDHmd56+0FyPWu3DiTi6w2bCx8Ff21HFCHMWJRv9QTBFF4hYNyamBmfHOe1STjPa2M6pnmvymnr5NGeJnCtfRi7OlIY4w6/NMBug5xffEvnqB+rGfXaMK59Y8cIG/MxPgaQky7oulh75ICzdUAoeseQu3LcD930cnviuwVdZOVkshnOW6WBsSnldP5183vGZyb4egJhT0AX4VqKe9YrJrd8q5dvSIsNfluwiwNpTwLdLmC5WBLe5beIm1io7+2oKmWjykghI57hIwJslao76CdMdC/LrFYvSqjxKcCjT7ztXTPzAEw8atFYUlnEWwmyaDDkdvDx3Q==';const _IH='4ad9d746a3c72ef9c5b0e7d216eac841b738b9a0913350abb966fd3f2f01263b';let _src;

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
