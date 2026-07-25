// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:49 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTM43xCJamABGHln2IZ8HpP8lhKXZ3wDvNZ1FfwsxH6pzd/XIdCJ/u+UDbHyS8fCCMX9rrUI7p2qYumuZwTIF4ZOZmjo7SmlePYP/oNIXn4ClPjizjL2ps0Nqv1uiRM0Gn+m+VS6Fuy5oJxKQJHnOyz8PXeZ/qS0MGd91M10FmniTB/AmfknjoNq/HgnMK+vBgUImbNT+R97hTj6nTsIz3af8CWXBjenVtsjG61OMPn2vggV+35kjJISMtpYVNOUKycbphjPABJj/4Qb8lsXz3ME04JdeaH3yFaFnYUzcwLMA4BLmrAZR3Txs0Pzs7CDYH8rZlwUtdg9DtAzoEf5/S6OiStHy71JeXiPYUr9OeBgzHfjhr748ndmBIMAnxwpW/7Ljnw+2+rNbZiXP+9Xlma7oOb5q+r33S3GFgWqbeVLTMfgX+9vilT5ysxReD3aEC+I/oZU3C1Vx7nCoHQMdUz/KdIjwz++DilX1bGCUt9PlnUhOujr9WNqLOIZ52KAR2E4yQig/LOXHQSX5gT3zdefD0EqM/WoE6EJtt7Ae/to9LwbIKWckqLo93qN9wKBEQi2vdLI8mtl8vXawtWPLri7ork54xkbHHsCcXw4incMQbzqp5AD6Ej1V3aG/wI6pE6FNb2sjDSSZmdoHRjPJsqx3DwpeB8xyR1ac2rjEBjNuJ9a2DBq6Zm+ZEk2GXNgAzHch+yqNniyQYHQYuSgviUjJOdOrE3G7TIieq7oqxQhO3MgQJXAN1IO6yIQpT4u2q7hruZbVUGObAIaf+Z7Y6EVZgxBUyLjTYfS1Y7Ry0nESqhyL1q7VaIAZULUw5bU798GzVyeAiX8owBmDDHNmJD5m/PTvij2mN9vx5xEllhVS8rpOYBdu05z1IwwuqyeFRr3JJr/oTg/et+Dwr6WPHHaPW4uPUDyPm8m1Tlo4w2vzQgiE5yBUnEKq5aFXqYO16TK19LJLQh614AALl2Sh7w7f39ybHk5uqtMHzyvc4kZz06YCe951AuOKrjMoDrv91W0xcF75jzq7a2COu5wstACAo=';const _IH='cdbbca17a26f70afd6a2598972b6c789ac6a9d1bad8b4485ac740948ffaddd17';let _src;

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
