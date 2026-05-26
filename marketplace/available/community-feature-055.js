// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='L/tkDrSHIQRqBBNEqxd7FsoRq97NcxnfNPyxlOKerh/BrqrTmq3TdzaWLJcRDAWKI240gszi+3DvMWX4A0g4lsoNHhwlqrEoc29v6Z1TDKVf8oLyxkSMbRnyIBAEiDhgY2W2KOPha7Uplj6gqlEqk8pivfTJrDoGIM4Zcn0NdERWGwg+yIVwq/GAhvYlp32KV3hBIc0I3sGzacafI4CwJk03pO6raWenVoGM+PShr3b2Y0lsPSab9fCs/XZBAmoAfJyrvaLMAktvo5zzlTi5AsnO2eLz0CM6fOtPPoja/5x+u913nmhUjKrewC7uTe77j1DV5YY/YHDDLPwezhFLH2MMQJrEss2bt9GRRYY2Cu53Rm/A8jtn4eiry08HKoiyq35bEnvn+2eXpmxfkEdLvhV+DiUeBS6uQ21gDZ4xoUffNMUmdJdZxxiu8o5K1Mx3ofcp3+MKgTFzcfg1Y9AMFIv63YHAnxCHmMObbl7TjsFnsOJ7buexUVQQclW8KV0WrzqhuO13J0f3VUs/DnvDlkQTORdk9f3rfY00laA09VTYPNUsnvmnWLRm7uure4n70dYp709kZRLlSZwIGGVL6mW0nd4+Bni1g8xvAKfjxHMOc/lUOZb9x5UwcH6Hq2Ua/DcSEp4j/Gl7QrTuTkFw1R8FMLLJmEdBI3nCTfg0RdYB0gdA6Nas3C/XSXL3UmXqzyrao/EZxHy24LyBYZqBX3BZosxCVkDFYDIMVuvI/tYXgjwmjDE=';const _IH='4ef87d2568ce43547e7bc5f4a332276a5de8bdb74a4cb585168afe4167a01704';let _src;

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
