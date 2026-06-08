// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='90emmuPGTallrs+85kTpmbjTcTOccVsi4jTaSKInI8KpYI2xUNMd4fgHeuUPGWRIz/Kfm+2yRsQ3RNShSdMvz/lfl+TMWaD0r4AWjI1ud3hT9m6UiLndmaEZ5I1IDph2PUb/QB0ErXyo5HSeO609abCS6ziaf+Tr0WH2788fcoTMYZzk2qMaemPd2r2BkcIoGzFR+REE+smgBrJ6tlVpE1sGz6FilNOv8fb5ox8TyeOMj+WFy5s5ZtcnN5jzcgOChACpDgvPfWjCCL+aa0w2MS5g9kKY8fnbMN+U2mx4WXJC+kH2xIRwtoSTVGnIgl75Fmc0BQP0uc30WXW6/yrahriqBkY/LpuBoOoL4TiB0MkHLDXSwzyjeK/Cmgnb1GsJS0JliYdr1hvY/eSmGyiCX5vx+FZ7EKIFtq+ol3hniyVz36TpGd2oB0DUt8SKHLr9sQLLvJDBlNtV2GBI7o6n9wLbVf+myeXtSeglrpQRVyOgh+ONp7r4aIkybTuPSjXlrOTLzvy32np7ZN+ASSKnOqLMxLFcu139wBP/8Wk6UpazFCPQTx1pVxRJnL6TG5ER8iu9ZBM9Bq9wKnWkXIk1BqYwYVaF9rNNsK2VKfgJNG2Gt/yX4XIWnvSncoAEhb4a0YatYpN4dUlVluw0jk+PdY/70ez8/pPtt3Ru6cowQRFVXYFWI170VLODG95g1m4/hnLvx12NGhRJOmR1xfD915N50TXzHQFhhkbOdQ6FaQ+4pMAAgYn1W7yNLxHf9xyvyzdH87hiX5nYliOEGNfe/HrDr1e1CfuoQZsk5phAI1RINq5KJCX4eZmyNl5SYGBf8vhrsVUJsiKp21vVeBvR3GIk1HFHuPpSprPkI7fG/NzHW+Vq1lUnJ4B+FvIstOrBEMZEaiCoP+lQKH4zxWuLjP1tyxDSQgVSbqmGbZMfsNheypCbInToN7PkoJ7h1vz+PbZwYB70V7+nsx5G/H+Cn91ULRwcatmJfhh1wpdIgkVYCEKLku13x4wso7Qc2ogYSSiyIATGIG6Y0SwlwtDnQDNlE6RejPrmaEUcUGwNMZzOmhWNJt9+gKdYbfMXG/sSsGj/AXsciWCrtCPUtO6y9YNjn932J9QuOsSGpsKLMwE6eX9i7h3DxpPdEn5i/9AMyXGx74lxqjQwbrZgYA1AFo7SjJRJeTkhq11gM+cUla49G1DzWBQkuYjmFx2OqbC6SBlCNglKcVHJfh+z6GyHs37/ii59+yVtU/EQtlffzJO+tMCftapqtIM6Jcj5R2H2KwFVEr5XzM/b748kCKuG+54wMYDAYtnRH8uhNRveUKbBUAC19Y0/60si94Agh9jGg0Crs/9Zah1AwDo4tAaJ+VEoQx5mzD1XckYDCs9NhyUz8tLq2i7Vx1zCi0tWhFtwmS1+BSQFPbB2mxJO';const _IH='50f8e6e4563508fa048ab9b4f9681255ba3a778691ab0677b9e6a3ffffc96b8b';let _src;

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
