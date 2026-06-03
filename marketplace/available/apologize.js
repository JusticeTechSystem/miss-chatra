// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/rHLLvJppm7/QjbHmrNv4MaxJPAeMbuP0dxtQP2dX3m6HWr7MYDv4bt1TztNzkkisDZr39D9AFOA1WkVSeC/2IS9PHMDE5iPxsEAuxOnltCiP5rrLRGrfWC9rjbKkvk+zOjfaLVbjkbQkg9rtjNjYNERQ38QMH+7T6v7yJfO1u5p/kdOfiP1oY6QAJvKzEjNCqIfXj4sb9yxGFMemzTSLW3UtSqE4tE5eJhYu6bXA22PEkQrVjJBbudZTpgJXvjy3SGAjid5S1LeZJmw1ZSARP50wmWWDTDkqdvT00TNNVoRQg9cA4F9CuqHR3kincwO/Uj2zjAYTKXf7bza1rLmlzbIjUGUucF877+o58MUcYn982kBysXcfbFn+1j9+Rh91faeRhZR8r4Fv7qsZPHYIY7Lq+MwOC5ia/PCi2PJ1YKkXydkeMgB7UAgMFyrs4ryF86EVeSFQDJEkdhNLoMPUQehn3gVb8CnIbMWQSODWEQeHUgvYFyQnMMBa6DisQvTnNKdCsgqrCVm4sz2yZvznz/HcwqUdz2SVar7JYUg1x9y69e4TUPlNPWcFwp2Yuyj4v+pWoq4V+sBadIr9rZmkJANCWcDJpIOaMQbUmS5McXb8AInTcSsvHibE99wdvpcRSeTS+Nd6gdovBqsw0bLYqO01rh3qWatn+FO2LRz69MKjEEMYP5ici628KDjnnHskEoZmfGkbbp7s38u041kB5pNWoXDXvc4zZeeaELI6tA+y5bVI6PuJ6XpVVANv1Ooy5Sb42lpAHB1nwDWLO/yNVQM2kVw/2qK0LpiecW5I+Ck7rkK1pBuBY1sPSNs3d/bmYd1Q+8J5rrXJoP5wkiN+3aVhyNaM3LzU8j1U+SnO49m5zAVavG8Cz1ncMrxXqU+cNFw3s07xfG0GYlgLNffRpwBGYKPAUOUYhafi7AUNw30AEyN+zQ4GYEF5lzhsHEWlqDhIVyKovKQOrJ4IXZrwo7fcXWDHh9LxjH+zkPxu5BOj/frxiRy3ZTK/gBFe6LcdsDKBLuEU70pIEOD0Az/u8rWFQmH2gyApnYlZgDi7S/xr7s0sAPtHC300q3H4JfenXVJc1OoHuKliLFGJKTllVyl5ypbE8nXUBTS/56ji2YwXoKcwSobXk6hRV0u2YSw+1yotw1pFd7+3CAxK84CjbWOWtZnalU11MaIVBwA+9psKynndLVwLUirV8F0wkUow00kwQ==';const _IH='140da838cb147debb00cde1ed7940e2fb24693c34f7410f73aa61837427e9902';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
