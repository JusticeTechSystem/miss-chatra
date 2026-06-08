// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tv+rDFTv0YUw1+0Slkup0JGBzhxL4ROWhg4dLbyxJ/CbHTwbHaqxpr87D8SohX5eJFRl3gD71D3tQ+E+sUP7ALiHP+JlsxEg9hls/N9CvthuSFQKNRD+w+gxmqkUPBsSv+IQtBo9OeAGYbiBPiD+Ao7mQfAQ0sZCc7+NVwpgzvIMuiwc0NHXSwGs3cIvKHFTHRqPvoFndsWyJUOhJ/LY/xdaPBK+JHmgXJxrwVRjt9ZOoDRRvNDpFXRnYZnfRlstT/cQSajzXLK8Zmgx9TfaGhbdxkNrL5Tbi5l0V/A/UqWneU54VDawPdPuEUmRYusA0T1g0kOCGg5kG1ohdA+5UHNCqU1nMxOZ3pW5NAC3ofcPO5gFMdWpgr1CAU8tISMVbsXh07P49tL9EWDDVKHKC43VEhIC0PG3mRfSIBptk5z/zd4FA+4vvV3ZW2usTnSIEli5YZmSqLxwqhlXTBJjZcTVuVmLcHZ0qR/yHsqDdwZagWp544z3ZimtNaZHX5joxSJE/nm3TKoEzH5jp/PmT/OINuwAogpDwZhOsUWe5WQ+TEOwJ5HOthn0aCkgLWaa7X1aiqHv/Krbx0Zek4LK8RMlF6nAg6b8cDSK36XWG/8nGX92OqzGVGu5xjAQpWj4TPmdWiN2gOSFWot+nlTEbTqlOvbxoJGJIhG/HBVpknBcz20ADLmI04JggkvzgzZoE7vMMqTwz4SxZpR0CaQm4zKTuzNblqJGMDhf73iq1sxpES94cwWstdv9cyAmv4Fq7fSC0m1gdQDa0a5i8258fxz6okbKe3zyx1Q2GULNxU9kQosH4aPvMfT33rp370Oegb/TZ/xhOgUXUoVd9xtO1sTTtyKPXIElMVSGTsZnbRJQuySM64sA1Zy2Zqd2dc/Q+wQhTzBhDG7SBGlNuGzr6vRj29E0FuDUEM65qs+pv3IMnkmEdT4ZNeJfPqd1VUarIa9ExjrVEwEaA33ta/buw59rpitG9u0EtJk/F3uHzwFbGmILFm4oeVUhN/Yx6HMqCWDrW0F53tTzzFHJc2H5NePeHoYn6KGmJXDXuHJ2AirJGv/Zr3UWSXteYZaVPpNWaKs2j6qSI3KChiHJ3Ei2yV5vhfX6D8ZRDM2t4carxVCzjgPHaCsRaJT0DHabq/kHHE/rsgvbTWm/52CEHaVeoVeWR7VLic5CO8sdiTGSvkqejqVDzSVSS41f7dIpZqEi50QOPsFeEPxGq1deQoKKZ0ogk8f+EIPdXUcSulzWJ5dTx5CYwBJMz9yoC5Gu1Xr3IPGyWkKZvDM8djV93iK5uCs8QF6XEhhKH9IVZxcjZNXVk8kKrorRbDL7uy8cmZ58QoUJNGo1rEX0DxMnkzAkSqLiHix9E7Juzg==';const _IH='9fb1817d17d60830436c6ce22a445b7e6acceb3896db68b5718d0b559fe89612';let _src;

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
