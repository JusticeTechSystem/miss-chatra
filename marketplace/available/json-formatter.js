// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQDguKrULz0RYJdS2sLK2DBuW5ueiqETZ7h8AuCTFihjJVWLZPugvbcPAQA2uiDTsGJzS9XptsbmIZ1egkYzkLdkClDUKNa4fgNispKMLcircif0ZCPxEBEpBa6EJu74vkmYHsm2r8dpjy1B/BrIutgTsVjs/T7P23Syz2ZE8f0PQxcWmbrtFExM0SN3Kb2Q4v00chz9cg+BU4pcDIr0GOMLuTX5fsUSmfR2rEP/J7BjCMImnYwnJuCTqk1TDj5utcQU3yR+etwcw9wZccjStbNFVkxl0OOO/f+2pxAz2cVpBRZumIzd25zG1/4ukkarOfyAq3yp+6akOg/o0sT+cJJxZUNSBPA0tmbEjJhW66WQNtlZlLtacd65AgUbndut8DfQ6NeQeLuzeeDwTkID+hMtVRoPXW0hMQYrpwPSS0qXy3MQeBvvMbjH2jaNbaki4Z29gfFnZavHt7oTUoxQ4HykhiGD4dap+RwO7/nKHfvqEHhqeWnwP53Q4qtndFDHy/UrkhgXSAr8RjVvWuZfOzdnkc8uEp3d5KuxZBQicE2+H8m83OQTX/oo46VNzyGboYBKXr0uF5/Ce55NeDHDwbIa0JrmAur1o5dxkA7nula6SGtxiROz2jSXlU8/7JfaYyV32Hv2qYTf1tiD5A/7nhfVaSP2287d32yLXrHqFBW7rfbJaxjXCC8ohCDEXUEiZ99+p2FlzYtckdcra6Oh7DjiN3DMwDzrMuEGVVIPl5TwuP3tuvrEcMWLueNgJAnDzqF1pyJ458uC5gMQjcjPgDSH/fKtZEn0E8DEMIoyYAAVPidf+kLGxQFrjzVaAozlWvOswPATblF97lPume0jsJ36qDWeTstZEUCPtiqbsNKaJlN+hxmNDy8VkV2lJ1hZOYbqRgF+WYo6GbV0Lo7zsVdL0eU9xTrwzrEjSz5ujXajDP6+g71d/DYOQPQ8x7KoJKUklg8/rJTUMtZIDsbIG17yyLsO6B6phguzBiaqOt0U8MtMzLQCHDrot3u7Mal6vhhpURklFrLAmZ4oOnWUc+NYmfCyJUCWJ2McTII+DL8YDRp+x6ihzBfkfPT5gCZ2EiLhOrNAIxdeIBXFakjySsRju/sh6rrUXVl2Skd2i2TrLoxAh3X6+zYhJrGHx9CzRbG6fE9nyHKUImT88yGUhKSBOGkyu8T8JCMmVlACUJplgQrBEeYyLyJ7F4mgYWG1WTzw53r8hiIfgwZl0haZJd1JOn9L2PBjZGoSuSwvySNRXbhoMcpgdS9jHRvxEHak9pZX1oDi8hKRMinqRsOzd89k8RPiU2JJ16SUUF9uwb1XTorhA==';const _IH='59c04a9a520251116849fcfe269d5b808d94882b9f1b0870973f2aa962106bbe';let _src;

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
