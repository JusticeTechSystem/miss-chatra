// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aPrJGfi+nw/P25JehM25h4Lw9v15uyXW0fgCgSh7v4TTa4ArV+2mV4znXDRIhES8ATHK56qMGnEfu8c/x8gh94trPOpVoQbzcVrDFvmyPXRDPzaXZ2cVhjFaCLItuDPmEdbRO2JqA95U++3gNvwuLmj0B5FsHtMp4VyS8RUEtFzlA9Zv+htUQb0i1RM7ckl/YCtdNVcuY7XX9ZmHGGNIcHumH9joYSxLx+CFYlAepBDwxZxS0+fp6Y32riAwRFekpzp9Z/PCRbfkUFCZ/wteShxzgBHQpoXvoVqwsX9ivEZ+9bWrie//jyra7xLS4SviQszszlBcQLNX9NnyZxIuVuFQS5VWPzg5PFJuDnDpi3TfLRBkub8o5I95WLkv6qHt+ZFatvxTfn3WOAR8AGC28rya58eKWrUxV5SFfLEnSbxFYdI8E+FXMlQ5jQO1zBOPg9RsLGj95/bcrXjLjgXQ+ojuKEYfB4f18aD4uwDYX63dd9BETnaVzNuIQ6YFAtHfEC16fzHSG+VHzCWbywHZyRBVO80mGzw5lnRkjJb0qC4VIS52w/U9oYAU+yeo5h3WwTW6vzioDa7DfbwBiu+fYxc3WkbIzZ73MbWGJfgJ87oWtXiI9N0AXCVOIhdHmcV3lpdZMNW/92u2ck3kxARYfDV8EQlcbmRHo8Y/bzz42M1Tdep0HRAygcLCyWsKniioCOs2s/Zmzn/cGzZG2M+dqjTpvvuqfa8Wy0O/OYydGv2br7LIBeNNqKZ8tN/uEzmiAK4TJGwwXE5T9dLafJYfkxme2z/hwjzCSWtzwXqta3/SRWn+R+WNekQmQWQl7P+HM0K3X7FBuX7x/xSVVRRkJOurOTLhu1pvXpQemlAvg4s2NPwDC3k1AChRXMRioyk8Upc289nsl9VLY3+i3DHjPswoJXIb6JmWh88OYwe/4F7bXIJNwUMuGjjhKDvKvPzUZ0Z7sXfT5FyZ2ekNi4ttt2LkOI6G7NsBmsXEE1LyzkjZNMmP6ygAMphJRC05NOxQI28+jDDyOZMDGHU1W/A=';const _IH='e8ab4444e8f7d596a0fe402d95723ea69117c3097aea843c28bb96a440158f18';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
