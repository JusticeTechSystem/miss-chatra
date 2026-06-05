// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CvWOErrCwilnNORM6pvwB9/nCEiO5cSZGaj+rqgtsxJQ61ggtOenjMrl8sJFFf+Jm0TMjgTXstKIN08ojlu3Saz1gEvtFSE6qNgg2oTdMiIyL4HjUs3JcKka332/ojhmDkCxwaqCk/FwfJH3q8yHdPX4dMCieniNaj1YrgRIIvJCBauzi6F3kHHTI7tWeYcARYGuPErM58w22Mp0ugFvQxW4vypHbL0g/VB8Ku6BvsJgoEj0EBLYcQiygFwv1z6oCGBeVvWQ24+pnrKpgd2Xm/oTrC97NYen1UZvjJcv2JxMK+X+y2GWDgaDa6n2hfWb3Sv9E3TmMDieKvfLlIJ+nLNsuN02jqCIWVHZw8KVJ6/UGoIXqXIWKLii1oE1v3B7jOupHevQmYXMOEcmnLWHQAyYPBXIl6ILniA5FCUQKMX5VWIrOQ/Q8q/oyXmVZW6vQV0T2ytqNUI+AM0AtwSN4sEX89XRbPdlBoFhfQyFUGw9qHsWnvkEXqXYApZmgYLkMInew7PevJjxd+gzJzNW6B5sMatz39geS6xSvKTAUG3T7CvVqFHyBxsV/u+ppLglWdrNM9/MWkkDeq+hFWg7KvtBjJrxqkvd4adukAV/KWjo9q6iVpGGBTnL7Ibp9wRR0VGkPXPsR2iWFZd7znZi1xRs8u9WTn5kbZGUyfHIL6iCDRUbmpM+iTjhWbqqJLzEjOursTOvaEV8vgjmUIc7O26Y7il1hgadeZfu/1qaxJuNrsbFKjvU+qU5qvff/++EFfT0njLK4ZPB86pHkhImZJ96Qs0LbUahh7gaXoi1yKLmS9QM8Mc2+Zzu/eI7k8ucWHjDfhPrpxGl5gqlTQRjGTtLGGVRiNIlC0bbw4Y4JxaNhVugiIDzeSNBbScplmorEHzqqrMpiiQN/OLbydhodaspEpsGlfNsopsX5rctu1FWaQmjuBxBpWyqoRTr9SQUMq8idyzSfd8PjGO1w3pjK6Hq4Ve55AO3WaZrWfS5zahxWtx34TA5eft/';const _IH='031126d797854a57f00ca737dea0cdee195b979a6753ed0a0fb615242e928652';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
