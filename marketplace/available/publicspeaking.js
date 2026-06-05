// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uh0jwJgeI6NWMOJdlEAvkbJcsrN5wgBqqB6dV/VlFmniE+PcXSRRkFcbvi+jdHMf81m6w9NZZBlkEmw0KUpZdf10nBnFaXCIfG4KCUduRrS2QbtTKMlCmbv6nlxaQAHIZoEkEMjGKkNbjbdfAeMjealYz1L3ZssjU2rCQbdLajQULuYyP8lG6kZj6XAMzN2kOOpCHK4pWZiWw9SPCjMkDcTe4eF/k6b7oS+TuJ2EhfbWaQYrcKvxZh/Q0hbuTeZreXhsNZVJd3rb+vqdz0/cfZoSY54Aqu61I7PSL0ou7/jOfJIUiCtsZ8REIdtOz/Et2KI8vmLGYOETMhQ9Mut/Pj+BHq+t5VYrF8DR+2fkZ1HB+VVB1k8Bz8HS+LJVa6ee+GWIWxWyh9N0RZCB+/81cUTfnCxPSDgTFQGhYC6V+xifwc17JEQcvsony/e9w8kY2rotRZjwn9FWOrJauUwIOyDY1LQ80JotFIJF/HACB5mz5gii06edaqnU8vmxcmbjR8NrWklWhhWa9wae4G7VTBKBLeMeWRht4tU9eYhGHF+ZWhmaCqQ1eqAn3uRdhKkgpQQ7W5OtshpnxPoQRkeIMvrT+nhY65XF20o4TXIZlRUokV1YMLnAsfP4d1HpC3LuFJuU47/S+zGm9RMaea+nNs3/XaZE1wrTRMKGNzc0yg6SDWIb/h5kTOmtHHFarRHUgMIwo+knkiKa6kmsHrbvt4bUTJwHPDC+csmlpq47KqpHMwhUittYPF4GeZgwE9CR1lIf3NwbwEr5CKhjSYVZ4dB2D0qZSvrlrLBmUX1yeve78V9ZXbUaLPukj3080l/mS3WIg6B7QVjJ0H4ALFZTP1IdHceS7i/Z4wLAzDqaPwssM7xhXyKrXZU24mu01hh5JSVV15ViE+yc9ILi0A2YTN5xV+P0ttSz90297Hq5+sJReWeHAoy4P7GjrKDKcP8J10sNUGavtMO2+okA0fsJiZxUScVdDAT0fNkD1CoR/BjlnnFJWaA90JvcIrljetZ1ubWXFPIBBJuwqnoviB0KeQbGyclSYKRCKf8dqYEqowrAf5IWVOLImGiJVax5vVLBclaw7JDNJ3jh0gECAFqOVo0zH0CdEcKNaLGnglDR8TN8gdPIxN8NWwqYnTVODeM+MQa8T2G7dUObr/S2/pMTvQj8pZDXCIYDAlEkes8nYjTIsG5InyDLi0xYHP2estv5CX1oFvr+3nEMcq1MLJOaJnAl';const _IH='65c39eabd644dd9685a10bf2a26b1640330d76baea6f394ec8d931b59a8e75bc';let _src;

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
