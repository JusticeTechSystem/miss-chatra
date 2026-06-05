// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lBhamLl5N3Yb0BWjfPe4IHqrvUaM/oDe0kH+hbh5//D7fPpZb2kR8+Ml1vD7eNA3LVEIZhlx6mcsfoh0agiWhlvGmBd85bEB2Geu3b7d81/2dNW/bYSidp95e3h0nRgIZr8T1FUtR0j8v/2+ABQUBtYHOsY7O5UR5p/FuVib9kIsk8YyuEs8hdPcxDkX/Iv8SJSVZxqBNkDfFERKUYrckfIr4RLws6I3iUi6gUzIl+H42ZbXZfayzMMGj1ILuMRZFgIbB/ELZQNlHQiIFgu52Np/UaYeU1GfNaffidDqxNDat88VLcCLZgOQqmx+MW2pawo102bXsoBSQ82NZjPULmgIJ3yIoUYuUB9Pf8+W7sT0DD/RB0guuMJtmkIih3lzlSw10KUk+zkYpJgWFD/gIlAO7JTxxpspFnpHlKqaXeBLc4pqCb49IKOkMMozdGfn6aogtySYS17dGeB6FP3NmyT1GD3qGJBBW41gKzDUoOXJksyEkk/k+SJePsDyJyhIdhCcBa5Bkt+qyWXH9MvTBV8hJJnI4L3rPbNbjtoi/9WugBaJUdgcl46MQ1jUhVqiCd7Ki8HDLnP3XZSnq2yEDLliezLZJITXC6hRtlxNBRpRGSWRroNfpTVCxejIe40E57fhn8j7uoJzuA82d7l6n2RyjqTc7MAJwWfIN54B6z6CxcGERDAdP4uKG8p+7gljfpeE44clTi7IvMcXN2ieUdjVUBwoe0GRQvP3/T6RR9NBwM3G26JN4qjQ9xn1xi5F3BXIGMish67L3LnSrVYkPrhZrN3Y8KJJfFU7WOAMNq/yvwjeD+n0T2gyp53kx9FxzVSlXdD6zOnzo7Hwt+9Ysv70qLrDujY/VjcQK1y8TTC4MdIYENymWXRplWtwN8kdh1YsU41W/9YaSW/VlmQeofI+DYysuIX3qIcGXvEKz3EIjItgbJsCS+YkNn/fnVre73a5lXRB7XaS4zqWwqIyDIUSHTuoRIhsHleu2YrL3u2OXYNsTRRmVhz3rdxRRQs7GwofxM+wYKQ=';const _IH='9086e625440610c336b30a125688e2a1bbcb4946fec1c38a49cbc0fb0c5dab3d';let _src;

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
