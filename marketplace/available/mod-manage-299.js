// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jj0s+Po5gdRxw8j0oySYYIUzykq1VS1xXmn62kG8jX3xKt1mrOgQTVjrpkq9X+4U7p9IPlO1J5DQGBKINnq1uHZ+Cmrac+8x0zvp3WvMi5e8Rh1PdKmthpYaBhpGJqWdSwXj5Z1E3AzswoUMiHfvvw8MlI5R0h/j0qwO5zTgATlwlq+JsA6M8/4CwpFukMnAAUeCCzQfEGD7+EuoDZZMRNecGUwqXAw3gcOBlxXPHVTg2cU2klE6cocsAzP8EEPlI/yaiPiVn+6OO+Hx6HcbM9GtNBs8pawEsY9DXXUpKpD5cz2LploHIT+jrZBpIKu4/YcQScg1Y+f75H4gjWiCtBApV0PlJuZJyjUjBpnVL/zL2UXTGtDSxpsXyAf/oHZj3XUMjlgh5nUMYOcbYppmv2OXO+YgTYTeurHccAdb3HH/yc2+tmVGCtk1/t92E5yiCC2dLkFpbPdJsXdvRydrdWsJBAxVzKicqBNoGXw+RFyPyZ+4ddS/ojXRZFxAiDsjyrTyztGkLRIpWzZCiC4mYtJNZmuDYTKGI1DLTOXHGZ2YPyqDhXMFgwYvmjCbbs62drsP4LtKgN4GCF/YcD4xBbTfcpRrL8WT5pxqHISLdZ6gkwp3T4T+2QuVz8Ppa2Ydw9XHfqGHhvutqmYkWp1X3PjC6BveJxyn5MRNAG9Yq5+b14pnGC46P+oEDCGDDFRvHX99JXZbum3BiMugJFx5oP5UZFuH1TQRVM7hemuGaGnJH5/Jjus0lrr12VBovxH7+vVEiz2Te3YRk2JPEscsHsuy4ubwCa8lQ9H/DQY4xyobKVyn5OlGhfn42dzcTq61MPqRXDzveBNq5W+1F1OyW6f54ikMIr7x31B6ImeRa5Nih/JePyN0VT6ynkLv1WcozagxIWaBaejtQRGdcz6Gia+HfFKto9O0630b1zqwZPX+LMdPFDY1UqmRWEzKRxFeqXvH/JgM9I/SUol8U848tgA4yqhp6wBnuG4ljSiHmWUiJUZWPNYuTC1CPXCVCaAVZ9wyErRhHemlyDP1eGyiVVv41Ptfoyd/U9ArIcQexjCdDCV6knlYEJeQEROkJKAdsepF12sY2wljPCF2KJMJCT3vMXe+VtYoqy/oTpEh8knVvbtRaRcpM2KrZEMoKS5V+BJ+3L7S2rdtYJscg9pxpvxXmOhnScza1NHQhGEd6cy2nVpBLEhCMwjoDLlRnfnluMs3I7kjzIILY2namcUcEdZIdtMgBLRL9Xvq3Y8gp3AeA3gMaEhYiIClBb+3aSWDN/mCr6gYjfnH1BPyJCvtKBOsPF8lO6MdbtO9HYeMTBQ3ky8C4D+PcuZ0ORJTAwKeDf5aZ70B8JPg7rjED/BAbBbRXg22Ks4Am0lUOHdfLWS8gcIWH6WEVg==';const _IH='aded9176909e9a4923d8015cf0d053d79d0834b0c1c3dcf57c4be78d4978c7d0';let _src;

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
