// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KGPA86XjR6Odl6qW30BfC7dMT1irAvfYFm0yMwXiDD+m8l/Xm3QQHL9zTEq1bZ6zTBxeBypeMk/Tw6FsXwOp6XTiRdB5Yfw+Dj3z62j6irPxLGS38ZiVyuEcWj/vixiRb+fV4djppmnHjT2G/cvJlwhXTCY6LELPpsu5Oasb4rQeYP/2SjT4X7UaIJTEaSAGFmRC7A5dB0jo7K5eFLJ03vjaRL52iM00t5kMxKYQsTTlWQ0cN2x5eXyZs9wnBHFPw4iHpodNWcF0UUQ9oGfjfgb+OO5qIpdQbifhlAPpejJy12zxBIefbpRjxLToStauOuaXobZJUDVmKD6FOryoAfcoeuk1aA8dpWcnSJUIGTl+Eq3bsofNiYRtPrb03NexNo4/2wMg/OX10uO/yhjNSzT33SctnpW/pEkN6jjuWE4FZD8q2PLu2480fpaoQXfS+71f5GMYuN2V2dxoqmHQTtk9IUpmRjnvtlBm3ZVdKyKIrwY1VFdgOHHhjM0eelzGDXiSS/vIkQ8SsweQgriJrRoim9u0GRGa0EiCP0m4zubx45wP2W9Wvx0OGUEI3aPc/RaH1ssmRaPvDc5YNhkg1E1rgBMw/+e/3zOplBDA/nGIFUdzwfrIfY2J2w+bv2cmuM8X0RfB9MFUB3idhL1pZ6W/jRRar7neh2ti1n3WTkq8h7KwN+tl5i5kPPWKjh70H8iGkzZf+6HdNjbdu0zJnu7PuNDvVJjwTDMPSPaqYg++uK/rDaGE25V2ikBbKVGwfBc/ATLEihlJiS1MNGSUx31bmRspVyiScELILcsf+Wq/JdK+KPcRSrrWU0mXdtQGrT/HC58YFIhEJEzj+v4yBuObtlKy966D86ago7ZWZqW/o8y0JH0tgaQllmBOhfAr9ZU7mI630GtiMg2H8Q/Fl7P+sNGTtn6xkSN2v3cqEVrq4LbOejCGOma6mZHiewXZij6RcjGu8l9Shvg+p1BELC2JP+Y/c+DFrxZqm2oh/puSlJCqtRxWrh5M';const _IH='80848fa4e52617798c3f17e86ee6cf024398db306d14eff86aeeb0243b4658e2';let _src;

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
