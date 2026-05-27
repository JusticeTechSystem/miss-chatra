// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FMBkpl9F+l3TtS70WAU58DYA/ax2NP1jAt0Ynde7hCzAeOWPa4kipG/axxzVFY5ZT4tyo6KhCCvKOJRXU9eP4QA2v9udInjgyINCg2hN+w1tp5kdAZdvk7iQTVnWjxsHVon9y0/nV+YDAiRM7G/xNo0KHD75H3ifZzXvPqDTa18AsdKu5MJMAFqfx3NAMrdk3klnSYnTAXy9dQezgVgCYZ+1YLrJfh6dYpeN568g6nlwbVorCQDMkeAbqNEFJTmyLnnlfStHrG52I6b3p8LRRl4fPl5q4e2mZehPmpew85FPxt/go7UnN1N7GsP5229zIWoA8BDU8qVgNoQYuwpA3hnl/2o1kgYaNML+1HSCeccbZBpfslEuBqnUaoAXbAejaMgkLlXBECzAhhsX8TEa6C4YSpv0IHAedNXjxi9IixXwUvNV4pCqmsqP1SmE+crP2htlGUWeerDGUOCvztvUxNCwMkpVI43+ivyXg8n0Iqy9OKEFNIi2qjqLxbmODDxcGe8Lx846mXqJ+k6QsaRRHQ6HGNe/jTHkKFIjbG+7aL6A2WOUyJ4ge+SHeUYv+Xn51ZB1J7lrg1beJSJNDl/1DsDfb+/3CUImgQkFKLog+bsaFM2PgXfqomtPgQCd06N0BrnKUjDVZivVfAudoa+/XGMTfSarYcr8xa/Bik15SZ4WqPKqrYqDOEgeKU6rBITFW8Z2f1ciQNtk4PjKw9vHO/P+UgAcojf9RnxTelQNrpiuSVIC+Enh8BGGAzVJf8n315932Oi9Z6a9R/z/GCVYTdHvtLO+drdm2mvhsMWZqyl0/XnWrnqsjnHv2TcD2xnz21fb1gY/ezWqjj4g7G1sYZyovm6cKcJwfZWfzsB3VyhzOWdM5baQUAeS+I9Tg7//xVN4XOA8LOioTdIGNqXHvc5ac9kSdmcpV72sALoU3Vxb5sCGdAJLVmnbRfZ8Bhjxv6nW3hHGEhNM0iFjGrlh9SWGb0c0Tt7VceZ0QbEfxs3qXd7lUji3dWpOrzyT5kaaRETgot6xeIA=';const _IH='68837e4baf46df0c87ec9ea00de053a0c0d9dce46552eb97f2465f00c3d71f9d';let _src;

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
