// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:19 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8TMVlh6mOT0cH0X8PmHx6sivGUhkaZchrA8hgPGprYaDG6QkHRsBFYH0z/pENsssZLRL9rFd/GMfcZ47Ym/RNofVmARfUlwSVvO1e2BbeBQFt+3VNQ2WWmVPlTDSKF8cZ0+cpjg0I1Uy60aKZVmzDvgy5xGeb+8BszflqQ4mWCt+r/YX9BdMwJH3/qwHn7UvlDSAtGulaBO5zuFuiQ0uUiF2VNjBQxeHLsq3qTKI8MtEpU2NXLDFvtkkFL6SP19frddZoMeP4ZeDjMRfyAXzJKCQgdxxUQm95khP4krbAO4azxCEvI7WqqjwHSfR2xAj6IlaS1GoGhGg71qhybGpf8vV5bb1SVPfzH7Oft/K55PyzuIjCMY/og3u5kgLURIrYOSW4GCt0l6JUuvrpNEr2ljDp6DsINAm/xXFS+EE/p2tCPbeOeixhUogGVFlEJXExzeRh8H5xZ0NWL5C04fhlc0Zq1dUx7SiWIx1WREcj00XiXOKYSJzRWvZF3EgAK8SOjWKRYsSDCAR3380zbJvHNKggrfOD/rqxl2jETtLrL5vJz7IrUlIzbxJmqtV9th4BPKyvQ5oh3PktfhUnv/oM+mzZ51jb4oswbYohZvuLm/Zurjp66LAU6/HlV53DcMnkUtOLIUrBXMCl4QGxPN9oxwbkYcjBz3etRp164On2qTrrFA6awu/ARNCUWFJbdtg/byPL1DoXNarTB7Ey385uF9bGKZkbG8Rcpe5dVUT+l2cp5MjGMKeEsRyLDAd4CEoGCnxwMSMWO5Mc+PT3dv9kL8+pCGpIka4diIP5bhGdD++dcao4IchZNt7mXKBEIzUJeDD3KcdyDPyorMUC4yHtB7p/I2lfwPp6D5x/5xSWOOnOdsbqzTiB8R0C1swYfb9MJXl/CzifOkBH2lFNyNi0Iy0KDPdoGhFj8Vx+RPU3x4T5XGR0jB1NyKIjhxO38Lwoa1SiHHepreeJKVFJcJWppXOAugtFVmKAK0hKU4JpnvczciXDaBQNWmsZH2ayQe0k4i4apHsLPX2Zwd/cUCm/l1m0aIlPBe4E5eIQvWt19+pIKh0/c+G8KP2oEHaQgMz+Dz+nvO3QYm3t14d1aDhMibfCIFNB0+NRcWFUw7IJF7b82l4KXEFxxVTSNVs/K2AYpH/7jcNFXRgfomEhS3qOM47MNa/Shv7MDi//50KBw5ifvi3dT0qsW0yNedWh6frDGFuSP/HdZMLUerEeoeHbdIhx/ysTvo7c8k3q+Epm7VL+K2jKPbJ8URN1eyX0+PA39hEKl0eXVz7Ri0NvOJYyqJ9x9eyihyDi8T3AS6T1CjWBX0LmoKngOujPQ5T68uJ17Xrzcgz1WeGg8zfjB1sALlkLxiLoIkU1wgPYwY7w==';const _IH='4a7f23d448eac3e1d50be91e740b8baf5ec8e5b72349dfc92e9c10967a675c34';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
