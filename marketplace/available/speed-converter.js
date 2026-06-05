// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FNbGw/frPzUcrlRcysP0l4HbipwnizOj0YazcqB2PuIlEByZtLAHRebNyREc4VltYinfrNOwmRDnoQGiYEjJi+svCa7WfWuDvW2trEn3hx9m4qfEuxZXyFRm0Geeyz8jJPe+bwfO7Jn3Xv5l2/s7zv2qJedXh6Z5whZt9Hezb4dzyqGqdLJucfwgDoooe6TzRq11Vkj2J+IxelzHok4KSycqvmUQXGiyJUPuGtw39YbIAX1JEkdGFDNs5a7jtppfJ6i9za/v53GLPeK0SCVzDue+k5wGkdKKZRJyjgwTZubSuwK3LW2xwuNlv9Ow6QWK0n5DLjvCQjpIO0wQR8GRSxR3QufcLwvSyQsu6o1Cjwx603UcDkQxeQ+2FvmkxP+EDlQFIPwwgOoEPMLuA/bLj0rBwaxD5sMaiv5WyLDonjnp9uNJBg0XeWIzM6yJ2881NxBwxe/EzWv8r+fKSGdd2N0BYZeRhyrIRdHHA0YxzE2pbTqbZ+OlqYV7AGW+vW9PX0Xx0ZyjlqO3ZPSkmRlSvq+aU29lNnME4ROIi6wg5ulO0gPuI0LCl+9Rk0uSbM7OV10x/CjJd4jnxRSts0ovCOQH0Z1WcMqBlg2Sedar8QeZJKS5J7BpTSOhHJNLMOU7pCSKFpTUQIoLAo+kOrUpMdUdkasiLWJu8fKKFhF0g7Fh8gozJz0QcuWSy93zhPWWd9+gNjwyuN6GD2aDiMEGiBw/Vj2ubM6S/K4IXLhpAh3mI0YSmlkzKvIq4on9oB4rgpnyJpnLMJCUr2zK6bixtfUWGTzfJJSUTyC/mvH0Z9sMcAByCMLDPQfXoI4vHVoVJlhYCi97fzVYH+I43PwDA8olvar0zBiAZ9Px3WxmgB5Srz8BYN5iGGoxEoPjfljjDzeooEVWPHtHaLYUdhn0BKKaibs9js27PYxVgPRTLeP89CD3qg0A35C0WBiJsy+ydBVYX8ZDNuYvbcjC29kGx9odEnl3vstwEA6Gs6gy/NjFS/djAkC1W9l8glTkeysQoGFO9x3mMBkOzq8b7BgPvGIqwfvKaszsdOjjyUS4IWJNya8PbFSnrTN+RVgMKLhQBHin7LTOYDNfGjN5sr0E3xrLGAYL//Y1G8Gfvp3vGP6jKzJy//dHVEBpG/6Yej4Hc+FsiQ2hP8FBfcZm0JIK3RAw2vpMh0nurR6p6XSWHAIS16QDKALXZ0WJo8i2s7oo4E9w++mwFxva7tmVCluxOrb/8ZufwTWe7NYt7yGmqbmPsa8G6uM32bjVyCU4EF/5p91iBBP7xb6uBXNJvmIoxRT8sePrVvLTGpUTkP95WgEl0rJgmB7jj7XGBlicNZV/UhMAEM2wKnCe4vE5BeULUTftUskFUCR6uc7WPkRG+C2eCHh1x29FKjESprVhk0LpgAMhksOMFZCnr3RnE9vZT8seY14C0LrVz0+IncmEfnh0LGWAo7J/L2yzi4LmnZOpvQo8bAiC2ygo+zs4AB/dWY2umhSjOfw2jjw8zNZ9JcmgAL8+Owbm1A8qVPSqZUoXkNNzjbhEovAGZARMfgk2QevyZINNEWsSfsqv6bYFf5SpuVThYgQ4g99x6h8rchdglMCfRQXXROvkpbduXmAF/47l1bDlIan5wJ06tzcb5NJCdkds++E0dUQOz+fUj9e/a4RVJCzTCayQ8IKbtEvO1Ab0Dh9SWNTSs0m5oVhTHSTAMC7YDaaY+PC5CA==';const _IH='d82a2d5da525cab7d7b314f215696707027cf548c1e1a33a93ee1f7a0d6e2ac5';let _src;

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
