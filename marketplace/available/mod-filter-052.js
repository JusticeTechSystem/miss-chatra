// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Yspx5bNimx3R7m7NKudIdd8a1uFkcgB+fVLfDRPKQ2Q0I96BihyuwJhviGsLwhWTCKluLoB9UoFoJ6bqxmwLSr/jgF3pCA7nRC617saPePijfT+UcysyLVsqxBmEjzcrJHgL1GVYYHACmGEJqkPtZaDJXd5BXUfstRkPo2OsnRyWDKwNu/N2CKowxgPYfxiJyAraXSaiVUvKi7NQIPZgy0VZ4GuWgK1lE9Jf7Pphsdir6qkC05Wbnk1vcIipckNFOm0z07AJGxCgQB4M92t+I/0NBbODeHnZyqt0fGlarc7ZU3h6JEjdbQVWsn2Hl0HxMFSB8I6iZn3WgmSHZ0jjGCrPZ/GZkdxqqO6z6nM3xcwiA77s3s/uu9ryxargeowZ99RINHB0kf4LmaA8BdpnhrSvlSKqaUuBtpCrCYphElGQJTlKIxG3dLTt2Q+vZHfJtZzgwDx595TyCMYMGMhHzradsM3QXRpwrJVrJUooABvVrKQ2OeaNs5qhF/qjtq1u+RU8LMaYCjBvHPM5VTUM7kII9BHGLTQjjl6eFumQAjPG9Rr/Wep7YU7JaVhY/PkNLl3nyFQRM0GSQwQ2/cdYXnAfln2XkBAtOkxmsYoI1Lr1VYfYSzz/le2ZF2Mq/mwd8XKhD1I0iHJaraNOFKeQSwUMBl5JUpcsP8sG7gIJN3VgAmQssNAR1gZD+tK07wzv0ZLk99OLdJatR59kuywKco5490e7BxPJ+veLPOVly9JkYgKln17E5TlF4riUUB6GoMsUr5t54QkVIeO4EWfWZT3RcviCyB5r/s/g0+5EedpvgUAif9x3b/tLd/bB3ZpkA8NPgmlAbPL0/1e3blpKk7F8+xsVu5IpZtki8AtYhk8ZaF1r2alKPkcDxR7c+FnlwL51lqblk+GaVKKatWFftxyzIxHbxJtpoavGk50kWAdosW4CLUWICMfjspogDOjuDE+S179lcacwMgbgdHn4rx2dOhFOqzWCQNuU/tlzgMaOkzOLaEZCtmNPqz472//0Wqdi7HQcVczR+IutSAF1AvXH8xLBuz7TDsZzr7VS2MyPE2D5NNK93MzCuGnEoEdfRwNbsg+31+jPpFUkeBYMq7i1qCkAj5bt0b6Lxg4aJptA1IoHaUCR8iMTYn/teRIcqGMJUxCqV4Z22FCyIbOQVXg6ZgtJVcWNRZ8IhRWFBxHXYAF8NycO5dpiyujwTsjaufylYmZ8DfRTs5WyFRJRg91S8s6lVWovA/Koahh18+atiRkC+ydIpuAx6+pub/XkC/8FEGOO1KKaihzfXKTs9cKAFr6gzjZzgHgqknu6ZUfQgaW/GvgkPy9gVwxXI7UQ11WnctokAx/RCP/2ybJCnIijw3hVqhF2MqErN8xHk3FxUtQ=';const _IH='3db0a5356a49df1059847f5107b6f2c907164fda8adf0616d1e3b770a2cf6e8c';let _src;

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
