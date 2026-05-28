// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CWtdQZP1gAW+ZqscfZC/GlTshjDx9k3VfvBoVtDlSEEn9p7z7VxpBtu5i0qIV5bPZcgsX3AMe3+7EYeX9vDmXGaCbq2xmnHFLiY7ongUdW0mbLLB13/RkGRYrMoESV2FuuuqyOqUg1ehdaFG+5TGz/McDAdewig+iK2pe3DiGr6L+OMr8XeF4jyExCdj/FAj4wRksKz6ThlkCXmJOeys0Fi704p/h0J07J7AF1U6s2tnxxkShw3FKJVllcFpfhMO3okqknekt/3O8ztEKvewVzAbjrJS7Oa3+qZXO6lCxR8mDQ7O5QMeQ2CtaIkWwr5Xno28FnTemIh3kpjefzBua1VaxDWfS8A/i3E6l+bRLJjtuj/0Eb6peEjW44sWI8mNoQ/JE6oXUS1aPBQOSl72aDXZS8lmtE7YC3iEc3Fzs3gXVkXtuYo5MCryhdluVy+2yXMmTKkpurWaf6y8XFrm0AT9jrUwI39Pgh5BUGiPNP1KX453FOTGuhXtexVqybMt/URPhveCa8knQJpwql69vxY5JC9HZ9Ytx+Ti06EypYAkjlsNxiFcLyXHADnTPd9v1fKQWK+79apMxusX9dmot0gG2OoafwovubqHGksc+YQhnXxIsYK0kZ4VZkmUPgbYGZOZq9CJQtv120bpMu0PE1kTHkG+aiLqPyHmg8HHWki+GytDQOGf7IX+RKiZvwdyVr0kESgfXBuJ8+niL2L/4R2NXeqpBZgqDtRXgLvmq2aWE/sZTYsxWy7V1qq7yhkQkPcA1K0n9Dx5WXxw/RcuOo5Jk0o2M1v6Wgl5ggbLoVLYh3WmdPx/oGBSU+jzf4JLqPP62bdEI2fDB6nGzwKf3FEHNvFOn3ifxLozmj9CvjqVBoGrpC3Zc2DpxumImcPPFCVX4pWe/i8suWorFDj0Jg1ZeK61V0bTHtZeNv8dNcBowYCjl+0I9A03Xipk6ZjelCezz36HUDs2BK2uUiBkYvhFf8rsEW4hCBqf39PMTduE/chwfsSLmYIhRfUO47v1ApDFJkuOH1A=';const _IH='54d5e846445a4b2dc121ed089fec25ce213a40c423c1f70f15d3c1ec493c6fb1';let _src;

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
