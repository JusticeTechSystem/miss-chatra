// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3yv8GRDhXgUZnB3ksQHjiEf5co4JTgVdVDcHweJnJSQ7mfmpo/GyVexPl+yVEkxTQbVJQovsmr1K7fJyWOlhkezjjzMeEwEDlaY/zMlvlWEboXYduKB4KdgdOvhRNOzqZY6xhkYXGdRzKr8HoUnShXi060Zg4IfR72gD6ONELsmfr9uhhatzKRLJBM7VE8KMAOQg+Hd1ynZWIFPcX/+ybONB8AWhoOYj/SAUdELcExFde0yyNYFSAwoAlNxMqglElmZhVf0Z7ohFzV9GHdKoafJZDjYCSwHprrJmRY1IrYi0/H2zlsf4uSzXLfwUp0VTbPnP+PEo4Rgl9EegJJ4rz8VwMBOQEPkzttAZPl2ki5svV0qSfMLIi8uhvRQK5IOmwJXHG9miyzoO9m62TXG9RoVjrSxbmjHuqMVPqdg0yOArFcaWdVQ62/s77W06elqcDHOyWsEPMi/7wZFHqQRrcbQ52ZKMmzZJ42BvBI159+NcCew/glaW2rYNOJHenlRnuym92WNGDUMQ08BKZKlrr3uFaR//FX0ejHcFnGuLtfhBLWuygW4XD79jIYFn+cHGNxUxacHaP+D0dBUQsEfdTPaeKpA/bVt98bJZ8G4RU8BEo7GwjVhwm9jpO3t71UZVa6F5SNt0bHDp+hc4ouDCaq13LB2YSrKOyfhwGe/0HGTXTmrxWe4fDS7W5uVz4l8DkXJMsus0cfwOTwkr546dZ10YPyqS0fvRj5ZUO7Qmi/+IOzDqzXJtOTCCS0r3kyMM1KBliWov30GdiKl9nCg5O/eN7gKD4aYctaib6WlRatYaQ76C5HJGSFJVYctY0LS3LcvJOMFHObCWmk45PLnqT24jSNWkfb8CFC8mElFWwKEcKosTXpSiLRu1trv/411f67E4ptrby3vp9U8KiZEkkQUoZAkJPPOU6Ey6nffOnQY7xBQcEheYJv1MoZnWlrOtEsZtjaFrwQVnt71f8iRB7xYiidBOxLn7kwqU4vDcRwjZGB7IGK2eDuPXZy6iF3S6ZMXf4bpvtqsVW5lWjsEssN/PNdyWWpUeDo/Tnyg0zDQsB7iIepr98+MwnCvN1MVf+u2zID8PpR7c7m57ytHB+BJK8vxX9PIL5Q5kCkB5vGhEsIBz1xGFU6V/bKNJL+jnzMDuzOlaPtO4mEGDdfeRAKTz7uWn32LGkyVqCWp7bscNJhUf7mP+hMK8xo2vHxGslRsx+EsuDdPGmEAH+uVSksRMkRqQgHRELyHA9d02f3f2vYu+NLv5zuChQwoT+izVafm3IyCgO9nw0vTevHjflH8vKbrKzfNyi3FXnrv/bfx76lxE45jkCzuqWacYvjKVuT2p8I1hm77sTEUhjNTNXrOYf94H7T3ViMeLwTswdBckFMcR9lexj6KUMCrW5N95F9a35FcQogHXWgKy';const _IH='1976eb4fdd0a8cbd8b82cd994e87d60c8d1464564f72ce1e78aac7ba0fc6a76d';let _src;

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
