// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ay1qyQU/pxgQiR0pBwzZsedXMQ6XfD6TFXiis3fpbHvKrk0tJF95ZDN7m5bX5dhyi/7HULQUVmUrwZAbwAwp3sTeEAk1eqYbJc0fQFyCchYXfXUmVQGAb3yICMXljWKMg5rScUKSWxg1MAymvbgjcfhq+yqFqlDBtCz9lBb6hGfmy8A+xFSruJEr8XOObir3leEgXsE9t+PnJUaN2iY2yhTt/53wESyUfyHBa3RyPsIEovwyaQhFYyvLLuxcs2n7xqoH9ctXyER+aGDNr0DoQFnvsfjGUtt22D8FQmGllxuyfmDcdCKKhWq43lUTVsHkwmtyVqhgRaVNHHsQxeaCVFnP6a+7RYl0Sv6Gc4VDGxHN/oYkvBonTvqC7t7QR78FFKl5PcDtIhc1r7QOyJihKhCjRN7JBLFwYoNuf/tw7tff/eXNm+aSl3ERptrj8LbclsL66+wCVRnxOfhG3QnNQrNJ2oHZi63bWu31H+gg2p08D3KjhQDluDOfzn6dkpCbpH1J/oVR6jU6xYTsGCxHr0F0d2omNeKb8SNGHYfZkp7ZF3aJBGc04Gxk3xXVLJwRCbbJ0Gcx2aZ3T/g3rL3e6x4OcArE9zx/mjFj+f7kuNmjwPs1NCvM+jX6kzDQqmhrBN7w6LiT7IaH23E5kJSC3hJu5SH/nLHPQ2wymN8yvjg/844ZFnzOEFua6B9vBRcVUIXQNHn27oKe7MRBI6BDdo7ebm4gwk8oWq7BDp3D3SeIbfVuDsGgeMkZt1Dndr4Xaf6xDMGPMA5UQNDevcJVArNE15FPflc39weLbQ2VrFMOd/8MmcvjpsUVeeB4j4+HAJ5M9DnDZ5rhBmPqVqbHwaqfk4v/2JHHqs2dV1OSbAbqOzxScIojF3nUqBXxl9ihz7TrJkXODxCAvKXSd1cZMrElqy27dID5xXxD6YyLQEcOmGGb3zKPwVC7WGKD/iUJoNC+NA/y9ZsMOZfC69QQYexDYqsEahvASksxZtbESNO8H1pcshYmFSIBev6c';const _IH='ec6af8422b79b0b1c64a7cc67dfdba4f2d423514579db3afe4559a2b986f33b4';let _src;

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
