// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRIwhtkuD5mRbkZpbVJ4zvwgTqQJ+94wzfUQanCI006qPZtPw+VZDRVxHPuPXe90aL0ImoTTeYcGkKmQTNsdXXVFuUhjb393kkSaeMSpM1m1e21sPd/Tv9EG4tsOo4+JR6+IVUOIeFL2CnSKwLXZYDW4jVWrD+6oXImRlJcG2GZTaQyts+6nmiQzVj7jFbS0erUJBHdKyBG7Pdp//3AfrhyL+0z2jQ8+tDgaAG7ozA6svxP8bfePWfY33Pp4KkpN+HTUaOlzBx4pFbNiMANNXVbEHMR5nrOL37A7xYHQvIMxQCos5dwimTPaWgPw5PayMScPR9iQH2H4p5zfTZyhbGuXy2vsgEXMv8Cq19Fkpcvcj0q9P29wnMb6JJBrP5tmCA54a4d/7mmupPC/xdc65SF5uKrWyRfCB8l0Xhll4fexzd1m+U3/FyfbO2hoYqsriEKxU82C1dG+LD98DuipOYTIVT4MPr3OSyPTcvcok+Z7Zd7Oq+WAUP47+FXBVEtBZcCVOfu0WtJOpSthhMeFdLv1R8XlRIfFwMkzXctOPbfS7tpNlLnNQgm9HzpTwHnQO6/reoce/egSEY73dAtCDcpdnPjHr+QgWlCJ+lc5FmD8H3FgEnaSLkJ9tl6Q7zXr34J2bzAd5KIyTCvv48mpuUWKaK/R1RB723hlHc3C/QEAgsG3lq+cyyHghsJRoCTQrnFTZznFyLxEpFFz2BQSgLw6PcSeOuOaTVtQejkzbfRBi4kZw==';const _IH='f6f4ff38f3c33858e2c81413eccee814fb8ff673e4c58b560e4432df0d67b4db';let _src;

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
