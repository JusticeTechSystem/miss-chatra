// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kqJFbAaXOElvzztxhCFSZ7+vvbI0t5WApQXEBwNiJ4WfcR3KKBGi/2G3sL1pBOL5weR1fCpxgI0DSKFIxbJ5yfzJbaJtFbmL1mTwaeNmAoKof5Z2png7WuxOfB5G+rLinBnFo5VsdUmZdMgGAuT0k1GEiJD7GJIT5aEYavbuUkXf1neZcE608iD/cg72iT35njZjKg50lcdP9gOMFlHYH95FVe+WVNf3w4h+3sNWV3C1wWbvY40U3hsVWyMAwjcVqQJ4dQ7m6Rs6S2cAslBUuisU6xs6aQf12Q2HWUiXzWM5/cRcYn1H4ZJaiidDqX9hs8MJEn43F7u+Fi7mLXXcwwBx7QlPIbBo+00dWFIu100Bobk4FSewnGMOB3YxKsCatQEaHYQNnbILRoml6zxGbaVd6UG8jUthVRwvggsV000En5fc71kfJCUN0MAohyrHBmaYuyPcIb0qObM7YjgwD3BmCmgjqZuKz0g++mqboJd/HBAbkq5xSMtq8L5i925ZKITfLKvALHgIdsC3djNBBuP9HSfA96tc1u5pIj40kKPnjyyeaSsGtzc9gZC5bj3TzaJbI2QYVwTMpg0pl16y0BDxfcvjthpF8U2jdBLKQ8ebWUAOMEQyW8ab/kNpiK7DOQlq3LXvADcuAnUKpImwWmMHCD2s59MTMAJg1hz7zisXfg6qiExSYC7A+E5zecLjv6IAmE70GzS1c0a2nGLM2EsrNqWqd8OWqOc20ddIr7jP6hK+sp6CurLI6U76I4VGgLg6As/Nlv0m7bNkcqcYJ/IkPHIo63VO+FXIhqxv3MP+9pb3RTIra3TZYeiwmMPiUFfYhynFwkmGUcUhUeNJ6xvkDQu0PyrdnSe4ZwawssOKiGGHuWyRuuvP8TwbN5IbGPhjwwHd5DJ2xjokSEjScrEGF13kq2Fj53C70IwkjSk/8bATt+187fO54ZwgczFLM10ROjOZBlhbQDe7M9K0palnW8+rc3wXnPjBGTlQ+SBAPUUFCrczqE0zk/kIf6BHzPY37cEfRKpR+u2QufuQyYwh13QtPL0ZE1vhse2BXKuO0hBGQPASdMSR37hRtzn5uMna4UXGSA8xwHKw9JSI5PmbjqfXyfIoexa8MJ5FbtQ8IBQHETPnBdYWblArRbaTVTSBa+Z5pxUxciDRkQz29UQHXbLbOxKrbvTyKWo3mwMOyDAy3uaakuWy7askZQIJ459L4tc=';const _IH='bd7b99216a3273082b1d4f9859ac122294c9de57f476590aa3e3f591a1e001f3';let _src;

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
