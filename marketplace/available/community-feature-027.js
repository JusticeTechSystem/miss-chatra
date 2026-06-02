// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0U3bqNAqfgJ79rLbVmivG1faB0uswefD4tduH6XDMoW4tNCHiPYYynbW5Z1AOTd47pzvanbkhxcfkRsM00LWSdCQfjJvVxLJR58fhIZ3GAtl8J7+0JPiY38RcGeYbZrK7cMZrFYyTmqIn7BmqTJSMWJct4n9eRDvnlitaxkCvWWyJ4wQQTSiNbK3A+P0ay9AVbR0HZJrrzbdnzSaGeWLirdXKLr0frcUI/yb4QwQ/feBXZNU32O186SBLUmeHqU7MZOXtZH0DjJiz+EEksC1opHrUqdlqJjHh/8F/OHvtVce31Oc+oRxOgH7MsSmOlCaRIJ2BTqembAXgZQw7/cZuAWtVUcmv6UIXryj9KglrL8ny769TKpjLoa7IMJcfSMehGZWf8MI8+r38Q3KhpwZ5uecUh21J2JNnX0nAaoz5TDm8vRBTcxEKYYuRf3k8/1GUCSU/AiirwSLRpb7ww32ni+b/oDKtY0z3VvC+KRhB1dd4QzwXN9j8QWu8wzOV4jBPHzOQloBHK0GB58IN5TxhrsUXwEbwDSzogarvIa+kNjMDdqYvC8w/7fxVUNuxug1egcCZHuP2cLNWfTLYxyqgOvKPyqs0MlPiooCEytd4ngWniz6xouYHqG2Cg0cr4wiEEjCOn1Q1nzpDLI2QZ1yLogrLCmxDvvM4QvvsypMlY/VDfIIp6iXfOWoPi3nk3Bdqb1gbXtQWlMDl9eEdxbH/3JVcT70rb7iEOuDJBD8lQ==';const _IH='97001a6c5b30e2d48373a6ac34b5d467a58b20be1af5bceb433a640b77b346f2';let _src;

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
