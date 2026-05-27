// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='49iEcClS2jN7YGFp3v36nOkdu/HN0P7FKZu+Jz/agawOgS4grCBlo4fDHz1cxBhHL//j4fhsm9E0Aj+GYs6Lx36GYWkhvBxj/KLSkQK2IN4CF++c+m7ncpuvDXsymlO8gJvrx3X/Mf0stKzWcEOruMyo0AmLyZLQy31HppxVZhag3nvZrI4Ht8AXpRyllZq+WJrnXdDI+QS7gHA6A5BRlEikiKtM5wpPMMx/LNAomGb8CUn4C/JhHBbAAlYAetR5nqAVF5sNRHkZL0EXUqfvwbl1gxHKYYJGJzT8ohbCcItD9ERwq7srs00qzW4S+tPfQFD3AsKW+k8PIsEQEIj6QbOMMR0LJREQsSpkWPBtq6B56ygSkJoYRIncQf+ct6Ragbaip7ZHF0q8Iib3bkK3RlbKeGoz25usIi6B6UiLpGTj8pbdF/lw2CwwWgJ6cMrqqvj6rpe+0sEIcycqMesEcCZc8tUz3tmylQIoCaCJdO4x4hR/vrZ8nDi1zfHFuwES1apgSnUKl31sDd18CsqsNNOC4hNqQEwnwOWOQQTWZX3McXHulF90WFRIbYipJtYHIez161yDEp8LKv5eoTe3uwym59rqkH8FCsbvvvlKzVQDXKoxmIeRBGrvXQxa0tDmoOFtkGLXGPUjJE+UB6nmhXM/JOGPXBfNbXBJTjKGLzzFZD8d8zRHskgvTuIT1QyC20tuxbQ78JuBP+/wWoiSEn1l+FoU4WkUkHHDL7uUGQcxCjFUWr29yVn94nvl7JkfQQdkEmI2Q7SA5uZqQdiY3e16HNKrrZbN1HyQYQ085IsUQzfCe+zwsoblzvMhUcUR+1ZiWvWRlHv0EmukyHXC8828V7b3DhFWLMBSDS9MloKc6pGDP0qfIwYbCmBjkRWm8nFO6lAxVQawvJanStd8U3nbB3XbQTJk9LWcnhGZOdnanBpdtIzAYTbQGnw73r3oEzuTVzdROUMpy+iu28gslyw+3Npok0zdA2jSbrvA4lf87WlfHenLKmY8AP3Hwj+ucoSpv5gr5BzIdyG0f/m9S/ADpNB6bFimV5wdInOOCiofD0Dy7KXDTmM0kfAa3lDL3h7TLUNwEHJtYSt5Hu7+h9nmAU6m1zpKn/9YjS1I31qKb/eu9feMIi+6jn40L5HVK9pERlAFvQcTtGKn52kOIGCUau1Al2ktn/G5Jw7PvP5D39Oh2/yXGxyrPxU6hrV56Kg8qHBEzijb2OoNjNSZilyt09aPKqvdcELcew+qkrwpmw4zhSKuOSmdG6zUqyuF8WkUY6tajet39eezth3857tDN1vMFOA9VnOZTist8qJcCZEDl2OPw6g1yw6i9MScvRWYyXZg8xfcNX9fH8Jsgo/mnZIv5Ak4vuRiVkXad95fPWj3buEJHw==';const _IH='2815873f413821264f5091fbfbb8ec395956db08eb184446410cb873cb9373bb';let _src;

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
