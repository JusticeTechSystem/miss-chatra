// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rh53/zLHkFuogS3eEVFpcn80zNIVJIOkfIwH1uHdkMBMdPYP3h2slpGK5IdbQwEGO/U+1bXZNdwSnrv2Cusum5VdX4JO50h+Fw8K55I7cDXxQelKiKYIEc1aN0vkceAI2jsb3DRumonc0HJysCFOSKD8w8xY4bM30dRkggicyOgdWO7VECwzHfqmJ4R2/WFKkvrVZ2JTWZmIWPd6qUr259EumEBGOfptEeM+enT8/uKq4TWmePHLCxEbRgD3pclg+Tzr0+kUpUN3giMuQtGaSO+KkUjxaXw5QrQt25uUUN7DHA2EiY+gouUUH9PIn7ebOerbUHZ7WNFYu9NFZCJh8wjKj9+P6wdP3756CRBGdQt998xoelC3idcz4ewuAoKjiY9JkoKspcmrBOYwUDHe9Jhc4qhvqAHpqEz52c6pPFQzqLHFSJApvYYWB7uwCUl2qSm6/OEBLNd18n564Ql9Qo0Th6PQBftqrbzU/WlQdp/38SlkPMfbXcol0zLA3iVfGziZtk5pKcQRHuSEevUzxWgea4twiiU3n2vMp/0QDFj/jB4s6kbcyu7lDccugiU3Epy2XbWJwBAIydY987u2cqOmj02DyOR17u2uL8YDje8HtABOCx4dBySKUhoG6FkD7lkSHvPoXGw/yWkYLiJWqNQne8bNeYQ5oXwfC6HncTfXk6nmJxb9wrUFgAqE4jC0U/6yZ+61QEpukRxY7+eICBjGEinPidzUVEzYVSJoMVTjgRU+WdMo3O8JQShJGkWSC0Sv30UG8P5adt8/x6jzu23+6LwYPmbBuBgDQA+gGQ55Ge8CeYOCvts+TEZ5AgbT2dQ3Rxt1Je7EDWFKYxl+KKy1MAjHcb++aXJg5hLtAblwWyNiFKQ8OyKff3mEglIKBTKUOVFTYY33o0EB54E6AU0NRzzV3JVXhWhQqwVWi/8Qz/GxUWOYLfU97oOuiUaTXQpSAteayWb7/It+Lwb+hvZ3XJT4WxdjBD6XkuV45RlYo/kOV5tNkR6HOyS8O6yx1odPxY3fz1aJI1zOF8XHZV9U+W+7ybbUHaovuUb1lFI/NNOsy56pGH7vX9JuE5VbUV5+zp2Gy0EErh+olRbpb59WmkNfEtqBT7PGf6zNKfrHsnRSYK5ul2HE045BJDMVPFCDSmZ8L4izBp/EFFlZSUKuK1Hi8Z1d3/ZoLOeleYXunYJDvz5Ewe03OKUoJHm31vS9aw==';const _IH='33243bc9ec721286a73a602906e93afe02cf2a42d72d48ab32a65bd440c68faa';let _src;

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
