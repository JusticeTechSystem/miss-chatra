// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XPNzyhUxlKqNg5b7AbpSp2SRHkxyXBgyd//7hNcNrAb70Ha9UKCZ1gGN736z5Y7PwSWfoNB3yONs9r+k7KmsSwblMfHCcG0/gusiM9nw+WAveDaswtTHa/ED4RHifRWpuRdHdzwIYCPFkzWn6iGbmxAmj4aeetFNQHEtlVJ9I34WvJccsWcx5wjPvMkUB/MKozthbz6S2sJ9wNq4tnFXDbgMhj/2P3c2kQHepwnuc408ZCF2ae7JeuqL8S3Hl4UGk84eGuVLygIhgP6A6EFDnP+YtZ4Mb8hpMcf/aKFIW8rwd9YSOnzLNwRAA/0aYUU8lXjQcfA06mEUG2pM0oYMOvtCXvoGOluEYw/pPCHsgkpcEAJoVsaRUgcEwk6nCY/hj0sgegQcvNveGmm1vVcjoWytuLEYztRqf7AFUB/w4PVDOGgNlnHtZ0HpN4mP0KYzEenzKaANeaEjX00Kleoia4c7L3Nqziw6Z+FyxqchRN1wAtOFCeV+k6WOH4pcmAH79awZ4pN+jzr0AMsJX2CtEpfkzWMXogQRiRPfTEuVIe5v8asIi9jJEvhQX9prfWtZHcQIVpA1BJVoX+Rw2Vk98f/67jTwyoYoUFzwTRRhO/7f8tLhw3si5bocL4JDGex/XINgtUiPMAWx0IIqJSmYeGR1EftPR3MyvD0hwpAmQKXOO6nK1qTk1cydWZ2eiSf7NKCNYNCm6nvwwv8ghJalaww/J4R8uLFQ73ALxSGbPycj4lrJ3Z3LC0IzAh4gnk+26dKJIwCJxsX0cZnZrsBUi9lIQxXRsMO7mQk83QJn+d1od9hvBW331u8KJEQVTDaXukoepmRLtyae76Nw2rDvmjGAwn2AI93LqWKH+wgR/5C6tp4iYDHHtt5DgjPkM6svRsAWWR4wofaVZqKwDq3KpNnsx6CsaX8Jr1pJ0fpvP7WLqR7WznreHojBQWVPXq7n8fvSDwjt8ehDdVl/Va36FqpD5PBudzqWERgBNf/x9cuxjAc1+9LPTnDrucj1AzL4fTvUJo2vS8EBmvvE5Lc=';const _IH='2ec5bca259685690155f5d1a34e1b272494179a27bb537426e74ad186d9603a8';let _src;

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
