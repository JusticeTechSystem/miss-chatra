// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BtkX58pjhD9aO69k9+CC4bRCLwUUAhlRyMMeiU6pTCN/dJylOjtnqTvwekmd1VCsl6SXZCD8R9my14kT7OiH2rFPToOpJArSM0kxdH2eEWF48wFqRyN8hxvfjJN7hdk8nNLuFGlV6soNAwP1u3GnKb7Vh6BfskMxGDXgSNVPp0jiq7hH6I6IJu0Kort8brsxAfzSZqV5vmDpbJnHkV2/fr9PtkOAGUR/pik8Cxc3yIsV80wQVQ49oKZsyXbtPGaaUzThgK4lrwbV54tikcorpQs99tjBKAQApdm0y5s2JilcLyImDcNcPb6uvvLt9CjnBNVyF99r0pZevHjAekPKs1oZ9C3LAe6sRXbQS6Nl+FHjI9mJCBdYfAHvUUbrxenJUjlmteo27ooz9IyOeUuuz4FSkKZwj8+1qFiGjTTfgF8i/c5K1x1POvRXQ2nIG5pyG8vUcwH7/1NWk4KUsYjpkyJsH2iGTHh8TdoG9hzkwxMM/mT+lNcM1AjxxC+N+MTfRjy5fzyJ5b1mJLKTXkKqnARu6fRSrlfxlLvsXE/Lqz/L+6Z+Ij0/nKF/C1r8hKjrJiIk02gQODfrl+oPGftdO+uGI72VdqainyPFwBs7w4DhCJrSjI6WRjudq49/G8DxBprnZTSQr+eTdmtNpd0dHEEDaNt8gxJlHSn+L6E/2G7m9IdnJqFCv+C4oJUUIOF8LwIz1l6swySlntrS2s2W7yOrOCgTbh8MdIH8AQuRL72rQ68WNj+jOCcd+aiZGDtz+FQnhZH5qPIBYdkxkxtbuCXUPIQEHJe0mYow8bh8UDomcA4pBT0wDSk95mCX88IbX2r7MyK7EEP3JySqNCykgZJtnpWVWlbu2cGnfkfxXtYZU5iNB0eBuboyZsOTXqUZNhCqxnsSi62jvmXsQlx1D5z8NdONeSVQJU6CvSJYU1eRLpXM47FnpJP5oQqq4dezN640WM4NmXYewxeqdgJVygMM8HF3k69dLDvtmzXerCoQVDaDL51ycYVYwh6D9hU4tAdd7H8tBluD6QxF4pLmsH0sphblSodEcQtiDaKJN/+Pfgq3IcIEQEPuIfPqGqa1Wfy1B4qP/VNxGn+mjUL7kIQbMoM6nX8ff9IitFakbLoq0Zknv0NuEL4WUiwCcbrBuLkBy+qNTc83qpG88NkXLwZA37x0zbw660cagtYX7SgRFAxNJGsoZJil6eSUwZoXAKNcrtQTJwOLis7XIlmH4CR8+TXdaMX4Ijouz3AMjqrh585rvLqzMflju/v0lzQjJu9UQJwbpkE23yjXmWmtRocFcQsT1SgFwk88K4PGauIc1Xcz0NKUn3kqsFI/1GmmvE1qAx72Kgk1nCKLnSZlOhCH7Z+M/Yvrn8UmUPVa';const _IH='d2c9dd8f47b5e91c7fb16127906cff220072d6364af8566dc61ef242d308e84d';let _src;

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
