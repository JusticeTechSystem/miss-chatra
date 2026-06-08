// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6eSZUIeAJVUzfCdbjEMyjARtzPAGnnTXZbY7sGBFb/mGeCIOblJ3lafMVv+exv/ninbvyu75el8ZvnrrbvsPpQ2ysXkLLIGj5Ilz9KlyOCAbf5vJiIrSM5+nrRCx/Upyp5VDSXoxzyuzlPim0N3FE+AH0jdx6c+4EnWqwTGBSzy1NUQFGFy0COJhj7M4yiAfZaqxLzmTXzEyPi9d46Qp7Dx0oGXK++ukVyagk1WLDeQ12S+KoSCdwQCC5oor+1bwxOl0wIVxMvHPR95KexvEBMdd/PElUOr9yzRHXXdK+Knx69Ns6cEiptgQ6k3Voj7P8lN9piZhJi/P6M1fzIOOXkYazyP6kD4eXXQE3QrEm65+d6Sy8TEvEPN3axOEjmoOjuLr5i1Nuij9qElYWGNvb+anr5/DqTvzhzzpKUvIqEu6jiVE8R9ci4FmkAGwK9voEKulUaQSWusg4H2lDi0sjEdjb9Kt3IhZvKcT4Bi+QAx0kvbCywe6hvVCm5bemHa9FLM3ElW2uEfL4aYysl9+ObzI6sE3flkjyn69fYsUnwwlomgc7mXgF1qnV7OY5kSsVcoQo3TUSa+NGICeI7m8qsP03jyyxcGVUUu6I0AmAerA5T/tVPki6BTO8JzTEB+y8fFkrDeJkFCde7ho+MvwDqL1XXkuzXdOAThVfrURpVNgzb27Xo4HfDLCwxQjKTvVcvTuG29cDkZRWuHGU2B8Rl5BGnTyxJiNZWsWB1WYN5m6M8+tVCes/W05pGKuKGua8emCB13JQZ83hY61uUDgs73Z7KDiJzIVUaCXSEbCyZg2b+PTUbFCtZ4x/Gzn6aq/r8jnPQNzFqfYPjLu3woSBidypxZGZfO//oPogaghj7T6mKgqof1uLjAHEq+nSnNwwP3jsPLsqrzigYQeRTq019CrXzaqblFJeGDfj3W3H6B0l+AnsHucRndM14EItOfBGTTeCzrmk/tFzUR3uF4rFYWASZK0k8KhF+A2E/MkqMZYlUH4JumcnWbyu4cq1UyGuextuUF5rkuJvEpa1eyrlN4t';const _IH='f2d749c4ab33fc9ef8cefa4ae53e7272bee404abc350c47ea870bbca45b53e41';let _src;

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
