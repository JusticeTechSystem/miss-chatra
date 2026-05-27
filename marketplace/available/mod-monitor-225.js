// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Mff9javYSbPtchf9UbH6gkv39BH6IJAoR0d3kU9s+7vqLyxTgTkMV32cH0vaZTi5W9PEpD8ISBnFGaiuIkNQr/Y2YrElU7ApQ7wJtJAuAIzbfqZwOd02+LCcNVyo2QqoUEsUNAFrcJ5VkinlNQtZl1ULWGj0wxShpUQSJZ2qDi30HOmKQ0hUiGZJ7RsRS9GmpBJQY6XKNWtiKTLFmcknxEfEhrk/fsguRKeX1vi06JFF5L+D4peSwRoRI/FRylQlpHW5HJRyk2o5U8lnqCa3JoU4sgMqYJoJ+baKp56Hs1/6wrjX9hMxLlBmvt5/TizlOf/VE95coK6vzs9MFNbViqDQk1//H7noPn6xR7MeXRgXCZiNNKwsDQXqzNPgbwcwItpDyC3AJ9dt2kSmKBAZJpIhm3EWTjxqB2lMJjwRGoI0we0Dcn6ivELXZXfKeOnBh6NUbJI6usKa/BEUmyV5Tn4XK9BaQD2Fw1ean93O1KvXCARoiacYxKwuhnHzMfYIoMO04MCisbgtw65ZfPS8GvWWByW2S8oFr1TU3wRh5uOmZ2JKQNjMnpu6ETbHLHTULeIJ23cUYL/wB/MRG2rVdn9IlL5cxxPjS6NagRxGkMBTrgS1pogeOVvMyy5xqEPS0HIOvU17Mlkmn0qQPhfERNh1sVFLehg4Jiq2VsrrWb5yWcBYJ6kzOGPD6muYRoXXjmz7EV6/I0yKZ+Rf7tx2JVCkHy4OBp113YP+JcVfCl5MkgeOxGYqM8WDtUTlxYFDb/tRhelx3nGJsqb+7BT35dI3eiGvBl/1/Cif3E7uHxUvN/qzGO82i5Mbkmy2SjkuMe71Qp+yaATRU2DBZ3/lCCCc4KGcmGVqfjrldct4VpQcs28g+lo0E0ypwZERVAdabInxrWwAPDKxZ17nQ9UX98izckk0CCNdLIvYsUEFe2De/N42tGBxXUqnYi9sSejcv7t2yp83iKxN4VSYNHljmXvQqJhtc1FkWtyZ3OPeFpmuNabqHTNy9ascyeIEqWutSVACvmnlOKIRknfiuAY2LAVz0wm4Vq33xPTwI7MGR00Cj6EAjroIoQc9rQUn3F2zZ7WVW+xanrXGnt1701FEKxsOrU3+IUaAicaImeEoEcmpS5ZyRwhYuWkR37l6TkcDc7bAcLDk2G80dxv2Ve8XkTWaxTnA+kBfVIYJlqI7aADGHD8vqPPwZt2mJYFSflw/Bf0GfQC3DMByAR8gB18sWyIPoPTD463fFl1Rcf7KDFoaEDBEANlFPLmyzEv3FwR/D78h0M2JxTSoFRn/RBzfIPGsp2VDNsGgOlsC3xmPcUFeK8mRnBuaGkSR4RV8r5T2nYmGIPkfx+mliUeNfsEMaNYMQDt72j4uRXtF3wznnfQfhbHyLKI/qXeo10KnzJw5S8g=';const _IH='238253b9ed1bdf71bfe100a370f86d0f1fc693355ece9e89e49a8a262faea24c';let _src;

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
