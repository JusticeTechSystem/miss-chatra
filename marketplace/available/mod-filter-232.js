// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tsFJLCN9LBfi7pjbiEcAuIWXjYjIg6VY9p+ssOHsqRl9zPTLLsKoev3NBZ1bxgTlEjun0paBPdUPfpMRCZEeMtOv2wLSAeQRiBhDcMORk8UV1TDArfD36qrG8W3OcqaE8CybmHcOs6+rTIiG+vEzVontxinrgVaRohdNhMnbFk3EJA0xlSH7slqenRDzGh1LzvDrQgBYpOsudjJr7TrOmYkMcPjJhg7/AtOC5t62wlS81Foa5bLfRdGC0m0J75h9iohb31B4itkwW1tNBswr8rndpToiq19H+ActmQI1+l+ztUrQ3EMLCFjrygkl9GUFrh9jUaanjMwJxJoLO64Bn1ZlNv6j3ZX4cZR3iddYVUswWXqK8ExNXa6hBN2FuAVDPT4ADEsc5kW19qA1l3Oao1JiWISluGAE6tFMzasvc13jQaJEsXSSygB51MwZVzFy0AWhN3fSJ1PKlMx4A9pC44uAT8VkmclPK7gBu5bLqQ2hDnj/wlIvlAZjWdTJqxBORDq+OXGjif7WRiP8J8uXRYpXLON24QlgtsyjOSYAmlsI+Qx5gSxpf6aRclBgYFsF2nEztqrRf5AjqZD/s0UAo86qmeBjrF5Zm98Fh7pLel9zRvQ69tI4eFg4XuhvkHMFRJWGT88CNSHisAyAUIX7T2zxk6PYppBEhLiNo8yxQI+Bb8TDLMeG9RC20zP3xYo1AeNac2TXN++iKWGxHjK5PLpY8Tc6NvjDPQJlJ2J1+I4Tlag44jPHFOZhzIIx8WoFrHiRe2ixKwAl03pWAVK9pxJl7PcxtDiM1U6wTG5rJ/RTVwzHl6FXiR1JE4igsFGF3PnQDwxh3M2SwWPT/kCXrbpTVKTgLTYRcKS9fvY52v/fymtCIEq2bMxBYv5ge92MudA9A1tVeJt8YSmpZ69ga6/4tzySM6V5ujzB6PwQn9Bky5TSKy3jORIF/oIs0VADLHMpwr4h1IPqLojHbxMvadfSgXgRiqm4tb8KedC3CX/ZhKqdDJX+pzrTH4m1l2UbMSvmK9/Lt6CqqAuYfH5p8tMSH8bFFzgS6HEL2hHHtQvQUEzJrPkKeNJTN+1Nly9aqQlxkEtkxFsUbZY2cIShivtDUueLxz3Xu3a5HcmnlyFE7dYvtJCzppqItpyY57pp6lVwo5REMxm4GkiOgfVN4xy67Voln0pj2pXhsTeN8SLgfrMRCtO+z02oue43Lza+o/9H6rl4Jgt9I+g+cBg1tslrN3Ob2uREFQILSgGvFfcDr5tivvXT3xJFx5Xp1JaaN+wGiRf0dy2ShisyjpFk5rVp3LOuSVcsmy+SPLunW4glWNniud7STjPB1mi7pugAlk9UsDHC6qikkslILEdXnzq5vP1Q+TTQwXQlIu8pNmFTz+gWzXtoRw==';const _IH='551efa04008be68869e1f8af7ac76920c774e1c89779268544f35e81c02789c6';let _src;

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
