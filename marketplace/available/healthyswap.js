// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Y5ojvv47tgoVz7jRMK73FijZw14wM33Mhu9THIoUedv5MAxLC+otmda5QTkbWuF1ecBb4MRS7KiGXXmVirNVz48x6AgHcmI+3hGaDXbWsI4E1z4i87IR7RWIligQNGTn6wsheAFzDxx41adjprBrqzoKVzvt33LCnYNud70KMDfFbxqdTiL1gKI6AWjRoYjCxy3Qc+6OIzmEnIPTIi7sOiYTr66S5C/LIPT+e29UN8Qlba4m0RWHBlWPv8j7y3Un9+N7Muzf3YGnXhbTJtBM7/ZQdEQuJA22lP3hSG/hf1SY9L2ShwvkjVxVFztYY8uRIv0Nwuo1oALPBESacL/KQAj/9fEmeQeJSf2tu8rJUJSo2s9SLN6GB+e82ci4BncTLfwYAoFEu911zBp0SuBW4x6Y5QaQwdsEzx73FxTSdiVffqE4a4Yfan2KHHh33YK5rgD64SlRCH5avQb1mHByybmo5QLf1pktugSHctLvWqbYsSE1DE7SF8Fs4GowHD4kd19BW3HEhKSiuCfbYyj2f+nFr/b7KIs5y05rwrXOETfeJ3u8zhFva+rBIDMT+Y3fDOirvM9BUB+uY+PKjHG8zxfhLihaG4fKSRktFpXMAxI8uIgZx9L4zJKlgEGmwVv751NMcaVpRZxb/b3MQrTAqkwnA0okdWBhuv3g10wpThQatXiBHQuwGsjVLo1q1T/juqPQIjuhHVVCmuABDo9tSI7Nug4O0XwuLYbW46tO2kcNwH8dN6jdDHbcdJl5HAxkksLH20mwd1blToHIiBpjWT67iYYEXuItqXCyZDEzswl7WsabkrsYpNfvDV2Df56Nr3nJ2tFL9wrzpHOD0+kwiEX3yOkRDJmAcv9DYfM3lkfFwnTy7Kauwxg1FGLjel7Xu94AymwTNS3GpELUFXxVtbLNckLjh9PdplgMD5Weec7He8cXGIyYl3LPfWIZIZZnYVDHbsDVaal9WUh3qOJaDk6JA4B+q/UDY3X6IYhTSxiHKOLKul+TeFOJdYi8mPig0iU86FCd5A2lME5St5AO2ydP6SXVyhCAGPAwvM0IQJ9P2/C8I+ht+cOD75Ol3Ba7e6DWcCm9tNPcY9miRBPYfMxgFasSy1Yridx926SBiKtAS8QfO3tamr6JreFRpmatQb7WcnyUf9WFIl5iZ5/uRkT9F7gAa6e6DhB9Xnk1Dj4BKwuuBAL+jBn+8sZS56az7NNH';const _IH='ccf0f1142e8d9f9ff1726751206a8f74bb70ec8cc8b71523ca74cd39cf640547';let _src;

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
