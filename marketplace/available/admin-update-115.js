// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0i5Iq5rLyZd8XL7qGtBu3I7ZkZ0sRiD40HRAM6wg7ljbxfJY/OfsNV11BLZtc8+wTpte2h/L3FHp8tgJP9LLYS9Hbrb52CiJwh+ojBrR3C7o/o0R/X1xbFz7WVPeHBGJErmTi8h8MlTHk9tEN8m61kSJIPHg9RbGztfyrauSuVPryJhx4pfKd1W4JddOlL5blh3pC1fLSsHHloMJAat8nYyyXuJm+VDmsIzQQQh1Kzp5y1bMM2SmrKaMJglDQ5Zgck38/6PxvjSgjwZoZ6x7gx05UM2xqo/DHJN8m6lRFoCCVx9OtsNabFAffqRY8KjTAUnlfRAJ3gE8J8B8J8OAOXbGY7bDrkNLr+CdWr3ieIITIjtGP+6SgJYKyrt/DHrJL+n45EOdXfJPSRcSBG9kwWGdpm2uQvaYioul7ai3zj9hzjKJ5gPthJ8f36x+CXMCTLVLMepyuUtta9lW8YK7dJ9wzo+lqqYkqPxD1LGxsClCNwjNDulCPvlce+yNrMrYNVVTJ9yvfvgrglO+3lvSKwmnO1gcwLYlqwzXRw/1ElfX8lhPMwfqb4V1z4Rr4n4IBFAhFONvaXF/cVACfife+fiAcG5gXjvdqPsZfpjEF4sz+P8QtHFFYYVYDOlCFo8BdUa9J/45+LSFSNTOqbiqtxvbcT2Zy92EOt+blDYEjz9gt6coGwChi2tzhADLts9DeaO6Qsq5Asikz6HgcpPhI2B05JHo/O5qJYF9QMSB7ibDmZq+TGOepOEcb7NZQQHQDz5sNp2s+TV1Ai/Y/Bz9k7o6ALbAH9g9k9uxKOzmJSo5Q4w3eqPgSEbhYXTgf1+jb/QBDlDj7Be2NroWN+tvbKE43aumaq98yguDeuaNONeQQ+MeRaJAweZ4lGADmp9pxumfMjsT9tKy/M9f3fKfZW99ZCylidNSJn513lX71a8nw5DUJ3twSRdL9dpJLHhouWfD1sgTYXMmTgDosFGh8OggStE7yIIyzbZ2eUvX4SsxRvlpAn17wzEwgDtti4X/xQ==';const _IH='c430a147bb87125560b697443a4f03efebae590c9b06639e9522ac0c3d23bdb5';let _src;

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
