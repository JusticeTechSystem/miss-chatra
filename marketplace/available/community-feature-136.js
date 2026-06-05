// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zF7OCWLVnltsgjYDNBehSXwJftrz868v4AHlUSC96hVLqk+c1bajofvQIYGFk7EOc1ynCht8nR2CG9TBF+BQ6h4nEk5lMsCT2smO92nOfThUnd4H+qikNsQ1kZKOcpLtyZR5HGMTiGNJGNwC6P50wJLKvmT5u/6CY/3/dVXcm0RHwcOabbaEEOQA36AFhfwlQ6GM9mVTcxSFUtkrI7UUIbhRzVvbbFPCECQTljMKFCKSu6W1kFR2XYa4j2VlvWghsSBqk+OOciHsUWpHan+oMPoovUCo4Zz47kZLGHjsskv5jby/eInjuoFZ6Rb3ycfHr6Bxfl0QxFuHEmRn9kXiUGDe/n6dSddL+KkzSjcSRImt1tVy3g4ndjIjVzOWH1obr0yNfsjoZ0HLdigge/VyxIlN2gdkaIOhiKA4pmbNkW1qE90Z8dhDCE8V+E+xCVHd62OdggF8X9zAh3SljgUrTCL4tkDKSOuoC83ct98SsC+dqoMU599PwEtqNaulSPjWsC74NXoeOy0WWhmUmYwrcSuOBu5/Ou59VZKV/BrbyH7eiY5wOoi4bD2VdX1AC73c+CPR37DBoGoTpRA74kPDjgBRnIEnAIaI/Y6NIaxQc+osfmdwFmBiwIVOaH6ozsnkckID6+xXWF5/An7kYzRyfkxdeZDVXlg2KJyz16Fm0TvSAkDTxhMtQZ0JXNq/fQnYNl5DMZ3DkQ2y5wyZaWI65Ynfe0J6ejKX';const _IH='4dae48becb152067e3f37808b1f7814f9acc088cc8e1d74d8f543a294d3f6f26';let _src;

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
