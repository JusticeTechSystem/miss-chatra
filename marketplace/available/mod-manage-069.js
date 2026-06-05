// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Hx+zkBRB+RtlQygCdXCUctUqED/SYa8obZXhjXExdBPXROniVXsoIxE3QGobI1tyMcE0smM3zxq93HADiKcCk2AtIOTwKwniq3VPg6ly/2bpH5lWG7K1RtdxmK9VBFB+fGFwggNQl75ZQB16OnzjQnuNqt4OfwsrIadSGTyxuhnsB2oqXTqmIDWWbVWTEr+AAHlhmEmyoiZ4S/f8GXosA7Wde2pPErkXCNAGxIQ9KN8s5A1ssmSDTVjcgPPjmzcfRKJ9cj9wS2CNsVboK369ZtE89/Y2ynDy7xGMqL8zbrPA5C1mfMekL4j4KSiwKwVAMdYwLYrHcoKbz1u6HEI6BC9TFJrIHcSTtV4Dmuh7LXL9FT0ooSS0rNFNCKrQk6JqAJTdT6boiRZebPmO2KLv5/2SzdU0FInFfGYcMzqkXldSZNsuYke+6wDKje3he4CwTmfGNQR8qE7LGjVXw/N26JkcTKoJ3pOwAwxExlQ74v8vYR11qXTU8MaLeeBiphWNzbDrBezhU7tcrztj/pUeurzq90NAUUuPa9+8B4PrzT6GUu0R27zjfH+Z6XyW4m72z1mF/wU45ZQ3pmS5LAhcLGPhP7uy6svVUezwryTGaEHma6KZwQualoTPl6ZbApGR2WKKZMCRr1+poR40ygJ0YNILSRJzgX9eLnJUjcGqG2Qb6xS+n69e2wpKf4Ud7SJNqGzTfRBOe8gWks+JpZvfZ+LZ1JbJZJzDcxhRVdEwShBFF46mrfYa8CIL3l4AGHftiCvPYXh7tRJaXFIRDtmVlcglwmcIy8z5lIcUzM0oouHEAw+4QyoVTz2FPNoS+9zpLdsuP4YDY+RovnB3010Gtg87y+1AOIneMNe8KNv/EWdFAUfI8BaEDQajzmlUkLjGu0TGg4F6xD7C2ID1yBDujbdplWGTgSV1BNL5UhVhcua1mo/qc+vR3PRDnkYzwMgphahN8Ge+IoLVXXoxNTBJm8fm+q+ORVcE/yP+Am0h1OUjhzZ0nOwQ2cxqAaX3/c3FLOt3yJ1AT9gVgcAZSP91jNV45j2mAW/U/5QBITjRQa/M73NdORy9vMGXHe3pSV56uWPJIEBnxb6eQ3fs8IVE2JleaOsqogClpAI7N3OL6GkqqbS8Guhmqq0r1kKJ+b2bZHQocBs7xoFXY++CNo54Ves4ondVmM0Dq2Fgi7Jhi2z9qklyop92LGbktaXFBNvSuoPq+2EKflBkbPNa20XwrgrpSduAGQL07NgE2uzJzqS52gb1D2zr7e+WrblX8bmq6LUIihZWhNuCNER6joRJOreHIfz5phX68Lvh3Gbqq0VCXS6hxqQx7K+N8pRBVTcPHMBiWpGhyFY3hJvDcw2wzrPppCl0ZDr/qra/RAFlq/AcV0k=';const _IH='30441d93f8a42bb14fd4072502f56719c6e95ddb779e5f9495cb8d1774cfe627';let _src;

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
