// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kFczSkE0vByuj6AJmPTHRm8fxgt+JJ0xpUjZWYlW3R/5ANsqQ8X2cq4w+jiIyCwWoF/Iauerbi41PKMKb8jm2oP/aU4zgKWKFPbxhAY2+kF5TLxpafCTqe8YbfOgIhsny9SskaeA1WEod9EPj2KPZEEiJpKDqLfSkzK1heJmFTd509l+t/Lp0IrrSHAa6DqE873vA3/hfHZR2JQByZFJ+bqQQP31g2/LceA3VxHmxd5B+rtu/Aejo9KxeUb7cqgQtuOjU3e74ivogRwiXTyrPO1pa0Cqlw3/sjpxjo9t9JTELANfEq+I0HJNEbhgR1TETOmID4DR/BuvJegBUMw6NHbv2ledPBs/07k3Bb/Eh+Q20ReVHl4h9ajgei8yPTPhsXRbRUqsRAb07OYT+OwA5POyWc5NMZ8ZuOYNfx18PX9H1TczDb2QGBRH0AhgfpxuAznaTTrddLg9JDtr4K0g3HicrXoyc+VAmXl/bVE3W0UDQGsAg5rFAHspAL2ThVCGKjy/Z11OgK5WG1v/Q+cIoincISsro15sqEesXMAYm0Stvxzp6fmWP4tpoWy40dNN52qzSSHetI98jjPFUNSaWx5F2oJTKrlvpr2iFiMEPszBcXHMvaX8Bv4AGe2z4+d11P0QIBngQgYhICAbYUkz+vGAEyMOYiebjjMsPH2n9klwGkK0G9XE/sh1Xw6qrB5Tty+OE7IkiVL+wGaidiRN09nV0LPr2uqQDqkgxb9PJbm3UtI+RfPps2arVHLEERBipKHD/NZnf1RVIRPZigfoWRCXXAuR4MBEFUHyH8WIe1cWB7X3D7Kz+YuSk1Hgo7068S65I2tlCiMlHwptN4MSFsxOf+0E1JurMIv10SdrFZJDM4hI+eloy5OVVSQCH4MIP6RCq1JKBnVlAMIS9/RCHCQtoirZsY6gjbLvoSXOKHomM9muV8Pq1MKNWns2cOM4H8F57glah5XfPnyOyn2nL9LfPuS8aMvI3M0IIHiL5PCgTC3rC/qg3eNob94YIGhE7XiuvO+UIxaN99WAyBh5eP2MryIs5N4/17cFS3NDnKMH8fyl6Ds4mwjYd2I4InnIdLDc67AC91miSJOSiyGnHd79EcbHJliygcfMOnPhJXnrPmti3zGH3Cd5LR7btKQCRDl2riVPL3/677H6OIl03SAxdQezAo+WVRyFzWG5hgeEBAGGKjb4lb1RTcPKbsnP0aA3tJsmI7yBF/08CCoDq4LLTOw1MKNiZ2f3d1H+/PIpamyaXqLbF3B5QSAQqSpP+COdj7P0hOTvr8Fg/QQoj/AOpOoCMU0hBcdwmIKOBmdae2ZP7Edg40Y6YfUOHyyRNvOfI/Y/2AnD5ShtlIsXpYz5s+2dFv+S87vAC0Xzu6DF8Y9VHcQeP0tJsGxUC4/nS/8cVhhmraRz6ErK';const _IH='f4efc7cf89064c6a06c2452ff010be9b855da6875cd4359f6600bab67f333892';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
