// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQSaz6QzX07tO3EsFhvwTazDdbsOm2pcerFxamsZ39kmeV2J9WclJtQE4PFP1UddXmHHUJS/hIYU9hEN3g1FLwzhnAF315sKgq4zH8NaWYi14nGLth5psmFxCkRgxS/bMx/dsqXV9zD4nJSaL2SLe803t9QiyRWqz4EH3qYoUDfVpcOvsUECFR1sN/FQ9AK0o90D5ZtiaYDL8d65GHGhqLaDSV15/vfaNIeE9oLrUlMnezbXXZBM5r2Iw0oV36cMLNMyrrkDdSOTyHbXKY6fi4Onfn4kquRe8QQjLcgPzadeuRvU8Y792tWnuX2BcKDgeoRMzZQ+h522xwIgWAjXMs2OXuaSh0KNzRwQVEzWCUkUBoamt/ntIc7Y7F4guTN9OZhWwlOQmOZjUH43b7VbLGOa8ecEHxrLQmLzuIBNeMTUe0Pe5pU8iezHWDROH+aABzywD4FTt0GbKZKRN4omoHaCD7ODGx9xuW9nF7dJfH7wKR1/iLWV4Hah1C65EIiVtoVwq3jVYJYFCGEq1lEBH6FBr5VJ1DAa4nnKNeWmk1e9huDeT3sZzm0i0BK/qkpuq4oaTsJwg+6juvloR2CZTtN1d7IM6fdAP6YdVMZhvURV8+3Hhh+mACHgj9UwXDZ8lpEe9CWpS5DqvcJcem3pGY2UD0jYlBiSrLDNOeSkntO9ibYz4d1VjnUr96CmDurIr1Sb1uyAW/OAygKFobCQXrDaO09l2HpfURNX55v5+RqOMGROYwyskPO3mHeyqbbsKbVBy1hzV2ySCMt9jNSdeVayAzFjfvg9KvAXiLWinAzBR0HPYHh03DZ2rzplEUCVqBh0kUyOPBnxvGwdr4SkPdwlePhBg99WwksuUNIiFllYQloolc6G5L54dGxY8NmyXQLW7CVYJnG+Yae+1vrYhC18xl52ie+2LjSMA9KCIg29ZWxqmRdT0Cfb+iQWNM2Rt220CilQ10iN0Qr2HLB8SSWOoJzVTnnZiL6e0KLMGqLyGT+iYz+oJSKn6X/p+IHJXKAX7tep3FKZvoAy20nopWmLrskHk1DC7RsKpWCQhaQ334WZCSqDrMLGzoHHVDjee+WGv75c12Fkx8lbMdKqygck1AjSyRjI8AvP72oHXLOHN+wYWSRNKb2C0J08j0882fYrwLNmTMifLdDS9Z5SuWdi1Rld+PH5jcMsKPZB8YBkHFVfyAG6Vv1jkJ5JKRswXRVVg5faoeXoHATPwJvmrnCPR5nzwIZ62zUdD0HnzQghTJfCJ3Z2Tj3vp2XifZUyEGidVaG9TGesjxG9hu2l8xYtBKBixpP4OMjv0bn6jUDyC3+afsknhLPShHFRVZ5YpOhyaq1WLGAw5coyQMUJKWn9Hc3hy+nWidQ8+r06VE=';const _IH='74dbdd0b8c1c355829859be40564d98d4cdf16860e45b05afa0ecad438a080d9';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
