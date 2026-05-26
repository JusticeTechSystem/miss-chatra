// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WRGU4Aog6vW9RS9t90TTol+0KovqDfuL4avR2MR0FZNbeN6mFG4fjkM/1KRFWlE/8O/DGmiaRNiESD6qe5hrAhK8fQAhVsZP3jR44uxufjZUPImavMLPFLB8EEommeUKI6GG0t0typUialDeBVPskYRAi+yxzAdtYdqj3bzDmYXruUrmtswUVO2PnOBqJYKtDII00W+VB3qCYuwdWxyUAttmOARU1P1dqEnb20AGMPZZkbw83IS3ycM17uItcPrlGfyPhB+c2fgkTUS4xOlwGeVxsamffV3P8W39hZ/x8ImmWEZo/LK+H21UlLddyI2ev81bPHOQ3igIVGi6dAsdtuIWp241j5dClZJjo6GDHm820gM80bvaWggWWOLoSNsR2/gOZvLPv4BZjccn7OMW9UPBLlmBvVLQX7CmciGYFyUByr0HGUIbxRXBwjzlvmFAU6eIpb60witdkW+HbNrFtmkWi73/p6MxicU1FSyKTuUKDspzAkaQpmCy++himGnCdvyNcCu9s3dLJ2MvLlDtelp5vvTyuheBJSllMNXH29wvzkfspWyYMV4oVDbNqWeXZ8Wmhv06mQAbQ86Y1QTkmTr6VuxnRbc698VtmVpvoICNfvLmkyGcDwEDUp8kfYt62Z2gFxh7vMn6YrBUr5TPaZzwWuZ5qcYm6lfy0U/YR8XVBqvo/+nEyIGhyBztRgfP2fVpawripA7APc+W32UGyLj6H0qLvVCNHN+dQTB46Gpwebj9x53LNDsgS2tMn+HnCJeneLIDCoI4uZ7Sb+sfjhCUFWg0LD3SrryKa7rcNTASGhikzvawbYSldoTSNEDKCYohNuX8aLecqIH09llYersZs6xgihusGut6EZmp4oqRjao72VzDHqR13UTrc3oAgJ7+TrIWtIi+Jq5CJ8ZwZ/pmJdUxr2vK6g6jneq/jNFfvSZJ5KXjXgpOdkn2FnsYM6crhLBf0ib1wyuBCoZ+VTaGr2VLhit6FzQXIWEJLuGYDvt0biVQyTb/KtJ1dL5fiTAbCSYnBcPgIcJk+I/1sRsJdA5xRtBPUDEwa08vKESHGlSmYtB+xwiDQ7+hoqOgnJ6AT+LXwL3QgE3AZ8uSL9FRmIkUB6n6CaxMYfdeXHb6BoT7gpiadCAL0z9sLGZh+foAM0CFliZNysSrxFuUblEAhbsGZ6OQCy/TUvypkkKiMDLjH9gOGbB3+pdZgtDDv4SfUBzxm1v7';const _IH='3d070c70079a8912000dfc5e5307594497d4cefa8970322485daf04f70cfdb05';let _src;

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
