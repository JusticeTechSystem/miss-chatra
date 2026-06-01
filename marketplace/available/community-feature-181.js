// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:36 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+oHS5QBfIek/CK5QZf8N7l1Wlvz0L+oB3rwVwvJtP8oKCno2nXROLCu6IXoMI32aV6Ogyz7h1h2FOFmI6Ghjnv0o0NeBh/RLINjPzkxkGesamoUwxhvDsHCa1Bd9Jstwx7HykmELofCAttRDSNA96MLZ4Nfn8hdMc2oWQbyB0thW23zOQpzoJiDLFxHQwZs1URCyAB3OZHLV9IC3ncXy8issaMAo/PNgD0tNU2g6c1uF/zq3Q1RtZAK06URFS7Rgy3Rq4Pz8aNGN0DUBwJrxgmiA4funXcQd+Q06n2PWSBTmCMAi3WEq1D2GFxO/jlFWnNAYHJRGWWDVz+FjAwqPmKyAyb6s3ly+k6L9xC6gKQ0Y/vk1Rnw3kdMoejmuJzyylemSAM1yJCJUBpalMipR5alYq+imvtD0cAEPLxakHVayeXDHU0voCl3TPxJIIoWUZu6qROCILk4xRChXvKRX4uFWPCrnvnuAlHuR8uvnyend6nDKDplcI45aJi8u2HGsaP8Fnjg4Cgu6lHJCdiZQHiqPX6ykTFQ7Hs2/M6qK4TWKME4L5Ihl72OyeBkQytZfYZCjQTNTR4L6Y5MRAxXebHmjhyrsjIFw/Nrp8DHjcj6u9BTmlMMrO3gzj746o792bhOpyEDJvfAmtNAZ0wMKsQottpemKYB1S0T8KQ5U5UN6lrLs7uGp3EY3wmX4thGQ45v5q+KKgGsMNIa1cK4WE1VWxbHOzFwwA==';const _IH='36b0bf38105e993009fbbdbf6231c7514a97e4fdc4decbc43643041d3e4ac2d3';let _src;

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
