// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTULMo4cq/qCljr1hdqf64mBfSgGuJdWpNAC56vpwc21yQjRHyRDOr1D6yC8CWrkau9G9bo+6gukAfNd1SkUpz2EW7FwIRmdIJRPED+AJcqIGmrKFA6vkeJYIGrGz9fyLi+d0HLejFuIfwLCAOg2jBxOY+Z8Qu3MLltTLtJ/5iePihdTdmsLU4SdZWRzzSSr5MQMrmN7U2R9eLU0pJDA6ZC8riiS4MU/H5+p21myEg5CMGeB/FebQyd80NHqu+DzsGMCse+cm+xNZH6YTJaEWdgTUGcktoQkabyy14Fk4ECza/js4MD0/DKnjFv7eX4deTMKeDgMTEBSHH68GKFWzQUYVt8WN1TfW+qqb0918fq8vNUJjKs474WuwzdHlnlSIfBFOp8l70f9Gd9PqZg9j82l/KMTkpfKouWDvtxKBvPw0fd8+Bx7rQy+9FhVOGHSik4Z25ssr9oL4Eybpd2lo23WxU7hGI4CUCcZQJceAm2xqHZM7LJxiVipAHagBamtkJvTwZXPMvckn0ZmMTMv/VVdvhZ+0l6ZLMOBc4BtJOa0yMw97tkwgu+lLyveSaZCMp8RhxpC2LumZkuLzJbWyjUnX+rgXOeYIgKc/AS7B4JpPbkufuIvJc+8zyusA1Ap5OQjXKwHUua/e3FZR7cxNgt+7kDLXq4JA/dMw6fAMzCHTQ+nBOQ+W+Qi09tjJ6Y6eea52sc2AJa+yPPdBJ3xIr2BUeugkaGHR8QxnwycUIBdDyboqX7rLDZyccGsLajsSGGQaDBS+UD0/0EOgAemNLhkmF1/IiYPX4zd876hAkxpAYnPj0qstAZrHD37mLOuQ4qxbkzbI6TDsMgtFSyVoIe+lUF2DVUvJokrdTHHGnQGsz79EbDrsXLxjRazpmRHAZfwas/uBEW6+30pZIr+lC31sBvrUIRKuxOSKqMJPEKxoYu/hv0nLP910ZBGL7YDhzbMSG028lkGN/7objsNIkyYBx4MMlA77eX1U3jPlJzkWLlkqU3S/1D6FAd';const _IH='1e15bab6cd87116c6454b06369bd6beb8ea0d66447980cfa0a9286d01a5f64dd';let _src;

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
