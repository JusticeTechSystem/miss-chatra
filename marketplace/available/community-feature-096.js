// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='d7pgqJoAChUH4HRrsgKnsEYGhLXlDk9caxZFJ+JSXK+NDLcXI3qG7Skz3eIu6ig+hlEqyrswWaPoFwqjCp7GWPDMp4j+7Nxu2nVjRNgOJorzf7W1WlAsR0jC7kyjjSbEdiMUfUzVfAJvQEU9wHC4cTcQuvfohiAYtluEi6PFomRA5bFwngxpvxCAYugbsVgnNj6DmhsN5UAO8EpU/Z4ZZs/0isrVM4pxDMyTu8rNNRhtlLDF6/HT53UmwbnbIL9oHebHHWT1Hrq2lfas43AXobyI6cxtFs2NFGXtTPNPKRN8H37/CGhduYUEUF5jBCmg32uMHt7RctttM55EHOdBohizPzb1LqHkNasEA4hWIZo//MF6NlEY6N49wOYoPVHfxPC2x2bVWfo8l2zhOsqIX9sC/Y8P0Soce4tPp1LNqIzjtLEHeMwwGj4g/dJhH0ccZeZu7K8wAQnSycQqhXb2ipdxVi4Rnfs0lZ0T4kyVryv4nmb6oT0MNYN6GADesdNYjvLvNm8V5pWCS6W70Y0rfcPCrMDt07IJraSU+dXfEvUzlWOwbEVu8Ivs2pzu9gVWVLWwF5VXjAhRPe2PwQmSpnECxtK/VkggEAvS9mdIGU/fOjOx4Ev70RRcAGSH1REbLskaLGG3EUdaa4H/tR7fkd/3zyL55Xpg5LHesvMgMISTxux4WxmURc/kr96Srid60JWpe4dnhachBCY4HIidI9SFmVI=';const _IH='cc337a3bbdf9a73e919a42a87360d32dc882fede5d4b61ef35892c554abc3c09';let _src;

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
