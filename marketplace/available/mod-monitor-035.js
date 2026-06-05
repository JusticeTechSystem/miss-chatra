// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9juh+8kJuAkCpeEcV4xDfY9aipLkn1KBL8qsPni/fBmyWcxN/oYEmJwVucL0qMD/eK0eQGCoicHIHAmtngyx3CYxLTDfIuMa88ARfa4WZf3VNlrYDsj9MthViYUOvwIb/TBmyl15RLr3Yaeq1ElQ6E6Zh39grbN1qk02DGxitoFIAVHRSi8T6saCWvBLyC9+9IuWUtmP7BkvQreLH6u1Z3+cMzEdmQbPtE8EsubOto7i2z85gmKXtyE5WAOO6Y6F+ITfsKjamMmZGVNetO23dP+2uBvpVnGbq0C3+NQhQrJBuWrzukOZgyHwXU7DfLzIUYodCdLVyetON/4hZ5fK4WLhWtjF/3xh4VBP/D0oBmD+bWSVTRqMs3eVkEggaxcC/cOAWpBx9e30o4Mgi7X+y2ZmEt+SKQpw1LMWqnafa3fZyMLcdY1jF8hEqRDaiPoUa1jcN53L53nYrEYnZwA6d6h+DVKvZyFBN5HR+S6Z9YNHMjHpyhPcac5xNaVmS0mK1QhbAFtwbIS1fKaJZfqzu9Udkdn+8vEuSLw4+iXcADeNeoH5ky4jQ+xriDf08N2nJceu3IMsrF+WyYQAn+OST6nqEWjkI48TZ92a9cF3K3kVEpo2LRcGzDoABraLhgJwayAwHk4AH6K4MQPTDzTF+xkG1xsa4Is4rxr8O7ooZ8D6GnqU1T6iXvxbS07YLrz5xtvWTiupqN1KRXMVv6x426K5pSsFmjQSIBunCqnALiiPxLqYOgFvs7SFCnMKS6fTkB9Wzoem/BX9ADoEfU5zQjK+cj4CFImTzrNmrXtqTh2J7cz39LZyrZXQMIiYdcSaDMeRZfy/8X/vHH8EDhzZume07s1BYyKIMDCcp5cl/r4Y6nORw7mnn4DSxED2XPkp83PppSdJ8wtrUaVG+/6+5kjsDY1xIT6Pmk+Y+QfMqATj97iADEC28uPvDCcGZx1xlJi5P3DfjSxsi2EIAMovUBnLmWrKX+8ByG/1l8nWBIGplsLWLdbH/0fHDjFejUd7wHQit4ZibZG4uccYAHR4WjzOp7IC68E9w1IyTgMqP7VoxFsrtTr1UDKO4QTGttmh7fi1a3Ep+MIYuNjN+UUGBJuPVKDnRXyRNNZ5iddSAF58T+HWMdS7ChWrCtsuVw+60mdTwjTEDDyzNKzmjhdi0n6YKLCbNMD6/mNjW+RZHghYaDxRkels3W+eKv2+0unW9cDUmGLBQJxfQeQBfel3Sp11XX5VaTL8Q2LW3r+y8ZVet5FIzn4PUYWQ1DfqFPZofc7Z6mmF09HszOvGG/BVPGu/E3/qoWzDvN7ogeWcZP24u6j4uJu9677u+4ovdEJ8MTbS2Feh59rnU4H8mc9/Rzq5mbU4ZRRUtU+pZBB+lUVugASJ7qB/tffddXs8';const _IH='3f812e72a8e7a7d90c54d38730168d0c2d4ca0ef5af9d00d14492ceeaee878d4';let _src;

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
