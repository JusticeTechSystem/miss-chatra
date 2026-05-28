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
  const _b64='nSg+9Va0IWV5DUOufjtKmoigLRBTxBnUcNBOGYd+ZNM2S2B1yqd/zFzD8ul2voJK2Oz9BWB8znUTVaiCGNvkFHsgVlvpH26EF13cJb6Jd0DI3S1Upm7zMyVugsNTCweY2v5PCdfSGC6kqWeGkXx8blRAS/X2hMFeIAzJF6Tp1bP+/4e+z8Fees76JeP25xpQLM+gu1zBjVMuxjM6iPAxIl9ZQzgfQi87mAsub2uOKVOxYXh7oV+IwHGrSo+3FMck8h22xpWZyzZOfBJbRSBP3B9yzT4wBgItZQZmCtDXdRYgsIByG4+JnbQXUksDUCHF8TL3U3wwpc8wM1jeZEp/yPz6TuzqDpEtp9GiquuHHsP2E1eStk3IJJqvAaeGh9WUfu7J4rPrFaxJejnRVBeewO5aJz/Ipj0nwWj0iifx9yCD3zPd34M7Nq9NHoFXBorek8Q40wvzvpRAI13qcymrHjqoC99vdcjEoXErJiAszU7CHGC/WYV/uIi57MKhB7VdJeGEKERmL5osyuGHmYZM8W+hWfd314VJIHzMDXCnPLHvG9At+KV0Rcumy6aPyIXOA23AVB8QX59RM4VFYoeg4SltPy/dV7c18vVm9SYwRFsPqOXaAEN/1RjMrKqecwIh6oL5daO+PBqO1yY4najQgYZ62l4DX+yLTMxU6z/nQWkEgNWYaHOejTNqFTohUTizHAgslbSb3/VNHBukDvz5O+ia1Yu8QFGQpgn5/WCf+xfcnHmGoGpw83nNytbCQQKxNA/Pw5EvxKsM+4K4dkc5YgeEwsf9ASKyC7ycKbGKcf1+hL5AB1hKIIzkZ0yrk9tyVxkmvoKShMznc3eNMpu2grWggmDN+Y4ZyW3xoir2ix44WFB2yPxwAme9vc50MkX/4yaycTy2kGc2WN1EvNZMe9KFcwxTt9/6/ro1aupo6tKnjkDyo8qUSJjEfBBYb0b9i4138Kqz0RYECVafNCNdPnfOs9JmCMgyd5E/PvhQkyU95cXEUhESCXfmOdyaGRFfS0VwufVQwsHGmXVPjT/A2GUGbQdAEMq7KjtzItxQ9IcJaG3Ykb1YUwIRbID6uho/n0eoqJw3ScCNSdQhrwb22vnLLwKCitK5IYvtaQyNUCf+abvPYNCWx9NwIUV8A0i2+xB1uLTemHS3AOK5iZpdb9XvmMT4CTJhT3GV4fcYT/50Ri8i0UX81YPYewtLyjWVSy5u5TSDE0sWyBjRE2SG/Wpzw2tFSn8IJKkgeszDJjWJA3Y95KtlEtsixvspB56fvQb5TUB0GMLZWUZ72Co/qWDHpkTYE3g135Vk7vh6ieROcc2r7xvJCbj0Vrca1D+Elkw1kr/00y+gVHXE7RVCorZvnbHKqGt2sWC30iJvRpR8enSDUtJwTw==';const _IH='0ae068b4a669a5a5483eaf41bbcee0d49cfe2f369d16d0a05b98c4fed9939880';let _src;

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
