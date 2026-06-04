// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qB9bLDVlbSWBQTxfSAfcGJW/Ke4YEqd8jaOBt/lk4XkY9eckYTuo5Xjl0goMUTjj3GuwkDeY0CPocWq1bzrBgAtKNmIeuWn6qZtDKO70By2Pq/G1VNxWv6NmX7/ev8y46Yb7uWEhgmAnANU0KmeSQ9BD6OJKW4qXXJKJIUEEHJi9lCJwQLmDD04Hr6H1x8EkivlewJYeIioaX/EVdxrJXv3UlwQoZVk0PRc/pNXTTMAUYUo4PZKZetp3TMo2u4aZFpRaY5lbU5FjByN06V9XnqSokJpGd07IL662owLITdEQEDAFd+EDHebyMrNagVVUWIJzDvDOhJnPHvc0LBbpZErGb58mVXivTqLpFjkO+g1NGbZcLka4SIo1gdBvqHx9qN9gmneTJH5a2CPcNm62y86V496S7lDMU5XthoXCWUZRFUdFbBz9avKQq28+VUkb6Hza7sXmkVjSKbKqNCOWXSf4n5swxxN2/F/EJcaiGX6w7LeGn7hKDDR7rlPPVyiskYC2SEenudMi4KjzYm7CPlzdxX0EvVaify7WTqfYKJJb0j+bLL1vgOF1cRFvbsdydpeMSDmNHsvRk06I51sQAirLu9mWBfhxSEhvgScTv5lWkRDxt3xHc1zi6/oMlbdQ2APXQ7e3pZM0whpMU6RMMeUHmveEZfjFpZ6192VQtsziy1E/KwPExmvLT7zR3G0PnO/M1FbiZjDUSzp1y978yADEGPAydsn5Ey6aC4ov+GY8pOI+hQ4RdCyB2FEFVaJPvJHRpTPREMGNjdoqA38P6zBLpVK54ExmyUUGQkYi1C5UXfC8RIK9iXipZXtvEs0lCJZOhio5/xevdgH6kWc2l1swa7hlHCH/eGxjWYEdGwnmqGt3orcIXS/XTRpyyUBpPaqgd9bt+gCqMy71KH3W+0PzGihuFDaJSDccH7DxhfpmLKqTDkZ/Ssxv+4uhgteCb56Ai7xU8ib68n5/iB24ScWf2INyVZGBbBogUkz7tK8UHY9L+vhWPHOH7Fzk48uFhD0Cejb6xuRbJDB3aMEGdYpkonGmzfhvjJsbOWwl57I6xnIVPl3JSBV1woLBlTw69WBm6C3uWPL1DOUBJHKXnrHWqNEvcwbiX68nQQgJxdZ9q7oMcQmgjjRL7AEgrGscMunkDnpUSxsTfe/hhLOcRgySA5PI/RFfEOjr6iFuBgeb1QJn4MZosMralOJuoNKcQRWUQPzGeeZhnHfXgS1hDRM/vcYQ98YvFxYXe9ziNc7zqlwgLASLb1FqjV6ycq0f3z2lbSa8HYKIgBmL4sNqoP4Olel1MWM3KveXFUKDfob8sfewqaEHMKJAy0QRx48fAtBd6O5szU9+sLZNVbUuUQ9HkjE4sqFB7SjmkgpQvhD/IXfGxcTH6Q==';const _IH='2e71b90688986331b8ea33ac2603a380cb817d91d3eb7456a87fa07c56ec4f9d';let _src;

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
