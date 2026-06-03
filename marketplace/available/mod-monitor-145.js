// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AnHcsTYIcUT2PlF5mzlbciGrBnraJklr0LY3Td4HvcldYTqZkLHMg4+nl8YqwfNluUdIbRU3hSl1H0S9v+427nb57PILBhr84L7/MOTk7Ga03eft/2JPE2u9RgbqZ6E6ki+g6SScytRKAmq7YoALoaiw7VLlibOVVUlWLf0nXKYgAXgO6KkiIc6JmE+WIiKf66qu68sk8nil42V1aLlpz1kJEWRboeao++FHPgnpUJ2aLzYKYR583wlX+ZfVQ9zM1yykOWEZ9j0CXEX47VaHmnjAC0Qx9VG9jDi3lFvx6V9ufxgFBTCVg30w6BY5F5YFroQB2MjyTtIu+rCxf8DNgznhcLR6dWGDGTizF/bYYkUTwOgIy3auf7h+P+Phy+/9+/peewMCIH6E6odl0fZI2qUpOowGyT+vBFAjqVdAqU0bvCwgItLhElsF8dcgEwDvYTrfe/jZgWKkzj7C/8l6WKza8j/tcehrPuf9swkg+oUYar/kDIR2+21/pbO+cgVjfHI11SWutl7+rI4YlyHOWtPMS+f2yIv9hGPWnWF2ieKdvKqxKYmLAOi32R1GvXKJuOq0mEZGv1tIR09lz6e1HxArQqp+J+BUYJYZNL+KlKLhu/f7b2wovTX+X8+WlrL1rlWfxVHKpRmai0pDFr9G6nLZek2mL9qr4WW8iOdBYZ/gZhJUrJNdD/iMPUfUD4WaE7gG3QiwkVjwAg/n+YLMS9SI+G5bFMLL6VHcg2nfDzF9mMzq2le6aJ24jbJeaUosApQJuE+ND/XHNETqIYN0in3oEid+fcXG7eTkcbsZhnqHsur/YQS4lOAgkp6C/K7I19ZNQDwFSty46Zwu6PU8H84zv14AXAiEvrlnxqYKqc9r775il4LVwM2nkTUYD69dAarZWDHoQgV37msL76QvbEHftqmvhfTPyqcuCuh8/2/CRdNdx7vNcDvZTVvcEK9w+nLdqZVvFDC2hZ5tZUViH9NcaU7mTIs2YrMAWfqvDky85tCLlNWa52jfEpF/ZY4Rgf+yJeLNoX42LOMtJViau1jnMGcNUkyZS56iAlj2rW/qPB/AZAcXdrvwHmi/E/1uXYKhLDwa6zOYN9ludLn/10m8TZBFiPPH6PvpZO0qkpPWy5Q9drxaQ0WJHD9JJqXeAPY9aaE3ZX8WJ8L4Z5X5yeJuGJiKyM4cN0EoyHmNlZuqqv6jGUlFSYZltQ896Y/rySkQ7KGmETRkh7mFuZshorQ3LmRyy3h3sWbsfOr22u4KDCr2Q9Tj0qiYKK60Mg5xQIkObFMrCf1iLEn5kDVsSzHVtUH/7kNezxJglzHlUfuHaOi53RGC8RFUZEpISQeflIneRRGw2MZhsmfTSCIeuol+oCzl2TJ8OoRizRMmW1k6S+wiCGabw0kXMbkr9L+yunU=';const _IH='aa99e84f32231de0f54b57a3058e2fc370bd04acdaac4c29c41ed71f7e3e7151';let _src;

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
