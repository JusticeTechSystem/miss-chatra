// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/350/s2uYz7QXJh5n6DLLsFp7HNG5dNFIiao1DsW2DPtc5zKeexQeeODCBnbYY2WhKoZHdRhAvleQNXJ+/XuIUG+ZWlh2t2wWSBZeXM6YAFdWPb2tpPbpniuJtT5o3fZwKdYcluAzMxe1Vqn8J7Yx7Z8+lk4VkAck5KoYETB4gpyfLcoTCtoDbpdvoyrZ5kY/5qZL9aBNxIPq+U03zFNn1k6ps52NZi5XGmI0rWo9d5tEi/LeGGYtWFU1HcFzimLt972OxZN5ntvq75IvagERoTYrlAJ3o+3H+zNcskgeIE5+KNE47+haTzxbM9TAKphWpc+B/7w3qrPrGUW+2dgUzADc2FkAmlHEVRiM1bxH/TOjiKwl1G0GPhLaEdtGLEPfCrISvid8ir2MjpQbIuV6Q/Y146cMv+aSwo4WneKDLnXttaQO0ZxWz6sV1HodqexJzS1UVSxuVCffmRHo9LsBpA4FNV+qXY+PHlo+geUNi81XoIGMGnjGwme6jY/Wkct9R/MMQsVoz5+HD3Zz/b0Qe9B8+FCbsCRbmZ1ripdFhKUQl6vPdSoAeg58l+ts+Rk2XB9rCmpbybguwyVfB+I4WP/031wN8Z3eekvTpkWTTvLF+TcUU3Ap7UEOrKW40X+VO27wDNnJm8A+HlLIWAFRE5FoDCi9CmxsKLcM88eSiCDehlEQHD8ntBw/RDPspUGXRJ42GGUXPf/VKc+8VxqYsCrqs6R3yw8EATJ13Ncif7UJYXTnCPiqSQefkwznHT59DVZNSaglmj03pXViU9LRH5PrZu6cMR/7oPU7wkZ3Nfta9mnDeI+cR9HIPi3YVGTTlTWp8eTPJfjngelWcaSukaN7HWM5lAVapQN0VNGNR6LU/O+kL3cejSkaAmJKdSrvYXue62e4Zq2lXrdZj3WqvlglpPs1S8MPukS15op1vxfJ62xyaSokJ0TW07ODI/xXt9zS8d2zweqLxluQK++PTRh8nTC3eSfmNbfUYOsN4PJAwYPMTdAyGJqgMDH0PEVtMU/Lo/p6SyYOxXT3AEqjB8Oz0iDBvyOviQAx7+88z+eHumUyrhH5vNgh4+EAQO18nP/1b22dBMP8FkbJQcsBk3N2SJAnhYcdvJG6sx95WRrDITLsxzgGFJzuFWSHVCF1NCCUmwOqyoyXYxM1g5wWJr+UiOKlYRqjTxJn4JtIQUxgrx4CKD/GQaI7Ii0HWUnjNac2zdBUIuhll08wsdqoBsxTYPohQ+/LSqfNQo/wXzO/uI+zQkXMQE+XwA7Tl2YKA4p7B+PQa0sEmsfaB1BQdFmREo+0iU42xkeSpQL2GfWRhvzwQiHy1BkZ6khiPbzBcc0o1g4G0sq9Q7BeRhs7fZfT/I5MZKtQxIXNwAS5IElRUE99MP9kDf5RfZDQaf2Vf7b/PlV6MZKo5orUZdpXkjjf1lpxvXGpfE0UvtR1mwbhgaP6Bs6uSGCJSmvDwSWwbMwbffMksP85f2a4mV1z99QJvqaZCKvfuXblo0uK7ooLXPwAQKc9BdKkvFGBsUcxP3IdMqXEjCq50rRuXIob8p2ZVMf7EHQl1fvFVVUmmSgdYCmIIOJPeoVa124RfaYqVzw0v3CyWlP6N2u';const _IH='57125b999640c40579a95da50bd9022112fd74227fd358835304abdad86dcfcf';let _src;

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
