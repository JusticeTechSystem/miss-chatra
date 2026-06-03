// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UzPQ7LvZNBePvfzwZTzoUBCMPQiH9BVRvMySc1vbzVUuwBIDJu34OI+oxAJDw23TC8JXaLu4a2/Z7bgUa1qQxrrZw3/ULPT7Ibt/Wp+EbFIQNQ6zrIWrSEwP/Q9NUELKwPp+gFjer1CsiaqidcIJLEvMkEwkR2dNcYhKTKQSbp/D+rkQj/iQx08HR0w1f1zHdi7Oc1VDsNHKyXsPeK8JzYuq/z4XGmHjvTzC6tQFlthDfOLGNXL3YwXMpIfhSZAhWrFdaC4TfFAZjJiFupIEwV/RDix48AhBHxv/aMGX01nMYkUnG2tMoIE0/moomF0lAquwYoScIbOaG454wsHVU820yVkLbD8WgVCLWY9tZUUiP8KELODq7NzJGh//6nnhUIhLiaGz5ggd67lY/9/N2bqQnyZ1AHs4+mH+ss8Cw/pFeO9m51xS4gg8CIt95hx4albGXIKYo2jdm62SWMPoPePEzkmmHR3it7t2dHeG79AGgj9lSTUFXLWgBP6q5JQL3WaKBO42GZ5x1O4vKTdXsNpwFxHEWK9JPb4gQHXMUZ4dK20qGDYe5XXXV1FLnM/Aj2HzI7QBbdX+is5UfjMZZ4zhnMuqOfa+UoYv+DCdznqOiikyiASqqYaF9dJ7TU9UY1SmAmPSxva9Tb76YtNv0+iy4/zP1RXkusewW/CfQyjB+x2UYrnNqaZiGpgpUTzWL+a+RdNEN3Au+fWkT6HGdwrWrh8mcHZAepP+JseMgrmqQwbrIwveudCNsSQt+vKS16ySubC6r5dii17sDWD8pby8GLYRlmgPyh47z2Ok+RFxBszUnGtTMygrNrB854xU+wp4OBS6CtqsBiJx6EWvAnXOJIIGDIGYH8SxHW8vYQQkdh5HneQSHoKNk5arrnqR5KGplIdbf4x3jZNrkkmZ76jQFuakPUhwZj4lefZXsEJD5WHxiWmw6AvhYNjL5vBSESGpOLqGyJMwGui0w7waunsBEC11F4CK3Qi9Ug8jeDlUIEEgAVrH56ecpNlJ';const _IH='ea86a624712654e8ecc528d32bc2202a07be3e9bdd3dc58cbe277dc02d7c75f2';let _src;

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
