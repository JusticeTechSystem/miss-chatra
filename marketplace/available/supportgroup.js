// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SIIbIiu/SDFyxxRPI1MPnbmBZg3yi/1KUh42K//P+zuOiVuxD5M5Elxk+C5fbrZ3bDbq9u95HjPhT/Bf793cgAv9tveEoDBSXDOC6yzcHmt5ZiPlUYG5E2Cs+8szp1mLe7mDm6gMoty4KPDdNtYIQnCTUuaseIY/ukJgqoaSq07L7c7NU0WKJaSw0EqdK/8p9ofnFby0nczHV3fxEQkoSsEJwvcEBt+/kfEWwo9gPSTiJPBSYt6uabHovaaYw3vbCqh/IJ1ZvaruWxGshNIy6ngDS/lqU9Xgy5itrqKX6d0TsOPq8egp8afC4YCm2K7YmjTi+TjuyzRQpld0PxXKh0B0N+Y42TzPlQlMSS4sVDboqDrRbmjUHtLgDsBQLh9OB0qA1VmTUj0w4X+I6rrWTj03QDIqVHUBFbikIvc20OtP9HMa0AQaaMolSf020t3wFXbXwaxhBf5n+zsh5OBMIbuRZ8aLQhoNn+VDi4GuQe5/GT5KV+J8Fg9SNd6aBpP2PZ/wtpJE9RIbvwkRpNeWisR2NnuNSf7MvJXzRhHFxc1vl3ruU0NJz8+bxMXt64qXZFMQqkflk44ypjB/e/oakXudf+dU7enazYSW8XlRK/jMulcAfB3URbeZhzYMyy1CzZKWMtezkfzcWLnpAYTZxclcfpod7lXPWKHnltApj4FISyxOmOSC2UxKt7emWpgkCW233Se7w1mys7AS8hoUz0J7DdzNhEltaxAKCI01oZ/XpGElSeReiKvWk9Jr51Z3ciHFN2C3zQ0t5x1opALGFoxAgFOCCWyOOOZz8OKTMt8ypjDcjuoTxseefPimrHauujuQRrbY5AzzqZ3aVIvKZ3VFpS+eEGhPhXtDhmvjoMZHcCLcFiPa7xx7QNAUbsI5cwuJzgopw83GfbOWIt6L7lqurAOaF0ET40HXNPlcd8bdDma5c++zrijQuhntri8rR05QKEswboyV3zQseX7ImC2j/xYj5CBbKHaD5Hn9Xz707AmOh17xeNttCJDtmPw+XhzzITn4sqMRJLsanNR5ZLeEABjKIfcQPLKLDD5jJPcV2v7Q3yy+PqZxDx1VjRmazhcrtmWLA+Ir/CTdnyQpo3Kxm40Tg03a+IH1/OCyAwQecN/htUleqF9ew2/Va7ZXIIUXw9M+r9cIHJGSvUWnxyZzcR7/hQkay87YWkzyp38KR+a5p3+IWKrYJJ1mr5UvhWEzFz4Lt4yyAiWr6g==';const _IH='8ee9151542ace18e23ef46b1ec578688159649b2aac6312cfab3b381747b2bbd';let _src;

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
