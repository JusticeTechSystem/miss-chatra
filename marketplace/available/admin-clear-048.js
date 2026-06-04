// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FfDbcNTyKa05+6C3iD7MpPA2Xv1iJWUAh9hBGVv446tGp4/7RZ2hnNXxc23ODqJy7+lfjlvBqbLov5fqkWgt4Rp9qmxL6MIMegapYeCgYMBfwj18LAbhrQdX+ZbLPMdvu5CRlaza1mu5Qns/bI2lWdCa6GeSASqeZamWfH7cnJI885HezgonGyZE9jji6TpMU3Y1hWhoZqyITGMAV6v7VxqTr6TJGs3Fj1pXE/A9K91cQQVf8w6k+DpVdsEaJRhzJVIQ4WGjet6iGExAwHSRyVB+Fi/XcEJsjNQR+cZLDye0rlnsdQElRNkHiz6g5wKVyE//xV6zqf5EQ9IgZ2zmUFzeH9udbtozHk4pYLqNg1LBZNt2a3B1W+RJRtkRbo6W4r2FMUHLPldCVe2uQovmyQPx6wZKLEETptxUVQn5iR/BK1rQ8OGg7nE6AyXXzmmInnrl0htF8OXRTndOZtalgY0zS+oh42iN53NvGQG3uSW27HHDYulDwa/uz0w/ivug427+yZfVCx4BjzAPjAE0rc/QYuQ0+JUMMP6jtCRQ9K5scWUoI1GRIivOb+KUpexV1FGIaZoam4hhnJqm2qrg/R1/KzDvDiil1iSMLBXEeb3cr+jXubRZC4wc1NxRWFqRlaCr0f9/ziMrwV0pFiGJVCegIoj6pPpKLxBw88iAFWWijASXZ+6uuxZ5eYKGQP6MLpDBQlmJt2mR+bjdjOAWT6PP44l84NmnNLBxnNK2QMJyvpL1LWC5awcc0z9nwM6nzxg5wYO5O1uUX0tNsh+o02UkrsZjyt7HJvcf+ZtmNkWx9SdHEg3bIyhYUyFm/rZyY6tI201LE+haWeC7AgfH2h9ONbzd8MJ1YlTXwprCj4+KiQfrmFzCXtTUm6eIlQefmn8zPBPWEK9EvPN2+9OkyBEKMW/WxMf0+55xyyq29sXUpSJV6/OOFFFixs47YCCgfhPApILIVyao3gZoIwzK193/ogC3BWPP8kNfRrIDYNPajhowrHA=';const _IH='1680fefbe39e4a25429dc2ead59d3a2062a576043cec96d0408331b042cd9a53';let _src;

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
