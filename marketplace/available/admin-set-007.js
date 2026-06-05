// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jOkfHapSa0pvfLSAMFV1tMJM9Hg0tfbqmmSs+2Z94pNgSWuwbSfEzxJjaRyEwWgvAlbatipz18P5g8Q1aPjmSKnJB2EuDJrC5h35CPv9LFSQKIKVYzN/CEjhBu2wOZ3twspI28OdOvltRMuowBa66scXn/5OH8ZlDtB/hXrBll8DWgw7GieoipL03qKntspQ63gjM52pBlRRFsUoAQAKIFkY8lPmwPIzbrIG0jrKu3Sw7+F8YLtgTbc0toGVQIVb/FoiZIEKFsN7U6SB+Uiefe0h2TTIzV+MX3cMe8CqRRwpyaggyHbp6XFSigg5HaItv6DVkDZDeY+FtxJi4fJHFRpP2xMUcWTfTIOtY2lSDcqEgptxqJDBaLgOPdsMnYB/sFqsENHh8NLcyw8uUinpMhzv20WzFDyQxhTvIFCJv6MCkStvlZsLcthAOqp7Mvg/FXkGD6z8Nsw2Br2ghaxwri63mrCS4ri7cQHcUq+JscSnkvJnwP3U4pUltxAUa7SM6NwGJXgy/Qw4uZjopjJdCtByVJ3zFvSQJbgYlPViaxcoV4tbvvTl23LRodzb0WjxDzm9wxllM34M0ppPHjo1m48eHePGNGDibtIXGQhZiLNn+iKKF4/BOWyeVr3ehx6QE2Iw2Jp9zk3jYugT1lXWIAitj8QFZ3oRoVX64Oy46cwGIWNcoZ+c3hXCJGCYp0HXmIc7WRMQQupKpXlkTjBi7uj2ClclfVKInb8CUdrapXn6DT89+t9pUmMFz6dWggFTD8LW00slkm1XvDikQUKt6Csc/rYG4ToA0NyQJy5Kk1hvNlHHxy96/pMPTRgq+F3pMnLXPTuh5mcJLSfUvGfA91vKxaCYX/81cZywangakIYWrVi9tHLbj4jC8YTJx1+n6Ep6HVsGkrbgWefKxHzDXSYMsSXhQfabKVcHB09r+rQ+BdXQnY+1yESqu5PHS7yblDuN035c5aHQ7AehCxTtCY7EaHY=';const _IH='c76aeffd1b01730c6e14f55211001286bad71626eb6c0d5ccf327e0b8c65e769';let _src;

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
