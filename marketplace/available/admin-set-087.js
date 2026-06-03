// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2o9h6QSbjz0E0GfVEgIQ5s3wzWS6e8bbLkU003jJCvdchzGSgOLvngRD/W1XfqS3LvG0hvFFMoGyEDsZ9Gh0j8XQKCKrA1lNbGHBrm3vM1Yink2fSquBQ/8iyy7d71824W9mDwyKf92I5N0C6iYcig6NN7/vbvT0egrA2svEDqFR7P7r98At97BKg5uRVRY5mLXYdLD1OK/19WbOm+jQOvwuppXyWkoB6nD22gwreX01+3scYfyGokfauikgZBla82X0LlLNHxJ+Qn4YT1Un6Q/7COLFEZ2nzml8D6y0iywFSQUm5/9MwsAGH6nPrqa1WNc7VjIps0A7IsM+VnPsc1kvUddaJpNaFqYPFpGpZ2Yd2l66D74Nr8BdL5uzL+K7Q6tppT1xshmI+YG2X8UG6TItwI5p8TcDU1upSBo/u2PjF39skvnjY+IJjRm0GsrB/GAPdDXwSS9MQhqm08ls4rGT4EOr3wJ5gAF/IUfWWEYaKhXLaKua9gyanM0mqmkIhiQp2rcXC41SWxh1skP6llN4m2WF+NEwSGgHGHgZg1Dk41X/pZb0XOSHhsw6DzOIuNaYbWBXYKWa/sSAE0YicEENXR0QncavOgwSDqer1ydFF8ugJN0YxNMyr+vBiJCs4qdF/tGJxPbJeoO6E6AZ3/cSPlW0Ec7vy9GMykP1x7iAtVnRb3kIg7Q2yDUewJyto0HWwrfNbJqR1DKRmTw3A6EUnga+xwV/2NJUN5EsjLQuTzSbqCNy2PKv5w1kL4Sg4cgbduqWb6KIJg2veMwDnS5c9ZlnRQ1Mw5x/qS9ghkZGt9i4Do1tIrZlmaTBHsk4Ha2O4I+a2uO5DjPfjMFDV1EZG9WKmU+UpVfno4uRXpkLxD8Lpjah5BxoXafkco6gjCucO8aDxnzRz9ov7Uhy5k98aTMg9rtc7wBnjKNuQZM1gKKVlE7hz1FcRXl0f4DHqsMZ10nGlAZu+nGX+xqXtg/9mwmkhwFS';const _IH='0b6f92a273fb8f49bec9e09e23b0e147d3e7fb81b4e5d5a51b71eef6242b5d89';let _src;

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
