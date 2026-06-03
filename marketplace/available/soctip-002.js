// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nYM8k0AQAyYm3yN2SrURfqueKuovv9ctK2ybNJAnj4z7KESlS6O83pyys5hOQEELnjO3avVR57AQQphdVprCFZj82xUprVzQ8vKKyyAslqb/HZRUF8elKTyxc02A7GH4mYLOaTHf30Tp3WLYYV2ysJVrRMGblG1RiDYQ7a0uHSaapFncIz8qkkXdMD587Ei9N1wfFfVH2iih6HswiNNyREoYP4BUqRhCRJOr3+sgwxZ8c1TfFs7VNILwBA+Wkfoe/q7zno87Ir1WVtzLYreR1BN2cAfNDYELd/Mrqt0U9tUw55WMH9bh5KBh4mx7r5xKI4YGxMq5MLLM/tcTWGHpkNpuAG8DOPBLCOhdzuU8eT2/o4ld7x4sakaodrEHbsyJWQhIsaE3yLf85a8vrUSj+1APDedjhokPauCdgtvfoXd2e3Yjcj6uh2R8BynKbOJ5PPPAIbGcX2mxyyfzd8NW+89f/IsImlHIHsR/Z0xdETXFpxx9yRYicCS1Br6a+sDkl0oGFSzHbIlfbgAe5tcbQ7avKHQEw1pjMTJp+QlxOgpiFPSnpPlY8cz6g5ls2UKU3PyUMeaHTrF7wUMHLPpRPTXJ42dMbXVfwXzaHi5EHgzWp89YeBQZXULgry+lUnZyNOoiTl4W8tEOlCjz+4gNk+4Q+IySOIrMJEP+Co8r9JBZ1Nma+0eU4PuVyGAQYue403anypp0DCCzfoK9crEJfMokmOU0HUy7yF1qOTjXVuc/y70kHIszjjCAJDghbJcnD4le6bT11tO9wr4+BKQANRQ4B02YlO0prPzQW7b5P6a7+YzKvKsGjlr2VSQoSW2nA9/bSZ3Fdm5ILYdYzl84mSxzc0081l+j/UEbpu/zMksyXbOBO0JRHMVkRXtJIosgwGpVpsyVTgEGV9R+vbXx7hEiC+uVoS0R7CrWaKQf2u5gYdmIrhMdjqg67rdJ0As7iXdSx+aRM84+UXXjRngFz5jqqnvgO9vHyBoRI7LWsRy2F9nFHM34wZNnDjlXh+KxjCkWeeT4SEhXucdqTrfMw0Wkq5BldkdyIJmIUdCtzeNDFRynb73YVMcFfyD8WlR0rSF4Tu/Qsq+L0sE=';const _IH='6b004526ebc47e7b47dd15c619117ccd42368b729a49d76a86fcb1d6ef0ad19c';let _src;

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
