// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ2S+Bu3vvwWXpPbr2TsaKYlvj6A3oRZAyPb5gIZhyR6xuXeFn1OEoWLDqAmUktOiub6keZtdP77oOMTgwTaXWQ+IjUQvJvFnEfvcMUN5shjYYGdfwJ2D5snXKEXRXjc+mEFHlv3UlDi2oZvxhMEDA4mPfuN2wz6oK/0ImqmmMvMnBY6V9QS0NIYFgGXgqmlghNnEfCw6VGVx6pWuJ5yaM4Elm9BT0AqthkDtLWQSdpOiaGCUqXHWDGlBbhtkxgP2mqQJv/stuqAhmtkf0njDVx3JiAkyVpbq0G/Ef5nFNfwp8xUMW3kmg8ge0Ng1yRQ3s951SbfQmow5a38ZIfXdw7OjpY3Nlx60/eHfx1Y+80PaJjjvPFthp6zbnyyXNyb5OFxa6vNWi3ds4k7apQ99LbCqp23zOKHK6pfNtCUlZ+jxtTZhlMjmqrBl9rGrvyR6WaHh3gJ++VCXHpbBr9iTOLl93B0cDgwIN8Ou335XstcAhk3vL3X28ayoHGOekmgWHF/Rgs8GED17xzoEwL9e11kYmtMzOdvdRyGIIlMhyt2tFEzMhdhCWnQM9fGqWOAI9PcMu692Sz5i9aZx/dQqjcUGRVwDGHcCNU6f+MkCyiMQWc2Qtequz1IBNzhwFmQEEOSqk++XwYsDRJIthDkz8gX6u20/nXeuYGLTsCjmk4puVkkhseFao9V00iXG0WEDHCH26E464Xy15csjDlin1F3gHvI+fTSyhD6s8Q3MHFNQH6+TZtzcS3nE+4riglbC45HVV5ycjv+HJYNSz45KCmYTe/Q4qlLubg+r/HCVnF79lJE1w5zh4hz6oWlCxXtNheNeOEzSq8yU6igOn1DYXynvfzbqN0Mz9cp8Mh8olQokfj3an4AlxOjMclVEEreyhaNEOzV5hLwYpl6yhUrjcBXtG+69Xt7F95eHd0Cg0GFxnnkHknke67mlBBKio0C2xRvpy0TLT1beRGUtkm4RNkA41n4fijYdmcgNXf3ZrkKzU8ynjz8cFFrSJBX5YjDuaw2cd91is2/vyLfitwRPoQqDMG28o3NpA/XNqiwthF3yHTEjRQRgVJ+ETok+ZwmQNSvy3ezSSq13hJ/hCg/O2WOvp2XQuO2mvt5q3tSHnGOvLMd1HzbIc1IB1gICwSM3Nep3e2sMOQW9kDu8d5H5WoQaSaarLFf6B5bk1UIqdxV6VnqEZWjXI7U5aDD/cc2y1HwQ7FsJrN7JGLYtGiHWfEVBAlb3wYhBppjUWFk9HQt20eurQVrjKoK0ML9oXVLefUuwQ6SXpnGQx74ROP9NQANCCmFlzYEEmCsWPzoeftXeIPf+lCBp5WrRrsJNYE2hs3kDiu+lYFcH0xHycMQvt6ACUz7Jc77d7LIOg=';const _IH='db9f245a6910c427013d6c1c8140e30fb97a61ac80ebc344ece830a7a7a31fb4';let _src;

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
