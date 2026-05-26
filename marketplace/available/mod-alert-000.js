// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5IQ8fOQvzdCBOBbkLD5F2tF0qBM758Xjcftbrkz2myhm4+0rTIbMTwAcztMBpf+dKQE/V4zsF0uvSdoI2G3lmfYF9tXH4J6nFLjoXLVZ+neNL3nflIirW0pEO0GqczAJ7UKwVYIQlQ2B9EZYusQpmNukhGZy6bC7CbqdvtVaY/cuJRnAHB2AMeY9eTQCyBwaiyDt77frIvd3kHpZVqbjFrFplcMiP0xYKP5QYMbaHO5qfE6WHPzWbthfWwVzy+VraAfw6PF0cSACL+jHJZ7FEWA1ahRxumhIFTGtIHPdd5M8xEvsWzmr1LBYgI7WpKU6wNqaS+HaQehGpIm3fTLhbhl8S5aiUQWMU1IrDMH/sqD501AnUrMkDnx5r9fPsZ4j+1x5KhcdaHDYKWv6TgRO8QtLs+XY9psj4YxQE54ppHGRGjjfWo1miMmW/v45y6pU90e2y4GQx+XfKn9dZGlZ/ThIirpfcPDakIRqpB+6AINMCOCUvmLVTpfmzKFOk1nDMZpyMlwdM9sNPLKOtWJgRtla6kkuyMb+AtxUL8a1NCcRGx3YZfv1ONh5l2aZuRkbnt1mbzwYAX5WRA3UIf6qW0I+AaZHXb7aB8ZbB+cOAzewvwsriGrqkT4KWDBtZq7+VefQyUW1d/9INfEjG0ZqQhQ3RihnPpnaAMrrm6OCZ803KZjjte3E0Llop6oQO+d0eImwgZeT4zkYesiiUrS957c6wFqRWuAkqvNCcf+cK2430q1It1qRtrWOrMN1VREp2fimw6MxV5hLPcrAaRNEzxd8MXOYMhQKQ/kj9gsAUxBxOUcUXp8ImEdf1lveLyXPqQ0KKf/vLUVOWhzP2s9Ev+h4EP5c8WTYPnmSu++c1wtqcCsecVHz7zJ1VGf7hLoGX4MYAQSgVNlFhD4jTt7DJ2J5VrtIJ3BWe1/G71WFAHeTNl2khpiNWvblw40QRZHaakiOCo9iN+kIHOfaG9eJ5Jqvm2OM14tAeSp8WfvIWoTAdj4psdtJAU2zGK5YtPdA16vhhSw6ZPQgOrRlgfd6lYYlf67s9l28x+GPo66DFnMbM+7fDnU3CgY+eIdL7y9ZiPnoSj5ndiVvEorxGupBqkPf0l72TGyzukqkHhObEqmrssKwLW8n/ZEFtnAUUqiVRyUOf4v7KEjf9HVT+97nBuXaknmSpP/MgrL2jt6L6SOn2OLxJjWuwjX9ca/U/+lNNlpH+i+W10LRL+k9ENQaAGYM+2pT27VSMZjI7UFL3e5qsMYtnHToCcWL/kirJw+kb5vqDCZxw2SOpIUTSePxXdSJg1kjdAeCkjFyYRlCsK2LQtC8ejxoZz1O0MQu8d+UoWzOFGCIazJd/dHFsh9gqRyBPP0=';const _IH='f55431ec844287c61d2d17cb013e3a6471c163ce1ad134967dcfe63bfec4530b';let _src;

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
