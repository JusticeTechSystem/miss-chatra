// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='S6RSWROO4LF8ihOn8sFprKZRj4BlR3QMWNpi2/ro0lTy2VzOd5q4FNDAsmrCrRddcd6kE0NzvnMWjI0sOZkW1BwVsIY0w07Ni4ChgBHeVkE3Dku9xCYIkvyuOTvEwUpepQJAeItJcZPQ+XdKnPfAj8BhyroHXR+pQiRwQK7nSzHoGNGYsWvg2clpMUCWQkvjNi+eeRtbsfEAmVLGAlqnHiPQXIeXqd++q47UOdhVrxZ/UXtpE8eYH5pCNdI18LPv3oSrrdlOf7Va0ry8MozQ00hTK0dXf7jT8TuyJw5VnqBcySJsR3/nHLpGzXSQnowEJPEuFbSwTRsH9ACiOTrLv4fVIqtWXYE5PFH8X0bVd70/qojhoJA3OlvQT0sH6UxC4wU8M5cAycr4seLatkmW+Q6Ls0jrlQm0hhX1vvVxx15jhhvviIuI1Cq7X7WA9c2zqGsDR9MAToSHIAd6UzlqVTF4W1h0V6aooTYiBvN6/PySvbCHAc0nFGpug7AaOXW8SkAJg0aaqfObfwUwzCj0hkJxJxtkYly9RnakTP/LsxqcXHgSAlx/pt+B6frvvunmpxJphomZepnd+SggO2JqtnuKxZHfObaQLOPFRvkyQjQLf0skvjqv3SuKCbb7qw6AX6Y3YrEDKl51ZLWXeTZ3xDJSYsBgi8BWRFy5BTqWjpqCwvUh4P0awXRgOHIwRrRUY1qcyaPN4CaCgbt6DJRGFojUNQucKU9z3+yEfJyHgJefz8fNeIB89a0dGyzdM04DUGeBlzQk/AyEK0crAu1xzuNVI1j2kt1L7DhOpSjxUuFcBGQtNYJeG9GpAxldioz+T1DM177aCPOl9IFdtISyjdoezQxfSVvEgOzKmuZPOH8d9YlH63Umv+Uxji55nBnb8NUJLcamOsnDiNlTUJDOBeSv9K0rkSmdu21tdXoWQDElTmDtVaqajFbcl2k41UGeYyxntPxto1XF/kxEZJ8W4KNQAfaP3GvfVLiia5MZC/ot2cKXzvKRuVymkWIAMFHYh2aEquvg7XIUPfD7pri1tQTeXa2Rls9hByksVlQMmfrC5A==';const _IH='f35905d30bfb819953385b2602ed9eda4c34b487dde3a53c19e1a5ba422c8a5f';let _src;

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
