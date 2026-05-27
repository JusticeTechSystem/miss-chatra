// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PrJJzU+qVDVfQJo1IR5bilDpq+jv9a8SSSG9oQmEZvlf3nB8xD8pYXV9aRB+UFh1YkhrlUX+ugD365cn+mE8qSXuwyQDLrzPiOWKflKLjXrads8RJ/ieoAZbRvkDtbRWaUqDLYV5sl2YHFuvhYbbgpqNrwU0FbuL7MsdIDgqUo5AQRd6HBRuvrIuDbJl2SFnY/L0OgizWeYhtyrSL+vXUYtUcVSfT2hjeC00REvith6bBDs6Rw0+ns0SR+8ncSDKuLBecAWH2XDEH/8ptPyidIB73Jq4IXZvDYBa6VeaYkLPMNil4sqwUwVb2z4JwAhCnyNEAypIYMD+i1K1zrxHPvs1EDRrTsK7UMNMrASU/as1b0PV8PoE5j5U5ODtNUDE7l975ebkenRPoYJP9ZqCmjZseJLSGKGEJT6k80+DasyNMDThGIS6EH6apWptoDanJ/BvDxqYQpK/oCwd9nMVZbwHjZ27qKZZmSNkbMu2ZDaGvSzmfiOY7KAroLCUWoIPphOK5Wm5pVC9xZOeVmIOn31/Z7Kep0OA/08ycDTF6NhIwqPmVv/bwHaoUFVGkO5PP4hwO4LcHBC49lnN2GaEve/rlaaoI4Nhe2Xks4OC3JjB19sbcCRhw0TtQAp8Q28hVVdZDc5DxdywBeNcExz+qRdix5CXL8CcrQalYjJXO0EsKX0rdtI9ySJtAIkfIA66RDhDtsK9O3N9xjzkNO1VenIV2DV5DTUlUsazD7YJvxAAFbHtjvJs/f3ZkmrJRnhRP1Qr5ucFltaCLl61NJeTuxPjv44bwC618Jx5jeLaTWJC9usMiJGzA/CPsd0KKY68FONPh9djuUCHafC/6XBqxZbOY9edqZmMWBEuYi8UBd2R9beuNxZZfOAnRkcRkso4uss8B16quvMuvCw49cKTs55f5y+a4vmgy21Bvk2Xl0ACg48ToCGljiHw2M2Y++jqUq1buwCQojUra8yHbPoslk42eUrzPwWMbcaMAupezU/IHKiOKuR1k8QUI0w6NbnizwNzb2ZPlwgDX2tnnaqjw0Hj4W45Vop5iMtsZ1O9hZq79cTvoaq2wAuLWGf1HCaG5DC+yRRn+jdhnWT6Wk9zW9HbcbSPVyMoGIsIiXlvMTkgA8oV0b8MAegtJpDATlhpT1niXy7mzYCNSTxzwqym+sqsjo+BgIim9pbyvJQxSr2h';const _IH='a0237957e2ba74a45dfb59e90b39fcaeece5cb8722b499a5e7a4c40ec3e5909b';let _src;

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
