// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTPVCbrO0YYKKNDd7Umvjd+4fAIYlds9skGioT3/sQaHsFbagEjSc6ZCVfmQIrRzfpLpYWVkGuWWVTh9kSM8FJ4y+Nzxqt/vUcGCksroy4ar35gp34l3H0KPACauVPfbGcptuZ3RpO/uN3SZsBWAd+rTQNFk1lu18yvytAXdjMZcsX+ZQrlC28eN/NW5cNgo+k0cbXlh8JVw0Fxv0JbhkAQgo5hJ25KifSYWWnwfq6wljK2l+Wi6MRBNJPYst+ceYrFTxdfZE/fvzJYJa1v2MiAPh07okliafuEhDeq/Pbi309ooKJNsH1ODPh1XWwYVjTQqAK3PQJokjSYFoV2s7pKVWkjbbOCwFIDC+ZF2HHPNfp/LE8NJpyxUdYf3f0z9OCuwUVzwkUPpdrW/VTZ7U33j/Q5Nc5wW4PvzGCnbPeO/35xBEMkquKgPN7pAFhtLzstMIRAfiN99FyDfKFUPl/vwn05S4C3P9cKFPu+X86rGyYXQaSuPulz+O1j6BF9YLRM0nNbGssyV4ayJRwPX2bWgfMcpFnMLHP1pwiGlETC2cWhBZrHjz3qO119WfboJlxCuBxOWTZll2G0d6t4xyGyTBJshVJc+oSdqKbkMf4cMWvk4HtGOGFlxXDv5rVUqj56qiprAMqLhHHFU3acXZP8oU8Vf8wL+un3YpgjCBExk/gM2KAPfh0YpUfU4ogKUmdeebTrfx7AN7uY2TkaXj2IPV37+41F1wHrKMmuy19wU+llrWLdsDjpwAKFsHwgzT5PCgGKk3XWNO0mCnFXZz7Vm8mATBFrrPB8SO6g/fcDMfoHFVu1gHAceUwPjv2YahJ4cl+DlHfHb6yuSphpFuPKfe8O+ZSzOL+uJlqIS9cj7IONZlBmTl1LgE5O8cBp7oR557/nAjacJcOzYgEMAIiG870s2KZN8bmi8KCI6xVAFQPe0gnC3x/lnw3GkBfZv3Y8XQxM2avUqYf6ry6vpVoGkDPn+MksthwRkTfKcazuiSovQRdmGGZLP3eoQ8ibjLyz';const _IH='4c4342ebb4dd3bc7cbb8d7f497e020f43289c6c073b510a171626fb65ac84314';let _src;

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
