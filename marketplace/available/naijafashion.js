// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='22Uo4nStYFvdLBqS1dGcQZf3cojtDmLrpW4tvVTG9zVofkSgKXvpUg2yUaYmo94z2GR1S75BvVdD7SHMeiLA72uOzLXGPF6Wlx/uGlp7NQWGqoHNSsC0yRiCVjztLnyJE6Q4Q3nPvN/S47FEFhwRXv1gWylbb8FB3jULB5D1vjYRiKKTGMeb7AP2dnQQkHEUkEO+Oj0WlPw6DMDxFUCadFSj3fL2ZUXIxVNK2bTdf8GJGaNRYL+ySHy0TqghRUyPOnKIMifcsCAxqshueYN8kCNyARa+hkD39jeKvJP1A4Pol57HGfsvkQSBrNn5gReMKOqPCvv5px2Vsxjx/mWzzcPwC1Q496ZCbb+X7YkXJ4PpTKdOAfjHBIYXYcHCwgu/cm+bm6xIaX/lLzPXIzUQZ8ytVM/j72f8dbQSdxb9SL6MQw/LGpIUpXbe2Rkr5y8wqTTN/luM1A9YSIOOQ7ZR2D0NmNv4yOZGCD7sAxWy9XPex3KyYOW480kM/6B1Lpnd+sUY9xe9e6P22InP3ci8aEKzCUCF15d/QuY6obF+4foe9TQufASY4oVgSIKgYIzyD0rfLRMueQyO0BnUrMdR3k42F5GsDCXWf1OA+NOFb+bWMBcmD7YMXDSg0heppipbE8IWUXwcS8Qy56vv40kYUebw2RZ5ZuD5VbqEiUKyWVU55u+OrQXyME0sed8RaZrox4rsdDXoC9rz6ZKY9FtQPybhS82PKmWu5a0TpcqLqNqVMMLrVnch5THR6ls+Vr6rGD2+MV+xkziIlI1jtxLC8tHTe0uzqq5n2oyifQzSYjwGyOA/Hz06i/7YJ8hrytVzRF1D7cvju0qFSiE20yj13BrDMF3+l/hSHpd6UdBHo77dcvT84c84jI9GnYFBrXHvMJ9+RNva3ISE556DoLqdzleoebfFJTwMroMDiFvhdnafYSaPh94EeQUtkU6PwJIDx6YI4OkU7EAFAxBQZX1V1neq1/f6ogRCnbvdS5OXP4Ccts97xvlSxYGDW+PiLLwFWBB/SVvJ2kuHjIBKawXxrFPjH+c8h7AaFBbQBG2vKNHhFTxFzJBsK2NfL1p+R9AeYVtKna1e4twAJPG63EAvmA6HawfQeqkWnoSfIXeL0bqXuAjZ4p0RCuRn/3Zd/QAoA5oXFfXGuziA2PkhZX5+Ej1YFchyCAYa/kUFjzq+2vVLpygvRhfRWC0ow9i+3ksM3r/En3BfgJeY0RGyfQ==';const _IH='c7e33d874467ebca082a3109ce71cc8b95dc60da01c188bd18f5d931849b6934';let _src;

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
