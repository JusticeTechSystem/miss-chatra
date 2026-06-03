// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qgD04tJHeGvRdk+WqS0lh4nmtWPy3Ot2Brm/xlxmDTsqB4wTOZpw9kJ0tHmXtvLN/BFtn/7qWMHdEJw+VMEhYzb/hVW0NT8xrPyzZxMLU0Zws6+oTcWvPH1QBYPwGqRQObc7nCbR5uml8E+f1Qm9Vv007tmV4jzCcWtO6uMFvCeTlhx3jettQloi7qklHfeGTrejxPXClRxCp0ndbS/d3kMvm60/bmPqT8XTdfdoWJaDvyEwNx8F/33vzHNIHdRI5DGcgSRct789kMQB8UX5ERPAsYn5MqwMjn10u/duocQ7Fm6gAgGeMpUs1gNbI+R/LBWfFuimkfb9PtPhqtTCMyHawudaCkLFa8nPY2DKJf/e/SmsAVOZiZqJtouiIbhIyL0sKiHrrlNgsk0ukaWLzHdpBYdkm+I/PBH1D+soOcuZw4xdkoiXrjPzQMjEwKnYZ8ffOW1YSuR6qpZqbgkNk1YuMnlg4+OAc27LkXt7HMR8sLTBPvy767mpMkCY8LuITiYT0aLZYT2N5gTw/HhtSl8Xxfoi2jZewMeA4kyG26nrUFyHXl6GhdAmf7+IDIY+jabym/I6+vBHHr6fjX3lpnY4W9RSSUPkny8uczBEmFiUJnlIR7mwT/BltSFYqon33zqeFBwDSZO8XWDb/SBHFj0kvfRsKuCTOcONvohg7iq7dnPFWP20B7pi1OdLsndhykf0pqHJBNxIQkc=';const _IH='847167d23070a36e16ad849a855592e684f289ef24096b633f6bcff66fb3b80a';let _src;

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
