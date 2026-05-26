// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Io6KAXAesVL2lFXQ4W8CjSgrq3SQJHJYxwS06jUor3hP1BSmlqfNQ2/0Px50zd0k20MWLCBe7UTtPU7UycZUNOIGjnY2O2m6JVrJXyaHyf2n/ZvQ0TZCGShuB1I7lfCpq2GaCrVbBfw9PYjXQXi+mRZN5SgcEZVBEFWjlj8KSwgcy2SDjt6BYpkfVB8k0MFE/E2tNSXLWGK5KqQGWWg3/jAJu0EBKfWuN0s/GO0mAZJNyL5mfE5CQ4kyj19Lr7TPbAi89f5bys86nmey7FwC4hsNI+T8neHYNUse3kad8eh1rHUY/0JAEiKnTv/OT6UrAYzfdWM8EF+/Rhi3IXNUxNgnqEMb4uHIUEN052znV6rrHtWRWzLcMRMbKXva4Ft0LebrfYSyGSgSLqcwPLBtuHah2Im1OspRmY5tJrtXOg/Xigge+og1iuPiLY51gnPpxktOi+ILLLEHCwkfhsCgvHv6WF19/CXaTpTq9yqzlUEO0BzVpQ+WKmRGBnDGd+E/mJrgelUJsb2sgxPl/B2b/l3Rvpoeinc6wiOmJKVSO6Hvic4F0pyX8v0nC8aUBRhKj/ZuyXdOE0uD6fqtWyO2C3EED2VFNayXzraA+1iL2/jUdeMlKXy1gSkm+o3tgqfyw26IRoRalkLJd7JrYwVam2Vq8+xz2HRv0IMr+zXu371gqdXjhLUdrrY/jyhqwrFDaYad/Ckmp38ylrN4i97Ryb1krEezd7fnG+Xmbjsvf5KOLgpk+y1Rfm2j4IdbRcT+m3bc8eXbbadK2vfB5txVbH+HZCtKokNdeuj6kU8IralKsjzTFT3iGAK8/m/Vs7FpI1RyWGgYvDzSFy1z+5w7lQPv8gcWuiFCKmvO71YJ8KjVfVaQ+YJhbbJuP9iTnL29Gxwp04L+Ve0IaDd8SvAomYmcuNgBt/nEZpMICj3q7zRwJBHlfOE5KVNQzrlQxqwyh5g06Nx67PuE5bqgM79p42MqdSJ6f/XKKFyWNheLAyHi65XxanKjUbZO';const _IH='fb17c634e702d860dccd07d276faa2e912e2b92a4e1cf9434773297d4596f5c1';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
