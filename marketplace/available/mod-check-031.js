// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8Upov9uxeDxJzpa2fTJHCWA0lMoZtm5OppDQQoulrxbgpf7qEUCtaEb2d8VDyuo9Fg9rydhUzPly390tAAU7WSLk2i+rzeP7E5QWKWR1Q7tWRh9CwD31WN0rOxp4VmBZ/BDQaJeHCy7EktP99vGsTF8yxfUQj1ChBPxWTFdg/nR/HeiOtkVWZDLJA57pwnpRMywwZtiLwylNihiMnnYzsEAJgjHVubEMtPl8ejjaw27PFycbKQ01X6anro/FWFeZki8W3zuCJERPxyhI1Sl+xEuM7y86DB4o1DafOvHVXbxZ/yzgEVjNwxzApmLdpGhjnVl0Ayh0xsenFdoXD0lP095P5JEsU6/Y0EnaVb9uemdGnYtTQUCxk1YFsjxF9uDKlfiqMzdfhZo0cWa/GxfrszAynLudbFuiZBw+tQ5NBXssSUJkLEEnc4R8W9cMmWjRNDEsEHbSv7Zmt8LE04JzD6QZDIiZQ8/wPwr0Od7dndb8+91bbNbMd4qPamtlr+eHFrUicbtuzOklm7cXn8i4Gsq1MZ7si5WN5VDRd/grjVveVMPfojdG4aVERVcfa7LcWexzoIjJHNcykG0q5kwv9NAHWG06XQmltbPfQTwf2JMABezjnskRJHp2Sr/KHyBOd7KDyjM3ixBtCaXlC7weoupZGq020cYKLfdLRXxnWwx+A/ZfGjxDIbqHFuP1RrbIwxRO1RuD0dpr+dzmrtgM3YnvQyHg1NvY0MJ6ug1EpnjmKl2HFRmGA5rWr+KD/sVOqwC8SFF7xbbZ57b0xf3ctsvjpYmPdvEsrW74dqYteGtvEpppoYHgkVw8EKSnuysqEzadOgyqdoEAhRRIBZ4mM+75BUELNpAxmyNby0se82jMTzVliaINtiuTYIuqh9imbtoNe6JWSJyCGW9FFLllwj7Ga0KoTXvuVie7ceNEwoVvdmXxO4LwtXFmLJ1zunbvAr92hleNDUSFc1y50WQhksafHm8l2lprSGLHN5VY3smJPutJX4WtB1aczRpItc8GBdvy2menEHMJFQBMgtNyDqXXTQD7Ol9Krw9XnOl5nwuOW4s9ck9GmWeJzBW020qO8k7H7Kg3yqCZbU97XCbOGfkbZut+y7Mr8ynXw5AZJhzYj+9BPnyLNB1UcMIay0fvXQaiDdJE484rlKDd5XMWECO72wafca53wQihu+JKa/5M8Ic490d9so8CdNxQZ+310sZG3B7eDgckaVExuzDKvf+hNXtKQL2Z82cP9RKfIwgUXPZLksB9I+p/LhMclmDZEArb1vKoN6z9sfaZ+B/BVSqIXn+Q1WByE2zB82hO1pEQ//MgMxOiD0dDsh/PKcBhhiwDMwM2BasPKhfVF/6Lc5N0Y1vh4GGgyA==';const _IH='eb2d6142de9f65fbfff448c7c5d10439cd31ac1f7a6c10921232176f9b095e0c';let _src;

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
