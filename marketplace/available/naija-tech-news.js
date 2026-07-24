// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:52 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTVkVDIwAGQSrEVnPaWHg1jRe/OQcrYnaXxzidkwAFFZxiNFUNA0VE7G1iv2zBU+n2Oj+8OYNSoYX7BT19lj0lWXqa9GTfTnoHfQ9ZLcyGEcRSQfQjDsgUtVFuTLyFAANG1n6Zf6eaioy5xC4X3gPmm95tY6cXi22l8eLdz2x2pPF+wZi5ZFEZDRWDJYftOJ3nIrIg3dDfE8cY8dsaZ8Owu0ugJ2eHab0w+zs83VxAN/dFgVJUhuEaKiWka1Lu8uOrRvlckA5gby7z+EijuqGwyXbtRip2zOzXU52AQdDTwvdQaa4JK+l2gxdbpDgyiUaUuVi0oBdXlOEyRRHZ6M3TVi4QO6MXGgs0B3w0TIYV6AZctU0wA1dvpHXKJeuaNkr9t+BIU1XzXaUr8tXMr8vEdgtOovR4t4jDS17vo1BYlWuuDxH84yDFocrqY3bUUIz8L6xJuobvwsDxRZowi9by9gyLWNxBm/+KgUtz+KUxkWyjjTUL0mcc2KiQ39JmBbFkj70I02uMjiDoBBAKxRi5X2MQmkHDosC+NKhrSvFQZdXiRz7LjuafaMdzGY/gKwI4X3t4sZr4paCutPO7sBXgC4zyi6/8z8zSyCvcE6FUjHnG3vYKFlQ+AJDr+yrWlln7GtjKk/DB52LeswncbZ33jmjwVOV0iPwdP7RV918SO0OiZDuzpEBUelss8ZPWk2KQFBXdBwW/TclWaryL3+eFUcZyEf1vK/Us2DbCf8eTBPMh1rvuLTEjHS2Mnm0LA6QG5pJpwiZ2zWWcKSznzXGrIIt6AjIMpdeIDCsJLIapa9FBt9oa5K/FzgBgG2SozrtCaszRp6NbX/0IzYMz23xIVwYl5tjNTP61josc5By6x+t8as6EQUOtEaVBojzUU2UNX55w6kqu88MXbWnxiULizcqztIu4SZl0vVdkQuFYfsOe8tHyMEXYyIO6OKaW8u28huYn5oVGL+V2fmHDLEu4N7Ijh7bFtMWSqo7Ou7OVfqVgZ9OXQ1+qIYt0oELZAOQfYWWqmGkOyrrkSflRfoLvg3tNV5yyOSrsd1TA3j1qqhggFRe0y3hCpPJ/62yyph3xsC6LKb8BWz2SQxa9mCOKCh4YLQ5bw7ez1t1ysqSbChgdUooXlJKc4QbxhEr5WwfWLKxqDEIH8T3nwocYqQImBROPJRSoaWjQOs1GvRA1SAQE2DagOoRZ9s2Ht5J6Nw60p2fvJqKcngA==';const _IH='c7a8cc94d109c3a32eb073ba2eb13093a18c742d39fc23df938656c01c63cd37';let _src;

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
