// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/POD6sJaK3pWaN2IY5/Gee+T4CBI3K3zc9MrREnpzqP7y2WFGXQlP3v6CtlUQSwKSnKXeIjFTTVEnkL5tqOWIWIWiijejkgcU4YLaiwFtn4rFMrBDryG8dpMsmz5un17e/RKcuY08FAyP7oUTg7pZcVCGWgt15Tcru/FK65K2VvSIrg6sh0FHLOX2gUyHapQv2nx3eyLG3ZvRcCrZVefYAQ0GQG5Orn9UWl3xKOnaHOTG6JVTYV+ao+kg+TBjb852avQOx8Vpf7FCIU0+UuzPQEsCjNBB4kj+BHD1eNsFA7MTcjq1kVO5opYiC8RYMofM5lYtRWJ18PxvbC0CiZH1frMSrJekLm/EawpIUiG4sEcag3YMc82UjAUDIMur+JNUAIAL8BxYdp53ARvojLP2ythTlTFtEp145aObo+qMBBv1uuSvs917bN8d4zXx+bQrnRHTraT4Ifidfqe2tRsDaLm+zXgNUat3Dr08w2nZhhvzPL+8cr/rMGCLj8/LjqfCbRdpmMzqyr3q3NfSUv20M/IP/iGqnrUhmA9itjyMm4U9fW1Jg5XU88v7KRkyPE7g7u7MCEc47HYUdBy7f7KDl76mriCBU/uoitqY+AWasywIOHHkhbPhqCfsh3jkOhv5wNkpEwyAgN9TWwZc8S3gZ8UHi5WZrVM+B2ckREH1MFYugCbkI8ZtKyyQ4sRLT3RJHarIJKJZhE6n9jCjQeMjneOyGzQew4r15BLwnUpS+KdssqVHFYsOeR7+s/lNvW7+dPKX1S+YIkmcx9znmrqO2v5WdldI4lmrVRzExJ+0NJ2FsDM0nyfsMJ9xV0UMHs8PhDx6kqdVuNgdUAQU8UScLSewQ9IiU8ys6g6eiMyfeO1mWnNXc6HfWfwt1WrnXN9GIdku7zg5XSQGhdQybUCc7Up9VjgGaNVNVxO9E4G381gBB87DAaMfeLRj1eoQEw0HiH+QER7AVwkygRYuCpNfhe5jNEI9ffb5uuOU4sakfu9KCLaHS9zfe3nHG6lkJpWjS634n6LAcKYbm1x+d9DH6dKldWWrKSxrJxwP3z19S1RW7rcp5sUzFZPaXwqRmq2+L+cmhm21iqVzSrbuVmAy4/7qx7p3jGBG0vvBofD4AOzw31M4BY+rKv3Et9nYi+g/PL9UHtEor7r7PrsmDXi+R2oiOLbTtWJkcx8Jumo5qmM58OR6YislRf2HqTK36bmyRa26xQES6xXRDmYE/6NXf82wFKHZAN+TrwzPiu0KY8qffMLaCw5VuRFGwq6F5dBFW9nzSl+YWN8iGRUy5hE2fcVyAU+IorJnPux7W3hf4ecT/WdpazpLoyZDZYANjKY2tLCQpTJ2dHwCGdIUf0VBCvlm1FisFmar4jyW0qRyjEVO61TjNo5Hu4Vvso3';const _IH='ba8c7a03e021e7d53997e29d01862ed6aad8aca2d566b67dadfe5190bef48ba4';let _src;

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
