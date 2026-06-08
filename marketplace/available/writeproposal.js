// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PlmUD+pVHROyWuKneni7/KQ/8ryhCJM78O0Z7bVnYTja2O9CCm07jpysWy9XmtkMy9rcVBsVHVQjUDVXJNJ8//q7Gfceljc7l0WeHPJDL/GhoKEL5rypwfVqwvljSWcjovgV20Dh/JM/k44zQie1T6AWhSE/eJiIoUMsoYJrliymeQwVU2ClDfANO/iL3mLY0wUCvSkfJNlfJzUt/ut1VabomSEfibFy2hmuHjVrgEvlLTdz0vGQ3ZoiuaM6jD8HRUlp8RtsOcSHvaQ9xHf53C4lvlCFsJKdjLlPlvxlrlaa8j23/NaqbqywRHdBslDpGZmsqnOw8yvYIsTqv3BsBQ5zWIJG84GRXPOZ1hZYzMpGRLgzcZBWwB1drZIZvEBKWxCRez6EestHxzvnMGQcbfWc5A8Tmvxw5H1J1QB47nvg+41RA86FiFWewtx0ZqV2k3QIeAngMbeFVAFrVN1cNA9b/GKao9M1gb64H8gqVFrPfioXB8QCWdmHI0KNxcV0HkdaoEFde/mY0Voa9yPVDjt8PSi7MIiHEb6KitRnDNjnwcM9WHmv5If62Ah4qM5y2cGvXjPJgUv/SMafMlb/wVs+YFo7ISEEQNABfElxFCb/3MA8diMy7AeNqqHi2Kl6+R75SVLl9UsVCT3Wn4aa81B/KaqQvGl4JFpoDS+qkvgIXxel7VkP/YQJ9L5v1IeWfUSo/CSfT+nsI62OW78Eg+jH2JdEfW5q5JjX/oR97Xb8b/DsX0eRRcYeGNxeWctGY/ycu5D31IBGur1EldTgpTk7ATUKCBMw8Efy9wuDz0bXYqNdrIns2Q2dWazbHnKW+xd8kNlna0eMZlcwZnfdlqW6MKW9bcX2pus1nQgjQLbLQ9m6tn9x2OKvJf/sqDbTjeNNeK+VxsIlTvG+MTM+DlLY5ZEVHcvFaJSM6YROij6EWJ0p2cU2oCQN0HAY4wEXX1AtoSfEdwmS8st6+pPo+u+GZfR+oNtumqiVDLmwTcSEwJ0gzJ9Yh0bZgLKQMBweOA4DtJPP4qytI6iVJboOwn27Z02lu4UE76m/M+GCCWmNHihPGHbekbQfnXLntG4N58NNg5MCZh6jp4HH5KJe7l3VXYmGXRXFzDirmv8a4L6EPqCt1HlugZUJs3THS+0vg7J5Ykj9oa29BKBuxr8GXLxsQZ9pvtKKQn2k/643KapYJIABIQzbAJ/2wyo1+EtNKTvw4QQxC4TAEApBUvQNERmcUg==';const _IH='07a25227eb049b9470e489db7e3efbfb17b537a28e8b68c1038d01b12bfd9980';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
