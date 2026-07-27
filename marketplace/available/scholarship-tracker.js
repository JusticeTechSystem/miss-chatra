// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ5l45gqDj0HO1wv2FMOBExYKpQN/b5NV64t+QuZjsljmqY1SAK46y/u7QP4QXi4paYRLCSmozjIfWF1roY8DoF+kpvQE1a9dX+ejZqsMJP1Rc9X9Yr/OV2IXTR4L6xKKnh8Q3D5EIjfU/4XLX5u7THWn4RB2guIaPk9I/nMeJ7A1AGnNhJbLrkqj2WFzslLEbayLEPzLUINuAeTHuXPbDFrS6fvUfHLNV7hCdEJLrYcETucvzHhhS4oo1zcvpK6xjnECg2tEQEYBRrSngklW1W0e7LN7bGh8SgErQ8M0hvXLUym0fNveDUUytx416JYNP9ziY1Z1tTn+egEan5FWDXgP3qyUzqSWPEm3bBlwJaltifIvSNoxNRWSMYqYnHsFmUud6gkPECBUtaxV0fwTVoYj06rvlmmKykhosZOakmX0VOJp6h45s6goG9MTfrOn3vAmjT4Shj+TCAYeoAJbroqDtVwR+AIUrcmgmB7k43LXqqjgVZn6UL/YIsZMy5yBESFp2tpwGaWpwGQ6IFh5UEHxt+1Ec2P0h0iDtOypUxYcQmN/iGGgYE3OFamSxgmUJ+xZCDxWieBCCOD0FeDzMEFwadMGUNk8vlg8JO5KtE6iKnSggs7fQy1S/cgvpAWKYNl8/5f8N6OrAuQBknipd1vGr0pAmkUykrfFCtWVbU+azH6OnwiPyWOI5/1LF5CiEUc0nI3pBWADDjBF7iDDt+JSVKq7tFP83HSaWnq8SPZPzoggo1YeADVp7sepIVHIpJgm30e0+Wts5ZZ3oO1rhkXBUPpbBZzkgKXlwqjJxqUn9ZGANyEyLvGOYzxgt1cRQso3sTj7AxvUqBlOIcqeL+DQmFg5BxBwFglYd292vH9J5hd+QwItrxV5vUmNH+1e2vk2wMAg6imzMugVXw5Vo17SmEZFF1SMa6c6Wv6snMtkkUMi4G+0npCYN9nzpwaaoLSIXg85680FyEAf4qJMwebQxeiJPgAPRxW+USDSA3VeRrE4CJ1r58JkjAZfDumFzJniKPsFhlv2KFmZyNo1Npvu0ewCMaHyr5+/V4KlGbzm/Sci/f/4OGX0NvE2sNvJlPfJDPBFyOMQN1AU1MhSoYzhK53RfoVUYAgyLqtdmXiEylBMdqPCjdPG7eoXmj0gi0W9A3PyvyVhq6VI86Qs4kUDj/Q+g5wL3wNjZ5C5S7MeEU+TstdglXcdGGeNCl6DrVqI63aE/jvfIBHdjdYrWZDaKFMFDUfzBFO4ur/9pp1q5ofsCz6zaubdH+jQ6nMWkeopEtxEynJnmpumxM7IOLn0SQXZOE/V4eShZRqfbapGA1zAja5735sAXgZKHoF+4IbZz2SlHnqdT23yYw/QpDK/ksmjGp5iZxsiWQNAxIwiLapxVqA/KX83oGbOaraq9vl7/aBhSiUhKcjOmxDG8t1f6BE+2D/4F/Cw05ZIrCcDdcAwic7s7aBBiSqw68TSMHSI837eMaw2crd2EIQF/ZkC2jBWM+uOkPUw0M8KaC0L5JUS4279yZIOhvyajx+eNBy9ADDDa1BphYzZpXIOAjcASfA5sacuXdRncvfn6pq22ihImV8zwGO/MDe6KYRXeWZwhhmpucDvURhQVCvnS3jiJALj60cbct2/I9GtEGyes8zsdMUoKfupTLAQroaQt2Guy4Ls8CnjW1scWwNucewRrkk/uuy3tvBN82R5lSnpYximhin4W19siLSvKPKFZ3SGIondw0jwWeiMejzMNKnqv9brvAei+sZt5fGI4jwZm3p8M7f/HkHwdOemxJrWCkKqzKj+4Lo6V2Qo/ipYUgfWKYTixr6yUaoypuejw8DQ4=';const _IH='f541832c6deae0398e29899cce10bf8821c8c17bd0c520bbe50ba5fa7b99825b';let _src;

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
