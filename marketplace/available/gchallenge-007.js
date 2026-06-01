// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:53 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/P7ykRI+Idzwhj88GCeP1YFXI7tr85BTJsN+sypaGzHEfVtQm/Pjzq6RtIv6aJdO1BLiHVy+xtEex/PoAS727rwoFscgFFW6qFykkH1YXGAiW5p1QdKokMfKFE62G1qVVCDJBw2h5YfxGe9znYAo56zVIOmLhZcQ8iJTRvDCejWuNbsggVSJqgHLAMNfz6/bpxJM76icSokUCQDrj2zUaNEo1QSKXk8Guv4E/4jzLYr1HQok93+E+1JEvOVTvg5mzzO73ebuvLqKaQ7qMyq0cwfVBEV5MABypyKvIQPAeOphZdWDU/qFXh1pKj5qTU76DbRaYqcGSU9fWN/HIOQntoFsMxIt6jts671UBvtT2dGIw3xMTxB1X0v3fu+5K1Ky+pci7894yZHdd72tmsKSNA5aoNOIrXEZvITdC6YobCJb72lPrvS1nrVrD2CBihvbJs/PRlysXEtGSKrv3OxyPYhHhOBG6pyrgY0h/YszRjENRTGOehX5oEG8xcSbJ8ftayk5F8fUeip9Dss/70YJrKWSWC1eli2IHs9IWx/HdjWwWl6eqEDllH27l45ARko4suGHXERNv+vC+3WEvCPf4ozQ6cSOjCHou2qoMd53kF3nQiSnpqpbPC/9uo88WfBwudIDIKA';const _IH='3b04fa1c867e20859e3af91b0ee6e893e216bd985443b876501aec6e5d60442c';let _src;

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
