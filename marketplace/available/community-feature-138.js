// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Swp6tYqXwJxYmofljMsz3/2EuMe/klgboEH7SIsEJwItN9N1WiPZRzmmmFPq8STEPp2smlQgXxbAKFGjSerekQsZ/thQBdHW8aOeRHCwaeibP+vktAjk/bBLJ0b5II4VDXbgs7EsBJR3tuUUnes+P+iY4/1EYH54SgpSpqatYvBIcSj/u9AYx7rurhbdp8lUbyjd4as+RibEQ22obKNeaahRgWS7lpTQlYzUpfKfu8m7tqnaShsN5yjBrWN3CR2J13qFgqBuwFJ5eb12DtFv0MomeeQUb4Ed5CCBJ49JAIq5JKUyIRm9Or9CfcOfTro7cmTsKDvEyziYoGXBVYM1Eku9r6j95qkvdP1gmrzUVdvE+Jx6nnSryaEuvhdXtCBq8tbLuEx27jPp5RXytDV2F293mx83dXOTQxBKNEqmjbvBUxQweLOzohWB9I53y93HbK759sDtAaFnaPtijxUhrPZD2VBSkP8A+NlcVVwDCoDNOhrVcdARBka+xAGpTbDKOvoMR57T4PAGzNwriUi6dnYJscOKvdFzOuVnsZwhZxHOdjRegGF4mcuni5N7jOV9Oyvi5BglRmjKVzy0wUFudsQPE8jZOYkZGeH6qxcuVD1Ss5EDkk87OJHs7wtTy9aNlpa04yrRnafxyqPIOhXOyGk4rt/S8WALZNXSe+gfN6qoGjaxynNfTsazVtWaMTMTJszF0ldKT0iL1OkgbH9XCJrTKiU60eGrr6RLvFo=';const _IH='104d83ba4a0c41cd574df156a060fb0eff2b888056d0a13722b5e9f24f69735b';let _src;

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
