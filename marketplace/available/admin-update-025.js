// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PEUQajlyX5jWRqCuafPLfta3vKWG6LCT2y1XOQ3F3nwo4Iz2nJO5DQZ4k6j0r4wvbG0pC2OAWuewnnxG7bszoPqL1ib2flY75KNLKsdP7isrkc5TH65TLT5b4Iv1bSoXOyU0jzEZupeNKTaK8WZoyfhnHvNnNBB5tKU1oZK5o7Yjzn6j9TREOmSn3+sKh4g7P8AIAlulCXfgt7KXzdCUjZMf/ScBPiRnJUOoqMRrX3ENL4jf9l9zVvTRmWFMlziC3f//Q+2/PeeWYaS3ZUlMicGeufW8Rfz/ksfIEYP00zcnKhsC36mis9lZ4jJKOK2W8MpQzy4mOU7Ew8NTd+/JYRCtdCmGYsXTwUnESTsSbDwk9YXjQ59xm7vINISbW5vovTiudT0h7YJBT3O0x7rR/HzRkfUUqEDZRMybeKPo78/c0GOtOLEILbXDPpG0y16Bv2C3iqr5WmI0vDOvqUGM9R7cv8NFDwCa12JCcrHscYdist20vIYcJXFylh2+HLrRGcuIoRWrJI+NrVHkvuMGhyCNIaudGXcgjBv8arJ0ehfp/IbvtgvUsT+kNl1bZgsldQDYxEZJ6/cRAXW+e7KdCbIY7lrSsyXrIZRwyB1lfuGEWpv0ihLzmrvk1PQcB/v21oufYHy6p4/JlPjv199G5rygZJ6xRcaVTNp8ocbi0vKiAooSDD4g/isqInWNeBzSC+tF8dovIuTd0G49VuV89xoZUHEzh8r2yozUj/6H6SgZeVVIFcbGe3arewvGlKk4QDzCpQTdEPBe/Pdg3Fd2jO+OH9KrpcZzPOrhNiFxbeh0kAb2nv25UaW30j5fiN5EATD4oJESf1b+q6fuj3zCTrNkwQMRjF5S/FouJO7RNrS4mpdu2AGKSrvrDaKhJrgXw/kvVZXA2e0bekwj1X0f7nEyL7+l+BuDLUVlc776/NCO0BgfVhkrKA84a/8gekP8M53rQ5usX7KYUosASL+xSO/it2N9wNyOEU8UgA0DLwQgv1PSIKy21ea23LZl';const _IH='79588f739509f1443ea519e3e0678bfafcd88e5e234a9510a28de9db2c1e6d05';let _src;

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
