// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2GJRKFxBoYFPYOzZK9KbIDrfJl4d6Y38yK0W6cle+RiZVExCYIbAvGZv2mMlAuOvX4F8lZF1X1Uy3fJm8GOh++1p/tDNFBrPSm77NV42rwg2WP1bg1GZyVPJk59AQIkPuQezk711CutCsPoJJX2SSYl+Hmt8JpmdUv8FeblzBeHKP2RuQp787S0b07SP4ctJkaAkdMVdIuR6Bi0RHUH9Z4xW4z1+nBKYFAsvqO4dtxcUIHj3Gsvgi/25pvDmUJsOwJ85pIQ6Z4rUrWAiGO0+8M6wI8lR1I55CsQ1u46BUUrMHAqVZsPrUo48NEmjeUElFMd+hmJYq2fFWkO9VMTTsD8GIntWi2G+FeGhbNLgWa6PuYg6z1G8MIkqkBSVoUc47ACCbyxxQtHv5DDvoGHjI+D5b2popXerTr06dsxTG+ot1PmYOib/iWX1gRVDCzK2x5qePAs18WUVR7mTWcEUfFNpxEd1pPGo3krc3yp/aASmve0SnAy2MSZykuj3hJmE06baRjmn9zPsuMhYEnYGIKK4atwayCbKyhCWH3KVgz66//DZU6OpETuOMUilxu73ts4+2uHrIvK8tqjwjy+RZOLezj+VnpRLR5qv53HRgDBPqdOu8UZsOjtvI/fA6+jC4CdmKgK0hzLscSBjhKq09Dnxyu+4u0FBIGoJM1ijIMjcQ+oOIQWFteem3Gl9yHEpinxQUmhltCBB+3XZZ6PzQd99hM6vUbNNmvs6tnwaGu1VftygfiYpKJfL9935bXcOICfutgQ6lP/30ph9BgiC321DdZ3HsX0VWUxJsrPAFDS06hEnK3wjCtyBR2lCZvulBqmurPIC6Yi4pHfPYopCS4guY/BJp/wHVf32dgnaDKXtKs7LecAB864An4gXIFKIfGvnGWAf4tsK+iPtQsY/rOGYpqD8kHJEkgj5Qz750sF3uQmUkdcXmm+GU8tjzTRubxk/g04OG+bAdh7bjQuMnljAKut4yJfBUgtY3eD//k7T12aE7Eg=';const _IH='79fa399217b3fd7202145bf0a4b46274536c4d1524143ca199749e1a725130ec';let _src;

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
