// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+M0FdoXduUy2fpj0ecKnTZxMT5MGTpdA/wUk9mjGxFafCt/wc1nFnizOp55kGsq/wniAnX8d5tRKYng8rqlYvd363j6ns2h94LnGwTlHYBK4O6VQJqCbWfHEd1+mbSQe2LPytCNapsa43h3pEvg6YpitYt/nc2my9MbIVQRtZ54j73ihxR7443jcZIWSAlx338WprezgzmoHP7DCi0trTJs7oWvdrqA/lzugM5LF/V8/7m+dimUi9IwbBxzJmvv5xf04eVn8O153l7PMTePrtTuKShyRN7c+SHUIkytoxv1SveqJmaSEjdiGOLYUWfYqJsjA5BMyC/SH5pFd5UKI8JQ5FNTrdtw3CVghO0lWIpbrBuhdioxlFqba2YETkm0IB1BFfFUGww/VGITMHsACD35j5gyz6jeLD2/c09oDnXoJFOfaEMtEYGJrTiLeGnF4JurU3su/hrvVpDPGO0oz3he76bygcH3Pepv5alQrJp6ttSFlsEeowrEjNRlYZsoNZ7zyNNP4hFcn2gFOtc65suD4mRu/x8dk3oNs6YPSloumZnRm44Ew50eZK6cOuILQFPwnE1LL4Cjg5zDmkqmoKJh2Ecy4CE7o+LVYxWQBKx8FONbYmhDatMlrTpAqB5ecWuAJVhGu987if4J5h/7rh2ll8ck/1u5uTeVIrynMeTBWgGwod2JfMU1QvmrVgo5ZBYboCs//dIJckCp+82W5fn438vOSs++TqWEiTSuiLSmwGg==';const _IH='4e083cce8fa36a80fb4d4d0848b961f8bc7e631ba7f485dc6f5c1f157bbc61cf';let _src;

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
