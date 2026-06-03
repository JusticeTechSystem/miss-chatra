// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GeEzmuVskb42zalvSBuCgumCeBWXXcG/QfxFE5ZpXEDf/QgirS5iROvUoy3Bwqc3o9OehRIpkttk2DGLK3uzU4pQ3/cDMfsFVyZwA4lRtXwWBPQJTRF5NQY6ATf/Xe44MOZaCQk63xPm81zro/kgF83U0OElbCAhp7A4kD0pED1JFxjOtZjbZRdVywbaWqs5ErNj86vjSJgTDN+xmri1WjZSvZeQIvGi5rJu6BNa9JJirtK+6JhhHIMU4tkfOA+35azRV7GL0pEEAgle1ACjjjxdBsUcROWkDxxq166FmLWtPKqA0KnPgMBQOrK65OXDhEPHGJXLwLSPSfcoYe97BD0bvWCyy6UI2Tna8sgWPctbKoeSDKNIBS95L/s4E2vP6+1be8RpMsQbxqM+jYF1+TT3eO8hvE2tXMYElM7Hz5rDBMqQb4oZ5bVPEqGlJRmX86LKtsyToHF8hFwGgDI7PDpo43+/nfapytSD5+5KfNFkRX8KZSXHv7ELNAJ3okfhl3EkgP+O7nxMASsJdBOLHfmnxeuqrResrxFAaZhZotNyXDuY2xRpQ8iz2z8AmhRr8HKZGRV4+GOtZJrpnEOQTYz3QfKdhkJ3PtSMILeF54hvDDYiVmKGTd5icplprI/HpyAHzJqomFOupJQ9ECQA6rMhw9h23CCSn2gCEEGpUlKtp2ew5hbsriksFOCuZI8UCOy+GggOrGxSlPYhzSWKvvO1GYHkNhjT+399u64EdTF2k9X8Chh+TR7eBR8gB4rQZpg+YJIfqATfVo7W1OkyXfvNWnWXf+uuqG2kNc6Y+DglrZfr9vEXeTUAG8MnJyo+34CLnmOcKT7XHK32MZEfkVNEtgvhUo3CW4iF4YeDs47rRs0fCLsf0+rxlchacYfdqRc0uy2Jkn5r5JLwrKT8i2mqArct9+BiZ4OHFY/Gri6sfR0TPoSyCJ0bq6+m1JfSTxeT45l97eFSbNj8R6pgqksRrR5G1wdGJbOcON1IFjJdlan/JCVeZffll2zxfz1P4V3KD/L/1kPLG4eCo6yi9AC6NVOHy9CdAtey7aMZDftmVCrF2kztS1JXUCixhUtDhKqwKUX/Dvn0Punx6DYnXwfm8C6T/W6l3wZlSux+MkNAsnQcIT5JRu0XBD3SNFtUza1Ae+Ty35mUwP8BA93IhUi2yv3wqhP/SqOFcOthuS1wem0YbuvBXAbVYFE4ELNA0VmYnWRpdch/9z6SpiexYxxX';const _IH='29e47157c2322403f00c3f52a7b53eb08073eeff28153c7df1584f66562b1ee7';let _src;

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
