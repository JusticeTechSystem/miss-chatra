// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+p87fisp2xAVSGTCtnavEpCqFRuu2TmhN6SokRawyC2lvTRqmYU5NSMk7UaLN67bLbDaLiWwQidRvHPxEppZQIo7HuRO8fZP44lTxs2K82gT34F+lUj8Kz5DXc5MohrQ0/4lgDIgNXXP5FEwpm1t/RgK46A6E3tVadHidFHgkUEgMu7QCztoi6GqZLq0S9b9WN2BQoO9lhvmDq/4e95IgFk+3EJz4KU91+q4RcS8wa0tzBlyyA0iAWDF3fII8xKt7F/4VizLOnXi/W/OcLJ/Bnq37Htq2UFblBtxyxL0d+WtB9yqpVI/4Wa6l3177brs2Ci/g0ALAydbEBThkaYTzkJB53acm71cNeUf6E42Fpwdq+drVMF+vuvmxLKeMZzMHXaHxKBfOJxfAj2kgVWQ+8f+9UcwXjHCPBa248WdZ2nUqLmanCX35NnmKtgz4so35q7ycR64XMHhl+977GHLoDJkeVkoOqWq6gOoQDvuYrf0U+Gfz8eG+3vhLzar3vEuL4G3/RJ4wCFj2CQFHc5vlm+JH+xT9we6PXHGBFJngYJFnOrdecGiUgWbFCb653rDUckiIbqPkMDIx71QX/qzenkJ6XkeJ6vQm2ZidpXRkUj3KAVULSwd1Hcr4Q+Hzc+aX/B0Mwq/OW9e1p0uMpgol4ffYT9GIHD8vX/n5CWyrGLQ7eoKeX6ibgPI50m8+yNvKGwll97YFCNeGPp7UceWT8lr5QGP1oBMqWHgEl8hbWoloNAnFIj0ZATciyTA3bhx5LTSwrJU1DdGiis4XE3C+68AWXsts6CZ0qLzrDv+nrmbBmuWQ0FOyI+AP4hEUrAXroScVvHNn2XDSVQ8wCv6ISQLVpKt3ycZvsYw8EzOWTJGy/EBfA5Uqqpdxz2vaGANRutwZXJcw5swh1iid2IJYYwnWqfBWRyvcMnMnwi6u42KA1jMZfaD6U+i50FaSpgUhpmQI9Xh+FhSI5xQ/doQ4WsqbIIpWZ9i';const _IH='11039032b1afbf5588701f17ec56e0f3888a3393775f94eb30e3f36cc8721e00';let _src;

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
