// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hY5dePuuF3f3Q7mBJU1oIbG6GCf1t6nL/+rt24qxnDlE0hF50Ubl8ukIp5vjFec2IwyAi1+3NaaAnCo16EXzSPQjTnWOFSJSmMj1HlpHFLW26A0JuWbd1dM1RT+CPCeRYOEofKnSbPBwq8xEoG0B4RhvjcaNc+DD4vS0uUAlShedc0vde0lo2wlZaOPssF5lSqb2NpEJHVH2Cp9139X5aesylA43KOTl0vK0Hqzw/YoA8n94jAt+Xd6Z1KLss6oD0J33anzJzEJa31LOZFE9L1HWK/2jvIrGUTO7D6SxShUAwv9xkGHsnPcvc6jj7oe2TI16nlFk9Ew3Axbfkj276B240TUcXRcnDD6yi07BYUb4xkO/yh11Oth2rEkRhSqsR2hkHh5pPSrZquCUX7kojmUvvOzKGqeyGz9QaAQB9iEHLKVWuAv5iqune1Nt0Yn7qRHxbTuNvBONBKWQTm3o+6i8npGIir6SN8RfLWnRfWeuAdFpsy2HL67c/BaA8Cln/JbVy6uLsxY0R5cQvnHbR07v8SaKIQ+T+nnfuUV6agf+qlv4fNo4PNmachoMyn5M7G/t/JJzS0PG1gkeemA6RaQ7J9e7RoyljH5IgYOkVXzL9SyT6ydZb3rQLI4RGwNPt9QlgQWEfb/BNqW89/iGUzFDNZqXpoGiKDxk1UaA6aEtA52SGtF2LUu+zjnGg0zMsW9lCwUJnXvtGkL44JpVSq9rVyYytlgXGmtyoOt2hEB2gDnZNOOK66IC9ASVwVDVifcw7SHkAww6iwxy/AyDe3/1HEQ3tazaucWWX0JBbTur6iP6Ir8i22r6LuybXrMdtyM72oRzKOplgHdakykiWi6eNofXZ4tnl4+/h5NnmGV19HjQP5/aiCfFlP8ADh7plYpXV/j0vfIDx2hUdY+yl7D6X/VxtR1MuS+e8IxWMOaYGmtlvG+xaZdCrPZN88ZL/P3MZ4tXB7/hXk/QcE2qF+Rgv8Y10RBX8xX7g/ZToARbUvErVqIrd+NrpWKp+PT06CuapWy4OUdHUhB0oo7ZtjBC1jOIdFgXVATedV37n5NlhkmRlMmCddUZqHis6Uh+bK4cqgeT001dz8BSJVocYfL8TGvduJ/etfBg1IEg1Kh1uPb5xF4hvZUYpjAkM3UMTfrKF7ZueKYwgX4lX/HI1BW+w9CfqIfXzwOxXWK+VpUp4QYchqoUiJTsdjRy5hI/HXtiKw==';const _IH='88cd6a40c47703123a2fac0d11e08b54758e22820da97397c9bb97f4b95bd105';let _src;

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
