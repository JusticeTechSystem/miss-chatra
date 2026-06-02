// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8X7mbLF6HJhncXFfam2RLv31+7BGlfjY0HkwO0fRltzrnZxpvMm85GEzZJ/7Wu/v2+QbYD9ondH2qaHCXeK+6RqaDnWQyJjEZ3BOV046BenFPQdgws12gNNqWddeQRw2So4Z0R1UDRkCXlsGa9Hpqt7QdIimz1raZ23VyiZN7NrbySiepgXAIY4m8UtykHV4QEpZmK1MdM1XzrCEru0U7gI11MQSPruONvoFSthS0omQ2Lr2M/IbxeL8kUHx468so10QqHTBcY0OkDEOwJeJm27pBxBiqllXZxfU5sTR1ao69NC7UAfAFCUDXDw6qukC8phigpG488TokDa/USKp2xMJcxbVJjsSjGIpovPzfClhaWyJGhUPFozCWEA8QC1d58y6MpKfK0UiwJb4UBOX+M2NI1nhai62m5KvWIPxwwRGDpMN7tih9TSMjjt2Krdn21XVH8nuGvOzKq6PIeGe5yvKjMYe/ZHGoAbo1SR88bEzG4d4Qq+zf+0SLJRNPK4KHcHH3slsm/2IaNqro1gph+2y2vD4l/n1vsLOMecNOBWLkCsgM9/0IlsOX41rsBS5/6tOhtwkcFgk9X54czkeFvK4U/LC6/Df2GDrVLI4a9EofIqkCpHrjZ8cKJGCmKktfuti+ukcdbDHRMLlkQ3egzIXwrAr0dW4XlGS5PGclu7OM/5md/dzsgK922mRAPqUj0rn8s+lhkTgng++8nU1qYH0NnP56Y54f8EhM+cdhsFBuLcnIrClH2Tk/x0sqVsxKme2xerLMZ0ho5pflHtzsBCWNNpYta5aMHXnQPHVG4MQaeQhFOr1tlf54O0ZTCyxE/uGqXZA2obsk5+ievXdbmqi7C9NE/+RVpWgLs8DikMts5W3csrmIXxFJ4CJWyTzWhe54EGnRftSaai4ZQVNRBoMnHkwDrxewswJAXt4iMhjW/NGaPjFnnrZfBVE3PGVVCYycEd/CoSTFTX6f8EWKDvPKGF0n5vX';const _IH='21391a94ad1861960af5025f7c6108fee9ac5cdadc75bdd1f3497721e61515e2';let _src;

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
