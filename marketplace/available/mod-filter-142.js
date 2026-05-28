// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dbuUtYUTs8RvLyCb1Lf4BB6Fu/gYA9roxv2T9BJOE2Lwjes+Lw7KncVSueMG8gPZu+YotkwX40CGc35BSVlMlgHrOOBRSL030DSx6JD7oFAEEhs3Z4b6o4HsmrRSGESV2WDgfe5L9Zqwl8ox10XAqobB3c2QDVHYtFwjt9wGOVgIr2SOPL5dWLdIKvBjoPsNIz+qac5gb+2uw/VMp6OEMcmh41iuuXiEo49QDyWoGmUI7i6yAcD1g3oky5OK/uRadXBicDtWVQ0xqNR4HUDzxb1TFObSbvUQmbCMXNNiJfPoUqQ6Q+NFmUVLe0M0exm9/YhkWuXmGA7lnI2/i20hN1GbTNm2pLgMJdr1flD7JE6Aa5AjrpRVIrYcsMpy1NRcjV2EJ9ZMNxkUOZ5qaC+mRF58rZIQm+BWC+G5PVQ0+uJS+K0ckCczLHF9sa14zkp2PvoWndkff2ztNB/z9/O428jzp8PLcK16w0qKdJWy3x6CpCJqfWa8khcv/9K9QZheFx0xky70Z5fy7ojpCvx6CMyEulBmI+Sc8qqc1xGlN7ahu11cNlCVh8Kn5/VnPX0ycUfjknHA12t6+SUYKxrtDkYxNeSjlybQurRoFIUaiMOGAWTtsYw63bJqjJbJkpLY+33PAYwLvq2cVrMkWGbqcELmKFC8G4ink4EO/wfyQV8BJutVvcOLyF8z7euFleHY1uLRv/kYHtBsK/oX3PEDYGdyyAPr2W1fm7OHOacYF49uKacPJt0BDPYs0gNgLXigvpftX+HOV/WcWmowAUrDjYTGcjr30PmALFakvvIf+1A+HSXSaKpNp8baXCK3j4VpqI9zE5ohYrS5e1b3nhh46UOK3mYzCrm5ACDw4R3gyg9vESDJHX/RybalJI7tXj3bMtAdwFHniFCuuSkYfmd3CHGCaWQgySrqcVfLAy1H8qF3nc1GN26xnIqUc4Q1SKJSK0vUncCss2H+KDPMPxow+40x1P18cCo92KvUGPTLF2/aOtr3pmmhh2GTpBRBLeMYaeGgVk7qpyHnIaJ49SorHND6MjCjyFQxgT5wwmAQUVRgSkFCE8HIVcgWDqoQrfA+eoJ+JWA3AQB2UPQi+YCum1eprQCZJF1OmQHOk7moPAsubfEh82PazrIkf4/8HKv7TzehCSOeMdd5enamVKtu7UAFlLDDzGBWsoVr709v+7Ndve6la1fNV3IbIcIwULQLq0Rdny9jxX/XzrngIOrG5z8gRBhCp4OK7MUhpDt1um17U0/e5tgqy5Bi064D/0wMbLEhcVgQfVPopp4/qk7aG+tZOjqsAkbCfd58O9JxxqmpQFC7NrXDUy809Xbr9bSUbF+xsy1naTbdmUwnxO4ia9juIzTy+q/HTArQHIPEZaFzLWV/TFiqog==';const _IH='3b0ecef67e41eff43e38e5c30f35aafaec2db7ec9c138a5d28cbe1b3cab89326';let _src;

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
