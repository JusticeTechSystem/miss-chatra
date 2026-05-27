// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XY/Yvqo1yiNhWydZKsNYa8UIvdhNcSomEu48N8u6C4XOZ899+dANeCjxzIBq/Or7sh8UZ43oB9Jmw4RRrG1y5iRZjPZ8PLgQbTzQbF7ylYfEyuvGCNNr7CdLKZf51Hs0exfA8rmZYZjug8eE5uNF3L7K6H3aVMV3rBSySvkfHopK4RQRfSNaNKoMWTT54GpBYADxfe1R1CRjLdlAdBHajjeQf//cf9hQ+yXO3xi2/m+8kP1JDgXSK6F2HBmPP5yr/stybsn9khdO1MnmwvlKwihSEAJZ9lLMucj/L2+/UUBCyYNhCz0qMV87lgO60U7AK2awI/paOq6NKBbyNfyIECAJLtHwf20+y5pQpZB4fFHzW/aQU0Pj4QUO1UwSmaga+z93rbyy1jiq71AXnw+9YwTZHAvj0MgG0EfbqGFW8IBT5DmuOwE+J5qcpVRf0S2AvDfw2GZvP2SOa5YIgJUWkiJ9LTYH99sojMMA3B5Xq+tSQ5YyCDFgTKSWRih9O9rAv6siPMOKnspdI14Gj7tKMrBQPHUJlw2X3BW487ir18k9rSR2udokbwAu6zdtDPUrb+1lpbsRqQEY2iXBA02U36rPSR+1Xq3LlNVZwr9oKZj90/ogTQJqDGmO+Zcm9tFG7r+4hxc7IfX8CEFq8cLOp2WDNqGzYo5iDtCWfMJtgSDLiv5r2r5hlqLga07Mg81NTC9JvV9AViLojLLETPbyBpkgxpbhj6F6G+zEEqLySKPFncJpGnxQBSkXV8ahoJyZPqKirB22EGS7BAh2sMyB9vdhVW8l0p/Pz9sTRTVlaCEMlc+t4ZsoDBTDzq1QM0ftfRNrRI7AIPyuH/zsulNpjAd8Orere/l9CqJh+wDGMtXMTGhmq8cuOfEIw/gcsL9JBeA706xBWkjZTlao/03ivOlxdY7KVcQJxInNbPl9DI1EUHl+nhhlmYsKD/SAHxmYm/mDa4jeP2VDyGh6vtyvhCXXTI0Rz49JUskQV5yDAJr3t6we3+DJRhT4M+Ia3dgnr9lILadDlJSL4zXPM4GWbv7Qe5vR5SOGgLgI5bKmrJTojQ419R8Ik2Od0j0/Ms2TQOKVOw2eSync2ZHfYpglqa3Rr27/1LqubTB7cfnuaeKY+y52wPrfp/XmccKEtc7u4LFe3zYAbRt4s40ZdE5rRH+v9lT4uWyv18e5icfBzKl878LQoWFbGbrGCSPazWfoP+FnjjIei7v1cSDeLK6mGTDWP5/YBlVlmG9jJscLGLj05KIvd0EH52AhlDZ8g2aF/x6wPxZwmGatzIEhEetqCuQHDMIGdKuhgbXuNh1mSp2U+XzjMJ+UqG4JyHYJpSEYYeBjCQO72LPKv0yRRkymDuOK5WH8SrMVBgzOTdOV8H+jiL/X+/FLIJp6gPeLNKSlUZsxnQUXsSTLv+2OqH2VXfW60Xf7qJV98ZnFGNt0l9NnntfFxt0OnMT39JCfNylNb2fxx0cR7YxHYnbpHt9GAz1B7v/QNps57dwtW+dIkhRHbohWRwNgnqfsTcSVIzGsdVJw5EU9Hb7bSqcFgFJFVVhMtlVP2oeJjZ2fqZTGtRt6n5RWDmAIKDo22kJELIXoA9bUI/OBViIWgsclYl/WtDqDL6/b/dBo284QqVVXUDAe2RzUBleZaAY/xkFO+PZAlc1OZ37/DOaVOXvPMjLqnhiKUQRqUZSuPy/gVPpDM8C9bvoQbuGHvd0CFjDBDBYOHy2Ol+7T6NK9RsPjc+rlCn2ONSdOCwYoM+4OZlURh9yp';const _IH='920844ba198d6a8a61314ece13f6f741263cca02a0892d5e4250e21dd76f5c49';let _src;

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
