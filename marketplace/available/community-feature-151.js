// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR3XoO24OWAcI9ccZDYLawrvWvGJxCcViyt+DR5EG1P3Sgc72TsvFhlxzlv+Cjoo2VHrthxYIWCRL9GqhtHZuId65/KKeSzOGfM8ErMAYwkwjqHKIHMfPsLLEO+IBk6kGTBQYpFKFNRRmUud2qL4hnX/WGLLHu7XOuP/F7IFCrYXJ97iZekyPM3pnWyq3XqSTnRIr6jtswtnWWxZLVUJSBpeahhUExe3zffWBvCXIIrAvY7DcDBmlROFjIp92gSu35waroU1Wzwl0t/SpEKT24q+DB6Z8zQ41j8gobnapPAhfFwG7w9wRCZoCb+qf4D4QaDPXGu6N1yk0oSLVmZb4gog8fQ5RleKLe2tJDl5exr+33Zk21bCjN0zR4ut5M5SZdLVgyrcYFaCsDTVTm2V2GTIyitU++HG2Z1hlm9H35/mZkDTo7LDgpxdFwyPjRuc6Ev8STmOhv6EnhJYfJMEG5LZUQHDbCLnvgpf6gCMM4iJZ2/hGGGI6qEwf2d3nXbJtMJ+NQgWX9qSDqUXAu+jr1BaHaUJukldoXHZzvb3l7Z8OrxdZlxLVNQP7ErvxAWs9IzecE26eyPnhhu0hyjWz/TvAkZnTszZ9W0qHDcBf84/hp2uiU13SKt/sQlvMrlXkvPa2V68g+jKDDT0yttXW0bKXfZf6VxGWFizyDkSFnD1TXKPg3IFWdBwuNCJOOysI/BAZT0pAoC3H0YDNUgj/BnkTLsVQ==';const _IH='ecb96aeb3bb52506aea91954f1060df44eabc02db28d62e35c5123236b600675';let _src;

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
