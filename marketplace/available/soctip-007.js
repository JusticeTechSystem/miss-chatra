// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjReE2ATLQ5BSbVdzgwr0Vry4MuILeG1yS/X8yabFNtCj3hmXHSq5PKm95qOGoYXc89WuhvnGMWx00h3JGqa0lWOPK3L44YloLMupf1M7XiLXwINjTfKgYrbkPuw+NIZ2Xy1eWIko2b5KpwFLNDZ/tefuACV21QFK8qZEZ5NvAaiOiQq1kZMtO8s7bL2ltIPK7qYR4A9WdXznpgrMSsSvk8oQ4YHEiWdi+HGvPz8BpdtraRlOUM05TTZb8CcCNnmWBm0i04qKOgr+pWicpKOA/P6UUb704Vh2jdIaJscq7BdOFCl25E9xipAIVZwHCw2bSX98djvNaNq7DTyuDK0mDhvV8JIrbESmfic9FcM4FoBVhi961+uI/OLW2leBGadgg6HNaZugEsAO4x4Nt3sSIyf81qJf8zuPBjYjoVkQ3Jp2UrI9a/N4nFf/eHLpU6GLK9zaYlmUdZH+u4vZCjwKAESpf+C/bFV5Qb2tdImUJZpeMPcdoq+wt+mzfC5pRxAP7j01SDGOaHqGEPVlynJTcj9YW6ifcpMxOHtYOjJiAezLVFjVKjjy12O/w7ynBVPDRsgDobmXHMWW8EioX1OuCbmHTUZsEKyiqlinjNc8QXUT5eYd0upNQyPRCtotrZQ2LJzRPeOH0uJjZI3759SZB59MGdzroCI3KC1LGnHjNBVl7uh23bbE0yio0nucMKCL8jFUcTIo3ywJhX3pZ/J3hMIetgcOscT4kwxPQQuSQojR15jswJaLJgwsUDUFqHJm2T9VB6ddmX0Ge2u4jNK5B47zUI3zACWYfFZaSO0jGAuUVDVMySwutOM/hsJCkhnQc065K7tmW6W/0tp0R8irno/lNvIrriJ+CYrsJiQZK07fCn32c5cU/pyp08C3OsFoWCjwffz17JLgOpEvWbC0Yxu/aj3OK0/t6Z/Ln0j1chrem0QdJ7UN+4k++lwfpRrseiKbMXQK1gbIROfuHPr21hkPJwLlctUgR7DVsSpg8J+baVt+AERat9ytL5X8ooJCgrihuv4pyP3P8ABKrNtM2YLHA0m9xBNlXGHcBgfVbC7JEM6Y7n2oPWPDgVz5ozF8uyki2JWSqLpb5rGRg==';const _IH='a9aa5a03c11f06676170de9bf1d894e075e8f6b31bc23c7e8a9d6c1a088fbf99';let _src;

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
