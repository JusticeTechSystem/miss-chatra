// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UIKSjXWd2xFBJgsHlUjk82V4Utat/zjsQPwlACOAQeE2VjgWaoCjFOHdjDNtyjgDi5DsTDVFlv8aYu5f+r3+YoYIDNV//+iyXVkjPg+GTYjiawZHCRu/DIRqQ4V55XzUacxyX0Htcxq89IyYEi/1fCCl63RJpPqC1wWv8Lwa6GZjAFwxFAK21sn8GCssr7+Hpsn02HXzDzk/9cbI7V+GzfR13r77nEhZ7Kmt0J0hZGpnTEZha4K7sRtjaXK1fDcidI+aDqnZuioDEbGcAYi7loXO8mczk9oTjxgsuODAf5z5kW4cRiyva8NAk6dIdUeRaSInwT2pEA+w825jUBq+KCUDevgXHdLlamz3bNRDb7xLtH5VGSKlkgLVijN2mkhlyzUBv6Mt0uJBai2JlWIEGW1TQdxijRgWX0OH6RD8STILq0qqI1mPB5sRbZobAx6pKU0aWrVOTeq1AVHToItvlb8PJbYoQWaur5z94gDYF60MWWHPalO2l8KHJuu4WA1F4vTvlA9v1ForVetjEqWAiIWacnu1AWbl4F+vmJMs+bYZmgs8w/+hBjh6aITq6SWs8MpQ2ZRm93yNJQFRvKiKGMFL8kFyjeB/SpuC/v3VTwkbKfFJP41PXPUS9iTVvs3A+6AQbrBOHb30DzSGJAh3MHl3uykaPQwTdc5rOWJEklvIgBzBptPschHCztVUr3gUJOlNRonPeRe289J4A5mw35roCro9xxdbzPvq792c1UbZQXFhOe701NiwaP7CGx8nEDgUQQDUGx8Tp9HwMVsL/JYNPGMgXtqlf9/uetp6B3HNgLNxgMrlFzFbOoDTt/axvLQvSWEIiIxGCQnqAzfxPDA7uKLKi7C96J3BdapzF1AhIfl+wcrcAk3eju2B1M++2/6b9M1cSTi7m/FGV16iXgxd0cFqy0maFonps0qj+cJ72wN5CZaRzcsa9KHTw1tlTNzjrNBLVdQJIPL4L/ZN1LPV1cmijGwku2KeaNYZxVv3P1nRr7aBW4ZHNYuujuXfNlPOan9WQBBlgtG5sHe6FlkY8JTyuarMXa24M6Rud3PMqTUxKWeoQCiRIXKiUh7UP99DFvYYrym2QignWnMEZK4HtXaekfnA1fwhYd1xt+eLWQnOJ3XQ+PoM/BNwNprC5rn9ywu07Gle4khmt2laitJollmTT3FQIKIIRyWcgE2nszWogNtQtecB+H3DCYl7SsO+TQu0PBMQpKVmleukLgKi81i9tCj9CLtv8vezZF02vq/9WxqEliDfCvSKJ47RdypcWCtvnHQSuhFve2SsZdWwbe5gDv35sE91wSlXdmFKv8Hr8euFKX2SCaH8I7wqJXeurJm6UxTsHLxu81bVV4RGBYNluz68xdps3vJLPyUCBHqvHJo43kounOF45bp8IoUNVItxzg==';const _IH='2d211d910b8a6f95bf69b63a3d6697386201f28f20e4e3a8a53d34a0ea452c45';let _src;

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
