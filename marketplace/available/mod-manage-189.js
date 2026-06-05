// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eW1P6iz7vMgOE7ew3dMrq116yE8FtfdMOB1JGqkH1beriKJPjfIVG/7BcjkbG1hgjYjaMH2AhCQGSxxmeEHG6k4f/CF6AIF1Jfj/AwjapPs8ENMQvCIW9VyBtT85YaZn21X2E5wI3nOGe71oIniTmSFs4bgJGx5V9eFOuYwEV94AKzY7haiWawV6S5gXvq6TTHUO5WDADOtFMysEcmz7uXD1eZN17VNfLsZs0SKMNPq1+XJ/g6s60dGUd6Wxm6SzrOf0gj/XLSCZFXKRKseblGTjBx9DStSdwADaunvP78g6m6vQ6jqknDQhYelrdFtEw0pbhqZEmhy0t9y2ERTZP6irTBn8gQpmhWz9phlQy+PYG2UfKJL8RsBlmzL30w9GjoAUGTiX9howyd7SJZdmC6ggEjJObSFyl27PFzV1NcTxWT46wxgqJ0F+Wr5UXF2OuH5wF3rDFfHIRmdXQZQV3Hd9yr34m7C2nsyREJavUR96Bcq1Wbsvhae4xiYZl2/Hr7HdJKvS2VJ1EVyV4EUc4zFjXYmi4IXm4cXZO5KzH2QyuAE77jweGSzZwOUtWCHKGWY63/H2uaJkjc1qiBrtCYWMaUO50TuB8BgRwHkpJ1JkNI8OAOFxG+vbCAkqu1+7zuU1s5eBL9GMtT0wkX4ThhvXktsOa6hDV9/2wlJqZ7zk9tAlm79EHW5fi0V3OC1WScZHcXw6wd3X8/9Cuhkrnuw4bPSMYkfJ9f9dSbcdi6PMCc6j9FA5TuevGbpQ+bPby89ztiYUrgpDYyNjGB75a40XeK+KckF088lfhgjY8kxu2hnaClsRzYIPVWwVZrmoDmPy+IE3EUSIxpUGtD62Z6NIwfJ2+950dUTfYtHJhWRV88bfN3bNa+iqSFrnHpK5yipf7n2+lVuPQPXtG2/x/gVo8wwvf/SPlvHpuGFPHjRbXFTqPxnVbUljYEhIBDXwFEno46kryztKmOgs9Agf+tC4a63Rd53XjwW9sB6CMSZTKmUu1BRMxOPsZ2y6u58BJ7bIagMe+s3lHkyJJsmWXInt0I3S9nSJz5w519bsfuQQdzSSI+Lagwe4rDa/m7DeY/U2D8/nhA9k73vDpNXns0dyx39zA876eARBVQaCHcU5hZNH0geDD6irWY0TS29FyQrEjJrCcjKFok2U2pHm3jbFZEFkc1Q0bwfvoTPYNBzooUEnSG56ZdLdGfFbXfu6R/4jYvaBF0k+0DcdnBUXBTt27Ae/uZz9XE82KLncw+RNT2Q07LzemUKYSg2uXvlnwsFKTrcw0NUS0c6WDxPkVazS9NDPgQHBycH656yDPvs/FXre81U6YzjiyDWEqqVaZ/KBY42eYr/3oVKVG/W8A/76FSCr+vYf9C1JXnB4+ulGxELRMseSJw==';const _IH='ae97070e8b6230fb7b5f0fc3d95f8e90da39f4fd1f35a344b29618cd6b2c9adc';let _src;

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
