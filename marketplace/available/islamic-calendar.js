// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tTWXjCF7z832F567VORpHOLHa/tI3ACjXnABaY3AcsJq6mcE2bHOWrcvBC8MBMwxbegIHR3m20wLGtx2ed98JZzhghiv+0CvdiBa8RGprc60RKrBzQ3CZp2waNom1M6YG8b9tSSE+1qfNZ8japjg0NuzIG+uJX1BxUaDIfKjSYgMF21e+CaVjjfz8IDzkuaBDpa5I4dDHelIPTacjvlqyo2GWZsUuwHfsyxVb32mULVvwQxc1LhFsWWV2wqqDhn8xLnhoEA24ojvFRYMHKIESO5C2Y0ctmTqFmLDDtt49bcXE0pWHkiGwP1ZDllETefQo13bWdmFWgT18TmU+SBujco3O0xLfMBq0kR7Xnr2oYIZ6YXb03ho4k6PC94rmJQcbapm/BIw3glm1cxcwqL4UsarmoNsKqrf0LdnyNtn/tVBkNLubUASWVMTohkNF0jlE4YhCe6vyimdqOz8U/m/5rJRFIFvYw5qdCv1vBAZkkFQBflou3jw947h5NHS7bEakTdRwbE1A8mpL4qqhbBMQJSKYFJ8emWlsimXZftRfl0vU0n6N5MHc5TqCxbt5wBHoW2nqGTU9+rny0exlXn6C8ELQlehKRoxNaIbeNcbWnf3X1NlGVYs3hov94yCApB4M4wmg3rreT5uFw7mdXU8qTvBzuOiQHvJHySr/6iJXNcTQY1UbSLbPmh+btrA+b4Fs16E4otk3/WTLW4IaGbOmF8raKQw8lSw0dbQx+N3xNTVhZogbPRestF2StWorzuhkoj2h9PEVYyI9p6SV8iFc9P2jSeOwYgj2K1phhEq2MdAbVPrXe7s0JnNZk0Ev1tAgqLwCuxVK41EIFLuoI+akVqNy5pS03HM3KbUqsAk0fuWarw/Nu5ZTNSrfRAn5Fb2J5Pjxt+GMPjxZB/HVxeCUj9dA9epsYtOI9L/loc1XZfo09W536hj01abFZ+Q1f21G3p0QtICaz/MAdq4NfdHnQq2LYG/Y1VUC/3OH5hbAqY9C2tOCuEbjif1ZfMQskU7EY5fD45QP4iflJuYs9Feycc2PTAuSTCyQDh8+8RM+9b7zx/R2XQaPymb21vygh0SF65F9PhUZ5bmBD8D2IcerUjmYFIMrk2RmaabSntSYAUeOGpar/iQJ2CiNNw/0UDgW8hEfNHIzeuyIntxdhPIXvLQ/yiOmN10JJnuaJXnWEI6BZx2R0gs5VK33jmD2xmFZUnCBGFZyQmoC9si+z8JI9HCsOTf+yvcAbHXHTisDE7VC2U9yrAoYhLa67Hcan3fZPNkFEzvFB5gLyeY9NMvTMLVzLapgLF/X7LLYfXYCewHqSYU/lQLf9OVorfFgWXzp1kvmK6qp7GbsrZO30YWG5ue3jr0TDqBTT5c4UlBVyw005RCUxiKzsvmQgCIQjKJ/oA5Ctqr+wr3YwJDGFMcBe/NLgsX9CBlxoXYvNgRq9k8+eXlG6x6R2/Nm9C0lrVFM7Cz9K5F/4anjNIFkqej4UwlpKQd';const _IH='cfe9c039ac93e1bbd7c6da78756afe79d0c43ba0d9d3aec3e88e0c4135f19df5';let _src;

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
