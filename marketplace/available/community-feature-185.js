// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uRD4eLGzviTdIviadHR6So475uBrM+L0I1+p/4W5q9pi9aMv0xFhU1MJiGgvWYKZ0m6xUBpS7o8FVAF1Nphb3Qkvc2DfqALVHK12oJ5+rbrNej0yyx+doyDr+DOAeh2AE8sic5NHomVlDSAYWHBZowvdArPHhomuu4OwTPXb5kzI7cH8cvQlZEMswCNy/xbHBEoNbUWqSuTx1t8hcXUikc8JVd3izmaxlSmwK2eAxiFAnxNe89zP5qQtejC7bpVW2+Fp1t+dJcCaj6fjHoh5u9SZz58tXo2DlimjJOSNm6mdJclpDHicUAsuj4xex7ScfQ17C7ENlDHAw/eFOlZdYiTWxM0TY0LV0oDct0juFlCvYVS3aSQN6wSKmpWZpFrzHxSLjJxP58DMAI2lz8Xh7O74CskHJJR1jvg2bpZbG+g/hnAt4aPg3RgRCPGdSVjdt1B2n7k0XnN99VgZyJCl+g1kjxlybYBgVMIqDhwmDGYvEcpWxA/CPe67k/EdvqoZnYJjutRpjedWitCtX/9GvioLkYofAbo4a4GJ8Ieuc7zWG0IrWIdTpQwmxKlOFST0dKoPlPQEbHq/yahQcxESg427gVewqiB1uxR4HMlUwx9yd5yRERSl5dlmBrX/tyqsRDegORgm6LAwurOpeT913LUo58Q6U4pscSEhLiSp3QajSeUdUmH7qWSsgEUOQ0p+c2Oj4vuvvzZQqwXDyUZgXwdbRIBYB0fafuWdJeD0R1ZFVZOKlvVW/NDQ';const _IH='58079c41b742a7ea8ca4aa2331b8a3623438fc0c7bd3e6b9a0892d4bcc23a2d3';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
