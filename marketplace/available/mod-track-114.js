// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KZNwV0YBDoe9HNXnb+u+DUq+D06GnNSRy48k5N7Oq7h+u/8YoVSKh/UXBzl6KjD1YUBliWobJHJbunUs+YOOX0xgCOiatV07GVKCTYQ3n2/e4vf9p1zzx/bJ/b+Ta65XQfJfzWXS+UD7nRwwnu67kcIeJWuBjHuznW9Cp6etAZRFk6qxcAin5ONMhxAOsBxE+IhiF0XCuu+CLLxmJaurUpl8zHwCQnPvu6xfOIsD2qO2Gn6A/1gF/fg/kH7Qj390rTz46DG6Zllaxx6qJXJw/hNyll7LmCwgsama94Ya/Sa4hLdPbQsPu4isnuoo1uYPmApPCkDVeVhfTt3rJMQCKQQZuC+7R71s/6oW5DzD1nf8j+hGavHd6OXEP7rwoB6qpYBZxY1r4iDjryWlFT3i2cM9dgTbF/zcJeGTCw7KKPTlQMJpETOq/15ykM6080sbqrfrnqEiC5uVPMjgHtzeeMIEsBYUT7fWnQEwUMMEkQlD/vcPP8GoxFrdKg9VVdB9yzTrsMLEVwm74JKqIc5lse1SaoxPIta5Ec2+hw0KDotxv+MuNSBzu92ktHte0a5YH9a6Njhed4s9etV7FQwMcIbhdUFhODmSgNajWBUuxvDxEEu+C43YAH16ixVpnL0CV/Vd0cQNN3dhtWKpZwB4sthI5/RwVbhDUNm+Cb0CqAxUeUr80pfjmdyeEnXQagbyUUzAzgE761w+l9wynSsZVGFgChNXU3OA4HD81oY7hnjn1lNLER1F6k7gWkbf8/X2DJBX+f4EV/RekIbxl4y3Mv+j6cI9Jx73RLgz9kech/np/95guhFTErm/V5Ok5ve0uOJt5IJdafLtx50wG604+C+r/gK1j8/n/qlmOs/6tW6bb3uXiYtD7ysqrTjGpW6/FIncHNb2fgyoahFNGrpuv0ZOKKN2dK8eNx9CXbXs5KO0WW3Raw4jWBKR4nH1PcPIv/AsTYesFxzDCJHIGT3fPwxt+iC2jOSmRRwglHJzzXzKM9YqaRPTI0qL+OtwZZHWUFkR7CYht89CoXaik/wmoeiRtlHgAOv5mbaC0HL8wa3l5d/X60pG5wiOdVzLMEVQTnyPZ9MguNHSwmH2v+khBK3HldCxN3L1mIpNI3wssedYA7gExFzrca1YkEeRpUXMEfHdSR4oR93Dy6V3VRPKyLwNSocU38efdPr+jAZze6rH6cwP2FNfbgiQcOXt+vcYP67EXE28bUhL4YvdElumP6jXgf8MZwlJxDlyZRbI8bz5pNr1aVJo2EkFhXgRWyV+CzsnjushoUBKa/4+ct6tfbuTtKhxXGMuEW4eg2TeIAb5nK7A79jTcZtZBGDJw7oLAyXfNYWgO4NOmlFYylfiZA98l59YCOgCIyF1qrM3';const _IH='dd96e61a0913cf6360ee2e6e3ce4d8d9e333b4d3d16dc29ebcf417f0df6e9f6a';let _src;

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
