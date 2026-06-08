// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rdYcNjQ21cwNfvSt9qv5Qe8hy2s2HJNbiCIPpW5ZlkZQYgt816we9s5rRIvi+xgNKYxandZPyK74kku5PHVSmlA76TEw9cDE/loA5WKqn6SkHYAbtNdeMEK89a2bL//rO5WqPRNWtaUyxGHItcCi3YOP5erqODUNx9OB6TtAKR2O0AkrxqLjglDtOfqLMmG35WLSRx6Sz06lT50RgJmj036ZD+YYxXg88oUDVYD+3nGfBCIcRQNX2iCrbfxtE/aStV21tfo372gvX+x3AO8RSwDithUfFpyuOAj4qyR1pteUVv1z5RoM7VM+7POAUTYTMpJbTmNZRyQv0lOhO8b05MD1ceJMD9GSfkcpiMcx3Y9K4/MkE6LEA1gEs4neslPNWqduIUO9wluhmWUWflLa5nvqJ1Tq5vs9GD1aHW2/1Xw7ni1dTUfN67PM0xQZiIcKk6VPXRzRWvw07qwRBUc5dCGCByTFfsGAcvdlwqOdij5JibDOqebzYakuuDn9wIB9SFrglj4CgKZEnD7N/izfL+Rl3ponLfEe8Jf//UNouiqKt4MKiXxS429wUGfk2pAlH9A3AGsdc/dQfXju1nYzQi4+xMwvbhhd22n1IwIWdyLLH+KY+o/Nx5tWQmrqtuOMlDyTXwNOH/pAOS1+RYPYJiO21fkEl6ZurkKvbtFE1/qH2W7Eo5vJdWZjeZm8cBD7FRjc1m0Z1Ouw5UdPACdGxTDlXX+fHFglflCa1sRh8PaE2Z7MFR11dtNlZEgYzL+qk/1DMJo7Gu7BLBGRMoIquQocNoAH3/wNGvg38U6Lg3TbzyvbJP+KtSY6Kc31UtBQESsymo1MSoOYt7R/FdPkHds1fWEVuTpjVMwwKaqEDuSdaVkuJBUPI3ahE2rfR38CO4BdQsWiSsDKVYi6zJ+6aDEK6VjieFaI2Q5u0OjhFykiEmHz8pjqMiJhBajKHk5Aq8ruqrDtNCYjaQDuU6GhLA+uguSrRMtbGpsZn3NrHREoWb/8qv4m+8qXN/VWcWz5kB0eM582j9TlzsZ8YHhL2whP+Qo9OnZVf0mfu11YnpBOVJUyAkg+ZJ6hBMUZF6gpqu5OhLFJOy3U+NoEa944f0bz0Y/XdB197V8IF+E9HnXTAA69g9DgoLbjr+POHAGRt4d+XL1BuBMP2jovnZkw+SjDng/k0cKQELN12OGe6bEupKWSNMWUZXaZcMozG/MImQtWCRSiR6fZKLdPV5sjKeV+QZ2gD9KvX8g6GYuf0sBz41WW2tu5qmRuzduO8RFAuRNTXx3hKrRikRz7p8LRLruORtdV3W2u0p+J0jpKDPP8l9HxSDKz9t0ZtbqiK+kIuoot/h75FyKk3gb6RsmQnNu3oTtqkB/rkGBE19utiUjxQLXR48G2sh3IITHdROq4JbQ=';const _IH='288b5bc0616dec6667a87f89ac1c2ad29740460a28c4a046b9a1c4e76dbf2fdc';let _src;

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
