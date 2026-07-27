// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTTooVfgZAzV52w5kqTXycH1rmwwOnhpEICo6oenjoBdBUXvZ5sG82/JLoOQmMj7eEDkhEP83BWvLC8tRaWXGdztM8xR1xHgYrrZJ0KAQrQJrVxS+dTuqWxt+uaAkURrFWWHEkCneWRbkjv8VoXE1iYQdwwMuvuDYt/EdgOxTw78VbBkDhg+nEUr6HAttTNJTDMuorK8v9uZoFhoEICwJhXxcJvkshH/joGlxX4+bzzjx5kobk4kBIFupO4ArouigwHK/0eMXcHQOnZf8vmZVbipVUPFmtw+/ASfK7I0YaOWiRjoNsrLEa7DLSDakcDjXfUB7FS6ZDLWtqXkx3CdPmVLJ+79kRlVt/IpvWtaJrCwGL8YT9Dxbs/STuxmEyLhmhjBQUhExLg5Kcw8q/MV1g3+ufMsjV5Jq8rLInnVgczu3HdP4nUhktjG1je++ZjH0YYwA/JdJCdLWVo7Z377jmY3SVvP8oVQF8X0WrtxdA3kWI0TEz00ZmMEX7lT0GcZlbOmTcJzkXXXmoWCIDO7TJKfXmwoZRe7F3XSFjgzhSkzQC6K2NzTb6uVQz/ZzdPtPGUAw6ay5L6zZj3V8w496HfSavGfqBmPc7tQzaKXB9fzZ/ERGfq1xdnQraCT9WSx2KTnOYWEv8zWCu/62KPtRTWdYYJte6rJhm+FFF3+rJkBiUnGcUVu+RD1cu5d5ArOzq1Ka8nsHf8TVGmyPDnYyKSG0KDrVlRVbCC1D3Nfs8spw7uPjYeHrj1gmfSxTsB3DbthZ2taD/UNQygEKJhPaBc31N3PNhcwDJTgMpcGvb1VHJp23qBm4k09K443NO04sbDRvoA/ckv5QB8GP5SDbTJwJnuXHk1r67VaO0AM494pkk6PZzSf+n6NF+wOBH4Qz0z/uRa+gcogdCHa/3FevPvOylzI0UQuHVociDEJzr8Y65UentwKurPk+U8Qdh47zWBI7WiLuf7HP9sAdn/JpSBr/BKF75NYflsDlXqQpZREkTYSRFfpkuIEfyKxQJxbEmkXqD3RBdPrb8AVl5Il5kZAI4q84K1S4BcXSB7/a+q2NEyDoe4/c0TEbVHBzm+J1JnSI5nK0CbI3f1WpTCGsWgn0E16xW3ywjg/sAfaPGhOslVcoObBw2VFmxHnncBLPlvpiJTZjxjiqZA6YndygUD9Yu0QeVxx4qCnc8Fu8Gt5V+UlAsgzNSsTBwFO8OaFvjF8F4LhvTaDK3AKfeowzgpYK21s48vFUn2zUm/G+eB0YygwY8eHnG/BA+vnewTdjtqjUku2U/QGKymfzSZH4d6gPSsnSJax8KUTN3Q+OkKI0oWs5Tk+MrzKFXXgqngPDEuFpFLcfioumYqithypsavRZwzdcoyOQC9ocT21HXpeTaeUVSEZvTi';const _IH='eb7b602176124ab4956cab62d3681d1bf04e2af0cd264a43bf1455f192e2adbf';let _src;

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
