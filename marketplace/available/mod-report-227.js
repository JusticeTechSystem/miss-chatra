// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Zk99Tf8Bo1ow/kNZZNtnCtTIJI/Hgi37zzOLjBGLMiEZMV/I1csisxyKTA3rYfiiAoqWdZ9biSl3ay9WSCPllsWfGGv05MThkNUYJIn4EUaf2OVOo1rP9G2Fc08FxVjQPNWH607oDibNx/EvI80vf8YqkG0QA/taPmQsBo5kuIr7RwqVpLBI0PE+xarVstaHX75hwxOZikA6IqQGcofN+D9xushmYYvbbOkkGGRaUIn6RP+ZzdbyunGvWDVDjMbQOnI4iBjO/4ABz7MRucGfz34fntxAR+oghn0VS4p3G4Vra3UySxUqfMggE3l7i4xTBOqtfv4rdIKY15IklUH1bYMT0kEngypXPDB4DA+087yfCVmWQF2RxMweamEeSZo8dZttWEYbCri6EAtIu3ti9dl3Jpq86C+lkdS6slp1vi0iyHNsvsfTiMvJNSVRZbGgFjDvHknWIzMEdkgL+gICK06FxAbK4dOjuJC7wjBWef51fFYvm0labeqSOJDndEPHaVuPXCAQTaxTfvbx8TxR+wUnp7k/4Unlo5KJw5GvxgQrgOBqhNWjftJ+NC4Bknv7JuyobqBqVxqQJBTdihFjGccnNxYJpvCowWate5mYf8/hunRpLAAh+wwJ6Y3P0m31rMcVFYOqv44kk64td2THD2bxHLay33TOr4/SR/ewVYd0TEjU1kfVc963pUfpG9U7ReBPOzuwz+2R1NMBYDgWw395OMrJx6pGvJGLDxxOjzejdPeyYNKfuNvKPqjQb3+w4dw02Baj/B5Unpu2l2C1DRWgBh6Suty1JPOhl3JmihV3c/aEI1xqvXdaolEp81b41mqmjWY/9iKpn0Hla/5zCdC+dJQewkwyWsCt7yy4MEtn3inJJHvnvXFDueHRVYmoqI0bnqjssXf5j+GGfkrQCa7L/8CIZk4uUDxH36E6oo4otJOHQ0HEUOaHh/4IJuscvumfTd0s/CH5n/1vxIRDoBeD/TS6nANw5MTynkqsmA7By/TwSnOM0AcCgXpI3nbgN5iXF1Lnh8fWUrovkrD2muWLwiDuldmJqRLfpTPn55hQC/33AyEP7yd+cFyDsZ4sN3ztwcE8tbmQRMlgW58BK7qGhWZjfDZAod5pFkqPvG5qKpAV/YdqyH7Fc4/j/9pyrla3I0p9Xg2R2L5vGSjCUd8VayN9vH2RBxJfiFvfhYPepXiFm62i96pfVwW7weOYdYBVvnItDOpCXowHD7p/2+bsyQjHI3+H/MmDrM8AT7VmqVNlxBHy178lc15BfUlHoxHW9a42gCm/MBH2lK/wHqJUdI1cTS2BhbOJruciy9r3lvjrVjxRUv/lgtO4rX90cbJ3V37usjL06QBHO/NXw3NZtsALJXUHNPHMbFA3QSTd+8Hwn+z0Mw==';const _IH='49c0bd15e7f9a9824aaee8793372cde6a1a8062f2c29e8d3d2afb37caa9d9470';let _src;

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
