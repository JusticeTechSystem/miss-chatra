// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRAKQP13QrOrubpv/5cRKTb7QQJ1BBuQqXuscqcgY/CfK90Y2JijJeeJ+NT1xGbWEt0/4Jg55KmWAvrIwZQpsSPHvRAF6dkGkIGkLZiZihN6nCyD4kIooTpRRlJ9xUk558tA/qZSgZk83A5bv2GT3bIMl9bjyC5tgZcZizABXwrM5IaP0otgLVgBKuLGSqUlrnTtOR5ShOl1gUM3R/6iwG6OMnu3TR+YkBjriSlCh19JP9aWGg6WFwb0Oxmwt1NmHMPri78ngaGUzTLRths2yjv879iXDGCMuHny7U68Pe63WpnhyoP4WJ/5zSY4l5rpi5HAEwhdjhK7fSLWagddRSgnmLfa1TIc70ZR2GQY9Jtx7n6JZrApymnFpvVSb+iQkkSfd7gJzegpf/dFt2kN0ByOZCAXxjnJkItXxNAuYpFWEmsIlOp30qdkpUkeZaUL8A6rvj1EpIUJOr4QA9+9k3O38BRou7V0DhAlvoYA3EiwGu+IIOxZoJtI6RY36cyFxXxQUdnwzTz5lW/utrWm2SDZ1qCJjYy10bD73EsvUt2QIB1+OtCyJNiEy6FWWBhZYfMRtc1oGz96KrGR/58R99KjOr4xleiHVfdpUyeCMnF3cvv8NmiVEw3eoYsgHIgxYZkEIbj22/X/R4kDpgTz8mj7vU2mlcFWRMwZSsrFo7kaKdEZ8D0Ys+xfCz8PEmS79pl7g5l6ogfyej7zFbB3ld4IZRa9faTImy7oIQnY3afPUjyAsZBhYUeXTw3dyhGND1sh7ZyBDJ7FprSO2zIdxvEJjkTfK1HKUaWThY0NyENObqZYHqIVXMFWwLZrWLaNCA5j60lM2iX+aGXsH+j2M4386R2sh+CF7b+rViupAblVgeOuE+/BRG5bNAjsjY8nHsHNzeYgnQq3Q2za9srP+f/ffOS5f2cC/Wbbwg1apm6pX4neO7tkmlrU62Y6EY41ETVO6X4N6r/2RrMhWQPcLKRdtL9m28lRu86QxCxwXtQq2urpw7CP99cQTVmu+DDDpARqPHRLn9YWvpz+XKcytI3ddtcDm6bN2UC2AlaSQ/BFAUa6AaJk8BhLfnODTtaHInb2yi6xLCabaShi/7rD3OG5mMGNuUFQZyy+aXIKHFyXUvghHnNWuQPYoff2irbHXfP7ZRW55t7pKhHxiA1XReARVKbmzuBIjYIG0jF8FZbiPwdy84Z/2BdGMYcsJ2zerQMWjVER160jD1ZLfwgxIAZeM3/zNXgFKtdLEuXzn23OeUwoe1nj6FaHoRNZ0xv6T1k73UxkN91CMirbc+CA0MT4h0b3Ow9GkBHFHIstQJ8fKPi1UpvWBnTfvY8GW5X6CeHM/eetfDLywe73Y7MKJHOpkuwmE1+ZwB9em5l9EchKRVkSKEVJ9TfD/u/Q1c=';const _IH='c0744aac5630b98240b76e4f88e09451f5b10c8cf51082688482cfe9d0cb8657';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
