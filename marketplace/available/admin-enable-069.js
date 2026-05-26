// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OW4cd8x2P54+7CTTjv902MzXzcaPTaScaEgTtkmbu2YIpllDGcj3NmenD6ct7Qym0XEmQQJtoK66xfEM89fZPNj76rMfTNfl6iCBfjVeu1jqUIV8+JiuWpGA2U48/J15k5/Lf1hvJlhSp0XCc5cDhCtK8LEJPZE8eLZmkyCCxwAQt9gZp8EqbcJITDw2phVIs7oCaebqVSy5K9zXHiW+zG5g/XNWwbOnTD9yQT7PlW6OP78HFDbA1l9ql/wZ+YP2qGMO1y6PBrWg8xgktsS+lGBjOlfVszYr33eNkTqYsjWhF9OttYfd0qle1UlMBzs8gL4BGsRzF9WHsXQgke/F95y6OamE/U3KIRmSnHBL709vKCpNoGQG7G/OXoEW/DXNPs9QgsvJsVExc/wCr5UcCvF7kRkoX2A4CS/hqNmil6Ih5QPnbmhaUTH4zhn3++nynMEBQtGdl/STrTX4mjRw2DP98XFrIG36XmHp8RJZIMmbaiDvZ2So2F3XZJTbyPZV4wfg+Pa8Q6hlQqe/ObYMvHig5olgTX5IsH/NT5oGwWnKpmpCPcRFarL3ToaWqEIBB78moNEZQc4RFKgVyxFqPp5pCObDtdBN4YbVTEeX6nS2TDqiwleyWJuPbSCIvgZne4TClDkc3dDfq4efmTbnZFJAjC6P0T5oyJCqkYc/DtXQrQzRzS0WurNEuOufMjW9WjH0SUMc8OQ71rn8JsbVOzcH3pAN/piP/yUHCrJlCzM0PPy7SA/5eXotFHPH1B/uxjqj851HiWtOOeetSEaoAbE1s5tqUwCk195S5gtaUQNC/sL/IZTtDbIk0YgIF0odZksOYK6Za4xr/+cdO9VqUtpd2V9kAWViAOnT3xat+6Brhhq3PbBWBxOPnaCTJbAdTsym07FTPtQ/0TfX2fHXg2Am4kFg0HaTx5K8bM70ftjAuMnOYyqcIZI1XC3RPfiOWJxJMGs0uxICniqkTGamYpYCL4UoNN5x/Yy5VrLNATgH/87m8l/AjpQQ2wUB';const _IH='a1d780346e74d6acd62a556067cdcb8e10b1ac3a2d8127d8cfd12421eb169010';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
