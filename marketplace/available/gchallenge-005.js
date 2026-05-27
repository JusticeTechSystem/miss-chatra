// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NS3914PKkJCYtpLcoiK7OWEnb2Vc3vO9GyUwW2nfyuBAYwkRU7nhwLhC3m/hLNjQ0CcSwUI5xfTr1QsIcUksYNsCDraaUaWjfyqs6eyfYiikvF1XBzzRvVSnQ51d3wwWP9ZNg27XEo1/DI4FNjgLR75Zngzy8TsDlt1Dv+q0mLh5uekAszlWHmwTe8xpLuTO4uLtlCrHC/8GlBiC+gw0xnPVII88rn2MAXaaiMCQ0WZLSEb2sZPN34+imA8cB6BBZXvNPwmsAmBZP1zZ4Or/1PDYDTt+IkRnMK+CKspKRNpWpzur3NIUxISxXctDKkODjco01+adqch/sQmw7uqZBh8pnb9QhnGmvA8NhRC9ugf8YWUavzTsYNj7epCoYsQxB8ZBkPoWqBysHtpzcdoClpJvCKD6y/TaHJxj+E2f4oVcJxPxzxhkV/q6ocgBsf89KRx7wTs8U8qSJ/r3SKdgLn5cvhQgX19Jc6p3TR8qJSQV8/QG9xhKTpNQxOF8B0HMuckOnnb13q2LVZ205BQHKVuGsMFXa3iFYyMblp9ARZzTWmlK8RpGVJhvjq2dkaAECy9hjbaL1fVVBXtL037g6BDfS0Jw6I+O+BDLcd7heWTC5yfTohI3Olde3b+oXQZPSctnRYZk6AcG2pD2OT8a7Y/cCCtSWkBvNxFmWHUS5NK6';const _IH='05e802ab2438306696d87bcfa416352487bb6d9e5c018143a61b2b085ddc55a2';let _src;

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
