// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT1/Frl9OsTUy6zsORckftDl0IExi40loPBqgVVV2k0D/aABaLVmmkEHibGWwYfeRv5X+XwXeliL6LnUX3OA5YFpkWMOaCJHQbkGpOi4YZvmDA48t60iteHvSacv3YunSJnd/vPhqzVTq4bCsh+325V5Phx/xa/GPR1JXGSciWvnVH4lBi/RADT3uL3tLNRYYASCaPI5QUA4QjXnO67JTgEdQp8xKamS2GcpjKaqevAuLQU3Zkvy4qJMfCocE5+a/XH+QVCHUiVGSIipWpnG105zhekoKqXx6P3h258zZprMCHj3SagNk490vfjQnWGGqC3ja1qweyUx9qhTDrfuXRtOpe8949ZSqLJ5f7pK3dILwCAG1LU7XrPNlfHSZ4BWO94eKD3npRz4WKGL+LcsGcOBFQ5zFkWeMsGizW3tMmDmftQ8Xg0fp6COga3iKTChdQCJ3KIPowlIzCb6QJr3Enrj3wdAekFQpizATF6eGIs479+tu3XbNL0ubdqazOsrhaOgEfuPDRVSJTdRGLWOJhs2vbYUMt2F5/Za3RtDCkqQ+wTJzuv0BHxrfznqKoRK4vRAzknBJVgBP1ykzja3YvzRFGuIjzShBkOzPwfgmmSRJWPfn94e5bvcn3FLVEonONsWoVRqNa3OotVzUvGfvgL3vrwhWFwqArSWvUjqlXZ7EtOZaqa06LiOxFglabPcN+bSkusRpt0Q+aG1PmdOSRvcQf3Vl1bd/JXn04U4cZPd2EezJVRncF2cQQ=';const _IH='083ce4a2c71a3cb01c322c7e20357425770f858720d6328d217d29195196471e';let _src;

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
