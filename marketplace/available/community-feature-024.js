// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='M8YP4z3WsmfZT0s91IIK8v2nuFc9pLBJlYldbN6/h+Dzkt+of7H8HK2zA7gLwqRySR605bjkkJ/HMrKf1qOb2N5qVhPB/yleBLyI0AmLxl6SawYBlESx7BmHme1GibsSCXD+DjqCPGQZkVt+qzZ9OmNc91DtlAtOdf1nISjSr5127bGb3Tt9JaRJeVk/zFl4ney5BS4FArJavxNC0Q+yDpNEMAlS6l6lLd7rSUS36l2jw/Fb+0hJJwK5d1/WzR0BPq8meGIcoBlEmdWf9J5g6X3WFf6p4ctZRO0KU8i+mkxMNaFchiUOt3JHvOby77SRoIavVdkLIrhSxdS4CRJ4XFJM1uT+DXhGdjX6YoW260pelZJwpxV/qThIDM8pOJx30W2TBntFNZztXapg+WZdoxClOoi3bilTcvvflUBDiPmbXriK9uwAtm3ef4qQG1Ju2i+ocijVv85+8TfwWEWpVlp0aahdZoal0jQfVjz5IBBbo+IxMTCR1seqn385Rm+jYEHCGupXWuWc2uievjzVkS1GfEDqNno0ezZvGtcCOBtnJ67mOejZXlpi4enH2FBaco69OjWT3I59enEFmdInNxgT9aajMCynUalSSVvUxNujEpMdiknEv57f4RoLrJUpO6aaScMMTOiuJSJGSUh5Ci36KVlcIhC/+R32vkS75ecurVG1nQiu4Bdsfr1WFv4tv8frJc51lt5MzFdVfI/3HKcAEXCaCQXW2X3v/QGFDUsXoQ==';const _IH='4fcb1d1c425c9719a0ea9d246d297ccf040490f88e49643f15bee2aed41cde9d';let _src;

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
