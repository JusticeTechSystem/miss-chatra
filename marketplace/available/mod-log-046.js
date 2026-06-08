// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HNldPDMKVdBrUc5P3xPk9uiQBn9cCXVpBcLPIrXr01ezwDX3kOZd+Z0e2SS3UhSugkwBUwdhFl47enxmmUN1cs71kn4YmW0lE1AmV8Bizt3nL0H/xOnjln8mBczWc3U6OZ1UsgeZEvdB8CiKZrZ/33cQx3xzP9iu3bz0Arn2o1BgSWnx3zF7XgYMRTZ7/qDXOGgDLl9k3wncgD2hKMTYmLfV9X4QddrV2dMSioJuQk3GGuwl0jf7U0fPSmBhhBzQPVUR6ziixdU+zxk3vmPgHrfkMiU9i3e1d51/l5e271sL7WqfywkPG6HRzwGyaxMZRXVdsxMrqt40wU8ap4duwdPD+iEd7GwKVc7p5SphtvrMKTUhzVpb2VD4ZG+5Md+yQqUoNPDINn43cU+xU2ouLlLoNeXiYOPG9WKi+FesfoAnW23D4ddgl+SpznVFy7Mg52LSZfjK1DdiP2eSCXp8KFtsJWWp+r0ecnhnsgN4bp0FFcmaxGKvcq3F1s8mGfP9TYy8HHiJSJ7J6tz2rQI8vq7h1moF3ppELHVppseIElSKOp+JIPDeG/3IAOxbU9qMETxMjCmg1pRxxMqfzZfcGbe5xrCNY8GdZr7SuIiWFo20ysf3ltc9YzSleAFiOtg/J97H2CQ4NaxdpagTN0UqjFOukwsEzMvSf+3LBzY+hc0P0k++m4ao9TeXj4mIl96T/sehU6WNBMSqd52MtgleHdWSZheVrEDpm9UfRJ87JedL9+6fs5tYXNaToolwPnRdT0akWBAOusq87lBH6M/R9NmhS/prAD//CCiy1WJc6GT14Opmcx+QG+GIaUOisyNWYNcZmLZOHXx76hFkXWGZqOAH9v79r+uBQZ+Mp9tnl1oCP807AZUrcQo10tZYtdNHfg09wg8EoIoJ8afXQkj9zcjWHIdVcR6MKeVXkIGPEW8ht9FouhoWBLAqBuSIj5EQIeIIhjAjR8tehg1+0eisO67YBqJUBjqbKr/YDM9Sb3ghzonyC+1nhRihKrJOnJRq7yk8HIa6MDf9hGKXDL1bl+3lnKCgN0IAkkJZmXj7+nvZbKgK+BcAp23zDHPWLxx9ly36JDj0p7ziMHwc0HpncHqqK2Aak85i+wiYdiXurUbrd6wz3iTWdyK8JRdda3k3T6REodxLsxNbEiBARJj78NJcJuzxTQpbejafDhYzOg23tqIAFmb8ND4epvPnzjsXX3fzRrrsLPr2B90Pm2+yIjSrk6hCB7dbF89x6KZKH83y2fKQ90fd/A/Azbc3fi6HvxDWRq7ipVV4KBVY1ylCTmrT+4o+peEYY/etiwyYhvciQlIlt7Y2s9P2ue0ypWml4yo3Enw=';const _IH='e3b52bd9bb46f369b70076576f41c808a427827caead86bab96166ab65294a74';let _src;

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
