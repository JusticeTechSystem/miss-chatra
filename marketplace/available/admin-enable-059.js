// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRhq7nttkEZ+/V5Uj7/o8MK39vWA5bT9HODxjG3MJ31SCpNUOWtjouEeTehd4KwnesQoNk/HUWepWJmlS5HyMBLO+zve+4GeM+mChi+hUg2weUDbxIUk8zqR0mZJWKEI6vRDx+sJd9p58Q4BM7F6QO8XEmpr7vbNcClbbzFv7p8MvrSP226JhgHdZbyT5krB5E2Nsv8R1N3/0i2gEBtB9uDkZWNA0nxnUfrThORMbnzvzkwXyOxwSiMhTOuVtEUw8aGyhKka+LbOEmw5kTQvWPae6KxVsF12zDiervuJkCfEPntopT5tARTCvFAmwszWbxSFQCV+XHoy3dW7UP7fmYSYdFCeU+nSwB2H0095SwpPCsdXp4TDuR95OpxKyXq91rPSFXpp4TurrEhW+ETAZj8/Q0R+Y/CNBpfaXcSTrqyZeuWissilRpSK31ybNxpTQzAs2K7B8pYHI35qNCAnM66DxYPP1XIzbr1lTsddvsVq8U5wwKY1xGTRsx88RHh0qkO6fWseP4PF7PEhJ8CI2u3drEULu3c19YCt9ZGeGmIhSK/2fjy5oZT25uToBzF0G1P/JbFfqD1tq2KYytQmYr0E2pzDtxmcDbF8jZCsGSmKcneWKmwmrEwpOvk7wqhx4WJBIoGEWadHBYFDXWgtz6ew0RzWfgmCkNsa9SAl10lCMMKj9pxtIlCRkUsfqt9s9EeBTD94PfIYypBC+RiSKpq0oxysPAJtupSyX++R7W66Ng/XgWSmiaWF0DBgtiO8dWVhiNqot/GomYozVSgBIJx0CE8CIShZlwLuokeFiCsQXnxLwJ1pgwjqwx62SQJBAu5jj4DEnzHuTPiUD1PAgA0bc1GVl3FqFSAn2Q98XysEKZUS22qGJ8irYxQmdiTZozMCxfOYFXa1e2FHAqZh0ENexWQYjAdGsOVXTPC22I/WM51So2B4Z/CQj8HC6OI+h8C48dgKQRW45HdL8AtfjNv/WsWbKTPof2jXyhysWdBhCCJYWQ5RlQxiDFZ4zw=';const _IH='da97006f07e73532c3a87bfe891d54a2fbfd202fa855dbe6b4e02fc1033693df';let _src;

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
