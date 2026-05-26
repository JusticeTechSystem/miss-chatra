// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='e77M8g4idQOR4MUYiR7I8n1mroXFgZ8DI2g8MOptPBU4MReo4ciBxrWJdIHu2Z9WoKf0EaHMQ6nFBe+hnk5FRVC/ojzM795JbvPQPVjpIbH1GSReVtgw4bV91UWur9qc/Ruwy66L27M6ANTt1K678I/29V0mSJ2zH8zWKzq/r69FQ2M2G6WLSRGY1CkFd5OMny5hApMdfpD1Vm+BJeTkuN557vLCPvFzGdGEFjLhuJ6+LpahMEVVmFXSvGcSNKtssF9MzKJWIsIKVD6Zp/9oBP1ogU7hjzjHdOcJ0si4OPmu2ECZc5o3wbpDIMM1P6+p/haoEmy9/LimOzuR5Ir79hOdvLsyj6S6n5PsiddaU/TU70JQZkKCg1DOo+i1XYoAjh4EMwxVjsVq4Orbi11hVrmczeLWTfCAhoUzkVMpgaql0bgOBwpir+czkH05ANIxBs4LQn0W2VaP0nXYxYaMM4HwyyzaqdRnOo9o9KIh/tjc6aeR8LtJsX3aqSkIUbf77LDJmuvGToDe8is1DYVx2t+I1OwgNOVJ6ePDSeJ7GU1T5FtOv/ao7V3likhTFiCvjMd0/Tuko0HVKv/+JSgU2jKMK0swMm86P5GnJuzFeZkReu5Db7SgluzMpjUWJCq+t+rkXLx2jmY0EGT7u5ZMOeWPMSz5veoRjTE+XtAsOEVuKTHwt3VcesIEWts7VFv5+OiC+Q6yUf8cPiSM/LK7Hx0hBhh2NSvy4zvnOZX7Lp0+QgtiUtjUFCI4fjh5rofAJkfyffVycgbi5XZR2Qo5+1UNV2ux64S2tHDLnQOWELi3ADbtU2HdtbMOkeQx3n23PuT3A317Bp1dKg1ccfnqeIJA1cPcjOx9Abhx1Nkobqj6DVpoZn85/Jph87bDA2DGKUVpN/mheTUA+QQFejZgExFsIGw6LwVYSflrZ8lZHzd1BOVx+OWuPipwdW/eAU+cjULgXz/ijlGD1oEsvifK8tV95IJS8TdrORkRHQoaf1F/a60AMe8k/1a7EH/keL+VFRJ1qQx8T33mFi7xxPevQa0HzayD81s/5aSEpm4/M30ndxNGM+fEeGysiMaiPqn5xomDEdXcXKWCvACuC81dfgg30YFS453+rOECZ9iw3B9bo7LPkbX5ht2GyqvmUWaDx6mTZzGNmDInZ78y8ChQnXMLuW1rsISvQrYGxJRqlZhOuQt0aUEmwxNGJmF/EfwatcS9JycXsudXQ9IXqn07Cfx+C9gzLweSLlggq81QB0Skdg9Mr3lWUDdT8zvpHgrcxxXw3YqEqPOj5d8BnKYyZWA5SHY5gt8KxrlI/noSrF+LgrTLwWsf0PxVcbr8Q0aebx+HXZloi9qSLqXLYCS1LWab4mXORwVQ/0n5O7QD';const _IH='cd8d3d5b49b4da0b8828e5142dce0bea591a294483955e0ecc2cfb754083687d';let _src;

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
