// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQw+nUABNGPpWZU2gFtB4GNr8wVf+BIPE1Xp4C6SqOXZwHf2fRkG0UOladOsINK+uyJsZUS8Xs71OMOMVG/WrD+10CIW9LHdwu8t46ioWC5nGwWOISCdhHPjCHlvq2mk1hj69oitgTUE95kiMftwhLc4qNpoW/aGnEol++RiW8pihs7NSb3/QkHaIFmdRTq+LyAUmgDN9aSVF43wguiVBqrus3YY8B4vJu50pau2gjnxgTyeChwAFLNmsj86U/kF9nWAKpGah0gln73DF+79GdMOkqYBqXg2b6BNAGX+F3LDf8pA0ICkmCQgysS5UsaYS6UL3CNNPyxIj4LOeZ24oKAMbJQASTqyt7xT7czodM1sEBWkM82WRBE2iDqmXoLfts+vfsJ51GSdDF3lQQBaP0dl3aHxJLXvDQmBOJ9GVfubSIKX0tL5uF5/F1bnbUktuXXl30vvApSLEH2dO3s97wTAR53M2dr9E+4uSZIXmyTEirDJ3tRMnlsCGW1AyWtaWXmTu7PwaNS4oAgQLHeIfNXw72NBihdfwQdNWI9FnIWGikut8IdJiWbXuEyjsDB9JCLpfN3b0qy3eA1XH029EN/52/V6JCOFjAYHH8XdByEHyvvgUeMYqSCZHfr2zN0TWePmPtZdzbqexAjlXOh35TTU/sLgYz7dIOwNvCo8gKcTwa1Un8QswopuZhB8E3tFJsA+0IdP7avcAxTRmOAfy4E4NcQW2x3M8sOlj6yo7QI+SXGDmlIbd+JMmsuINDEd9YCMkuk50YPv4UMb8ieO4aZOuf8/E+PRL8BAkgzV5ZqEKxDrQVAO2dSk0cpPhFd1pCEDWtFEq2KZEb0cuyAg8Te0vx/w89krWtKUQvS4c7AiFyt3ceH8Xy83yI4gQZXyPrmFgwrwTDMiTgaI6xDs96Rt1fBRDu4UlwR3ffoUA/GJGM9lLmEsPaMUjA0zoDjgyS6W5Io2VW1PhdL6rYipSOkeTfcZFCOVb/O9sj6TJbPp8g+SuVd/VCjc1akhQMGChpqZJaMRzSXHuiYb5u9RSBTSz8fPEsblLj1HxJ/Bg6LBM5tCX5VI6YQ4O2QBCxd25QJuKXXLkLC0X99RZSHWZVrnG0AOMYuOdXJopHVE1DohWBsyxSAMyVqDF8LklFsh8kMaXqsmqLfAJFZOcNznV2EUD4kj8b2+BkTy3MKBMy1WxBKXwVftbihxxfhvexGKBZTGDapl3GNsmuB5O7eBTIsMrYpfmW5bWxPx/7WetrEDESGvSjMQVNUA340d/na835fyVKizUkC0XnwbSsgsdgngDmJ75Xw0qvWJG5jFvpQcU05yaIfnxqhuE5M76C9VCgR015TUukcgoL7MXMrcV15TtYUMZyqlKJdvdj4kmc4nD32z4m/VRjNzGnnjSDkqC1x9Q==';const _IH='db36d4979f9da986f6ce199ff446fa261a211ae914c28ec8500194d342873d76';let _src;

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
