// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:46:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LfGMqiQOrXJvtLHNWhs34u8nYaJwGb6KtKcNzjOoDSfTINgCxbk/fpOpEix7aWSrgTTy7oDy0iWy1ExLJ1umxo5pr5QDh7SSRrs3cJSJr3hdh2F3vx1G6gS5bMlL3lw8aRYLauBh7erEug7CZo1r4eJSxDywL69YdOfdfonATOJ/uBU2J/5pszFin2VyekSd7Xsm3cjJ/F5jn0sElcNNV1xxyHscXPwwirIHV5SvEAFK+QyBgUFx3ZuocTHAwkUSXn8Hu8uh2FFE5KwnmaZ3iQvnzlIMRvwh2WbQ1yCq7YjQk5r9zqvD3FqbIfXbj5Zpk6u3l2pWeHkQ6PhzZoijVArrWWc9PEFqq8AEhq2t50E7vlamvKYSUwocm1diWpb0GUn8m5xrdw/7EhokXE/XmW8GsD8smC6mC7t8kF+hgXvBOGtfYv6E1dB9/23N39zRf935wX8POmaYoe2UXfcqiGRbpSI2F6fj/RsKr1sVS+zqUjphA4rSdfSenWK3cefSE4xjD5crOgamR5vAB4WJqYEuoiQobbyr19BvfLlLehEvYvXtoucyw2g/dHGIoJQJ006zKDTUbQxE6lge9Yn+QVEdCUnHg96GQKXmn7Z2yFtH0jN6FEtzaBmF31P+Dc6+6IKELue9z7adNKq6vFEIBEQ+Zi1HDNSR9Ys5yMekzqPI3l/bpxku0azCIsdOKE1Zx88vS+vWW3jVT5deJ67WP9E6930KuUbnUFCYbIE+qzCMEMX7yNsETRjC9yziAjFh0WzgqCwAttWx7o9DcAl9+RuJtwKgxMd08nc1VPBuEcnvfkqHMnUBHu8YLh0JKyNjOTZDDnUl1uE7S+HOR7Bh8RoD4X5J55n6m9ZNsbCY0Oo5qnvjO9Dmno7d7EVhfCgrn7CKKyYGOHa3XPH26EhDjOfvzaCqVaAUes9hhlYKDhFssX7Oft3/MKgNoHGcCEIT+3EVPxN+vJChdsKfgk13CBqzrDQ6UhEjjww3lMeag36Td1eumIjurwvv/Yg4wclJZkTDXoXtDKpdFT5oJg/Ywo2c9PkuwoTAQ0bm5+D7Fv9anY6Tn7WpX8tFRnWScSeVCPnp2oAM8l2G+ymrxD8aDtGts2xVOlQKcG32AWl6NsqkPxzVZwDKNZAXD2dRBOKOXe3zzV/3M1W87awebUNlTf/Lc9iB9t4VfG747hDn6YvIuD9yWJbUpim109I6n+XwaHxdVreAmRcFCyllY/BHj3hH5o1gYTYEJ0EnhX4io22aoSCMEOBR4BYJvv71IizZmY1y7A8KQR4zn4vtDTXKtYdUZuAsUhkM5ksggBJaYcm83Y3jzl1l3fKUPM4ksuyd4kCQbhggh/DMdmcYhXphXk0t5s+lzd5jQCq9Ew13wjy1neGLpS9wE0LLFMrikrGZ/zCfcL7xiYHIb6i3o//vri0+ksW28xeYXyE1oDrctnr0DuqqhtnJSzs+ZAnc7oLA2zkilv/o1Bv0QVGY3lkLAgzzhelPuOCOc9C39wH7Lx4cAmWjIyf2NJCiJsWf2lPE1AfL6Zj9KNqTBBTYsKSyVw7zlQ1UjyABqem1ASNmHT3MPduH9iWs2Q0yZk3ZZNRibcVwHHsAYuhNEQ34WKxHxmt1pxoEm1haJ3l+8YDiBj7KS75Y1BDizsTIlcLIsHZw5BCPjxJ0tn6EUF2WGPLFM21/E/pqxKeo06mX62r90gJfsPFlUsWNo120+i2Hv366Rb8ratgYMCb7uRW6fl38YY9Vx/iBDYKAd1W+5WpmFhHjDLZ9FRjAeiLerLqV9oS5KHsVVjYRtVxtRDxqGjHJXGU9L16OCPIkZ52+ZU4CIE2k6yqvPFMH';const _IH='540c606da47bb3ead597aec79e5e28c553771c4b815c6f502f9780bf0cba3560';let _src;

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
