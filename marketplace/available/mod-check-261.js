// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='18ZDN4NVkGPQ+TO0/WY3jAsxWS6jo1QbP59d0fFXVqxEqL3ld0nVil+wH7c9lXCIPYOy17ZFcSxj+zrZFh9BJePt09GhvtDVMoNMyHFvMJI9bxfaocI3Q3bVAiiH9RXMgVXo3TeuVltbrQANwBzHt8qv1Zs0cE9rJDBeUa2jLnf26dTHZWdYKitQIQoHkQU7RN1YYql4umd2lthrH7sr0PMCwFE41POce50hZzlOJS7bDOG130QF+YH20xhGRq7tO/LTdd0YGZGZ+6MDz9LFQlbzXcQ/YmKW3og6jfOKe0XuF0cbKgBJk4V4qdi8Yfq4nYBIDiYjOmjXREiQWMKBLagl/5gcaZNgc5q7M3atf+lPFOpjOe1d94awOgomwccAIltLZkIPbbHLGxmSCv4Ap1S5nwGLC5azRakYY6jFJbU3MvWFNkcmp6470dB1Iv9j9Vuq56bWXCnjddlewuhG5GCQ0k1bUcCwaS3MPnyp+//S1umgLZRHk9BLHPCLfDSKj82fv1GYA2vduQkCuXoSYpPUCbsN8dvDUI6dIva6MBpIjRa+a3Jhuh7yw/wJk0yumfI5D+6w7BId6RkQ/DwMBzk7pkzxbebbuqRiMt301qBbmJayJTBYePPr96A6B9+crq0owrPpCAKCwDqvWbFRoWxiAvn05pKoIvz6XJbU6xKMH403o20cpYJ3/H9GR0i5dfM33DM4EVeSbjR9I2D+GQPLxByacLWdW4HZJlVoO4Z0TA74SzM1Af81fy1b1FOqc2V83R26Byk2wXDNSJG1XddaUX34gP9QeCtOfyIZtFgUBn0RQlUIYXBrjOKpI+tU/lgqawMNeEQEaMIGDgsbt0tx/UFH+8dFEki9byzT8zKBipRXo75o2FbplBKWe1ubLymeS/xtcBpOJvsF3aWDDoVC1dUPxt4EUWaV2aEy727ihv8Ap7L9u+kdwjhQl70N6j89Gt6yYYM5zScw8HEFNLeKGwS6cbXPZ6DgZcnFcWa/tRHOlG3DTCmzJksGV+I6VQloeRXG68g5DMrylGT/dHfi2oW9IUl6q0Q6W34Hv+i7YbRMJSlHd3rjolCCVM+1bv2xEBjexcx8fCPPqSPR+ullaQHr8IOdMunKgjWm5Nk31XSr4sWJKlOTO9hFNKRZGv7w/4xI3kUHSGin8tKjwkpveWGwAIg73TyrLVtD8941Suzi0h2MBa23yOtTfNcn//jEX2pEIDt1h7Fk1mYpZNa/RPwHd6RhmnkFw4T4Bn0lWclww/7VhVaYvpwoqGbdYnO34qAR+jreSiZTUdR8HB/X/ci4sMbQwrCaM0rmyMTkhIgCLOTYBQ4Xqqn6+GidcnNWUvQk/RYt6G5CTLhFKneyo/nJ876ewtyOhGwL';const _IH='f6ae0acfb6e6551e3abe5991e27b20e4d0c0ef0624858ddf3791b95ea09c0265';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
