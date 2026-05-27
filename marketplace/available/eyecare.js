// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/McQS0P0aS0UFntj9m64VsHqhDQKaHvXtj48wy9ebjPN9dn4h0HVtdiPeEgQSdznL4w7ZJy4ORLizHnaGL/aqG56xNPF3xQ9MwQmRnpwigX9IZiXFGI+9+uS2oAMid5CP4VrP5+DdmRmJTEqo/tRA4C+xhSEnCtt5b2sUrgW8bTE51DEhNNFa8IvlHSe0jEsTZsVHt3nx8NJ9mrsF09Dwm7AE2TyeoLLFBi7SYlkucRJK5mI6ody4gB5VTISRa5SaQE+pNeA1K9txTSebck4B8YMKCBHWUWDqV7Nnyn+Rl/GgRFCzQcIfoIsWlm74Qr580ilm/htqeb/5dBBJOLw6aEB/kjgW5i9xITcFWnm8ByTZLHHartNiYLFo18JrePD1/RZdm7Nv5ovO+6DqVICsHrUpel/b2w+n3ryX8JoHD6RxI2lQvXkM2peYp2jwW2bGaYYBe3ff8wIShLC1iGztzs/iCzHPpUj3NASHmYjH0t5clSNZIUn8/wSBPv2/cpPFjThGiaPqRK2FwoUjhiR2MOi+wVvYLaUgPBWtglKufGG0U1RiuEiaYc009SqwFMcrceiWEmDuKnWKNvCg+psjtRGios0IImNmjRPlTlJSYgo0cr6F40g1ndVyhMXIEF8Uv53l8lMTw6QNV4hUU3ZZJt6sR71ZLVrT5jy9m4i6Q5XTLM1vXP2Bvi1S2jEp3rxZPjiJY0/QV/iV3/dmR7ygsOAUB2m/VXWgKxms+wctcJjzc32eDgEAKujn1hOoE41U9P1RrCJvl42hTgh8d778j3nPecur/3PK/XZn/xWRJ9EnbqgrdNalzalEPZbPwgrDga0Fpdx/oU2AT6ymAtf615dzsV5QlT5O3CTs+oRReRG+enEuRQHv+OIcSOnBmlNMOfYBUnWpRof+/Md/UgSqHN8O2JbZFIsPhzLOAnhNCFG6a0EPMSsVUbkk8dqvbuPqW1Y5KXaLHCK4u/vf4O7qjkkjBg2bug1dvQwjOmr2E2ozZNhm/Lhb5TmD9/vAt+ftIKC/hwqhUY0rC0IN/PpuDP5UKk2IaBF/y6qh07m1BIauHpiXkgdXTUg40811MPo5LB/6qZLE5MkT1YiqcDce69AFr8V5PjRif2cKTTpUp7KvRpK5ZAa7whuXQwgTuoFB4+4/GqPn5ydFcAtpqUny12wWT/xJ51i2FdqUXoSa7cX6hNtiHt/xCUNLyQ=';const _IH='f80c626ec3dc5292d16237d326ca0699536684cf2820c1979d25694b73e2454d';let _src;

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
