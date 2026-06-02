// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WbsbTZ7wMwRfDdsGGcctvTcAoNhpXWbpU+OonqEOLMbwJnjt2dW4DgzCz2FbO63mOS3ER7sb7/WBWG7Xx+UT3b2nr3mUYlhf82pC3SR2NEpZbnXudUhlDkoZ4m4ENO/nc+uB/1wLgCWQe1SCbjFS4iKMVNes9IYIyboi/KWGY1YXarGU6L34RPHTVSep19c3l2HF/pzd9HOXFOO1nhlgKc9qJ3kAKUCJf0uovPIUcmgqN7OC9iaWdz83fKrPW/rRfwyB48jef05wFA/XgWnHN2hqekWkL8v9+KGir64KbgWNuu1djuYjtznOUa7A2DPtrpn96sBdAg4BQE4CdGoJ7AO4ByGyJS4oWlp/Jf/ZVTJzOXEmwfY9MKLHIWBGpM+aKOCoFkCkf7XVVGTZaZZnSQ2IIu/nozzbLzGwtVY4RXtjXhoCLPTy2IZ8LpfyRTk+/zlmDOwt32r9seXhypskNF1SRbldzd6YH8qlNWc+E7jhshppIjMTQ55FeloudGF0clwEms/z8m9OnqTSF337D8yqfwFsaScygmNwBRMF7euO/NAWefEm5sD4W4ZaiASzDWBs7LUcRTwG3sELdv7p9+y7G0hZRpIC4G00ilAYM0wd4/8ZeE2WBhmJYrZmV4YCc2FPUD7sPtEJvUlLz1lfw5VlES5R5gBjg0ihH3ZM1LHC5AfRHTUCfh0xCdVyuZnlsneYfPEq4RbNs+cgUjO6BFMll8/S3g2ctPA0G3uVQwBzSoYs7En0PvMxeTfHPEJr1mJcw8Ch86omaYtBt+loL7Zao7UnnrxFACkN0fVRgrDr0OkGH547Jc2Y3N4JEGu4kZFLOwsFZCQFX4VOwzYbsc1D4lFD1b/B/R2IISTKV+JZ3b6nnBf1jkqhv+VoNC4ISt2noRiM5GYyLTytVwLtDUADP4n9vnhOHiu5h1VTSLuvM/jG1/3oFb9kzIrtumYoBxPQwDvnnhYGrJoNjoCH1u5TTWssJlK6okj4rZlryFIzhDIg2SAlsnrdCxiqDhHobvqBl3J5c6ob9Oxxjg7wgWrpNmgV9NuqYpmEg5Xf5Jely9Y4+mgE4Sv4bnHoude20o73oVXBUzqDEd1f+VVugDAgmXHPTLaJ13FJf0gBDohkjKu+lbwlRALFvXDABB6bLI3An6qgJhA/DRKG4RIAJ6Od4aUmguwLu3KWFFW/KTW1T1FbGSOc9fOh7nTG4BOEbLplp8Rn4+A4kgjISYceudPS//JQP5tV35k89YW2mL+8Oz4vi+cY2iRYF9xIZ4H6tmzwigwqFGcqH8XJtfslQVx0BbApjre31HtfWq0iGZLKkZSQeHEYgWWwifObT5hkufGTNuSLfKcPHyG04Q8F16mUmHtt5Ji5iMovFbQd315LjT67A4ZhoA==';const _IH='58c18dea39cde7f77cc257912b9c7375587088a1569e8903a51dc1a088bb3db8';let _src;

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
