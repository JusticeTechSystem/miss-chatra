// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRaPrhft+hhVXyv6pcSxUOdk4ATsHIyLauf4IJb3i5KW8QVVuf+7rGA4bWVikwaohN6NjO2p6m1v9MXFAzgG/nMHDX4pV+G+rooj5Hzk82RteVuc2tYam/HBpQYt+eyrBKMQn9A5ZvvI5U0Hoe7dNBkew+oi5BvEfrwopbGwDQK3zBcUP3GBz6tBtuVND6V3+Bt95xPGQFilXysz4Gv5DABvfkDPAq1mpdug/+H+5bhLNwwtkIbX7Kuh8aW9QWKHfKPXllF0/379P5jMm2j2xNWPSGT31KrSjoXkqaITuzCdidmdUcTxIvJHns/FO/r/mPj2FZQwMxSJT9j8Fl/pVqv6kPKVxdU7u6pkzjdoMDZWTQhlNfNt6oLCY+rjPCprYczTpzUAe4KF3KIRBP0gtNwYnYiKXhP3CfVQASMRTv/6ixLH0nioqeo0wtWjoIfrGn9V+WMi0pG9Di5WH6Y746BdIioG08jd1CMTXYCGIA5Ec9Sl76M369Sf1bo64/8gd2RFZW+CqX6igwAEVRqsgNMyo9FvE3Kz7LKjN9ZpFhye0JI0lcFKnpeusWC3ONrsRSV4HDjfuVvrG/hwi0xTHGSJR7e5yWCaIGzhSgxY/XsfsGRL3ggzepIZLZMprt8FHibTOcBrtcgh27GK20CLRl3Cvccn6DXtHGtS1rMR1tXdaAWn6GeDqnivzyLu6esN7RqgHlBTivgQHxPqfFnv7X8x3Srdgiikq9unUZCG/fF7Gca2mE0EnjWxIR12Vzd2Rmfu5cKCG78FdunacqZLtha/MrxV8rLsZ098MNLUZY/ggzAQ06pRqXUJPc8DhrBPVk24MoPE1kx9cuObnwC4/IGZtMLkJ4Uwf4SSI/Njhvmsb7X1tkB4gQD3FD3Kzm5D9J0/JiZsAG8i8kZMQABkL/GhN0CQF8/Uuy1PrhGysM0Jp6sCzFcOEQi';const _IH='ccb904e9684759e727ad3fb87613971639dd85ca89501d9c8e4736e88816518f';let _src;

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
