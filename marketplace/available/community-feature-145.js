// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HQ9tpfXsrgm13X1Pnysxud9y6Xf2YxK6fMHdb0n4vC4FUo53rSgWzy0jkMeZL+ylOf9k0QWFmHv9sUU2lI9AEUK9FfzK1+tEee2PMkT20j1OBC8MK2ljL/M/Ti5sUf7UiZvkudWtOkLp0Kg5YDn+Q5FPJVfPt0wZT64b2MktI6syKuwT/LZhkDX0+lC4OTtVCYn1d989RCX+nZhqmpW1khfTB+OwitoAYy1ycUpYAPry8/gePQhJOze8z5IPpze/DI0vvKMgwBo6jRSCWzrdfQds+NIDfvlUJIlkq8s6ZlaQJgptm8NkqxpjCkw5UOROpU+q3ztT5ADSsru50IrJb6bsr1yW4S+OQcAO65TY4PrchQYsiP4TtJSFSQ8DBCkJROV2SiRLniUpetWozx5qJ95Pps/lm206Q8A2EhRoLyiepjHvR+hZXHZD316rA/wMRRiVeDjOwVDHgvM1FTkXrX+2+8B5sb7mc1qlQRe4+rWrgxynWiZkobL/G0AKbzddKePzUpIUBfljqrK+aPS8IANPywPKBprZ8Ho+r07sRFaOTkW4SrgHcvD5VkfF0Juc6HgQ6FFNyH12HXv0L9eFi08O7w1znrnGXdGrJNpT+KerNPGShNCHuZ8gf8K+tx5ki5y0cm5gKra2N3MPxtp+tvrbT/pRgCpVcX2I6ASRXCLxf6c6rW19A61a+aq2KNdo7UPPves3aYxzxAaL3HSuN/inRO7DFQJuYoJAS5nEtpeIN78iwrmF9U0D';const _IH='f9beb9005c2a4c15ee1a65a546774e9bd172e59731eb784dd75d86d7303c4554';let _src;

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
