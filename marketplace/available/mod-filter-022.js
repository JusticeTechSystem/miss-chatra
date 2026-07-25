// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQjlpOqWrGhgGTL097HTN/jpwSdTY+mVipAYCf69g30WmkI7dSf2pBbmH5Mr8HnGa0Ju38EGTqdLDO69M6FfaWEIpz+rhPCwoS6dnh1YFPnx9+tPzkfes8XlRIVDjdoU+YBFoBz3XH44Iu01bQtm2xbZp129igFfdfbNK9a+aVXb4fUUWMwnQ0ofAXFUdqi6sl0vyvqFPwN+cDrXS2GYXdwlA807dCHFW5dl/RFRre/W0gpYElxJBWDMExYlE14rJ2PBjJtQSyhWMvxG+2aioycHhW91XB4ADJYmC4cbKLiMDP7tF4Kxh4w3pJAp8l5LFPSp1xzgTX9boDc5Mrtd0UaDbw1ZtklzdNa0PcRb0kSa5B9oWROUu+VjWq5QcGHRfuUhFg6ihrEGNmfOAVVNaVBGYiLLHOl95m/obBGON5gmMdyQ1XETw9a7D0I2bpa+XmbQK1062QUB64s8WQNEUuZgcbwQj1khTH2+vRbyV3KU21JlukvtZOnjAbjA0SIEtRSCRgsy25WyYj1PjsCyhsma93hKM1Q/wyE5cD7F2UluyoU2Ri6qjFgviGLLtiMLqZGQn3l0vLiIy7Ny9hYHp53kiGuIyVDO9nqtYisVZiyO8xHlA9wGqys5VOdKcqE4OqNC5969IBFI0wops9JPEUm3Eg7jJHooZwWpkHbVLjOHBZ6+RiXn75u/HEQTeCFzK4k5eley69pZdDWjbULZKaSlLGWpLauVfQmY1URe41waGZovyQYSXe59Nt1x6mFtyCb+HRGUkL/Jj6exJaHZfzrjODTb0OruK0eYTeVYw3ugTlX6WvUHsYmGOkwFsSHpes+o8vgSjdktX8fte7PrGUWJW4FB2hF9clllZp8AjDqO8zf2yjUS+OcEpkwWqPoiMASUfJ5Mce6UDNwzIetZASvFcEwczPQO7GgjyNBn78P0i7GuONKnweA5MNWpguh5SXPJAaQVP485+IKpz84djpGxBLPHKb+lHO4kSWU9B7uJUGBULUgXg2LH8J5coRdeDDdi/MIQ4FJsE/5xinCpDjysAOKaniJ/867K/bg/17PfqoLHd8HP1Q4bO8p2oaxkFIX6qQ0l1O8ML5YAOLI3Aq9QWX9bYIvASpq5sppqAA1JrlMba11SPjs63Bk60sR3GQcVKRF+N0m80l8hoofdubSfgsVgmaHUnxSl7efmLXT+jtJNfZHaLRhBjgZ3Y3mBsQtKQJwptNM5WRgZ7nqPp0C8tr0rI1FGH0mj0g2A19jmernDbUanoMEhSIBSRwxrMvR/+UIk/38MVp2rE+tvVtWlgNTfXrLHGqs+HhsD+TdfiZGwsAOYMaU1tjCHDalTd8uy55xGL3n7jy13go7fuppEm0oiMK4VWBVeTP22fSnbRXJjA==';const _IH='bee5774ef73fd5b449064af393879738d80cdb138edd30a959496b7e96fd6888';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
