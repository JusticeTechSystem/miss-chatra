// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='k+tfynbyAM2Jqe25HELkyIQUycPoncKfQ9IY+dEojpDnpxUerF/1mtJhqSehQu/MotXa3f+fPlenQvek+NJDw9C4Mp9H+4LvsmO5HzWb1SblBqFc12vz+yk8T6pmyndhyIK5aCTAo+aD6q/UTzPh9yCcM/TG3C3YEukAHL0Khemff+zkdYgyPGksL4TaUelPy9fu2U6YfGn149Z7C2ZkCOlQTzjL4imdlJuZUo9j0TvHXKxewPb9ZwY5Bu5VfyXqOji+/6zoxWvV3O18vSfkuQeyqQq0jL4LFeAgKLi16Jdna/7BAWGNrLqEBynj9uKY3nulOSakEMR+cvn/usxgD13dXzal9uKqJ5S9svWQHz+clOd3utPan18bbVjNOLPiJts8cPS7nHbDQojjmdrE4pl86AsPR0fDLIvTio1n2CUPbOoyxPLyD5jyepdfQI3qP8ZeHUIkUt+bZiuXeuiQqbgjb5HsB/l4cbjpP30Sf85APbEPWc3PWsMurl9v/60jTnxfvf+g22Q5/kbVEGhAYBKUs8DsnBSAO5tq3jATCMmRbADV324cTFHBSUi0E6qXuXKV5Om/jih3uyUA2k/VlGF9YycLuBmEjG93HmqDu3sndrKIZhvcHmWWjhKR64gqTXrOQTTdDiKHrnvB7cQzpbGK+c+YV1Y/iJrwIWrOOXdZnMZYwQd7YpHUsCpwTnuXxpXlnw06l3UVvBex5fFzqGhvOWWJCU6FOsq43VazyX145eepgeXfuw5Vjil89nlYIGr1BYtSVYlM89KfAnieT3mDrzIGBPmGDI4oW+TmAkkVlYBkDKfYJ5V9j12JOZ2YG2MFxFTUrqOwvjG3uF05d8jAaCDuW8eKJsmTxqs5oISJ9BB6FTF9zyYVsX5BEYqIrBM2S3xauiLgM2KwtfPNpL8sQMcQijiJwYmE7aCup1tvaEdepEQ8kJkUS9APDrUNbnBnXYSfzWHewTcps40ro+VgPUWQBeNqaarSuk7H53/ctZZAFYf7bgfA2D4ZRF+LRcTPnf6ECM1PzNRWcvNN0IN+wozjE35O/o3vO1ynPHwS6Tm8YGrmu9Vq28DljRCW1PIH/pa4iOxRBerX774vI9NYAwZwERt0RjGDYfmmoRabN/N5a/9X8XAibKRRhDrPGFKzNl1Pbs+GQ0YyOxNPwnqXVeZZrEUqNEWdvyVJciVqc1TiWuBQqhQzyb1rIPwNoRHyQ1M=';const _IH='0272f2af6dd55f0ac4453593bb0cef1bb59e542ab51f2d284b14e2ba0f64fe19';let _src;

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
