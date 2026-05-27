// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4CcHqcBHXHT4LoeI8TtZ8AFUyZR2g72NVg52A2CcU/LWIEyPrEfUEWOBoKAJI9d1kjqR42We4Sd04l5ndCAykOMKRKmiu+EYXlh3K8FuhCTwmojmoE6KE4r62eYVe0C7XULix2rT+n4fCjYjP3hzJzzKNp+Znyu+/i1jkzlaJVRDpMV6N3wAh8/UJGy0ONBcGQMxuXC58zgAgS2W4PZwHUg4jRXW5PXfqW2c2cOLdDUMzhVHOBIasWkJ282jUnIAEfQQveQgsCbIfvuiPQRYn/LygOcGlAzC1S1yrkr9jlfv1F0AaBdj1pQ3B9nImlkRgdu34WEWVrlVx60KaPCzFQc8Hb8DP3GWCrAxpjegCcNXPLATz13//b4mwWnNs/P/0D5amMGPr3D1NpTlUrUAmCn50aqXMyttj3x3MTLahwww/DkaUh7c7ijDz+sNAdRgM9cowRJ60+nVLgVlrxIrQYGe37QvFtwk2K0U23ajV0EZHL3Ka1A32fCW7NVwFfyKhXoQUsI4CoMgow22KEuzufvhRN/bWeKNjjBA9ScboeajXoGzRs/os0F+xXw5JEIVcKiRhjNCQ/56ZT4njguzYLsdIXRIDfhGjFCIjxTN9rsJqyraPsStdQZ5N4MkE75DFXsZ9K15T0aMWT/0St4KzGmyAGK4UBowaaG+IrwWC+JAIf+BitR0LyftDoW5dy/YwlrV51NIT5Qv3N4Kr/9Nlu51+XbCgxwbiTkLD4MfG6Xvq4AJqrwaWlupjXF53GgoBJ3wIKrjCMO0ViOTPlMteqpjD/XtQ25DRpQ6BIp0RH9x//avbaSB/k/yT5kbHbff2jsiiuSVnTzAvGa4Pic1arRJb2BcNh3CqhXRewpqaJ0hFIvMEJXYH0sqTj2Sk4+mFDS+8EoZXYKilm3QnWEHcu5Er7WJ1QWDj7LV23smqbKDHCiEK99WBQqIIplkOkMMSeML7/rOjL8g49wm6EywPmjMcg3L+Cd68RIMGC5WSoUgsv/np9fKMHQXNYOcsraS9n1P0JYW31RZUHNsKNw1qEBLWuuDl9nXNreCkluhTpM+RoGWPRid22QgvehdO1vU5dj6j1RvjbGnOU+6sxCb36qJO9Iy6doh3AMAbC5XSO4IyCD0Oq2V8vaaChqmXEArGp4dCx7qYAwM+q3CMiW2CRJSqn21i07r1xQRAnyiU3YT000f0/9PkcpEswJyjzGEOTjI30eAyI2NCFoACJcNohsFIG0Cy/3pilYN6vxCm9ANLMGuc9jCqIJ4T45PAqeVAm8RCXNpyRFBh50IblLKcTGer/IyKpgrw7zziEuKXHCg4QQ/ZlCPJLHr9zCoefJnFtu2nXXZGLSJ6xL1eVd/NHn94lKo8bFIg5yHZHdOIUbREUbVmtmOZcFeraVuU/vFivIak8BAcyuAWaMLWVjyZR7YTJ9H5dNKg/uUjEy8fIg973ToKkv9mjlJhLfeeMavuLJr7IzfeTCDZDjvdis+0iFAs8dMCMi3w4nmxPJ82MgE/f0++pv8d2wz3lsh+OQ2yfL4n1chjpd+QMiJ5JC1TcFSAMiY1ulzc52gkSMhVvADp9nfkNW08tYglXeBuQfxKLE2sWrQ+JxPYCQU+3yUd/eqPukJE6zaK0JCNv7pwc51VG3XLrOiz0WyQ0Ycf9KzpYPY78tjnEW5QfZJtSXjhISH7pVU1raejpbrt09dK+cFC0Kw2pqp+ihxERAx1kwBX4EFPlxtoFlq3vXz5smn0hdO0KJB2wEGJ19nOOciELqJEh4+Uloqf1l0o9CAjhjkqG1uhsTFd6GOGDYyOyckOdV2M6L1IdnSvWBaiy2B+98WAl2V9MFuggU+9mvUYW9wuL1o5YrQRgCURE50P/c1sIcCjL53rYI4lRJN6krgRTuifhRlJms=';const _IH='96121936413a9d21aba59366f551a90374be013f65125517d5551c1c6e642f91';let _src;

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
