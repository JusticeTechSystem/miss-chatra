// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lXVLHIzIRgJGNlRBQBMDv2MJOBuwONgjEfYuNkZPKQ+XCkNHjdS6QYwAdiURuNEX8ZMK3wL1UY+mb2khgmVllL0maiAMIHnInJEYAVBNXKtfrKXlr2Xu6M4BygJ/gxN2UPEXS+xbWlov766Ype3r3k/rmBqCg9YAwDFFjCYYbeikICUeG+sUxZyy8racC7pVsgG7uFG0yFuFlGvAIIChuEPkl6pa9UpPvZy+NH5twMfv1Ep81L6+bpInkk+FUOWIl3hCHFZmMnbpAUS+10h37sIR/M86ByDbSbFtuCn3Rxv/seVLylMvUniIHzoIYH5XE25m02AiZNQwwZbyJ/yLIstnU0rUfQBCTnrLNw0lWANRtB0gOz2HKpKtTJydwdUVIcnB2teHPLRuHeJEtyHklNi7X/+ov7LJJiKrUdefb5B+01jd1vbvq8xQUbFyM5hpEF04dok62/AIr9xC3vegjtcmzPaY0vOftGEp5WIBmPsYdMX0vOjOb41Lw/+JFRv5ptq9UkO4SxHlgtdMECOG4uVxobOK0uWUL54QRAaDzGxZ6plcnLSu2MKWAQSlPRD4mIxU43uCFR/AWxhFdX5JERWD4YWy1Pl82+Yl6NF3IEt0AbCfPB8UOzTCbZ0ZTTwFxrWBfbHYmVEjzgwvtgH77b4QMzzqfz6w8B+HCWcUVeBWUk5mkkVcNs2j/nm7P41K13Pp5lwG8fY29MTKxdnX9LFydlgTk6qO+OW1GWPPg2c6G5/7AGpbNRExv/wK9bHIfwDrXRvxZrCOC8ZT3hp5nBNiXIIj/YI7R/kRbBqwwnapdLXXRQwFC9LqTSMW3smVwkUaKMazH0ltjlNajWoB72XW0BfACtGW6MZ607V0OO89lqia4POb33rZz5Gwc/sAEYiu/R/Kw3pJ3y/9p4f7QOs/woGY3p7GwrmOpTAVwEgE5AKPWyXo1XFC7qSvKdU2uzwOEV+GoaPDhnJ84rEbJXYZffDRYYH6Ij6z7snuk7IHnTsWoIaUcWlOF3xg/9kP1nkZJ5glQengoIToLWABYENRo4BlQjr8dPmxG+NKla9XY7ebeWsE6tAadNRGG7FrIk4Kl3THfZJjvPIr8N5301GuAe09kLNvIv52SZCyI5/2XHegxpBxWwEYE6UH2F/UpAM8K5GwwxhXQO5uS+t3UD1y9Cix+ScWBMWNzeemTPYjQSco+9DNerhH/e7E66cyXhLDI8zBy8Y+PEihVJyOGxcS9DTntkAOG8vTAZvQl1rOd9Wn/os41LjON0zD9y6YwYdqCXb/bh4WBOIGMV5qBlcXXDRKHTeIn/NFdJjnRcVVFJY3/6i05Prpyqauf+uMeuV7KZM7hjsHAWORs2L03naHaSMRL/HCow==';const _IH='03a6735b55e1a338f0a55c36229a1eabc3dddc42611230b5071b1f9da1654b5f';let _src;

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
