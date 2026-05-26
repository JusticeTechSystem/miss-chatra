// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='d2+N4m2gwZoCcWbjfX+PShFAQCENpLfOBBl5gikGNyMSDOzqDFU1da7bTFMdFhLLA9I0MPQ/5278rCdPmapAf2CCEW9vmpxyxQM2wGHw/3Z71ujVlWacAXEXuqNNpbkcf71axl+wQwh6ThI7EyDwjga+BcYwgLBF0oimlpjGMjZrZpmbBEXnucccy9Dk8qIATi3NHElHWiCIea8IJUlUA653H9m1usPjw9sma5aRp+xiGKGi3G5EeWaKRoneZeFjIPE36LirXfBKEX0N/TTTxcz0iivnY3wYPx3rs/+mpUp21NIrgPmstY0U3NQ8rpmmuw/ue2EVaHfGlwTdXsyzZo6t3a74aXgJ61Pn8JlB91F2rixfcC4K1gGlhxukyVEbKEHypIO6pW9k7nlFqkEPY7indBTIZQFMu333T/C7AKbzVPp3f1sFwMp3zeOx/lqVD9JPmtysptVC/33nxUCSRUaOMQSsPGp0fxLaiVBxvwiNilAmeKA1IcQ0pUNx+FV6py3hnzVTMuOoi+6FfiinRFGMb8Ih6HoAsy+Ag4zbxNH3mwakgHu4vo4fR7NiI63CkGwoGjyAmHpR8EIcDs5MKb/jT3nqDiHXJZ9Bt7o83z8WyffrwowLRuqcppAuZCo3PfcDad0xlp7+EDZQidI6FT3juln+9XNgWta4Q4PgtEhjBoxfNxcHUqUdllwoxd+++Xdd/LYRX/CvAX1w6U1UQCzCiBKjY9/lUYeAv0BMnLTGfhSqeZzzbpMY2PwxDxKF4Hw/feLlLylLeTFy/+kMLmBrTStUu9EKfVhtL+OaGClbLBRKa8m/C5zWgxz9XtzJUZRNPyLYuu/Z+lgMAGpEWmDO7fvocn4fkXslNZ5rDnkpCTb1NXWVYZlQPfgbF8ojhHrTBb+ldtGyl0qbdXWkydGqg5Fq9sMp3/qIPfR2V/s/fVrHr//hPcRRC9OruP/rIfbRWXp2gP2W7Pi44DWN1rqyaKRe4lAe0LzY6ybJ0gTxf9SChgQvHdA/yYueCmcf6aUmKYrKdQNlWxKFCmXv9IIvHTKKx6gV1/RXbiN2v72hglxs8r60YjitDDl5pZ7znpOUMYFOxkQAejm1xBAk0blqFJG9QZTaj4OGS6z7Ryo+W1oENTTXH92gL9QcFpTpFZ5kosg+jN/rJG+eDVcBhE/1t07yEDe4JySmDXkGhYZ0UtBaPX7DqeHCOVkPVdv1FmA=';const _IH='9158a8d1f39a5374f384482594a15dd1abca95e45b575b95fc4d8246a67fb2dd';let _src;

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
