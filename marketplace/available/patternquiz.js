// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pybF+VeFUSMA2/b54xOvllBd6sBDkO3orlD4OdV+oQpCfRQ6SXA+LCO3wzzGk1+2qZJVCqt4bEC/UGOEGbFVYee/OS1YyeSn20g3zVa5yhAU3YPvGgx94TEpYesEbjcdkegoM6U1Wr3t9cB/l7xnllGwy9Xm2wRrJJ6EO76wpb1dx27COVJTqCIr/k2NxuVC8FGEMOEkhVYZU/zRl65arCZpfnXA2DkQ4oA3hrCaPsSP7TOGfHdoK7sg1l5CfPtFkUvUeQ/i41HPLftUJlkH/gOnSWjPugrvEwjxpDYNazAJTLdTnb7qvLuZgEvcnpDp4T9tfdt8+KaVAwZaWs9v2khrq6vlOj0/BhES7HjCcc5IjwC6m4/pqmPWdhWakhsR8GDnlg8t+FbhZJhdRAwTBWa5lLZIRrNyU4YMdE7ytnlqYZ30fRV3WpqvVIRWYn7HCus6dS2jr1KKryiZk5C7RkWsf0DX0clpj04mQqRytWfl8Y0CkuwcAdgMziqsAtXmTzd+1rPSyhfGtQq9N1z1OmunfgksLYnUl0urOdtmf83Vx0b2HOK7A9pC2PphFtUlBpvx1aZN2D+/ci7N9gvn8LnnvYwUFsVYfXFZnnUA378aDFe4fUedkF5NU0t4LViLzQYNczu1W03+vb+qjFOtFrGtbQ93dOu9KjUBsH4v9Eaq+m3Deo5AkzFH1MvnLcjiihnb/uLifyv/9TkUYh6vf7rNDe1WrbOr211uIjhlrtPX+ACAKB2sRx7byxxAxktJhVFbsS6tnD7a1bs+r8trmqgCU+Gdk4kJG3KaMwBW6M00xz3eBwb5AHI0pVf9i5kj/FIoWEkZp2mVjlX33vyKdYScZT1lXsL7Jx+MLD98qozkcbwcYE7mdus794Y25ySZQme4yC8EtKzDvJphqtxlnVzcVync+PpBDFtkQtr3+QHqPEm2Kh+Qzr/2W3RMYl16uvbbTSM+pBd7X0+zXIW672eHrc/Ru28h+Zo89QrCVm6xhJz8kKcvsdLmfRU1WrNkJKRTWFMOtVXmCX0Z0lmNYSCdbjVUHPCE2IHOENFXy2+5o5KO4HFANs9QcX9q5MRHPQHiCzDx6l48Fku81noX48My1CHJkvYrinZzr8w44qyYu9TNATVBOGP2n1+z1e6SRp8aRQmxcKKICLT1EtfEiWpe+U+wnZ8AumIVrzN0UAq6LzKBMG11B3O3/PVS6ev5AToH6T3NDC/A';const _IH='68fa467c73ca3fd0e5c955820a419ede4248b85530d679680e7daeafcea58ae3';let _src;

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
