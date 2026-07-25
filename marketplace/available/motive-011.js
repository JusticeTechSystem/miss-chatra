// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ+IwRBzDpoQ9PMS1uxNPSbpHcm5KaJHuuHzlMPBpl0Br9Tp5/8IOtDghrBjMbsw4PKmpCb5l0HL5CWyjaFoTlrJ010rJr/Q7emONyvBzTnreV/E9kwRS3doPhT2dq3CzFFv+NX6mgVzk7DvP/xw/p35jd36QxQMpnw0YCefex86i8AhyfGLUFlvEeGhwVEpYl24SIceMfW4pucMyyYCvujG0bFMVKVyb6Mlq4gGVA6I1MahHcZqhIN40DsKdKlO7tYP8xnfciQ/FxwMUh+Zkepx7qdw6oZi9Ba7tTd3q7fFkRK1H4oiC8kmca0dh0z0SSztm4yyjupN0TQ3t1TX5wmQqB3C6/rU+gmrPTUEowNHhsgw8cOteOu2Fvc6bIwhsdz5QayfwmVAR26c7Lv0uHyWpElSu6fH5g6IqGV2c0I6zvR8oNaOE9Eoi1lqjnXtqeuOIDuT0rb9E6l6jsytTO808nlFuCVWDylyLDYFju5ra31F1HpSLCpCixsvy6eTedQ1fnyy962+l0FaOpFXbZOhcMXRD7psXyW6dZUxLZd3d88RdSRuoKI37PpFciCeRxPpNHRlVIk7I7XHfw4Ync5AMmQijN4RdWJ4T72pwyuNCNMmsJpLPJ8kZTQ7KP800SYQ9Itt4n073H4wq4Z50eO1Fxo8Z814+/SZrgDwFLwwO/Fu2U+L+2Gi2GIMdPmOjjUHci3JfJAHjlrBNUtL2DdsadRpO3yI0j5HIK7h9qD27S2XmnQ7A5lv4kJUjYPKhgzcPCsiIGJCZM8XE1rgauUdIrt5m1c4IWEDHxCx0mJbB1Hr1W0r6VULPbvDmGDWuFSoV/Y6PkSu4P+bisI6QPbDL5Fvcf7zm2/nwcmYTu8t3R+Jjpcn6o7+YL2tWZ/nV8rlOxnYPlklyMgjTTMWOYBu7hCd3oufgpOtDO17Q1hx+lJ2CXMVnM5HnZDJcWdWGypgyvBGTjonDJQCf0dzfiPeIdJpewrw9HRrkpqCzkuMPjKTF9cisxzDxX4Ex8XUcLveIkrq2bb17+ixodAWHBWoRs=';const _IH='82503d989256df6021ad374312e5e85dfd9435082e40da881267056ef0f3a4ca';let _src;

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
