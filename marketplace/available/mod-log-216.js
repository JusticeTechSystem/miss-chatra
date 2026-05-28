// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Z7GbvvPlzlkMX9HOFVgMBlx6/IFSMJgfFGKh9yQbIVO5rSZ4lzSiYOfAJ7NoVNCqcIRxi4qESg0GfpW1Uekd1kFI/wYKsK5PBSO+AuKYrjtacRRHj7vf3e+IRnca4Z84n+9qUIwkW1uDwoc/erHhJTLeQJ0/mS2y9uCTif4cLES3EzQdqQzIWW0k09/NoGEVe1wXfL+9R+NBzRAEqE/ByyP03P4BI8l0avWlZ1skTrzY7tCBMC+i48j4gOatIL8IHxCIGe5GsWTPU22Fq+sKiojrZmHY75CutEBGxqWERX3o8dwPb7V6sM9Q0E1DNCn2WN6lh88fRwQGXLtXEowvOwQWgzndNQZbnAjkW7HxSapZUT880OFPD+l+/hKWsvXD7duadmJ5nmwpI9tFR60IvMHfD3Fo+WI9vWSbM5qE1KzyDrivJD3hUO9MLa2k4/9BdwS3Q0LO1BYcxDCfJFm/BqRnWWyhbYE8eQiUmGv1rfKlq7jbcHxo1Wbhf3+ARZRJoczUTIA+cJF8lnF8LAEV5uVZUlm8umPsGG4KEdKDP2l8+thsLcTnKIXSFZGK8IP0Xglvqmk1TEL2iduAjkqgd7sSUno+bbYxH2BYbcuk7UZh0YuftyCp5FL+KG+AZqH/plKWgTSjyFcHQTw4BUONBuRdWYa6cjNap37w/LWdI/SHiU+lz6k8PAuYFaO0flW4qhmdSFWwHZSFgw8c8lu9qjDKw+Utpnf14/SI1JgP3WqdNZ1SKTz3LA3Bt0E8Je0NgJetCY+t/WWbtzDxhQH6wl4ZlSlh8kcQg57faJ3KSHbI1NxpTvYCFxg70VK0dnJ7LRas3JD5G9g7Qc7PJFlmbOusNTJMvKdN6C0c4DsIZOCzPFJOtRUY8YpY6DvqKVFG2URpAE8Ay4z7Ok5ctePy1uE01AxoTfc2UdWOHANdcKPRGa0VYMvj5H004Et10mipC4gREdDrL2EhjzUPtGZ+Y/KlTfySa91FwyLYc5s3bYaMRlK6+kaNFRq7EILAb5HqhMo3tQvE6LztMY+suftW6yFK57cOX3ghA8M7HG9L7D73Bal+iqWhZLlDsS+OQf+p64yrX5YjhVgesEtnU7iOI4WD5qNcKxnD+Af/ZAeMZCvL5wWRvYzL0pDIacIFxlKL+0FGggsD6nKq6LjMhdIsj3mzGUS24a/kLNGdbyVzLbfJ7eUSOJ8CRpLUCXP1RdnU9pVYGJX4rfErGWcR8BvGLITeBFin0KXUuWYcartR+u9Cq5oFA/VlRfQkAzlSmF+PqJ9lz4C9+IjTt8Tq5Nnk9Tm0g9qV82zc562TW6Klc3mOjNXoIJcg45CxhRKuJPzSfr5hMdd3ZMqxCw==';const _IH='9332f6ba11bce0686982624524bb6b251479a511a069949b8ff70ded90c0549d';let _src;

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
