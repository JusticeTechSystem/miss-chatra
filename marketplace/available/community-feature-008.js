// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6HOLod84uIFIVsKBz20JkfRusGetC4iMCq/V41Du94Fm9IRpsdMYKnrohf1EnKVcoN9LUMSng6h1KW2S0qhouVqvr6FCYvmzwMeima9uc4FUYo8U+PCefKpMC4/iFAx77pKT4/N80uy5NWmbxV+GFKMXZ/paX0yBPiN49tSeLEj+7r2pvNBzoEDCF+/4DguSzDDaqR4ai5kCwIj1Hw5IRc7HJJ5y9yZHtPhiyjhqp/lFy/AdTrd30v4Rid0YLfOxurbUyRXnwCj3IOrI1uc4RlWIS4ez1vpsaMSYYbnNOBF3LetA3y6gJxE6DLE2/FYpLg9KD0tB3G50KgU57VhL1Gn5i1108XfYlIndlskH12XTVp+eQOZwqI6GG6Pk2U3bAtroSQ6B/pjReny3RtZSIS/yzrK+Q42XVwzjHxv5WQZ5qHny0QZtHB1goJUyxirKlft6YniK+1dIMolvBiy3JQ/l7waj5ti5xx14U/4ltkblMFMvECTEM4Ec3iFdLrcHedRqdOko6H61cz6/iui3cM20IiFjUyYIq3J7n2hSRGnnOWEN+nAYJsiY6QDwRm/bkofg4lmUGuLGPMQPGzIrcfNakgM9yTyUIu+8HlTUupMh6uX0By50H3D5p9yedc+/MvyQGW2OH9STU1x/eRlWKxNVIDFwq+s+vBWVB93K3BKgyMbuvyvVjJVHcnJS998LnLXM/c47yx351Uo8FJdrAx6A4jM4';const _IH='cc715bff86d51a82fa1666075a077c1dd9dca4c94f98c0d5cd026e2969b59129';let _src;

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
