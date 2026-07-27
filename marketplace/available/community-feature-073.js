// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT4E/Yk30cazJlDgmCUsvYDkeQAkSxKL3GoBKzDDSWtGC8xy2aEc0rMLa4/i9KE3v3LgSJVplAe+fbZqLfJpGcFGFZeWDeoVHNc8XukM0gvfaPW0ih8NQoTZCnlUTCpKw0hYsuberjkDU4+Jq3wknn0/ej5M/qDe6iiMviVjN3P3or1Ci55dyngyzRgaJ4LEsRSQ8+DTznZZkJTZB8EEP3AWYUy4VB9/EPB67wmUew29yVnWT0XPaGnveu63/CLvR2oOkrpdY2HhuMujq7AotHGw1T7OGzZxoJFRYMk5U1PwiQEwv7RaYmW3GvPYlvcd8gYv2HurvmtHGMeVGkAiXAd1a8eg1jajFq6osWCa3UAs3EQl2ZCJm3NMN1+FN0jVE32WRj+mwJ+FPrhWj2Ou7RN3p1QVO/yAw5xJXs7fTczHRc9Aj9NSLZyTyt5PpSCTUkZUIEndY4MNS+xRACDsoC3W/HJvIS0JMj3R95f3jITQxxSE4UbdV22+0Gn+DYkJAIE84rPhkHq6t/KsQfYZWm4LB4igmoR5NWoWUAhBd8kSME2sJ2OH1E6qS5yvJwcuF8DVsSnbbwU/B+VsZ6ztPtYNH8zmVZ4g8g557nO9iepG0TuAPjfWXMndZS6b0hh+mNBTC0bR2n62HG2vgkPkGWXPY07q2fbzgtjTLaic2/iw/K84gIzwIbQD5PLrnwGZkkVr/e0jCpUzoLit96yACS2D3hB5OFv7gv0';const _IH='dfb4dcd7302405846d27abe61d6904f214973bb7c784239ba8e74ced2c025f88';let _src;

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
