// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fQLOmhWPSFVLzQNmIhsZPsNrIOxc8o+pEWZ58FCu81BMK1b8cY2WVppTRjThkwHfJRSkTXY+ufSq0aC0XwED4HkIBJrmOG1uLZ0C2F9ECZqXl+JbDs3vRlh9xkLdyiata1Hf9ND/eeLSlNF//dxpQ9zlZ0vk8w7fhGv2arGnEAM/w+NJw8RQwJGaHa5TiZK0puVDSh3YfSI5kB4fA5ycv4ysGaxMYVzVcdnjMuFfDKXDhcPZHSFZL8BUld/dTSQNGyjVUPfz0foZIpzWzpTVwN5ZnUNpi08EbQwSn0PAgLIQy3G99/5km5f894rnWI19jbmnpKW25U84keN85F2dsd1YmPmk+B0AqFYCnafs9R1dMkQ7sVEUTTYVJJvo4Ig48y/y/7GTLtoevEf9zMBd2I3gZvhG7lpkvdLJyzwBBfz5bCYFwRlzj2ltx55mzZAPVS+VFwPuY7TRFgsRd93oUKM0ubsaZdsMqVe6vkw7EziMsv+RjBDL6HQNHS6oyBpJBDrqDPwFa8c8UuDJBO+3yuQe1tCqK8KKXLy7p7pzrPvWNAjyjNLoNt/TXRRr35XkglkMsBOl3LZFJu69q9LDdd6FI1yo2cpJ7cFSbIXp260tXUMs72SZJ/4LhfaA/OaEU6affpc+xHhSpLgRsAXrwpTSu01KfYY89D4OAsUmgNphJTW0kodKivnybQc8w3r65aQ18pWaTNTF1izAEUDKNh1HT9RDv0z0uAwF7IcGOXwcu2bzWZKnF4O2+QsO6N4JvijvE92TKMFCRbm+NvdCg8c71Gd+I/a1ZSY/v0NgNhFQJs8BaZHDZLPToiYB/RbNqEnpbkTmqYpgHTscZjyOr2VP91JwApyuGPGF4PeP7bvPka24v91MtrBkBsVED2HjMzLFvBvt5P7x8EmhcXYIxFfvHTHEDInswVI73nU/GqQc92IJaLrWUhK47fVF3Xa1j51OoNkSk3jr7vyh9Mn8U4Gw91V08b0Mo0jG3MQnpgZ+a+u0D4VBm9ZZy6Us9hsaLXq/Vkhi2yHAcL/yT7ALcjE7qlolFlI2rmqjDcP7Yow0/yenReesg/s4dAZAi5Fu8SgG5xb6gbZKJ6Dek9Eij29Bed9NDzBoQ51DPxjUZHQlQylW+GYKQlvGIzASDyCJKyVDyvE3/ZantBDQJqYXvyPjMD/RSBmJyzRqbChwvcVxM4ZTXXNA82/AY/kUPlPI+ETEpL5kYZ7vSxM0J08nUdaWZmav7OxVFFwJKr+mHfyCFo6i7kyRp5qRU8+ynQRRfGbqGIDIqBjbYUOZl9MOs2ZgZqfTnD0SkYxkiXU7MxLcGOdmcO/UGi+h1Wsi9xcLETgODiAtMehCy1k3aIcIyqRBZrDlk4E7+x2MhaDXpMo2QMWF+vhyPQ==';const _IH='9943db601189c345293c8c4984b4d54d501dce4465d42961d7e7d3f5e67ad8dd';let _src;

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
