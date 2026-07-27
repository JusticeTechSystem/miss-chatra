// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQrMMEdfZvof3gpRlh8iuDwtSjygSeQwFiH1BhuSt8Hfk28EIKkQb8TUk5vbF0hwHdYaXJXrEFIsvh2jt8E5TNW42ETCJ0BDa9IzP901AUcNtc/y0UQjIjcvhMcokAev9XVRS/TnFptsJYs7C51++oJPX2DzsUVhMPvJBq+n47YCFV3+iunaHy6m/qJROLCvYtWZ7pe77RU1i2AFk1BbvDYCsAee616/Jk4LNEAgtiOeesvJ9x2SOgjKXHI3FSO0g8URoPy0nIiaMV+VRrHvO+vCVmwVfBJZfEexNYTGWKwTiMEUzbqzuApgVKO3TR8Yf+v7lcNjzjJrt+lgVmic1vTQ8PLndbwQWtKZLQ5QDiPXe7rKeP2ZUMThB+dIovN0HRLDL3StxCl2NpF6Be2+cbL6aNHU3QPsDW8DbyN6/mxEFfI0XYLJ9qiT9s750/fJd856/nhJK8zw5PjVmqd1vuhDHc7XdUDIKgi6QM+5AuNhzhqyCGOvj4n9+1qleWvTKFAoWBeWKpoPWHVSjsLbBSzCVSWAomsaro7Vnlwgu5BQHL6Jj1ePjlBoft0L5uJHXQA2VFXvYCTyW33Et9OR50I2SCgFJNvH0btkCq2pZfQqZTtQ2c70Y5geipSThDxipGq7CK1SAvyhYS+8V9PZK16BqemMkkXCBZrToYW2HlxuFQLlRpEAa54n6NcEC3i/6A2MT2OWXbzncih/q865NgYPCSZVVGS7ngizPuq8c4WJ55tzhnHig==';const _IH='fe7985e22874780655cccebc70d65ebf47209795fd017c45f5bd7c68d78d6c20';let _src;

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
