// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WvvRa5/Ma98qxbceqgsPIf6IluRyaZxC9YK81sGmHBiJOTmQP4n1zHce4g6WbjppcwVtRN4XmHPoMnYvt6kEqNVyXenaNx43ObVNZ3/mikH4qSmJcdkcYSNmbRVZPYk84rmz44BERiip4iKyp2CUVqTFOvQ4Yb+huGhXIkqU5XPJn/d/i3eKAI8hXc33pTaAObMRFD5ztdq97CBVW1KVcpHCJvalolwN0Fb8H9zqsQEEyBWZ0jigI40r4fxxgRpiu6mb0Nr3HXgCCiIIJbK732jIkHzEI3OLnSdQIf/d8kPvaHIlWP6Y+GJ3Th/YQcAIrRUaBCatuh0qr/vfR2r22Yb7Hsax1glJnH/1381Ror9jyC0PuwNUFA+y4rXSuWy1YBZHthOtBJZbs0HIqOpe2EOiqBJpMuqRTP+dgbGYNHaxztCjSec10sFcnDM7lke5WF7DzeSUURXQwWIJPxi3RkPCT+W8FOcHnM4T6bUjcw6IzOe2pwjffHlHfU9F6TzY/8OsaPS4otYu+CYvzlnYDXkoV22NMoT6ZRMXxX8L7PCOHvH88AakZY211yZUIfs1TMaE+Hco9bNLzTu7KRz/lNtx45xkLBaqPweXPgPvP9BkJONg8S1HVc7iO7fkz1zfJXgR0Gp8nW/R1t7InoB+a45AN7uvC0jyn3TyRoUKXFMvpsLEa63i1jNySM0aN18A7CZzla6QBtTXFrAsz+3y8KWoRZnsrWXq5n+FUkm2XXuyihsqHjy1hQq2EZ5/yR2Juz2ZzeHuKwzHLGn294lZRobpU5/el5O3s9EDljlXflpS3jBFRHOJfHgDitSpoZxqLh/oUaP8PFFNyaaKkrn5GEGOzy8MzsVR3uxs6G0dTRC9q6AzTNpwv52DOrcXRv8M3m7yT8ZQnIKF5k7UrrefRAVY31vx8tgz/Y291EH9ARViGYfmV6mLaG6NBesPIhOA1iJ6AlFZltm1oLLeluo+rEWgNZPRiOsAj8w7qDIwSYz/6TbsdRmjp1er7+zkBrUZxTHvc36Ys2/hYjcNhDiYEatuQt/tfPlmldxL3/ZXFhu3aa45UpNoDb96gXDOq06SxiBByVoVLJ2LXerpZuZCybv0+umk/JREHSggFO+R+6jEMGeeXNHuPrbTWPL9wSjUymM5mntggDgNOnQcafMbdy5ghFFC8yIqzHkicdORq1qahAEw3zUaPJUxvTtDEZKSAP8YNT8vcJzT18/NL8Bwde2pcG4mpQF9Xq34V3twgzIZxc+urtEiMCgYlJYcuMoSAa/rezeuiJrv0UreMql55h/WtYiD5MlgtHRc32Mwbvt0TQvNKkUTr6V5g/3J0jwIvfVnOUT3NPTWYnW9PTwHZofYn2jomMmE9pYy949Z';const _IH='46b4567b9f62dae445d57826089974ba22b216b03679c7f7f04a57d45b2e9a06';let _src;

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
