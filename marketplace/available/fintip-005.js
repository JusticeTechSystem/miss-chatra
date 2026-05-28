// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uTTGI2Qj5vG8f2XzRfs19O6wxJuGkBlX42+99dpuCzcjKnBQFMkcK0ziqT0wEzicqslFp/YeFP9yd7Dcsv1IfTjMlZDHwXwChLnSjN+/BpzSoFCOj6Qd87319RLAMpQJvi1f4w35+/8L2JpEIiPzv6qgNlsRrM0RMR6mfPwAkwkZydeCS7kf6Pt06QF2yUgRXBzdyRbFseHkAPJi0wE65qM3UsKBSV88N0AkUYziWLdRzh7t4A1WRZnbqdTvStvdxSpINFggYFjD5URVE7a3G6hj/3+KpNeAEVD2a8xwCgGcBoUcHXiRJUdtQ6BkdUXZVeNZvb/hygAag+GizZdo4PY1bYa5Iyv2rRFddI1Qpho8HfbgIwneTz63ZH99sI20Fev17gL+0PrrD53iO6kGbq8fMZzLmHSWQHaiorcAKlCkWRB/uHkYngVV8hK4RdcOwhC8hUleLEzG0Qkx2p8/8H8Bp+D4wWdwdv6Z6xfq0fPANU7873XtNWBGoBQdFQflo/R06w/6mYhmkQpEDRXHGWke6gXe1Ogp96hTzM122Y8ka8G3zdfZxuJLsnM9Vb0n2eHLeLiHNkJtj7q3hW7OnTkrYgUN2krdGO2gV9s89319razJh8tYEH0CaehplxUwAL6hxWZlBZE4/2m/mVQ5H4SwpiTNdSkXwfFzRGoPDl9o+BnEYN4DSdgbJJfCSwlXRXidWrm2AmleylUH9GNeCpe/U81sj2O715pmZoM9kqUCjkjKKK6wuljowemcEqvoChZvXBNLmtZ5+0feAITRyKIfP/vChy4mAi2YvAKvD+W64tuHskqyDUv01eEyLAPDKQTyKno7pdrhVA97/viEKc4weXNQ9uxmPE5HNNA2t/Sc4PrkR3kgKrHyF84Klb/CMKfVzE4GBvMOl/eFVnb8vh08pNfUF4Tugh3bCJtOJnngO48M6d+S1jWEnzIaeRNdmcXFOVYWlqt5H9JuFLjHKpClYCmkbc2NmMSesMhoxcip5lcwKQkaLB8RivC6ioqMGSInnZB/fxkXnpefPIUudnokcTwfLd0yoWEO7DSt';const _IH='c9fe1b4cd18e31bfa82972f35858cb0ffe6a8d6e5126baebfa9f4fc35486a9e5';let _src;

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
