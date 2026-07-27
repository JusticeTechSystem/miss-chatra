// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTxa08DZItSso5iIOPjdgFSqIfZ7GvhRUljDHxMJFbvlpEupwwmMh0uTyfxLOhmZbbw9dMki2nj+9s0V2YSTs+ipkXtLxtBnIOu8XLjEiK67jH6S6azzEqaSNR7iqvp8uLu3ewu+hwRK3XTIpHANcNHP50828yVN4Fmv1YYXnAmqqr7kgRJpyxiXmLL+P/xgAfDEqC22OHwDCqyvwpXn1Numvc3uSKMkPHj4K84GBdrPxUbpeQ+XfkoZb6ozfTxOdd4QyHLRBk0ZzAKN2c7RKXUWy9/4IVd7JD6pi8cdVMqnXNF7CjHTGSNwP0P5/xTeArwj+Fnpzt+zzgVih18nm2Jp25fuPyRlNtxfcSLaPApXfBuoMu5rwe8T3UimcgUoFrlM33mgAn4dZ3w4XyE8702qKF2octZTu+wFIh3WZH7Yuv7G6dZAMhxuio5I/mz1+BNIE1aPjwRdHvWUfRYf1ZGGT1Vehm26Ai2avkpfBJJkKxJ7tzNjW513xqIifQ5W+9BDSbaNcEqrIRufMuiN4qneIHv8qC6wSK2I/8HM07GQQiC9PDFGSjk4d6siAAiveSaX0BUI02T9yY4RwGaqd+SqVKv2qDYtNHg1Kf8Ad+qKmkyNfN+lxtj1imy125cSe3t8EWD6tcFXbqLMEtmhaBZmz2cM7wvDwR/NQ2jk+Mt0EHMH14Ng1iMkWgVh8EHTX2hHq0P1UrKCF6H3uO/OOMY9BDri26fzEq7Ndb87nprCNM9n1bxuCEEbEyDHDHNNzSreGT/d1gepiBWcuCEBytGHFco6+56pg9eYXohCQUxHAhT2imr2rDzQl94MxORMqM2AAtd3zMOeZiKGcsJlM+hdlqFhH7CELnOasIZUNn+c9ByxaFsiG3p2VyrzK/MAKvdAhDaGLohrZ569hMUHxCA5VzVvjy50YnY1LNoSUhjiY7R/gDGb3iDc1SFd7/HGR1ldE2GNR8/ZhNaKx9yllY4Yo5wr1sR8S4clqNINOq2bB2ZlngIxv+shT/YxfgaIxVZgOpbZXXs1FccmPrR1+QsbCMVjOe9';const _IH='52a3fd781cfdcc07d8a2d71889b828195e1d723569f1413d2eee537d40032a1c';let _src;

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
