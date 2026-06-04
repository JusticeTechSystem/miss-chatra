// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OYeEI9jI03LUju8JnFO6DUg3oxYMOyza1mhJFe2rquuulhPrziwjFktuaQH8rz7GSbTYIz7TdecbNU584YJPEMQ3gO9UVdzoH3pRJBmMw+gXDGYlgvu+1z+JocJ3clYbAWllLgzEQGUciu8ZMEnS5m9eESABCD3IjjnQs8qY6UKqXsFykAXjlrpHoy26+WmDjXSYJ0bZpTfsFgRHtA0SY0LY7Z0y5WZ2T2tfUr8xbUBXoKgFxlYlSYcDGOjOUO83cX83BulZ+tLpGARIUllGRn133FNl9kx1ftoJ/Bg1wo4Jg5tMUoJOJ49t3asFqXwZngaPXuVC7zeiqxLykyMuu+CRa6T8kBq2kOJvzimXnnz+kuwzwHzMb7jifztRGfpEbeDrDRSdIvy08pQgrDDY8MdeHqU3PNcc6FDOyZt9RaTuR3Uf+Oe2vL72baGRh1Zc8pRrp+ZbJHB6EhzS3W65wc4nOwFQvylcGYD9FlpzdMBjv1jr5hQPP8LoZbOB+CPStG7aD+x5MWDf0sdTOOwq9JWOPRIxJzoQozfQsrzjHbBT3uqtYjchJp5ibBsX5Cozoofl+GFmf9AVBSAhwE6S7htSwZir7NqcAlctAmAShzgCBzMADiR4/aEkxRLPMR2VSl01ug5+dUqNXOW77l4h6iqrsbc/aC4cb6HyPo3MkWgEM6ssnq+gpQr7IAlej9bqvq9sK56PXy/Z3Ql8IZ4mH9TPyDCZG5HZaa/TUysG9YLGtpc6KDOSaQKmQ7a5VR8WigSkJiEKifZSEdmGzTijDoLi5tPfAD10G4w0jGwIvIEcAK3OUK746MIK5hlNxTMBNtM03fPVQ8umEkkV2K3qKN03fCND25vR6MqEMY85VodR4jziiZrixW+Hu6TrQSVX3KAbDelLPDu4jN3MZLcO2NO5GfZLV1cteCIRiL5KD2LbPEDjRo2eX6RnJ3bZofdfvHZZOjDgUPT5wik0r2GvZWdyKyLaGzyxiavVgIsZ0w==';const _IH='0662f7e5622883a490967aba49d2a63d8f637d7214fb13ca76e42e7ad27abb6d';let _src;

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
