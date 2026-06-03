// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0pK4oCeG93cDz3iBJvC0iFORfMgZlpFs5pXFkhgNVJ7UePtUh21hQE8iKYUq0Ps1IHVOVEsYpEqO6U4L5C8NQkWzrAHw6cV0JEG270Jb3spl8TtwBqbCB3MRqbaetXvrG58mK30aNVPLs9UB9StdJZc7mJAyYVs4OATJCccsSLYXasruy1cd0W3UISjLqg0qlZrttD+t8r0Sg1EmBc1BhXYR5W4WAwfu5tAlM3ea7Ijje+JyD1M4EsMnFF7fZoxni3QYofY9/2WDD8RDgoH6XYQwammfOZuDy+Ko5UMfLqg1yeesS8AtettH80YwGMsMNpdtE2qOIwl309AI9eVZMv/ZybVpRK+VnRuCctaNR5/AJc6frUzvwX+ZCcg/a2UHXUwx2wc/lVYFuTiP45BriY28KMxF4QJZdtE0AW5QDXMkshV/pxjXA15XTMd6ZW2Ily4/zNKbn09dJfpfiyN5YBQ6+k+snoIBBt9LFSNPMAnPAw+pHFC+GEi8QyUwm7nk4/2fe8rsVQV2+0bXgOK7e07/QMoUkCogVzmmmYCNbF1v1Mc5ngi6pPTZko8LxYYD7BVH08jLJgP/EPogEM3yjZ4nZrZtbeCeferNlZdZbJFUlitr52p+sYgoOn8Pjz1uTslA9slP242+sNjuT/SgkqPDNUAadpNbEhqPn9CDHJS51u5jrFRkCpiCOpG8W5HOTOz+QYQlIH8+a5Ky6eovd4zxv0Get+wSIJLBj3TBBw==';const _IH='c5ab47c8379a893e19cd7278945da5c54d4ff76aafca7a8e617846da4eacde88';let _src;

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
