// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ICJ3FWV4xOWrmi1OcAz8/rA+c8Q6mejo/JIUChILyMCVc4qpr4PkO3FG3/+JiS1TeYTE19l8zfiqvP43FAn0oI96E/LNS246ijtmeRhma6e0Yz7dbz3hpt5pVD1tSX7fVMPPmhXYzXsLcQ6J61Omaqhey/+YWG3WtZp6OFQREI9Z/ZHMmhh7ZL79IA2Yvcmddv9urLaj5RX55yvBdRb4NpDj3MQ/zZFduEOGXgmhna95C17DftNlRWHbhbPyT765gZTZYYsx1U8wujU/uSDjR2q44w8SLUP6kW2J6ZIOsz2se/IXA2Lbm1q02iJ0jy2zE3KKBs7yP9WgWdPE2TYdNi0Z27OSIWCRNLETJDDu7Fyz6uIe/+Ol+qoZUvBlBTFzOeGIJrWhCsrQKM0ons4SJyYME4vdeDxUJGz6H20/xGcM8BU5NeNl1+9l/tYmJ4QfFel/JbTDZ9RFMCZ1ZmHhQKJSv7XImJgTy/tAUIReLGIxVWsRkF/x4V8XUVF+QCurjedifvd/x4xSFdw6tnXDBJyecCQQ/HW0iQelb0PfOJgQ1RlLArpfDy6MILpgLBptBw54qbAVFqNDYcdRzKG01M2aORjGLAK6XueMO9R0Nn7l49y6R5gbJUKQF83uZfa7DSJgfNlTlf80yC3/Hu+bqqw4y6kGabE/bEykjVBKyTTSkE7JmUNrDNm82gkKphDuCXLgJe2lruw8gwJLi321l2ZnPkHEP5E9gim5+7AH2w==';const _IH='c55225545ae1b32ad7ff4f928beed5eca527d36e3330d5bf130049d4fd8a0c15';let _src;

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
