// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:00 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSW2Yo4BroDTww8aAMlSIkhBmGMHrsCoGJFHyjn9rQNBK4rWQrpkxeVCBfCVPi6qo8OjpKUgnZ5uAXSgrmNQGRd9WAe1JqIj11h4RvxVhwbagBCjNDz8mR1LuAjCPlo70Rv8JupKj8T1Y4PqpmWpRIe4ILbg74sk+g3VPOGJ2EN1U1m9F1eO/AErJArhUu7dKqctJeuXev/dmN0cyrn4ZvUOB0dqNcdgMdpKOFZqUgf90J0pdAFOYoVJ/uBA2y76lOcw4OlEMmbMjLhkmUgwK2pDB4aMnYasMyccOvh7AG2zg2MBi7SzEZPwhoES1q3Uuqt6uaVM8EgGJi4V+zR3qoUosqX70Ki75fFIvaZvcJuH9t8iXOQQObpxH4dqMzmbVDK5sp0gATQy4Xfvy3WjtHkAYPzkpA8lGnZkD0J6Z5RNsv1nHtgeXR8lmmsN5jc1Qk64S8RB5nv8Q79kcpBaExKEi3hMVeUjpXfWSUyvZfys8tFAVk1eDQ3IVhzma3W8+68bmt+fsOsFjQ9EreUYokcA5o0SBMLW58CQQQHChgFYnBKSmH2+Xj48WDXtCL4ffG4h2Pux+uTJyHvAssgvygNzSusxdnA96zJoIPR5Kbix/b9Nf3HlY9K+EulPBHrisSlWPXoQKLVrHy8rCbfpTYFm7hHrWwoJyUfFogcQxC9RgfLCbaaGGnpqY7kaIOVsxjV2/DBquJGiJjKMXk+XTMFndBPkkdrYxg=';const _IH='1dd3df7cb08d35b0618590052d02ba99b12845c84a4346e676c3a4f8a8a83986';let _src;

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
