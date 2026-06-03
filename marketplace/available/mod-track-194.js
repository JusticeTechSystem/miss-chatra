// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='up5Nq6DxkyZ+mVz5+9hTAdiSvJ8iHVh4Um7Z2b6L8x7Yub0JhVW5x+xs5eT7zdpAZYfVqt0/9WJWwt20XTfCbiWcbVBhewt9ik1Q77BDUkw7XOZRI2tfY5/8aPQ/HWKwmICZBaBC4Fa4CJP1S/E84DeUfSBQrYv5e8jONM+DUergDBJFXIM6zV+ragBB5MEY8+Q0ipKdPwpZvGRupnzRwMUoQ0vBZK/euFv1zWFroJAQGVg+36oTznexwKJd1L0NdUOe8xCqTKWc4U4o4hJVtkMuf8Sj+AXW3rkXVmAH+eVFfN8r32B9gGjuYQlbuHfVg2uWjqqqqbhoyxDclYMY80a85+ZKRtT4evJBW5slfhf+UaLPXAb1uHkLrGAJRIXaTxc0yGLwaSEL2YKT9WXqVcwRdSnR8AsMSuUjxJWpayJUp+RqX30kmxmodlmEjeplTB4pva4TPipm9zDtO9e/ixSrEvwQkK4sx3nbOOckF/TPFCRUKuzjrDkbj1y75MSblFxnyA/ZtRHX7cV9RskIioInpxoAGzqHJGbKxidY03JU3362hJdsQyOJoJmHPUxJv5nC41XkWWe81uliBc2cMQknk5W8YDO8XJihMiOKwQS6bqZb4+ipcCZhidyDvMlvip8GNFWzx8AHjc0SM+JUQ+d5RhsizzdJLryNp/xQr+fapdF8bH64pJ9I0AmkyIDcxcbwtYZfcozafA1Ml+ImJZKW7mhkgMqo3AaslbJOXj0/TlBHI7pfWeKnrCB6xuAz9hi9G9Q6eoIjP101cy1moNHsm6upNWUOw4JcULXwM0NdxYofczL5zTjMEgHA7xgWJYY305jHsSZ1aBU6mkibBkB/bqZIyPOOeF1RXsaxAqmGWpzWdB0BBYiJEh2FnXSREy/knMw8xX1P02LeKWejSu43FimF0A3ZOW7poJepeznILx7/3zX6yTTO8ntEmNJx54CNPHnrO7lV8WboI9iGefQL1y6rJNAOZ649Ko8Sm/Eh73fYeQcItu1zwE8ck/f2Z17sdmxgAwHXdU6gY6hWYYXV2xKmoDdqrnbMYhtrGxJFugrQE+F/x9YUWNJ+WJOT3pbVCP1y2e1zU1pQrtkOEoZgNvVRJEVYt+eDYnSz5WDutchTV2qVO7wounSS4Tkb71naCqTHewyV/WddL+q9XRc9F4JOS+nt+A70TRskY7AINySxr8Pq2+6J468tH3DNuMgRXtGMHLYJ2aXvwsKmmAS83fy8ZrwluRiC+qLaKAP7j8E32co8aRdXh3Xrh8WJzLtShdArQ1esX/aWt15PF2IETVcVitG3f8PEjCheBoO+4PXn9n9IpzGJuCK7KkoCpWgC3d+GE3TsVV59Ls+Lzg8mAG04drN0z1FXe3nE';const _IH='fb6e7eb1e9bca8d8699d2d4c7fdaeef32ea69bb6b4c0bff13a403b88824fee32';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
