// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qTBGHMpjQ2BGYPnHm+BR8pBsJvXrTNiJ0ljD90fEmSxbM0ILdtJjZ/mnPdQYd1Yt619/RlJcH36jsw2fVAasL/mLFsTLmRSjD9i/V0IVGCvYtPHfFwjvzHBVbMpaKzETIXEWG2vGKZqjOOEVuV7c47X6lt9t1/bgWkjmX30nV1Y04MgA9aXtYXiuc+31BG65RFMDzzv8gX6z68BCI/CWsxcuNVf42sNdce5+0IvKSP6HTtF3+dStkVUU7ITTxx053hK9b3B7XE/v9LN/Eo2+X3TXe0vdiJG4HLxWumXJaLtzzjXjGlj6ceXU+xB581ReLnMvScJz4bThZYRfb+aqfDSU0Y4N2IMA13pIWJsP0v37UL7gaeZ5CPRsf+W1Mt9YuiaUetLBAvEpT4ReLx44bjwWQhUVXETBA/a1Zgv/Jt6hHAfnvafX0H8OAxlUhwrb5YUPNfHPoMZiDde8UCwOjMtBNfHiWBNmy4fUjBSS6p97kuTcM0uJ/Tw4S3ZQylb1hxHw4n6Bf2G+KTUsA6r3At24zcOF6vMtkvCUZaXWwuZOkHAN9S2Dx7t4eIA5EYrbynK1kXfDR0C6BfuRGvP8R3qZdZQQxpXeAkhJNVTGPJwZtaL+qscBN6bQQ4f2k1rC5uwElBZcRp/oYI7Fk2b78oDFdTmoTe4DCLiv9d9lwYFeXRZ0IYFJL+j3RvvM7O64mMhX4vwdYpVyVTC8j1TL/pRsMEQ0LfF+ZdtsWVNi+OSzWOMDebahICDfLcU2p3gT5MXfjBjH73wWPflV7pnA+go5FqdnCELU3POXVPIeE7PxMCoBImBslGwLl8yUJj/fjHwR+4qs3oKB42bpHMJ/vS16hQ7BPZUVtVMN52mW7cp7Xi+2X5FCXB/WvuKzrGbqFnkMWV8IZupDKCSJaUKa2NVMe1pO0qrcXyazUwmOm//wdGmj9P/zh5vu+qZ8EBMvjes2U5/UIOz0b9jWNASB+tFJXxf29gleReeWLPPHZ5MgPMccfvSoMl8/dnKypyZjL6jFEi7snK7TE4vR1GLXCgvj+hChb9kC5Bmf53xhRwzNFHk3iJm7HHsVsSKl1g1+u/CgF2mt7LVhiI6AzMqwfXC1eebg+HKSEPFc6IrjSq8A4QVp0ZaJua94R/v6/w7fwdZEzGIdAsnTOA5n/QMHMGvv/35jE+e2kzhvOXxNMd1tx1dMTasT6e5nbY6TPocrqIPCu82quX381mdCJHDkoKDMeD0x9oyfFqg21Uav0ZgK6gvGFpmx2Y/xeqmaFaoZ7oi8S1AT+vG8tijccRHbb6hAxTziRRq2V2JwSrGhTbksILr1J/lYPhVbRiRvtRnSBzYwO6UAHFRUq8QVbSpdKDKHBx5ciym43xly+IGgNwp6+l2UM6UkQWFvSMpaY1tAxmq9dr3+uilMhcJbxNPHzTczq8686mgbD22uxv8P1+dWRgJsu1siiyOHCw3+TghIHwcYVVsCHgN4oExChhdtwiHh+13wWivKEjWZd8e400D8ZoQLwuCg9f6WVyA+XM9aRmMxMLypYc70jvR4pqnX+xFiieCJ55h+yto0PH7sXNW7OsTi/w0/uSQPs7cu3e6tZAW4Y3BsvqwrRj5byyZsDk8O0v5uv0PTkTZtI+uU0ckU6m4//fsRIvEkuuDvL4qDpq1oetOszJbNI/3Y0gI6AtMgYJHXI67rVvwDY6F90PpTEPAWjg==';const _IH='65a46f60a6ee4801c105abd331370788268ffd2d0f36cf196719ac6882cff342';let _src;

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
