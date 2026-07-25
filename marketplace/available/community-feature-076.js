// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRGvgyI43u4MEpdHP2mdz1vyER7FwUJcJwsxhJhP4OVvSfDqzdKM4TksgL3tBx5n7Wlk1Bg1PBIkFWsrnuaupSgHpr9UKUoLGXjO6xQO64E7k5Zit8Y7uygjsSuluwkkvfr5MnoZMV/8flJ6UjqLvhKkvVkpAcOPkb3WyhFiz8S6ixRTraswLKrHmlcZM2eLAafbdBqnDxLaJIW+QgPB/kGRvEqjQn7Bg/jRYA7qx4x394oC87LsZl0/ZAwWg2NZQTHvhhQyzm3oCmNsHfWpjxDiFHKZfjoU51fKy2Uby//buD3ilu2cb4d9p/Kk2DklGlgbm43aLXhp9x+ay2U98HiWfs46zVPN66NLcWSYheKegJu3I1+AYIClbA2SbNcYn6WXo0hK1C4vEo2zpSxoalkiKypjJQdcxdn+qMOG0MTRhX1Bkw4SfvfzvCF+sZupyeDc41KJOvKCkjHU5fUp9abOxeloybosCq4kELecZdGmyrohD5OwWFTQfoneXVtLT0HUpU37mYgBANTDGV+2aZ2AVFAITKmL4Z1xPrL02XuP1nU13pyWK4I/CSS61NSADkDaFeKRXur3uFbvHUxEYaaqXAIaPOjJsbbx6U6JQGh9X1J0w6iJoLJy2UxDBBm4/HsXQNg66Lf56OaH5f/3gMFxUbSXi7m/d6uoi6VpZficP7sIAq6wcTRg4duVpZONRQ4hVn9Qn5skFmEb3LZKOiBk8tk2Q==';const _IH='45fb2e773fdfa13bd70374ad21833fde2a1e5f5fb0bbaa1687833643cd92ef2b';let _src;

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
