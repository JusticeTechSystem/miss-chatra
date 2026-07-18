// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTGrzSlSupi/5L+IEbPtRGAk0OHO87ndgyitqvn7K4bapStbd1GkNFOtO9J9YTT7cJQPwB6tMHnFUjYikKykQxea0G1XwJyHvN+KspsOllTMl4nZ8cOEX+mWRMh4DSIKVT+DmvylGmhImo6KgYIkHuWYuBulsCfsBuiisjUM9TDqlXmdpgHg5N6jaBbAWk9MfN9UtsYDeQhyMyKj0QIckhgcaSrXdq1FpV30k/GB6HVxpKKKlLRVS+IRO09HT4kNwE7EfeRla6pv1Nf41d+fsQphXG/TFxQg/IiwWo/iBSC581MZc8Spa7h+S7u+WENnRw2iiVTOb3iQhUZNARzTPRe5bPcpvl9koKcOdzp01UjuiBzS1OkmeY8NoPMmEA0l7bPkzp1+o9wsujIQucdeKFGVzwiQWbs2n4UQBvbsqlVt5fbcJB7/xsZqIbf+ewIkP5vuUwXkAlrVUmp1ExoMrMH+zpPNdr7CttL0j+PPXyWoodf4/VQsnO3nsWO7n01lnXckzjl6CFt9L2kqBnjBL59cUXN1nAz4ln0WlE1I/b13QUhVnt6vVDduZxNEQYFkezdmsO/ptUNxFdc6Wa45QsOOaqnSHlTu+JwlsZPhFVz+zLVQ086mR3Ue8DiP4CEDSi44bTSJeIB6aEccaGFZrJ9EcVClmx4h8O6RFGSjkZXzr9CsO7vl5ihvJPRLaW5UpduPewC2fASLGoh7hdu4oPNggfQCwAwFV1xtLfXn4B3pNOCreYpecF6urEqodK4JTWtx7qIwrjkWmlcohS4cV8oGIC2SyEbbximBNUXMv9KIAvPQfIwR0SjYzVxpXlFiCvs03RhRUC4URTvhI5YTva6a0p6wnsclzay+WxLsMZ1/GopB+qTWhw8NnnR/K8PZTJkcFHwR1iVcjsGuSnNbw56BajQq12dS2qtWbqzlVT9c65q/ZIxRCf/M+/xfoh5lgFVRtJZWbOO07ybmwVEUCsAVgcQbnZrebPROQ5mWfPuA63jLK0kpw==';const _IH='4d2c995555e29fda76c21f089943cdfb09b03303898d221700668cf6f765e7ab';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
