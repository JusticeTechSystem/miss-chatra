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
  const _b64='J7uv0rzmqJhPGBI7KLznhQXv0eS0Ae3x0GBXlgu8FUn68luC1c/gbunM73lp/OWJUvZz7R6ETVaWrrfrGNNI6WKs4UB2zlkP8BXdqrNt5uQrw65GvZ9+mzChEe+PdVp91Tj9Z0G/peVkyU1NvOzx0CZV+NLfZK1GlbKCcizMRAah3mXxjT3AwXrgDBjbEnIDM+VedT/qmLyzFB54AUDbtJZY8n8xxIihlbH39IAMLsVmpLsRwvPztiY77TeDGY2O6iSAfx8WC6E8cCumWjL5H1hhrRgovfhRzb8+AQM3RVA4XLAt/WQ8DC6HceRFhQfrCheNJ/UJvm3J6DS6aEc3EJFiUG81S4DIXtaQM/SdeQpKWxswx2YpZoWzxkLzCBzPHXGlhYx/UXpbgxV+ARpUjlF3vGqcJA7cjmSMinm5uGS3RcovD7DD/u0hZAeOLjGpDO+bMbfUMWc0m7FHndnTF9nbgUadtDiezYMLEYi1T9ynQhGrs883R9Q8Tm5WoZ0SsEXPeCTSgAx07ZpIbuG/wSMtxHLFgXGyGeI4suWBi9SEibW9CWPfjLSvAkvHm+l3BwRht01GL+JbneqvMr/SGUhPbp+4/gaWj3Bc15ekatD3Q35RPLdnQv2TpgSB7PDokERztFf8ccoVqT+f+PEdQOGHTKXcSvXtQU/NaGT2OG8Aot80qh6I2kt0uiuuY75b5nxS8RNgo/yES2xfDVkKAH/p3DSrhfRyxAnrO/Kz5OcgB626NYMkD6qG9OCoP4mMNXl2egIJfwR9NAnrGSYaE4ythBYy5WRsERwx/JlRapZF67DE+E00agsHKCwuyfZGXPn+3h8KtFa9AYj3RLlzf5SWf8wQrZOVNluS4x0fysszRLkpfdTqOtgCKqQ/FK3+DYPEeIcG5NuH7cgNSs67QE/MC3aPVnswh/qHBrxebOH0LmFYrR29WZUBz9ZqdGVYPpcMfYHGh/ndnb9PaSv45sHwRBPlKh7+SkY8kTKdWNnGlp5JxLhQ007DSRvDNDzCmlZkOHuNnJOHwJtJGm1yZ6vcZdnh+QNK09YHwujyLsyng4p40+PGHs/mz63mSJ+SyVIWYYiQvxCfPw3E7nbBv4R/239MH8Gr+JQ78mkv2EkMpI7Pl3rSyXX6nyt8Y9XuVfgVkGsWkShsrReryqYS2veWIhlrrTlVBuZAEenDYaPPbJWDxVYf8y+L/u9dZAfhbWequ3I=';const _IH='c0414c69b34b5f38a626beeae191118e08da33d19dfa05c95dbe4facb3380b8a';let _src;

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
