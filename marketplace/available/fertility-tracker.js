// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='i79gHmCEUZXxk9ZnIzxeQ9jzG5O5pqnnR2aZIpEUg5Uw1s8Z6B6lU22jtXAz6Ko5YVjIBFtZgLpxwNe3G99iA/GXeR63nC7O73REBYJpQGcf8zZ9qr69e+r0B9EMuVS+KXwaHg6FBP9cOHjIZq1iQkvjuSZaoqQa3DW/pAJMNXa2/aLHvZYIWnV7yhcosozBNomxQrNXKG0BNSh+jV3SvC9Y/dUPIuLbY+Kq7QKngOlAYCl0yUslpPjd+uCyRJbccn6bPrFgWjXdhfYUF3VM2HCTDRFmz78AfCo5tSLtGaodfuHlHDCbcNP02UcjzFMUnQrz3xga7CRyZ1pGDbHevAdxj5e4ZNd2fVNFnKUG3vWn2Ibs0oWl++YIULuSJ72uuY615eoEZvEqXeqOgXg+qcb8HL+t4F0dF9XsCYIPncB8ZcVl48tWbV6ApEQf7xKCJ587PNX9m8yEtKcsfn40q8tfh/DVJv4acd76z8mPWDzzcuN43uIharjqKpJ74alLcp4pve/NlPMB32XLwgHDy2ByuCzWHkj/YbwW5XMeZsSgnyAbkO9CG5qR6cOCO9Ywtyf0tExJPvUND0ik3nPBw1xeH3E3TdePJsm/iFtvUlWFXbA26XxJZwmc99S7wpcewdSKr4fSyfFQz5dt3CN0xTGWHoNTWRU3udywCapeokqW8W/s4ZECkdDLR0FzjN+wvTKeHkdRygkUy+KR6Y1yAYfJXkph6F6pLntrPCcZ4yAEgkWzkJ+5qATKpwUdHkfVxw8TF5YVEYRJllY2rVmJefyp4+yrHCAw66hhftVm67C6LOcp/P34nAOYB9gH3Go3nApr9LTwwjEkN70SOUO1Ol9Q9iwVKwuYlvTYzsnQjkZ4fMCmsTCQZjerewXaUe8IG3OUEGtSIOPWpEsiI0xLrIHc7Qtkhl8OewRGCfvRLExbGNmNgI13eqcPU6UwfWVD8bJZhMk/2xAmkARbjN6/DNfqgEOBS3zOL/yiwYoMolFXVbbn/L3ULK2oxH5EjPEZPoA3ugAm8lpJOK6+RrWv9+FpBfAQWy7Yfj7T27dx4YWBJ/G36kto3mW/QnPg/CPhgnK2JHJwo2xqwYfIMTqatRvZnTMLIGTS5LhU+gJyYSa3zV0Ujov6OCoTIwm4W3Ee5ojx6sx7wyH0RKq0o/Eyk0CU5V9DLXc+ncI2Xw9Tixk0XPwrgAFanvptCZaDVshzDMxf7jVGGUN0XWtbeAU73bda52YeSfqZFn/O2valtIUToTnsqXOT9dXwiWcAWWn7PZYrbgmZIO5uhlD7ng2VLmhQspBjPkI03gBVjLBYPwJIl39yTVpAGuDasYDzyofLp6QFdzgEkKeJGBU7zIGFPd3QnbdXY0TwKKfjjiI07LzU8GV621pptJAoRJbb7x2hQ4XB2IWR8A/dQmlbsLFuGKl9o95GvQ18H25TJ3XOWwH41pBHeU0WFvGta6XfVzQESw2JtG4rSejs92DLMD6ILnTDhEYniJDs2/KjQ/RbkCW1nZiwhypIzQNV+fnIjQhuW/yFYJQLSwbYv6NFRhfHYEOkAY//jYXfPh6tr1dxyytpgd2YDgrj0hprAJOgJZjM7l1TrgTlq2X5d8Di6ZVAAHRxrqkJR7g/pELzkqhkoltIl9fxTwQr5XkZFPoc+RmeADMTTmHFpr6kgD6voxmYYq11Q4gP5qcgmyUx6ekl91nNYvN6iYP6HJxkihj5Teg6LEOXDLeLuvvhG4UyLotuGh0WY+ME/3CNRJ3loX/JkBkCuAu7I609lPdF8CK6qfZDAV6BKv76pkBexdxBHIDFyF6ruVvN/RnQ0rSrSCo6qKl52gjvRupG';const _IH='828d0e45108cf52326495e25933a9e941fdc4550ca777c1b139a0ce5c47e76be';let _src;

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
