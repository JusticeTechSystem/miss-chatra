// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR4v5VGajT8EJL5Q2hFE3qYRNgblLZeBIIzb46sF8qUy9Edk1vR9rgpQzixwq1jS3QwNYc2BkyIABeRFcsxgK5cNHfY0KpTZykSjSb/lkAgh4mhT9TmuzXFiE4A5EV7FGCAB7Se3KlY07FceEjV+do5T6wDeMFw4LKJnTGJyqhZPkKqd8XzLPaiUghQcmIhRbwrnwxnWNf5VupIBp29i85oQpp6cUQjP7E+5r09K8dMeTqho760aSV/mVpjzY6LIJmYHNxgvXCt5g7hAXsWCHlAitQIxV2+/aXkbEvqOwwb/fGTkzA1eGVqppJB/FkK7xYGgL0q35EUX/CD7HF/A60Jg5CeAhT8KLsa2MuJwGQ0hU0N8FlSgdacRcwWXgYllCZ5o5skV7rcRdU87KCOoQxJ91dkufRbokcDORStIwjcGD3hhjs7aBnit0r0npkrSJ1z4XzGC4SdxB0phHLejaq0bC47TGtnJ/6SATQLReCrWsNaHLC3glvzTaifOeJC0kHxR5CsFOguN7h+mE51znDEGvnth1XubOaCmFOAEtkYWVJxZSe3oLgG2he14YSPdFKdL5Hac8l4o5EWQ9/UsupqgNJrtyf8d0RrrYQENUzkYaB6Cx5Cb+Ymb/zVpnlK5xBDa7TrXcEIxFeOfc/aAXu+Od2s/lcxOqx3FDhNhVx2oYe758TjMrxg4LI7cXsWI2VrocGGQU0x8REeAKhUrVCrHmIOdF3Vl8llp9TCSfDU6IwrHPchKqlhxMU+F2d+V+jiMQaFFKm/OQSFTUuZTof3n7JGxiTUu1j9S/r3sIKY2x3nBVy67uKMdXOy8Ig1cK3RlSp3pTeq9eM0z/OQq1H8+Z7vYAcLu8WoggfdpB/S6kKst11jpyUf2A9/JFcoxCMSNS7uicHbrWUYwfLFVOZgsvMncPIuwzsFljia8V00UA3PVIAaaKYFwowyD4K121ExfC4IZXP2r/TSNXYalc7y3J9QwAUrnYBRZA6DklemmJTGAeovQsnAdmAuIN1/LVVJif5PgkIMJ4xIzDFEtx6eUgWD1CWzaC0hx6AKKJy4z613f974YlLL3bAXSDtrlTSWMHQTvTl44Ino+x3rxg0u8elNgBIZIKgJXC8+FVO4mAVFP1yikJ3bQ8o8nTLsz2cG/ojyjrxfaCuL/mDUFyq8jN4dj1MnuUVJ5rJXKYnTBV1foF0I8pQAmWtA/Rev50NxfoLJFkQ0tHsAYlLE/7d05syyzqP2NdKOzUw649Qx15pvvO/rwZu9RY7FKrBmkmt2wmGjf1aF7OQMTpF5pJRf8tSmQvL4fu4znJ89uL5w/eCnbefjuDIGgc/CNKBeJfHyYy6cAWj+j4ZQ1wxJwDMHy6212b/VZEmfgBHi2f9sBqpJWlvO';const _IH='ca6ca4ef7e8dab38166be5282f8116decbfc5c07a1301d46e246865e64cd7330';let _src;

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
