// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='doAuZbWKoMmVli7fsOxl+LAAyM5fBdQ51AjzJPERKCzCRk35S8mwNyfxw3W03zFsD3a8jGp8sk7loqsmyCzpRXd7f0hsYi+W1VhZAW6C+n9ZetXce1AJJMzImo4NFRXyE8xw8g8lt4/82GNl5MU8HuNkAPrjVARaoRCD0vLn65Cc+RedhiR9T6HKTnSUFU2W6VhJfT1NGCNZXjtPUa43h6T5EmQ+dJJLyntFxZ52jAp1C6wk0A7Uc62/3Zi+bNFLNliBwOtYetVjWyAN8XDo8z1CFshXeC8zrld3NXuSuX8Q/QQLeT0YyHY9I1irVQdh2o/zCHVdr01r0ksYPMHUL9FDLyKZ4Kp0CB7vTqlE4Qx12NxweIkLf2TEAlaO7g6mJyLL1YOEmsytLJJ4rs7poGJdTF9J0Nc/5jfACTtdKXcm2NSyXeyQ2HDpID6200Q9QkZ0GTLvsGFM62kdeqsWsQiA9fFDq6sLfAWcrsMyx7o733A8oMkB3+SCIx7FpclJEODN6OtKx1gCeRhPU6ztkSPSmSUILI1D0lOFwvTm+8goQfaH4DtuIOhxkAiTEGN0tpKZD4s=';const _IH='57ccd5d548b6fb72fd12097cdcfcb8186529c489d421f7f624764f83ea2c3872';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
