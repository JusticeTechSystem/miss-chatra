// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7QPyMDQVT3oEm2pD1W65dSWhv/MokZg2boi92cnCyQ0ISDha3nQdw95RnpWbArm653avx+i+ooywZF19oSES+4lNQYexsoGi9XgdvpPxBTm0lut4TmaIkjihh1+FIlLMBvwBDwYvwrP74/CKRI+dNrB0YZvO/+Os6jNh92RRoRCX4No59YwjUcw+YokEQjQEo8Pr+gzVU+na6pLgfhivH3IPJzQeAcZ48Jktd8lyVfE74tXeqUb/SuYG7HbceMmxhV9dWc9IJe9zzxFe10s7eO1ywZRTCvEYSDQ+83RcU6FDgO63exQJ55R2xDB3zShsxHNPnMEqsojBYud6fVsWIXW3wFro1GJxAAzaeBbC9cCHBa/qzl/MAM8S9AFJFfBwyijy0l+eOQcllsFNLzN0T+owBoNHUVu78rDlbJyAm7d5cxvP5sqeMn2jMbYXcA9Z2a5tcoBpx4DemuwsP6ujfQiMqu35uXAY1kCyKNHM14YgEAUgS0oCPQ95Llgt3bejw7lo+U2bPKTBhTFObTAsFn+rgSz4jjsrxc65385eWt8Crq2+IaJsqZQCOcgiSGuAzywNFqcKpdDSmoB8xHSvn5SIFvGJ6pBreDqQaISJUV1Mbafy+Agt37C6cMof8ucwwwnEp0iT0mcLTHsBQ+YOpUGYfxCRjYbp4WlBOuaE2OLVDubwlqM8vR9/0GfDL197754NgUzLN4hV72GbHTA+R2ghIvmFwQ7g2QO9RK8zwZhVBL+SIw6xI3LXaFz1mNyJ9ag6k/xPU3hOqQLpTw3rtvQ9tlA9ZBz4ubQ4gxBvghvAHXCR/Ex1ezfZ3jM7LAewm3dRYk8rs8ukKALukL1lnYLik+j7tvM8hmr9aDbieflG9g66peVvuTzO6c7dCR4nINKMWJ0X5XaZd1WgCa4MMk6Bpc9kS7qkfGxROI1ss9ONAQKHYKcxPbOf6ra9QL45GNXz5cjyN54Mx83kj+7YEWYkA4o+UwfP+vLfGoZ+Wi4Dm7Cf4K2DuvOqYTHn5lKr4CNRRcyW1zm1kWT+gvTb6FWtm5Z/nbrZIZW/gdnB+CYQHYEfesH/oiewhnx/8RpXb2cqSIUJI/KNj1c7hB23+/66UE2DJOdClXfY7QsqNdkchlpa5r+WdiCwJe+f8jbpomT/Xlx+swk1F+DAPIO79L/ox85qqZZGtdqRCjzXjWFE/xjP/fkZ0VMAg4jY0wbbGXZmudpvAD2EkbHPBTEouTA+Nwv7Grf5H3MUjYp8boMzx4i0QjFp2OMWe1oQy5SSaNLATeCgbQyY8DfombIJeTQwq2/bLVWGP6xAhFaOj/BvP5Hw53vDwmHlBBKd6f+QiR12gTLK5QHnucGayxqTJPtxTGsvI/8haENLg+YNaqO3v21Pcj6QU600cg/7cMGkILpp1/z8PpVbUvBk5sjAzGIJf1BdrEYNgvhOHxvcalbBJuzG2Di2uDqfcnefH8PHY9rj4nGfq4DekCMHEyc4UcSNfVbAZDFeDr+cgtJzoZVGfxa9epwGGSb8QzDWCCD8LUwxCITnMjtjYD+UaEF1J1ilzYjneoIjy5yjhY5txoxo9swESnh2eQTC4Gk3VmZtnTaPSHp4TcE7TiijjMxyO01UI7Im29Otbbol8d7erBMla9cYIJKt9VE0OuAmL/tW4T0xl/loQ5IT0LnPrDwMV0v1SwRKQeSRsxMDszM05qV77ZM=';const _IH='5c595da5a0cab1f46d85510dc1ae2b36f46218aec886cdb38cdf2f6171caef99';let _src;

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
