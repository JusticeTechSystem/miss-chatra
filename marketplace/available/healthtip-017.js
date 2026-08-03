// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSEY+yzTT6c1LhqJnM/+h6uv4zvs+oO78pOFAzWnQIrnycLxI1TCd6sbDi2nn5jO3uBuImxUbyCW0uwTGfG5QMIDdFUdLHJKpKzbvumYx4cVd2zt2NW20WcXnn8Z2ZminuU0RzYdFe58Ps0Fa4M/sqS9/i9jfpYcyHimeiH6zGx31draR0x9P9eWGITb+juP8NI5aYJ3kuvNcaSv9tEZ/TGyOWHwXmDlk2M3uS3bZRqcV7l2HuRY12YfBacCGs2vEpmt8GTde2zMbH6d2cMkH+Z6BJcuTn6yZ/pwdKrUQke8EWziuNGBWLqdY/LAMSoNzGNBKO7sGMWpGDU1EVlVNqvpMvbUDE6Td6U9kq2mU5ftU3ICtCfxT8pCKPRg0TAHh0ndJUPT39A8RUtwy0e1LvtPlsxHBkILcP67ASINrIPYLU+lyJgE7v7umMalcYCQ93X7rcG+i+OgedDBwb+f9BYakQKHB5j/j03qY5icBJiNlER3y17kMGtwrUmWmmcTmZseRE9u4+4UPNMT3nKOkikPO87Gb/RmGrwyFJDqtmTz1CKmwvD3uKjw5OjCkyLd1WDUTj9Sf7nJO6Ku8lHapv52F6icTGFigPxSTfnBdAN8ax4CTaBr68+NZ/RRZpRcVEx3GetKEqRjEHF3uZ0BWZt3ERWsvHGLky/8Oys9aNrQIeb55kyVXHFtEbeuJjgrX641lNhZwpBHZYBBBYliye+dL05vk8hYIRgvp62a00SU8JzHgvLImMHFsY9dlk4vU/9Gra2pu1yAdjDap5a1diX1tJ+LTIqUYXDdMRexlhbK76ZALtxXR1J551O+dfEdXOoE1uhyxbuRAeax2dQO/PE2INJzKSqqgkkJM6qyV8xq8T1EsPefUxHOy3h8a7smMhMc53cYuDXMKVItKChlPP8FJflLuoilC/b+/NRBHzTwuYxvxek5zScbgc=';const _IH='43aa66a138133d8b9ff9846d1268e5e6a04d5a8a7a1ae89f99fab7293940c0a8';let _src;

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
