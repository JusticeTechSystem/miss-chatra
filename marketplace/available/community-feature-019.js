// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6ypK6YFYIK3sD3jjkPh3sWEDceUthL82AeTKgHZyFRpRUGMPXivQb78CbajcNM7qpeqcJH2dEk4oMsh5r0DsADYK/TmfOiyeSzWUShuJOPse2RUfvNI3qdCiX/UvKLh6tVHSjPLCFYp4/twn0Zja5heXCvEWQZMhD/ePHsltBJAQRupq5TW1+9Olm+mRWKhLn0U0H5zx1DQEgz6h2UUOB4DIVCI1u8+hK/97yI3XVgF+hL6Z6G/LsC4At+UGZJkU3nmTAtUwUVXVBR0wQCLSczGBQ9ov5E6+Uwzn0cWjLcB4UXCHdQp9Wq3hNNKsBl/bG3XY20tkH+iWvci9sHYGDQNV11EHFHV3XQ6nxzUTe20qd/FxxiSFapazBH4faM6fby45YNZdzJyhbphQ2gbm+Z7/DJdyJPQsdF448y8d5s2ESJVPKCYCO0TnTVgwyc/0sxWU4VxsH3gwMvTBAW3X3mwgG+Q5YEQ7wqe+CaxTPAz0k7OSvqO7jMwktGMkKIFw5ZmvQSNXW59ykIYC7dTZZLtpOIF5zKKMOk5uT2rXTsN6KsJbdq9GoCSWJVaLm0uFYWOolRFMhhR/+lmrfo6dKIrT/36qYV92Y/sokIg8e7hKI0q6PwSo8NJNdN012a4tTyEhE6e8nWHOveTKYNcYT9SACSldVXV8k4g9OW+2+j6CyWYjmPyVKkFsjYjBdTogkyhVlWET0K8Av7w5/GTJr/9MZ+yPKnb5RbMzQfeXogouEw==';const _IH='453077e67d3ceb9ebf1fd51c6d9104d89ff9f85d166291e32d16544c4fd52426';let _src;

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
