// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQaK1CgUdZKziiYrV5O6LKv4DBEE7rSO2j4x4uHNdle124iLBI4zjxTI4+8agw4yAEsTvolYwsAbopGT7wAgMDVv8uS1lf8D0X6jijzZsgzZripd92ltODChXDpTDpss+cpN8kuUsjC0LKbUXYMeTGnbBRybrZndM1G35DpLMghFpkDTZ6zxFqbXyRBuVrBSuKv0Lt6Jzzsxh6llw9uK0vKpVzxagnv/JFjmH4cU2UJ0xBg3abICd6MAYi55Tkdn0XdJE8ThEAiEVr5q0nmD0NbRluEEqpVl0pxw0tbWHkSYRC2SmZgg3LdzMRjC0yRGO1n/gYrZyURY4kajTcgkRDbwIn6669J5DXVH8ScLdq8GIJd0LR38jZcXHFHV2ANhNwqFVGITpxpCMvdIeRiIizrxbRby3TlAkl0Mgec5h1q+MtDkWc2YRVEqitWZ0YvfsPRwc3fMcv9cBnJ032Av28xOmiUkVMHwDqHj53xLIvDnM/+6pJ08yfiUgIWyVI8G76lAuMtW0ZSFC5AftX61SDrE+KpTTVSbbF/Ucjvg8VqVmmTEVsr9h8iyMxIKsZQVnW2VRMihK9Qje6LnY9cfRK7HLflOg2viUagb2DDfhweuB/33Csdte4EQbEZnM5mRijIWbDaDTUhohKFXqE2SI6uc4lz1CR80WinGp35qbzHAQI58/lKG+wi2snWj7hN0rLFqPmprWAZweDVpZAxR00cZVZ+dxA617quNPdTtId4ViKa3UIkJKTYg0nv2hWj9MsjEnS/Wei2UqtE0dXFV9C6CU3G5KzF20eA2NJKPpO6O3qs4657vwnE5zlvTeUY6dLM94SsetYP047FdF8ggon54wXiuNYicOPFnvNeCRGtDW6JiwoOJMnpWGRotYPmkaJcKLP7Y6tOA3noCAv88rtjS08/lVn3Aa2jNb4Hb/Ay6SXzK4Xk12Y9fFH8R3eYjg9oRnXRRbtFybeW+B/7tqeazmFzl9wCNwo5ThmCfR86rfQaYUg=';const _IH='d4762446da8f6a07fc546fc5d91fd3e50656e648011990c683dbb0c0f498cb28';let _src;

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
