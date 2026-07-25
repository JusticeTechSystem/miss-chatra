// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRn1J9ZoO0z15DDcT/SSF7ro6dS7UWKQb0otQUO79Ln1v79Y/d+U1LgGkpizgMZITognjZtZuRiq+hNX2JMP9kXMhwNIB/S+XeUCEw+qlfvbn+4FhAQ/w6pSifYqgR3s/kaocfP9yaLqg46dk1M1xJm5DqeBO9p0HG/APV1LsUuS0N2DrLOiM8xkRYxrkuuE17eWHmogi+9t1FyVmisV/LDCWd7qjMFz3k3v6aKPgNmsXAgMnRk5KQf7qxgv4S4C+sDGK9gMiX9mt1tBJhY73vlbqHT4AxtyEAuIn+FeBt1qwddenNk3AmHerjFQ/TWoRStkWv70ytPILnXlOtKtQvMj4m91QoZNyRjDwRWUb0x1H86k011cILFWhGsIggPf+pkohOQ/HkOyVL1paiPAqKSRUyKxtbo9IGJXCmcjlmkiVPrRcwVZvBphdx54sAzHSc/yq7t2Hmrf3qB+9jr5s0Ls9gNIkyaZXjaQQCwPYrQ03lOJAHbrkjPBlGq0FzVYCjsdc1ldcQuFV3goXc1Fq+9QXrerkwEvXTWMuuxru4cxWcmrGNcUQPGdkL8cZsavOIN+VKNazEclUuYq0CxP5xQtFiNmxvcs/iFmQkjHDRHgHwEKrAkpkKyAn/xC+mzXtCcQX4EgfIQBYOBKm84+ExEgdsfMZ+H6UrMiwl1FcMKhqXyAipiRQhy/Ce8hrCUrj9QhYxU40CJIsdIFNt0rJ4PHYrfnfLnyvM8Q+OIJE5CaOX13kmNpAWXT9gEXYI+m2wkTiEHwclROcMVCkmrwZdHiM4s7x+XXnG8Vh3vsyiVT6PdYICKmXK+c9FombFgmM65NjEU+gzjEi22hze1oxAOwWbjEZusy8mU9ri78CJVoMrybxNCaU8NWGpI9VVCNrEZsCFwsCd8523z+JHlw0DVIOcTnTONo59f2/jQQG0LO2nyiqhMGtfxDUvUNe0BEr9ZETCdJemWXGhed/Lpkinr2ozIRrKp/WEIgeDaKYvPKLnVm5bwKlSm7s6eN9VQ15HhIT+NwoMb3On8IUziLllsJjr+9SjmOi99S99b8fzZePka6/KTlMSNcjRkJTdsAjcwN6qan1UpXpWDHKzMCc37hkkz0KpKK0tCa4u5NtY8MFrzKDoVj2hYArPPXwyc1Z1OJDD+t0RxIkI+csYXtxtgqIeDOLyEuy3IgLx2L5DhIWABRnt9vWBpO1NG/+O8q/0xrftHqvR075FXfZTJzXWfOhiyH1QHoq+V6ASnrShsbnquiw8k3Hj08zxEZbscVEMrIIh7viPUAYm9XBSa89rD0EvRiWUgKt2tWI/md8mroxrLcQb3i/b/';const _IH='bcc56fd0037e9b0b8db90869588df691a8928207fc75aa8f7de3876ef1a6df65';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
