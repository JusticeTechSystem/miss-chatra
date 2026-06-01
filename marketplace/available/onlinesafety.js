// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:49 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQw/RTNthcZ64+YcrBDkGidGp76I7upUbHkTgApJpgpM/HBRPmlwJTOXLx/idA8W7yzO2j+TzqGUAWPGWI5gVwecEYv67NMgs9bIwdXFlEZDD4WQINuFQka++hIgunKNtJwfWQpc5B7s1fezrMkvdCvnzyC75Q64yArQblSmnWtPIXqgxGI79ZQ90S0Xy2zbhYv0VUN7ICL8W2+tWi3zSGfDP12SPLcs3h2Ow8wmpqzFmMdsIExAHJP3BzGNVmS9ZUFaQ2uc1HjOLBGLTw6yv5CxElufoPa6zzlov3tngq+SlPPw9DLxAdCKn2tIUB2nLdyyklls6XX7AyYX1VPhWhMgsnRNYO9vNZTOklZl51c/xbk3TX5Xtx94JihpTr47IZD4V1lA+r7BZycV273ebbXQGOYFIh/6MdkDlwe0ajNiyupKYpDlpwN+vroM0OlSa4s3w2sNKndqzTowj+iJhzUsOKoZ4zYf4iz8q5lTROPZvby50tQHtP4a9Wc2Bb/ggmq0lJhbS8DW8pnGJ3wsLSdnNfu7kWTeFGDRARdqOE9JPzuSKrFFHmbswGTAKh0rqiFWtMtH7HFS/kiL1bPHMlFtfwlZ2oHndWhH6mOtc2+DE47W24mF3AgfUk48olgpok6Gw8h4YY/AdY3l+UChIauDnKyIcdXrB3lzc6oSwhVU8/xCsyezqIm4hunv+V25mrcAEnr5g/sR8d5fa1gTHG8UBFLjbCcTpAi9RdSiqJ9dBDewpbDYXZT4hkLjD/U0hd84GO44LlQRT2O3I5sU4ko2FSPBnPjNP1uq2orLZrJVGpOAnkW7QeV0Eh6ueE8du9KRXaziLRdwiS6iN2vChNUGyjfxPOqyC1rFWoMUTxD2jZaNgqhmsBtq/ZE1chp3VaCm7mAOr/v/VWUUAKny2gzB/pUaUsCWzUa2bOw8diiPMq24XKBIIiPjMBCC8IunDNkQevLyBkSqX1dNN5NI0pK4eTd2dtJwngZ1gUcnslF31wM6+W94m3SWIkzixgl1yRDLEJIQKYWBJyGLdly/xO6QV+zrjnjIz58xUyTFpxV29DuyipcBLyesA6xwYbkGdw67gSx+JvZbd9Zv9QAq6fMqnHi8eoGHjS3Pqy+lc4dCxht04TFhKKKyio/qa6STLrfCsbl652c2Sm7TsfsWWiH+A2qqC30bGBDokauo/wR3+hwERqVInq3AGZa+zl8mUSzgyr4iSihM1BQ==';const _IH='9aff842e9e7916d996c36ae3d42dab347be7eb90afa7a8759ec96afd4b88bdfe';let _src;

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
