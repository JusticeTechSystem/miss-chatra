// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gZzU9HhEPe2Xk3X7+L/FT4oag/jQ0dzTSRDhaRTkMHLI0LCXsL/8MPhHuqTF5/wC334JUz+SZ43jXmA1lZQU0x0bOJkC8WqrbAFN6D73cI6mn8tRUIjjD3tlkA4Zn4jP9DghDl5HT8PvFfVyqIwkip0+ljZYE3ahSNcpSvnHT8EbnUqskg0AsGPx456HVG3mozbYtrH4ZzLXJeQOGa5sXbM0Dat8hH9jnCbreaTo9VIz0ovAvEmdhqpwdP96Pj6JqLbpp903/3S0hgfzHjB3jXKPUYBrF4rXdcN9ztUq0vvitEL7sobXr4T47t45A/7zL1O2tHlj7NdwQRA3VRc1GxqgWMwhel7rsQl1W51FfzF5vHqwfop2ia42tR3VRDvUBk/JfdYVnOwlSWD5ls+deiAvkdaAhLYZ38sENW/7dH5YJ1owzRTvS/3Rzib+RfOG5AU/FXV+P/Aley9AawkHMKLVd8ttFX+SV3TFotYxPpccJNETaoTJTovoNUtC7mDrd7RpWa6CQQeAOG9FsNUOSg9z4WjZRTkvrqhtlywsIJe0SdwrAhDsywyaJYqpgICQmAJBg/T6bxqKDqLT2a27OuJqvqo9S6dIxwT2KQ08X958yfk59MFLNFykSmmCemW2OWJHhj01kjiN1/MAhE5/JHrYz+cgnMRBtQxIWOBN7+31hj5qqoDPy0iLzAkBFlvr3HnC5EBkmfuJhqaF+YP55NKKuVJIacruOE+XV13+37JrrXJ7EeDVRvf+GNVHyWM2I1aLxBF/HeP4aTPh9wU+Yl7JiL20l9yJri4QPWxV0bJAtpi/PJF5SJlOGjivz4O5FQ//rTx5+xqwz94Nm6XmbuskuApvprfqq3Xg7H7ZwgGVgbHKUteKkmsCrmEN+7B7zUFe/HcIh/2DbezFWHzi28gSG5xZ0qNsWhTbGUt1JxBbQqRE3mgtc968NA6u2FfNsN8cpX3KUaH8WkVM85PS9FEfhQiR3hnYWxHsi9td+UoGd+fBi00oWk64Xny8LKsF3JssgC38Tynam5JNJXjGNTvMMmLP4I5rMUM7XhlYf4ygPTVe7tZP3uZQBme8X1mT1+GikrG8fmEYQTius1v1i2vIACUZgIBmmCP2YFubp2llx/ZB8lUbFgj/DlPa2/CHmXgKKU+7iCdBMqEHmOISUJ/CIp31/Xoo4XpnDDeLsgLaU/UJajxMdyDIjfGL1yDIa7EH2Z2vTHcQZSwLJinRr7pWamYKpsX8CaVYlK+5h22dL0gqb2ip3/TKCEliRMmp8Q29u8XJ0FINiCq0e+DCI9cNQe7N1S0P8Eogt0fXx5z8NtRzgRHugIvRkjtURvEpzdSxrTP6G8gaj68ZrpqC1NRKkCVcLKdR45caQ0AZ4zVOmvmWggvNHlMzmOALChxcOltDsfFcZavZ8F0xFI04cbKCqRwNZe6OELKD1Jy94catd+oR70QCxijXN3t3fdbLVSNRFOq+J5cxJQU4huMs8CD2nbhlwt84UnADuVi2BQAzhCrztelokbGEP2six7r9Qwt5Yk7Z2c9LsstbbkMKMS8LS5krymU87VOuHWsImwvMJu7aOLfCBUs6AvCT++nS9ZRrGJfP6cm+lM6cktHVbFCWbrdP1tMyaInwHZfZ9Uq1uVckGyv/boDP3ZvXCuucaK2S0uFwddc7bx8avWDo2xa1HBZorjcGq+8nluGxBANY2gBDCWW1ZokoJbZj0ubPVOsMM5X8a40lRDokNKosZtXatXzyPe5y4SXlSGyJ8uWRi//ndicI0GwVn9zCGIMpAjNdUzKe6yELvA/DyDMAQHrNeN/3B9ZIMkL2PYZxYoenKA==';const _IH='7c6f5657f00c028f72bfbaa67138831e0711fc0b45d846cc827d025276857396';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
