// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gvRfL+G+XhOA+YtQPpDdXtXQnIS2OTIcJ4/PFMeggJkliitivAJxTitAzQyyDwVqw/xQSmjc7GgdGwyv0UuRKRntHemmfu087iPFNfuxFurCkgo1jLL9QMNikfOinISpdzOZhKNyQJ3wgSG0ChXlLr/SdV876zBRxnFR6nysoAopEQ44gxEuJZ55DJf8AGG1EdY/3+QCzbhf14Kj0wTKco85c67bX+KpP+rtPy03Om/97Umo2t7mfo8Qbeu3+NSd09hXTn1LSCket+F+Zf56xqE5GaiXrkG9fzuHhapWJsk+7CeJaTqq42MVCBjYdthWgAO3pk9dJj/JoYS0G/XFwn/Xh3uiUl7CXdVFm9r2/VurYTKzrTMwI7UK3NR+74lkpJWJ53RxwaNcn6RYFa43AHh5coIKrXbqAiyU6L5LhtB91JHWjw2nbFQsXllfjg91jKFZJQSGJCmrb+tQscCePzSse9I844e0vvgT1VgEvSjBxjYv/psqknwz/LEODjJ14rK8+fjNt9RfffKxdH5qPQUR2APzcpQcpu2XDJe7cjp7hOjp9EZJIoB7pH+Gkc7i4k32LEcHVoOO37S8Mg1DLcKwTFrqMqm748AGFDpb81C0OS8snJ5HiHJ7L23joM7Gpld1gdGv712KwliInwuCQm62XNhSanR/NDRqNW3fAxYSD2KbDB0soYdR3qaAvf0fGHqZ7lgAAwMo8sANq6Qh0BnjtqObZ7sUNF8yDeCr6kwgAiES4QZthY1G2L6T2EqAypD6PTvxZSZmJdgxndKxAx2An2d99k9FwFtf0zZ/+cp8DZGakHMqZTrgZkzyNea4GFZ6TKS8VhGtEnYMILPbZZKgMCdfUa2lYuiZkubBZnvnwWdo4BRkT5Zn1kNGo3zmWx+P+1NJ3n21hHWehCqIBaCZAwq9EZ3bbRNNRprGAI5ojGfSgNQj1QfO7BGdeCohVoAMGrw5priwiamuIPfwh+KHbuM/zSstJkmFjKv35JXKyjG5t04=';const _IH='09ae136e3e76b51b0711bad5d2bd5d7be0ebd7c290018813bcf384211afeae49';let _src;

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
