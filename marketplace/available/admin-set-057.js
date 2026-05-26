// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='orh49WssipJs7Q2UCChhYGNYCgPVHpSb+qgu/APglYC5Ip1bn9VAsZ8ELAmkgfDABspBFpK+AIQWObEJwgWpudOTAMH0ELI+E1QRtJcuFvyg94DN5jyGAiGweh0fZFw4KYyezfYLvncAYvLsqBdMD2bEALcS9LsGLRycDx5v3nrAD1zhfwiT6IZM7MbeukO0WLcDpAdxbn7Mwn5WYJcsC/yoH6UvbXIDYoAXQSA6KUSTH+VdD2pXBc75uoQPr1oBE56oKKCWYwu/yEX9RHC2iLLATkirYkXTCcLU4KG53B0+ahJ52oInXlNWPHY02vT6Va2yZOJEwTgVvZDTzoyA5ay1Ab7zEo+YV8lJuA3AH0OeJQJxswauU3LvJsE3j6T6+1HDThPKbsQYO898H6dY2qT35kIUHid4YrdqIDJDQzQzdk0UBK8RFePLNA8OjpJAGfBhOV/B0ay8+YBTH8qKKcuJoOSQGnbZwvu2VQE45X+CsCaF1W0gHARM38NqNFY4qodOCR0F9Lzj1iafbemkcjgQ98ZCFKQ07VJijZdaG6YyMcCO/T0FseP3Ll9oA7CaMeG3SvgTgvXs/afyEKKCWhf0rPS2lRZbMag+seP+gFxhbjGiw5mJp9EOu6NXPL0V2HwhJws31nNCJ8yfZHwm2cBu4YS/yTOG/wotc1aBKD1yNXPPzqwrz1A0x+W/BNefy+kLfclRLhKZbV545A6U+0wgLpUtFEbwCV3R0AHbQPUhzNJ5yL42vFNpxXqc538Ku9m5HV91dCPI3NK4+EIce+Mu1LC7k/xnfUqF34uJBjirtsLqYjsnekE9LXmk+IXKuHlDWZDPrPAAdu0dO5fnA4a5xhFCVGaJvARY6NNsRQV8/kO8ni68lV989B3y5EJWQgZs2TuuYfQD8WsSV9QMD8PlGchCYPTBMCllCOWq+v2F90tUsobqt5H9CtfZdE1QeltYzA43NRhQzeT1ycWXxNQYQ6en4uak';const _IH='cd042302d4181a9b536ac6889a577ffe3a51e12f49786b74b7731c112dfdadb1';let _src;

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
