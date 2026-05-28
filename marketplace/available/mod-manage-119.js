// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UitJQDgdtMeEriB/LeI+p5Ydaecx0DU9em9Fv/N21KRMRs+6uynu/mHPN4YBiY3lcxRkAx/dDydtyDuOHpYnjLinmZMstVv+wjnhBOkwuIfHnnYF4eFL/q+KWqFw5XVsmS/Iu06KJSwGc+SvlOKqFGJhiZod9fiTGxg+VYeTt1tI1y1HOaPSORrcOHSc6GNu+X/j+eqi2KKifDiM+uLIMoAjg5htbvWp1JJHP8KAkooHl9a7mKPOHemvnyo5sgvOJT6Ou+c3FGdDqRcA+uINxk1XsdMq+78FSFCVNXa+24UTNFrsEnFa0F21n0UnLunjXQWjWAV3KjfklskFANmk/90Lt3aKvVORA/7D7kinsTWbxCpBajUk8VRbjX2jlhBVnsjc5O9kEtjiDI8CkBBQerZjojOf3fv/kkvQbZKNG7KFIeXl9h5xwSOh6ufb74SYmlAsmOMyFPSagClfj9fOLbG5vkxuRubWNpYCzP5CxqjKbSWP0kSRuVzP5ZIkmQRfapmsCkl524ZdjMg0EFPSMLVHnu1rbBry8oOpKuC6wfuIhRW91UB9m4zZwvGk6iTRxawCPOYeDtRNpMB6RAJvMU8LIZizzSu/v+Y3hKDLdH2/Sb5ZahY/V1dRFbmQOaMtNgbe2LEQi+48Lf1m19D1J5g4w4BQ1fgAA1srQOmllxcm8LSJ0N7KBBjpXcJaW1eK55ZKPizw1cxMiP5e7jgsu3smYxxK/ZmZaQ0v/w2WT/WGtNZN8SVHBcMYS36r0fjcrimGRDcdBG+o33dEpUevI1fBYkrHBME0PQC/3tbv2lXyjqiPRJqcZ6AejbF3uzKfoF4LO8V8FfaK4gw/u+bkAiyv/ef27khaBnyytUOwt+5zmff+2szvWuMI/+4ISQRUQKblLR/X//MXubnXxQ6dRZ3jocbeEE6u22xJzNycm/HAM8NHX1lsKEVhUn9UhKUTb2SVJ66TUF4f2cDFnyu7gQp6NU0wNu3J/92HhBeWMmC3aP/zKX+5+i4OdwXxLEz3E5UoZ4KXVPjPHyvHg0MR5QghWYouIiY2HydijSHEXFf2gPIYUovvdWXjsIZ9EiSvVf76EwXlPKud9NfY5QBIZsnvNrWVf7JTrpWvSg0ll0KWAr9Dk1zS24UYu6Wm57AC0sn+bSP+QpFeDc7PgHAW7S/dsiyZP1DffoTsVpvDvD9pg7FBT0Im+pfRghPJ7PXyptKpcGfPbOVXYtRFUUmVrQ4el1ceGHyF7Ox7P/ECNj63bL4h/eY7qc05pcWsLPYMV4lpd3NZxnJsn7BxRcXjuLFAflfqszc03mm2dxyx5fVf/N2CEzn68eVyQTDFz5JRDlWe7LYg3zotr9mZrYDSyIh0z9tPVm8A63fOQaU6Jv/RHRcG+bOG9A==';const _IH='95cc4264c4b2e9efc300efca41b7cf8afcbcad7421148af1800b9d168c0276be';let _src;

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
