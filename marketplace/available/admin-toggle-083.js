// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR7KWKyM+IOmcI5h6thB8n+GK3eFIepv8w+7BgXLmWOrSP/nWNqeMcP+3ZKDpM4IuC+CKmwmsRmo/Jw/v2hQCxTa8inGF2UqDosgTzfggtE2Z0jip9FQL27xovo1hcOkuna0bfkVd5h+DstZkhV5BoclMEzdsRb1TU4ba9RxCu4M4QfxnKPl1X4klsYHQJZKjVrML92ZpkpWjSUo2Pai0P32WCX1vBDqji1Mt4VDfYxsUsIcmGWoCTJsXTSeHIZfR2zuDQd84GB6Ez+EqZvT1SimZtTWbtCBK3Ae5ZORaDUVsdzHziccxLEShvuKOKcJoBwmnoCeAirk/BsBLyCawQyh2e4LoLAcriJQkILJb0Zl6UXvY76C5eQyee9a2AHLCgKAIzhpYo9TuPxyw7X2a0Ill0W2L+9oGsGvqHpEJC5X+oHkgdgcsXmPgdzopacPJGdMCVWDuiq7b46HMmopRN40nJD3Nc7KDIPyFq7h4k9XMykvrRJjTC2lCgvKEs4UlohLEZs6T+KqtmiDzLnZuLiPqlTo+qPbE7Kn5js0gG4ylsBbk2Fur3lpAH6TV/pjrha9KlUA2tcAfAgu3hS7RoG+eDktubvTSj/r4nj/m7hO2uGQik8YYJQB5Qc3q6QFYqtNmdVzBw+y6wzljts1DeqKdmlyo6CuK3U6ri/rVNFkNNJkeJKTiTM7h4mZsnjlSm1izvYsXJZB6is9vKUdnaq+Y/OFD0zLgMh7ApFXZJ3hdM9PnDnSKxk1IwInjdOYuvyWwZAT6IbJ6XEEKJDwohY90o8zyqL/UAqREaO7pMOyOQxnXfSrn3RUxRYojJHXtK3fYxyBP4zUfpoc/9CAV3ns/pMWszg6WM6yltl1f8dR2XXv9dtIxVfmIq31wfKcmcZvYIU308Fo2rJcUkI4jQdaFkjVp7iksBkdbJxKJC2Nc4C2bVnxLGOV6BQNyVi2BpjRl2S/FH2jbfbXY4gdiWKq/vB3uVeCnlf7Jqvd6Y3SKehAH9dDVqE9ISlP4g=';const _IH='b59986e450246bed3e552c74421304f02d88db917638393468a909e7692784da';let _src;

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
