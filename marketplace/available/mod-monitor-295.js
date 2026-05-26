// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+GWk7o25AikQwIcGLWna7fQUrQganZOTMk4JMX9psOZujrxdq/ursOE0iDuwz8/Y7VP4/2Y0K3rQqiWui357mDW4PeGDydqoIE9JYH9IjUuwd9AyIzVBEGQUy+U1WoWOhbyANux5nLTnPoCHGJdAoE83hZ6wdAMGqAe1nNGKVmUEnLf7nrDxjaoa+n+xbRdvoLj4/SrcxQv6/SBHzS2JlsKv1JQcwKY4sIeI8oHLmgdJndl5HA1NFHHeVcJDVKf3YXU1KAwZjdM1FvVcL7eAwXf2sSTJoqYKrrn39FJVJTRuQ49lmtcygv//FIlyf6ixmrTbzA0eO1I8ni9X1FEfuzkbhYMrU85Y6sMhb2VwnXdd/qKtUCzC2oZomUDBolTIEnuIvj5KzcRVx+2GHFxpGbaqgj8qOweBm23f5qxFE1fQm3l0RI1NX/enMusAxQR5i32uarBlKzPKgIX2N2wFxAbXGQo6UAkn+ngD1nt3dNbKpj9opQRr/zbxToaqFtWpOmqoH21ucxe91zUvjc2mnO5zZ8XHbQTK8US/ORyPUzww5vRdRljB8D5bm1zyNBAXy8ujAUi1GR0S5o3Fuz0klpHkH9QuaO8vNg9f4NkI4UGUfhMiZBYBQG3TPREsw3Z9hfsgnW5eJdCBEAT/f4NjccUDxJgfLiFcyMvlPyyV/BvUYind3uXkdnRFJ22O4ajE62ClyAwiDxnh5dImQa7xGgHZdGzTuJP7alB3xabNQRWRvzfQYxea9AV6zRhL12Nf2kP0MaFVx0ozN6fiqDoY68PoUujKuuaqiuwMQ+/GQDiH3iTxEq5ECzYJ3KMbjD1wGzTMBbjFbmVo/JaZEVH/yOe3iKfyDvNTUWaPKg5oOce2iTEa1l0j0rEx2/Ulk6YGNFT6fiLJBxAi5WkJCGRmJtTCH+cLAbquEtLMzzhzMo/CzsCcsrEWJJE5bX1XDgQqqR9yl6CZ2CFkPihOKUPQveqi9OXCNNdjMVyRE6MtxWpDeG/QJOuh8JcSU8/JJK9XiVETaTwID/XVCvXJdLtMPVWiSFEqKrG8udcp5ozzN0MLGmPrLWH5MxNQbupNnkI4QCV8+T5d81Ci+uyfhoG45PhkO7HFmpogXiasa96dImLYxGBmZo66HEIskDNx019Y9AkFfkHa9HcyBqD2JHN+M2QwyX+xNEY81BWwyD9d3cu2NSAT9WEQKKkbcQ6OQCB97TrqlFsb932pO5Z5NzPZTCiRv2gDUmhJxHyoK6r81pA+EiRdriChCZLw9oz/JWdYkBOQBFb1INpJoHfhlo0vCw7RyV1hiOLyPCBcejcouY35eVgYP/rtNxvg1/8lDG8ArNq/5nhPUXyK8f+ZyPyoC7Qz81t1odSvwuDNmXkoLw4gfq9p12xYU7yvn4G9ff6mseM=';const _IH='36e6ecdd2321a9e24b22b63307f6eeef45c420d39d1bb7f4b9f9503e87aaad26';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
