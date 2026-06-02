// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9eCSqel4048E43U/2Loow4hBcFr2+2okqqbtjK8IQrRFS5hu7Ukgcg0fvUMe0Db5aR+Wa1BVo8yvXhZBo1+xV70pcO/PpOQTn2J+oncNYd7DEfHFK+GwzBpr6CPOPBxdf4a6Swz35//spXa904vhopQPrYhvhSHmP5eVR37NFSQpRBDXL2asTC66sjq/Jhw/YqhPSL/gWDJidDlH5fIYp8PbWTLQG7huRDrTRH31oYaXPfC8AoMx/rQ47k3cRxuAmH4Qbn+nRE7jbdY6eaG95m2fTWwfpo+Uf9rG+KKMpMxm17Ouwm6pbbA4thpKxeQfAKr5lORYROV+tu/mXPpO9TbXY4GemDX1f4c9tTwIeQJgdxVYaVbtCCSgb3gjmAoknNJAIVsnDyqij1by5PcyVCYLMD52cD7zBzDolbuk/MEYvQOLLI1EatPPCh0F64DXAMHi8WwChLelNmINGAwbVrR9Q5I5TdPzOFMaFZVuz3dcJLFVMtcaJY7beJdXvj0WC85c3GPlUUZ5AyuChPe5ti7iEIuxmVR30eKQrolfJuBV9JSjNhywbmdqnvEOal0or0P+ywvbGOwsuilIUdTpoZ9chCvK+2/D1Io2jTr+z08/XLBu/N3l8YBBz05EiZt2wPIyCAo1F64D4D9xAZUdHYTPZb5533POxcrXnjLMGBL3JtXIu2v5oCS7I+cq0zuPKmsqoIu4xE2zcDI2xWLZqfgXidDfFYbcgVcKHiX2VA==';const _IH='ba3f187fea5461500e4477d8b320736aa0ca8866f70861fe82b1f7daea3915a1';let _src;

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
