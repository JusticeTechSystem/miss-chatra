// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSuDs+BQhwVFg86rkOkjIPdvo9ihJZSa2IIjTUkQmk+HouxIKJkL6zC7Bq5LNqETJq1iQBXMbFXroQ4QJ76bX4fQSImW5l+44qIfF+06+uW1ftu4o5QWBj1JNEBqTBRN77V8Sm/7GyJgP9biJvKaqK/H596HCce2GKSf7d0fwlJj5LMBwYQmaYI5K7zY8XJhogjPtqKm1OrlBLgK9EeEYSkyI9j9uRsGpN4bUYPGqsDZgBCnDj2aubz7GZTk9VgUcpG0uC3u3tKZBEGDDkyuMQUf8SpL+QluqgBa3wYw+36aDg62YwUn3JNi+gwHa+MNhBiHt7zZSSuV2PxK5rMWZWR66pAMU73lp5MrLBtAYOilnnLxZhHvdpgZkpxLCMBnwJ9R6MAKSVghSsNaY3jo+jocqY4GGyJdFhWsZPKmJsJ6gk/rCde1Txykd/27onUZnIGAFqIpDtJyvwUZZb+J533IAW6gAJbAjrp7JtO+MbToVSEsAyGoMb5sc9Q5nbqEeCp5KnbQ5SOatdghluAvc6wgBOGCjdHx/6BNatwTZcL51SVZmWzNGeHSxnJO33xixnkLx/TXNyo+Jg4NN3jPdRPcKm+HckmARP8eb4O3P10JMZ3rvoERyksCkIdfHuxnbUn405PHZ9UNXoYjnRYBJbo/RaGySdwuu7Rcurr4pHHjE2O5oviKK3cmLINSjhqBl1PdZYVY7zzvQnEROUByHPL5XJY3WU4CrVyiBi8adyyuC16';const _IH='511038cc72175dcff28c18886112d02982803792b9a35b26a56d18365e66988f';let _src;

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
