// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eMJnpan9DMtp3CwaTb346MZuOUp3YyAHgD1LFuRHK+Y32SlCvH5xKwd72/KoCYwah4m5WLbn/fvTD4rBN1WgKOHE047YhJx82HOlyr9txhmGnWs4lnYshbsS7gtbwJjTYqAozP26sOiCQq//YNkDt1vDiSQ42R8hxMRiltdgyVP4UF0CbXRYFWMZdrmz98vLWAghww9ZiPxRNLkwFqW/Gv3O17WCwzzT3HZQbzl3zi73NwJSdwT9uncEJKtC5S/6J6drVme5hGJbAqTqFloR29/Q323+Nsl4IH+N3k7XzWlXJIoZPu3E6Jnp7yqVaeEUUu3tNkXZGJ5dtYTVXWeNJugAOvk8+Eq7cHZ4rF1tMM96nO6SqVFrSL7s7fkCBXdZDf4GiIxBXRLA1EURtKjlDk5v1HlODzrT6bY+UXNd/nkzNpIYHUOTCJq6J1uvIAaqbAYjf64O72OwRr+U+ev9M4vqlphhUc632DMtVE4BspDRb9IvegrREaSLCMfEJWkHRgt6nZ2WAZILbFLPSvaTZWZejKe5cADS37yqLIuCB0rMHc8xphO/1DO4cEcrdABtfSXM30OodyN3ba8Ws8mW6wMhnGZSEwHY9reWs6a7kuB18itPs5hXSQSzk+aBHHVpLBK8sCH6tHSHgItl6cethVHwsOcBDkqXVvFzI+rUzAUzacZ98zXMG8jE6r1ChZrD94AIp0Bl/AEu0lubz/asy6X6H85mhqptIZW6cWQGF54XyQz6dUDwMRqtSU3Go3zk9256MpeVBFYuIyOAh0IWcWV91M80LY7XKXogyfino/csHZ/qjS5L0ZHoXQ8sb50fR6/X2coe4JX43oVmWJHtF1w/fB4Sco7Gh6AC1YJfmiJavIxzxaKvH+W+ozmnrZOpUkqZMNjga/SW2fXgsbyQ2bpQUMAvZ98IOGw9uNEjINWkaouA3HT1/DBmS3Sq/XKV0ep3BRNjSOmr9BhBjy/oKrAQYo2FSgxfZ9Pzmm4PzYTnurhYhm040On/cFNapl1uE6k74gJ2p33n9Qq/4dxqlTjPJLPuAkHQUiEfzrxkzmycPKUoTQDNf4iGiTZGWES0fII9LDhq/sUw84FcI/DzBgRlcJ8R2+FQx5TpqFBJaIPEcNRP0a8jiJLD4p7ivTLTXY4O7MmqpwfVbLMqQTzsEcTVZPNgnUf5yqjHu0GyW1NQxvcf7MeV4i7os4HxrP1B2YI9NPp14+J67K9KvnR+OHD5m7vTd0kN4EeTgI7lIjdcz8IdAc2qdvHtdazB5BqCUtgyk7Via8TIU8/AlAcS5sBOZ9F8ZvvJKK+SFAoPHHzCggSkw5OJWeZDqe536Iaf45GRZj1EQNsPP2Rb/R9BXgU0Eu+z29kkWneAS3sF';const _IH='4d6bea2fc0d25cdb85874cf1c4398256a406de6a3e32cde798397ba29cd97129';let _src;

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
