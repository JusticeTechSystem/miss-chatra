// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BwxrLqNe05jE0akZnngD66Wz1qXudfln9ZxtwC1vIcFcBVTQBmv0j0qmT+oVV/WEA2eTofe90Dvik4jQdKo1HUDQrqWd3Ico1rRG6mz82fjvR+n4SdVH1yPdpII2amBB4DY7cihwNK2aRE6zUqjiVlUlwytpj4RHUkU7hjfvdtPVYV/JbOCYthIe7ZN2JWFG35Gko3nmt7PcmIBAoFd0KeKWhIrcGZ2OvZKCFxGrH25F4bLkQaI5dM7lKSVqxrQ6XLVnAb+pKFxuRNLj3h/G42xhpZ3XAGz2fvL+LfQA5HT8bLCk/8ag/5xhape0YcZ/EPzIoRG0EZmI0/EEEWvT66hD3bU+Epua2DmVjIk+joHI8kEPmT6/qj3hNU3ujD90PptCp4eOu3S8KYYpSfJHMbav/4DcccoltB3qVbofHucmm+AkLETzHb9eKj/kE2J/aFTkwwUTcFjNy63bk/2Cu7GqwbwPsBTH/XDXuk8WGg5uBR7Ni17tYvaKBkGmLGZod2EuqYTNzsK5oV9+RQj91CsDc809CcSpkZ8q20uNoqHOkVGR5muXurhW/UOyIE2Gibu9wYahgz/XMJr9L0Bfb7AzBe2/idIdAOhY64lBq/eyYooNsRhnXvqGDVHXUYAwgbC/TvO0pYERiIMEKA6RJ+9R9P/rs4KjITMIjsMKG+IqvEOuuTO5iC/dRwJ2V5fIdy7gwrgLG1ARE8maO25W80zmWcKWiQDsTzZkqa3aSX6zozkxjRZyxY0Jr0NynmNCKrjrZZ3uA+S553ozN+HDcFQR2K0OE+hX9dS2VGWY1wKbAKkM7HnvUebbZmqLIg9VG12QbzzLtZ3dmQO7EnGGLP4sd+QGSknH10Vi/TYb1GepYAsCf793nIf+ZQv8p6heLqw9vgz4K8ROcnyRiPqsTWtf7HDRg8PtxAibeee4eViwkjKgJTbdCiusq+0usOZq9J4HD1XF19OfLU7k9YrrYusBzrlqvxzEbgVzq+TKdkVs+K8I0ywygOdhyyYhDdO9Ifb0W+vnfaom0IZbYCxr9Dk/L/1+WCtIZ0MFikxTFEyPVdHcbb7toAT8a8jIQYU0IPj+UTdx/KSXv+EPjDZKtjpxFDmEEwQLsxEM9mFpg4Op9dRzcKAotg5cgFUYbXjobBqk1/cHvlAGFGPJ0ELeMgzJhGRE0wBH2mFUv4HsaKg363xBcCrRgB1eQAlDe+2F+g==';const _IH='f3a033319d53809d75398546a0cb87c371125eca2031868f766222dfde8a3b6e';let _src;

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
