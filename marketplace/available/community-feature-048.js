// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSAYidj/GsaLoHTLi/d4M1bbdxJf79Xx1fSGWizU7P4vmZyCcjUk1GOI/gSpMOLcBnSpJl3tI0fWcD1xoVhM9oLGOQPWg42G235Zjd6AGY0zo5/5hHh6Mr1lHWPepzmEupQqovOOJuVU4ktDJzi3ZSqNRRZeZbhKGVGVFY+bsWNv0Cqi6X+cVC8Rc4xNEvpVsEeF3BlfgKmcWtePd7OWHk/o/lIDiHjs4Zj36Q6sklKJ+pRMW7ZdpDTVozf9tkfRwiNYTOiDetlQPYv8Vx/uYcCdVNck8tm7SnXBYX0Ck8k6Z4E+K2y9P4C6vKL/ARsbBzSL0hUgQlk1BAlJ5sDsiLveoubDQc63P4d4q/mTWAW3ymYZBRrf5AH+wFKfHJOx7uGMvvv4hhFjbxafq1Q6zWwNZx7djkrtoC0jD+k3peocu4EFaVmvW60bAk+xqzXjpHe4QbtfSfS5MD7vE9JpKZHUVJ8FWG8GLDCEG/7KfTQIU7pDStthl5jeozQAftr3KG6j/ISpN5zcQU71BQ6XPpkgxovQnY7d87XBaSvFSteWH8OCM2EpxGgS5rB5msSiayUCKASXpAMcFgjFlNu1O0n4pei2ksDEGQrvi6Re9y7iPCRSSkvENyDlo5c19WKSp9JurVfuQxSeOQi2z+joSnQjKJMaxRzWkswtngGdlHt3XFZBESy8WFqOzDlEF03zsuylvt3zxa9+Le+FGlQgOvJxzxrL+lCHV4i';const _IH='9ea7e4b244f1bf5b0473d44af94dd1e8a803be63724563574238bc2ac10fefc1';let _src;

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
