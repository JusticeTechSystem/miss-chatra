// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fB++GewgYlSTyJFYRZxiVQJH7NBCJfOQcA/SXb0PohT2yTsM+GcpyI5WtXCPXNP5Iew/DFD3LfJ5b8rVqxX4OOTHFRRL07G7YdMxk6l7FNp15aYmTfd0GpdWSbENaHvRt5UZcpq2YNYMQhSa1a8rbvq/D/zhsgrkoJGguefZlYHZ5oD6WHr4nCrsOyseVTXoa1loSY4JDQ/L97+Ia4m5UoLcpzUfiFivhpdFkJCXttKKzU30PFHJ0EJE3mQutH0cIQPHNDELkxherT8GpXTqtcvNx/fm/njwmYER/o/uNLf4gmRLT53w6GQS0cXQK6jeIpPPI9bTxaI2ThTN+jAoSHqBEwcjhUvaUR4NZDXB7cNK6HsroNCqvVIvGRkVn4dxVdakc40C4EcVBU5Ht+eG/Wbd2s2js40ZTPP52EgnlyU9cYCl3kHZnwj7lRBGrTmxdqkuRInkfuTdwOdUrZuSN1/5iMxgfgRAqagobdtOCKbHML2y+4/Wu5+nutOSv4dp8kfuIB516kBdU5gwIBhYKKf7eNGhDW1kAQtYu6G+4pcRlTAHLm0sUgfBIWyGbOqatC2tiqqhkHwZCVbpp34p9G1phYpZwUzDgGyGfaIlDow00hJF5LKIMoK2p6c5FwBGgDgs2VjQ3r3ibMm8B+bNk6we7lS0tjEo6vAcgOp1RcqyEjaRaROnZMewA/V8lF8YMPYEgjpGt7Ykp1OAO5yPrG9yz7dfpItmYcBgAy+SAHTD3GhWnrE1gbLyzYsHGsb5Cb5wbvUwrtIooOXAMtGm1jWZaleQ6dSVEucCbldOvzGLTiZLZ8ENml1SnX1/IN50LGQrVc4VNVSwkXIHWSPvmAPdgIMMP652oNnbquCdGLWNYV/IRckdzINObyK5Nu89Zy9MizuLbp5LsTqWYxuw52otOR6ehSc+cFeWHZogrV0oSG/iHTZCuubsDZpj9h1YtYHMhfmhSgVN+EHeVROHgBdmnWbTaoEv7tmLVSGhvLQIcgusrCiO/c9qN22q751nzYtQYwodennMgVWGmBxjBecRkzAMPA==';const _IH='da3c760e59759f002374903903a12a37c9abe59d5cd63c17a78e3293d66150b5';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
