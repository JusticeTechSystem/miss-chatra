// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LRIjTrzTC56fTxNWU49tPYQiVUZpjwS/eee1IWeVuTgf4nDD5G9hIVr0RmBrXvvtPppVDzQW+AICvqLUm/kH1WFs/5+WmuHGXVQmz9JkTlD8lhwUU3+N58X5plVVzZwhNzpSyb7NK7717wEBqFlW94PZj7Ho51VGdGjXmlprPVMrxpAvCP0vZ7OQvzTbyBhRRiyk2+YAhznMNa/HtdKkIICFh2ZCWJarsNgzTX9XkGxNpJRwPquEKX+Pwz8cGoUvtPLcHsZurCJ8bMosczoqZxcvDmz49XBkG/wmhBymw5yhYMFyYIUDC8Wj/3pl/zrHJgjXJqozwn+iC+epPsbJUFzijPf5ibfJ14xWrO5bfxL/BX5qntq6DclQZn1ivS3Dbt25RNnsvE6shohIU0Uxs0XUwKIKVlYJtzaqghHnlcDbeT3XzwIjhkBP0CZ+CdW5d8ZKNQdXytrbeDlUz3FxSL7WUQmdu6wzXWxIg90rHlqWJMJzQpHb0PfCJiCYQdeBN50UaG5Dz/IlRpDVpAU7qBPr6piXyfKo1kGODy6qZiTceIPM8NvGevYuOjxNJdQ7dZpuyRgXSjNZrV6smnXRyFmjf7IUS2mug9zRj6MJCMxLWukiy0SQ+MdDTGk0RpCq5yeN+wAvrThHVuengiNLaWEiRMqYfQDeZZEAEYUgr7x+rKktKT/IHQRDaegLMKNyr2T9o2RrTt+E+6CcOhPKitH/4E4VeIVKM1a3XGjSXEmZlTO+oeDcYj8PzVqp/qfUBNlP+oQ6YxooB7Tps0MurM45NOGefOMX9pQZ5V1bWgZ20A/fJR5Y82CwZhwp1RSsOBUCCb25kJg8e49+VLVUKbpQ5HkejfCOGmGaG8pC5yWR7wLcuStUq33+6nIdQ/xhaZp4T2SWtNBslKhd5IqmFzFSOdOvFnb1phBnG8KeO7TTvkBRYO4Lw9JrNhhBuTVoj+tchfIIZwnApt5gvqRg5RpcCP+wpP+I1e2+973Y3znBam7ItE9hjfZI98OJYsnsfUL3bvRmqmFqwPpa1NM3W9/f1NTEL07JCYKXYZ4KMT8oYSI4SswszOuESE/U6ayi4yPCYd4dtAXxmIiXEZ3xbEOrbVlbAkqRy6+WRJnCt92PAEFwoEhySFB4cCDKLDPjHuAuN2Uk1ECJcpLKJqgAWgOYsK5oqvurT3fnj11fm0gkDHCyZi3KUT0Ehh/Y3RSv5pWPYVOEaDUUNCgJZBS31AWeGcRTH5pNxrQHdWmtbvPB2AcAZ6DxWtMahMgUG/oXBE6RDNK9ySTEofan/CrfGp4sKQAelDFQk5sh4ozHLMPgLVRJQBLkrOEoB/VFl4t9SeXOUw+ynYQETCXG4R+2kBpPCBje2tjYFmnMX1cE0+TlI8k=';const _IH='e323940844e48b88c2c1bdabb8e030305b15a7f91d3befe415abb498a2b3f646';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
