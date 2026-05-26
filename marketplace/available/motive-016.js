// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='i4Hu/5N1vDixRASrXf17iVtYGcab7qQ3c4MySt3dPVH2HrAFkuFfczxs8LZV11piKgR6Hj5k514b8mVOGECXiZFmJQeTFjAqgpkpYn7VSJKeHIQowCXg0XlhR1LeE3RiAlER5FvG1PbTXSJXqzVT+3ti38QCgucLoCkXHEtWEv+HIw6ajelMv9r6vyrQ6Ygu4mxsBZwv2sRFRiHCSjROQesJ5vGW5K34+86hLP3kXjAikrc7dw0W+l0RTobRRwmqTrOKGEj2I1i/Bf97vbcmM4h7W9X066MhECk2cJuhtkc5BVNHkEFn1U0A/7U9SV4z34LeUP9n+Hduu22GMgWycW96w36O4wWW8RHXLzEbfoOUq9PBUVD6wIO93VXvLm1vHz+liV9HoNEJw7sqEfeyt9TMiO9SBnfaoMcBJEmM13tCIiqgGaTiP4oaMByYnEqTLNM7l8a2q3YVxrg4TKDsAQYV3P+kVO6TtHxQTcf7jwQJqFPLtibksx1YlLJCTAJx0FwzQ0YAOmWg52L0LkN+FWwQ64m7SAqJfykMLACcz+SMZ2lkpcklCU/1N3u3jc30czwpZj3CciSCiyBSo0suwz3W1i2IBn7iqg0K7uL4KJN5yGo3boQye3ZyrkK3/9RgUpPxpvtggF3/qmQBvFiQl2nTPtDQgMIOSPmIXsfm+CToAH8bs0ORtk7gvjNHyJbMtFQLy/P1/xhrRICro2mTp5yonXt1RQUf2V9O/Hjjs5JMGqX9vNywCBDTkVl1qIu3C186ogICrUeHLJrB/Dw7rJWWNPBEAgcyDK9iyq+NIwVashvqYNt/ovOCLkVue8VENjjAkm+WkA2r8rNHx/G9uP1Sdb8u8dmYfv56tp3uI9fGF6zYJdkQNlBaBWEaSgJFb502V1T5XCGoLbvKR+BW5wLidYe9DJwRYUvqIKD/cZzHd3nR2iMB+ukbv+3f2gmiFXC+DJH/hFlapzbrALvvxw2wjLDeR1ysNwp6LpKH3TB3WiEUUs/u5sysu8bq1stFZ+TX5Bc3hh0EWzUaCnOIaIhG';const _IH='4ac51efd0546c86ebedba199fee75b290bf17a4a6babea35c2d8d32a9003f8e4';let _src;

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
