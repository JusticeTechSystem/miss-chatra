// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LHbLxHK0gW+dGro5KCofjSxFmmcbyuZzPAMiFT0+67zcJmYu3nX13okfFRS5LejOG1v92LcvJadfPHgv3eeAXiJ0q325rrAC0rOeHufODriPtAuGUoJh7mC/6PWWnWQmlx/LsTNhdbRyXzyuHxj8E0rZRkuUqQ0WhSK1SGImTNNQ8lvVLgCX5zwkIDAhkh4T5NBYc0roG6kdgu1iYZONfZMKbAkiIYhWXa8r3VQPrLiImaqsXoFaDF8s7n+gwVeni6xBZHbigU+kOdxrfyv95VY3q5jkkGKYMf4y3fL8HxjEE/FBty/iFievfKh0zZ3fKMlJWFBMheb02D63ZrB1SaOEu63NOo6Ge4FAe17EEDaszxvZMXtIHigAfjswmEZmAz40sb0cA3QZ+uVXc4UxyKdIsC5zw1HZvfgkrlc5ESxoWYbpCE+BtkrURoLQaNGqJ2tLhP9O/zkWlNsotkYGgdORCjn3hEBYAIiv6qlmiFFMbl+QOwsteT3j0lQcFmMOWIE+k3fky+v2FiuNHFvdlFVh09Dnp35CejKxNXiUiPLkYJTlI/EhpeKknN0rU9obti2zOD/8ZyBiH0DfUZ+/kMLeBAUjbO9L0s+n6tk9hcXfmHfzIOigGMQI/WhZ67fMk8oxgDQeWSmnG+gudy5MRl6oAxLJStlH/eGp/uRf6YTvKqzd5TIam8bj/FLt/YZvta8vICWvTb+a7pUc6nOxf9jUhq/TyaZNqQsBxBbdymKNpEy1G99Bjuj7fny/F2xOJhWYiIyZmqcSCA2w35g+4hksjoxpVZ30NtUb7wV6YCt7rDwUdMkVsfwdk953qfSZ5LBVBaPq3Bvlo4Y/JR0xZYeeJPvUXNbtf87Mv7AKSjdAe5okDlzheiHd1cP+e4Gndcn4vR1Guc73bXpxtngbW8cToraEsHoy4kFOWmjYZ765H2hL3cuh43QSQJiXyBB4wfx/1hQlV2lU3tdIzodn2YFAsljwdyak0GzrOJNIkbd6sexK7koWteDyQV3Rh2hRORecBWpS32NE1E9Ijk9s/jym16esdHoEoSI5jXGZoInGGKEuc95AqCy1sYHBEdfjRaXComxNA3eqnJoASELR8nA+87cV6Ew6VYNt68SF75L3Iz4hUflZYa3vh9BYdmfqgQCmMsD/JDr9CpZi7qdVkmtZvW8sNz7hv3l0PO1ubtAfieF1JgmTapSzg5h3hWFnGsVs4AI6Fcf50WmT7qnhGPFcoFInoSvK81d+v5t7X/3PNcy0GZpnSn4ihU9GH0qFFuH4VCuqdc7Jg+6Pg3ffbFA/WkioychdPD3MFjkZNgFgMfnZmnbcgxLX/7xSTmlDAfNYqXvBckEJZW3sj538l4rRzhs0HNdRhA7+WxRQqSDOVH4=';const _IH='a8d3679ef3c53da3473bad62d2c412e73f6064b36c8e47496d3a6f3c31f119bd';let _src;

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
