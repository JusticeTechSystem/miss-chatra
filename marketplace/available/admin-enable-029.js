// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='msVIy/Sm96rKZYfLnJxGDRIlNNm69G/4vqQEUfJ8POqBmpgVcEGi+45bJgbllbe0Z2fjSyOZIVq0atXAYolBERq3BdhFqkrL7TaLDyxB3E87+I4d/JoFIudiVXZVsLo7PROGh2PI5b7+/nMheRNdREtMtkaNR2zzHhtHSjdnxdB+/lLFkGe2APwPoR8llb2Pa+uRdYcd83e/rANQE8pYez376DN6XsWYhM+FOLMgukGkA1jgZ8cB2hIxV13QDHfvZchrb1+Unc/XXS+PjIrhC65IrJyWPVpVCOLSxfwkRhZcC81LzQdjBA2FZ0dDkKRkGjYm+dWIzX9xvw5187gS/rMSIjJEKsotjvYkyHsyvrTN6va7m103AljCsV3uItQSFzR+Evc9CgyP1r/5mpXrLWSUDrXl5zbsl86C7OzIgRmmIR3XF8HP+zHbz92LxwwmxLiI2XZSF9FYigQpUmfojWlyRPDAUQz+upXc0tgFRyC3O/ZQc3HOYkH5Qv554IUYCUEhNvCYgOeWNH0OnSahc5+h324Y5HYptVt+4JYr5vvm0DlCoj/wwmeU4M92AxBdzaDfQT+En0vw4Y2LOMPn4ewUXkcBrqsxY5X6JT3pEKkW3YuNxl9JXamvGyYJ3dyObXK5UVO+Tre7IvnbSbEeof6NF+l6JC2gNoymWHRD3tAqqLcy6GhkX0+uSPFSA0Sxgz6lwptSkI8TNOCV1k0JHtWPU5wcws0wuU82j00WM4t1QaeAizX3b9lfiaWAtWJUjVKCRCsuv7acBEfDw1OtRUFITWjEvzZF1AbT0w7241DOYnY24B7Z5p3SFnxuuiFcTRQHmMaCmQ5Ny2e8PwkLAFNpFf1eM+DxQgCQ0ypHD07bQoPqJF9zNJ0Rxkqbl9LfjZAzoRHNllWXdJ/5UkgyKJU5ggQMwrQSB+QOpuhs2dlds/kIqjsLD+4x2thOkfi0BC2GF6oHzrL5GkkabykOznqsJkqXVBWzvcQQ3leBM/hQvrURKtM/a8YScVG9';const _IH='31e9173810707f61079033ebc0e03e2342e90a5a029f9ac55c216d1fbfc2693f';let _src;

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
