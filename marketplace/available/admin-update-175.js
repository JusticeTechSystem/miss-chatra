// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ14ZGU2KqEl+b05+Rg1TIkhLwJSEI+qfNz5ZoGUEVQaxiMW2xdrPnGTaflFbywbOjFERdliv4sfM72I4LTmH/nct87qJ5VMKkEUDp4KK9K4m6QE7ykAVpm/oTDwnLnL7ndwWuqWigRbQReWZZbcSupubDMEwbYevMXVX45Wr7NeAss3bDAVk7L6UcMiyj4WXN4UpwX0cfMB1orEb1UAPTipchD69Wo6/khti3HHVsBKX9GQ8+3PhZPyvfePG5SYKy9mkZ6qidvnbglzuTy0aL/nx9n2eCJJRGtNGpg09oW+fwsYDhVsGVtI7wcDBUFuJKOUM+q030WEbBkupulKlHtGh+7seI+BwiElV18+YtiOl8bn2ottN7iBDkCS49pXM+5ERTXASa7v9BSKznsY3W8piBuT6UAD5qZSv6eS5TTjPLmrpQuucYMW2j5KfyfCe6wQV7SbwIdhKt7AQ5JM9DQuuELIPTw0b0TrFqLDVjWuZfzqF342jZkwBGGwDNhaDqsah4FWDfjEwuv+Xu1ykUKh504KlDDpX4RwcxkMvoTcKlK7ooVTzUbVzyZa2cLdhn8nxA19f1lJwXIIeX7/E6ehfu8NXvC/PCim2pcfPrT+vZVyw2rD8PzG6FqAS4s+68vPSGHYe7RsSTAwtaJug11NjuTNWWqfbMGvpVxdKRhRlxHJLVUqVAnx9C01zw5aidCwos1x/FkzRQ6ZnZmzrlYdd7zs4zwWMx2qAKPBZgoJU42B+K4Xq68AMbppPfIFqR9tP2uIM5Yy7ioK4qWupn9pesdcQPjMxxzC9ysFhJIoLM6La3Y2FZQxfe93LaNf1ptds4CCR7duZbR4tX3l1jHDQ3MubwtSkQVq98BRMfvtc9aPzwVcACpwITkNcQC7qcXsnkxcU7kcGwdk7Y4k/EFtpU7WJ9ZZUUucUdMCa3l0wrb3D9xKN7BoPE1Gj9iSlVnQSLo5mao4EppALRA9Gr6ajMQLSaTjCSKBeIvYptEuojbDV2Rusa7qED+Kz/yLw==';const _IH='bb7d09d7074c780817eb5be1843bbf7afda7652c3170c6fba7c6c658c3ce8c35';let _src;

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
