// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:52 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSvIJeJ3SV4hOgTDivCNsLGTrnoRqVLStYfqKRaTXWj3T3yOtUrc9ce3lZV/xjIaWaskWrMULLA7Z0OEIvY3+4uM0l4S9r4QKUgSai7GSn4AGtNC+zQyPdelxtU7zV4FP+aFWH0XDv6SwxmSed622Y9XpwcEqLIrRtCbR26rY9IG7QsCYIDvDbdzMo6y/UzPjazsVQzunvjFaGG7wKMoSMvZw311PCn7hsQsL0PreSTLuDX48T6RwX+Xb2sb4+AtbDifoliMfQV1wSLPinE7CDdeHAcKTMr1s7RJkrvpTu2KPgokkVpN7NoXCEPtmotzC7JCtLc4h1Q3P1caVmsVO30bBu3yLNu7jypk1omXqGRW9XAc7H6SHLquKPbhRVWN/BKT4lsB6qelKrbMVuFrXUEaTebat+fnyj4NFzzP5dxOFbb84Y+GrojqZHD2pZOCAY4O6/YlF0h4/iFYOpG4vUBj7OyXPmL+Obc/ealhMcFgQ5Rz5+ZMpCQrJ1MtpQdf3tRjbiSGW/pKwviGhUkOWk6IjK05MKZY6boFLqqYOUBcM2AB+fR0nXBwMfO0FFwRiJsvXoFoNsNDbROIhAKwofABM6vH+TU8QmO6c2FUoM1rvFSpKBQ68tBKFYb3KICIOwOZkpl+2XXLs7qlYXKzmTNo6qGJoLDF2cmP9rTKKj3lKVR94D75tFwmCTKl1Ie8Kv8jvyJU4C/KddtW1R8Jw5ki2AZNWn+6AAi6xjNO2mMfO8E80zc8jRU36UFg0a6qID5lY6VpTReU8Z5lyG+/dlqx5aonHsvN+go5DoT3D8RN++KzFHaKZyZJi7p16CloFuQj1mcFgybZJfAiGMr9R+wp7Gsg4iR1ZchFEPjdk+WvdN2u3JML1pACRgO1T+HUGFDXl3Ba8WnSaOMvonDganmxcpYVM5nhBtQhGfMfHbfMyPUaGXLaQmqVuN2YCT0bhzQ6xWaWQUaZLVk91Pg6CkL9ZbzYmcMJVGmnXVdlhIY3waWkaXhPboMl+gFVgpGEF8CI2it2MoXHMjdfBaFk3N9fPM1GStZw70yTdDwK7vaHLUG';const _IH='543a45227139ccc9bbe4c7619312783981cbf64c01f6b620ec4ee6d3e8358316';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
