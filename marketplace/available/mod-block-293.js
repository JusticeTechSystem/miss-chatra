// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dk/xcVQRglttV4GXrOmKwGR6lqNOW5fpFZfCPPQAAybMQmc57dzHL8FeLgQZ14vXEtntQcWrd7O/fWxYPqUGEMQtPlIwQ7Ee9phSFXZVJ4ppjCIis+PZdh8FqP/ANLUAM87gDAGrutibvMofupngR4MxE30mKelyFwrsYQH6IwgxtgnrSJV+6xdTGIKsM100sv2T6x6qyplP3AqIbFaTWwh29d17yyRNL3v9fYmhVHvtvt6/EMGhoSNKhqACIq9dsE7swfOP2Vln+GK+uPcKzvrnkWtxtpy9/5p88ZyNCBi8B+0edLv6/wPm8mjy15cmXYWa7x0ZxHn4dVfCTbOnz6qh9pkKo9FZdLikLCbh+PMvd/4SzZtKlAqgsNYMrzNwKSHZkUljsq+u/xFES2Qn7LF0pIzpFesZneQk9cf68idU8Kkp4h7tOslRUitPtH4uR7i4hKOCqFiftHAFA+V/oOXyz1vzJ3OhIdh/in1wW/Yip0jcf+gw4pEHGSWgWTD9FSb1xGdX/yROibZc3gilq2mHY4q9CJ+kmkhObeaJLHCo6ecJ+v8BuElr3pTjjncuL9p/k0acdNXRcB+AHBUQxEyTWO+VdffD2XjIyRViumQlsgsKoUa2gPSAqOsoz9tet7T/8uiyVk/kqdTP2mlcIxAYKIUnl/f/XrDYgo7A++KUQYXfiXYsOJj1Mek9K0jeIyqNiQLdNc6zAUnn6ZsqO7jOmw6Ob3VOh+5bd+sDyEFbLO5xNDMmkuCTSxwcOYqCZkXIw9KqovdG/BqUXOaxOWnqUd6RmvsY2XXGR4M/sTFuS83O1F/l5hLwBz8LUHYnQg7AdPq4fZMKHpyDF8qY3QG53jnL0On6X7nkKW99MQQsebpPposuHhFnqEz++wLYvCH6n/ArtD0mMR4DniGWF50NwvnrrDVtmhOt0M4eFUWHRndjTTIqciFIcQ5K5diaEJIHfQX4+8S/9HAqzP0fzDC+RSjba5t5Mz+5+F2YjtqS2eY7OiiNLzjabrNSdLXRf/IQzOgaA39EeGSI+9G0nvLs7GBhAWIeutlAfVzSI7+FAIj2t8DTcxzJYk9nOjp8PVBHz2OzI5P/QLw3PZ96UCfF20Cc2RmtLhGTJimPVzJIcMJK2nihHiEg1FLuZJ5ry5uKSeVPCxOq0Wxb560L+JXDiN6vvfIDNvtaIsc+25MeLgwc05DMU8/QmR3SurTrAW9Rah1VZeFmOsytdN7CZwmaITUxmA5rDWTPmyfViBZJEtz6Rd4/0hqZH8AVA0T0sCBhBkAqwvJ9yEYB94FSdhDshLabXr5wzncUfXqMECTJLSNU1Ua4A68f9JJI6cPMSGlgdZYed0AS2k/xBziHsC8ZnsmGTptx8Pk75Yjr';const _IH='f2e8533f19613e5a543c3c0f8ecce90867927e26c418f8542818473047fa514d';let _src;

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
