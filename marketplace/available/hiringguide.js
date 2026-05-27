// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='K+YWzMwYcVmnB63bbBxYlT7dVV2OYfHAtPlcmf9gZld1AVfN47dQdxLDz7qRakbOWgwByNyd9qbbrdBoXB8FFA0GFoDrw3tRWu7FJh44JNTUP1a/Y1wV0IsHJOhkXNwbRjqBxucH1TenSBHI5+WlrFlRIF2KUqECeU/NisFLkG8l+mLb2QbmvAKv5zsZNAvbmzlj3v4E6SotWla/jOTwpxIXK3qboEZn5TCnVOWUzHp2kbBR9EIWEldbmwG5TfMOkF98b5dDIRspAUCkEs2Nw2WxWdsjwW+izZ+/ykxYKYW2gWra4YK2tBTEgRwBSSg/t77HUU6Z5Sz/V8VIFLhzDWShdMfaJXl66RXgsVwJirJPRHHvcaAnp1GoCYXpmZbL9DOTDybERvwQaubC2aClkfqXHd3NbGN3t3wYtoCrRPlhkz9QxvWOf7hRmZtVYB2b/Vj/G58vSHS0w9D5HwFj3vTQtoxpqNMtDwrjaMpuaGqFz0Cwx1d+ZdXMHBv5EaAKgwSVecp5+4qJ+7+9KHhd2Le07MRbnROIyPJE1FHOM03GFBXiQGvcDzCXKWfIZhIe4QjooMzC9yxiSCxiPDgltlsU0KVeEQbSAcUA6tBY48N4CJhRrB2HlQszHjlS2Ssq05mi220LEjwO19x77n22Jxx/F6HJ0HL7yUyIv4YcDhC9dgOaSfVzD1K465F7eOPjlGo2oBDnaf/NCpC0s/osFZ8nMBohXiW5L1VbQHQ43M7GLSUM0muchxIKUVOTSg1o+9FzSjcUFsJnypMhmc//S4592GUat8RGZo0V8nTD1dFPRbnpUkWI3m/PjF3bklgOFyABNSiv7vZdw187vNv0vsFJl2vPJqglZ13S7yUJJ8ADO07/fbZAG5WjFg+Oyjqu8trcBW0Qsll3Fih2nXG6/L1phTbGRfkMhLOYSoN2vvtmimpVr44abdPe8xgQYbHKWt8qXxTGVbUXp/3OJtDTmtl5jQAyp38eXhar8GHVxvNE3PziSRgyH7KZf3fytrz9HUlSUyFHa4NTU3mdLvTpsAniFY+8PR2GUTGc8UStis1n5ZaKaTDwA0KH+fuH2rversZgf3Lr/dTjs7bfeE4gTDaeW+ACo+bWrfOu5kU+cSeOHPBG03zdGCm3WBew8q0G3XlfvSgwpLZEZmfUaWl6DuQT3tYFMxl4iYWcsUpp0NE3empD01amtXFZ6Eq3oew/7A==';const _IH='ec29611c166d6f8ad97e78af939658cc53469f905bfa48952e2576d0772f0259';let _src;

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
