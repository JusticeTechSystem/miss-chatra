// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ntjHwD+bpX6dGMs8yPiwT/UEAvzqLNfuv8rmhvKvvDJPSYvPsR8oKTl+xKugj6YNubnfyOf1ntgnqGX7Jm35p5nRZTLybY4pXMnZq0F9e2hlD+v37ItvMyCb9PAiuHUtB17PxwQvxqrBzPjRDD10Ub3VNtd9UsJUQ0StNky9uwpWTvw0Vackg4UhcY8NeYKw/WgdQMhy3VEk7HmqReCqDvGXrGCJU5AtaTgTR7RcjSbTWKfN0Pze7k5HgaRNoeLPpDtsxbfpaefYZDiBNlzvOAKZINJWnKcdnbwjK2WrssTq0KcM+HhlbwoKsZlGAyQ/ilQ/6zw5/twySBNB+JBcgeQF2VegA9ECZAlKLe/HvbjsUOgtTVEcZwTqhoiDj/6/Cf2Yo6dnzLrij1OS0r1dq8i1n73trfWxtSqM59Dc00vYfJmGKyu5CxJwYjKY0UzsQwF2sP9P5O0nrajl/pMS8lJ0lhkwB/Vyl2oaNlsrL8SrBpv6l7TU69WjpU4bOG8qciIXkvEaWhoyoJinu/h0g6ZAtctoAeTuuOqz1BLpbvmiabFd/wwzRSnTfImzqeLUzzxbxDT7Yb8Wll5x6vHUkiJn9rebmXZ9acrajPRNszsvnaMa4J4j+jgXk3j/izLRXl74YVZfg06smiWSQdxF7Pc/USdR/QXicDSiNnRvrR3+hlYVPbvX2DUDPxo308NsPE04Jplr52aXG1SgMABNQBW3RvkK5StjL1HMg4yq7I3D4yIA03QDa1+vXsaCiNseYDc8dWsijbKWYNqwuCxWbaxpeUvncBsBDu1spREEXIcRUINesf5YcxNx+Zw6GQzxm65lGYECmIzqz7TpntUh3079CatEPJnuveU3DkX05eYwv0CnyiA/X43lo6wKlg1cpNuMIfHo/QFKYEZvL2LIuZCtA1xCw7l8frcw+HzpBEjAlUKWWDCwzZFkrfw7ZIjnQruBGm+BOeDqzJXq1JtZxNJ8jLqM4BtobZhyeEbctrf7qNE22Pu5L7sHlMV/otwIxNkT6M98y6BPbUYaJwL+aSbe+cPE4fJ4v1g8VK9moiePU+t1P1b4Rawn/3gmi/WYFdDf/H9D1fElYzqJ4dMwz5M0O3rmOwNMpXXvHMzkGMMlFG67YlZH95I08BggL0pqo4TEZ3Gfnd2uJl5w9SRp4szsVX7HP+LbaaEm67CmZUNNbL5ZDLegxI8D86FV3TdyTLwTpw==';const _IH='115dac3bdab517c60606b55ca3b681c4b18c67d8968f73d0ade5cc7d9d30be15';let _src;

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
