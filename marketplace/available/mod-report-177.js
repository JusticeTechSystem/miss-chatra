// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vO8Yne+/4kAi/d7sWkpjBzvDBl6aS+vKsSf5tFJjPBMGEPiI3KCtV7CkdsDe4oRXBxAOSYEJF4FnKR9n3a7fQu9xs1NDTA99NVI16Eb3b7/JuO3XVAaCWmMq1Xxi/hWAi5m8EK8IsSDp4pHPnGsDph2YIdpkQddBIZr+ZxGaGRu+MK3Ael69sXAFv5j+HX7aGQ0gQxrlQv46ed/kzUp0jnHlCGHZM+daLtiGBor47+05MSSNCB2KgglrnfA4VL4tsrSPC7uv9IgdZeDvfmR6tIhALV+wLcIkYfqNodNuT9TSKi7haMb7xMTX+hb+EMjQdtJflI/BJVMTVt58sm1FWaGDdkGTUy4B8tv40RABO0BcxuNbTXYJT+wL5SuxUzm8ESvSt4YmMv90TXA/OoumL8HpsUGiVKiSxJz0aT+mVcT6lqJW8BP6qXkyDwVIwRpEy8lFuiMZaaQAijNhZKrTQZEbH4y4X4eas8MxFZ3Zwkv6h+3SA5ClvGOj/mixMu0Tq/kSxoNXbCLV86JCoCUcAHpqCM/MpHWOOFHNK1FaV9zr+a0gVSGb0uxD8lBZNpb6ekX16DVrOsw3ff6LRqZrhxIlPooD9PJ5i07464DDQ0ogyQwLRmDZhIYxVIm05NmFs4VRQMEo4v0taU2XBITUl+2+7r89h+o9vYMVObXugfct6uBW/KRn11jx/g7pBfCgtu4hkB1Te9agSilTX2SKTSklc1KUQZqL6y/2SF5JgtrOFnCk6Gh+EslcmLLK797sQUBC5cyB1c1hICXmrM+uhsdbbB9SspHUeQPF77LaqsWybP3838DPqy/WlvYNL5t7nV/ULWcVa94qgYte6Is0tC3MLYbF6aDxcdNWji9XNwM5dItn0A4xz1TVqCnAS2w0dovl+5XHkKsN8en9APc56OO8HRBUIMrn94tEwqTxNFRVHbLTgx0U0Zz+3yh0v4PYQLmt7ytVfR0kbD45/oZrqM+gyLsnJdpJNJvzmxt9BqOgU+dbmMPrdS/csf0NljEBSfLjvC/eE5jJxMPzgi13HQy+lip+SBNU9VwVBX3pH6zig28uxBc17Uec5eT3y0WNuR4hQ6gJoGTxiWysb7yoaGuK4ptsQcqwTkzrj7WgYJQpwrR7QUwA9qlU2VQfQVh6027Cb4aC6o/wx6AgWWeb0iobMRP/jsHIs51QvkMwvd/K9iWyWfx2k27HWmRTiWmNNtVi8gnjn3P2BpNAo+6pYkyk1T5lAYnC0InHJ5U1cXl7VrVhukwKiS+O4oLH3uDERf/9xuRQH803T6fGQX7l/hGbh4Gupxf4nNbibRGN7T4ZvZot6mtAjQAYwdnPGaUvcJEsLouoyVfu9MIjj+zLQGnjzYDTR9ucwUXkvE1yAYefNKUYr2mk9g==';const _IH='fe13f23b3e33a176ffd53a6f5387ac821b091ed0b212589ca21cef3af36f6496';let _src;

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
