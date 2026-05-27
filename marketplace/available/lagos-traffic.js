// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9M5hwM12ulUnt8p/gdsmBR5e72YiK5/bu4/vcPLrshB5tUPgyScZJ5wYRqkh09zFcXwit0zslfVNcieeRkkMV/EN7MeV9aQvD64YOmQr4GKqo/ZtfFPOI6Lmqy8mAO6cGd5tcq+B2HGQLfU6iRNA/z4hJLsZSkopCAXoLC+Gmu1lAP1GAWsnKr5VBCAqcoycIoly2YBFqUOLp8uQnzx033zxbH6xlGmHK4aa5QaMLB5NakSVj4I1575rKeSRh4B3xyGjz6fadGA+68Ai1D9dLhgJj+lpzA9AgwC2IO6mxObwkSrb4IwjC6UWzbB/tTW2X3Y8VL/rszmJpBmzKzfhC6/YRTp+EzPpi/aAUyU0tjR+ORl8yvT38urmU2ltoovgTf9GtFHkIvdg4XvIGrIgE9zEx5G9k+5Ct668MJwIY5j5ynTCM7S/4DYt4m6NUpAmPCPvSxTgYPScHdtENEOB7THYuxBHzgVUwpdFez9ey1gjMwfpwXo/GWknclxcPAOLp2n0lV1DCVjhxUb/Ch0/Sf+OffKucixL5ympzhMwA+2auY52lF0sPl1TkW9ulW64MilxSsH42iAHXwiNdSIfi2pdmdZ5dOj9HJ0ySp3aPCaQpB3qlT97blOj0wcFaKnZQpi1iea9IdXF0QoJcCKKaWNVJHzpotzGiqvcSI8aSFkatvNIgdLXeRJ+XCeijS1GoqdPVbwUoZATCZHm3LXoXZaoK7PXZIC82DMtbaBACGiTfwS7N+dgkil1yGwY7jtlmAXNDSpjhAXRWnpUUDDRuUnNLojqLt56aa+PuEKZfJuwnIBg9uZ3/CNksIeDajNTupJCloCNmnxYe45GQ+wwrVe7X3E0zzM3f0tBL6T1a96HDEeNNgOJZCKl/Pf0wKfeOknC7O5LdBYflQdIIKrokRMffFZiE9AHhYK5VHkqqlr+gfaOXzL9Vy1oAhR8euritu3GItJhOo/EJ34civL1W/gUukJNK1xK2d1TOf6PN3weybygsilPnG37ky+5yTOy3r2OGvmZm1+G5sl2ANW6YRQJRlDNL3XdcZPldkH3ge1bkDcSS0hQGNa9cS0gGoJ5Uk2XqxouBBovnlAkQK3ld+heONS2fWGRd8LXFphRDSbAVHXmiDpjJh4O+cxfoSYxmhDCKymrcNOUrlu7QcILDusxGeKKgFt4OPLF1xPf/HAr1KLgpSyiNu82+eiwt/Yv4Uh7O5gqKzeYW2YUMPtR2UQStRD7rqqfUPxS30anheCUh8vcs1zCpL4hHGSg5hYdVevLPEP1sOLWxMgZqXmVX/3/lebWfZN5W28kKeRVGjmGCSl6YJGPlon2FWZlT+/OzLeExTHwDtMYREQ/EfDixSc7a/BEPG9UNLKeuOiT7yoDkaqh08TC7okxeJAn7e82zPo2ukZpmG4tMD6XNoenSbcAPRhfBfN37TBCqpulGGTA7mM4xlsWkm70bKvMRT3UP64xCBLaogDZ1J3eG0MaVZmbX9rWtyZ0RR8a962H0YofiDzzjYIg00l9aYfW6CGBQ+dekaTPuGccUcDaBoVraDpNGWxUh5UZpTYK1vRDghEWi2XwK2NG+0bUuCglEdEENdxnK+MGq0TS2sDUe3iY8v++5OBn4f70sMEJ4MYWaedkRMIWDM4+ZC4GBUwOCsI5BLUlpTrrdXSAJ4AO+lcLYyXNazokyi9WuKIHsS5wJZ0PuJ+dAA==';const _IH='3161978a28d8cca7466db8d50ca54468ea3434b2987baffcc21a8e2fb886b004';let _src;

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
