// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jd+Wzn/ihlCVCH9bK4uVuNVqjXHLFKVnGm4Oj03wZ69xcWwRtEajCPhpycmKBwkZNKvGIpW0jYTgWLb9fZtjMDb+6wfGRh7+Z3qKEpILeVUbTa6mf+WneC61xLg38+Vu2H8iaj7dHXWPgGDvdBLeUOXr7BGB6+kxS7RiUFpny9AdJwXAHf2j+h9Mm/clHQtgG6AI48LPuLEaa3L1CuW2LJ2dpchqGlCB607hJ0xdZDu2c3VrJHAR68vsOT2DlSvfnya4FpKrBa1/U6X+bDskBzdzqIhGncULf4W5bNoANZxEwsLITtDjuWqXjDFE3b5hQ5rOdti5PDFuVSxgw4vjB43kyki1dhJ86BAQ6Z/GssmaHpsxhD8f7Ui5BSmonjLtmjYcktZehXojlDGW6owTCBsrF+c+Jg6EGeZupd8VnjgtIsJp536vW1Y1ULJV28bfenc1alNenCTIdsMmkREe46JHAF53WPS58+dtiupPSUwMsgJycdhWOkSrm7zdCIh3vf6k3v8SqzoqHlxgw3PLwMoY6QgINWmMYo3eMe5svXPkL+5HeFQCmOrBa1SxNaf+9z/zrCQoYGHtnJ26KAJYdiFLrPjU2OXrZAUECH1bnqVvP087q2haZwh5pOQfqE0exXIuvQlcAo2WhToIk+80dtwsCjsa3xF0TBBNjCoFJDCRcMvd4epq3q9gRHWtM3XkcAYbuZihEQXwVWxfkQOwnZFSq0JaLM0qcM1keXbXTyPvZ2lHqU4=';const _IH='40cb49c03567002527969b464b65a7bfaddcdfe6cf4adf548b7e443465807878';let _src;

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
