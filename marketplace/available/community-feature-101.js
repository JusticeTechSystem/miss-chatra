// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSRI6XmiAYsrl7iKTBXhKeeuap5B8gU9IyvN9CjacFG8NqfGokuC91edOR6F84wdyRTkOOfw4dWKnaGmzmXdzt2jBPS6/y9vFw7aK5fsyQ9W5sOTf+Cqw2W39wZB1Adx67TWf/ynrdRJc9ystoPPRwBrTb47h1fDvJeVRShyGDCNaYDC/bASdndnbKS46VfsZBa7ewaQUanNOhTWdGC4//ud0WW3wPeH6YTvxKcLzM5mFXs0fuztxY1JpSa9nep1USla7iO2EdTiZm2G7OrbF3J2jfFU7i3Gllll7gfHXMjdBUGV6A6sBDmi+u+btNCg/BKzydKUALXYxY2lGipdCcXEgoAOzI/ZKq+NkZuM3GMvRv2K7ox0v/JB+7lS06bppl9ixtI0VF+VUmSVzNmm8bRA44BUyj8Bm5uNlaLiZQ5aco2P0OURaxxp6PP448CEQ0p92h0FlgPanGrbEN+xAS+36rRxRRyT9NyVSRfQJklu8toq/aI+mjr5StqH1noznu4VlQZcT3pgk6SOPRUqc/1PScApE/5RaZ/lijndv9cwXUJORdAZswO/dQTY64C8oGGek2kob3R9esJoN4sr0kzFTzHLRL/Wlp6hP6snTQ3D2ZOj2VKGvO3i+200bFY0ByyBd9tEe+08GKX0SOoIUvYPT3x0T48L3wizJpkSV5R2qLoN2+PoG8p3B1gbGMnrAatRphVyJQ7Sp1nQPuFmd15KyDcWbnM8VQ=';const _IH='64f4292167382a790763815fccc2a4c67dee5d51eabf972e0b66ba74e049559f';let _src;

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
