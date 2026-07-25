// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:54 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRVWS9zBmAh/CS+VYfw5IFrngJdw2QpK4lITBywbtrocLKtw12H8VJzuFEmqW3rJ8cIDjaKfSht4/QfPL/TOz2l66hJOZBvVTq5aNEmuv82FIlly/88ywECbTBB5b+zaWVNfwUsnGaslbQ6SbDPxCo9ittSd9fMV8sjYWczZT9X9K2B602H6ZG5uT7nmZeRcKakBwyrPRhUTJVcrJssCeeuNKzCtKPNB3j7z9KNV2i7PoV4bSYS/PPtUjOcfFSUSO1gPvLxVoal5Aq30z5Bs1guixBf+7pzI7RRiNgpp0X3ft+jnedYkbhKevp3EsUg4WUwIWDS+y0/UMUGKEPYvq1uxiDeZyMHXSuedENwJK/sdZ9BygyoBiJjkK48FJybqDD4QPTlbo5M8C4bkNb7Wxj4EOsQc7w1IhHRFmjMsfPA7hVpTJj1+R5lobg7zzVxSfMsSvVGlpcfsA1oy0jPL2hGjv+mtZXmZLjMktcpxxL1brMF45mTcIKOzaqVZGV8rFvMLsJZUKs0Ginnl1yia4/YGazeh1QVelV8j8nF/sj9vRy31CgmOLIBJPi5/a2DZuzasU34OQCHYvqMm2VkP+YYWlPzjDHTvnUojAK0KE5w8avsOBMtpFfLnlZDZ6gkOz2pdIhS5gvzZcr6eElUnipiCo7qain9g2XG9/+vZujbbGv0lGAuWzDdcZTtEBFFkA/Tf+bzMXSMYhlvsSuc0nff3QLibun62kAqhgNeiHMa66Jrc8zgFQ==';const _IH='10173856d51ea11ea7774856aca1e0e4c718c18c28b112eb39c75f92967996bb';let _src;

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
