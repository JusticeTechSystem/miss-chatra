// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xsMWqSxSUi+iJxRXTi6YH9Kt6r6//HqyWOshSoV7BvzAA6XAc5OlMQsDKkr9h3sLoa+XxuH0cuf+uzTUvr/W3ssP17fRmyWT5ysJrFAbHZ5BWBrnJ2O3ejTrTkqfACweXOlumiaHVcvzp4FDRTcG3CPNIZlVVLuGELvO8KuPis38wTBC4cO5e47NFPqMzL0KxgoW5RYKD3jbQfjctlWVGUFUI18kJb63idNuBwosY5Zyy7xUvYsHbKJY2ulWxMt9flPyoD/cO9+KX9uYlr+9m60ghPcxLctQozCcVh7M5xHENAa5YrtfFUcpqRaS5r/iOoDNrbsjyJM8muy+lGBJbrYBtFgU4EyHQ30kAdCDTah/DvTZCitBJQ7qOuCH3TewLAWHOGNnHmeDv/nijJNa5RrOVkPTAFwO/WvnUdqHyyvfCKlMQqDiRFgfPJKmDOZfpTFlNTUerEsWknCs7C+qywHp4icMEBnlzUybwEf0Bt4OyEeFzO4N/2oayGorr49oCSig2aGCYGEtffgyU5Hgx/DrofF9tJvh/O5f80WNntLfLL0lMygeYuDZWKMThRdxjNH0j58knffMs6oAs6/OgSCxNEbxPDcO8voJw/BSbNlwYv0dlk2XVaXdOSQzXRKBE4JpL8365OucHG6SQ8FKL7m482eToO4XAzgQrWJ2KjU0KTZxY+rFRQirAUeIgYh/wjWv4y+pdUUdajif09OnKrmDRH+jFJkrtDh/iYCMX/SAGz7+LjrDFe5ZT7/tNYX2hk7BsSdqMYqq6qsrT6TEkYVIPWKRem7GUHOR9AkB6YVxL3xhFCe9UeX3kmpEAIO+ek2Vpo30PK0GJLFo2q3+arcKFnURLsM7BUDEy0dRxKj9o962OlMIABbIOapWQpbCQxcly6/6A9lDkja+I6nxh8581IIMmUrB8egnCDbUtjowh0FPPevhWZ+ksVnS9HHmczRiQSXpDaRVfucN1WmkdiMTQpzbLle2VkUdlegOA3sDEQivH90ffEn2bFWO4RoTKTuyNRBR+NuYYEFljiEvHXxEbD5lLFydJQXetDXQ0QolQuIT6njSo/pCmW3iHafbcxN9V6qZicqAeKwtZLiebNNsOUCHDqFhs2h5t16AT2LPYLdQ9mbZQFa8lh/AG/Bd9M1870+9oESAa4tkv1YPysh/v5kzEGXbU//nKqTJD6+9z3MpEuEPNj5Q3V0PgE77KDXSwFLcHjvVnOWeI8sC8UhCk/SiC0Q6l+vskrKcoVb1eO5qUM1ij/Niu32OqJre1bFNu58q0anxv5Qs/7iryfGy+ORVGGeb1wQuNAAKsFCSunZrMuYzEwL/BOtq8ZdQU23YSQqfFx3aOxUR9YXYc0q+AptL2X04zfuKJrltTnFrUBgfZbRFyEkxPhrAIZSYt4ThQ9dX5E33Y0YHgxqDN+nufs1zuAh2B2c+v5m3bnsy6rjYHKti0y6gqNSHrmLcxoBlqWsE+LKivrc8CR0MEE2oQWLB9vuSDb+fzToXVpgX0IH3iSN8LdMLvrYNvtO0FZ+qmy30RZgL6qk+ALmMN7338IIIvFVsTgtEfeXSWE0CHZ9yMCzvQfyPnaJsRXP8FUd1bDSfBxV4IzqjIfn/fkoLQl1pdRXTR/Vl5Xov61xAjrrJxBOmmMbmNels7px8ehwuPMkQRuZppg1L11vP8ZHCyDNdit0sX9VTOkUB8Wrvo2wS0UuaT1ss6B2eXHGPvRaqMelTnpWrURGpcvbaOTF7gVCxL2uAFXvfd4crbbve9nBxtsaAqFgbymtxU28Y+XIIHjL/qurmSbLd3VDYERTs2KMYzxOOcMq/k/aNjWzDhr+UH3vB';const _IH='6a1bfff053d3aef01aa83dcad90c669e875cbea9f12f0b4ffd527b64e5912b07';let _src;

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
