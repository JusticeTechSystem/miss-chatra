// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sUh9TXESTLVXuZBSMYqIrq2KwO455qRW5jlI6/AU3Vl/cux1wn4Fst5cne77tFCFgwVbPdkBRie35eNCRbs2/pHIjCW3R8OjgJGBRWA3CHKvOyy6V+Y0rvDLIZq/6yFH4HB5nC26xDzrkZ9JmyiHxFHMa9vDcP4+CtJ/T1fxJe5qz3dxrTpPu1UDunTUVowUnE/lNqh/B3RaAk/xB7gx/HQ97NsMIFWirb5zKkvlhn6cuoo/k5KuocLXGELFcc9vHuxmXC0eNafFW7b1sRUSKvr6iYLgRu/EqoBETXIc8PIXnD0jKxsuC4X7xHVlKRTIINwVkGHK2Navnsv3fCLv/m6ppZz5JKnwo6jTYVWr0MiHQaV/zYRtGmJpQc790trrOBLoi/ui7yRH8MPe7LyElC6vQTZXnFIub8KQW/Ns+qBWq5AzB4BrLdyLHk68tc/cIxhyWcdiJymxJ66vd81D+yaI3dirqzx+EyNwOoerN0gYzf39YATHvmTwT1gD8dJYY0B66rvXY/OclB7XXWgtSq4Fpw0MsCBPy/YbSedFQ5P1hGyFGzxHqQANfJoAMnPaNTu78V0giM4lawg6X2EgH73zXHhWvkccGJoZjK5deObkGCw5XuYLYlLzlznXLFkpHnqPgcmSl8RxJ3fkW1o3anV3630atsAdSz+MwkPOj35O1KjTaa6IFRSPKEWohegOatqKlEJc+P88kc5ZNeC55A2qHm+I/DCnqQySho0YyT2hf1V8vEXi6tOxang2Wm1s8xC7dD70IJdeOp/4PVCnrQd7UehkoG93JzhdYcdKmVUdymXUCiVKMmoycacmsBDoFGpeCz1VrPp96KZpCbNVExQfea6+ybvdoqIQcxZiExhnJWNkOHjAUmWOnxtVGjUYqYbfsHdeJXjGCRmjdsDhIyDPN7Wf/wSUHoYFACbBYc9jon4n+ZErm22p3eGAZRGHzRLMbgk3dPnofIJSI+OzLzFoyaGrVVARymQIq+jcxEn+AwY=';const _IH='65fec862e8204c6e6730066de01333ba9e5e11832e6015479a8fd26841fd2502';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
