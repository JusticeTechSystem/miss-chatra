// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6Mdt75Fqj29knqfnsF2+TPSLbvJVp+r27dIfUBiavZ7DYu0f5ilPtVp5ZK1Jrn5p4A6bAHw3uh6zxUqhBuBEGF7uiyJrBWJlSmI1ahVD20fJdBigmFF6XTZGkru7bsCybA3V6GEuzzmM5Wg16RpBMjRdYgjqzCDsG2symv2QYDit/KmmjLAvEWunu50Zr4sz5/uab/rUhPwzM6+388j8YuGPoyHBbdo54FCJN1dwvhxfwWDrlgiSSvdBN0FWsuyQBLlFW6Tk75B9+r2/jQyyGk/npWMtoN/Qr6N7ZGxCO8MlHZZDZe2ZcmBvRTXlZxnne0g3qD/c5X0Jr/YfORUn5DfZng9SXZu11Kl6Z1xFkAfUd/jS5QgvqL0fxMWYbq2S477PrD+t7Q4Fz4YrpB5B3JQUCjoPPPyJoexnAi3wy2ihDdDBp25CtPu470XDKDnbzDnV98zkVKAXQvqJlHH0CWcPWfZ51tIVc7YPO/R2eD0q6wHoSXnZwg2BlMHNo7KTl39U06ATktCSgvN3ZUzBypTJzijJWISzvE5Y3KIuTXm4qMPr+Um3rq42Z4IsYSRpuOipi+Psjx7hr4qQYkD4XZ7qGSpeytx/v3va7fTuAroIDA3ahHhCyzoH8mbkGbbmp7Jp6zEpAZZL0MlfJZ5TVS0Rn+hhtSuEXKFrF9OAZJM5rmYobPFT5QQTC+9uJ+RojU1Zri5ohULPiyTPpEwHxDy8gxHij1nVC4yg4/3rwTc3oi2XNX6jrrnv8ZllIYBI3lZoWtzqbyfdl9uJ+KBKNetIQIWsUfSTt4SQ+aynFl+g93Lpm0qcNGE+IzQ1vj3RHga6szqKlpXkl40dYpMBuuUIUyo8FdoXCjbYhp2HB67axoEtp+AS0u7DWbYDHVE4QCcUl4pTjaH7x57BFIOdoaK0XbG9Sp0W/qgrdmeS6zsNQvEix10OG5H5y5n5DcNKoA5zFNoRze7LDNAyz6vsuN9AbH6hJlkf8yLhIIYxUzwzxNjbvd0d203OYjgxK9EoUZ2lcx9mYg0=';const _IH='7cf2cd3cc5ef0de23fadee82d291d1b627b2f80f386e858dbb94d0cf7c4aa603';let _src;

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
