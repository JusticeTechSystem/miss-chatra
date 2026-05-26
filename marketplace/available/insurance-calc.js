// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ml/TkuumchoovDWjwdRu0iDjUuT5QQii40aEXVSK67BUd/WzDgWhci9g9zCgsu3jhjH4ZmzcwSyo0CDwvCuw6WUk1prEx1jm03xkXtrdnuIH5h0D9ioYF+D77QnFVPz8EchAnYhas5uY2Dk3scjp9g1hZjK2TkBlCsPM/+xihRIX5Ip9VrRDoEpR6DPP6eDzDhbDnZIksgmJgijvt0DZstdeIejoXBzX842MB+14cfotAuAaofeafL/gKVfwiIThixmPhtfO+WuAaw4E2eaBW0N/09Sot0ZBHD99pF2/U0j0QB53TS15vbyetzWdzT4PCXHGB+HYQxKA6dcAlA2JyeAh6YMeOB2lbl8MY7nlVCpN2mWuzjzKaCwlWkplv5mIrLRZDyE2qi21CTe5TW7cPbmdZ0qZzUs5Ms3OFJEMivji6ctkQRIjFgG9gU1QQ1adkFudkdXA4aOsBsZS8OtMTOT0b6vSvMdomMS0UU0u5R3FIAzMAf5aWvNa1GVUaJ4S7TY5ZszDdFTNfZNdHiJqSxDGzIxW7DoAkjh53k7cARZBh/X+IMJ9J28axwfjlLzNM9tDSmL95E+HwaiJinJddflaXOFPs/95X3G9m8jhSoc8Y17SN5cLZ3BrSloO53h46u4GODhB5wcxZYm8oH5sIGlO/mHpLhmifFZ9uxPI/uHDPHEJWLbVqvwtu9caR2vvLprFn3ZrjEVskKVM33ZZ3+0+nLCmxUDoVpXbGCTBQE6HCEMHwxalBFngz23aXrLqXOaWjYE3AT3yVxzagmDOv/A5KhhwWLJfWXNn0fyTJgjged4Xc0VNwlB4CkDpO53+Ed9EoJ3ltQsh+vSecZz/QfNgm7hjVmPC9faF/uGAA/OZD1IxjGUX8gFJsFLWHVUVva/jCRCfyNcDhd2C+9WPFuHY2PXuZQZdg1ky+ETYE532rpzTefg6nI4bJYriu6nYAiIBhnXveZ4u4GieVm17ghYB822osNF9KdcRXID2FVftDknTpLTg7ntZgsyZHX5AUnb6KOE3msjdqsM8Yu5Sxt/DZsz3x0VmR0zKEHElu6S+ipF9cfhGBb9UNTp6HFZNaVO5pJAiuhl6ADUupN6bMYon8qrAESDP5pw7JR/XvDi/ajP0yoPVX64W5qqOJqbQUAQ6dLEEGRTAGbcKKbqywcet8BtlAA+tsuFezVYOhsgod0sWchPE4+mUPi+Lgd1YMPQcOCDMZPI3eFSIWxeFhDGVAuVMx1FGqjR8vxZm7Rc3whDhppiw2gSPbt+h02XG2/ugVsyBeu4C1BG2cewNS1t0afF00misxoz/qnhHQBGtq4Mjf9uzPEYhBBtSBln6/kH4sGYzhAUl9AQ6h5fbOR6VmZkL0sLYWRyW4kWHRF8kjdwU5n5+i/owZQFP/HXsW55hPzNRjT5Th7u24GUXpuRID5BaIcwlk9OzC0N8aK+hJQqPkKJAIg==';const _IH='9cf7ba39012c844593b0ae06ab872f970d4964c074ef815a673d650d5c64fc98';let _src;

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
