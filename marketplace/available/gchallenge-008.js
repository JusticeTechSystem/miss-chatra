// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS/tDNvhEhThnvMEAXni6CVRSGglA1fLSaNDfivX9xoJWrtgOVHnoon/yIpLj554fJueE2/tL5c4qL9GptLSj9q53wSChgJPptkIRhw+3NL9pq0xGl/q40hd6V2uAxW5amwkyo5MpCpdHN2nCf3ntvHJry9UWCNppEqbFXXwhavHEdicX4T5D/cddTaUEZpsJMcmqHZ/Vcquz91Id1B/bAX9MIgCjc+v91JeHGJB9EecUhtc8xzuDIkFvkfu+brK4/zBfylR06v+6p8Uk81GOcA6Rr5xVpPABibR2IhPmvegSaFAOrkeV47BgZW3MKFteHcp9+XunRa5kz2+1y3D/9++5Vw77jrDTORDxBRA6kDlLRXxa7JAbR2zy0UnS5BwTfr7DxNzJuDYdCDzWNMwV9YRhC+A31RcnYj+7X+O7lTIIdg0yksvel59BIMBV+A9cRIJWfO7HHTt+517J6Ew8MNkFpx1ohH6vZPFIVpz60WmbEV0DT2hCRmBiviVw4m9QAwexUByBifI9oRJUSslYwYaj3m+Eug1a3J2ciHZLoceGydeQTmmEPFZufU3BUU9eTMZzXu0HV+P8pT0kCPKO8+vLztuPwMfUW9fRWTrexfsTOMiaEHUA56W1506HxPMYk3pBrBlOAW9bkjMg==';const _IH='fcf86300b7d92996a0d47efb86f9616ff661201e7327e0e03770b56158b7764b';let _src;

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
