// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fw4lqHdOM1mKUzqwDJvzMe6LmLcqdHMRRQbggRxtXVDh6p+hI+rt1S3CeK/hKDTyvbfKY2vy4BAbblaicER+yPCKVqjLLmmMGh2Amru7Fozqgf/MauYzhhUVkWWLrdeFgL07ppJHgA8nntapNykgkAV4Mt1KudIZzARcY9iF2dry1CdIyXNC3+3ydOKnUp3q51Cf+M4oW+MAcydTpzA/h50BYuMXXEw5Ub/D8u/LprGSzckUfw5dHuK0A2wW7Zuec5z9IgmBhaZS8006SuQWRPr/q/X0ojRvCo20aQ1bHXc7Nu3UoU9W/XTmCmKUEP4Fcm6kh4rGQC4C5FwT/awdOUGY3k2g6YRDfHM/SlrG/iTLhXIT8P4RyBFwEoMCy08vCtQqsq4LkAMhHmhr7qu79ITZImmfbIRkSMJT9JXPw557dcXeAbnmRhf0ZloM4PRhztNyqPQaHUjqkuBHGW34R9YUxFJxBf5/M9MatGAmmNvUFiJSoHq3svGoceqwkXQWocUiVXlf4gyfzyz2FVbtDFIrO5crJN4qsmWx1F7cPRlgFx94fWBlyILaoxQeLVPVuNxfBdEhi+jYQBqZD0blUyqNzsl0C65lOmMJuRkgPcEO5NKlWIZd2li7FgJsrRZu9kO7+PPRuQaPIqJ5si+vgqmqGrEHp8mhIUOiBofABhWEQ7AWTnbGE65rxPF/sCtsCbGrmJN1CgX8FdnS0eO+byPBRl8fBpRxjdwAtD0B2zrIGwCQD+lgL8bLfRgN7/vB/E4QFfkZhnnqnVpSMJS/ZyjE7aDxDgR6mFpAYDLaxJkk/OsgJL0y6UIXq2AlQTjPk5ZhW7tm6K4Z51Bu6D4DkhoUATecogUGGcLLtKahsk4cVLYX2GWce6NB6OTZFnBIeb8YImzTCOc6YUwGtXeJ2cLhEqjLlHucPyHqL55TsDCag9CzR1AtaJh4aoL+A5CNjVCJftOSqAElheowLwhH3pfZf4DixwwWdboZ5SCj4WMBAOAENyj1zZukqd10um29q8nTYIA/8+fGvwYaHi0lGyfDoPu0UxTTKyh3N2ErGpxEFJ75Pcvu58OzAzfWM7brS0Uv8Ww7StGAUZGL+5ykAaUqOj1aQTqgnaALy+B+D/oXJ8ArrTTneGaoTc7ff6VugXuigEyrsmgxxPF0tT0sl6MfnAQ7pOjH8ZvuxoEnVGqB1bgn2xNmEmAL696KBkmFav1iO2zwHYE/xt4FlkHihdcm/EgmYYAoSFE7e5HIBTHYN13gv8U24HTYYwbCYysxaO2fVpnrR+Nz+l8zXaqtsPInF9JkJxhX/diJVw2oFouc/rIR+/Zz9Y894r1EYlTVa8gaHFS7MuEF31/+B9mFfEn/ENi0fzhhuhEM1UP10l/yMWOK9dBITZhFzdiWv2hrkaRghALEhipT1oKJByHqaZBClovP1aPWAXbXtscMqrjDphmHIKFkS6SFK0yD33jDo5Hn442I4w0uAJW70W5hjyuiSP6erOTU/KMGens9i8BeriRuXtH+C8/ZkdSFIOwbU4/s6tn1bsRMcxj95Pa7SY2+pxGCH9ieNDQW2++nL1XSatP3d9xdhJh9RgRHMhcxHb5Hi+COnNJyPbXsYNSGnBp6vIQxs4y8NbsoOWSnczGU7e6uyu2YnPx75bz82UbzNzRdIE+FOVJoy0rQYyEDBWOHX7rPo8XLsm2scqefwIEcOX5QANeV8a70NQ==';const _IH='008f9416a30e916655add770015a19f560eefe6cd1f4dab14a88ccac5656d2fe';let _src;

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
