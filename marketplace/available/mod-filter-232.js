// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nI9rKZJw9UXoyfqVQMm5L1HNBI80Vi1kzkOU0k3pWMNcabvBX1zrKAGcR1PCrV/2jwrJx9FDq6LqUCruAreG6gspMZXAEbdL143yMMixLTvjgGsiLygjICAvGmEvttgt0kJVNq6RyRSH2/0qNHHpya8pDEFJj3LpctLIu5UkFpwWHs2Rm/ok1Fm1GlMDefMk/i9L++H7ujGsUatxniMEwOqUwpFIrLyMbKEhlKS8B2keDGkJ+aa+DA4vRtYt00z0Zu5UDkkFkfVnqfEVepFJlD3BZIqJq7c8RUNys5YDxB/Pu1pGQwz9jZcZRscLV6aWHYevqGOIPzPXqeyER8H6qXXeYfY/syjS58Dd1gF8+m3de+ktVwiksjji06Vaep7dtjYydRfaf9piThudBLYJOrVNeuu8h59WNZN7zboLjn2F2wS3AJwdo1YKYwNBlgsPcsY8j1ggeLxtsq+ZYgcl7mVA8NM2n7G9FRuU1W0s83F7WvXqmo8UFOcrRd+x28UjGZ7n7OVWreYDKb7Z5cZOzwDhA3FJ6Jg8h9QU4bI8qXQFgqWbR0SlfEqJxz8T6TMCEfX8Up3HyUBSa/0NNjTuWy5Vv4FbH7awwhwHPQDdbeqB5I5oUCCr3omNHUlkWZ0GUpnJcXsnFlgnslNsbUHaVv/RW9s+8MF5sGWIU+RHf26Ko7TGRGl8L5msb6578rOGQWP9Fd1iLU0aaafPqKV9vLZ7fBvd2CQdCcKAPyw0bl9WHQgreOq/+/fGFIFx5rlSEHB3eTFHwNWrZ+Zmm63VicbzTh9q2/j69j1bPujwm/VBsMK1rCERVANqcLxA+U85fjUlF5kmx+oRKyTOcJbUNx8juJE3UQD++vbGm52cfO876OY1cqqreDb20d7+cjdLxrpil96ZZTxtG65IHVUEIKz6iqS684Q02RTRaJ0CiGQ9J3VGPWRSbG8Pg0Ryx9+aMPE13PZoaCdsaMhCZaRzbnLl9roUMFCDrz3fBicADSSwTl8sFxUNZSrNWmVZLTF1uH+WrkS/z0COi+lRX/jGct7BmRntY1U/p/44UrUkP1792YyfhWYVmOTznsHlhsKYg8SnZtIPXth8rkK4FiqH9Hz6vTeh7zcFQuopXiogPrCTVdCDGP/WKlAzCHfGrKWqBRPjGNpmfi4lztbuNLeBXWTbhFLG2PwcugQS17KFkbkABPyFwGBjBYn17KGw9wog9PYNVNG6Y0gNFW9qsxH7r6Zsb9s7wVd8JEWUbEA1uQeh936eTiW47mi2jAEXZT1s6IOUe5JnNjhUmnlZInmydBr/8HBiMV80pYjrz6JQDXlj3RAW/xmQ9beMuyEgzHxkaQiNwEffbSFVdVJZr17KKPaquZmTZUBAF+tW83adoLjJHapa+yEQHQ==';const _IH='303f56141f6e16bb4d0fab9c68f7c11ab7fc8e6457f890b2a328b3b0313112e4';let _src;

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
