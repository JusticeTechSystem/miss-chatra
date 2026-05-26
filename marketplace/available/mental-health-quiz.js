// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='olky2Hfhm9pWazq9AIGtE6Tuof80XPK4o5V5wPPGBVyKBwAqPZum85ttnwvIEN4L4H821crLRxP0K0TDth/5jbdz9HVEv5IZ3Z6JNjk0L53b6mopSjyObAFpvZjukWa8KiLukM3uziN0yad56SCA+6AUiD2HnpLMFNIusMmFIBWctlQOoCaST1eES0LD5Sm48VlYUr7o77Xnm+PrdZV5gIUjZMCAw9Cannfq6EhYj8yZx4FBYiIJwi7Co+ZPh8XHZsiIC4QPiRpw8VxGtA6OPo5+5iKpEW3SsgVIzjDT/jdIOMcRdpS/o9sQ4JeOH+MrrucT636YCEsSP9zAwxLXiRC+AzchlIUbs8KF2/lwM0MGNGQG+kxN6IWekDnFaOkUiWuDLucOtPQ+iJ8gvSAogW4gLpV2w2Wbo5PLKQjzuTzH0DdltdydEpvWdCVhtO2bP5eIrJdWwcDFbMDPezYbRvRDQWcRi9Vs+e8HBd+TXhF2qY3rlg8F1ywVASAPydKoNr6qLFL7Oa+M2Mc5rnmtHbG4xbmFtRf3tp3CwLw3rmP50PVWuywnZ9L/aRp2yEWbbxCG6wRK8fTJehyhRg3IRwHeCtqHkM/QYh+2E5p6SXFGlwoefL3fUAxsEDF7rkkdLMrH2Q3yEHVEMFn8ZSP9EgCJMo3R4rboBBw6gVB4o9VB5vw4ttYEMhHgBVLDwXIz2T/dXJzBKSpfQ0g+MqN7dL1c9WE/+sKfAVXqBp4I5+dl93M3mUaBLUGvkyLNrwrMcOfZT5ju5s0dalIaENHnlRwZk2PoRmYPzp3nou38q+4xiCclbXmokkbyXUQF+Eg25r/RcNkYj1Iwv0gjHxJyiAn883T7HUtWhEDBt7+KuBq2e9vY64gyr3BHxPOOeL6LNeJbn2pokU4mDbyv7X3V71fr90VkYDdmS3trQBasK81qKN2Wl9P67cRivXYOOBcsh3ipH5d8iMHMp1goSugix6Va7PSHAnIxa5fURLC7f608W71zZcpm7ivoljw6NoNDjMgOnwgfz85s/Tg1xJz5OqVD7oWtuWLto7qATdKX4ZDwKyBf4vewR3HRyI8rXx5X0uRDVJJ4HxqntZmgvzghGXXYK2zFW8nXLqvDR+oJhElqiN7BJMk7LbeT4W3kf+NJog4tiMcjYGtLVDavpiXOmFcbcwq/BKlSRkOcaJmh9UAfqFYP+r4atkvMBUCqPq+b9shAnTHMxfxTS4jnsVHXd7VJKw1hUijeYLEGoii7aYgpZr6Ty8NsMwuwHFk0cOQD6nFTIup+FrNYXi5g1t6i0gB45DFr1BO8veL0zX9sUGoV6edLiCYn6NeKo6iVIs5D1sCeBZr+yDMtpvCiTbAv7aKCV7YKRmI=';const _IH='81a59554ad60c9d826411fb400c65482fc0d31b0b11d2e71ed69e6a7030111af';let _src;

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
