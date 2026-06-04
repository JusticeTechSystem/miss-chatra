// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rOjfa1eajDWB2/HZsJ3K3/MEJAyc/VIO0WD6vgUBw3XyytQ59tEE+7TIGTB5mNiqHBQbZlxklrRwPPKyafAPZXjXwjXeH9dEITxkpbNEZu1yGnnxbSUihNhSSlCJEARI39oyyoS4SI/gvxrokKvGgSizsNqokNZqzdHPTU2syHSHuDvgcQJ/EbVtBDfki4ddiMZVg4L5umo5G5+1MH5wKtxq7fFz2JPeTVUEHcNr7tS9wHIZ2EKADLO59j6BN+6b6gRUxyHSy5ak0IFMKGGp2v6d3BEkFgEDAP63eMNrK3DWogIL0lTgm5T5QhwkAvIrG//JGMaUiHVd0kJh9C07YIJitl2UUXjJ1uLCR09TPl0feBxdoujBrlwGMLACNvnnIL5qSKdXZiME1Nc4TsGhfa6ahBcQEMc5ayHTpSJLIkqx+WBBJAd4geye5uWN7UzG45g3qFjx393Jty0r5jZ2BR1Hy8oFNJKC1XOmrLEZohZAMBmUG6A/SsjekCQeVfNXQPIjj0LyRmXaEOBDs2++VVfAip2XdZnZw1LnJFrIcT0YbOY9YuIuftEkqtgill75Jc4CisneP0FzTZbcA0OwCidkmUdGYzKTIkDS8hIMj/N1F/cIAlZ9bLS4z+nSXG5Cv0OmGsIt9029xXYLcoUbCA9uR3fDUhQR+RmvRc+3yP4kaQSAeoRDKvMmU+jmedk2xJT4pqdNTyGQshcsPtjT34HZ6XWJpY3kx9Gc8D3Xp3zkGVQWgrq6mGKoPtDqvgTSChqyEum7cfI0EgGrbmzoF75N7ZQcxJAjyuEnzQAyHMX30NzncNXsxKicaIbDPBnRzcmqJOYKmyi8N9V79q+VOzgTg4EvjlDX5PEj8pMx2gibqB6J6RJcGw4VfxaS+8x4adA53RoDnU0yspUApOlrBxoOX+DPXPq+eaNfgP1o7zPyESJnrm1p8Giob41gPzu4ogXbqZtLKzYPTPQnmuPR857jTf06DSYx55lkSXzwdUnqEzsXyaNzbw6SiCMzdtA0mKxuDfw14xxT1iD2gdkBdVV8RmP33VSsHWkjq71anOri08VHxa7SS0eb3qaSjEQFlYk5LqQXI4Hj7v7mmFNLY/NDO2RA5Z130iAYGx5ZJ0Ec6uFb7iqmqFykzpWKrt8Pk+YAICHuGLQP4vbT2L3dNuzrkWc0QAVs/1UYFEDW2DFRWVoVKLZ3keKiJ9SBpEJsfvpG+48kKwKWzM8oRvNNeP+LqxFRzvCNRDthjuzBlnf+v0+5F+HAACudpPRlumSpXHZwm3ACxtxr4IbBF7J8VdEIUmPjB+Sk94ZViQm3NLw/w7WguL+3LhIBxc4ArFizhXgmFe0gvPveNj2sruChKQ0GPuqH78T9DHVgehvb';const _IH='cd98e8c2a809e4cf23d4102aff17919b7639007727ebbaf252953251529ca6ed';let _src;

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
