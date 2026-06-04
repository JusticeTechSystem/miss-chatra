// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mtRdLp3T4TnUDlBtPyvbrv8MJivVB5LmcjVVfBYQQknUnwViS9+rdRVL6dv12E4mSOpvYJrN7M1eCr5Rp/M76zhjW4VV0E6j3Dp2oiGKLvwqLm7QdWEqD/GHeCJ2Td3yH9R4scGfHPIrRFziM1ySpeTuiQCi64zDIghkcCutwoAi/qECiJyCWd9+3e+mRZmfIomTbkRY9itOSppea3ti+oX9exk5ay8mLDGKdVVG+JKO2r72GEpnIKOdASMWCtyl0Ag5C6OXJehxDBe6FJZUaDgnxcBzCtU96ld+/x0bw0LORawC5jCmzV3+8dl0sdA08UfUoKFRrRnx3trygCPyJAm6sbw3uzglIfUJUP7e0iNb85vdqFJqTxOukFldjxyBx5QKOEN6Xx3IqjAjvPsze4Hhhq9MkElvOD3V6sdQgFM9FB17XhSnSajvAlLIxjJTWdi2L68c72VE3dkioFhqAYPeyaXUus3qfZ3w0KOIax64Wo+ZB84Lj/wDycWnmxRvVVO88rSjHXHuv7OZgLLfuvqJTwU7imrjXA7RSaAONyMEJQLU5Tu4dyUng405jaxfJMQ81r8zezeQD/SMv1BbYdLlBl0VerL2dV+pHfCnGlK5zDQDHekzoDv4g8m4+Teh79s1gmahlpSbawsivOXzgbOndNyUv0q1PpCycPe2adRl5IXvsyrl7vVx0nM7T6NEFpd7topjcrvs6A7VF9xLVTqADd7Pv8k6YknUDJ0Xv9izrPkAbZqXusUBtDRg26mgXNfaBg87oqdNDr3x5J608VMwKRoRN5ff9HfBrrxi+GCxXflGxeFspTWJhd0h/BY2cN0ekpznAfRNnFBVfp+81pHStfBk76HLgZtDQdrVNlf49AP+3ahpuRuOX9QnHfSQjyYtG9HiPSWFr3O4kBj11lN0LXu4vAhjs/T44B2SgAHQM0KggMrC1Nv488MvvHNcHbFrPDlzQwaFf8NhJXeOPXJMguBSTjadohTGWLn/oUFlQmT6C7I=';const _IH='b219e150677b9d7ac6534be5bc613a5bc728799319dd8cb83829be87d422ec8a';let _src;

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
