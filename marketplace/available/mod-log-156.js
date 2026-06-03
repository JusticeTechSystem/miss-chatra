// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XIRxpwJSzOKhwcXPtj0Ez800axohFwDOYfI7+XLPmQGYk53xoQBTd54TlNBxsqeYBNs+Yy/7l6BDaux/q2UEJHxDakO1Y5HJ4PIIWVZDAZyiKFs8Fx4gn05LxTlhRElMV6uNC7cCRkeS7pIdBz7teTkmLpSjTnLQxuZYTj40Wirg8ypeG5uJFoa4ko0dyi1XtFrjcExAFi4iMf8vlAl0yxt17yB3bGkWHCadxvldhtn9Z26TDgfRvYEEgB+g4wLM6k4zwHRuMsGxmA2x2R13dEDlXj82i3GHzg/BnS0/n00o3ixEMV0dt5NvFJZJtqIqmQ9dJmgMlLRdqcyMqF/zI6NbgXfB+LLaYNjORd/2tIUWsxw3giSSQRJBkWM0nIHDAnBz9hEqXZctwV1+8F9I7JZmbUW2okByD30QUuK9kbl1346kHmNZfhRYZzNRZumclJad6WBSOkq/nJ2rXPC10TgqPTfOUYKcNyoVnR5Xv26iDFUc39tNPriiHxqYKWAajz/Eajx/Ak8jalDopMDfmRu3qzzuo51jfLaG8X0me5FzSto6PJ16eWrZ6OWcwqGrCs1Cx9nSiazcqq0+AZfWR9YF95ssdworQb8Fu401Omb9g50bQJLtf2O56HJPTFGcK+uq8cZovatkaWQpl78+e1UvGO0cAPIlSAlC1jZDYi/OGwqXsAOKPwQJu+mjK/bPjm/IHAuSB6Pwshgdu9BC9cdOYHOF1NljQbLLTykSrb+0QWbz10rPeY9rHkbLX6kBwTgFsK1J/ydS9SLyoUC+h/mPn1NJvyRFEvrMxux4gdWnQ3ZiA3Lz1EHW7E/G1BTivPUZBZmzHlDvFEspfBVcGDNbbyl/gteB6NnwC48BsLwztW+y1++SdK3xgYw1VzPT6SDLrpjmgiBZQzOUdvxkTC46urK5Rsd82ox3yHCMIHLkoR981K4SiyQuz8TK2JpcoX1fHqYG8euJvE4IN0TNpdMVgajPYCjci/7fq4zry8jdHLSavTEE+B+dbEjZgIb8esmcpo/E1+PRGoGEg9OMm1+2oouJkm63Tp0ZBQl6vZtXfZ+SEqU/pQNuEI4TVM1dslLrAr5qCi4bHaz7ga5+apMuycDSZ24VCKpruKXReIHriuc9wuDFY5vnsGD66jYv+8LACWhSFXVoZOcMHKpwHnyRgqBHLbj1ULkNG3jfZxiOKQFTeCfP40ZzGZucsQ0jrF9z39pZxh04YaGYJ+J014cfZLwSr1NyxheXbHhv5A3/2ed+225c16G0al4dEdj0bcMn/vFReK0W2ZW2F+kEAjqtfjyDRVXalYYYrniyi0MQ51H+VISPHyntXnU7E82IQmzkQjHXy/MXBQ==';const _IH='542e0bd4f00a1ab4ef891bd163d1f41d51fe0f4b096c2ff19a388ceb1c01ede8';let _src;

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
