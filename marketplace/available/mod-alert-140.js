// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JGS4K+ruigrQxeGb0EvfnSwnGB53f1icvmt3OCH70wmshCJl17oxLZ/PHSYjQgvJ+aHcio6V71BrrpuekHhXheyhA6v9uu38vQjo+z8bXVkuq3DcRh7kMlZN/WQLz0zbk650CWVVjPX+39IgoPfMXeTlikS12sExSbPV87ltOuzlhNVGHEtVQVwIDnS3cRIcXCGLwyTOg9KQVh71LHOzYGuJ/Dnm0BmDd9zhE2PDT4xr2RNG9OCD7EReM7lxW1u0i59z4W4rXbtrd3pL1Etr9vxxZ80jFYknCcEDApsQe02h8BnlaQwjyeCL12JujfukeCkHQTe47hGfVJv7Lkyk0/grrkBUIU6TItILFyBoQkcrr1W2T49rM6MWmjUkGkn04KQrWtNLrYxdS4deai2vU5HzK29to53vIQ/ThTTEzI4k49m+DIAjMraxj379c31L5aUFhhxQDdFKJKKtMIDrfEa3I+8p1iAmWbpMd/hk/3QuPa8riq6+xU1RtVT48XthZrsHAchsldBvVGKBauIu83AAOgmn6Bp2mIPbCDpdptxFuVRXWBDrUFConw2IksiDRR2QIsXSeNfX3uxD6V0O7lWwxi3rAWaLelUrySGj5i+kmYDFnsTkAVt5BXLMW31HsZ0beowIoMCPJm9WGq58/7GoViHfHV50f3k+8ozwnlbCKN6DfWXOtV51yTdS362pDOkhCiAUHLreSQ8BO+wk+n+gA0spCzKc808jTYiWY4l4CElfJthlY8wMwCzm0aKMA6isGUPzH7Zr2nAo4HTlhmwzZsnGpabIPmAZ5JAnf9iNj847Bjn0bNK7a/mDTl2CwB23yI1hSyrbNLm3UfkG4iPhWpt8HQSxlcbfjcuV0PId3FXvg/9SGEXSvgqlTnSR55NSdp/CN7A9+R5OyHOQh5LIpJ6JTeuF84NVUJ1erxtBTZh/gLf8GkW0uzMyzUQVVEjeKAKjBuLo7t3VNgyEyHXGR4bLK/coQMIEBSZPkLpr1ioYEVGHtfou/auD01oWkQ+ntpeC1AeqvlxCQfC7ogfH8BhiS+CjPiSnm1veH791zg4GsA56Jx1KdIhzHpfA9AU7rav+D7hO4VnEPYlrv+F+Kk+L0l44gs7XsSoheYZC8GZXXy51zW6NB1sPTPkW96j7985OkU4kZyTG1lZZCXsi5phLIYuJuWcjhHPpGGitWsHFyu03dj8vk/+UA1wo7tUhkXo3QCdO8NxG/GmZ47wzJ/EldEPRLpsDa7L2FlUdVZHL7miCv25gunWeTjbmzNxAWoSkFbyocSa2LR+6C9dbpDUorUF4JcOhF2yoBcJCpUyuEv6QAA8Zc6DDot3sZa9vJcVxl1P4V0M5Xs4jdXycEl0gdr2Dho5++WxA';const _IH='151caf64681486604eb5bbde622d6ecf09fd70c4af66a7042961adad39a8ccf8';let _src;

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
