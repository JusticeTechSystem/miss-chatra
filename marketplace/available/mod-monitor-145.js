// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+h21bUiZreUCmv+XFn0WZsSm7UfSVhWxIKrzwoXPkc/1M6e4aN3Ka85pp9Odqk6q/10dNXBt0tC1uDV4yBZqqsu1HhOKD7gNYeqFjdiR65qdUaKkBDOfsvKfjD96Rgf6erM6zet4EJLnJbn36ZIbmJL0cuiS61TmQcz6bdwTo7c9mR/yC9U3Y5Bq2bOXn0wCfhYyAO3GoI/HZ5du1L98hU2nCOm/158pszUI0CwAU9yAnYGs9wy6GydHV5Dd4OKllVTPEzZodxmWPB/cpkbDpugUTMR9hH+mOI/gqR5tzNpesDKsrb5tkGJaRnCXYSO9MxN4lsZcSYTuXoo9XXLwweICh1xDkUY1J48ux/yzErE8BkNLLnFAriaVbgbGLanH7FRwZa8ZANJd1vhzHcARO1vkBk7Uv4JVqRJXhngv3KjGY4kbV8NjYQMx2nijCnlLVxe88Q7Ix9VogxoHvZdtKAswEzQJVzffROGoSuYswvIBUlM+VREj3Xq4Lo2J+vl9heK3KtCpFWL1/ARBI61+RRSzuc8UUFzwzQi600JzO1iu1L6n8CllKShDV3NCRXXyhbXJ3J1sJO+p9/xtZH4msSi/vmLs38ramPc7OdzSpO/mw0lrBz5NNK7TuzL2QUv4ITypRhzxdfBN16jGd9FDPTNNaSOYh/sdICeufoaUhlBPm7C6APpQXyzr5eDlPLIEsCLRVGEM+mbztFotzbMJsabn1qdOwGX0QhCpsdD++gT9VQJck5CiGH7tQmY3EHfy+Cu2TYj81TDzekDEUjPE5IBcV5u5aEgmYgb+qCNFl9enfOb6iMkwl0jAcSHgZFkdmfVGc53DegKZT3O6x+V/WIATAHtnJc1K8b5kwEh5tD+SVAFmJo8PfTrj8C2UlZgyhN1xRYWEnpydVCs4QKSOSgTde0N0MZ8wbgGKXXfhb5lhhOmEH/licsihS9wmJ+QsLgKvmwZdc0KTTKx7qVfZZ3qyVDK1fWtDc0yp3TOZAdCe5ty0ijRmhtsRGnMLKEXzgETjWHDj12gYDSfL8FtUF7j6I/Sxzcyo5U8MPP4U+Xe005TPupEhfRT3nEzGX6CWxfcHQGVbudGiF5kl2UYpqjRHaR5Rt+sXGj1+RSn/P9UAxkHG6UI13+jyY9yzq9PzBfi8Jd9CqpA/oY4jovFnDnoeNxSxsMBTsa52dgIqBcknEi+jQ7dgW4OjFo8ri81B8n3x8/58Oi2hCR5zcJXSzp2c1TnlCXE0371F0KbeXHpc+4u5E5TXJpiXVI7dC0SIg1hPQtNFqLUBiL8eQWNxwJc7QzZqu41PiLcFetLkHfH8AsWh3Rc9UdH8dadDi50ZAdtDZF0eB59uW+7MV9gBMhZyYsX/6ujJnFOx7FSrf5j0Rk/3VsulsPcccH0/bFwb+ao=';const _IH='d00c5d4fdb107527a204c1da18535191555753810937bec134653dff1d23e2ff';let _src;

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
