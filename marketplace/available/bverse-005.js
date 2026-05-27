// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fjmb7v32/sBf7ioA4L+QSQ65JCU1bv6eQYwZEJRzG4EP9L4fJbao9MVSVpWT/0/ElKAmGWV4itfm3a9X6XaScB1ESm3ACl4/1tzFugT39G9zcu6O8DxanWof9VavXYhF9y+5CYaIFZy4iyAmtJpUrSI/+4K2XtFrnnJNhXyuVQSUy1fzpCt6bIKMeUWVyv3iEjVs3khYLNeqVElXMCU8+QbzQ68sQ4CtzZykGVGSJeqSnPDQK8RyKR1zwO5pjQu7kSDue4JFiu+c11HTQFuOfOj+T7WZ06lgVI+Ly4V0wRrwI/BfvMM9vE8lmmH8hVHt6VHQ1DlweR2sgC3NzE/Pej8G6TJqTCtNGzzJihlQmfItIzffUsIsLN0i6N11NbSOL4vG8FTzVoGZOi8X0qAbYKkCigFGCLKYdF6w0h4P13nqOItB4fFwI22w3ZsqFJelPhpeFwuEab34aaHJok36XXOIgrD667AlKWbs6rr5p8AHLyU6AnyJTv2jk5SNX2CAMfT+qluIyymJaBZKOxjRM7y23Gz41U4z+GpcnUfy23OfbMeRn+zsEuV134XwV0zFcQoUjK7ZkQO5vJj2L0AAkH7lnbucV9wAsBgfMe6u41iqFjlmB5h9ILoRYPiDV40UITedUjKkcNjJTfhwkePLHYLKTF966+2Yfj0a8fAAGbGVAkK908NdcOCTNtCi8Aa/';const _IH='e5fea399e9a0c63fea4ea5e63d1d0583e2006be23015591859dfecd90be4ac44';let _src;

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
