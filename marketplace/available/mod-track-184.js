// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HPH+P2g4lQT+h3TmOxxT2PMRAeCgq09tniJw+1qtyS9dMoD4snmPSv7leGHBXDP23BIQzbw6KAKTjDoehyU4w0nrXbSanIHv6B9SkMLlIrgsWpkvmpjaawJyptzALKUMH26PhLUs2NfHVAs0jAmuv/smFHqdmeI4DX0GrRJDkQANC3WILnmhp9Hp9mdw5+GoNW/aKhUH33a7Sp34hP0wbZgBKMd0Yl31g58SA4eXzCthAL6riY0zSuv+Vof9KEsXn9TJAN+UC17sT2tvVGYPh1zhgozOK5thZvjV/V50E5/bMHRBvaDfhJ1lZ+DkfVHcNbbQ06/wpTAHu+Rw8l13J3hg6qjUB0EHHONeiF8ZGEWr09vR5YorN30/OHDPbQM1UrwmoTkxrhUsF6fI6sy1Xo9G1pSZ48rOISxo68vSs1wSvfesDiZfOgKawyh6eJNIYL6qk8dtg2gZ9Rz5kPISBFuA0WlWmmUQZR4+2jSvPGv/2bUtMjaWDG2bQDqg0XzYE10YgQ+o2tGzfWjpc5xFZbNi4HFsbtXy9Vqy4d9KvVxTfdFU09gklzNhd0oF63xdLz/jvvxq0Ct18zEBAbQkbuda2i3i9rOH32/dH5XV/Ke/HaWyniSKR6ztq5EyWXL4DX8r943vGP9Bx5pIUCQo2uHjkb5+TO+gSF59e2kysxsEtg0+zp306koR5fM4PBxx5wLtCuY4OKORYAFth3XMJplbA5Qs0RxwESU0XNn3voIGaPsdjwaS8PuZgFooS5wTclW62oSJxvnMeliuUfQYl9M4cJO1pGbzivG25ig4R0Ste42tEGl675jfYTbG6ofvmLGCa6I/uWu1eYpCYznXnAgYM8Ipz+V0P2XYrcPGGhWnwnDAp/1fb17UnpuUrGiem/kS5Mol5jiuFJz4CKfV/9UQmW8Dw4G+G/0mgDjVr8yrdwNWliZRTQIy49GsR4M+cSSV+o7zEuyo2fa3UjuIqejOHUdlRMfYPAfBqFhayOgHbl+GHpHqiOdhXlQrGXUepCCNdjxBZpOoJ3YJsd0Kuq6pCzg2KDslbfdLtKetBjMICD7Ca92roSoZH4lBo2FwW6eEPBLzaJbJ2uiSk4SzH5OxnE4FZuQ5NDxS9DESiIyTcWWCw1jyZk9C+/S61V9bNkG0CGKk7FAmx9heub4lx0edIshLdiVNNNZRtE2L5Ql2mtszpnFAJLYph72Dv0vX2wt7PD0OetF5emtRfFvPgrE7LAlgsU09ScvaADwnHdW3JQVQNn09EtWLlIfcTWsdxKB3v/gG29zMVN6UeQWLW1dkkQZqdpi10RlsLVYv+SbMlE1Cf2nBkl4CkOqNlgF2h6YVvghS8bRlfnrALnyKPFik/s23g1RassG+GAjs';const _IH='f336eb7ea3994c7870886539d08f700d82cbc523d924c595dfc4884c01a2e8af';let _src;

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
