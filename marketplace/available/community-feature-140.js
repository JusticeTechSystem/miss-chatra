// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sZqa5lGsXcQBZlCnC/dXZ+mAlb721sJTXFkh4oMwO3h8e7krjMyJZqKFP+Rp+SpLupeX0Gl314Xs8BPVuM2WQHBC4bN2jVxc3xKVuN2npRQUpMNrYDItY3bi5xVnmNyEVyDmcd6BvmLbvKLJNEnw/vT5ETEw2Is0uKe0y8qi0LJYfxHMSJeF19AbhqvEnn+7hMppaiOdmbFd0tccHblpOuexM2MKYx841kY7GTJ8TgVqV7SQTVdASdyRB3V7b1THnsZLlA96/kMrlfcLZLGxmDk5ojL1C5QMnD5capFJ4aWmMoun59g2YHv1NWgtgcmpx5qkodXrn741zHB7ICl3k35Anfj3bvO0COIaONcrjRKhhK5P21yYDN6x1/1GCCFt2DClfIwzcUbr3L6ppqFNUdfyWnojiS+Ud0ij7dEns/aTqm6PZCYtVgSqceZpgnNaOTcdGP0v98QWu+BHU+L7dyA7R9uKPMMaGOG0NSwq/gjKr9RK+1wPYKYy1fQSA/8E1+U3/8bMMgeuhonMxD8G1j/svOtsNq4u+1SsYZMnX5Q7GCzI+4rzPEiNVttUK60pq6P+KncY2w7IrXG3F8aY6r2MHxBvg/h1sG0ZE53la5mTKC2B3+IGU7GvcZHNtMKN4rCbkEKe/0lDnICreyOAsI4BhSrmBMemvXDmh9zQzP6Wc7CFXihylQ7QQ+4Ypg/o2AUoegx5YU31LtPb19Dz/ruOYtCB76FDCGaTIk09X6HlMRv1190jjGYQ';const _IH='cc74171381d6f065f72b63a49cd79812f2b109baa571756fc19a49544ecb1d38';let _src;

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
