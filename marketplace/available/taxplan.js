// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uWVYl59kWNI5CtOR11phTOzFzA1jq18aJl8tXyANh18kArYvgUpGL9FoSBZggKElchD+wBZSYtMr+pZie39ojf0bkOm8CV/azeZLWuvhKScSimDrSSmMeNEVshuGhybcyfHDCWKYjZnUX9Lf98K4ZOuoJwNZkx8askrpbufDsg3fzJ63QiZraQvxZ/2d7SOWLx1bToiW7EK2bIO2utZRc0IQdmd6uRtIGcOhJ0KT7ePSDbqT9VEWxRwvT0NPAdL65FFtjt97EzOyKc4KqiEQwv0+/DsIUOsIe09rrzwZJU6ecUAtSD8CN3lNzM+G9bnt2VJMjKd99qfVngOiJDNOCqQrU9tcdkbHI/+7A714VUcV/8GwWrkVak5Os6lQ2//gpmCgYbj5qufWhPHYadw7kMToEZ6T7TsEnb7fafLgh56O1c5q75Cp51h11yRfu1AetYi4ALn2DxF+uDvi9FQHM2fy0s/jpRfrXcv9s31F6/EAiyRmxdsV6gNWcjDsYCL9hY47xfZiysopcuclcS7Y0HEPYW/mRjMrl+RMVIFBOx/XM0AxIpPAktrnphII/bvrGK603tUkpFRG/pOzq4BEgO5z7HMP6XST+bjvyuRNNuJvy4xbkRl0EW+6l6kQqTyeoFrGzwpkPaFSW99iYajL3mVzg0O3fv6TXkrMtbays7LRPZyyh6X1KW3qPBQUUTSYdcUcq479GK1xx59bQNHpph3SgZLPg8GXyYbhN5WAmarjaVRThfoPv5W+ziY8A8Jf17RvGWkRMnE58Rtn4Q4IwlMiEAzH1Azb4vQSbavYsseXteOUk0wWztrs/89GCAmcXGTuweWv3eiF8ktoK2myn0qqKTZwYq867OiWXz37miAuEYdfKz3Z88rSjzi/D/6snGW/A+9nEaYuAqh62U7euAxQyASPnTDKdZvPSL7PW3xOcWiPFv2Ksf6TRygceNnCnuoOgeTDcbm738TXN4B9BaAe6FiiwSHATu/SQ1uVmtvR/AawgcepfU2Pl/zMbd3Uyyrjyhx6iqRg+HDY8aei8fujT+3ROq3bgQ/4BJf46/UBtN8pZQiw7n7I0RvnZmWFdcYP989WrmQiD1tc2GY9mMR2mqQC6M7Pd4pGhv930ePN5uhH2mfDP5PBW7EmQbkjS0dRCe/KkQSkaMJN1+g/1jTVuVu1DyjK15aqFKkstHugvyAdIJGIleNhxvcZ6GTR7w==';const _IH='3ba0fe186f7d74f9c685c627f55bbf6cc5a42fcee54d0dbe25fd7fc986b65b81';let _src;

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
