// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:42 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1qeMnltTvUrhjlvtri7Ecu2mWg6lcXEq6QnbLEvwVzhsJwUI+JyBzTxXECaQTmTmBHSPdsWO+BxbuyNDqrJafLr5i7HkLghJE22ZHoUGnxMpMcw50ditVOGONekCLgRURfQUBtxZEYwIJtk+jt0e8wbeOpHt7yQ4yNJw7P8jFJI1iwhBtcsJdV6mBn2maIOQg1FDh90Qs6e+SCt1fV/KykLbX9BBGbN4JAR2U7y1Ryn4T2xMAjjHRaUtb1rR7It6SXqyZ3qJ5hgnvscVzF8GvehJZVDT/xAV79BJjRZjRcBcLyXeEiZ+56dbM26T4fCOtGY4r75lTkas96voEvzjTNG7h0yPgDiNl1mFtwZmYnoVtkiPf+ayGpC/hjAw4dxSNarJjN8E/tH4MkILd9QYpBdlGgnmDF1T9J8vqod2Wwflb3rnAhMKUxyl0g4Ywm9e2dFzpQSqDsGcnYDS2/vOKMINZKlQBtvEl7u0CCvwPsU5c6ZuE6tg0Y+qMSF0/gi68xijp+39PE9TuqTOjGjOqWwqaw3SsZ+cFcSacA3Z33aV4J78FPhNkVLPCqEXCTJf/dDlkDQ3CC6BMgaXWQfYvU4Vacddps9M2DzR4hySHkxmKlnmeaRE6tigIno4OvlQJRCKHLN556dLNU9ayg+VMoi/a9FjeLeZejkNGw7epu/M0MnOEQ+shsjPGnbkYAVYrHD9vsiU2pklUxOsBVsypVHg0JvLK6MlFLhhmv6edzGL+sI+RyhWhfYPQ9hmHNPqM6bPNctDkF07gyP5GVsyovgDj0RuuPvTp39sdJq4jzE4MdyPylaPpHb8cZN297kQCJbli0vdOGSz1kHMNyX2Wvol7LJA5dbao4Jzsz+yp62kal1/xwoYv/+mKeGVZRcQLTshhw5txgxQLr6Ytu6z8BRQcLWjoWkMlO1f/fjhh8zOHsCrD5zsvvNQwKF3AJJrIqEgGeR7FJhR22PuFUhSNP7MTRqrSCnC29u6tkoZQ7moaZyya4xC1XHBrdvA7X+e+ytLqA+AOl1AJtFm0TFm6WVWI/92nJ8R0AH1J0LSfc74Y7o3BoLEyi3tFMMFlW7jPSs9YblVoJz1jYUldFtI98EZtTNWTTsAGtUxdgJl+ReFYHGWHDsx3s0rBBJrkxSC9bz/bLk/my5A6Rm0NwUwdOlVFdpBM5SaPV4pZzZBNf/V+O02TKOK4ThZ9zRGJ+MAc4SwxhGKl7lGA==';const _IH='ea09786a96070e35fc539b09f567d3e4ac2cbebca19effc9202f819a4351cf48';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
