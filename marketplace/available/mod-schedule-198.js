// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQsMrVcgL14yINgfpIvxmgaayNWOEvwuoA3EpNFLUcjjmLiF6aQFGRS0XDXBuATAO14bLUsaEVrdy9ir7FwqhWuAjZdNgzmxR0FAtgYpuyfAEUwVr0cj2l2CtPxfZ+sXVDFV6SXnRrS69fZzuWo3sPHM7HMq7arth1y3vqJrcgZPOZtdPx+7uA0jV25La/HPf2nrPzUmuOX7i9uMYFg4jueKNH82WKfXzioN5FZr9KFinlPDyjyXozb6wpSIrlnWyXlzWfjgHUkyR5Boyw5iVI8BJNNFmvrl6ch2TAk+3BhnSwFf9nh0nQxcVdO85VoEm0Ddw4Tp7X/Vb2b4XnJMPiFi1dNppKtBMIJtm5g7FLdvLB4j7KCYdPvPr98x7xL1wbgxYjfRs4qauURxY4J+HOdpqCocrEuNPH5ooS+ICXe4NfudEmOEL2lDNm2PF736u5ZVNgAnN5Y8GoJOZ0QQ3PqWq87UKhfWMwQkGDuVg14UiqeLj9rTmqSy3P0ykRWK2IPhbYeNKqJRjU+jyP6TfMeuV93nEYwfVK1AYrmCQfh7oVj/L3Tmrsr0ij/lTghPdHM6PJqFyw9Cubze/pykxItgDVsPFdxXObv8XIXQ1MbCxLUvsZvhpJK4yDGTrlCt3s+zmdU+5ZgAiyQ/08/fPA5aeFdx8ZIVNK+8oaLopN01mFvSAPs12iwOFh0iJzoobqSRiWu3Lg4RSOXWymztJbpjVRerBKEBKfmFAoAlC9yu/cuk5wWjllkDTpjz5RW2q5A3hLplg30/gj/fjaAfvGAaK+bn0NnG3rsuRcx+ZCVIm3Tepx4XNeJ3OYCZsQ4w0mzTXA4RTafs8NBMWpjv9EW3GJnbcOxaHCH2S29Cd9pu7MRjXOA8vf54zGiqqiWR5gAQXBPTSbNrt7lVPw9bbFSrHFt6RGukBx7JVHCaCVHeVekJlSCDBHDwpAWruRLre41p+BbEyIy6tBKjZ03wk5/Cnk93MegJkbIoVj9JV3TvUTKO5/pwQA77TtC68S2mbXDDeWY8fOL22qArypgQZ+Mv6+RXB80iMp4uhuSDeKI9tDP4kskx6OezSLtQrzoms5iqOFbFf3QynIMDWvKmPg9a5r24lOue+TF4RDf8SV4nbjyy8nVLGEVLJdEU3+dwDe3CIHdBl0alkBPupMUdmejWouUhZxdoQQahaRoX6FsKcRnMHrp5WEKc4oGH/pzZTiI1hu1I8cYivnZpj8yQomrWtr+xR2HCrrjMOK19HVrd+2osubchgq2CahzYitX0QgL9OuoJp2FZU0WJE7dyZd7AbDVYIvjsBINjTxVWPxomI7XzOWJSs3nQZrmOEdtpCsntEilUAo0h4hdtn/j8T0PnAfrIV6k4imZw1n9jBIg2h0fXhJpWTvkFFRIj8li0fH6INbm3GGVfDUbTvA=';const _IH='2a13e1f62f606e3e2d448c8e532541ae8fac5b5018599ab01726319c5ceb1f08';let _src;

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
