// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT+br+AcHvxrhnMv98/R8SNFVMfn3WLHQPauwBhpO0ERf7XD5qGmF3sFElVxc2UHt65uXMpoZpkt0zT1829djDiTbrQgFSCmReokZzJvKRRDuE4w563ldRciBg4ucC+yVVO85ZcqGYhRPctxsk0eWt3JfQFd+nK9mAR9b/y05dhKaVE39ofyDe3JPQoz2f2bpmXoeM0ZFuIuTGlTgPxaU9bf/rosx0uoRhTjPQtbpWmLWer/uQio9mTZgNDaFpwO7dCIq+SmzPhkyP4wWPt0PmoAzcRy+Bomzgu65dnjHobEBslKZWqPJDVaPfmZvGeinKDluG4XbSK7auwPIIOEtud8oYrAULtVc4/1QzH80srTP1ZQLtEMV8dcvD6zIeAPC/MM6cB0pJGIHDUtZbW3S+CgPnp0ThJ56uSNo1gnAfNS6IO/OdvXX5ijQ85NPCShWzOV5XzrJr15kt/Y/bGj2b1qQKQi+nG4kgte9T1jVsjyGowbWy7PsDwXR1qdm5lOn279hU8YEGQ3voyDwT6/xjEf1VgVLDaqD97RUuNDY24WtBmEaiIgXHGlxdph0bTK3Wnv/OjJR30l349FxEMF0X1Du6Ud5bb6rh0tbH9J0jghdvQXzlep/uziiU+/Q2TwYUZjUbTCwjBxGWpe57hreZK4RVbVE70QJtkjB13SaVEmrGn5lfGF1twrTtv2h8F9tNvinl3OP4ZZJtw/l6jLrjYkTUgSxKGA0rCL9w9lE03xlKrhemzOVQPnaTBqYNk3d0ib8ik/pBt4VBKvMeuRdfX2TeP0jN3E1bdGmRC/qAcmGJOEwGwDrPjtirFxTrQFlA+ak6GXIxPLM0INscV1x06vjmZ8GPuWB0Q+QYhBTEJ+Q/rOVSQkaCB/T5evHf8u8ehZwdEM8v49u9zt+ytA1TLszPCC5yTffSxn/cZ/YPZhB7V066WTGJ1OzMRROo4uYVM6zmrO6F10TrpxJZKq2XbK1r9c+578BLjAD4aOX8IdJ+Fq4EvjjB8c8K8k0oMshzuWHH+0uA73Gjq4gZvsq8aVB6Y2DMumf0YixAm3AhFMYy86cSXXM2Ddb+keoCO2ntZbPLodfAJhKvHLD0eRur9PiU567yXWNRAEEqnUN5zvgX9mPq/VnedoKpaSc+AR2rwd/p05ujz+M5TYyNvieYJuPsXvll7YmHyMr5N0wJOeOacgBeGxmUVnmJhTw==';const _IH='655f96e98f89e604d4b50c56387b1bf19684ea00b1dcba0e9b170bd335603ed8';let _src;

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
