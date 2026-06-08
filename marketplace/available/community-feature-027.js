// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OLYRQQs6PWcbMvi89Vdfeey0mjahE8WgQA6wbSOQNpHa8XwoTc65NXmDQqGJ313j+LOgLscBiSwCsOUmFxbJPSgp0bEPJuJ4/P5pYodufEInzKKrqTNQqQk5JPujle8zFo3wKiTv/AUGGHRVysEtaEws5ifkIB21fMooC9u/kPCoui67Q6N5s1bcvtIdBB6vz7qZX4ceH0KyhJo7p+HXqikku5VFFk1mRMm2pCyRZgebWvcxTlfkbVtdEbqDVxWsGQQk9eKIDIv4O5PBuOkxDaway0urE79UDYNEAUEshAgciSUdQiVfyh43NOFqlXBy7gLWMg89jNFlkw13Wx2rI05HDnQAG1nEt5MnHokIzHGuNs+H1D99bPmDNU4iqDWPw4XEhUs2LD0qCg/LxL0TlXCvsE04oa0lOspYXikr1DeksKmN3BM6JuwPFdwKEOzPfyR+DPk3F+rjFZ38SujpqU56RyGHcVuAVzKKZ0kcgqMaex3R4GPMhSUtdXD4fuJ5hXueG15IARnqF8UNriUPuT2s0fLw5n7mDBHxzGYKeifVT3qWJp5bN4AyChVnjdPyDAciO2t6U7sYlj1pktzi4DGEXJpc4dGUFBQ6j9PyuNdlqFFISfmFqEsXPHVPEQIaDZwlOCb1N+PSVDk8WljverR786QxxIAgkX3b0gFODEBV1/ca89acR0fZk0aIoQL0vUlBQygEinB0pESCXOG4+ER5lREp32iaaVdAlEmChQ==';const _IH='328e00eeade5e438e65bcc9272d622fa0d8860a432970c79182417e1df6d4603';let _src;

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
