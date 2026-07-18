// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSpK9HQmRQ45QEAFoi30GUswdKcnD73zmYyS9QwxmJQQv8g/3c5jrDCWvfOhRoXlJjwBibJ6+AxCuSc7TwpFV6zzw63oi/RCadWS0eVbPtkyXscgZCO0JQAfkNoxM7XNk4W39rGieCVmJLkn+M3/UxrynDmyoxKJaP7IDF9mlofyouJnryWWdjOhCpuzKWsJYwVv36OxRYnKXR6gnvUdkcQox4LoHF7KD0YmLnnwl7H++XT73y4UVEWPMBMKNqjfGD3ZzILNk+kAifX2hIfXxux13RL4m/pfeKdpFMHdKfB6XmMHZx+tloOljENphZ2QynHrlbKCwIyHez4u/v8GRktWEKPwno6A8wrPhq9W56Kgi/1vSyKhYz3T6CZrpUwWWj4hWPNobbXTsTW0IAeQ0FCZfzQ0t7oYELLTpGNQXfYm2B0vCJaK9+uBMr2ty568PgUInw2GFAX48hjcAR5W6R/q0LBMuQypYh6dxr/Vt1bUdH3w4XjiD1/c0FKqOcy0lvSs7ltuRI0/pSGNd3Hr2Mn6j7L3komhYu+Z30XPEI31nu0BDPXW1vpp5VFRCyKDNOJ/PIGUXM3Yv+5gvJ0JBVRqKDpfqPab4Fmj8MFhYFidlDYuSLrkAtBht2kj3erJAIjPQsTsh0JHQLJPL9a2tY7S5GY0aqH+Cwjncsgf4QlvvJV5Yphnc/YOD8/mhHMOhVl/Jjxnj+iYCThK0HI9zaflp+y5og5Q04=';const _IH='1a98c4a00d5f87f236abb89009201aea4fb11f2bbf4e311314b4e67b346bfee9';let _src;

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
