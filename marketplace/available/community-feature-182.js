// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eAfHHQpI0gEYK+8Vzp4vOi6YBAaB5YrTEUBeF+FemDk5Y2gCJK9M8z7CPjsOxZKnnuV0mlJwaYWhoz842NPwpP1WmhjUI4G3kwHO+dUYZBPwQNGNdxKeEJyZPEPSed2WGWa2Ydhq664Bls5imMYix9BfizDES8zk48tv5SDM8yobFMSPtUguZVdlP9ALHVv/BFiZmJIwruyY60UKi0IUPdCsWPdqq6VxlxOVuaksOnumcbxN12TU97QQAUiArNF42JY7XUZKuIz9BM8Krz+qHjSDjbXOxG/nSzEPbBOQnhRWoFdGxiWnz70IJQ0xj79GxBsNsR4M2lXacp16R6sP+hU4IQR0ckFEoBPZIEOg5AiBNvCkYAeDtTIMmKC5z8COazMSa4FgAcMIblQKFGq9mOMLDrUa/0UwWJOenXvyNBICZ1n4pGNKxKTxCkzuv1ibSUv1ZzdBoMISSVlkc2TCYjMusOXIYLzKxDxgdVjN2CoZ7TtRXyyLPdq8nSJDWxMzTvP4lqK9GESeLTR3/A16aA/s3IfTj7XGgCNiyqk6D2LC12a4Q/Cjwxn2Pn5vyqGtgviZk5VW70xUNU8UoSfUl4EFKRLDKvfSj9sX/iaXkmdM0VRLF7hnvvmVizmUhgwJYvz4vmVY9fAzgbzCQ+FRqcy2+BZGbbMqe7+6vOSlTXB47VtOyCKY1FauXFGqmB31feKVlQz8v9T0L5Ptzml0LpLxaAq8HuCaKHVC8QPLZzRBqeA=';const _IH='1d214b69a3d6e1b432caac8c4f45e066ee5738f230762c2b8380ee8b18a0cd2e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
