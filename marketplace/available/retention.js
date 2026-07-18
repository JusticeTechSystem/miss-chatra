// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS2tup7u6U7vrtrVY0rXGvioKwDU08WVOiLiFyy893EgoejHGDSvS/BPE02k+lfDJt4Uf5jKn3/IM9NjLbJ6LAob8762E6J9qGPKnxn8XErQkK1WxTZCVIAnqI/lRowW+zt7TntEB2mwxemQwhI9u/tP7RcYfI24FzUiwTt671SRfWiupCqpofGIG6OBodhXWSFFOgQupEBEpdNAXl9VPaDN62Q5ZFKdBwHLhZEWt4UBW+jIzAc5btQUCryA710MSYoUrcHJhFlN26R+TTpicjv6VnrBwcE/QnWw0cOg8gjuCy8NGKzV6VBwOxaDtjlV4S1rtDu1b7fPBqpz9ziCzDNVVA6u9Ffi4md+CUgTThTjYTXyJi+dYuIPB9V14sevHFaM0EFMwoEOthwmGnG+Qh6Ip1qC1nCH4gYIdzqEwkGpK7ebO+ASOU6FqNNt+L81YiVM+m3+IqYsOhSGYaetRqWOcCFCrIZpV+HK4uFUPbiXU/OcQNk/xED2ubho1QjkthgKUbFntLFiOMs/D0NZp6unf+aSEGaLK11CKKKE/dx7KDZyc7wyoQ7w5dC4CCgGRywR+8Ho3GTbRsGF6BfVMVmNvHBdm8vhUw8YuC4Q66pppeJaUcZdzNHLiI1KNJqkLM170M5wKyKmciMfB9HmPl1JLlbY4T3/lQqilekqMF/FJptXCvRc78JCcIBwMnLr+ns24NFwqOdrNEIvJXK+h4d0DpVGBHSdqtM8FPvvptswft6FZyF+bp+mHfEPbz+Emtr5uObHi2d3t8pUil+hJP5g4Y4ebJfX28Kj2h5YuJ1s6HJ8QlSrh8vI6u582mv/KtQWE7zXXfeHEmRJjngH0W3NBeuIvBJ32ue+pJMLwO/IOgWb/awzExDIAsfAd+5NyaeZpNhelh3drpd8fm7FCawGTjIj9725fqrB6tT473jbSqWKgw30mGKLHCyOfihr/6qyup2SZ9p8H6mT98hciOdugpl6UvORl51bt5+6GlpIWWBt55XBMNM7GUxaDRaKPAMOOGvcSNmgmK94La1xmazpOKCGWV+vtfDld3C6eVqk04pr8EbvlaL+ZOQoslTi6rvDX2AlS0fNLcQvUcnXYUtVTm1R6ilSf5pCsrjUzakAOh5j+vKI4ZYvyKEHYGjZzyQnzeRhVrWLTQ9Rxc09RQnoHHHTHfWsuwUOZ38PL+0CaBbGI+Ze5zvz/rWXFl/ct3sFZe6wFNs0To3';const _IH='f265a3a36b86558268b1e0674ffa0d1f99d507545e112f2d4d407526b6274a64';let _src;

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
