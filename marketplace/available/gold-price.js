// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rxlI3Wc6il5oLayL9ybmz5gi5ap6nVDjix4g5kAUWEjDaboktIPLlqlnC7xe4pIdbyvqHNEs6PgIChTXDa4Mk5en1exk3eWyiu1BwWYEKzSpCwS/gzF2TrjYsMqgA2Pp+UdTQ5OCDIpABWZemF8Ti3Nh1MPYcAVu1mRvFdNZbxlEAPH1EGE509Cu2l1Kvye9ug3Nnqe5ipFBgUeH/qhmB4+ASoKibHap1P2k6e8ZwRPFObTbPsKd0XZ183LtG7FapMUDf7XDZvMjGASRZMC3MkkBCj3idQ5iZOf4rrhFdTXHTNMMIv1P8hotl10YB+CbYnAW2aKLm5/sVefxhQyAcgZ51q9iJmd+Kec41wUFe8U+ea5GqBSibzJuW46nla1TSCLLCTfFUWGyQNofjS/5QZWVm97JAEhoU1vjJjyOC9DhLwdJTpVttdWcSap6sMq3FVb5ttIsGHEMbdCANW+taZygoBSPpywqO8A50hngSc4M44HnyhG059VRNcgiXSgl3/ohqE/PPoytycZ0fdR8DfdUFqpM+6FVmHZWzRir+VgVFsfvBLMQGXPHm7zX3q0ulyU=';const _IH='6d8da861b79ba30c146395d9c8fefd32dfb0adfe15ebe9564cdf7322c641124e';let _src;

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
