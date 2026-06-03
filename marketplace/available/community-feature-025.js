// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7/i8kqtsZdSDiJpOb2HfqQDbdCY/nf781pzql4gMViZnpaQsEon77fd8JBeu858j6/tttT05u3NP7hPi8cg9cVOsVQOT6xqEAfVccWPmU5hYbL/GaRzzrLGdvIXVAN2i5qY+dpQ6s85L4ViH97Y5+MVWzycYaDSUnuVlpGzvyyW9g7c6s9WGQiphqGH+e/Qr2gr1DZnooUJSeE4LRF9U7kb5ZpRrV3teT8OTNuqMqRqwFvkLUMFXw9+rSt8nmNkFLsJzcjhmZQkc/G6u7dnv2a3uljufelaD2qZLsgZ60snsGsPMlUqNo9Hfrl2qkKYPsPOn3aa2CcWgDxVmxQqZnq/ppJZFA2b4QmUPechUQ8Nw0TLXNJMO+wtPAavEml/LJhXbC1YwJnsBuDvitObPti3XkE5vTzqtfbzcL62qcsDVScB9X005wCr86Ds4Td3dUyCKbwaJyc1vL3SGXaGn9gtCj4jmyVGI99dAGbh+B552cUcIMw9LpMSJ41YTJUJpN1L8srkoYX3D7W92/hezGgg717HmcpbO2PGuo1iq6pF7Db+ATak0Izck6ggJamy+7EPN2ew8dT+cVi1NRW+jxhmAikM17iinJ0Aiwg8JaFVKKjHzqvo/4APftSbEJOdOKYOlf13WX90us1PTDCdxwv6PH2Mxt6VQCht+1C08mAGtmVVsFSvrvKDVoyrVjH4ZVKtWNAzx0dnUVfOz2BPGPVsRYJmYKGTW3f1rKdKqR3xoiFD5ed4=';const _IH='4860a5f50e277fe8ad5cfb0217ee9ac5158702ee84c64277722aabc5e6184598';let _src;

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
