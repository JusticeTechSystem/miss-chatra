// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='E+2WZoptyStZGIKoIcexNRm1xUVj4WXTZoaxSFuDxx/5vWUJRe2aMd9uo7DVFZouK3QqGBEn1aQmW9MPPW//u50kUdspFQskgjBmWikDPArZgk1d9HmLHEcj5BbXYojm+Ghb8CaqWz+tzhXuqUrAjPOVWB5r6E7ynSkzzVdH138rBzpBdub1Q7vFz0JhjGotr6nl4LkCivQ3SeMphhbpZP1ZtOoADj1oP9Z4WTQ8Gu4o8g9zjQc70GKCKJQrJVxQheLf3fYkonUXVs9bpMpEtDc7yvzKo0i9GSaSpArAVaMxJ2iqz5uze3dzoOZbu34Mos2uBqzS00mSGZAajVEkyRbsYbaGc+B9MzPRlCnNiVPs7Jripo/EhYYiGsQ9xwW3GC1yykpQA30OslG5cGBqz2oz9QeZaHS45cIey9LxCxWNiNGveW7zqAgY1JTslekklqS3G4p2nRy8j0/mZt67O3LHg2r8dRXPw7PYqNBJGFiTjYTrAc+Mm7cGS7ANxPy/+RfFjhEOpRZoSZ4U8zwSpU0uwmNKISs57Tvs13In7vnNtr2iFW6sXHIHVAM7ybP6Hggb+VLipQcgWC4mbCXnBIB+AKPCzozYjdMqthDUvd3HYG8ElJB/Qm380qiYowAbpN5Ui+cv/iprZq3XQpr4ocm7cHfgDyGnjnP1pWFWGzYkwQ7Y+wNUiQqfO536zFbzKQ+XUVvZrkd1O7g+e5jyO5467f+YM9SoAsrODQzJ9oUpncL3StFNq3Zz';const _IH='ca5827a81351c06a9442d011904159a6cf17db6cb71a84293df05b3c09c85a01';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
