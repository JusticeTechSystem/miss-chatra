// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRcJYwembNZBE5/zt4OiTviMJ4PGQNHJXSZlPvQUe/7IavbmvKqcvFoouPBZHRww2FOcgKzb886lNF3REO95ANJBOalth1+XyMsun+bDNsgrKtY/HNkgDIgUZeSeT02GmxyFS2N5Pbx4v+zPo8YlsL8MbJa7vF32nBcVOmpVn47Cfe/sVBo7scZOaKZlw5sii45mwQTstuHVBsp6oPuRgG3anWj+L/Trv+yJQg09e1j9vLNT8TycJjSAA3qqC5zOQpR/o0mypJJoGs81TsKBMl7/ay2qpKW3DniVqg3cDfK8ufgMzI8ffdU+fv9hi6lEMAl2/5j14CJ4uBhE+DEyEJMwPRjOVKMDsM6oCAxztewuMx5yyCTvCB4RnSndacA5NWj1Ga8VgWAJe6lXtgxGtQXOVoQDfZ0ycFa4DKv41Ow0uX4y7zSHeBIUJ+V56QlDeMWTE5RlOw2FzuQ5CCcUnOLstKUGsgJWWHDI1wg2mevfRuQQ1lUeF7cVnF/vULVRFZRDUB9VfOzforcmvvv2TMdXzckhS+H2WqLtAtwVNBAKvIhl9D0fZW+B1bUxFbFUSrExabxNK9rzdY5lIkMppCVevpCW5wCf2Ecpt5zQ9Z8LlJlIP8c4uYzeqIz+4Xzpxjlw+WCP6I9j93ndrICYv7XZf9YtoN0ukCDGRm4o9aus+/GNqWWymlbhTlSPBY2FcfPFeES0rLQB3hPvZfZeQQSQy6Joz/IYFbnhpLKl3qqGspcZYIZg/OBMTPC9X+9oNIzzbw73q0kr69Cu+Q6ovQFRehOyTvhCII+FeHhCbBd2MeO52/Exc55Mu+Ap/i3hihwPrffrcHFdBEe5WenEBmIomIPINgAtng+LORWVy8+I1dOoPUQuAW/LAVROgP9+GMhV1gy5ZiiW+lra31MXb2/+FWL5KEsuzHGdvYxOmaedCgNUznB2gAA0Bm/BgmpmqtorUAu9KetqHTfp4XRn3R6uZ6YmcFfq9ZZqXRuq6Nq+FNOIItKuRORe1/REemke82oY+3s1N/8gSqVfMvtXqKD3tS7OpjHi7Cli70ZAcUSZ0NEGfJjyjZuF4aAWTLlBJWv7iup1hA1lqV9N/Nt4MhxQCe5SdzCCOw7gVkindEgaX6ScViau4LLTbdfyf/wj5jfMrZHz0Ye+QnViDro5hyYFfaRoj5CD8QV2ITAOHPU2KmWb7RA2TapCf013/ytireV4cPZJ2EVyaX3DtnvWZwe+jUAaD84T8+SgLIBB18LQwiSWSeRsYn6e5FXvHk6WvM4MmnCJF1inniwhj4nIx2XmEvIzyNcvQ6jkXNMMyJIQBe6nA0mpmFSBZ3WTqAA2hrt0cYI/K+x6k67nZ8R3bHiNKo4tYWe8Y8nJSc=';const _IH='c20f4a720140dcd1074156fcb05cee8661297f0c000f15399129aacd46420eea';let _src;

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
