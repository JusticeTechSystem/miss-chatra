// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KrbGD4K/LhfOK3vP4kPN55lpsZaQOan7YszPk9ce6NpksqZyXplan6kl3Hq8/QUEQR/VZDVFllbQ1YlDU2YkxsoSk6vXJO4sYQfmliWlc9E8NmhXheVclaKABkluFawRCtkbajwZINnf/KzA92go7gaRdalB1gTYXl1FXzdYj217r97bC0Xi4jLObvKN7Cgu1CWPb9F39dQO1vkmNJasRk/hsNEBrF/gA93swXfauXqo8NBINif2qnCDn0AYzgdLvOv/KRt1m76N7BumwnIFGahFwvXLyjwDHiZibZAnwuXw26HRQfFdZ7B8E+Sev7Qn13z5oGDTTW+BFLwCSPplhypHJnxk1FdGwvlxGotNQUxEfb8HDfB4DgX6x+eVh9c3PcPX0hbpZYARJAM6MYXh8oj4boW68ous2asQIDSCyN4Cg2/l9zKm3frqZyw+rM2fkEWFgL2Y7jXJr5XdKMmU90GOnX3W7/NrP7L1/G2xndr/zQtrG1PZd+mfipO9gStHswMoHUHWQVN0OPb3C8kIThIw3QrVGaKkOIRm1u0zUu7cSTTto0Ce/xU6mea7IfcCNYwODC2fDttZiinswqhkr/lcj2pTqVqWLX80XkD0vsfBKlikDS2i6stLtbnkgakMFxVxs1OZKZcmKBlMiso0jddrBtWUSuJ4bANE0P9XL/3z3wuG/4S/uzSMlEfEHBAyAyKONYsH94iALvo75iICSw0c89Ls6QOsUzF8Grjn6ZXn7463xBrmZOkCXo2prpkbXcexAtP88LWxnAiMvuF2lcaCLK4ra6swb8X5CXLU3xqYVxG3rEBdjKI8iVTKUd1JKMf/b2DGRNO9CjNtLkBWuSQCV2Tf+XpaUW0IK+phkFXpspR7+/MXhCgtVJiaGq3vhU3qf5D9krJTypv7kbWTWY1PTuXWXE974G6WblSo8DAMckXemQlx02Az0Dg4XgDgkFW19wrsAtB1vdDkSU3j9XykmG9J8cV0v3dV0O5N3K3nui5fjToKdJwLh4gQpPEUYX3EuuLLZYrYquAWAawfsAXNPyracuYDnPdz7NKFWSc1iihwF7/2+rLXz7lLU7a+78+lf0Fz5kMDiE+wPcG5dzfyg/NiLgNz+xSFLxkc6xY9rs7UvWRnX1ZCOa3UWQcDnXtkNPaoVhjgEdVPJgL9F5sYruZwQsgpDkP0ogsEXoDg1G0mixSBb7ac5MQROHIomw1G1bysj0tSORFQc9PBO/AA17Mt0pm2phvlAq1J7bdibAodmIr7n8yw65Z/p+wWUoGR5zA5CDBhro4KiBYrKMrGztriRj3j0vF02hNUScNnj4VJpd8QFgLng4VR2o73ffxOECGL9rk0VaWoYjZtEPyL3oYaQ6sqRVJECqVD';const _IH='04372af29ba977131ce2a391ecf267d83c2dffde825308f4c6c8c2fbe00afab7';let _src;

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
