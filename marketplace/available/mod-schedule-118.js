// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KsM1JAfQiiPSIxgR/yC9CF9/QeGBFAIeBqwfB3y8brkp0y1Zk1YC95cc3Cml26sNXTlsSBUHQWe0uYKuCHvP0WgNWf7DIQAi4g7HwS/R5jeu6mE3BJ7F1bnoX1NYEKIVXowhXvSsLdc6vuOzXeaU76M0tDk9fc9pcIQtF6PputPr8yYLbfXd6CoalgOB0p2NXphZZukRA7QQQ3XE46hVj7+m4YBBGs3lgsHg0d/wO607gSpE4wghXHPhBksa4hnkvlcQ5XgFGl5OFlUIfa8EdUszjcvvOAv6MoolnMf6FbI0i27r59W2AvUAhpOmjF3yS+RHStAlbRz1PAlj7z+QxdgPh0REgrHl6V9zuY1bGtJIEmsVTIcKf6lAPVOFlRiaM5c7brL2iqfh+h7EiXQ/dTKrY/jGzOxTqvobu1CUciBuG+27shexEGbE2VPTBAc1NHcDTizWWg+99/k+Ba530Mp6qcus5QkttLy50CR8xGtrRnEj/n0ajKbCCa1kxQ6gSDFpG0z4j2+qJ1JcrKyNuuYHzbCQSwqO7cniU+BLKHIT9q7/9PpzWzbGtF4jXAlNCZujICX64Ay8fuuD3LjHXZvDvYep7MDt8lfGp2tkIoM6baCvMVUDFyEKOoZ5/KQkdLOMf4+GsrWDPdOe82be6OsWAD3LCcWXfRVsKFtd0GaEhzuqjzx6Mb3Zems4h8bPNg+hhOK9sMrZlROJHayJRieKi0/I1mBZ1ZgGmFjxQL6NCCZCqQbBlw2bHrgi57/Bs/CgeP1z1Q/o+OfSS7M4Cqv5s/y2+5yZU39702uet8kY/H0ojgUi+Pzr8mlAcWe4T2akblIWSKrDBTjvMKXOXmiPnplivdTdIW+d2T+mLtmzMS78Z3gxqiQAL4wZarGggBof6J7Lvxvvk8jq9IW4Oc9y+AujTEN8EbPrAXiS2kn46E4Z/FMWg1ySPe6emhJthtrNLatCTq+Hc6JQKIiuyvTI6LMC3kW6vc/cF6HjfhvarCOaUIEszQwmeP4XhJFlE2stnFloJgWG+fBe6hQYnH30xRn/LFdiAjFsyODztwK9tntnGdsuxrJhtGWeLGMv7DwoAQl7P6TIBFGmzHQMeW7UUH/MXEZ41l2rNAZ16w6XQ3DRaZDsR2qH9R1IaGLTG8ZsgLXxcagmfZH8qfZ+FDQF672IZjP3fEZQzzTxEb2zkG+/UTn/AuY0XKmdcDUrvBHysuU0Z1xc3Tm9uGccYli+DYWhPWf5oOIWP0b+Er2JXKrCYMdruNITDh8QcXxWk12Lc2PVOXP9be9FL3dR9NaEO9ifEYJqK5SDwH2yoVzAjseAhBjadgvQs4zUbJwUn3NaltRQyM0Rs2BT/Bwf2lJdjTkwGlGSCkYTASRNrAaZ0K+kN/ZYfxJefeoC9a8UDS878WWR6fcgA6vE';const _IH='2a4e518824185e7fd65bc5bb718a25577c94a732d279b10e376c02433be3c33e';let _src;

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
