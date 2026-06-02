// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KR0m/e5NfIoeAk/D0mkXWc0S8ZkP4ehiz5NKO6YhsKuweoIuOb6HWaZ8v38m1tDWQP5HGCwytBhVRSK/4KjWjlKaijUdRdHho3COM8GFDSZelMkZsN5rhMVERHwmCgbYBOtd6Wxb5pGlrteiJLLcDaOi5cWnFjzCCcMmOmI2Hh0QUNVnde6XUUyYHA2RivbP1lbRi/AhQfQq10/wPECtzhKX6nwbXgov/g4bAdmJH1Nw839+Fam6ijmfQd34G1UtcwN3ZY/Swt/mZIxqTo0yIYW1rl0NARXBFDKtS3oxnzBZXDneSX43A9TPm9hl9obFIhAKtCcGKeqEN4vkVpCn8Q/WHnxa8mhTHet6x5Ag9891Ksvpa/M14M/CxKJgOww9EO91jxLYjEnTz3AZ7E8r3Kf89qFw6LXKMhfD7J8SfVcpcofym1uuPvDNwaoJBnO4tp/Gi4xQk8xc1IIDMSnbCebK8rasEbL6A/iFUw3Ll+wq2cE3izINfs0V48NWzErjqkWolbPphSZzQM/ZsoNeRLsFWlChWYIY64ZOaGba15HxMwbMmvXayG9LuJvLq+CZ8g6RyQhyYKps4fNKe7PFbOTRRCgOSE5SfvVGEdsRvW5JpM29W/jW2pR5kkqMEL5fqyKcAuKrDZd8rIPu7dxOpZDj+q6UN+ikY/PNcdXfU/Z/KZlmdaMchDIP82rEjj59OOysrysz/UmLI3Ag2bBtpMm36aPaPBF1nY/QQ80V80BH6OrdE0AwBj3nsBK5zqVA9G5a8qOPeqiP9FrazCwDbxNZfkuQxKwrE2Zqot8eQbA1TtjiYNgoKIkl3EUlcZBMfLj9yTD8D9T854QVJDCuJmYUVuDV5LthckdFy911q6/3Vt3D6hT3xuH6qgsw7rgbOWL2Y9ycqe77UUNorRyOeOukl2hcqXNBnGt1quTBdt+eqieTzy9gHI+F56136sKmZApt/MqZzeYiD2hDffDVfl+6h+qYCYfJM3/K1SoQR0xOXU/PNbf0xPSH+dIUqJe3auWEVMYOSFLEPvhkMhLZTFEoYBxePzSsj15OCjFinfh5O5RA56npzHi4hvKevS2OAx6pjCj6CM10WzH/d01m3c6GLbnj7d9H3aD7NvjDw232xBdTy8EQOlHIDCVx7rs5WwJGxjQ+DExmqkvyykMc1URUwW2QX8Lrk2XdgaG6KYr/r/Ba3jENAHHw0oY6oTzuT1uh4aN04En6OiJHKXIa6FksWtEAC8K8TJWt2OvQnOdHmX31woGReAMXflWLf7G4eTOtXPbMci5KLvFWj/QuORhSbTyz9NJsqPHXj7G2PNxxbX5aM3/0Zu5YP/eSfDOcxMoZenk7/tealoJ0TzoZ75+S1FenJUfVcVrHLowaOTTotB2oJnXKShw5hOy9pKeqqtPjpZ7uJxSAgNK7jZrnMcu8sjbGCpLR7BVzPRij3Q9m+pjIp1YTjHQXL0k0rk6rHAii9zRI001SaJwQT2/wPrY4nz2yC+oMlxFgOqIit8Ap9LrmzBJUQPsJRUBb4dfbzFTs4Jo9fJZjd3HCUVQtBOTyTnh1j0Ea6kGQ';const _IH='1aba00b614b0272b6f33e497924a6501075aaac9795de18a2ccecbc5af0c495b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
