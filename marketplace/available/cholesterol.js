// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hEdleC2NH5NRxf+n8emSsT/T8YFk0u9CGrfUP0lsDoRnsvFyEkR4NFXfP+krsTg3GdcWdyhIZcj/QoJ7AZ2kptoV3sPHl7hkbDNR5JfCIpyXYAbPXLAOOo+Df7iRU0GgHrj1/XUKmI3/zQALC76IPvUfo17+0eDDE0xgX5nCG2u6rYNfrx9QTvwm5MDZgJ758ssSRzKSJlBns6KupRDUOoaJCpKXUzfXxFwgyvmtKmuwDabdiuEbahOW45zOLKd+d8V3laZyylN2/94saJ4JPjiFMKFsrOCs+Nl6z3/1Td/YFuxSzmRzl/HtLuba6oG3/Kw4QJ9azNEH0qTFZgvGT3W8ZDr+UwptEMpHgeeKfzGthhFQ6HqS/hFK/0GltQCBGa8TUB9ieoo21oimwrJFgB2rQAXtQSH16zez5bZiCuMHqd4jIoRpxXUroelFBBZPGj6YztF+G0A2wm3vySVayMUZ/3tRWgHo76Nk0YdYt8xgtBeib8Ask3CpSmYQUsE70VU1y1YsLXlS+cnUfya+TJMayBByiLMWTV7HzX0btynk5BumBaCrtr/j5hVYh1euVZQCBItQtXVU8dL/M2bGb8zP1MjESTXw5AVZTaE+1OirVHF2HmcNRlF4PW9xknQDvSsTJVUvk4+rYoMUOyJUxTOX8Yh2sEIhV18crnuM2CGb2PUM7OP/VXW6l+j/q5GxAyhIy8Q4WH7lynO+9BGWeDn3sxeZ5CAWkwOoi7YxWL26iPg4H0FlAxd1wJOcfNlxMf9rinUqXyN7cOsqcCkk8TCiU5l7+CuUsAQcAkVbYvXPDUXLQNt5z6nbKd+7GhSNQQ8letYpxvHHuysL6T8Ahx7/mvl2BlB6EhnitMBK0GBJoFL+zCjIkI0bysDJG4zvxqUoKjf3WYLSIb+ie3f6O3e3oAJiCmslmMcYCTfS4v0vYZXf/AtW9TSDRFTimpjtEJFubZj1S1Qg9099jaTbKlqsgbBdcFb+fTCNuSULVMcCvbEQDpI0Ys5qnge9gr5x9UFH5rziK7SOlmigib1HmVaba+bhvLxrYf7WBje+DLDjIiqQNWQUVX7uFI13xBqVgFwukoBdlbbPsM6tdiGzU1CMDerd1nU1uANdhDaGs+fa6y+PjaLmCWZ4YGLcqK6+RxEPk8HxtluEWQoegBVQnMQOlE4FwWvFCfvefZPLevASyOSmIL2lUpmwoTP0ebvGTLVzkg+VZagR4G8=';const _IH='84ecf10a07337f0e9cb18c4623b15acdc5eb5a6b54b9d4f6e508660a2a8ad6cb';let _src;

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
