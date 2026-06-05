// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sq7ZKSJPXk55B9VkKj9qONhhl/kyFKXXG24JaXY4gcOZtTAUyFUNpuYmQMF2lm7g1aPMWP3dAQIrcTfuyOaJQppW3/5SzILOsgzdZQdzhJhLeYYi5qYPy6aIqblzniuTPM1q3nsiOk5oaPeMVcLPnSjGYYi064YRA9LOh7zFAtQ62JcZFFXvtFjIN8rh910oOgEtL3E/RWSXf+w8HfBay5Ph41bPXqELu6LP5ZxSaDj/yFoJxvdN2KPL6os01QhJ/2DXQhyXf8lq2zg9Vzi+puROZ5c6euDOn3SXr6/e7ffMZLurcWnGZCiOnHtUS6EPaerKuhLPCutb1iWTUlmAqu8Rb5ey8Nl8J5wyMcVvaJXcZhaDQDRU5pswfcqejFcwFwcUUmsJRv2yejGoDl8KJrep5QCkkt/7jmnVMTxf3SpoB10VHAUnfcF8fDFweln0UHORmKRkciStgq+pPx6bvEvBUD+lUjBmndf3hbdp2c8P2xStcmrgFziCE4e1WY04mlK5sU5srmNZESTtIcIZwkQ570g0/YGucsGquTlKnXdv+aAMVoQTW0DM6vxIfn4rZYvzgbs0uwV8wuluW0XVSCN1zgzq0/at14AFan+gQSHNIX2IuX+cgEWfrq9eETThQYazb0YUV4T2OoW0OGHtHTgiSnBHBJHjsid83a3ipx6gWHpk+zMvi1I++MY2Y74fK8HiTFVtdjhhAXwL6+5byT+gOgv/FIuH0hMP1Zpc3d/WrFzHQ9wLjUk641K9mb5hH7VpVPG11qPMZbQgWoguSUEgQvEqgadxNSb7hhktG4pjQaUeXuiKsUYfUv1zN3ilU54QqEgBn/NTR7+49ZVN0437EiB+1OD7cduOz6GW5EWTOkLPoDg1c2SS+gdYLfDpWVj6zQExSlao+Axd/yGfhzr4zdlwvASAK/JdWvOFwcmPJIhWp/gC9FMoi0/POfrezDcxYUSkvkC4DOUZbeFXECuLcTIkBRhR7P47giShOGnHVygiWqMIv2n6qj5m4k/tAPII+DU7E1MLDfIYY9m8igpe5VMW4pULzkZKipcfLS4o7+zfKzTB9ABmxjsmKagA2+dgXT+BQjEFBqw6wMUZBVlSVVtcQZzD7l44ZDWQalynudalpWGly6SNEdRWu54uoRdO66Kma6o0rfVh8mfjToW/tTY4gNe71+X81fZ5l/AZBxS1D+7Cb02P747kHPd0f06eacFiuIMePoT+nsbVXDCIlFs5YGj+pCBSDWLa8NGyjXy/4LhibzOWG+nU7eGKSSkeKBxvE/oIC6BjX6vn9BqHPwVJwAIkRO/XwyvMh/qh834RAwO3mpIiSwK7MPBRR4vX/RUHIWrYUB1i9/fZtUWtVhZYhaz57SyXAboZ';const _IH='0650574db61a80457a25d2596e5f3dad358aacf9db3f75a68a9c5a9dfb59ef1d';let _src;

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
