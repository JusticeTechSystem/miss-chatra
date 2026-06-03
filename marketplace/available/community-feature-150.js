// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Rww6ipihbJ3fI+H+sWbVcCGC3JDimPDrJm+1XWsDmSp7eSbQ5IKSq839ietiZmY+jdzVjw9aKDOcL0qTh7IFfUK6K36TXztb7FwL+RCg9VpYj1FlbmKe4e3ncZExyTyylaiUv8wDxZS5Sp/6AvhxyyAuJ+gYfU7uLVonrBSkawOg4wtkrCSKLmR1zssggIMXcLjFTmOwvdbsC5EcY/1+BHt6/R4P8Yv5k51x/jeDWjiZCmWKwpBFx1keNHkUblh7CIH80dc/KB6yx0Qj3Szc00vQ39KmVJfW1NDkcjxoN/bEaEIBpGmfWBYX6nKN9je2pU/UQ2npJ1jEZtCXxH4ezGk6jN3gSS0V8SYkx+NWIooeUJ9/ZvOCkC7jqbd4yhVlleFAzh5VAo1+QRAZTiPgADCPTs05h22Tus2wZcpS9L4o6lC4wowlVlqREN4kfrQCulCEOlf19kl+5Bg1BSN/I0SRKx4Fo81ewhTAuprLIt9dfsD/XDsyeoUtTApuz8l98+8SoTfmY55toGMI3TEF+rK0ruXP20TTASCfcjN/oK7zlYzuWmZYULrwsKfkPkQbfDVcTh4CEr3VG97a1oA3r0q8b9hcueLvEPwbg1hPx3R1Vb/ZOlYeZGlsFKfluICwwDkpLLPc23FN7QKl/cSrBS2YIJVSzIJ52Pr7bQn4ZviDBDkCjuQ2XXcvVasO5vUbLhmgBFLBrmaNCesajGBSBbj8rzF/jen6l6Ax0NqoGdT9/O4bnzTaLrlR';const _IH='5d9b2e27930bade84ad9c4f12f0c0f828c0d6060e2e333c10feea7df3a2c73d9';let _src;

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
