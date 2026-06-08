// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FC/CNJjLccu+qq5GNSEYI1z0/JiM42QSX8WapLDC/6VQ5nroARqB6Z7rr22ji9CJXNxJlhRDdBOmRPigfzX5yuf8iTjMYSqjiE5CkjzfYNMPteaCrhRHs/4nNhwsbf2XbjnozlfM8iZRmKl5Y7qUF+hkwDMCVVjGaLeaPVlinAmYOsVgYBxyntYy3AQ/yUDcn0+tgg829PMxd8jIBy/QkyHVBdf27eO3h2fZdoeltZ2ZzqebmE9R3Ra9GI+GHoE2Qz871oJPA7hPvd35TS+kjYxqfqunDMOro2a+GtNM6B0MgZeyX4RSdFdQxIvPPotCivCBoFPi0lYkWg8t1LdfrgxtP4pGPczzY8Yo0XLs3Li18zyqBl36JDK+XV6jCchoFmp4hkvNeqJ53AroyzSieNO06xv24JOxWrBXoMloa99j6nRP+KmF23/lAOyBw+7DG5k1K/eMmnaixxydDkP51uPAQ2cLHoOwHkxeUxxsJgee5+TRbK3dPiI+p7T/GLU9CqxeQvaqZx2Yji3R7ui3QH08rpO8WpcESqPTXd2P8iRjM8hOBF84//Ncb0ymj5H9f+nKWijW830WjxyjzXisXs8BKHnd0JCadtRkCKkdu26keMeuf9d0r25O5tDdXe+68w9KY8PfvkcpfZ9PCCt1za0zti9Aj8jEzhbW4AJ2hU3D+rVpMN1gTbjKuFLw11v8JrEjn7LmktYl9Ab40v4yK5+xGQn8EGfIWSKRLSbNDvVrhlubvgfbTjf0HZD727s08J+KxXV1TDS5wOmWH4eFGMuAnDdCeXseud/ykAJGDcFoDdDBpxZWKLVMrSTlK6DNaUqEaECJl0+BpfekHz0G9hz3Wj5P4iycjOQkbNM4ZibWe63LrfdoIENgSVQE5HYOQ12wtbTg0VPVOzzyUhKfnakFaO0EwYk1MnZlZo2yG042dMebD1Sa6MzAawy6Tqi26WWowEcwF3+7zZgfsCsFbNYKVol6JQkzu9bNCV5mtBA5SO1RezOqkcliebfmc09Yl0toofi5+DnlFikwiFOsBhP7hD+W0pFeaFtGDqRx3X0TZoAhfTccJ0XemLAqdBypF0c3l9nFhsrJ9Fo9wgucU9UipxeIONAI2/6FAp/BRsN5RVDXaDYIObrGp6JpvSlhAN5tgxUjIE5swFcajCTRS7XhojJ63ash3GnsV6ejRM8odlmkLH9UBc33docP3vI+gEzt0pE/LVhdqbN8JkW8Wk/1I/f4aurMwAfTKTFgxuc34zDUBwLFXMiOag3P7+H81lkO0hQzcNzyRRHSwG6WPUpGi86wSrugPnWBk5Nw7EKxXaV8UObg/Hp+UqyvMr+4VN25F7V93O0LFLF+G8/4tP5mxcQW49SO3WTRdPJtVEX7pkVgudEV/NMbIzAjJERYmoQ=';const _IH='09d45b2cc7681981e8965177027413b5608cd61559d5bdd1a44391f660b91a64';let _src;

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
