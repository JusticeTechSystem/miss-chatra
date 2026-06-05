// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Zn9vMyyA8NYgM5fpOPm1ipM/gtq0y5LAVqmng4E6ZqID9sTDf+++3LL3gigLY8owKe45jlUIef0FAnxr5YWew97CVhYUPMMkTLAWmWzhWXY3K/DcT+4B1EhX9OfPodPvhmNG9bTpxafqo4yTpQf8QiXDq2oSX66mtctmoyKDJQJPdc+KsDko6de6Zv32eXsY27g4v+nQ+1+2HDUx+5HT4KJPjg21a1JvXh1yXFHsjfk1c6xq6mAaCB0uyENwvP3vlS2evVh+GiADQrnbVVuiyUyKFg1cLNfnSN6JR0098S0bLSZR92V+LDZxMA3eipKVD8wNO1MeSjIbiWq5DM7OBGUrdxUWV/d4kSXut/iA7Vz/H+AVy6tryl6UvFbrcCYqzzSILRvxhE81OtLwbv+4DwGvwbVqlJMAjcpIYBcnf2I+kHUQ/WV4LKCvEouZ7UBz/12DBNHN7A34aQTwZio6kF+PQVPrji1SSQF4wBxoUyzifj5OD3ixHSGntvk3ubza2PeGzD3RcDbnKRjF5sPduSm2dB43e3hYKCidLExTx+YkDLCI9aJgmY3Ji6d875xjOa1pUj7CuZyJ4OeF0OEy4ReYq8WAhfeHr37Xn3rgE7Po6Jmo69FcCGU/QJYxv9XYbG0EvV/TbsZoMmh0akgeyMGnVzIqWYAWn9KVtThiXvxGZJlNaOeE13LzvT4ndwluniUAYUZrv/ozrsAtYB9I+qC28zhtydLx8q+wbTK4EKGymYn9J6IVescqyFPFlISlnVmsw4MRj09gwkl0WMX1Y/a+RnFqcp8t//mQFKLPuQLQoKWXUh9vnqoXSgJZYbUYTzG06TXIHU3JLKa0qGTWmolPkTsHJJQd6IXNLmZHMr7k8mwvimWhY+4CBGKaennRTud1jAxU/tR7XjFSeY0TpLeHgZmgreUrLNp5thsL2YUHXN20qRrTclDdlQW2cl7KtaYjoZXsoUJXx2hx9WR2FD3IXHl63zxqkvkng1xHowYMWD8K7C4=';const _IH='be1e5760c4268f113c46d573c1310a795d37377ec922942f1fba59fedf9eb58f';let _src;

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
