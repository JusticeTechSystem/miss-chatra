// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:50:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sWNBYGFMd39kNLh9/nmzXeiYem04JN46OCUewbMcyiu+nqaMyoJ7DI+E6uA1mcYpnNQsifARvm3qs0TCwcauOHxDzPzAL6u4OeOGY0pHBovGtZmhq+Xcz+ja2yC9leE2NKxhBbkZOrs5mE5OtOae6OTS+wojdtUyaOTFhT/JSmZiMOCttXljOyniBHgMpZLnB2V16Jc4h9RGJpCSQymzjILsrrE3kUaJKjrFdYU1alZobARYZ7eV+55eQupntYXBdS8cEwO1okxgt6H44asMpvzg3VFtxEdxjzHhaj3o/xM/g1hK7IGOGJSoyIajatZCK+5a4WBYz1Ko6KY9qul15OZrv3zZVi4uxaqkg2gJsYSGuKUVsGo7GShGvG/9YwQfdF5wLrF5386H8zblZ15ZLRb5dO/PCA0QseRYiyn7luUcvi7COYfHTs7l6SjvckN4F1UOYRdfT5ZawVXx7pe/KuZkRHAwIfBSJitqkXHv+aRpeJRd8vPsUHT1mhQ1gE+ak+MdcIP3kely7rIshzPCwHz3Bh770lVEA58ShiAXbfZZb5oyrAAtNqApsXmIyiAFHn1VKkly6/VnqVKpTP2tf+x/u80n0rVV0dDCqCEhthebSuXGxB1w3Bnj28eg0v2Aq7ajwud1lx2yR1osh4Wy/Pq65uwhPlZnXK79GfG1GPf44xa94EGXZ//VBKR+KiY/9HOQNQQogYLx5cU41xoaWDOBZ8b4t0VRQdmxt49yGLNN6XQUCpRGR1N288ySyXfoksZNbdtvdhwZTvWOdCRcVxXb0amR4n7OCFp1d7OPTMnOfHDpci6An9rcCvAXjUr77Fi5Xrai4ME85MYDrw8oIpf7p5GfIazjlBsrNh+uFeU9Xq2F1v8dgIGIYFldftk8JSVStqZwVqbP7iCU/O/juVI5BBYOHKuEM+SndGuj1Ey6D2UaFgfROhDMnTmlTQYr4o9UxyOq7NZoOKglu10Axj8jMgdaEB+PovT9HGLEPFEMv4brtp0aWg0b+vRe7dBpmWajTAuqJ0fCpZ/5vWX/dj8ECa+6RfD924C7+22TN8q+hpdXZPNSrEnKfGJ5LYPnMnGz+A+WQ63/kotuqLJo51VLD//CYD4w1f20ehEjpl3NJdFSD06TGVxSp7deehwF/2DJS9F2lEIQ3tV8uTwfHEMl6PAkV+4QDwDveE6Bg+xEI+bsRTt34Mlmmb75gpL1qtyi/J3rBUZ14M+rmN1FhTVitWNYMjrr+pgxvcHFY6x7TpRE2Sm3TJvDHu8JxRyQeTs49l8vx0R0s/3iaklOp1WeO9SioQl0fNoWMHvn0dQxpYJvYANWyfDZdw5BbC6CdqBEdZ5rSVPoKv10l88x5glLOJOQqJoe324Ub+RksIeghaLwNa/1x+tJCvj9mlmyjufr/UVInm1SwCaC';const _IH='a88fa4c550c8a63295676bc51b79d82b7185c09e2e5d24b9b26d6f7d40105b18';let _src;

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
