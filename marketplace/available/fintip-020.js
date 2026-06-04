// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HNe62ByDrjMNJ5uBFGLoXrGswNTQOuzjHTvH/k4f10Wz9HIRj5nzcjE9ym0hOKOsO774ypcWQf+BpWkDQqWuhLCB0S+zTp4NejH1wuzLlLn2RzfYwfyQAY/BmKB7P9jtog7Z0GmJbzJAazIc89Rz1TTBt30RAD6Q3tn9N2b7LWfznJa7vyOrRPswwws1p/n6pIOxyzGJ8OKDxVGRXnisbSyHGQmQZgE3P9ztANdeFLhnpj9fhYb1HNTsi3yPOM1US8bNXkvBmOkCAJMgayxqDb4LqQBut2jV9HJYoa7TLoEJoLbmxkEcT3NFSvDlLP2htCYEXeTf7p70AnK8/lq5rUB01L+wPZ/+xXfjchE9XukvUj2N2jCwKPPoUx0niDuw634V6+JyrzJk6kntY7WPtJE6IeXIyzl9hMIED0BNjco/grvkDxHLd4nhDJrDOecpDu9J+opkT88H4jBNwpJNXnjsoGGrfkZhGvUAFmnDRgqomahlXoHPWUhBMP0DcSwDO7u+ru5PI3VVcLinbahqLjH9ebxktASyKaWFSQLTJnOSqrSkrOrhanPgIVkWXdD/xfQaRIDDTpyhCd284rSRVnsm3B9M9X3zS+fB5+tKULJvCJNTZGUtVkhIvu+8v/All/dOyLsAyLSTebUBLrPRzLQp7lbN8ZrV/J8a5Y+xCHXbmc/hBERuIJGtg8m+AEPXIo1DXiIab871UgNpR6MDqxuf186JpgTWCetkrn6J/NRyXVulObAO3HpOkdyfBp0MMfPPUPU9aP18jB1C3dKlJQUWaI8wjSZ7wIh6m4yoghWgzL4emRbTr5YQmenxGjncLa+XRMinEuTMk3vWUeAPF8VLw03z1hQ2pWDDWa1Rmv4UoqFM8oLosMdZ5kfU5wvVrGSjQ9y36s0QWaq4Izr7XzhoyaxeBLR2k5cNHD/see9/bJrBKZDDnmBfaxvqSsscRdb9b95jNj92LCfGIYn+/uwTak+lIgZQ0qQYbSEJt5csmkZJA+Cgs9kz9IsDXyUaDIMo8aTS9Z0ocM8KBlSK9gDcaXoLiYC/iYKWLSzkekB2kQ==';const _IH='d8a0bf078123688e1867f9f8672687e1e694f331ec06fe97310b5b6963564405';let _src;

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
