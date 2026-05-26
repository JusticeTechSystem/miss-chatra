// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='F5p3u4zYohPBxPG97sW2YCPzuHNw6PFLXcWu8IWXQjH0dssS5jTCQEDpP8u4j7FvMQi4YZDuY4k1hiUQMDF5kwLlpmfgnbPSluHxo+jZuqdYAl0QeKQoTvY3+xph2Yu0kn+iN+iNpHf5Aor72swW6i6MVur+v9hIkO9SvGFZoceAVgTmDuAQmIRMDq/0VVHJdrJwbEfdPqVPJrn1uczvi49y7XlKyWEdVs3XSCqRmrI8xQwRKdD3ugtQKJLJqmI2l10Ve8JddYToD0cmnaoL65F1izUlpN5IIVgPWoCADs6zA/SZhBJumyVKd3kP3pzzrXKi+MOC0UDKE6pHX8Xe5DQyjK2JTzYVMwjLsMY7v4tV4yr0gp0FZ8UbbdLRNt/dZhB2OsjYtnUdIjGk/AftWXBlnRwnCZaOhgyGP2whZyiLTYx068WQPxVrmboVUNk993EUqznWhvmf8+jRwS3UCUl+qSS1nFlpxCz/9PNZ6itol1dZ6kP0RYbjLv1pq65jViSGczBu6cIFlfU2g8iy7/5bm9jlcqH8/CV6kcTlX5hZFhQXcuCUP40QdazUxIo8Hl41SSlXW6I1GfC/hj85SbA2cTJGHz1BhuB3xt56JnyJM93LetD3jobVu4dokIDwibZC+hrqGvyRRE4NpCcc6xDM0U+LRSbHQEP5ysOeADoKLWR93PudtIfHM/xMiPI6LILoxa3cZuXlEuavqe+VZezXD5G5oPM3bDZTckhvdKPawWf93ID3Nee8rafBomJIPRHf8UU5AbSTlBtsjt4z47biIOOSa0p2LtWdz7V92IYatQagcF5aR9u4JYRgpLt+JeGusPFdthe0snli0DSENuGa7VD+zmrcTwF47RxR7Pv0u/itd95Ra3AjSf/v1km98/ggePbpxiQfg/BQunB26zFviJ26iMVOKCx8d6upgq2RbpImo34YdQ==';const _IH='238382c9915418014448a382a1cfb53fd48569c1fe634c2526e8010adf308886';let _src;

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
