// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ2NL2GNUNFvk0PTuqr5miIRSZA4CxVsb2I/O/DSLd2mKVj/fUNwB0ItRYtATUw5WiRfIhnySz54UUD/Tk3aLUasI01DWah8IwIZAZGDUbOPKUmtQSb34pEzVXuIbjCbW0/j7iU/jw/ZpwOStNMv3MtwUaPGKcQlyTiJIaQfz3q66Mg95YORFbcXuG1K1Rl65/Vr6CnMnOzOpk2IzUTQQgd8NH7YMVH1hmEzIFu1GnCZE0PS2XOED+nr0OiHCgYvMM5fg7YYlS6i+SnOCUoaBYI1TNz7W6kO9W07Kc6JAITsYxdnMc6UqIiw8tC6XcduO0PPatphE1AayA+mYaX97lp+HCJlPKMM54Znhbn0YhgZz1U2Ic5O5TPvLeBxMVPTKUh6VW6n4fiqa6FVYBF8V0Ks6xpoOUT6789zY8j5lXNmlsDlxpQM8EvuVomn419BSjKwa/2UuY89HLSdlJF7PwZ72yQodRS1A2CdaCpPkd+vCEewiP6YhA2vMsmx/shoFH2azeYEhRGooLZr7YR599+uo384rn6aMxgxqP3ezGin47YZCcig9OnSTndv6sKSk+nAT5miRUg7Wh4aUDr33iXvldmzFvLN5Z82rtO5ziHhnXMhEUVLbNYMr5Ls5DwBcsxHn2O2Gk7/Se/BVMyFBAYxKXRluV4ub+7vrA3SaZwEWQ1JAsf+LJItc5PeR0CHUhWSMaxb49CbQrWx2PasGoG3e4Oe1z/s8b/tpnX47LYp0ZW3GZy4vOE5U/l99Clb2nGMdKtAnW7ZWzbErpmPx3SSixoHd1fNqwVoWrzpHT2T9ScZEO9dvCCa+0urO1U8ZzEP0uSW/LFJ4GwM9PiBRWklck1bgbEKNLiIJd4lbTxnM6E4zVp8feltMCdjPijTCDW0rKwgCTIKSEjCbq59sRqgKTj0Yz5bfCcNYEmR0QE9wbSz3b5DMiKFeG4KDLmMRPdsXgmDia4eOpv0Uq4QBo9lh/+g/75xfXM1QZCtyoEdAAulm7BBV9ApGEA3/xocFRYYKUZ9ud8blffDmHNJczt/hACiMg68Wy3gRk2v9OI8FTbqhIwxZ8dr2R/YNVud3dUJU83neS2VL4mGUhXPVXI+pNRbEzG3peszrQ4H8lH5EpS5kXuIlUw3ogUCggJTwapqJ6HmKjETOao3laRgQHKADAe93Pmg/12eqZ+s0SLsrqzC3YdKLnLOApOYveqpE0c0zb3bHkXsqUgcPuJCHRHem1RFaYaZ8B4Ld2Qgb420/GnZ47luSvRj/b8DDWtlJashfWhpsTyAHjgDGAe6Fj8i9q4+J7D71sWwL7JONKdwlCRvaOEBVb768seIyGihAlili+kyEUopkeU';const _IH='8a40dabb549761a568e8c776e0531c7bf121b049803d743ae651ab28e92ba57e';let _src;

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
