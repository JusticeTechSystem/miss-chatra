// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='44HvoGxR8Ud+1TR/xvULwY49ULCQ1nq8rN48zMGHZF+Wz491rdNo9GP9d8vXXFn6Rn0Vn4AClnPSLotZ01ngHC5o0xIequFQ/ZSoit8Iw6ZRCGdb9W8vVSbTXY2ELILbgNcfnJTDo5uyWgFrvibCoIUkUNY896n/GhExWkZdhP5BXxJ7xfOnJVWvrYoMVPfswlaKuOYAY7EXDLXoocLBzcgTd9z9rUjiQW5HXZE27fVGGVsgIXQvHwh8RgHUhrs2h6qLwmhGQKQ+zJB1lTmykaSaal4pao4lJCLXom4aQkavYvtgjz7Ts4e10LwL3gBxkaNjFEErqqiBOXNeSt9Oh1QrbzwgMuBc1LJ1Dp4BqZKhBcBVOLAI9E1vCOYb3koNbDDu23ITSDcHXVtFHPHQiMWabPgjjEFDXVgsPHSCP+ttIsQSRzNJ7JZvwB5tZPPH5AbMt92tjgieaamYYTbCgFiCYASTao2QQiS2eLkr2pWelG6frIp8HvHXuefLTvg4HXuWTuKGcAjnpLP9X3Rm+pR/3xkyTPPoajncHew4a5T5Cmhypn/k6EpMVE+j6CNK/+XCSF2JFVS4QKxnFF7Wmu2lunklStlSkDQ0FkucO8CWE53NXrGPboL/I9JBHZnJPqfwTvcwi0mknHAHnwU2BF73419aTniaW8jb95MJLywqEMYSGfGt9kazJfmcUIWsTzOOveXpCnRSASTYnhOLZAFINXTskEVIR+xvs5q5Up5DZTrdQ/dx6M/dI/M0tx76BcK9IHULjcwNX7TjehJfT9tBO9WqN6S0PAcEpIKcTZiJ8K/X6/vua0Cu775MxnMazZ4HDX7ZKyCMfcXa6xKhyyz1deYEUpw5S/qC+Ww597AUptSTzBHosQdqogXyJZfmHeFWG4DnPPJRn6ftwINVkCOAKyhMqSp/czx28JVZl9XJdAuZvcEXDalcSPWyw+BmixvXhpaw5OtiSScDY6ejEiwA33nqYOcmosxxHiuLXZuRpb4ULL5tQBCMAdD/wStMtlak5OfaT7RvGE77yDvK+9Z9RJEgVgO+wNnzNalgSnsDlU6H1Z08+SW9Nv3HKVj/40DaaiJJK9relGfMVFw0wRg3mdrdVzCK5jEFZLBhEWFosd7rFfDOUG5JA3dBnedneBjgSKIyINsxnt8iu+7kETZ/Cd9YL2Y7dTy1JEAaMQHwoteXhHAqGQ5EYf6SkEufTz5tFR5g948WGctVV1KlDFBBppINbxBk0zhjMB07Md80vVTFnetxMkC3xli5PCHwmqFtqOO9Rx0VfpMyy5rpSbBDCVN/iAJqK8eiwjhqmviBqzi9vlMbtA+ayPUEdGEhZqR0DHzSzm5PifOUNHZ4CYW7Esn1l0M52hViPerFJAPOSHETObYBnvaYmTgARgcmPnMblbYouoFLwcPyKDyWLFQZjQc+RLbigP+u9X3nCNsMmYm2ubAO8H4GCMFYSELx8emn9ZjKaCeaFK+vK9GdetDNCPzhE7JKDYU8M3GayXMg0P9ibWTRy7AJ7l2cBUe2RBlTs5npypB2tfojXVD44SwXYa57hqTozX5Yl1vFwR8LYmwdVBhS1WGeX85iUpg3PVUyYOsbeAh7jBYGLOg53mK2I+QV2lMGXI24ICC9SOdpRCvueJk0oXPmmOT6VXUIRHXtW5TqaMmPDfoz8Cf/zyVnQFgfXdpep2WBud7DvANsVAW7cyv+mXKVvLyU43tWdewimw==';const _IH='1dd963e2bda10f0f280a6bc73aeeb86c1c02e7db8bb8daa3ae9b524475ed4d24';let _src;

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
