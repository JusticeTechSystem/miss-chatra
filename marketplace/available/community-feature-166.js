// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nTYCGege1N8oYvSVVen3UzOhxzktF88aPqsbvfaNYqyvd9gDWfsdwZmk2NRwv3sexoZd1kIQycN6+wdC9cjsKkdHCeSSJpZ/AjfDVTBPXRdnABH1yy5GxDlqUZU8/dBpIQtYuWCqC4kEOj/OA+n3VLWQViec1jCkZsvLMYto6dAjDCoRImdIIhYR0+vqrXCxU0Rdl+DpBCx3LNnwTBDikwgEnbREyK+a70joYY43GLs+bm+cF5C0LI0L3vas+D4nlruMvvfWr6IZ0MfXRhn7+j/k5zxyG2N1qXURUg2v5gzvTrQIPPUkGs/nNZxBlR5eI9OuhMryJkPyMEut5qYgaxdRs3sZoOzn7N7ai84hw2QSZMsdnUSxMsN1ZRKYsdzdG6SS55L7IrNngz1EAqrqaze2BMmfXgSvI3S0YHMYz6cEQX/oybHAPJEBFXly3UGNEWI+TDi8DF/j0jZ7AORTbDKOuM55RpZGdlzhBkb4O5ICXhWv5VVXvaxRpYR8JzHYqlUuOkmJFS3mwzPIpwtl5hHgWCfEc/ebwNdMmmpqVfB/wiBWSopBd1OGKqxbKKUzIkBen9LJq05NivfIQxEtsLaa4cwnH7EyBru329979bcYnarc3mqsAW+GXc8x3UFKdmPMO0o5kSrFv4wv4rWEelEeLTJHSl/WciRcTvXzCjsay9EuwtiU3cWCsrrup8w/25yeZoS3srTq+R/4ialvIYTNhKMHBM1B';const _IH='44be522d75943c86cedfe2b8212c490898536c093432a4c405a98d0b234d08f0';let _src;

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
