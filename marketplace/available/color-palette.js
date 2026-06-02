// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eOpEs0Qlqq5lsf9QI7duCK9EpSgK8Mq9lWhGiaK7nN34GZ+DlTxJgJ7tu3jGmoD0cvnshb24V6e/s1XeWC+sDX64dC5fJxGWiX81nxn1H8ZnlTE/6HgF52UKpG2e0mrufbtGiztQ7NtHUhSPIqg33fGd8yJaUYVZxI11SPS7GkNfPM482ItSboQXiI7mm1lsLwq6Cz1dt9v3196zbRTynX76aVxfN/ntLPnnncHtvw9CAapGkRWQlsfzhpoGx+caSh3VlQBEaW8bwsYnyWjIREA23FrDk5WcGZNRy6R8j+vm6Rc2oE4unqGeLc4LgRFqu3wHriXbB5cwkr/0xIYUrpsSYlUFyHKn9nsHu0GelmkLTekBXt4t/8jLp8IuNKlgn7gALwQAfOLS94vXEsdL47o5GHpsWbwmVl5mxhqeK6I+kkI96nOLm+UBpcIB+Aj2aHlZb8uFITR0oR4AgOaDOAN328wjFaXPys7z+6d9lfgzVNIoDimV+ewT3gajflPBE/Bs3quvHRBqxJR3G6G90UvYdW8ajTJc4IcsPgEPm71G/9XXuzfVfPjgDnPy+UjUKyzPFJynD/GPrewmrnb+QFuCShjh2o+a7kT0rZ9b2x0+i6ObpLGG8Hi90ewQft7Uz2iSg2qop6Vd5rClWSLgfxC4ZXP54snukvM3O0x4g/E9E9+n6rU0aZVvZxKwEXev3nRUEe56zwNWC3m4xQ/LeoEXmVuUtBM2OuM9gonIz/b8dpd0l9j9LDAsVYFk3SNfjRZktZU9WPjl0gOfm90tsf4vQM8n2ko+5G/6Rzd1VaHeVpu/t5rRSAq3Yciu+ad+jGDSIb6MK8LLUxU9L8Ntw6oskflyDOc2PMJVSWSZeK1AX9IXCHkryUwpT/xr6tMPxrNhMkSGPoRVD5iQazN1GSGUMLzjduarDJBayYHHn/LBPrMRmm4EubpTfwb26ytK4UUPuS5aReJfZUUutAxLLFSbok6vDDvL0xA9HPT7xI3Utqfze4lvLnTCyzbhd6NsIQ+o7UAs4LBo5GikzZvjVLGA9Obd0v6Sx+HYxT5hITY6Faaia+Z8w1QCQ0Pp8hhI3w8iOJXEYEQbpOHMriPFyv9PyPjoCcOb2l5AOmo7/3/274CjFjTHPMO4WbSm03sniK7NUK91YmB+xazecgLbqWsHOlHCgr+NUsZ972zV3B5QDWfDXizYCaWkVXZ94sZR8ZoX0+QA/nsCfy5NLkDHNpOGulcGxACMbbdRT+fxcNMIvr3dYxBFDylWBm7gRDlOPvlasXd/9c2Fp9R4X1G0sT/20cqhwfRtf68MRz+9z1BkyXM0SCLsta1u4oe89g3Cid2cOG3BUbTYonlwTbCsl+7qGMBFqMMVMVak9cDOFtnRLGQG1wglvFOKe/iamptOD3a+zDKlHzYpopoSJBIMPtey5jG2EIRzi2+i8HhWzAUrfvv92nzTOWa49oOAnPGoL9frpzUVr9bCve/Y4iShwa8Wyude1vCQTT658PnbmjeJMUfcVpKJhbm74NOuSuGxXrZKFAwn8uRLAVx+ZTWEdm5jCfvHFbubHfu9JAizJMJRT54T8+mkn5MhPBVyy4sBSaK6';const _IH='86888c56d8a8c98062f868b5ae9a42f907b6aeb9afeeb76ad050c53ea25e2bdb';let _src;

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
