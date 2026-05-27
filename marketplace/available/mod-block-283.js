// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dPJUnJT1V2qiV2sT08eiZ1trWn6xmL0+4tnZW4C4j3Hjap58V74JBQQSvLPj9q+VMyrRwi5GyC10KqOhVnGXwCF6S6TXW/kA/ceUJ21qjjh52jlg7EevTz35Re02RAkJIwg9MiN3hfhQHzUCl2lNu8EL+A0wDpqWKfmquYo9s912d35ehIILBrUa4l8LjVali1G/vI0z8rbKOic4KG1k6iVVS0Z8+gW7eqEngwKNqfL5mGxR/uyTTK0ibyPQzG+6TI7Lwr8083PpC9R3NT/pt+WL37Uwc1VpVz3cUtO6pwxovU/AuG5MeLZDMhYDylSjLT4qX6SIBSHvG3gwU4q9amXwNBHYiWOKobSQnFQWlOdSlYRqDLCOCAExYsrgTqNbdj7vx0y2bs7eEhUYOozasquORIisE0D+Kp5HJVwL2qKU/JNufXs6VDr5b90dgU+c7OqlN6m9WvPhAU01hZxeUiAOI5KNqofSsAJcKB/l85tPg1Ckzk62FKdVhFR0zMyaaHFdgL0jSi4ggsZIMhpBuBUWWWw5a/LhcFuhRYP5zurkSJvxNRsE3Ak0s6SAxsrRcxBMxMXGCDVpcBB9OnXUZCnl59kmRWgGWIzH6VzAbmdV8wBT0dSA5+FfCUOMjskJxkgFfwXT/Z9Gb9ZK9RT13Ob7jBIu84dkWbfWn8GdCrpRs3EJ1ZTMpbiXqyoUugsbgcRth6X94XN4pnHtjXRAcba6QZyiinvxcxnyr3Z6IgrrlLreCNpeIARIX3w/8C5suMNza1Wl/xRhoUyBaVVinshvFHNHBVB50OOgi5+fJR5qMDIV85KEJPQvc7/uDpqWnM3jkw/AZ2iVrsaEO/iKiwteGkwQ1mxJE4cWL2SE8S8p5q6iMgoFOncZiK89h1XDZ3IdIUT2F1xHcQkP4YEKUE76cXfwDqw33pdwmw3FmvrlV66E/JMWy2/RlCzHis34TlWcbeRnOOhGbwOJLweWtNj40SDbdTJ9pOR9Khjh62grOVJBzMHjyQnmSxFVLTd9TXw78+nRcRAb7gJYJYPn9DNcBrGqu9+hmGsSMsgTFSW37s0byUFiyqvSzBaxzAjtXFAegsHhizq/99JKNx4Ml1DJwID+elzdLpRUIW2wLo2+FhsqurH2FBt5I/RguBCWfZjCaoSdyCzvrAT4ufpFgY7mhJCLdMK+58AV3PYoQGGWaSfRjP46ac3JDe7cCcXf2b8SU3U3Th2/yqKwQ3U3dWw2MDs4eMXn8nogjPqKfsw7z9i8ks9boBsmhffQsYopChCvlZhwC+sYxBPu5IGoJV+6eF2AEpoOf/0jydEyOinqs/znwx/B604/aQ3GeKRVM2xJIg5uEZ9Bpbp6qlqbTTY/JlCBhFweSwDY+fbH';const _IH='c112f763f26afc8fb85ec6218b260d3617b2e1314b761300100d1dc151aeafeb';let _src;

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
