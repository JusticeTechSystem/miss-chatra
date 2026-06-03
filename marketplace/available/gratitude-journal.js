// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='glK3omZle85dfx7P/Bt5kUa9nx29ua8Qows2jebTHJzse75Q6NCv+jrMpmpCY8sLvYfHAJMr49Z5IA1Z/EfsAmd3rxdnl9Vk7qIhG96D8Iz8FPJOP+k8ekaTC7yn+mJMv/j8rcfzjPtv4gphoVfhFrPNlCLcDShg/q8KBQ/+bxGsrwVYgpx0kB3Q+Tw/Q4EFiPnh9Uj9MUk9HIH8PMTpSUxxOgHi/n/Gp5HG9kzmSa1IvYdQBhUrhQ8O6faLZ4Q3ZHJujUdSbaXbEX3JNR85licErGYvwFr/hLeRDbJK2SnrjbnGSxFXHRztS+VWBXaQGCPcYqsHBcFtWW/Zgk2yyEmDwKVhaxhHEL7ZrQI4+NP+h/7ldkpYoaj9iuD1/vkWVe9AKIv2OMNzqCsYFOpOIX+KrF3rDz7XP90Shzj34ULPqM3j8kqvjZ+X22ThdgwTUa3nhuzSDbiSO1NxmBRWsGYOkTyTv9e8jXaqxVB2P+JaWM5lbycAiOIEu/Vyw/vUEOPuZCt6kLvBAWyEy0bMjKvE8YCrdtK1I8qF12oW5zRVv4H7ZFog86qlrTMsAqVmk6peEj3D51Hb8FL0utUPGN74f7+sa1DyuZzDWiZtaiUSsJuWL8KgRpRETnUjTjuNSvAhOMLSkX/TTekfQig6HHcr09dcT7EPXv1IEm6/X5Q5xrmsEDGHo2B48Ep+1CqmEF1xteZ4dpOwgVnY2pUKWCf6GQU9zA5EjQWOQyTqNnJCqoWpPft+oYFXj5mbIl4rL3M1hpBJ2Hw/LE806GPn+TvvS2aAFomo7oIBtUveVQvWnq4k9xSEpng8njSOlr90mrkaLrjSe7Augn9NBW96LtPNEbdlP06G/g/zVPSH0vefKYH7yTMA4jQeQv5jSKWLLcfyPu/2FTKacj6OLweAGsvXYQFAxG0cQRDzcfoIH864QN+LbIPDRhzut025YBac8DQQYXtKR4Wi/DMjopcGBRPb2s+IOvLGIbybB+n8+HQ1M4GSRHRUbxkVHK4gzhixgJqiWLvXD8lbc5XeM2TlI2rqmo+nFSU7FvOeMHufLVCC2XAAk+abXdcCvFyT2a2R2WUzCeK+7bVSJJaQroKCfJo2dlfreO2cqjheWn7Qse0ulHdINDK5ncGPXslZlDLSQNlPiFlmRtJ5xKBczmXBjP9g7qYkOv9pDfbz8lUre13A8Z7aBjg29mgBJFNMKvE7sr45hqH9eoc2tTKfJD6dxYUbIsSxtBPPDUmGF78HtIsyIQs4JMcLcu7K4Rlm8cDaYc2dFA1W2PK8aLfcnvdo5nPrPKZnSds19tZ1voKL++paJtl1fp97aHDZzY0g7S2jCiDcxT4ieE2ZtFw7yLIx7ZUKUcZSpObuN1PKLBvWYtUIPPvipvXj5l6zzDUI0CeyWZ+2Mu9ap5zxAHMt//6RSI0lMErf6bsLP7dHOO5VUdU42Av+Naj951tQS7r7ivEK0aYBI6+COTVpFC3d1F5sKotB3RDXkFKkIeBdwDCOsPO9y14b6l3tXsGgHn1E9Q8D8kR9OIx0vX10V4OZyMA2hLyebcILKv5FvP2PCVfPjpVhIjPsPwIanJLj3l3lw6fA6wqka1x6rx/mZvcepo+puDC6PTvuf3mv0o8+jbqys8aWjxpGxj3tyRArdEiz1hI6SSd1WbvDsFcuFE+5xZAOkkg5F7X5Eo7ASb87Uyd+04CVordwwDvN3Q50Yw3u+JKRfweofxluDfuVlH0E1O9mzykLZA08Z8MswGZhVsQar9UIRA0Z5XOAqkoMYYoo1joUKPl2MyhHaKHqGlZ/Omr7D1mvcg==';const _IH='917eba1e717bbf6a4373dc39f2722a2818821aee44bb523208b22637982ab5ad';let _src;

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
