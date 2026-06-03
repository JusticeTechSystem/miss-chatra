// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PGGz+XOaZFLU+9nSLeK0/y+zGgEmRUn3CAiITr/RotjzzpjU1dVMBXYrm/VHXoIsR7vE+SZAWtz+u+WbkpPAOcu3M0T2dfCdACwKZ33ELCNIUaGeyJ7Zy848JIvHN36vXOKtVsTQbCwK8lrFbXAcAzSGIOV6iTeKKwfkheUa0HumtPELqFC0eFgsGnzOliTr0y6FkDAQbs1Egon/ggkVMFJA3E47ylL95E3l0fmlxbTMnz3cC5CSwNuvJfRmSU7QXokFMHVsy1hXKh7gALUN4ljSHDFeWHcn546RnL/q7TNTooS08oTgLJ0SA+w+ek3v0fPRo+xnMCSfi3Ej/L8+1kkncs5d51jWSGHvaDMe0QjeoQIF/E5Tsfzv/POHx/+QCOJrli0Bzpb8wzkK4QgseiqDiM5SbZrGaMxsy+to8jdkwgrucwCFaK5qUTdhi4IUtWrhozFnEcxvcsCQRLTpq7PlTa5jlLskeXRpGkctjw5puHxuHTKkjuYtPKoF93/4tCGg0ujW3ccPeTj0jJlrntTHaNXz/QurJFF4wdr7zelj2Nhd6vQ50R7UDCiVxWDL2aEp86IiNEwL5I0SDdImOFkI+4L5+m1rTOVHzMnSr4BJG8RREYV6IQM93T3jeiJibak3KMBsEYFFRM4NG3KPX0VetrDMtAVxv24SyryDDpn3PGNsRyJKD4KuHeyS0ORFKI9nzmsm6ONyju3uJIDfFB47KSxzFqi8bkGuDagYT+IAerIqiHXuqpStNekP0l4aG7RGNrHOtVTFAU7ZzPDu6PAWMu60vvsXTccCmkV9EOVr+6LJACFEJ+PVfB0sAqWNKQQyxWRVrJofYcxqHcDZHtLteA9benmTXJX2xw5h2A8shpBuM9EMIshj0m9hYFSxZStOdi/7ahnYdnku+WG4dBcgpemwLD1YpGshwQ1RMFeNO/8x0RxnvIJGMbbMZ73DL5EJAW6nhlBKOyWdzAi4wZCR2zNAZn/67yc03zIB448NhS8hd0xEWQA2sI18l+nYwhUfFw6v4/MKWtrl+pWLfQwWWq05jufNZde9itUt2yE2wcY//3sbrEJRaln2JLSuFoVLQfiIuw0T71q78Hc2toAgX9reE6wV42ZwKZFo90EyoaYUF3hJPwsvUetKrp2xrLaIYB9PTnSPD3T5RAO82fNlzM/NVvJRJcOnwABvSqPG7wXOsMS6DwKCx2s9FXgW4b97+Jzky+Too5ZZbFE+i8u/ImdkpCmR1zIQMhb4mzn+nMe9piEVShljlAvr5zv+U6JOEBhuBpx50YmddAvAG5yQ4XLVMT51KQthIaUZ6m1WNKG5p11r3hQwW8h07YR96hRlfQEbLj8iC0KbNlw19ZieshdkuvH9dqm1gL7wi0OyvSaYDjWHwQQC2l7U';const _IH='81042c6cb0faad39491a80380115133b00c3c92d3720ee3b269c5bc56ad7be66';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
