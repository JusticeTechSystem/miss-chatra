// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qKJZe1/5PWzrdY/bKDuh72XU3zTguGlUubLJNKrJSLXDTcHThAUdlbTuX/qBpcrc/vkb1yNp9e6L89sCr0v9SkIbBhUFKHpz+bqaSKzUIPZ5kOXr6QJ+Bs8y9f6CMC2Zyk2oWdEL1SdcRHP+o8yS2dUX8D7rCJoVToJ7q1t38vIDIF+tkfElpLXuBlLhfhEenynxiLsj2CZc3ike1io3htyjbJwVe/khdLV5KOF8MD2WHoTOBqNWtQJaEonknC1gmyauxjksc/EFvbvo/bHPMy/Ptaet6s9kYbHkHVDOnXiZJPQQlXesS3dx7wyIbjsxq3p3TkJ4c7cwj+4shOSzWzmo5S+gsqdRPrW1X381XLkB0uyo+Lq7vlMbqQ1bpdMvWJolKhM4ZpZQ5ZXqrQGsJ0tjlpbWsXZDZc/BiA02+pFrpuCCw3ugL/bgidxZ/WahA2E8p21xwyo9fvdiq+dQgWbvIdnttfRryg/5BMrW7iG5yumC2Ef09BmhRR6AW2sqPGECYyfONvRQS2PDSZt/REq5EqO9y9iQj88DciFvhNqrZHzJsCictaS+8bhMqPT+0pCHPxOf8aC20vfusOauzGGeBF+FxLRPwZf/4oA/WyTgs16YGylfnlRe2LnV7o3A+CNWXV8HeR46vV8LiwRxg9TUeevM7Nn+3+icp9mjvxpCAMo2xlIHomE/vdQw3EN1f7l9uWPPhbHioewvbWEbz5yVqFKPIkA8IhUqSgjivBAwjT6mzC1Ws10aTKz3aC8jJ0GyOUlV1z8Ixe3fBJdY9bNCTNXWX5yY+A0lp4T1ICqI7cwZoAmwO/uibmb6cF7kVyen03LoylOpYw5EXh22zoO561T209mBAzDC1ZcKsNtW2Sm76N9T6dOT0HBmpiShLR1V5zQ+UeraResPvgzdX+c1sdyjg+VCUYH1m5jx2oyqxFKy4WDjX7yq2V8KyI3jA4nQ+TQ4iY5oU1moDvGrPcMxP9MmCy2OlI5noW6ZnZlFAaM0ovdOUgGrlG8kdg+MKOdgHCnUFZ+oOoIxnNYSxnm1qf2GeNgj/chxYmSgtw13Q4VFCbzHkXRclwTHGCF+jsiutnr9lH6qmvSjLRMWie5JgufwTsy962D05nk5np54Y4N2Kh5ou7cu7U/WB5v8DOBZoDVhVszRUH0WOq/vhytnzUYqjd7kux5yWptCQ46VqpKUZ4NVk6Dso6daHMD56X4lr2B3+ndcheRoLA1n2knmU3Q4oaEGzuVEwdI30DNXKTgXWiX1j6y9koWbUMNiaxJ+6k6oKw3eFsLvPe6D+rGDWVeIBEHZHkC0BiP5Hx5jWhiBSTkXrhZJwg4U3aikWA+KD5P3yPqqsid4HFEjv7H2qPlZIy2IMYIF0wd66z67lfvxdh/MYtKzT0OrR6parm6LvSU2YEXltTL+toLlwa2BfI07f7lcwSZH/GtaPPgTYlGbFYRfsm7yWDaz+ZQcK2WmZFuFgW2BeA/wgUaLbmcAcDb9akHNRy/wokmjuSGXFancmU23';const _IH='077a1489070aea552617bb24f390a60fbb5eb28cebef7eb003244f249d6d602e';let _src;

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
