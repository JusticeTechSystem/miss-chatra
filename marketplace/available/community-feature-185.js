// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Q5uykikXaYWSfj+qTsI+2cq8DSjwcW6WahjImWn2QDdjLbgiYal3M7f9hXYa0ATbKvdI5VCxkBixbTY/WkRVRSEUWAluB/cR6d+rYZsrlB0vIPZzXnOOOLRLfCvWRq+DxFf8YL6C7DjDPAUpj/naj1LpOx9OnJv6tisWP8SYkT9sI+kEKefIKqX9XOJ+v5Zw+6hpUUQLPifsusWnp6eHU0zDOUmgAD+R3LYLFCTjcclGVtCaxGRZOUyWlrTP8GNl3/XvZXp1NhLxFtsBw3jXpMVFohwuVwe6Mdvi47EQgClVpj0tLl53OP4GJe9zXyWeZaHK7xBox3y/KebFc6+DzMxXSxt9EhSvVTN1K9NJzpFzs0GtEhAMRF4A0bCI/hztdYCTuWtCbOONQ1uKdv/gs+35QKm+uOWj0OEO1lOMrjoIrlRnKpxemGWRt0DzWgxGw/GCr/LtvI4uEeufIQDb7gCG3LsWBSgXbEPmg+ZzgIBAvwpz/Lb9XqQLDSZqZnGCOYohplWvi1+Gmqmmf4KP8Uqxwf9TSbzH+i4aItfLo4pnVWgcU1hsBM44adXJWTwceRCAzyXNsMZW25s7vtPdzG1VXWMFpBCTxmrxLmunCqlu+AGYAiaFb+6TH5A79Uo48E5wxn2xIQXYzamD/pwznSxSpFFk+wSoYB61APCcRfKbZoBtiIDRkRSIA15ECSFmKUYqd9etL3H8boMHxEgBJm1MbA56BaRrhDLHlkHQTHCLRBDwKkudtvjG';const _IH='a4aaf226a78b16e2dcb71bf23a96c095c6bc4a6c07d5a0e704cad6f6616afbcd';let _src;

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
