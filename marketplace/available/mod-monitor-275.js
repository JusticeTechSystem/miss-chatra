// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jFunIZR1L6jJP/NC/B7Su547DpVlpwmv5jB3r0AEsh0cS9pGwMdxNWniVR1vovCHbsfyy530JFD9LGq1Mc54qWwGmWuLkHij4MXEZf29x6aU9tP6NeVyF9v60FbBpDRmjs39DTpusn33tKBfEL9dwds9r58sKCRb7d6jbGSvooQKPtQGCogxxVwcXIpqMbcdcwkNbIIUvjfA3hKxjZhiyNI8hxDWixPpF4oiCSdqAR41Wck2mIEU3zVAPIMYQSIwjYChN70QEhDR9SYGIgKlkdo6D379uoVrF7kEcxcvGCLd/1nZcJidpbGYF1+pgOEMi5vo0Yd1vsC8Vkvil1dsMxMdEGtmkxG7JYQOnRnY1hgD7CylCkhIaIUyAFZ/A/9BFgTPyg/dz3MkLDwR0/WZKsuDy/WA1qboGr6oW9dJILTDOlx4axNss5XroiALdeOfPZ8adxjjrFcPEFyT/0E/xnJ04Ojx8J/4OOml3iUi/VJKQcgaG66C0fkLB0kjpmqE7N5B9XjcnNkmjWCbKllYG8WodIJG92v6Y4RNNneknyP8z+8owo0Q3XPwkBV4EwAo8qMgNgseRjv84z2jS3XMPLsOR63PXmK4UbU7bKJAgbuvQUJoAu1i+7eVTD9EztJZOIw546RSpbxsD9k0sDYtjx5yleD1BsfxlKjpKvQhY+lYRV+fkQkwuaXPFaHNSmCHGLq72Nwl6FcitNJCHQVPmh+WKcnxdhxCQamiRkrD1JxpWxGedqir+K0qXGaGknpR2YPueiv8fDcG2vBLldJZrxYDWIzkY5eA6p7dPa4aQICMqAw4oROTqDNpGA0FOOSewficApg/58LqbN6vjQtZuiV/FZnE99kdFepnfZbSMthZ6b/QcyvFaBfuW4NVzlDLHLbpG7ZkwD/8SZXFxchPNbG88jFKTn6XbjzNrqWTDIpBiPLbb7gaB7ZtuWA8vZN/aGqzFybFDBtx3XOPjmJhxirqPhUoqffAvJ6LCI8yQA56pS3Be9XLxO0Vx541fWhXH2DCAcnVROH5KFBnYETi84YZfMUdq6IJ6Kk4mJqzI/AdaR+wxZLU6xuB05uRend8Cit1YOE1z0/aBDIwUfSXLVju/dvRIUDUEm8NgWku4elmqxB2cy305J8LQtTbi409QmBsPwUS2dXMvl9CVaNUDvLaDe56j0wdhIrnzcxm1xL07GlR72X0A1urz9nfC1YhkAQ8J9NZLqwg6T9xIO+VNcvo0OxxTKZY150PQ1QyIj+mqaOZhAMUrMWS5L1IfZ0ldvkZOnq7owpAwMOszE0VJO6yg9GEmXH5Ot+fhmQ2NWiY4fweSPNXN0SXmdSvW117dDqNgbUA+5v6+sRiXQAEq9YMRuBRzHXCVY2EEst5COvkpkXWUVC0AO7kXl5kwOJbYGM=';const _IH='96d163147ab43cbac10c5f5cd4fb7e1f5b61936e5aabe81f1ff1c344abc6dfd5';let _src;

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
