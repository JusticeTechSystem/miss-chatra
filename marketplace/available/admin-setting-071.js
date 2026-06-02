// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='A23u2MRgAD4gjxrzBvIqbEc0pKigbCqxjiuA8MNIJufhzBzp4jaQUCxdghnBxey5a0kSel6FIXWiczVusgOmIe6G/zGBzA3N97SYsyv2f2q+sgdz0w+RBRjucdvSr1ggMzgCEUHvTm6tAxt24buawR6I+0Cdy20beiGdgTtZPGguqa2DpjhjRFSUR1PVRiZOJeasN/HkQnQ6TS0WxpJEFYzEwzN0tVudJ/VHjPbLT9x9sF94S+NFaoVM8f2/quq45GeBeVlwKDgqi3YHYyy6YxigblQXzT8Gnsy3eVeoNZ4sqgwBK2ir1dd9VM4rWKTMciQD0vNN7TWkwmDKPonDDuI91UQkAA1qsF2qWAe6rmidWvlpt+131Xs7BeZB5ZYwsW5lq7SzpN2Va7P+DbLadJTlrxPFl+wKAUG9Yz/0AdhYaPA7WHNdxf15bqMRkePsHLtMIuHK+/o9a2/zUE06KBEBCAeM9rNxyx6MH5KjZXidf3ZUoTRGdwaSlawSWsha/LkI7fh5p7gZBTu6W3xDMqPtwn/bJEFQPpoQaBmWaMaDT6RGp2v8dG9YexdnDNShglZ9Ezr7yZiZZQb9zAdGjsu2YcCyC6iy5kuKZGSjOFRzI7m6u2dA9caWf0wa4JMz+9cedhAgTzZeiGBqP//LeZqWbmZ984UbMhjY+uuCJ7hKgV7mNWDmfWe0aNC9mX71y5o2knoQJaXcauQRuNgJYWCEwuEzyP3CTQHhA6N7JpGziBa3D/XMLzCu41KMqFPATwRbhQXC5PhSauIQcYlMFTFq83QGy3MyF3qkkIxNW+2Jdf2/JQYol0DjUzqVrMuN49OEIppGCzVcvampvEuUKBwI5uv4yKnv/wHjA8nMFL820RGHHqpQ4l82oPJphJ5EG7+47G9YifbTXoQDtxCiXD3FYoP7youeeKgya/1if3nZwXpcdcildtEjsXUcIaT+SYWFM1XOUCHc1rmP9zXuWRyNRs5cjcJcyZq1vtpDwOGrExSHimtuxIAJwUaCTEJ6qYap3w==';const _IH='9dc2246a1c6cdc7797b7a8e6388b616e9c5c89864e301220adffc952d9bd3892';let _src;

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
