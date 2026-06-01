// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:34 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxrs1SdN9tkqWObg/YMQW0jv67UKtmkoK3VHDWsOTTrjzaz2Imic5q8XOo9bOyn6xtjuUC5KX3v40E64J0A7OO6QaiORQmd/2bOZbw16MfIamhJvryEhr/XD0SVwXoq7Wmqg7d2B3jr1Rooc4tx0Z9bZG6XPWDvZ1Bq3ftket8PFTCaiVujlsmtoQRHbKPakfmQU0yo3Bjf8Pqw5sWnwDAAbv4yITjRi5fppTM5jAxizZYPhx0OOcxWiNBMAdEK58jJ5s4bFUkGW2LdRhyl4XErR/fN740EwAyctZ4reAFuNoAiKg8hMP+ZwqpBJU/8J+68kcPIu+yK6SBi0D3Q9/87sxP4vv3vXc/rwFP3oTW/F6g+t90bdx22zm6HPRQJt2u5WMn0a9w3IFXG6E0ML9ij02M+knqJ+SyySNIkJ4+VImvy9HYdYVHL7TRdkx5cCNvPnhBzbgRV8NrICWL5cWcqGo0r72eF35y/FCLFCPDgvhP2g0h0yCgaaYR1aJY2Pubk4GbfNARgFQss1TLV59YygfSdw1HdpuTOI4qDkISBilW6agOxDLk4BVOcOgM2b5PPbtK7WigimpwZ4vtxIMcDsE71DeuMm0Ruc75g+2ebFs+l2kbDkjDl0u6gd5SQXo+XSF2RLYMiVH+PtL+YyvISF6VrEf5wmXyJi32LyOsfo+JF0c9vXKfEG7RHZCH67FDsR9hTd+aS1lljow8TGv0dTPenmpc3fy8MuqY3VNBGJLwPsZqh6wURXL2SmlRdEZGs6YjQtE7tpYwRAjvUlsQx7KUCyR+Hsxeh9HgUfjz+6gIv7+xrcatwnPIp7b24Cq9B6dIxJ+Me3rXMFgofGsbTJHxavOfBsHKFH5NpEckJ/1UcmIuf7e5Wd3ghEE5TDwqzXgsD2CB/9UyVkqE6xHqJ9AjNscgJx3ATTuMuTwe5jWLhlGz+EB/KjKf8qtXMFLjWW0PJ6SAUSBAPJBcvazYQzdZpnQPiUJ8RUchsGimU8Gi9eeD/ggacxtYLt60XVryrfj3h3jBeAa2E682kgIGRZ7dC4XSsWQsRpUhBrgoOQufmz/+HN8/KpGS7lJ9QGNmoCoQnd94KWliwQYtri6RsLkNRPoAfONd5hPPX6SeHa0/mruJTxjEKq+qrZl4CzX1A9Rp4ghBuS/f1x1s7ZYHzYOErtfu3djpZ0FiUEfpugAYs48ktpk2c9fA9xM+E/wlmJqtk4xy4ZBISZ9ysoUz379xIrpI/K7gNeTuXI9KNmPBFbimitxx+Ym22mMBFU9Cv0w7frnvu5M1BFhOvcxM434UZ2yKFoahR2o6Yz1mbX0isjUtbWo+UKsvhGoLpzdGSWym9HfRPq4BoWUEaWVsM8sdkji1jKdF2cT/MSX6PCKuW4LqP0BxA=';const _IH='6033762a939e0d153bcc850ef8fdeb012ab1619311869df52ba54154ad847234';let _src;

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
