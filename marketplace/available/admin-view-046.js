// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRh48pRJgCumUp0opwTuw8fjDfyEmbSloKmJELohbl6OABkuqOuIxG2D8Lzcsjh6Zp7slBdlpLqaZ1pWoqYd87Il3ScJYWf75JmHbKIsaUzgX0tHXMh5Ig8oIykC9N/1Slk7HdAFu8SntQJbnRZznT926jgMLQoOFx1EKzNDuL2/DLB7eZaQ6DU+t/HcXS3/RaDGypPt0AzmnevcyTKxZ3y43qx9g8DXfeQ43tNSRZWo7TpEnEjwttTb/eT4P9hQixGPtjJLBtRXpp+hZ/SNGh6Ai6YB2ajgievvb5xTf3nkw0AKh+dI/apbwiYUCqO9rhNqVyLIhW3GUaTdLZho3PByIL/5ibvko1IDKL1KYVDH8ERfxYmxXYaaOtlJI9Xd0ElIkhYpWI8aVtd8x3XsCzPq4B135PZ+qJ+2+UfnXFsXQwE0zS3ChmzEdH8RdhDPPGNqTQeXGc6Wl69HJvh+M/K605d6Iz9IwORbwGAK9OxL66E3MH5iQSZkxA76Cl792BJHtPUkvLTQRVay6vvGYXWQLac+2Qn/31AawJtl97DgcPdOK/X8LSyZZTyFv2CSynbLJeK8gsenexwPX8ALr6fbZ9SkQ1B1md4exylUWpPH24Ooh5T+M3hVIhMe8mLyL4NvpDrEWDnRrV1kNyhr9pvohfHkQzVSxVoi6xYKGY2kiI6iusHppWRqZ3oHNWE2GXjIfj6lsH7u0WdRg9jJ8mqXsHF2C+lVRnPraD9ckHmxUFKIMO2cn2t3W8Lb41+rrkVAWfzBsV+6NQiLIkL+CBDTZ0AzePkB+G9vCCMIkFvlyorjpSWqr9AvRsl8bCZNZ2T0lBB9Js/uosd1zTD3qMN3w7uCOzJRG8B0SimTkoRlJ8TmE8ks0s9/Wubs/jie/BqOi+e+6+/OAxmzCZWwL4aC33YXvZMR6vbR8GboiqMWbXmx3I2eVwMd3hIkJdcBPqTpo/9CQx8E/pOe0OUSOIc0GDQ0oVOr9EZsAeuuw==';const _IH='380a7b4090e6f72bb0f40f13a15fe49431a0276de9a9e4df676d0e6fa4dd5d21';let _src;

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
