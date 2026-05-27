// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kZNS/aOOu7CnVtrAUDYDfrQKogyKl7+SRKYiMlYB4o4wByKeBdmh7N9EEfdSfEz67toULDrcmM0Zctjzqjey30vZq/RwGzaS6hKkwgYhUq6IsBtj5wGX8uOCXPc3cqdQ+3TS4DhSIkoTCgTm4QIeVGdITRO6Y9ZshDqBiui/dOmMIC+BKFFwvGS86QeXMk09PP7TN7rYOg3YedMM/Y8wsHCZ++xzmwW1vvxCLIgpIbwD+k8ZAJ4W0ED61wbDaRfOOJ9MFWGdnzeQYJbmfqB9DPUaXcQVwckKEzPjjxNxPkXnRXtJ9brfP7+qF0DhqKGmiQip7LntbIeLn9TvPYCNNHxpXqTMymz3XCFiiqP154VPEFTUgCMm2zP+22LpZWrHsDthliSjByKfyvirSVjpKNBkg508BcUROYaZ160yYNwZjGTAkw5Sv3Kf7sJSIlkLNWp5UmozNBFHjs0vKwrW2dilSP3AZsYuATJcYQxsxRZXJilELAIhqvzsBoYsUiQbo1Upasf8HaaUnPxR0Gxr57PidR3hkSDI06qzDG1L/gP3pvfr0pe2fSjr3PYGr1/v5KcbDC2Hu3BixhkQXmXU0aV/3CVxDYBPB6XsbgjL+to0zow5uICJ3rqjS9E2SWThoazRYYozT3YKjq+eihqlJ8wZ8vYzUL6Ztfj5/UMc/dpB3EgY/sVi+IIkzNVdA2BMtDchDvxaJftZXRKXgllbYX3dirTR';const _IH='0e2f7fc2fa544d3f929e11e8cc0496317ca44305ab3232e54ed0cf7df73ff028';let _src;

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
