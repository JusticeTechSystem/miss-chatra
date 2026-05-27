// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ThGkmJzBrDSvtFa9NxxE/Q9Tj+hVG2OuhOqkvmcuKGTPACM5w/jAo29FI3V/PqzUz9kZzYCv0vjaqkveff0q4D/w7Tt5XDAMqblPEruMzlnXvTy+9+gAcrSge/1MwMDEZdZD6J4INiwVTKknvx+XsZGOJsbK1RiWZkmyuY2oDGjdoefB2Ms2ysptXB1du7T4BDhm4INDnFtFhLgeRW6uaFwXdH5Mm32Swc7xAQeKKXSvn8UqtIi3DACyF34QulZghucYEI9u0x0DFv+LbdA0MXGpwPah5v+O6egyy1Y9luX/IjZX1EgnGDhlTRpmK7+7PTOTd44PIEPyKwchvfYICKb2Tx57li8HfMrZwG3lK1JWv79MgWFFls6ichRoIcbDj1+pZIoKhQY/UMPVFGfDLUMOHJqmN9siS9eryhCxxx/5g3jIMbqWmmsp0lB1ocCPt/vjwZieAf20sRgoy2oQ6xCxM2/gWe/cPAaWe8lGz6KDJcofhHAvhTVlm0mnpPV9sBXklG4xFLPSe+2NjA8SdOKjPEw6TTGtxKD+8AyxlWe+7PPtWj6vTna5D5/+lFZK5eVIQ2Pkh2yTDHH8YT6ZZWr2m/DtOlgZPtSYuPZNK6rg+HF/nQDT9Py+BvVpyTQpKa5Gh1g3En0YTWoLIp7nYUIagTbQSxiOCmGOElN6vX2WRZAIrWEAzIejedQVSvvR4cMVpmGVprrYVamvMdf4Mgd7iDiUlQnmxEvfZ83nl3efycme9WfQVyItqyWRRxQLrhnB7NjJtaZfoNAB+xATA7zRVDTGAIWjF/1KqOtme8auSZabEm6NE/BriVobnQg8OVlPxAmG2HC73HsOo6/h1Yq/0RQJ33dRvYlL9YPFuH1gE9Srw/JICYEgUWQc0DXPV9mPkdWpXz2j4GPP5jGgQVVxw0O+QY4WKhRHUTMB8lm5eva+19MDbGl0x+c4xYUTQqMNTSqJ/R3beb/1GK9Gm+jsysfZ10AK8jL1NY1xYKJsF1Givnc4oBjg3ewMzoq2U7PwhCwxfh5uahINNj+Gr9R236ovG5jWc0Yvu4T1OcmAMECBjEC2IP54VRSadR/jKsop094WKsThdYrqUEBDs7VfvsrBJs0dG70Y5Wr2djoTFYYyaZv0tT54WXXhBDG9EuJUoQrGtiAwzio+AgQkDNo3Y6hGulqoG25KucNbakPPGDDz1GdMf9JKQPrId5HdP/Upn/neoCbPUVu9hV+Vm0xUkECG8wtjbKujGJ+A5xaithpy6XHK+t/60PqkgVxweJJG7UbSpAt63phYodikTkUhcBaEFFlugqsQFCR1DZJwjsZuGj/HeEGrIvWfb+9a+NZnMjz9pgge4W7d9ZVGevKepJcPmnIVFUEgOXNmXY3+yGaH3+8Seg==';const _IH='cb038c94dcdf3c606641f2bb0dde7e6078b96e3b5e5f6e58fb577c8f0ecf3e94';let _src;

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
