// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='i5b4CPCQJs/ZpVZNkrxnc6OFOc6w4xaQDB8zVxaDamtJYaAM8y8YozUsPhqbBhaW5Q9Q8RObqkIZkS/08Bd6dUms4xbYmh81G7GG2+AeCkH2ia5IOXj1e5ZE5OtJ9fCfjzClKZdbPUn4PWaIeZwMpNXQbH7YNwjMaGk0L6VaveA5jWbFEVdiuWGHeh1n13Tin5JUirsUjEe/EfAyFl615/LjCfhdQFBkIL61Uiqlj4Hz2p7DzGCjhaP8XA5MiQx+icy9Fu5qWLxx8//+N4XLnvc0qVtmI2/5jUhJu2dUjTTOsAvFqU1O1GXHPLvpUaFLGXBerFuI218VJ176aNlMVKNFlQy0tX0drSBVjihj6nO6yvsVRNGMb3+lJMbEGipLUCKFXys/jbXJC73gqlk/aGOL1/ncSj9oJE2grecTQzvlouUM9694kxnVbL76tqQTOwRSfzf38bqashlVQuL6cwZKQVugz7EiZMMrTFzlYXFkdiMwOpY/BWuiUwiyVHUxYj9jCSXZMq40NE3LMduCc/Llo+bU3dBt4ILta/LAY11bHOslZOHBlVMqHfjLiSkjBOOyVjqJHC3pOKn8+PWPIBaPXlgNxMPQDnvZyRhe/G379ilrR1KusD2JV9gWP9hOSpYnsqKsix25LG1rpsKAHgYRuhRUEYc43YtwSEVdnOvusFfTefZKkNRrSx/5gj7zztOtq6KrD99Xp+ZKd6goCRo9H3K5zpoNWZzCJBkIUq3/ZULwYKJD5Ie26J4u2B35V7S0I60kjY6V4wvnzVa5soI1b++CQVkvuhLuyWSXTfrKD3uSikXBD8cmedQF91CLuzz4LsNC3L7OrRNqtL7HGXMRhCkGgldQvlRofq8BraiqtgefsBVHLTQUYbiEzakBnmij8cXqwEF1mRA+7S0k/fUzcrBtbMhEGtqOs/DyYIfk+ea7iwe/3ERyXIFqfPAqDB4NprE+WjKPQBKYXcR1uOS77iP3/V9xSqw0wYKSpqwVLQ1UY7save7wiKSJNzS+WQ6OjFWqDSY=';const _IH='82adc55b7b3e06df11d0f9c4493b2e330c33101030c1cd0a8174401486ae0d97';let _src;

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
