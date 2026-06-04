// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:46:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='D/VtPBSYwFA7rSK5dy9fHK/4tm3VZY2PF02njwG7ZH8wF4xcHpt2yXgFAbv/3B86+m+6gNjrcumTLT9wUtNGLplFuEApg6p21QJLQ0IWzQE3tTe6dopN4UuF1OFVm1X7dv6MHgpYBIJ0h8o2Ar0k4R28rGUAatCD3NaB6JMmDPv+4A5A5N26xEYwvT04de9u0s70EpoR54ykIF5lK2bow2JK5v8KRuvFo6OKYij7dsKhCD1IgZA3DIy4vOKUQam1sOqhI6/hA0tAzXmz+Au7IcF8K3HPC/VzqgkvhG/tOMTnmbCpl0eLOLIXARsMu+u7QiUwXnQWgO2KT+GEBVZV5Jnb28W8DZqbPvJd6WyQj3j0dq34jOT5VQ75VbHnFgJ0aPdnnGnP3KgWXqmx1PKfXhU41Q2RYpDT9msZjYSEh1GAYee977zlmKGWopMxW5ovRnUaHgyX0UXX8XEm9P2U4dVRZw3dtM76WuMhpI9/pAcmXnk9AkocYCa248hjz2WoQ847UJI2LpltKye2Vlur4ou63B+vD9TJusLmTYs7RZn8/eMslGrV7zrjUgKsK1t4RAMyZSe16G/vP1dvECiGsCYJ2eCLJw9knp/ZtC7Pb9TOUxqiS0gOzvtksc5k38+8w1978n7RpP4SdqJ4NTh7CjRdgsRKWX4kiuHvXP4LYqGA+4XAF3U04h/cZ/gNJjfMgzXqIfMhYJq3VDE6vnjQW1QSw/L1kVlDeJiddTyQkvAqI4vPGaN1S4SHILkLPJmlV0I+47/lGtElNelf60BxPoGAiRP53xyrSX8aPQBL6+vidF2+r0GPnkFh3oPcXayo8Ak3jFjL2wrpgBZ6ABmE+PTQnFIQq5/UtZO6uDIv5ZZ8RTG8/1mKTT/RmfQP0D4egO1yGNUlb52LCB+OyXvAdx+AC+YVX8rLo0prYkTkfCvHJHMiTPmf2sdJ1lSwhz9zTGmMof61KbpdnuKFtd0dV8h/720FY428wrp8acTY1nFLlDxOVwvyfVszKCJJNgQHeRPgHj6fe2XfitPhX1Mcm0GiTWEdSBG8KSt1rvTFF2Lo06DUlIm2BYK3KRwj2LNSYwKWnd8iIlvXarU8JuPHC+NCaFGQpCjiieRzp+5DYO2pGoXJihd2MFOGzK7NU4GWhW91FIJszUKAbMXZyEaBPER6BGAKcuW/c7LpyrqjezMjzY8kxkpNic6r6OELHEV3lcNoX8+CBigW6L6RAZAlXVgck94Up5ocuq48hYUmnBlPfdQaJ+QKGzXzXwthhElAhjj1Ozp+yzVJ410fHwYnhZr5+ZEav/ERTDaFT1TbihnpL98QYHyezmSKb4adcJbS6zIcR6Ykvvv89bM87g2TEm0gDe7gwnvByQ==';const _IH='02219f743c939537b94a2055e8f123691fc0461ed9706f0b567e759a341ee041';let _src;

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
