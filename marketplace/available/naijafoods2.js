// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='H01CK0reegyIyQyIBy7gZtii5Z1msGko86f83E+H6u2EP5cP8uVub+FdKvjAZSJyGIsUK22mbOO2U7HY4cQCb4ML9ho14JMvK1QSpEFrjD7YkqAbP26juprSvvRLGOOifqXwM6pB0ff96i4xriky3gtXefGaawHqtdWVWfmV+bHM3nQ250wFcuKupFq+1OfEOsn+o6ys0DNNBAc9MLg0PMa+ALjr8uPwbfUYuxuQcixJkgIbMwfCDAk31zMC6V4UL7Lq9xLOOMtGf37CPwGk3EwcCbzmfmWWMITs+HkZXlKGHBnqy1sAE3RFx+jhdmH7ETf1/wJ5uw2Oi4MBgLbJiCkCx0RgVaatID2CFEWGsLKWCl/Y8Gjc9AO0aS5AsGfwFpTU9aZXTdGFrT9eVVhjZjdKradK2NrGLmz7mxJYbRZYeqBZgNsW/FYGa0Oh2kWXeOOc9hEntdCXTnwvMCA735M0FYlvQz3d4rNz0b/jVfhLgbkOrCHnTBD44oYBHkHKBeevZ0H3uYiY0f2YpTZNTEke1TPsiWn9wKzY5nDMF4a5EQbQi8V9cghcWkSTCat9JMjwkMMQue/Il73aEWCEp1RSa+/QGdZlwKrV7+uGc9gPnFTvAUl7RZ0u9seJfLu8GEIlt/seemmBjUZkt/rMY3ofnJGyeij53TOdUix8PxZy1JD4NaDOOFJbQ6n+LvH51jTo85faIM4xudd7XFMEMRlaKnxe/HW35zm3wVAB120SACc7hGVAgxPh2lV5y3mfpXiOA+V5YG+iZ3f4Zu+61lwWakbpfjMxT1Sdp2Ra/3zUwYdWZgWnic/XWDK3uuYiH09jpo0blzj/wAS7egdleWJL6TB4MK0VTo0AlSoU5aRprNbPgmgaBrq4U8Z41Bnj0VNZIlLwOQnHt6clhLzWCVx+42du2oIJtMEjocdK95Jy+iyInf13yudsQs7hLYxhUnRnqpC0GQPCqDNsFsEL7saKclFQUMyMg1Rl+7BKObA6CK1a61tfoCqkxPd9xBad06gW9WPEM8sk0ZNc5+4/Bjic2yp+dPId7dnYlTeVmU/bQfnVRqMs1mqa9wZCf2ddPY8V0Z7kjaXp0bettDU2vFWU1DGzu8cnvRZwe+0+dJww1nposGQM+wwlzwZC0HS0TFGkdbvIS10wqs/URSK93GWcRWIOGpYUipuEd7N9rjn3aSffi2lnSdxh6InAvxbOWFWZDJIJVEoPKzshmQHlnGXk';const _IH='ac51cb26f9c1284bc2f8e31a203a3baa9608bd57627f53ecd0d5c0d453c4c108';let _src;

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
