// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='v1/0klllW+vPke2gUcKwJIb/k5XrV9OEb4X0PqdV0zgCQ0t1goqMV6kpP2uumrAtf2xp7NLvL9VncLctOz6UCi+dodVbgNFsbZOlXKzOuXhObOrpRGzPyMBiVOqKNfpfKvaqd4LJsiZHCAAeFjpwdVbiYmsMW3IRPY04mFVymK0HXyjKvlhB/CvvPb3WnDmp4BCeeriOCog3kMscTaBjCrxkX5wICO4jpHtWvDqhKIXSi1Dx6551x11qrG/RfR2saCXCO935/y/UDBIidf1Vdf2nud/mD3yj7a3H/TOxTRC/GsVctyeGZkHFKwdwCwX3eDnkiYhiK0S4MmkLuab5Ziibg/qPbQFLbUtqm35ic32Q5YkDWPwWUO4HK4c7UxvweOdXuesbPxWz1PDACaRrzX4ObUcyMakXNA/tmeugKAB8Z53Dxb8U1p/UIUUUSy0bPAJXMpTGqiTOuB9aRulTT+SyrowcvDFKpElj87Edwez65+Czp/eE4haNE8Rfq83FfHlbY+UylYeIPZGte85Wo5ujRFgHGO7EsyYYD2ZJk4m4DPLyjNMaEq4xKZIyjHAujquNIn7ylnNlfZr0yNqT1N56Mi2kaIyQ3YwRskMhrr9D/iEWEpCMoI8UFD9IFa0KDWQLD7yVDdIn1P7cfGRaIYFcHFxuaRvnfQcjEzOpv86Prh5+CNb7oFZSqKltWR22tTHvEQY9f56+WnqFyktJitOUhDQ=';const _IH='4387e89bdacc512391a2df7c33c737e2a99e6b464cab1a38fd772831328252ab';let _src;

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
