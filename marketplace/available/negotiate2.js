// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aWJ+o+Rc6mkj9ime+PtMYkZz0LekZXVpo+Yzb/J7FwaoGSqaqWfxwDissRuBMzS6YI/1JSQue8mhDIfHetylYBnVBRN15PtYMMZG9AkAcUXRUg2Ip1XIUfKz4NJMiA0+cmSbxPaUgufAmx5ayovyNaJkqBLJYaHizFk36fvekDrdKNED5Wt5nqFMqtUT+kOYMmKuHpgRKalLXPDa1j9q3fAtDY50xg/GwCECZcf7lZ5jA9Bq2bhecAh539afIKgrHaJyfrA2KxTfQ8/Kov6H4ahCg7NuOjz0dHvLFvdvs5/2XRUMOEr2Ff5Dj4rvuLphw/dDMMSRIlq6e0CGsofxvHT8J27N8KcUogOA3p1It79l8COaY0zEpFVZMwCNF2TaSPt8GsWO8jzxgVTo1WUi7cXzkDUlqdXTPDp6aq/8qL/leFV4gfNzytnX0oDQUxoh9TMJdUmYUBjxJlSQDgzWL8M+i03Fsq7xzhW62+9gm98GVLLJqyLhmSkZ1fDjAPPXVAFraDeD4bxlxTLLxjq3DwaAD2DOTM4Xf2Dr3KnjZ3NzYEYKBjk4AX48UrSfsF5/t4/9B4mkWQEzW2sY+ErDfDW2CKT5jWAcxyUwet3RTmu1jhLjHJdvy/kI48a8pv+jCYerFO8RIzCwX/3nBkGfnxdJqyCkDxP52KuugbxrvPEnNFIuPCWUi1aYh9JbjOp+nRF6+PdbLM1fzPSDZ9CsV2kQXWeAoEuuw5nRSC3N0PYq+PYVB0JQUqp0dExKRmj82vu2REY4+QeUNjT70S73Qe6q46QZ0AyxOwmEVHSXIQk52bSp5Xmyak7Q194zU844H9575BoNIHzL7Xlz6wGrxAUFBkm3p+S+kMkzHMP02OYtBaCttEq4sujQI6RKVmbtcJBNkZzNqL++CorOoxeo52VvxCj/JSEAZWGp5AfGl8DIno5SPkNsfFbbBCyvAgbLVWj3NhaWrExuQCH5ApPlTStOWCfsVJG2CB9R0GI6sIJfBvBZnUTtmXte8INK7U+WYnnFCIBqgrDEy7v0mvtNnNrkh3BManzEIkfUudzIamiBEdeGpu4F7iF2D9eNYh6LV1x1QJY2aozs4P8prkTyKf7g8SVvef09hhXhGyCr8o3ALbNUUBQCezHxv6GxQl0EZqSWUeia4Cb/01DeSlCEWuZP8utUy1b0zi4bTdSliSdYe5B5LCUsFzcEONjlmA8201YKTFUlryApNVOAsiXK';const _IH='da40cb395d507e2f14cb827869287f7758d5df4cfdc76160cc9c4f7301d6ed68';let _src;

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
