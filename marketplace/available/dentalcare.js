// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vXnPeLZ1UoN6ZrcEcmaHM4xcpTe3K2bbESQfRxvwK9ETzOV/asG18bN655ja3r6BRG7dfDOqQYh20vYANDDFJDKizNST62g3+4Cu/raViv2yw4BVgFZM3RYZ1YAJlXN0B4XikLrdgXZS0d896q2eeBdkapreuXzBKsGUOmbsPyANzrfnLuFWJwxlZF7/Ams2Aftk7m4qKxlWGdRJhqJoCj/kcmau/muGfjXe5OXquLJqMKDA7nR0XrnJBUwFAc20BgjjufyWFnImvcH4PhBjh0lmByMY/efjzcz2ORuhYEaQmfxNcAZjSnNfRLSYRJcHVUeaDkmhlgTkZGEyC4s/LCSRQg96UKHoBXE0WbDhzD3U8jmqkmWq8f/5P4MqbcAbSPhbWW+DTMXD3UMhX5H9WV/hl6kFQ9eWIESGqn8Lev9H/LA4okaq2kQV+dAjvhvC2QZBYUyFpx46W6U4t9R5prjKIylecp62xo/YNz087AqNyUv00/DVSLMB6JqpMiJmKCh6cCHEqkqi7Evgo3P0TnQbB0facPV8zzuR0ZV1ZxIIyV3/IYSLV1+s1PsTjjXSKHaviiHfJ06T10D0xP/oT5KwPWE1ietD89YrwfFbc7KCrC1EdQcvIwJMKxabNup5Xe9hkYgYfHNQovPTVD34TKCOdOgQxmzaaMQe9+pO0dFoN1ML65DhZWNpl396i4L0lvO8qpXXnD+1JUcpoeCi1TxBeCbI4JkvnG9k3H3akxsLaxvrRcP5Xi9AZdX4LGuTNN4QfrPnLzdA5Pu/R4lPzjMKL7jbIPhwgOmMXi2vGDqqruMH2mUu8i7WF9zp6miVSN9X9zEdXIJDXecL+Yk/76kOlF8AAvPDWb5jNaoWFgbOQrPWjTlqr4wk2P4u55kWNfZj05GGA1OmPfycSL06y6LRKe/fTccZk8z0WkSTZkSau/W84avyQ7tIxtzus31cJK+IXTMuDI/HtGOZQGKTBLZ53yt44E3YKuY9lVm0ZkNTi4m+zeNkDyH6YjeISR5GOXan07PCB/Rq6HSATa5DSrHMn+bOZ3rn7ffdQ+j89gn1Fhc17N4CwuOMlllElG7sfFHJdMOdl8k/Fc/jKBiMQnk4B9ZfjotDJwz06sdl406LcCwDewsQk5Q4XtFN+PemqLo2NLcKb73V0mUxQtNH3rO6KiW/9uTt7ns6fNqdzgOnZcfRvD3MMkl1C9vObGb5h+zo';const _IH='d67ab8303f2726ed270ecac555e5887943756b2885552d99d24724c105ad82b0';let _src;

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
