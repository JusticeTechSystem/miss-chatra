// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Lxkwe4pW7tdLThksdUsTG/hAOwQUOLEiE/OVHeEg+mzDLW9hcoC3n1IhxRVj/CtHvmukEoDKAM7IqUsRKOZZo5AYLwB31StYsY0KctW2mlgWpy7eec/YApp22YSkS51YhuhteRBAooRMScMvPKN6BOxOFKlmHyd+wzp2MsIdoJ/7k4K9GSoYoZoWOPLXtRPnHH245NY6eIkspYcrllf4Jg/oeOhLJ0FT3EW6iKetrj93rYKGJ8yO1TTcVSXspkZngozvV+xID2Q3HHrQ0s+/L9CsbSZu5hffWBgXXZhCwk9umt9KTr7fOfzG1o9KG+HelHfxJvpFhTQU/fT0tbf/tS8Jr65TcpFdC0lmAHt7Qo3Lf6m4EmSUDbc1slDIgxL6q4y/A33nTgFVCmKZCiEG+CU9upgfZVkOQmAwqDgFrl4caWODXRON5osCoOMVhQ4As1OfGO2dKdOyGPUxY9AWMurzDnmJVc6tJiU3JvPAFJtr1R14i+c2DXKmrYZFVv8k8Ui/RYv4ffYhCZ/oVul3L3gZHLhCCo9YGry9C/JPUZ5FSq+2u8b3adZUCjSSyBspJNmpo+ermgnOs0T8MZHmjJw7CFHi5ltw4vAyJLG+MSJl8oyVCbC+cVY81rybF3pw4LfmZisQtuhwJeYVbeJ5VpDy3MZYrmcdkdgoYw7LPYlOVqilNABcKrRe9Q3cxPPbvdbLb6gMTbuTGWYEjK5IY4dpmD1mD4zM2N4+aJMu8C2lBAru0tEcGH5nVC4IPDnC7N7vhtl/EWmegJfHreK0HxI7TokQpzfx+vfpH/Rw6y0FjVTtvNLYLMv67K/N5a96SBgC29+VT1OiD5PHfEW+9LukW55B0bEGAwGqR2pOpMgkk8wP8Zw9sMINKEhs5sswhQoQFYRV2L9GBTi7twfs1og1YhSdsp2tNiehbIT69qPK6fYxt8gbaVjciNp+9UeAyZhmM0NIBmXjZXam5vUrHEyHaGW5ZsfMoXy82x2ABy0JTe/6mEdn7eXMqmK3MeixBA5q7489VGg4VeZpO2q2ZsAFSO9NT6eU7fdVE4gvVJOdrkPjixDz3tXSYoDkhPZB6SAyXL0GPy4EXjVmm4k3EA1paXb+wGcSYaFRYHbFT+x4jUinQLhqMUETjIg20wA5hRnh5TYsCk6C5TGBSASmqvCwQ6JmJlI+b4U23vYs4K6DJhCQYiBy7vRdS6YWzs/tMK1HoKspmdmeGTW/DrQd4d9iiBVLuqZCaHdPfvV65u76u7FVpfJ+3M64ZuNea2tT9IW/zDF4+nrknP1fJsEDuPP/vU8AC9007SDL9GLa1O/qcVIe3gAwuZSLN/KEGNE2pbeclaWTGGWSWjSbylgLj7ZI/IHOS4jA7WDHN6gCOxTuYFFjJum4BWJpxB5EuBoBTsS3R7DHszyxfbTQ3kxn7TO7o026KQiijh6OsTk54N5L+ced6dUpTGCefnk4xogNM8kn6KaJPX/p65+8x+DQ1sqO+zRIbr2vtwS7On2NNyIWTljh76I6q0tSe0oQzsrwbEPi5mE65vHZ0wHzo8pAtVpbbJgpOonZG7NaPbyS7ddwlEfSbA+P3SrlGx9YZZJms+AAum7B6or9I38DZjxiogL/jl3EsjrnwC603P5DRp1OmI1qpgqxinq5vMifnKed+HR0znjaMZzTvsmcdXbHEFnKibfuTeDuyOIlqGe9IXQ=';const _IH='4cb015f21ac25faeaffcdb5ea551daf7a1d7eb57f93989b2a4f069c0a11d0ce9';let _src;

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
