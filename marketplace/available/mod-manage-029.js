// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kzQsYcy0WKbLZ7/QUPJmH8jxxbBlI8mFpYIgCmR0JfqfR0u/WZNm7sSAsKgFK0VW2HZ2IbzAgkbZkH5/1b8Llgi4LXJy0eqB1+sYhhyqm05EAmjBdO5rsxL4Hv+DVVMcEhyOFqadojqAFVf96av8ewkUD2hMg0RTdRflyIdh6AuxVtnAjOeA+v4FysVh6+RIjMsiXV+zhFCulHqezky0I0OkhRZA7qxJPRlCpQnDsm38ld8K3nEktA/UoxXufpinBujfLZbJFeb0UcgmcKZWIl2tyCe8OVhfunONH6nEUJkxB85dSKuzNeYAsIWuGXqHmSOE6S83igjsFLipwinKkJ/162imhJJWo4teTcnrfbSfQk8lhSoTmhBsBlQcVWMh0t1o+nkyHiDfrtvUqATVwTIKFAOgZCH1U7vLhAhk3opBTZwPe+BlsrVOIwVFT+f/wDXGXtNxyXW9x0PAAtyn1Qpr+bxTOufKQIE/qINek7dLrZaradVWdDy/S29Ct5ukXSM/S9BeUnGps2CnrFWdesRp7x73hJFwtztJTK/7L9L0ysUOOSqvNca1g6EVbAaJ0Qrv7XJDnJVuo5x918z80h/KFpjYozPYSs1VMx3h0NdsEyxE+JqaF1hXEolzzgR8oV58QIoBi0pZKoC06tErEk9fdSk68wFohsNQxCIN2+3ySBeMBNlMPw50ZUys4rYBTZlWceXFXqeRJKmIVsDgsUCTRv2XVeEiFIm5TpKpgDkS/cfcDsHZAycXHrSLTXWxBigFwRSZi/Ea+HdiGmHhAH3r6DBUyH1dswRECmXRP6mZHc1M7n+0fvIg7W1AHFKvWrEnZgC8OFRYwNxAK4K7I0fb2wDd5sdgrH7//cLsutoqGUjkjTngXmPgaay6tXNyzRo5MXZPBusmm++u1EDLybS275FFXaDjVHJ42l661f92bfJwd1uzda9NHg+lpRYP3YOfutQr/rDNQVdVoCsfojU4Sn24WjL4rLHHR2tpnAwoQJnxsqifH8MZmeTUCOJ/FyPadVKpSM524qhIUX4Z8KyLiu50KRNDnraUs/6LE93VzjTykukTvE16WJs5UQ0m1DsFa7O0+y0P1M3xtzdSOR8hinqkyjEU/Hpn5YHoTcid6GqskPj+caHXy6rSDbhfgYYh5yB9EOGbIl5du00Z1KG26QwP0AEXiesqE1/JItDlMEGQuGxErEJ3Y9numfDeK0dKqX+pIK7F8b1njuRMguxvEm6AY0UsG2CZUhkNSOMX/v7wJSP/65YXJ388cDD7s+yHMerpKWmDiJd9iDa+mfbhOgLaUmnO/0KPlCmb6I1GW7k+Gz/rW/8gl7OS2OWL2roy/O6hXCVnJuM1DSvi2OFP3nSgQCo6JAyxFiqa+R6ZufI=';const _IH='1fc6bae0c2b250b5543083429ce172e7a674c0b9b024d618e58db8cfe943f58c';let _src;

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
