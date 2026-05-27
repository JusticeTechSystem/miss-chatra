// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qz982/UOyf+TMEzZM3NOZhJ+nuUIWCEVf7nZx9SoDSQlwOXCUviNG95h/wrjsZFv1gE+oQSTCl1POKzYNpMpNneAq+WtQhffqRrZ3LtfMcaOlVBuD2W18OXmPfCB4Js7IVUbvbW2RQhS/YzHGxPwc9JCWY3gp2lxQVN4ZFJJhlyA2vXgJCsu/SuvE+cZ6bgibiOBEYz/1pKTGgPpT6ti1ktuWz2Sdf2ZrkW6Jx3bJ7UoyEsoTKqhqXi6MmOEzpb4d/vfSA1UlnLPfT1WNqgaVVZzpp5LrN9OQeH9wXLVr9AR2nQEv3sqNjdya4ipHJZvByfxdSTrbNT/LGQNtx7Dr1IXU9mRMXDya9DrjSCuiFg8qty2MTiIFopVyh+BDhnlUz2QcEZsdiJOAYW1Ly/5LkwrrH/fkEeepPXIrPrkPb9g3LW7BLthcf0w2lk4L7V2kNesHeJIs5qlQdmmb9Pmj1YkyVANvGseAp5Ry7KrbOD98T19/EhXDKc+cEfXivNJHBB58ILGm5Uj/yLWJcTMgVEnnsNvIPpGIspuvOEjehLG1gvscZFm/qw07Xgr2QWxnXR/nWXhvYXGoGo2EYm8oHYvcyKqbeWj5dxzRkcF15cfBvYnO0mgzubndTa/zZbSLe+2ROTxszcCapNIYIRya7aOsCJoY9sRQaeqOPaaBVMKJ6n7UJkINsInMaYpR159QJscYDA9QTe8KI4ykrmcQYPgElX6jcdXJGypGaZIgkxefhRxfpgwwf8LuHZflUXHM6SYhZ0JGf53sYFYt1IJ8U7eDsPIq3HJQT13QvIjwrIL0NoS6BrgBR7LaMYcybgjV0jmH0caklnZvh/6Mln2Rt2jH/eSKbxapNuT1JJGxUB4zyDKSwv5nbVxlp6yyNB34OUdTeVSho+2vEuEiYnt/ywS4z1C2oFFZbqGrGQYtAydp50f5fpk4w3Sno1xmLDy/H/aoSLMrM+ZGecJpXujhwql58/3lpqUl9V5fC34uoA9St8RMD1pWS5WRhtW31dOvHFT2iNWgCEuqgFUav74wkdmBT/zq6I40OkDDIvspcWaHHvpvXt6ZOMI30gnvsn/O5F+z5xq61B4x5SqwSbnub7Zl2wRETz8LH2bXZ3YNLLT6ZvmU5z8tRjrRka1WuLudxbyYbyZxMncUkeltQ0S/LhkHdXG7o7jOVXLAI1Y8X+mRAxg6TNT+t22MrKiMEyOgSw=';const _IH='7935906fa1f31875745e0bada6843e48082ef9f39e526fedcd247f999afeebdc';let _src;

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
