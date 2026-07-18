// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTtIDr+Fg+mJiCnj09Y3O22IiubMLjULJyxLWeebOlRKhsB3HjWrrpAm065itXF6uTBdq4V7SSQ85b2Epf3gdmRsBRm8vD2AyjV0wE7rwLNTPtV5uV2pqlSEPUsfgbvw3aY78RvS1eQM8vQi+hlgaupMu3nluHx2mLWUKN/6yLtv6zabgBJnCLfaRwQwAwCASRO5qCDcv/iMmeGBcOjRO8GVfDdBpUC3z3x/OxzuuGMx1/xslIB5GEl0+nK4C2/nZ4DotL2NVrDFsS6arAmUd4lspj/Srnpy0S1dvIWZWwx0WenDfzAXjN5L1l3kAa71jS0Y6CPqEo/6mQUd9siqkBpLiXwR/AdsEOIFVdAn3dkDbw1AYF36bUStXZ+7D2USaInCDsZDEBLrsTzl8Nl3TvavZTOAwVtltteTW49MSnXjiy9f3yeLKShSatG9lIxr19n8BSd/6zF68W0F79ba4aPWrYCCKahrDXVr8QBQPA371owwU31MBvjsbeAGa7dSc3wy2I0ldbuxJeUlEB0mChVvxUh03jaDWskiQMekxkME9ibSfSMHec3O9dXVGALDXuoyno6bPe2Ejh+6D10';const _IH='e62bfdd245e5fd7ec30d2ed172c6d16653f059afa4116057e95635098697b235';let _src;

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
