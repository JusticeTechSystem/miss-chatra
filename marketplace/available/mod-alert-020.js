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
  const _b64='ou+tcmyWjPf8TyYlmEizxLhiIqGlqDEMR0LLMJpliAW9i1o00wDXcOwAttN+fk7NB1edZwQAl7tJiFEimtwpJYOwyyGnmT8AAHUtZSrux1Hz72U7qChwFH+grU7ZaK0k5/j+uJURotcODZzthuOy6v4k/bN575Ph2wvhrJma8qIrC+m1MsH05HbhYQaJQiWcfjFoBzkSVDJgY+gM/NB5mnfunk7Yn65TMHpNydAKvIQZypjLKd9iX+mCom9mEzNjaBnVWchES8n1oHGLzqNblJiWFybIFTkKNzNdDFF6A2JFaruzXiY0Yd82E7KRq9xodEm+5OYI/ZdcYvs+dcLo7g+VvlzNz5kSO56Vu9qY0uUulYt/27EeowBjd95H4LgP/FPNPioyKTg7XA4flJBg0PDfpxSY6DIqFEhRsr3IrdkjDEpEljt15L9XTK6Zp9kT+tVVCHwB4ytsNvVfBNQYFISMAVmELW3nedEj1q5ZHE2vxa5ieUytTg4U/YtjiumPBOH+d1x9wpzr2/qLzUVLoKlN80Wpud0vGvRyEq5mfBaR6I2dk+U7Qvl9DCQDmZOYPK0rfzQRczdMIRoYBjpMYae49RN+yWlZcaoSoewmUyWqypLZTOc1PI2sOGaCT+QLOfSGOOTVRtSEIIvAVsFvUwTa1MXaLH8VS3dL74avttU4uwyjYMGUqD76yNCNRZQes9ZPjLJBdDo6bG3NSIG4E54TEe15VGNAebpwX/0G+9UdNGnl8+YLwrIetbtGQ2zDr0RiUmTHPGgZnaAEZqluv2OFRQvOhMvMc1o7CQQBJ7ErOWazQSAoG28waLj/YGZgTApyXF14JM9dFbaqgg0THTOFUl9w3RS4p2jUum2hzGiZNj1BV8+aX9gCksHVwWTqrvWeNCSmF3cblkVNQ4+EEYT7fLjIfpxtqsQQX6Sieh+8NJ8clwSC6N5xTQg37SiTs50P/UtDiUoflL5xbHAPHnmwP1GxuCk1VuHalWoOmzztrjoxvyj4nLF1PfmCY905qjFAatVj5ksCtyyhxkmPhzwW2G8Qd3esGsO6FRWqsc3Tv83b5IAwWgGnLpSIDJGCoch3IoI3z2ld/ZNUMDPVDHV3AW+c9ofLBlS4uRoX0sAZPq6z1eP3x9DNHwiZKSFSOmrlXxbeqVuJMEohAhRFj/AGp33inYdgPB5LXd1DG1Tl4SNyF4eTjyJkePJG2fMR2yJ7gckkUVp1glfyTJj8C+0qaDvV9YpcnRoNy5AlbRx3kHkABDzfL8v5LukjtHs5YBvKKpiU4yZUTGwg+MoTURGspFApn9AzWoc80Yse1vPkYIS5qfgjbXRB4kAfCvBBuNGTSrT+wwz2Ybv3luOOp74gz8gwvfyW4w==';const _IH='eb6861477a331492e896edc1bf8cfde58d2716ec6e9c1c0fee64af78a7416a81';let _src;

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
