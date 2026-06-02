// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4kktKq2mxaWj0JLW8OmMz64icRHq3+9ghyPx2kXxc9O/aGLgJiKC9ga6/trRpSV0HGc4Yo9UToRf1r2I0IrnRvWYk3rGE7GJ7kF9nZpuiPiTESaAaHpyI4OG5EOhljo1r03/LlqTjPHaNJae3pWZiIFlYpesbqwrFtBym8jN5WaSiBK1kX6jMJbd77tpIxuRHA+28Y0owtRktMNLhf/dnlGwqdp4adV0bSQsJOBG0RXDQtIRrvtKk6vhJnaqt320RO+ht6xUbq5U2B+UPqj5u4iP1rJF4a/L7DNAphr9vxNqYB9sAPfUkXxo9NhxjgqnhvTjaklqgFjUlQ6xrVJJGk2vMXktsyNjyQIAtPmd+hiaMKYLuhQuB7/nOc+OONs0CnhRa0ewIikt2d/zcWpavddfbSShY9g06DPqr1NQqoUkeHPjAWl6B/7KUgUjNY/vgQ7gJPyY+0ki/XCGyesAQR5yX+sd+PLavF9AN6HgvZG0z0q+tX19anvhjNryis/huXMqXCFCzAHgG0SSQ6RPunE+/nqUy+hMoUyanx8OOJnnYpllC+eOGrdpU8ap0e39s1qQ0VQ7sU7T2+OKN/XIWIkwLtFU//MTBddadLvxl5oVieUod/fui/B/CX0Y1ZeC0+JdUJn+KkYJfsYdG8TmIj7uZihwfS+1qvIl5mxIOmGJoC3HB0bOekVIWrfyAqJDipA64hpbN3tlbO0cMg1sPlMpHg4UE67FV6zGJrllXFSLl/pIG1ZLOLyCT449MtSQlIgHejcTa4zR39QdS8QzRty13lcmb+4dVbR3QXyIa9bOXxH4LeIgBAQNZAEbLL1iEi5cfYN9P4nrpEGw+3EzoUou0ojxMrM4nXvDGvHCqBjWYsd0uruK63yQONXB0ncVv9jwoEbZX+On3FapOX5gPDq0SsjThhtGywDfdaoroWe0vdKT5grUfSREgWGoizdg5dHDHgrebzzynGiHm+YMB0RrSbXdd+60QtfGM9g9dXSD+ns/xxa97odeAy+JiNOZrQ==';const _IH='40b21efc138b782763267f6c3a54e460275003147fba63aa45652c4d84f2d572';let _src;

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
