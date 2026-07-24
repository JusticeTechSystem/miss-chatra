// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR9BdPl9/dFgbVGVowK8Q1r3ffEUXa5pVWoFGAgMYO1+GyLbC17NvoneP2q50Fsu6wy4OWlxsRwzWzExaP9k4rBvWd+OlHTjQ2QTVdtJzkmh7LHDcOnWHmKrSMoK41A75tE7+EnlgbxkRx36vU4/a0Y1qlmuy48Az2fX7fgZ+87Zh2jB4u0U+ulTBiYfVB2ZCR5HdepW4T1Z8jhAkUNvj2bRaArsOfeGPAm31CX24w4vJkRR5sckXKvDacwdyf0D7O34pE2ox8Q9PsHf5+esqYbCeFsRTswU/WNZd8vz164V6sKwD/Q2kQiYvMzwCN0RDo/2yg5PsBFyZeY5fJTMpoYdBNIGI/IdUFrj/EoTXadoV9WeUPGkCX0V4wlC6nnIx+sUJ3OxBTEQ40a2mJ92fpKwZxLaYb/44Xcevh6A79gl6j4L0slKECG6oZOhP6pqqFJPt0QM6SnFd/BlgVQgWCgvqoJAk/PWYOKjeHUl9fi52be97L2Tcpzsu/qs41RjOFZDqNNVQ3iKCymmAWBmPAuTqVYrFxnBGNeYLYmcBODEGv476dY1SDcEZiEsGohQEAYnaOSjVXuUDg+2h8oLz1MEkPaLCqR2TemsEi5gZHwn+dKMjJSVaT/M7PZiwEK1DheR1ZX57hUbTjgqCFJBz/7lqQcmd8LRTrFa8yKE0Jkt60Pa5vb1GkgMULqgWzyAeFLxyfxupOjAn6lvoaSRB/UDjj//fHwelZXmDJhlEm52T7cv4Y87g==';const _IH='a8344bd227aeb75c196237974feede95fadea1dbb510127dbdd8a9be491d78df';let _src;

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
