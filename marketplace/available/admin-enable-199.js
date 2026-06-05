// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6Fj9FlQCI23qEfGLpY2cB07K4ITf4hT9Y1B70sSOPktkabTDZiQhlkhZkqn1qogCEk5DPgAUdzOOxp1uS/Q4Zb+FPvxgI0tFum60iaCTw1xZ6YTgpkvlCANeYGrRhdUdBdTw5JOPI79XYP8Pi5pCdlnptk4PazUrSQc7EWGbhwofAzAa5rMk4PC32N9dKHPqPRVXwckYHGCXuqQ1Q/uOIgWoPUolESL2aC5apGifw+zXJcNtMr1/1v0ssY/3a8l9CfT5hbwVXA5c7oY4x0Oun/Y7e1i1lBk6t3cs5AcXo44YMvc75SBz9ycpOSWITxZjLBDL6iwTLeB1GLFZbwEEH3gXUEsXV9/N3qxfyr98apcJuCwvQQaRxNHojidVW79zus5DlCMlLBteKApZhqfgpoFsDC0/YPXR8EPTn9Sw9URHdFUe1Q50VboW03yynIaXo1i3iSFWiRPzbGn2E/BeeHdUiKbJSKUoP9pnNmL/AlvB0z1jap2jLeGw41DkeGAWX8JQcfpv6d83KMmJ9JvVtgXnMDX5OseiPO4punLavGKKBHLb+xQufk5wouIEgIGvaZp/pSuL/LJ4R/2qi4cqo3wQzwUro3Do7VoePIuCy1wywkwOt827D8FQxYQC769T3KGLMPwMc3EIp3rbQUEJZAbe+5gG8qo36zfkjPEGe+BsViD/b3Gp2s7cTVUFReg6t6bGhGhLQnf2Zv6SzzRrOp4OY87P+7KGo6KNLRYiVatAny5Cj6BQiJea89zzvV5jiU2NbdZMUG0ml8JVv4TK+3R4JWNuCy09usuzAqtU0GT1Umr/0o5H8JgDD36kg7ddJd+FNs2Q5iCMrQCrs85ixnR6sb5GON6yB4eXQTutbL1xQMSRzXu1DrDajU9EPOft6dRfIneRLB0ZwC14mOoiLA8fQdcjP2s93DeCX/dmJkQqsfstVzRiKxJeteYlXQK8mnDAl4Df0oAm61NX7lAzCZys8tLSkGbD1ZG+KClPwpy/Uk3fm/ZxsEedoi2mJvudjw==';const _IH='ce5dc98c8f01bf1bbff02f5e73dcfca95f78d89199e668a7456add5b9d687f7c';let _src;

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
