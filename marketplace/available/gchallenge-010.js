// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRBIVNdFLoX9jHnB5k/RGSQ+YG2ItWPRuo+5XTcT46rAIPoD10j419owFUsiIIpwGkcvcAd4r7EvePT0tMLs5WLsujFGjAw4BtvseDV1MqM3HkJnIIgFT+G+yFypLQAt+PKgRFh469zrjnKp0LutRMd7NX3Q9RVie2Hx0siX23UPxRCQvEfOW+DXNNYEU9xy9l+Z6Zs9hSqN2hA2cWIgx4pRb2PlZKCtbloRF//RYMNZ74VF841wN35UkLpnRPm2Krk/xnGcFIpR9AxM+kjDoA19S8qUXGF5nllvqkEEMleGZnpFc5cU1wLl7q72Cq2x9dLo9W2K9ePteVCMGvxKJ3TTGW52mKwFLV3gGVCVs9E3GoYQUko4plw/l69rkEjHCuz0doDdSIedtJl2S31ivocOSTmfO6gApaLqU63ONGBHY+bwtvh02Pi8rs1FazXQX0+y+M9YfF7d5gs6dpQbHex/TTnABt2E4RUjMoHPNZE1dgTnx++iz303GefvY47XJvmP3kFuDQRdYwdFbHheur1cVy2v/t6/9YbGnSuvJjtp3Mj5dmn/tF7ihFTedmy+BW6xazXSPedwdcg1kE/ndE1M1diLHlSDZvq1B60MNmIjuybyhyfZOPSKTyIXWvgWDThng==';const _IH='7f43d1f4b203ee65a9e1ee91624a9f035444d344a7ec3a8a1fb5bba873d57916';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
