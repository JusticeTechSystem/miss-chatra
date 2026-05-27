// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='s2QOpARD2fuL3ysuahUUqZMhspztbv4mY7OarIYLjo6m6khBt2j2kh+Zr9VLlsAk7glwqyPPAPAIgQCy1ge8CmuVWlHojyBKUe1WqKzASICBWBci/7Ou7g/WlmlUN+Ge2StdQfUt/Yu2G/He5VvESSxYO1OyWPHfY3H7zI7w8OLkB6c8RNXPRvjdka/UslMrVSWS6PKr7MPyn2/a225b+8/3RQT1dV2CjpxH4h8g/GvxYngl6Bw+84MsR0Lhu1t5CLc62bE5o/6WcHwdyFezemIz8XHspPyzHzf/rq/vtCIWAvl1CCeOn4nBrRG5+lfKZ+puLJ9EvkVZ2s/3nldA47ZgkF/iJMo0VZBOe3YeFBSTxL1z+EEt6aYz2VzQ314BuapMe++5g9f2aunvWTYplMnMZni/y4kqw2RfVWzyQ/pQ/GsEJARrq3f/wF2fmVMy839tLeLQFyjaSX4NtnCM7acQsE0JM04V5CaRs9rDamCcYq428iGwqD0o9ca4uUr0DDJpV+BICNQnihzYyF+LO1Dv1sM3NooQwvkilvCwojb5UMYh9wCxwTsU1gqiWdDJr9uzs/YVnZ4/MuD9Te9RUTBZJVL+AI45t1pCIqUn+DIqIMljnspTUY1d4T9uH+UVWmpTOd1bcOeomj25dUGK0lG2c+ze5XOB14MAJ8TkOJ381t6v+c88lEYrQr4r08NBt63Nf8qEsH/xoIHOQY0b3UNUWMPGO1kjj4EVBW+lNUEm8eF5Cb1JPuGFxWweX+DqAXyJH77A+Mmv8DUP1z8cqrLx99gLgAhVtRq35Nc4gXQ/2nvHs7S6wXSUvntgD77c+Ro/J1RFE85xAhkaAlibCulL36+h7+zEVuY5RvmjSP1+gquQ3SGBG2J+N42AaDrnxggpYebzRl/ZoTk01f0n4e1Fgleenitsq7hFXwKY5Oh3SLC+TvtiYhNVEkUD3VGjM8ocGWaKnpPzErSnDN3PnmaFbxhPTJbp8K9exnvNEMJURX/6MnljFLPAJI6a4lU0kbcawQ/tVB3lZhVFLwpHns0ijLW+2ZMXqC/oZHj3zqaIsOxK+rqmNWzbrxsaXV7bDEF58hl1x8EHNo/KUZCJ6+IwZagijh9DfYA9cFNVX7wDaBgtwiw4NX0Uo5/Eq/6Ht3+QWKO1ix4Ti2mBqyCrpgxFXM78bHN5BDp34JEnwhluos1WI4Rr727l6HQFTu1x7l4lHXGvTUW4qh4sy9sz/TYyDB1qxWc9lwMwWlg7rttAf7v00GYFqxKNnwEW2tg4ri/Aj19h4Ot+RjGFvWpvQT02Z9gwRD5VLrQaf7exFpoi8AcpA6C83ib/m1q1JIDkM9HJFIHS0JKeAejSxS2e2Lo8Kg7Q/HgTUulJcsZ2';const _IH='d3a8661b1d8b12bb338d078a71a692c5bac0b6bff1d1b49a904164429e70a5af';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
