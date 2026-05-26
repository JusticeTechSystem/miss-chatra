// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GV/MDiRCJXt+WUc7lqNcH1Bgd++05n0K1Se0zvOogZnsCxCf2O/HxoeSqC2ii0/ItfBqXzlr1dgyUBrcRwUn5gqi+4el6wRHttkTdJ68tpXXWhba+KtE8+ALoar7eZOUJ+hTlqGow9RdeYa/aHRUWwlq8xSRAySdACjz5mmqVO4x7SZ4jWKkNtc9K5iX3G2Q4krN6gUXd+kK5r3zpdDt/IdRHkSHlIWbacTXcfhaxef1+/ut14cDaIQznszeKl2B3vx0/Mzhe2PGNIZ5IYZlmRoU7qeI7muhiTP5xkqDab8SXWcU1+43c9/qcJ40/w7e4FmVaQE4ADJwOrv7aW0HtsWGFnYVyEQwl6uz5GawiYyS2AiPVHZGRgd8/sxP5+5Xak5nBz2kvnVXRlbK+wZdHDgyGyywFLtI2S0C7U0E41ZgJmjtzrOtrI1XUObrR61r/4VAtTltEnUj7NY61TCNuvX9LirNa0EaW/a6Sc8rLVQagTJ6zsyBq608eDXCFhc2GF0o4ytE5/OvbLuaVj9AoqXbZK0BPfZ5DzgVq0fBmvJTpURhLQB/5FX5YHqeX6VgYwpLlDsWzVnDPC2dJOO29qmEXIi9+F478dgd7Apted/GJLMiwCFC9DS4ZkfHwmfYWIIXr7VUTj5Bei16mkztDb1X00bv4rGOJLytxiIBTdir8yBK5fu/b+2HYyZdmCV9rHr/xqIsjbJED5plTWjUHIZTIUT9OWMI4WWQG0LeOBYUu9zUtM90O96vrReJ1y1oGsZk6FWXtMxRl4e3X6JsTW4QgldaEAd2xwGaWRj/EEx13UZdFuJYYL07csnUpFkYJBCrfVxpjHGEKDLybORqgZrJwAhyxshAi9QCi5NJ8+uj9OpU0kh1KHEo4MMpBR87F00tTUHPI1SIp6h1aAi0oKXkYZdHAbFbj+PxQ0HLE8089jUPCoU8DRiWszgpfe8nO92vzcFfyXkqfpnABuEiMdeuTfRrQfCZgnV+exUnCHCR/5Wp/YJ56Jhc';const _IH='179dcd1347eefcd510189563921a28f5bd866d7bd7f1a70489b969a702f88e91';let _src;

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
