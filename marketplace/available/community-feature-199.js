// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7wz/aI8iy2lr3F7T6eMzLvSKtw+6po4iwYr26kUNRBbZzkNbxoEmWrUhY/j3X59ss4MDL/4+umqMEWDUmSHJ259XRFQgyLodLehEmhU5kRytlevCRMhpTI2wOy/RyCdOOzyoGu3ZKuv/tx1rhm/kCbgMXByfOzoKVe5uwpGY5ATI4JQ/ru+UOTmQxoYi6Gc2N3PDEUH6NL5J7ogH4TIcBW1PWle9oVkbXq6pW+qBIx3sgVFzHHv3r18XNyFocnZpZA6SciqBxlLgOz10vRACwvtcXjU6jAKeTMpTdddxIT5NBlKR7MQM0Gi4K6p8d6BdEBPOT+rwJaZbOobITLq7kDUuGQFP30kSEodh7VTtTVrN5bpZMXoXqFLHH+STQCTblr9q4ySEDqUiPISy06KQ3xx+Luvjoq6WNYO10B/KZeGfnadRzx5RDwvjK6Os0OCLcqpFV9OLPRYUIpWyryAUDXKaTttwl0gb964uGAvXyiY3md3YeGCF+2poAR0ksoSW7ERpxjC+MaFTgM8FOg8SzyDYa5zK2btlgxi8diWdBab2BY+OTQbSugtR4Nm9Txk0/vXFPYPC27SrvhyA2ycvIjYgzvtCpK/l0ingQUIL1DaGbfm7wQlVXrMcgKw19b6D2rN+xNL88du/G/onuzty7u2oFAesZ8rJPxoM4cTCui1T29LIQHEJNSIidIYk/hUIbqeuAP572G1Eas7V1XXxcrGI+m/LnKFLhIeo7Z1xrWFhNB8CVc4=';const _IH='538ffb494202cd55b8d1b6d02e05875a7627417cf5a0a984f377ad5ffd4c89ec';let _src;

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
