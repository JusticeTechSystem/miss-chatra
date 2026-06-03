// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eaunlHxVZis1JdIQgzHLjwoV7PUItu8rl4K8/r79+f2gLJeL0qS5LgbURnU5OfV2uoV6WJnp/Te4+tifRZWDYaBjy1/AYXUpqOrKVJQ/hM+w2a2Ym6t/c9Mn+Ii/6qfv6gcpoxKZw7MEKzjB+w1e0G1hMk3TYPWglv4b8x+6vEDw6K6OhcR0tqjs57B3+Xp4VyNrsNOJhQU6+suFFM2PcOKcV+CSAjQMVaH+w2jIube7jIkGxNy0WUS5CNm4go3l/Aeoof1zKsI4fs1mTfkRxagM0Pos7dsxJ2O48K75s4yAzJ8O4WwK0ANji8QsQ5LAu/F/lB93v++br38g/8z87LoWe3j83sMcp0BLaGxosQshSDQaKqKlhpF3GnAksdMpgZPgJ8ulptnfPoPXZK2OmKUl8OZrTXlgiKUrTuYsobGNHPlCJIUm8eCBB9fMAkdzRJXPp12Td6RcKYM/jnYcXrRkXTwiN38Q5GHLpeGmVX2soedu+KlFWl4NpBPTJ83A7Fkq8idegj59YuR8hrXbnRRuwmHdpEOr1gMK8xu4tbG0Tl27A2uF0rCvf1TZCxYREkX3xFUEKfp844UfrtImWo3v8PqnrElaIr8hh07+7J78Qyl8CVsi/sxM4bSFGo5VfyPkbXROFyZUIIT9sa0It2WnsamrdV1DWmpJIM/eJhbATnASsiQjzZoJLTuXL8ZSgz/mgrslGkItLXGXcIDMgmLP0Ow30VexIWbLdc/PD950UJKXJAVIKNniOB+2QeIDpRru99oX6l++RiOrTOJJ1ICTm1ZRJhme528kOSBeNFVepZPEA7plKW9BVH+CmFX0WPoSI5QXAXkYTRXyrhJCTxBJxf8sAZmsREP+CIIBfCdRTqtioNo/cLcodi5OtBNqNsH9sWLKQiigdA6E8GLZLkupWG6D+9y00lv/N667Wi3Kmln7cB4wDXavJEIqTwPuhgvrroXucvIEoakfDNeIjjQvts643Rzy1+0dgAIYNzfRWkGoteWaAT+lTit7mGw0LRXOhgwjrdLMu5qlBDqhAuBMWmozVvnPC5BtQl105WttH6ya0SSuQCePs3GyiZPEdU42qV8TKT1HGYFTnWu98ztpvkL+IaPdRiZWG3pincO+VApayMHeHUoR8gmFAQqhjKE43GXp8+ZssUxr2n9ABn/Nn1oJdsQkvV/vJt5lJUJ38K2ledj/2p5RMRLB+sglnmLUN9bTdjgCiv6aABcTCLDRhv2jw/RKE0dEAXmmWRUVcI2VoVFT1z7ZZOMJ5br+5ZGTaOPl3lCOFpOm5NRVFaxeFV4hS+muoL7Jq+VHtmqWamEK9O0UdLT1CV1H/9J7HF64MLMaz3585A==';const _IH='37b82026c5616fd96428fd96db8805022d222d8f106b66bd4e52c007cf92f3f2';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
