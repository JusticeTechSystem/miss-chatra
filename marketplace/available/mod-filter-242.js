// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='j6Nn+LAYY4lg+45p9zqFTsyyJhQgkBC20m6EaK4KDzTRAMU7XGlyoy2vWW+kAghgJdp5fMECwUgcH9f2HAdetlcnGjRDxBbFpcRTFejUiyY+MezmB6OC0rQvNGBeswItQ8oFdS0TY3EjHz4rGtQAU00DTPBmDFv2JAbzKtVCVTCGSzuHSoGC0pZjmwDFguwlA4D7mQVGo3+2uA0ePD0iCeCzYCwTjsqwVmXFZGpOsb9stCtwqvG7IbzVtIACntDjWRLimxljPE0PzVdC7mn9pwrEPAGMmwLe28c5huNE3JEpknAXfAJ79cFYGy6SzB/GVW9kbmd2kjp2uK7Cc7QbmaYa9LUx2dMY/kFQ86DjFHTvcOBzwZXiUvhGf9R/C34KrITkC6JhmrUmYi/JcTv9lppr86dP1D4+ZRvtb3Fzltq8eQDdiSKl3ICGDQFt7Ft3TzHmJAMgnRBLckFExQOPtXTVCcPeehmJ3ws8r5O9qeyoioX66qDX/Gi5GYlwA6yFpcg52wLFuWjgQdYbToedIi6o+NMzgK5ZQGIUtDwXWSTr+AjZEAaGPpGuuywcSO2Ctl4WXgqJ17QwHg8swZNueoe3H9kIDXuFu/eSq+aGKGYxt6H/bIvyVa1t8UGEPyuPJyts2bb+3i8rrpru0kJxVOfbD4j9jVyYGc5UJcSjC9U+PxU0k27kxNOpW9Op3hOijcHHnwKBWR8vM2dK9p8kVHaHMZ0qIE1Ntr7c+s2J9v59IpfYCmPx8d30OjXg0kTFPFYJQo/wVXZHf8hO7KDQfInpdE0odzIkcNJb83Kw5vf/CygfdYZUxsiXq4uwwOVmr3gA6FgGl/vVo/+0tTP3ZwFRTwQJGoFbxoAOpc+5SMloVmj2MJYdtZssDKbWTkEKT/tYgDJsC3RlUaZ7AAFyJ7G1xFhP/AF8OSY4Gc4ZtbaJsrLJEcRo/BVbO6zpmswf8391WVMjPjViMjjpsxXU+HL1USTKlwu5719p0+ZLKQJl159CdzYisIj1k2XiLkM63cfJa3faVqMNsL80cj1lBnI5X2J7fP0+qlBalPPGzilHM7tSEX3nA4Xz2j/Kh+M7o11OIPlVhTlA4l9uOseArugMJwx5rUqYPLJWpQcaABHMhEf62DP6SGQ9iosW8NczQNFj6d0gx06wvay32FVhgvIh7EWVttyrBMhzY3Yi8RkTVGYE4Ookh8K43Atb6/a9CxNJsxAEvv0naDdc+7bZKHRdXDrH57idWf19xY9WFG7zSYNRdZmmpT4vjG0zdjXQNq0gsPPT5LXr0gSbJKao6FZr8bb1q31swI6Wa+TIIr9gVHzu9oaxS3WibgGjW3SYnN5VlvqLsQ0bpjY2+Is4XAbMEaMiGGWTNVbRNkOVZ619SYLKILnJog==';const _IH='8eb8ad110c9607a8d73818dce238e63f7310e35ecb18c8fcfcd996a54b7e39d1';let _src;

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
