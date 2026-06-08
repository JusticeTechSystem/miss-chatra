// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1eSv/MxrCrQIAIowqqlkzJrvTJd9Uoepb1+oJXxKt+pDWIrzl76NWi7CjlKEan0xO2jMgYiWXoi63cV8tiC4M+LT3xpmjNhf+YRKn+NO0lTcMt2fTvaiwnJ5iF4uSEAMAiL1f+1ln0MQu64ff6Lr0hf0tX3RpwtXhAr3ICaqoRRPkEYFVluijOqmaJOXLq56vk8ILJolzsKJnIrWqidZNOk4Q6IVP+fVxu7gAYfUGcwnwc2eQn3bzh/Z0UhsuvLXZZ59T7KdqqFx5BfpqJjWuJdQkUUKwIk3aGhxYLJU/mp4VNOf2GswWd5b31lKFMIH9How8tGbJGk9lzqSZRbyhcbEtX6U1nWQckcYlImaNHu09LobdHoAPRPK5su88zWGnrR8TvLjnVjrJV4Wfd0L/MPQsQjD3scSiAgPWXlresyPCACTd9VjS00JSRhH4TCyrBxXEmDdGzuUf6VL0JlTIo3a+8GJeYhyObcYxPu5FlKa0DEW+Ndu+JjUxhGRfC0gKeXgyIx7nwIzHIsy2mKm6aIkwGh9f6GZfQZVtA2/wETlB1DbUO4OBHYitGJgS3RVRhLRjTp//dUfmFbiFxBhZv3TK7dFYn+Wr0mvcOytUE2NKAL+Yh1zvMWQGtpnUKpsSSVKbEBnbRYQASp1FQE3173HWNUotLVfiVkzL5t4+4h9CAxBPRP859rbwuGuBspr1VpFKmFSPmoNo8EJf0kVVqaT68Y+rZfOb3YNcUldSdrRIsnxD2ochmNp5kcYEP0kRBISDv5A/rcenZpiBI+ptKjthQM9SAMrULRl1hLseIF/2u2VFWxGUuJh4YEL6kDpH941xuoMxHPpVCfD7V7QFUh0UGpd9REO+xgE6QKtlQivTSp11uNCjuTyXLL3Lf7r3+P+2Yad4IFU/T/++BL2qQnYzsuM62BzP4clYqWEfYDFFrvuc331t83Omgg+i7uAuhxJidy0P6Iff6ZsFEojdkJlfB5hAAKzb63UdymcbG5fqh8/lz055dsAypj0cT5kedLDMAdw14Pfc3+qkiL2DAzKV4p3CQzEs58p/FxrlBOgQ6y1LfzfJDOg2jm27BSIgKSXfsMpNhEfCAuPBL8FNyBqvV/sGQh53v/grzSQAFk6l2JguFxfI055GYQMRXtgmlUAKJgKiNyM/2YeghA/QE7lli+6EMD/ZT1lcyWij5c1Uj327bj9Fnaj8AVIZtoTa2Mk6p7TUaA=';const _IH='ceec9a962637688fc43ec221f3f7725f6373fb5130ed0f4fa7b7167d78470362';let _src;

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
