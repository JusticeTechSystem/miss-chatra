// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qxU5u1CKrRIRKhZX5tM9PTeTPTMD52blxuZeMtZ6sWE/kKNc4LOsYsppEC9XaADworh/i4q4fdlmbJJ9Q105liNk2Faf7KuGYpj99ur3/SOIg6mqfFycQNTG1iMJFIqHWF6KTeDmqjUvydKGPZ0PxyVJpO0/u3rzwv0pnDcsOW6dncnOkw/sDp6GlzZ2V2+lVKfs2vOkTDyGrh5x0ROxUs4eDZKxe+ch1m97Wxz7yxv/84Dg4YRKoj2W2hI5nZKMeHS8CmXLvDCbrGk5iAxRc6mYgrdSv1iNGVd79WBxCrAunMv881rjsBdcl2MOjNsF0dHzAMTmJjQ+m7SzIG/ajVdTmG5b+nUJNM6R21weq8z6p/Y3cosGHzHTahffAankxwrHGl/MDpV4ZR4e/YWhivCSfikIyXk5iSPR/YjmEvLNvJ7MY+fEKh1hSG13eErurUkDS8EY3aL8IJV39QaZ1qPJk5dm6y+QIg7KCJMEFrlKbBsvJYPPk4Iu2oRX2cr7l/27C/a+uxvytw3yOCQDtgCu3RawV3Kt17lX8Uq0vBV4jxCH2bYhn9Q5KOITmb/yJ796Wiuebgyx9k6KEa4mcP3tTWlo+ssY9qjaPxofwMGMWnfv/arThHp1g9jJCK0yi8xoZgeO3OG152Vl6zvpM9ZX8ousFdhRCzWmOHfvbZhaHonQRgvYbDlZ7SbBM4Rj8NdZGpUdBX7pgghLjPb2PHSgf37Doakmo1apUusZZIANJjiD+LF4HBR9og5bxQTWMrsoJTeNYctY5VFLNF5I8IlW1quOTpBx6qGJWZP0z6ZkVMxORVcNSBQKghpsPwMj+YEohTSobPW4mnXLQdQXFqYjvyF1m7FARZVwXT7th1IYzWPVb7YJZYTE3Cy50Sj3zconFS+dIuVjBga9zBGwPdBjUn6hyKTsZuoDyXo+zazyV6L/CFPI7zMwoa4t6jNElbOMKyWxbq2PVaIQNZuv5pVu+PbYt90OMSTHwLL3VBYTr3BEHsS17E6DOF6VJriDiFyU70TShly/xN5GUT2vdJ41GjlYZGdHcGjaeaeVXipJDaPiIT1WArZHVpv5dmaX0VUV4wwM1jNQxY/RjW54wz6YjX1u5iyo1MzdRLUY/w9CsLPEk6VmRTuR9GUUAkbx2mhUXiML5HMbgYTAU4kOuOtdWPlLB4SzAPTaTlFsY1knSO9V1h4/gRV+TORapjIObYTmZBZYryXkeXT2tXXTy6kv3ICNlFvMrdRv243vuGDG6n95nHgp1J+zK5da/f57HKV2DIDZt59/I8F63+WAr1yEGw9mwb9TR/BtaHqr5zeB74cwdkFUNvYrZZKJ48wJRj3QftNYDTOwPrru/AniO4inaRfj+mX4OiN4dcdGqQyCsGeM0eO/z+hvmk97hbnRyK4WF/s/sfclAa6tzuy/umuPb324e23BhJ4xwe0vwMD3CxCkfjYoUsIAH3DX1UVQrQcvewT4GItGWfr7Ojz8m5SgXyR6bE4qUIKy5EJxYq7VJ+tF0vdsPFv0d7L7E1o6VupFMbSQuLmFwTFVuTuz1n9eazSXCIFVhlI9Al0n7rJBBpbD2q2M0UYHH9vhM1Lpf+kV+qtNvwhKZSL9cJ7W8ihhoFfCJtif5ejR9dG4mn5kMecSBfQDVyKZo3n9v8p3NaxfJg3raA==';const _IH='9c3049ddf2f84ea610b5462d0c1f1d82a568edded023c5641e7ae6bb4b783e84';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
