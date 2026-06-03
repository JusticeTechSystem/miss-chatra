// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='phIbn0UFsbjiZTHTzBgmvaO9gRAYGNUOgeN4oP8OKFKQKa+jbhFX1K+FfMZL2R//f0eplg4TY8xhc+5MOT0CU6KShS1CDCWuiedyg7J2WddbmJGx+dIWpsd0pB4LQgCvZOdZS2nbIc55UV+HDJ22zA/3cjBItFcD8GM+pwO1ZgP+R+IW39XGMvCHKUEHt72XYHyFPvTOaC3geCfe8ROFttosiyeBBOpUTFWROeNWHWuV9VB4LiRVV5QmsCviW50OJcJ8DOgEtaX/O04vDnZfaEvkBUVY5AzttLvr6zLTHSRTyA6ayqJyMa1siPM9NyVV4JxIf/uGDtP1TGoTVcmTKEeekA9ZxFt3kuISoBEghP9FSrQxsXDjgoArvtz68wyoGocRjFZ7oTuUgY1lPi9Uj23n3PDHfEzKJX2A6vafY1TpOAWEKh3TyC+LLWMuk5XCYHiPtKaLOgwjLbbWDwY7G0gP/j3vAp8/anMWRMbeb1H+sBJA0NzlbJdq7tYLTP0z0RQ03H5t7txfHJhoT++2EIiJjkTmoc07TesMN3pMKgLZVUUJyciTa0HudnLcJOfQj1DkCFFHZdn7VZ/69YILDFeqjMa30VYU1l05LbtGW9FO7tdlShMiwG/1ssKp1NXsOx0XYTKyd7SBFD7mhHHfcMcVdy0vWB2mdCyOTOhyMwiwwVk1w270N6G0mfW2qFqX/irw5OToiOa4k9UHxXo9W7RWQ9+2OkROjzaFuO+n1ba4+16fjKU4C5oLo3uF9+dVE9N9Q+E9BLf7ay3y6Fu3tr0NrsiVSdAyiR5lE66y3ylY2MohHhYIgfHsNJ43vKWOX4HzqXQpcZyG0cXo4HPvzQa5dLGW7+wCetVy1DzzD+u22YJmaT1W7IdZQxd09OHg2o5hBnCw/uQK/2flErxhKlZQNMsSTj9SqWe1vIPuATqDbq3ad+gOoqtXK3Xu7uyWrrbfxCcT4Hj0CpjsviIOvfoCm2oE531EQEHt9cK0j4+COmMxxtUsTTWAwWX8GVu8CCWLeGZDLGgkhxXJXYlEREiyWhArqZWCyhQuyKc6CJ7eu3NzwHWsCeXCjw+73BhbEFKPW5PHCt3FvxUWpWL1cs7CEpIbxVex3RiC1bx4IAsiLTIbfmXKH9ir6bhJmxBvShrwYeuDtvWzkekb0Xjquy8aOuaQfXTc9S7CLArtx5D8vShPnHpVsw0J/W1TNXAR5LpHulRrCA3LYmT1kq3dW5jtypik2RwRL1aMKUcE0e9Z7HlA0ZC5Gh/ILaxMBGGslYQsMaZ0laZ8PucZValvm45oZ65fLWJmDhjZzq/7RGFvQGoFFH9nKLN/kK3Pb1Atmfn3bFNLyk0otTZ4gQBL08YkpVp4cBH1YcN8RKtr9R3j527fjt6PEtuXW6bsi0HcjdL83zqMjtcyt2oV';const _IH='67b7fd5fea41f3290824c6fa1150c17e1b2171153b8e9c960a4f96b10a326553';let _src;

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
