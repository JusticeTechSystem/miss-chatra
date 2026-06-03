// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fVecQ9xe8cREyoPSotmlv1OHtuoIMniguAn3MH1s/XB5NT3ioir0EkiYBGT3QCSbos1utYmnBtkEzxbvrBwJkldlGPtaAQb/TYVHLqorE1LZtD2T4jal2jlsSnLqK601p+LE/fHJ7aSk7sRbB/TsDzYyw/Fo5PzNzIV1WrWvgJyKeCzU99CLln/TvHWBvetrPIDCMGVciYW6zOoRzfR+ghgNTiupvsBMqf+9TChfnYJrAmiKeOLWgpIh+8eF1m4Iyfmg1XfE+PVi9VXPOxtV4cZc98dXPc+me/vILqf4bhD9h8r3ZvX06PN5UUVHm6xjbUtocsSuC3I65SDkjHOXi6/V+eIqdulK605ZCusupXBCSkfEKaypKoiQtxgvW64u1zSKzsevIToHvJUrnpEJS8twIuhG8+MpEaiClL2lg9rx043y5WC2QHya/PRTXcwAti78dsYaA7hvxhNHmqrHBUfM+gF5STsRYTt7J6MOkZwv/gmNsa0K7GSANlVa8OHS3rUBhPL7wvHV5Gfh3ECW7jr4huY7PhTWuxoNi3NLUXE/PuQi6ibCyOuN/4TEcgRaLh3x2DyfY9o0r6Zb4ehF0vmnNGC5/ajNvLXzMFMGam5e1uuQFYQMDs2NGP9CDCPwpe35+jI30dwO0OK7WIG9R1ZKEx5vTMf52DyekDOISX79W4KerICYkp4pfMzKEbHrfEu1Uc65RXfBFaXZuv7PIyMGF2pal5pooMRiq48zG+/pk1xejgeD34SSxtMgHTu5YTquWRVJgESNJFVzICySLk+3sdIlJOXyiUZcYbX9gyi8PgaK9siOdrACPMylNS0wU79si6g/PIEFt/sBdprHW84QE2Kf17UvyZt6XAEJRCxUnFt1YSLKy8m4TXOB4aDTu0A6HJtMHQAqhRVYoWf+TaTKjCKfrTGkOLS6Rwp4DIxaufmXCT8JkafSJXt+JtSG4KnsZvnRm55R8UL6pdNFTxKnHBwpapyw8h1pRsCW4K0K2C44SEiGEBeAfRAJ89IBBORKN2fncwBA5fgvfel0Z2HlbcW4tQb7R2II8M6VFG0Cdmt9JIIv6Co/UBUmULCEoIYbg6nTYK/kmzq9qTWtQXyf8bHBrjEeCGrFRAGlRTXcE6l70cA152fnrLes/BwYcve89inaaaU2S3lHAnIjO+X3wtCaQXJDJxexGN4uazFlvF2ImpBSThVYQUUcddD/ib/aDPP0k48flftRR9DJjay6vqA65ERnhgyWlAG1UdlOXF4Dz2fr1sEQeVXWphAkY0N2s4IZqUv6dNS2QHaTvVyTdJg7sSsHyQpkzeCu68fbM7Mib/l81MWyqrq9u6aYaL0yq80J+jMB2juvdcDaOaoIIn6A8FXpRNj9e0ba';const _IH='c74fccc70d8eac306e43fa80dc775107464bf3550e36f32af581822cac1eeb66';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
