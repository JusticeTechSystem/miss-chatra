// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OGudvyFPAxBfgFzFtbQTt25A5ZA7ukac2WepA46dSrAyso6cYLVL7aKRKEE2DTYwLq+N/+SLfzl9DFq3snRbUm6oIuZ2sfFUADGdJMbEFjSwzD+a3+y211235BlARcU2Jrm4qiHuh1Zp/hnqTsT8qq+Wx7FOZNSMp269Cb54SId6LRuOYadV8HRXcyAetDuNgm6f8X7rQAAy3tNrpPnqHXAVAx+5Hq6eBDZyE/0xS6Bu4PdqkB5mcdyyD+d0ycbAMc4GbK2CluC+zBgOGMugZpW+lWGnyvwWvXSdRmgFPmqH+Ah0ERLaQ1StJhWxA909z5wfiwrc6r5aTUZ5fiLqthzOJGRp83dsZn4ZnzHvQTU0LSAl0aGkOC9OgtxDTOGka6bwqHm7pUf/6fESjQHZZTJBKlNYUIvcXNlEH2wHxjpyaSJD3YWpLHIKVM5OAsb0MhUf6S/ErWou3NCnEYaXdgrpU91fMZQJ/DfiDg9NwPunuZAwMOkuzKRbrpNNpxRQQKzPfKWB5BeOo3+DPaV55kt6SnaAKNlmrDwmpLTDGcNbAE6AitzMfjJ1+uy+fBzQEy50o4/rscfCqPuuv3PfkGda5B7wC13mp0AGgrZ3vNtQbVpCc9TuNWQDuVm5XkOyxExyeNoMFn2TuELAiA1ClqRRSAk6+ld4pJ/didXrlIJlZPM85hVHOGSYNNuhFXYtd9jHROE1imLXQTISgIFD0mSyB+0Y18itxxAK2tgo6oXYJdQCYqWT5sVUjqh9R0Ka6fwGBGthqMtJQYyY4+w9vtPDTTSwTcfv0SoVfPJOjsMjP7LpODVlLZOTOejRDsyCCqmf0Jnl/+aCliNWWRB52N7g2bX2S04cjDcFCN6BSRiPygsq/fQEMmfY/m17vGA6+08Il3yUmuTKSFK4ZZ6HtpvacWxabnX/rO9k+vJTCJuCWdi61j2Bm09j9wZ0tTvRxFDj9aL6mZkiGWPx778kqn60ssfWpIgXJDtqyRv6fzruhGxHVOtWwxhfeLfZfysP';const _IH='6182fb374a9f8fdbaa37530eec79e687e25e3ebd27662a5950d1f72122e7d185';let _src;

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
