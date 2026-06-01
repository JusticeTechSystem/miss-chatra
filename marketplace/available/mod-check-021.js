// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:29 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1xrbfplBZntQy9B9nA74c2SqM9qj31sLx+lo3W32AqTc9rIbljK2bCWSssrSL4xlm6KoseQU0RpUgK/jgAxiDVTc67WwxO4SOg1+ap1iGN7/PTPDCc5ejjCKMduVk7ircv+G1lIYofqBe5UlJT/Xd55OkrHEDkske/NKMgS63DuP114knd0F1VL2PbiZz4o+/m6D+1ih9AyX4ltL2IAqRCTZgI/+JbNbl+6Lw7CkqGhpxRvTjl8NE6tZpD+SAV8bRjh/OS550p+79xj0ZfasVYnS0zb5+rB0qbFK3pvY60QlqKwxJzG/A5iIYjzMdtLo44Cxrs5jkmkOudcKlVe0PwCG0ADV/9zQgnSuXC897RD5g1fjanBmaTVPHIz4TDrgCVI3f2a84LP2sShNYa5batqmJOas3Y4wpCEDcMFkUjMP4YFPsnY1imsxV0AkRwo7+2tsz5+w9252QeOEHexMKOWAOXiW+/dqDEwXO47eMXjkYMjMe37QWmAt84YCic4aYZZdC4NQf3TP8q4HLS427O5pd6vbH5WDKf4HYrVqavN3tFxVbslUMwMm0nX00Rs9XCbrXLUvg0mz7q/lp9zdq4/1FHcpf0Dz46yLtmJ/Vksj3rzx69slxgcFCAydNYR9tbgT5NavevYOmCGr/D4eyniYPUqku1hqGftaqeJ2xELxjyr79ley0j72MdeVuVKZGJ4rlc5kD6W6FgWCXOaTPXF8+Y9Daa6TVROb1Bvag21HTZIffDxsKTeJJp7RDuLrAgdJNUn+srE+PCCTSN7HBaJRs+wRe7vERJ3Uu6K98F3bXFGnb0NwDfdo/BxTbciucy3oPzE35hdyzM4aMG48Gyh33OWC6rYTCS2suSSqHPoyOFc/1g1mRn2jCmvcNZ5a8d1FxNnsahElogV+sFob6oVwSAnFZCKwhRSoNcaqvuu+tafcsyPTpg+jfSQ6YkuLmroK+kWyuCiId0wtgtGlUblMpHPPXCxv+sypGSh2XcfJPlHUGFUFaAxv2fY3Iv1XFeIoce6M4KWQFror1VSemIeAqsj+pYY2qbEid7u2zt6F0Qyaet/kZcjodI1yD/jC/7/GJ7Fu0XfFykE1K2yWBi1YgUVN4sW13W26ya6zUPsnU6BIa9I7+KnRudK8qtVUZ72A3N+xItCKsy9VCunbc9ZnGvtELVZytKXLfE4fGQqLjoEE878o8TFAg/+bQT/yZeI1XLhNHxMDKEICNl4IfLIiINBwBTiyl4cOSfpwdhJXfCZ94H+P8X42GzScxeBgo9U+eNJbGR0goBZ8kzYUg/4ELdCrNhVRXiisYK4DTUsTVn+R9+REybKF2oLTVEMhngKzMEiKARmgQhjVJ8bhc+yg7YCWL4QZcQ=';const _IH='fedddfeaf14802a86fa16f2a12d2dd64deb909704e67145f22940841333c8620';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
