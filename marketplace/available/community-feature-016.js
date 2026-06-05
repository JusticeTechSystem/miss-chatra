// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hHHHbpxJaaI4ddCb8sYZVenTYX8WJX1g+Rs69o6GL9Ad7mzgjeafB1zqCPP2rjfQDbomtViBqp8XSxxYyyUt+SqAOjzU1gInWhoBEXFq6zuFytYxH0M77Yr7OHqpE9LwBOvgLC+nBBOppecmdMIk2R8iDxC2cC15M5ZV3U9Zrfht70M7tJtjglXb9SEmKRqkpfqWxIqPRslSXEyWbCT6XXMwDhX1FiFYWsN77nDRugeeGGldt0inF+00wuICSDfbErYW/b+axxFgVTr/sLI237a2/rgfowoQ1jWFDsfIBCn5WG/JOyVV70nIxWlSGphGaBOSNwC+K4s3IsPYjCzvH91vj4B3rCza/FPnqtRVLsytWvGp732sXhwKMQLinYSVQW6vutC+ijB1b4M5jSgJxLqi1iCfV1FNmk37z+AYNQ2RqlmEM36Z27iejSNw+J8gXmHB21kiGiJrV/LPIT1ZXHjfnkBAUeVqRSc0eQsuqZionHhDYyZlScAXoWl9kohCn71/lx/mwTYSg++KaW8q9ICvVVxC4V62NCWjmvTXaChgbqWvUfBlicwADJZKagNvbgMK2x9vAI3dvPJdP+BhMEBUedsEqSOEgnTSBP2ZWUr5/XqhD/OKQxMaXJp8beiqPbDUXz0a7elg/AxKyJItjbFI6IR/otFp8uEOsrrgAwm1Nv9Zg8xL2MBi0Nv0pWLiUsEFWrOfMdCsaBGIdIucDKT2qZs=';const _IH='f0dbe7586ced05f4047826f8178986ce1511463f2aee2e94ce1eb292bf2c98db';let _src;

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
