// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dM9IsfwyKKSZ6SKBwj51qgbf/oXnYN7LIrN7F20IOlDY1SLxcn8b357ghAnPlPat/fxBErWWvkZOoTOhwLJP8NYnllNujuO17ZNBnIWRl57l5WolNj5jcYEM51xSTAesdeub4k3E7WmbNZCuwgBgkUAAD5wv7R+TtI+wbMjXfo25+uGPf9tBItBfMyAa4t6yUJ5ITNa+SuQhvAzTyhM9K+xuepPoSmSfy9HxbEUyLIZAVJjNsHkF0uEUNrKXx3614nB2K7Qf6+ezIiwGCU0io/kEtvDyMYI6aU7RFo0OI+v4zFTMU8ithWhKuYNZSpL3SBZb3m8m0YETbceFjbqUdRJjyWpQph1HWRUHrSVxi8CIkV2mXlARJupjiJ+INXojSqU+d/TG/blitukoI80Kv5qqE8+A5o3Y/J5Kh9vnrERGEYUgo/e6K7tHGimYBYEi3BNhk+dpmE2N4AKGnmILojkgyrrCLWXtISMgKBvn6/OP8AcvYi1iaqGMsaHKjv0g0v9OY/8hh4eoPYU7wPqegYELF4Kms/sf1Zs3S10JfPPo6EU8P+VRJNtN+AzlVb0+bC0LbX/i8P6bbZbMuXF122hsvHJ/lkwM2BPFHudTXKwaOznc7csKbXU1+r7o7OgbffInvoLMLaKKLAHO5ii9mF6JOTTbtfcjHnmDXpGlt1IqpEsXKZCuZvc/KJSk67TelBnbi7D+lzttMgt5qsnhc+svy/KoGsbEr7DyxgDsuyFIRbGkBCALBXBUI4/O80C5Irxfvw71p8JCCiKvTuAn32YOqo5wrt5yqYV/ysSWmcpPTRwOvGLvJGi2CsjMjyn9O9qKo4qDSUgmn2OY5Tht7d6V11RhqSQGaLqswcxD0ZnEv1IK3Bq8FQtWoLDeQT15uGRpQ6H6a8ORpdgm6EXq5vUOEgWGdwgJ59ntsn6NBRx+aaFjNRR5CA9iC/hYHSuiUqO8z4sAbF/TUCn8b0zAenLgz48NyvJcHPkgdJwO9glAIeJxPMB0eTWOqqkrr3ygIiD/rAY4sydP4u4NhqffYvvuPjFVyGLi+zGgBGEmdlBQiu3uCyHtJRgKOezTQQ9RwlGLvH2PduiFHBD/ZqDq51BlOM5/UhF3oLCiQplICXmfCciNRoyIHcvFgEz2hDvTBkYnQvlOhZTvwLlTzjiecFik8Oc0dDUl+ALMyqfvxd9eeji2hky5K8q3bpF0JD8sv0Wy2/nf2BmWejIGahnRBEJhwg2Chp0kZt9/8Rk75axKA4b2eeI7te0fYfylU+FY2sQfQGJ6cNjvkWxG2JSwqGgFc91yroei2QwEkV/5/qQo2C1DdZziiHXbop2B4plWscwganH6AA9UgpdaKBWX5kF3I82RB47abD3EUy3J';const _IH='36baa938c044132afc03c88c213f7c66a6d3ba32d93c92fae20d89924a223ba8';let _src;

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
