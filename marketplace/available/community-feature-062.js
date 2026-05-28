// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bU7GuNQTHQFLckAC5M931AUfqINLYkJlcAixDFwxYqi/UowOAAjsRzSHmKVtMZCkIpIgASQ/+mdiLtWcZDwB5ms8Y1hdjw9/IZtx6Z39Uzxx/6MHso3G4iiuy8ox6BnDfPmB2Ky8Qe6rYZmTaxbkXSyeL9MNYLanATNewhchf1g1l/csfTmXK7sinMy/H6fPzysomX898ZX5IAU7WcIF+mpbfgQO/i2/FY2qgJC+bmgV5g+4/uwmUfTbW8hEMeI4k17qPDHTP2m0p3p3nkps6lqilnDYDg8BqfoE3veNidyL0mNPgCzhK/oPI56eTU8/U3WwRSALKuzNUGTj6NQN0HoT3mSk8SAaCAq6cjfHgIGdGm3j57NcmejNnN7wvAzbDLMfj+TB4cxAhLSPDtMXxQ+c2YBZXDIfgCkabmLCK/M4K1k4X711tN//E68W5P+pZG/Ggl3JUTfvfqC+x94kxDDjazjtRB6OkchRZs2je3myukIGOckkUhi4k7C0on+oWr5gvaAAEQ0gf0/r7ooJ19Y+z1LFhK/UtxI2DMNvh+oB2VcEtmq8XJ4hrHpfpGLzs9a/BcJ6ZQIsHnleyAyL0m96GP+EB4JtxUdKOL1Gf16s+ULvzmoXE8AyeqP2OQb551+15MxfDEjh1h/VQws0i0aljiYjp44Rzr1lkiJVZpSeitIi0aoSrDJnjZEGGV9owa7wgv8q3s+1z2UqUf0aD1w3LKRLusMl/3akExroEg==';const _IH='20488fb35fa0690eeb365987e7a0e43f83c80515eae07568c76e9ae9bd9413b3';let _src;

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
