// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2+v45lqLs7sF5Dg5xsiJq/8z0it9/bhs0EtF4mtjFgaTfR5E8UBavLZ0wUPZAvmPMkSkyihLVKOzs3+n/z9+KCEOs7LPUie5IIjCr4WZmLbwoFNdxQeTFAWpEOqtB6f5XSAfOkABI7UUAeiUiVgvKTnjW5pwv7nf/02w8ap+iXBNVAcVfiuGF9D/v4MfDEq5XNymqPJOd5jlS6+bY7rJwgOHgsFjDJT3Dfbe84SncfzBsPcJWqBMq9hNWL58q8p3d1tjNt7TW0vtVfmVr7/zyTQm2yNHFe9m9bv5npEoWS3UsRB4NrBvAw8RwhaKzg/t1IcQIyD8cn7hUr0zbgZeEu0W/Uzq+jZFuR737/QDHokuUAViz6vnam9Vunh7pKbSsqeLaoBDWjZe8uU83920vR6oxS2aavpw1pP8R9JoDRZ4R9arr6GWj6R3VAJRObP/Zittw2dDUs1LT0Uv8uUozTkMLKOcIOaON+UlD55pfuUtooggRPHVOCK65QVcyF6NG0/xcTl0YEFTDv/Nc26qESwK2y5AQ5Lo/COWPGlcA/m/T3hMEep9mkCMbksZccVo1VuM4TZdKL7eyVTHs2kj/vcyp9PM8f1dT1vgxZbscOOgHA91lH/+xlB+dA3nnMuy3aCBkshfVZlcclkwuzyJLct8hBeKpbMIwWz80OwPFtGrIey42FbNUh2JarPSHePCp6DEJVPXdBi/eQLEdcS2GIzAH2QAZ6TLLA8azXhONNN2x4eOLc9FokDTvsgqcAg5aOc3c3nVGEhFwvZeO6vc662dD4s27BG6x41J+nPaWN6Ll4Vmxqvj/txUkIe+oox68g3JRvy1xB6hm6k4O9ZcpyyoVvCUe3FbYOd49PLITA0LFPhVAKFPQTt88HqWELmnWCIyX9SqPORrkqTS3rx3cbjrU7rfRcunEmIvZ2s22oHhdlYUSGEyFlpOKs5BlFolM199OYPin37OJ3czTTtCdJh4rJCuZyAxRJE9xBzbwyzePezY+DuKjo115grtvYJ7y6XLLw==';const _IH='ed7485684944cdf6c03472e507a7c151a6898d7075d9751974ae516403fdc469';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
