// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQB3pveUYZAVpQNjBWQftpNfZlk+LB7ulbfu6GVZsyEG+t9/pbku4af5AWvc+1KJYHYbm/MJ2uuXUNIK0nyKig7eYQ6JalAggGvzf+/4v4cuLsF6TnOHOjnHDH/f0WSMjkhryIo7x0yW/eoj4h4Uax02yYaBQXe45iHcJJBZPy8RkZFqMf07a2IVVeODLYsD208wqXqFzW2k5Bbw3y9j5vzQiq6IluxUamrUqtxSZnzLcF4cDGSOqntXvgZzeUFOq1ICSHKbJo81Dcw3XwC/xkZkNlJ3Y7vtNX08zyqKn4pqO4qFUZSn0Q7rDwg7I5TGJ8BwF1qVPE38A/Hj02nBmqp9gll/fAjWApoKiX0xF534qiVCApi89xdk0HF2E2lBAJjjlHlZPzX2QCIOx4lU3LhTkc1ml+Snl1kV6qc+Gfccdjb2mep0hloibtBhmSUBtIhkUn+fQyNIMNToQovtvznMxH7yIzr5Rewi1BUWEPsjqKQGO3EAksYqsUfIFKpGV8kmUu75WC8JclirTkHux9Q0iWFO0nHZ2qRtWZ5lfCpZAp8tiCV131wR312DABnf8Rc1+cJ0fGzpjMNaj7ysddh8Ys4SKIDETuO/oJlCYcr9AJ36yRw+SsG1c5JOJ7Rm21lEtg/2N9Vi5Ak9aNmLHWVNupjxybVCoWUfaZbkX6FkO6drggzc08HFgJAac3lBhRq4+PLxV4InuBEUEduqkF8+lHmG42uxOx+3YYvZdOPiLOICB4f7ZHDBKcjlmyamFUAWvmsJz5CuEV77UsT8c39/kiJ3G/8fSfJwfg5wJ91xELF+kikl3UCMfhYy0M8QDJDQDFF3sxUwDqTWNsBiYmCLas0YXym5E9pVGOsKpSG3x2NUczlUwMxlE2kAGYkaG1lrytW/LjvJshkWXbt/3FpdE9+0zfinMpNt0oIcIrtlAUrf4aBWOAxE8jnpX7GP2c2ZuSFBujDVnSUk2+pdWABgm8AI1JwYljkUnD4pBQNiiFNfzW1R0Quak7eHfd4Rgn7NoKb0tDOkIkfCdhAJv7Z1ohgDAlTDrLINU3H5fUto8eiGkY3rA//pXzEefr4Ps8eZ3T+rtWc1OBEsDhRmLrjB3sU/2gqFhhQPp8yNvf01uWnuknW1M0ZM6lYAjFcMZJ8zbWb0J+toPKUI//JWM1b+b3caqre+mexdBF5bD3Pldwk6sDMfEaAS5afaJimfNWgtE1KLOv9e2saOkx4k+ZFRVn9eIkQWXLkE7tUk+drMHNGRNVNsV/cTJoFRxMXAMgHJFcDXOvShdwmKEFU/VEf6SUMcMK2/iqBRT2tkFYAFQ2G3oWEyM/x5yLtFkDzerFRwBtVnIH4W2zheB1Yb+bWsvZDXU/1RzDDYGqfRm7M/9r1OQ==';const _IH='de00522e45a19868409f3b2429e87535b90bbed519c2b3edc17cd1d14bd2b6e2';let _src;

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
