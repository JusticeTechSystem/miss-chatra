// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wiTQqVGUQqctwav26u2PWdykgGi1CfnRjtaNIPAqGDTWznupoXXbzXF2h5QVZZnvSeWRdK/jMlIZyBCm+n9+lq3VqyIXFXc5RHN2Bs1objsQ9CXB1P1iyEUVuIrsGUcS2KEysLeOUwTQnfavd8LEiowGoOX3R7Wiw7i65qpIa6SOuS0klLbrwvPjOnFX0VG/R9cjyjaqxems9ax1awTRBeen1mVVytDSVMnpSzP0bIqZEI+wIO43fhF0wQNWepOakBL6SQml8sy2su44Es8s+GXHVQXn6AiLgFZ/w1tETlud/GdVw5x1Bs1JyK3Xonu8PyosTf5jKaYUOkhhW/Ybxfc4arky5NKaBG3nIKhvldtCnS8PvhVsl96Rs6Abndp2VXaIe5wZS7qm/YSqQAxA0gIbucqDduz0I/kr1jqPhlbmzPfiqgUN6m8gNckBBdzwDOpIzggAIiNCV1aGrtcNfIKxkAKtDazDtTOuduHfQAN7OhNtN9zKuBlDCboeCt66F5jBAxEWB5zUi81QMNIbzka3JKgpdPpe5/NG9cAPvrOitJtdHsJedKiZIZWstArUhVfNt8/NGhHGnJPF0Wy8TR3yw5kHLNQwoQ4/2IRjEN+3LXfS4euEXq06Bv3Af96M4o+eN4vHeCUKsCuaXLfR7OkoYl2wQoawdvqAUI2CIVUwjZzP+PDHU570ZfD5Dkg+7rC6jXvoMAGIIGdh7rTey+njPLrSTY/v9h8xMJuUb/VYjwFtohdGO/uum//EbGX9SeDVxyEluxfIre2A0QSQlNTQEqko46ot1P3VwueXa3x5v/MRRgCB49qo+xtxX5ZOCA4WP3UKzAZIf14OQ0OaLQOVvGisnLn/BMoLIsfTQekWsVPMKMZFwsmKr3NVkLOG0a586S/V2GWGCe4UW7u6UydmwGLAWVFIwwUPn1Ms6wIoTPMF/oA2owBvR5QEGNfRvX/TA2cpgZ4rITo14a6yg/Hw8DRjelynaa1G/k3yTg==';const _IH='dad0511e0774b1d7333911a252aa205de2175fc58fe62162b123e107173294d4';let _src;

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
