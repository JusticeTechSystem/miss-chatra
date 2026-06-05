// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ov0kDGt8BvvfO6oFsxUmYvKotlVwqhqME6iZ7FVQduxi0ZxFQdi2Ah969KvUNoI5WaO81u1q1xLDHBUvINjg4Eq41Cd0O6C7Ys3bGIqFljx40R2+nf+i29HrgDNz4FgG1wZc95PrFaSc/8nRnvrzXwj23W8E03uRwrKphKKYvgYyNPw2KAiZ785PDqK/lq72cWT/w5ECTrzL6KKCUlGbJ4AwIZHMl/VMNimNJ+jBahBhdmIfj5dRWpWEiDhcigFkQOvczbBwUDQTgpoGts18lco4GAv2sDTKXuyHqSb+6QxD94rE0upvv2qs1ZcQPxcBB/JS0C1Mu/bLuQW+10SlKTLSr7DtlRHlGSH3TQAkyL7N+S8E2tnQ9sRmXW2wrbHwkMeGEd/faNvl3SxJQpBhr/U9Dgp4xzo3F/WJV9hMccKG0hfYHYbirrLtLlJWXmP8vU30TBWpMhfDnnvb7nuVtBz6pFPuBbnlG5irVVxr+7FNp0xdowF985/fFmUFz0qR7Ono+eitCs0LxyP/vgG6BaP+lsC3srbDsJxgU1xVuLrNeL9xAd+n7MG28ZF09f4EUl4+UK3PJ0ec2o4xdrs3UcqiFFLfTAhRClgi9IDBIjUhqHamiCl+x9dd4kstWlej2eXoq/AegTuSHhTGhzjFdKOWd6oVbmjOAiqMnSyfmkkeUJTsL9dsN8iEQTlVseTc1kg/iAeb0GI1rjjw/G+moxFbfFP/3nWyrjvPH0kh3lfySGE=';const _IH='baa7d659dd39e2872b04b0bb1c14584d6bd937aa2d82a26892f24c1424ee7f97';let _src;

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
