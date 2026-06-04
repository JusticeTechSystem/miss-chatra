// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nHLoIT3fQE3nb1Fdm+8hZ4LAL8JXEryGPEsJnXoIaDw5UTJ6Q2vVw9hpOMh0q+yl+jRtzi5s13CAKgQ5Nj5kcGNSjfF21FRJzxh6KROZcNxUGHx6JKS/J6wtZw/cVrB6N/hCJsFDJM2yZJOnHxITXU2YtyICZ+9cp/5I6NMypPGiKehTc2d6Dr22nqec/XDY3MTLq7Wq9P9WeyQfxQ3AgYDbWsSv8y+DDArxdYHYpWmzBJ+uE3nG5YsObxuqB2fge5Xj+JLx1WD4IS8jjyXlVJWbGuVlc0YQoa9YCQ3BH1I0f5TT0miVoTtjROeXSNRNOzWDWPlr8UYrR/luNEEhAMfEBBnqca0eJyMxdiDqJajRrcucU9+Pnd0rJ4dF/20cEdjDzr0slnPLGwri6vDppW8JlbWokZl7MddqdaRuF6u+A5fsu8BFEJGIGEmO2fM3BriYpc+EK7g6edln2POueVSa3B6e6QsBt7/O2/B0jhke8C5zON6vlGyJfmgGa8+gkMNoh/QkOt02wvu32HWcy23DSQlgJlZsyKq8su6vodbOov2T1fEL8WZuwKSEcmsdbW/XRQPFZ/ejNI/88b/tJ+L+EL1J/oYEQKoajJgnDhJ7sovz1N5CChYMPJw3u7nR79Oe6grnl61uxe4LeHa6tGVvVh8ZhGawgxVsVd9quL+42QDmk178Q0zOmtdf3Tnn2GfBVzRy/4BNu7vySqw5vYT7JyKS8Y5eM5zC6intMcYQsDqCEgQ6qRQtveitDitQnR/7/Wc4M7bzEH98AQBqX/IS84LBaDJmhUn7iJ6Ml3508DkV6+EPkFUgdjbX0eQsmaRkEO6RAh+RqjXGYbOe62Gf/Oiyp955X8PeHAlvzoIzMj7x99f4T+ryhkDQ2tIPJMaw4ZTy2NiPzMimXDl/E4bYtQeamaAfiOpq6pOjmxK0dcMy978r9lxUWruyhxzcWeFC5GzMzsIEzLrcvN9bUOpN09WWuqN6yBEC7ijLOVwDrh8IrOJ+aiQDFaXu6nAJ/8LiJD/TeVYEEIHap7npxIKPANNbTX6su2iV3JSIo0Tvbn3ZouARvO5/eINxRoSdE3Iwzv5Ssna9TLx0sOI=';const _IH='0b2b894d006a5407ae9047cdd940679b8d87ce26d13401d23619732eb4f75453';let _src;

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
