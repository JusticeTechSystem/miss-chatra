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
  const _b64='Bhz/AoWJSlQ7NpHXIQ2c9vY/6IAnzHmKLlEdX4lUZqJGZZJRTIf9kVss381Pp6HIYF4IwtMKMufZa7HYAwsJWDR++tELBMnpsNYzehSjM0/kdptGdHBmScfTkVyqu91gCtsjdEafrc1dHfgaa1jcxe2zcUYWMIMZM6Y7xUMWVtsNMGZ433PaawRoA2wM2PGy7JEiek2qOM5V311G2v8LzlxRJ69wYD/DeJpsPAGVVVWgK502UQYkYY6P3jOYpCIhN87SANeOWKmkndIu+FOPDLCHwum0vIE565JwXRurTYWTIyilFmTmOSBbe0o2OwSVM9cM8R8Uu9byKjVXc9c6V5zrFBajtirSPb9cII3K74KysCxtylvxfu1uGjvZjxxQdHdTiSjLa3PnO/fsePBNae8IXLUEdLOUdBWvzC7jmFPXQ7/el6rUcW8zShtD9CW38YG7+BqFlQuY2MOTUr+6biQPaCS242HO3ZIq9ZlXESt0quiA1E3y/sS9qU3MsUadvsytTL6vXoWiP/i5EDp/uEd6tSG/kK11Ulolqx4DV5cMUY1H7yhb+3HfhTNVIeOJ3JkGY+vlnG8J4adG14jZNJX22ZLbFWEnsF04+8tY5b8m1qKYIQwJ3+zCEm+VbpmcaacqNEBNZjQcqlSt+lhZaG95JdRbzvjTCEFz8ME7eCWedZCqYwKGUydTsPFDsgT68W4WX6GKYf4HB+gH2n17x1YUYBUmqnQvyUSOwzFiMjJovQ0ZrXb4EeuXkOwNn3wXq+kHgeiKZ7j6aS6kD7K3ioVl/pg8sPf+2+uaFay6ucjTGwmN2mcrNfoBX7LdSU6TFQlXLEJ8rCDhYy3Dw6/KD+OwgdJevOrmNDU6vPqXok9w90HDlucnCd5tLUWeagjktSNBtkAIpKd8JBMxKm8UDcavrhvGg1ILc8e9VEzVLZME2BwjfFYsA8jcnSEjeqHuexdTPLx82OG/SmPMrFzkIoXk7IVs1EZ74I1wU6w1xQGzTDy/oNAhgMvKC54vPGNDL067D2lWSBSjOzZAQpVOt9BHEG8QME7hA4QEz0W3oZ3Roc8cGL6PJbrG/jZIgKD16C9qY63WtKnvesF9iPmxmEy+9MY0EN9hEJEwNhjZLU8tbKtKhqRSR7QB4cj0CJYsPN20ldeLZ+rPAzAfM1lV7IfAahy9ZRbINYxjKlTcgl6O+hpFg0Y3nWUErqVAM1v71SYX/GQfbttJ8Foq5xFh5LEOLwIt9W8yeYn5EHAlLriY7WEhCUlanHpBBiljdtrQdQC2ywHW0tH2hzvNXUyvqhWGLvFa9OiGRbzmEg4GYw8DD7cP7pxYTRS1XzCK4qE96cK+8dnghBzaSp+/QaxOAXHpN+oNtv9QrKst4UBUtzbpPyljpCEzU0DpAro23yrW/fombC//XTJzWhmmUaByCCDnnTmD2/arWUhfB5tN39F3Puh9REbloyLk6XOB1xr0AQZJ/q5btCRaj2OzFRZB4HAIBH6aKOH2y59BAbbzB2hVEA==';const _IH='d7624b306bfc936a3e7517ce6bf9a83b5255b32ae66c68520aa09907771ff322';let _src;

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
