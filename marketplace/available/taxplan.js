// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0swUQNODLy2BqNURkg5EvXM4xS2aNggRkaKutEQ0tMi6x3hZDchtkKHUZJ6r/+Ls/OC+dLl81YWW5cVZReCN0r1OgHu8V25Bf26E+4Fa2Gcnho0h23G9OF03pV6e7QMlDxNf5ama6EssQX9BNYXRJc+16MkdemXytYn+TeTr3tzLyg4/y+SzfEHord4XSduGMYC14C3GVKh9xF9dL/hAvr4mqqR5WKtbzUMX3aE1elFxCrv1EAgXWUL/wvVbcPg1YhOQRUYuRJdEeAAqQNjHuRFLg0DcVbTBe1Zw17lUKqANtBZMFTYPvF3XFdJyMcvRB3WB+WU6UwaK6TjCDP5aVLdAzbbKWwznFffQPgrP5WOjSs3NA4QzfgL/soG0oB4Et7fCOpa5eMKVEnYom+BfcIZh6CKSFiIzHJi2t5TVAva7fpBlCPhegTfRbJ/IkIkIs1wcTHa51RLYwRLNFdJGnfp2d7+Gu7S7LG0Gctg9Z65O3vI/OKnVbs5gXErVNTJm3YF2rgqEQMWRytQPJk9KRl+JhxUgvpaangPDtO/3JeHjerJEmBuDrcHCeX/CbYCcJrzOwxLtJO8DstVcKGvJcXzm94T/LqIFQF3M4G/o/Wj7n1pnGixN7BANSAyaisCUHibLNF7FQQOhetlD2zNmTjhiQhlkBLqrkv0Vmq9+aw0bNuKnQ0eBs0ocER13KMlapsJBP4UIm6qbWhNDbFyCyjSo5j4bQqLG+QZpoViJDAZEQEedDfqySPC/Ao8lQd8yy8Pszk9+OAFAU8AS1BaHbHrRNuxCz+EraiMDg3+tOspZ3HwSiaZCGDonahmidx15lNQxj9ILBZYKtTPAQlfSU+cFiHbvEL7J5LFJ+hqgxD8ux6nP43WH3FwnTcG3XKPeqBYHKc16eRBbDdpMbJZCkD9Q2ZU9gclAvAy9qXQZKkdhHi1xVnl8fC0rb5gCPWUKTyzmBtjtn4LlHn4bfq0O5zYkhFKl29ZiDc15biSPyYHBrahJrMAv05gtIQLCsRFBYWmJWr8THwobsgS3ARVK3UP8p4AbEnlkcY+hixJh+3wRbuXtJvOhQdrw1lgf2YPkPK0H2AcVwRwnMCftW1VTo7qynuvpaAM5PLmeIHB1QBSfTYrKnUJr/iXlXy2diu5kbp9ckS9RXVnyRYi3kU6j3UHl7ehUsWzVynjdWLShnY3eHAbx2ETQu7G74TA822uJbA==';const _IH='d80ed24d5ae549a6c31f7b64a07b8bbc53d723fbfe7bc369094141519f3bdd8d';let _src;

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
