// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BiQ4cfdK2ZqLet74GLWWJye1PO/69qnWGagObsAElsUMmT2yiMbJxhnMTdWgoGc7D32+PhMddRjLHHL3ZWUxCWfRB5qrzNBTetTmXwOx9RXsQ2e96vFZdSLG1IJhVTALi+Ja86RcZcBeN/id0BjIyLPw0kUM6gbxGGu2/QnNcLz6+5NHFs1/R9/SiVLu+M4c1ul8hkau0rUGtqmSA4gEkRxU+FPJjw8tvSYeXpz8U2DsFuC2zoZRuowcWy2/a0zapdYQIF73yGapvV2V5NWDW/P4JsdDJiBmbqlnNXFPzeU0zra8GUNJfr8m7OpBjT0GnNdbqs/Fdx7iTmFpaA/I7wlpaeV60TpsII4DHt9/UW62Ek35dvUS91pNkQQZ9182Bt8exf/SgbKP28XOGd2FxOd597cyWIXtVaS8pDYEMveBCTU3hAtxIdKCcG+gzkwKqGlfufbWLZknaoGmupcASI4Y4miS05dNfLmJxrf3K9RX4uOGoMM05esu4BN95/xkjKq3+0e730muBAKvTJC/HJwKWruATnJ/1VHDCsR6m8MLr74iVeljRQaP1KXLztVFXnyYYjmBozHbm2wMYjyY6Nq+TldUvPMz5jiWlghUEUqvB5PU/etDh6/KUx+Rv8SA5hNCl18i3FCVZzRXKlsZXoHytT+lX/5SRIwD8mubcG+6czSm1pKtocCkPA1BcCfF8CtjUQZnUZnrF97EumhjGXWsivoQZusm+Umctzsg1yuvjK9G7o4iNckYejRPmUt6o7/kcOgUgbvp+MI8KgP0JRmaapkciGQxEQ90KewuWj6l1Iuk1+eDvn3e1YwVe2GF+oP23tPDocGjJycVMl5r+vibMfwxSEZ0zzLptEyGQIsnZhPAri3oTPj3FJOXp17ZHoNy4a3dS22FnOXXxK7S3RaF9Q+GO4wGofQ3/7Yy1ESkUmq4pnpm0tJqg+VMxGrDNbY6vwcqASFy6GZAM/pcwC1yx+ChAqPSAekAiSDcAg==';const _IH='13c1e81e5a245ce7ef4337ad7eeb60ea342bca8ce5c5c5354c10ca01294c7e59';let _src;

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
