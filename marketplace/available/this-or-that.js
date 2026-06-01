// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:28 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ06uK6peuxJnpscpiaBsAXgY54wJnelHHcgwqaztRN9YJJJe7yDSCktFW0yljEdhohYhlRRqTKJTs9b7G7sh9mKbeQTzXXE9Ns2UF9iooBoajtlclJp8s8POWFqGfVupWd23mflWdHnKIO46bHiXSsSZnalWdKLHgxyeJSqGB14zabM07mwYod5h6XwT0/sgjIBH0KzYKGb4x+SXCYMbEaXFHb0k8+lFQlxB8/sRfGGvC/OfojKdpL378GrSaArxf9vWaKx9iMij17f4PR9kNRL5Fvit2N5V6K4N7L8G2dQlZQPF8DseF6Wr4X9SeJAeJEireqs+/WGfcrwT4OUl8KjOPHub89o7l7jTSmqMlSn0iHl1XpiwaeXD5CdUISeFT6AIQ76+owE07DE+yLz6rfB+RxXe2XJhTNxx0c0F887zdN5DPqtLFg4wHW3iGtoi/3+QAWOrulz6hSrpjy+SL8uGOhtJzKpT/+Qnh626MWtvmyd111kcgaIZqExcyM/XwTFyKzoU+pd46KLXd7R8vOem5hdmgzX2HRFOvoYWKOIyKZ9gQLnDE3YkzIQwxRJd2U3d/LfarMJK5RbeGLqB';const _IH='0d0bff8df466a45d3ae25db0c810ee09dc60931d439e970624f6a167fe129aef';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
