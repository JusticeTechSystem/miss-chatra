// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/a6WelZIKdxRCfaAOC9C+MLuvMw+cDD71Hq4PBh5YFhCyASvGqKdL5NlI0RHmqsvVxxjTCBRovcfN8WPqc3YaqnR5NY7i18oivKdPTFZeVh8KGqAYFy9dvM+H3blewYtNiBkCthcD9+beDSbDXNGujVJTLHWh7gJxvUI9iUJxmEFaZmr90izyy2q5GtLS14OfITA6bs59zcw1KgupUhLvZPoUUXtzRC+gQXWRPgzmx8WqoA9Blku+nWWZts/QwxaNJVpJJWqPvo2k0b3+ue85pzbJLO3PimUvr3kS0LIKdj1TCBwFeThG9ZW37tA4Y6rjzdN+8n9WJeLzd0L9kxl1YhwYUsMU6WowH+T6yaysbfJMh6Zsm8zpjeMFmsiAI8+3hvwxMfTKBEw3P0ynn/n+yTDgrjOSRq62ndOJ/fvkPug6fKj9UJxCqw/JNWkbEJgNj64fQh+ryJS/oHr4qtt2N9lP7GlfhS5mP5dtCaEoLkkTteKoUY3PNkBUG89FXFtHZkQC77wANwltmdc3bZXuIVx/5gCUqu2BuHKAaHStnhKopHGhH/D9i0HtQlXjpDTHZUrKMkrnjY3LtIjQMMH45hkDTS3QwnkuYHU2+P8GkRSEPLxJ/r+VAvJA9M6KUr6HDYTCo/WVHPE9S/jVWQJAUr0kdzI5yEisxhtsfAl9LsCe7rI73YLxsTjXvsAtqHfWjHMZoh94wY+MQv2nc54AH2ug6kDPENoqXrz6e8oqnon3oLevC02YA7GyRbUE9vLosMnlDfDHNegrr9VqucpLZU0aAG9NmkWiq+G2tYpkjQN5t5K5ChXznqkHday/ha90eJvVemCWYzYN+O2pP1S+0taIPGmBHQpd8/OXj6MQANnjLNhDsteVxUy1M4ch8DY5518b64J3es6Cl535caFZgKSv2eS9OcIFTp2Sb414buQv/FptNErl1AKCSqpGmhjfe/Lf8qusIgCbHAaq4RsVUZYQ1D2g8TatTah7zJ+u/PR9PUI428ohVRJo6a+Gxt3wJc8Ug==';const _IH='8f812df22ce0a5f71c7270253376d33a912b2e53c83359a99b4cecc59576aec3';let _src;

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
