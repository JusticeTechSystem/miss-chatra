// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pvLZ8In8aztRiLs+us9eaUzLANXD/qhJpXozBbgoQhP/QnRK3H5XGPWH4czo8RMYT94Ro2DDnTlhSv6vUG8oaxLN5P9hjRbSruyshN8zM2c3cMkpamePHblssaPlBF8jMwPtnEzgU1q6B0UQuPR+vdg8iGayW13kLtG3hB/1i1gTjoIwoSrwpOjDK2Z7mqO85vcsYpBMItmsL3o7EEQZOFDqWfsoBUmIH2Z1bC3J6zniHlK4SXRThhtcxvtZB31msiocx9YGsSA9IjMtVbh8+5r0SVjSiV+Koexvb4pTZY0B+IAYCe6HvoSFI/VpUCOWq7GPjgWhK4BKxOON+uyk61HtA/nOe3GzdzHAecoVOiZvBIfc/6FmaD1xjH5yLXuQHuqS7OgJlc/oSBPeM1nTvgL4J9Ca0/115KYu1yqF18AyzVvy7zwoPG11U07p6ETbjbTGdcqaGEZqbUKhQlYS/bW3aWkooLhbSo93m6ET5GLaKZxXlhujgKd1cM+MTDErFwy1edTphu8st4uyVArUyE9Nz2AT6Z7ltv9aTEZLMH0D7WBYB5eqPbm0G/7yeFfdA3YWoio254UJ5XY2Wn75Fpy4xdxdd4UaDWurxiNqVkyqfHZj0RFuuDZluMdTnHcWfyCLtNagd9ypUfAEgNyWFxwG3MSMGhlU/ClzyC+JQ2LfjtfRyT2nwQX3AbE3rvuxTsJkonoPTLYd28Y2JhUQFG3kRD414GXQERfhr6thz7QCOl+aM/Y/xku0RiEVktFh3yNHFZ+WiMESmGL+KRfCrQVJ9l+ISoXdKhLJLWbXoXQ1NZ+i51BLB1Zm9wfxTJDjkPKjjNFO0UBCocQvfMaVvdBDkE8Isw6/bBrz6f6+t72a3HkXAAEprT4gD+WY7zZTXV+UsT74fA1GvCns/xcJv474w0YpCaOIfyNz8F0l1sDjMUQQtC+szlv7mM4ACJI0Ys2UdhiDQiHymTZKb3mVaUtdK4NdiOnuT2de1jlQ8NqpLhfDd3adpFzXQhGosFIWTiPw2NDyoVoHh2/w/kmAsu0PEmstz3Ior0Z+I4Sf2ZlqmTamZ2+Xe48MT3I8nOvzKEdXx2yDSvuhjsbWc7Ijx9PyLgbNIU+dnkR3Mol/ysZ/XxMOsFq9Glqiq9JL1ScWVMvnJvOqna2O6IrfAj98RVF2Od/mLXGfCiVeF5zrAFYPrcogqDeM4hWaUujSILYYSLOAUKGiL9HoxW0tRGd7/PBd1/a9pqlByahwCYBUmExPwF6YVd8LemUCYZTYorYZnZsAermvZcEPixJ8TNPUe2d0WzdsYHWanjx+rt01HV+Yg9nuqZU6FtydiNaxAwltGAIohYseCFEqQn0pgk6FTuFRe8FFKOO9SXf7CR8zOsfTm2RM6Pf6yCRIN9O8sJbV8nA=';const _IH='8b81cfdf333f4f976c3224833233b1e741eae2398794b77761a234fac19c4b8d';let _src;

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
