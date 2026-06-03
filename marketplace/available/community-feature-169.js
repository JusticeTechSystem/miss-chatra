// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nxVzb8SZa1cOLLrMLc9Zb1IRKXGneF3b6d4xngVFZDOr5Vor1ntGZhdu3ewh/uNK3ZuTdIlG63pieK58qucMjWf+pkDOObtNZ1/nSLJx54p8PteZnzrJUq7611ACLMNzXE9sufSGhNHIWUzo4HhNeyNbhGNTbtu4gb/UulbqWuBStbFqVfjIZnC10tZF7BbpC4/5k2e5QXTgjNScGl/VDnBgKwGzb5NW8SVPbpL5fyOK1t1GvUH5tM+K3zrb7k5rf7tOWHAXIQzXOz9jiLEgvso2/PivhChVY573Iu/JBh3GpDTP/krQwkSdw7cOOL3t6OHkYr2v7nnXL/mrWfZioxLWnI5f99NO8mOXugHqquo944KndF0A2uUAZmQAiOL3Vq0RS4hjGTYgvPkmkKItojd1Rz5EdorZJ51ncxc0MnOz3gth1qCjMXxYHn9pDsQ3IhByAYIrvb4kHLE4gFns6H37lnssm+pIewGEqXIPB68Mos2D15NQ1kFiF0f2t9sCF3IXFRde/+6HhiYQVuAlrZVduhRolX8naSCDBA01cM4b9PNCid3gqgBVHCeWYvSb+q5VekcTlfrpnt0Wen8+LunBTxxvfZ+gUG1SbVquekK4EttOjWLekkl6lAuir7iTSbuyXoXekpO8qdwvS/Hs4LF53w3NtLgD/SDs8t1GGLMp0GljJTFNMgoMRrVDJLtgT5sJ86jTA1AkAgS5S91UFvWIQTPPSmGEe+mltH9dZN2wGBgig40=';const _IH='37215173725e5232262702284a8c8bc6b334297cbe88f630c3f6e92020484305';let _src;

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
