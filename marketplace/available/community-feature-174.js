// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2yyEnYFHk+hT7cMeg0n8fPYw93VVR/o8DjzCtmj6qw2jXVKEBGmLeVMRvtBAisYOkTHAzvcy3B+M0UmcKDKPZxZxCd+Ag44lCWlDO5QoPFvB4iVKkTfbkyESSmYJ4yfNoWXGzJG0/6UrXwtN+iTR2QxtnCwIXMLaB2qVBCKRz1hUCjr9Ht4BU2eCx7/gwiCC8oVED89eLTuJuy7AJyBvC2CR6AM4KAsWK6I66d19CSKMspo0zFW5f6J3AALZ+WLosMcv3PRVksDeKwNp5VqQrovqpmlaU8O5qCAj+3ciecC5yyA9XsiRqrJEnmz8ZKXPy2gpwliKxWeMs2r6tLkF98YHmtSbCFxX4KXBqm6doqLUZNnnfNReiPB52OdTeZgEfItU8TbxTRVT1afI5UaqKDUwBsS0OWfwZxUF/CCGQgyj8SfgmtSxmmtMls5JzWghnQFs4kfNr+kqpYsWVUhpDNOIugOieRgtJURF/3DeYJUbLjOLJNq93RPcfG2SwctpuOjnef83DFE6+K/4XKCTwrRZJdamringf3IS/uRpKDAqAbD9gTE8joLX+D8B3cq/1AGnPXXeuWU8ngx/SJKtY9zGjeGETZDKUHfBdKd1LxWSOdrMcQyKwBtolFtNU8VlknZEYRd+HcfR8N13osVfVDNrRGS0vVR0ZjN3hEsnmjGi3Pzrb7W4aIZ9045ocuZyNHmBEkJGRW32D+a9SDhgZWy88GWaNrAofwKG+mnr1NnKYvSiVU4=';const _IH='173124180a5620d8982f2584d19f84f4d53dfcf6106eabf4eb50ba48f49945c9';let _src;

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
