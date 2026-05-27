// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jKFTN1YExraZU8v+otC2XR8bYBOBD9kYi7YzQ2EfNOvdQ5iP7Zm19hocRaLOHidCUVb+BLsswFgNa9z2XB0XIQgqIhklD5RyosPhoAW/51lEV/YfA0v1nSglHKEEgsYVP7HYfq4t/anX47Twpa5rmRwpz2qYsL+FBWiq+EVF5DNHTQsDpY9A7rygF/1vb2PlG+M+OGCbX08wrjDSe6a6V7LvuM/yNm15OuV9w+xXMQlmG57XuG4QuS0l/zCHVA+bRih8375dF9izH0iiDgnvZaiFZiCF+ITlv/Kzt7ehAUCWYDU70hLVQwWzmg3km0S6UTreouhCCMQCXfV+qrtbtGO2z8s4nGM5BuNQSArETS9tMFPW4iJG6OTOTdJcNh3ILNy/NqOcFBrE2Ug/1mntsPVBsd3V5+7R7K3SmAVmebtjL/ISDjUtM+R4FfdEnP/1aJgPtf+rpZDhX/61awpCfNV34G0lWaQ7legoJEvwKwZpja5UNV+ppvffmwrEjecHD7VsJx4Ky18IfI+xDkAFLpaBJFA7gONHteHnonP9BEFcP1KhgMCwk64WCewzOvVA1fsfhxJqv4ia76PTkNeug61LWf3Bh/0Dh7gQaAGuPFTUrBoOWQAqHNxCk2efv6AgEM90IWzWf/hgZdLeBcZWtD2LjBBgGZtW1U78VZX3Pvfm7Jez03Q35CBZVhUptLRPqM6sWe0pUUpuAqCnTyWVe3O08aZwL3Eb0OslWFBdugzQ16DrbdXZ+B20AKA2CDcVZZF8cImhllnzadXS1/CDWDoDE+gMz/dzhEQLcqXvvMONwMsx6FVzeNTFThubwfTUCQABwAW6EXzpdWaz+fQkISsv9EZrEjAXb2+g22kL6m0A51n0DuElNvCEf77elD36xo0cdKKfQHfTpLgOz42IeJLKlW2HrobAxhx1Dz1H4rRl8atrSWnx0Mi0yRgdVgLblBY4JBXEVcd3S8Y1cpef2V6dJ99RX3xkOT6o38O+3GDZlxs19qSw/i0mXLV5ImDNpp+IpDrV4PWz73uzUwurmxgtEjc1c/+zsxIzd8brQ2vG9WfRQrcJqN78W1gDkeMIRypaR4E+UJILXerYI8hyJux7IeijhzuQigv19xnKOwKmSgREmZ3yWxGOmAFBLwWzoTq3pXPtAeWro4T8Bu/iVdUMDr5dfakvc++Cf4PL/zm9Wook1oE0Da6PQNiXDSmUgcpCuDJIWGfeMUfS/YLLeH7TMdtrfC/M2+4T9M2OebmgNeiZnmpjpLJ0v4QUhOYBrPTRiEoW731prZ3auinPvzAZAymyYMTK7laavItiS6tKJRdeivXhgU6ETASWZiCLi04yBy3rDzkMKPL65yhbBvH3invv9uY=';const _IH='0b214b67b659fe72ee8c12cb6245d0fc25d027480f5894afaaf40846a1d850af';let _src;

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
