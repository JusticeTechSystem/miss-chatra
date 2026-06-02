// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XAg6ziTkXGRWHRX7ikN0VKKNRWyt27iKlbFG5p3h2QvwbXSNeBgy6uGizRx2Qv5V88cg9+8gweejZsvm/kCDxnqGpXtKmwf6ijByTx4+8fZrfFgjgZAqLOeOn/90Ac546R691oGyg0+FrstAJGHP4tMV+CksHMk0Rl9t6B38usw5eeyKQdAKv+IbPpQ2HnUThZY9kgF0pOSlCGPvbSyBLh+ZHLJ3ti9bAZgNMajDSF1Ayek9Y0FyMlbJaAbtA2W6PJVkmxgGx+2IpDKwaJNwPUnirvvoDI7x6Ar8TKjFVZ6ZmK3IjQXuyN2AOVY1LNLtw5UjqYV1//8hTl79nI3k9DiBUlAzMvatf0NfPGIecCeCvNuXg4Vc4Js8b3lVOZtdOZF/Q3F2XM7rHyiFk7R/pKCt6tYjx4NyvFP+D4e4tAZekga5c68ry9n+zjtjH6LOw8vR8+j7knfqxUNrkqV28/TiPJwdpZqJrpdal6ZvIc1iUWeM1+LeRUolJcSUELnnQoiA6jSe4yUg7uIJVpORAfBSXUsY4YQY+R7RbzUt/Y+/W/xQZ+cl0IKxE7I1U8C5Vy2dmza93o9k6EIUXDdXZW+cwUvek+zvkXgBfj9S1W+KApVime/nkiJ5u8JZYVOk0FN+xIH4IwxFnp+SNEHQdyRdnkofwjF/hilf03uewkKDkiadkRVLp2Gsdm66MQxDBicZUWZcqSGmjd+bOaGJRxUNAwMHcyXKQazYBi6VDa/tMbyo3609LeYXKcgbOtuZ5ZmQuSOZwrMMnvQ7Pmz5YPkl4u760sU1aatU4eLhEEedfUQj6bWIHx8+iN5hTi7w+zY78GIS22Lh81m8z6uA90NLg+FI16lWt3Gkwf1GwKe8a+e23xd7KDtXy/EKMuFQ8cRWLGgk3Pdq5phj/wC9UAXBWPkCHah6nW/fzZgCD5EybuMBzG26yq1f2v+MCVIKDcZkFwO+5oQAQsid7kE0+SuI/FFgKbqYTCPe6j5F/+HDbdvAld0HsVH2VsV3f3WTYFdZCE5YbZwiviPHn3v1cIjpGeV/ErZHE3oINMVtaAnrXb4QqXaoX8m8wkixmeI+t7YepX3MBMPKa7oUvjh+wutRWQv8iH1khueh2bkWD7kT4yyP50BkZ9Y9GMTXjfLuN3/jMISE35UuixNwD1mPClvkb31LRGeTxNs1lKhGCelWFEUqKeTGpwsLZtJ1YwXBoWrGMK7cKtsBnamEQnlZIFXxEqqwjGxzSdSJhOv3OCoJnigk2Nzh691oUgk8M6DcZySXAJnp55Xn8N+eEGh5PEls1CJ7sqp698ECP9exYsw4bxzrRKoktaEdbB+vvTYHUNkp5b6ggIKaUBV8oMkRgd9eyPYcmU9T8uSTvD7O+IdzqRCy/F+Z17J4ZNehx1i1sLuewqPGxlTgkBU7WamYS3wzXqYE/eKkE2E/x7HAPMg4ya2oNraNFKTIjonCylIGUUs5Qa47w5EX72HyzJvWSgKp8xV/TsDaQ7I2mAl9kJObUAKNH/paPFkY63na4rnXXg38ZQ==';const _IH='c3454146b067521cdbdea94ed324481719f95ee47f14131c742601c60b3131d5';let _src;

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
