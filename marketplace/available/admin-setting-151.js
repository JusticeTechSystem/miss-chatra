// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lZBHSD3+J9gyfE0YASfgSu32QYbklkN8Xgaawyo88RyiDzVGIbHcjXxgomanRmoSGlpfv244FKqnNr8VbRqq7+NB27sJ5aSuQ4iR5cd5DynWmcLMHqGDgECBI8PluRur1VHpxneSEkZ8+KHipYw7XcJFfF9dAWczrHjmQg6LerNKqSz9xNEF/0K60hWIufuFGvsH+4lQra4Wbk3gvOxeMFJgLKcE1jKKJT69Cs8edVD8OARXbRVjmkZqsKk7AO7C3TT1RznLpOnrkrARALLjvWpWpyJOHEjQKpVYRffLMDYP5lYssIWGC060y3seMVD3t6O5dZhO8qwrOY2wA0FPFha5EKj5zOwLA4t9Axfz9BOjwWcdF7+CKIrT+cCLMenSo5klEy4R6Xuy/yQRhblMLZQzoD1C3G8DB6oPcsEt9PFQstY1UfWXNkycAsDtd2MZRtvlcAJuwLjqHNY3VANY8XfJz5WGwJQP9i6pAM3+Nng+9T14TRSy+XdXws1VOAfm5sD5vMDHBTUOMzZQJ4v1IWwBzMAfkW0MgJeYceWC4J9s0AK/MyvqXHXClM2j5wjcfGggRT+M2N2e/h5fF5REFpPCW9xOuJq/5GSU542saWRUUE3CY96ehusC1Q0Vvz6iBDogC7CrZiqKkfobYnduWfWYHLOSH+qLDceTjhlLvtzSenOp7tLrHWYO01sEStOmGPpOg3vzcS3jw58uUqV3FCxfTlHHeJsqcnjXU3GG5TtZqMZ9me5owSJ+2v8cYPnd1dJz2BYd0Q2XzU1woGrOpvWy4x7FimTT9W3omyJgCcu3p/vyMPX77H7IYT1Q8Od9xAe9dgSJG8Xh9FozigHa/5CNVtutiV6YlqdQDr/ksWpaBPmd5kOhMp5Ia53dPLokWlkf7v4uEFm4HLOnhx8Jz4jErBfQFJVL+zLipNcChb9XWCJxlEXf7PxFqjFVT7bd7qU3VvUmitlXWsT0tiqpvly7IGymwacba/WlZWQs+jSIuK3OFJSiztfIoyxqRN5g1VkNAekSVfU=';const _IH='a9bac11206bea49131022a3b5151dec7e4165a21f1b44721f6436ac448a65f64';let _src;

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
