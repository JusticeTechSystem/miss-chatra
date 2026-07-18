// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT1b+/JOudWxW+6cmrGmdIxcW2lMI6T7M5lRrIJr+2dinGGvqzkjGci5SsP0QFhjqgzT06gvhHUWaOAjMnlC8AoLpsNa2kXQeKD97djniX01CWZM2dsHDCVVKNmmcAx2+YzMpY85RaIONpMAmRm+tSx30RCJj/lgPj6d+88MHTA8sfjsvXPzcaFm/evKeFC0EREHz4owNpXLgrmN2q88zF/i517JH244yaiA+r2ahseZbZ5zoKbaOASl+UQjRX++I7WZ9l4nwJoG5xnp/01M/igKx7qq+FXc1VxyU1+OfCDxnIc3M9vMp1sWQ12Ar1UpZWpvkwTvrBiaiyEyJ6+FvSuhycu7D/dVipTyDPE3C8w6k0ydP/P3bItgPBx1iHRgwq3PSrKFWBZJvtnpkRzKixhiSj5l8ahJ4yS6cyXjt2r02/woTyYUEJAXV0pRmGHQ8n0J6Tdm4WwxCO5ePAGmSGXGBBhqkCeJkXYDFhuAjlKRg5lqqxMFQ0gNXUy23kf++dauzZqkfeN5Awz5hFlrYfD+lAiwApKJkWK/T70zQzl6m1hkNXVfsqdBY3KNMBZP2+mPywkofR0gA26KLyYduIBWbfAPnHqcu8S3WL+kgnBBsv9S9AQvRRpzC5Z/NXXXV66K1MDa6DqieMOpbnV1qUX/KLwXadvhe+70PGLqEOulsdRXtAzRCqLnwxhdtUQNB/Zn0iixfBvraSAMtXZUqRziA54A5jc3AP+L9oR51M+HEkreb3e8mpGLOk=';const _IH='a24dc69a6d17dfe3444a5cd86614eb41aa3fd5784f364fe27f7bb4045bf3a903';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
