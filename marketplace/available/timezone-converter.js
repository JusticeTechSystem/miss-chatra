// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gTZWla6htJDDeH5NsmbDLXwVeFUPPH4XkchuYc8FI/PiC7HTZlRsea6WXYJqVRxnYQQTuXQC60jj9DhlDpIyurFUjHz89drHQQOO6bWBnfbgXqf6/+PX3dT/x6hxMH0ZBzicXtj1xkVKKZg/cE9V/L1BcCPTfo9M7zRCLi/mWO55xj16ycEyYCVddsmLtOtEpN1k9bu9qXXUa+smJhM6d28BPTdDdixuo9Y83lSCDx3+u8Gvr4JMlNXBKcqjX05iB27nbjDr2t3nxMqY7OM57r5ueTN8gtw6jsZdpCpYWq/T/x6y8TISR2Aq77W12GcIk0NG7SfdYhqz9NrJc3xOZZkngxQjjG5xhj0Q7zz0Uw2SI6+UDoB1OgPEetmtMt3yV3T0/tJKsire4Uq0ufvS+zEHjl58JE1J6K4+5//4pBgK7UFac/ZNqIZ8iHymW3DKNgpTS/icIvIFA7jZHRDz9Xt2LR8FDZtuzg4pp6m0RkNi2u4bzbmfjMLSC9fN130sf9OCXVKCuMuoXNzRjKlOf78z/qx+DucwsuS4E7Fa9Tb5Uo5yoCFc81dQJyxGZ7I1GayAg37+ssdaEiwnNliug0hEtvaOAJAWDugn';const _IH='dd4b5523cbd782ab005b5b909a8e9828b6c135872347fdff4a921501e27a4195';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
