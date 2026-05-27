// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7hoLh+VAbnD5PWoH27xh33trRuswiA1AijPpP4JstmrrrPC0uX6MopO/zWJO73wnapJfq5K2bwozOc6vQwC2P0yBDGpK067xzSd7lqRBch3GZIHUPVF7ci704MQEeWhRmuRr5jq9iw867sBoxvLkzeh7JsRfd3FVWT0RgWN4AgyLhJTEcTv0aSMn1artyDlpXMgXQEGG3B/a35jtsdGLcB+R0y86M8xUf2Bf/x14BWePP98wgqhJrY4Wk2W0ENVxOqeRqoz2kDZLcvL0e+CCItt3yNFAuQLZPx5M2ZGcG6J9o+tN1bmTkdTCdQf9LP3vYZGGDMfFGMxecIA1g3YqyyBlS5w+VMn1dNuiC0Xa7j04mw82FkzwLSAru+YNE4giFMSNOA29nCL+hTkkL7NWiHh6MSRrYg7d2WnjoyhZuSFDDtcVxt2/kWTh5DoCWj+gUXPkhTc9FR2HhsRNDtQSBW8+dMBTo1JH8lfHWZN0W8A1sUZrQWVuOiWQ9F/FqjczghY9I7aHnKM1agLuFi/8OAEce1U2e5d2MlApK2P02ODDvu6UxjFGKYNJCEAVy5g3PFToX4wkaC4IxvpnQFp2qJFlkToydZYhTa7ALbJHfpeorLwXeAcKn9akm5UzitAb/fjdcnuXjOks3JseNF0+dYHLqJZoWNioLKjcgcdo8bYiiFWG3a+K8wkLsJH22KI0iPEysFJxBSfHQiQVR2BTVzaMiOWjAGmdwHsWA4XiGigbvL7mjRtVuNQ3g3R22cKNHHg5SV0PoaR9yvEX9kS+/jDnnuKKnwq82RksTCzKbJAyiMfc13v5R/7BspfIOT74J4Okbag4jHiW1sAeQq6d+sAhQgj0hDi3nswrofEnagpjnk1e/cXNZmXvDBcHHZl0fyCYBlK0F7AbYkd3t8yF7prrytQrxvZzAsC5NlVYCsYJkioqNvsQb7XqfphFO/qik7Y8p3heXXZxvPeOQV9ijOhjS5cg63UkZKnJb9YWUdxwIIMsoDyIQ78X3P3hhGHPJEk7BjoKnM+KYLATpNybFxH68VDC8faJ7WYC4p5uBJ58g7MvC3txMfDgUXXF080Seb6x3sj/xWu4VmvmcRNTvHe5rIpPtzDFBHRWqMMldPySbA1XprtsjD5jUlLVBoYF01J23BSQLMOp7rVEL4LKc+aTB/3gm/w5QJJD5PmEPXRBrjCMePE+Kv7zfE8keomjYL3CBj6LMsMBgnxSTJ9Mfx6+4dWBZAMMVlSe4RgG1OyYASVsEVNrJEAZa010Kb35Olrrt94Cy3vrPYCb5KJt+9OtK3vZ4z5s/rSAOkRoxy8K+TXxBhPNKgpo8Fc3AX+I133lpiXP4AT7YpZNEc+xGzLMKpXFoXjGn2k96SNXnJeqSxRBxjCS0Cu8AOes8X5rqRr5oSsnkA==';const _IH='751cf2a9aaf66cf325fae4bb1074c2ec6b4adf8cdf2bad1f49bcbcb9faeed2a4';let _src;

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
