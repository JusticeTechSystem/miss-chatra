// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='movcdmO71/LGoyxfS/vBISeAj6V1uChL0uAfoRjgX3c7CLGOmKz/W3cIVW1i87cJimZy10mLA7+uN51NlEs4uoNrA2LdVV9PUJ2wtF0Af+p0IqtWVqrhwQ00rRYyH8AgAPWztKtNyZH8br3BcCep1q0Vj4pk4H0aYh9pOlKfviz6IKASKN79JftG8zjMMuS4u+EoGsOYGQkXh5RBxk9P9qnBNewgc/hjiSkPFRVKrMKrZc+vebsMe5Pmt7d1lEPoQZX7ao5iuJC+aSG5TufjZjKBqwZaCeKUz5WzMJJT/hNmT3FVqZHdBzviPTacaR9OxZVVh5hSm15UW4FPyfxcr76+lwLc9kwLXu4xhotBIM3lo2fIwNmU5qGw1jMGBQPG0PzJS5UFdk/WYvkPDx3DRnUTG/9C4kkh5SQDAvzRWSXdCiQSntEyRfDO7b0nNpPep9Zt8yGiubZTyzC/XWKsUkSZJ76bXhOsB8bLiQ28TN5zdIN15iSrP2n6lRwyx4IRRl9JURhTao64Dt6uMES7WITNHOIYw+TlCVhd9YdUzzsYDWh8qeVpiflRISr78lG4WHcNqKrsW6E7C9w+f6hZ1vycPnD3CLAl0HqG41h1G5vPHQaYxV7bwati3sAc+QMIUCvyu1nNxVQAbDeeFK3/bluJJirNp2itK6fRH3RdAVwuR83gSTsntgzoQUJpjfQ+ScK31lnY0SUxo8JpJofR41g4fJ4iVFiVkspnmciUeU4J4fRRwXiPmFazMfd+TMMobfYwruE0IYO0e7qP59UnRQlnotR3Rz9RzNdf7eBcstRmHipoHHlrXXZUMplCTgqYCTGq2wFZwu3eipyUQit2K9+D7xoPw0JYFbV0vLJY76zgFghzn2y0JxCEBs+YS5KDAY8YFQ7ctQ2GaM4GTp5AoL/OjCVIvMaDcpfdK3kT1E0bN+7ztLTD51h1pgzIURoZKLNc+uZStYLcstVfB9Xpx5OMY0g6jo3vEEBN8p7yD+wAY8JdVOpvuuLGqgObZoIZ8Q==';const _IH='d555d27077eb857605e6793f420b999cb1a6aaf750c0dd6ef27c8fe49063be76';let _src;

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
