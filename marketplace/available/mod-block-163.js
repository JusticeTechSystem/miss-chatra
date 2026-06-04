// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hHxvuYGYkE+maxxizZoR11GcZZggzOI4MZAefo5UT+HAs3nyw+LYXKIN2xw3rVHHwJHBJ4O68HNPGBIGnZOiQSmjyWwmCvmOAhmOT5/ZZDJ9SnnvXe9s0rFoRlE5MOFMh8/r32zCNuFu+xsHt5KtlWAxCeb5/Ksp+4JUOFtTg144eXArG8WJ9LY0xuoOUIFHArcDaZnSozK1WECDNxC+axVonoqszKq2wliTfD4z1u9U5DgOlfCGoKnjB9toO3sMYo7rNBJlUeqy2YMDb0rm1VKzTYiF6PPJuIpwmTe9CxAKpkrK8X1tX4wkg+xQ7BpRjE96pCx/J8HnOfTvtyGoBADN4iAoicQ4Fpausdd2LmRNuf4QDDh2LXOPpIWQzrZZTdlr+u5qif1W1rTe6cbX6aKmumjKFgUg/3QXWPZdm9lLumPM7Bxc+ngk5Z7rCgTPRZ9q7dTcraGY6Y+xdD71TBWdc8uN3aBgG3IhLnqKRgAkl6dF7sr8nj743hueAP31XSudYzLKk3j7cU9S54wGwJACyoKJ3ehdXKl6ZffARkvTHyyBKTF6gio51g14vdR/9pgLqRHzB3TTCH1vK3iOEGnhBv5Gu2fMCnWqiMBZ/MspkX6lpIOs1pbBtVn7bpUXlFvfcfN1NLI62ying8mPdVZuImuyI3Ann9MAeEF3MBK65jxthzR9QovxvWP7T7gj8qmmRIZ3b7DqwNtBf18uM+5/3ZwKoUnkS0f5DeGZ14MHCKjw2mYBHs/hkYk37269diJan7i4gBL7YEJqrZEiYDmBR407X0YDpv6jE1bUBOTZmqut84BXJ9xzKGjIL1AX1B5f2bybIx2/jKAlvxz/LsREtAttGkmRkr0Rc7lZ7p+NcvP19CEfC68znI+/Go4AakXinIkSrSg/2VAREXI2oNmK2o+1Geg/Zv+Z9qyu9/89Asa8JYDJZ3EwFoFdX9jq9YLiQPDYKZ9mwH0HgPZYFQD16ZoLqvAeRrXa+IZgH6SHNhMt81/y0eonJQSObFmmiuU95H84JPHUyafcxK5tWpBShs3POFBDCAXG1bhGnkgADeLA9+x+5OgA1aOuFx1+J9GQ6Y28JIz1vwjjF6OznF0VmFfZxlwMrifGftY6HNW6uUx6Y1WFfu5s9sWpVDl46G27rX3+uPoHQMmh85oQL1IR3HG0NAQQq3rlClqGgns9raNNeUxM7NFW/sLYv5GvtY19GuWIp+fVcd7BZFqdlI1l1MCQtyZC4+2CocY4G4d9XV9om9jPdpj4Uai3lkksWBLpoYWrD+jXtj+tSAPp2JBBM0NmxUzUoKxMUin3QPv4IJ95OIaz38Yw0U6RD4eKV93EL2wv4yzaNUN/K/QXoJqDQT+HAWw7p4SaRULX';const _IH='684d0edd4113e19c6eb27699ad5ea0359b24949e3545356959d3c8730f6945ea';let _src;

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
