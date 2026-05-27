// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tnf1mUWoHDKRtDQV6jXHtK7ShMzkjRCHvsbqnLgQllXttgZeck0nnT4nHyek0DhXvRdqxag3ExFQ8gRkK/e6shQXbpuz2GiUTvZmPick1x7jcfX15HlpWku78vIiRchUCgkIHGElCUb4pPUWYOVIEuijVXvz9y30oFyeniSywc6FGKalioZaS2g+pFvBNPz2Fb6H4F/488IUo16SoqxrvAac7P1uuj/0cXQQXSGD9b8TLiSUewjDCQDQTlaI7mvaq+Dyoqq1P0sr/9DTWEmgbHtzk5qKVUH7jkD1hCJez7PhLWKOXVazyf83bENHKRhJ/sjj0UOSqcC4+7mvU6TPAW9yJDztK5ZyXI9rwbDN8BQavSZxplK3cNITyIOk2TIwTDNKWV6ubfu0Pql4+QSRxa5n1vzBjD1cQZ74o2gDK2l96H13nfN2JUoVAdllIMKfx02GBhRpu3f7SHa6RFLYwJ9OpalDYvCldtmOwiP3Q6iA0y8kGkqxdHo9yojDzTEkDAC9EG0A5HSjQEO6+KjPVHEdhYiybVXWT94Uui+Hnr6AX4e6n3fh1qZRfUh+du1U5tNUSjaHiELh3egHd/1r91weYtOzO1iG5UOQojczaGDmI6Q+5wXrzDnnvpP+6JFUlDZXA0ZkUBF/bge9aO6uGOymSejjyEZefnE5B/xATHtBrkR2Di7HBAZRIIKp7uGzj8YKZidUWRQvbg4=';const _IH='384631cf515d4f672de1887e04cc635151383f183d1e553d14819df2efaa400c';let _src;

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
