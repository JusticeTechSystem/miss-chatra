// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DAYYTjciIfFDi8mvAx1l6AZ7RZy30ggKmq+JZm2ED/FnJKO09iHHSM+GTh3cmHqfUWgQ2HW8oGysRBXmdjmYAgGwirZBcoqhPYAdRRzT6gZYESMQmj9TeuVDL9opjjOxKCeJ0BwewRhga0DmLplN5DcFUjyXm2TsaAXkdkqddxwfaeQXnTSc+Sg3h3TSjF14oxvjTY+GOwJ1y5nU/tKny8yp2Lm8smRXb6c6oUxp8g+wQnZNz3gbBqgW7W8lvVteaiaS782pvWsDLs8Zr1c70lSh9Jku2fSK9SCBEhDDvoahUT47mV8csjKPW+3tsjB6D63Mex9ILBZ0WJMLn5UZz3IJHnmCJ0MPvP1qPl0Fc8+vQzRdEf+1qL2+K6y9WHGuw2F8yXeiiP8eCb1xCWzB4uV9iCmd25wWVzLn3XqkoZOuiPG7Yzenhtcxk9kaa4v8/tppHtw5dausYLa796IY8jUdNSA3aVRXRFWvav11eg0Ok3S3DMcKgeSTNmquQs7yMrOHmmBT+1PAgy2uBfI16FDKs/1NQ7uzudOFXtKTcrdzLqdSeO5sAzPd5K5fQGdxAav5YYFl4QRGsiKnk+ZMAILIyGuT0x1kfkyCAinXPlCZayT7yBNO0evmCNsWmIJRuhYIh7YVS1uVmsG8FYprYdZj2QCGztGqd84nN4pHFf0zoFj/891Q3RJ69Us5ssvema/FOsxpvRfUNHoow94w3Vofe8ue1fF/Ca7ngiQhJ62fXECRW7Bf5bdjbglkcB/2nxRVF3ImMeS1tOGbxBMaND3YB/i1KbIEuEbVLDFDJhtNOX47ju06X+02oVzpoZ6j4wrdWdQSpsYVm1FGL8S5t2Uf5Otmj1joaCW3D9eFS/0A/2y2RIhi1XxY8FAwXUo8tS4KAUZOvE4Hn1dbt6y/FL952tFj0gcGYXgOS2wnrRkweZPwVn+a20sc4YuLV/Tp6vsPNOaVBPokO2g1/Im5KAqu1acmxpKAP6tceB0T5NSFoV+glAD9dryS0GGP7DiuQhL2JN3vTGc3iQJ4/Z3QIGy8ICsd3rkhTgxY+515rotg72+390yESp0dDikBR883SHXXxu6ve6qTxHaR5ivHAw8QmhEWJuEtsnaNCYMYojwNAHOtvxARW7onkMnZ93Lg0IeuQv5IG0lEfClw3ZnvvayQKHUvZ9qUQOViOH7jyO5irLAMIWBokkPhZ1IB0nvxEC073QA+C1Llc0oODvurTzVR2XtvYVUp3FCZWuFi326nNrRHp3RyqFW77uA0PxRPFj+mH+MTVuyzzot9g42yD+3KoBuk+h64/L+3umBXFKkOAGGPAhJAtAuqlZSuOgeTuLiLp/OTeDOfJ1Bw7qg3E4dAKYnq4HvLoy80HPG8ttiV6bM=';const _IH='de8955e559f0483dc8e2db15f154792a6a798fa2120e7c0a5b1d1b556d8d304c';let _src;

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
