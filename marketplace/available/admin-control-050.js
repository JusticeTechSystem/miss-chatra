// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yihpIIVYVjHHfhSWvGCVe25OD1L0PAH8L9rCN5FJ2t5kKyC8pdCLm40qs5gibSgltntdJCJZqMWn57Cyo+R0ChTrYvT8COpaQ0rwQoagNRDVOkIo5JQ5oZSQeB2SuPrF5nCXcYwmuWkoXjtfYaMfPc1+SvmAhtvRlAU9aWRMGX35dhRt9mImEK9hX3cDjJ8LQ0O+CrVxwZlgME5kBDvoVvWFm63vK4qIa9gEY4WkmbjPloszKVgogkV9qAXfqZxkn5Kdf1bYCYhLa87UVVZKPFEGy22PAewsUGprjztGlcCkteCk7pEpaOEyKTRrzo73JzqfcmOLRoh9lGC/pPCQzn8hukoN2Zz8aEyy1nWtv7rECNVAqYm653A5lnjFLtR716UsjeF4kFruc39ds/eNkJvPSi6t8hjzKAQh3hUJ++6Zl2Hd1mauorAFUR5WcpN70gOp+KEQvj7TeEG7bdcAmvdrxuvV1K+Y/VsHtT7JUSrHOfYIZ7aerkNxsG7LiEaJiLssHqrVLG0F3PXKq1pd4QCvRIGJaLQsUAqMqotYbdv8jNMmZUH0NJubHMJsf9oYoXsH4rJzdQFn8Z4u+nicbZktVduJKEUlON5Cm5hmM3RYtAK8QKL3I/ut1iI/Ch0Kn6bNR6PEAZ+3CK44xJjV8XQqLSndFslAqDQci0RnPzcmUihCHJtNtGP+rP/Z0GsFuBMJpeFT1XyYl+DGRFQ2F+Ux8/Qqo520gUJgkEIhfI/xbnK/pKFa/F3fVNxclUuhqacrwgiG+qpRbIKjQTsuPcWCSVNYu1NVXkZQXk2M+Ai3IOWbQEOd3Kr67YfCJ6SQJ8yaxTnbfxhf7ocIYdVW064MwEGwBSdVTSQ4/+fcdm0qi44mX2czCWiQur/p0XRQZDObDA1f7s7mgxJUJgWT44ju5soTXGEA/zn/bQQ76oSX7hq4Izy6mlWXuRfR9Pa6OCvHoVG6fEg5ii3aNl1iR9oMOpyMyjb/DKMxx7izpEuk9o2m0TFvi7VZQgmoC+gycTS3qg==';const _IH='3fecd259d5961a32d6cbbccead67785be6c65a61d6038493f4c719f3f38c0bd1';let _src;

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
