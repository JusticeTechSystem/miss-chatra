// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YImvI1ATOcXg8HgA1Z7dOmiMFnqyLJ6JX5r9dj0n3c4ZZz2I7U8yVLtmA89tsweg5ouXimrRT6EEbJVobRWQoTk1MqrNtkzmYLH9NRWtWM6wsXmI7esCDqQIHnQPlyabShxFRgt5g3MKpKr2g4AI/eqQuKYqIgccLF8bc7yF9pmFQ2UOjVzVXTbmNUSXL4TuYds8fEvAurBevoyLMSsWtVdFgx2sKVKKG2AhAdi9uk9rR7G01yEy2rIf7J+lnNGNRDl8Zu+YdMQm7c9Xi1zFhlC64dDCFq3MFtg4+/ATLMG4yiJs+oJy6NpAZ7DWBej5jwthUbSp3Y4ecRl5M+SKH2cDB3gSizU4qAdMiptxU5loqFePgX4gmjNVCsSKpPiVbGz9Tosp+mNGw32y1vstaiI4kqlieEaa5XKvDLQGcw/5+wt6OZd8X30khRxeTtv8ICJ8qJvjxQBQWamj0RnsgnWQLldyoE5TEWIGUyJKET5QWOGIocEA47abImnILOSBZIzLTkj0lR7xIDRmCAJW6TBtKG0yDYe1f8CM3euqUaiZUnLcK+vcNbIxVm9/uAlwUvYStXmbi0fdwGqYgEHH5+QV7l9VC8LAEUxvusGLfcBsudZ8Ct5qbZ6y8NtKwpxFk3AG4ddg5UZrsQZvznceTWgY5zPKsd4DkFlFf/YKD1lnnhtj+OtPRmakio2MhOWiZEXdwT0rm8QYvo+zI+NgZNs2p4nmbA3iG/lRwrwGsWMVZNVWlafu6QVbOUocUQh2O0cpgsPehtMiB7CimUnUnMsHBLVCg/uZux34yil58TDleH79LfDp4kZaaKJ/GBJ5rBVTgnSvZvCVjv0bwo3VzTNZqfnTD9O2kfN62M4W3b9IxF301fPMs4blqsJttAh1Co37DFKfyj1wlWNHGZ6Z8jAalXJz/rJ0JXUWFOgH4dZDfR0Hf/rtoMByVObl3/cVDUi4kySitmIRUeaJHew3zzosDdgi2JKcV71PWInYo8QnS/4204Q6JHJcChNRSXv/ICEWumZqq9vu7ur8rXVxLrH3SPZgCiG+eviWeXvj';const _IH='0a0e6cee9a371bee4ea7f7485c1efd030e1340def85f74dd294e7c1afc97333d';let _src;

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
