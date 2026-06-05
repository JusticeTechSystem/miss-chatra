// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UvJSA4rskDmbXMx9xjRwaMbib2JXmLnYlCw6/26n7G/CdrdOOggx/1yenqhW6v88NhMgLaWyNqoMs74Djrumv1UD0JWYiWPUtr6epM3xIMPkBE6MltEQcFy+/k+1U8JbP4YuET8JpODV2UwoIujQsmMh9VqlzUVPovb0dLmJ3sL9jfg8Dv0d0S+FnWgZqCEtI5Jxajcwcz9XpCL34klsvU8bcM+9l6LliMkPf/GE4nT6FWry5bOqT2YXPCKDhdzgP9SvCIJAO2qSp8/4XBqj8/k2gzr2KtF7ZTR+QoDIse3+Yi3O+RzetolIm6C5+ALlaVulYthiqXFW8RpH/yk0SPQUUl38ImWJgSQPWhGa798UqLNUu/7WvHxrxkhVOnhPzXa5s1OXr3K2y9feefi1Q7ZFZ2t6Ka6RLNC2EySCH0VkTL6aMr56pzlzqFdDkQ8e8GRABeaixhesCwGr3pJ3rN97oAP/BIhPtOdIsG/4N47mYVe50l+cjpV8oeeo+BQLo9D3szB1Pc9makPJPM5FXs6yRlSkowsLOR3/Q/x+DzI1VR9hlNJQO/3+WdCi64LcSEJH9x2F90miCcIs+NZMCzMeXegJOkVjKY4N3nuHF4wsvBpbWGoEMxoEp46zLFql2CBKpXyt6noMA+Rs4dv1IjtvJ36YetFNMqwOwCfxKq5FFkIqs+FP7zenpg2GHW2OAxzTNp7GY0ZD79e0vkvLx/EjQPbuzMS1785BawZ37RtxKtxRgS1cmOpL3OOHo3ZiEBh9gwOzN3veDlKfTGQlbSHSQHNswQh/RSxiiHXeEzU4dOEM5z9nbHyQHnbuiivcz3w0CK/ShWEA+GJmgo3v/NrC//SIxhUd8+l4pJM2HD2nN7TWcwxWcECPxL+3zhIppgCqXwsQYudRCrpFbgJ7hhefMREVW8rnDFNffVFEAhVYy8ZI0EEj+hVZxz+IzKtJmjmFskWL+CZtBqchs9/Y5pwfEYz1CAf8T1TIgrrYzSB1AWgRXmD8Ksd+JWtFE3AMpYRb8UJojXHkZaiTydPLxRm32e0nlNttw8L6pJnKL2CERJzXEGBkVNuLZakYMuIINu7Q2Ygfc0jlmO3yriusRtMFv00rpdPysnnfFOp5O0lQp80pnWxaE2BDysDjn13/BcTV+Ssq6nNcmtGUUEbrohxO4y8OrlISMSvR59ecjV1UoRkvYzqGPycZKW2jxvcLBDw5Wu+lOiTqBklwKwD3aiUHzOIE75QJnsG6DMwPbQui6ITD2K6X6tRrVPJ27FFpm0weRvqM6+nc86YmBwi/X8ZHVXv+MP5PqywWsAWgrdyjU1E7oHLdLjInsSaskp4ng/zThu7UgWLVSNMB36+jf6jMYokpe8LIR842VbMK8ezAV+0o88bbKn9Mmzgq8whwhElxOydTlw==';const _IH='3c329f5ea3ad18b677030072de2a5e4bbb5ef65ce5cefd3e08888253098785dd';let _src;

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
