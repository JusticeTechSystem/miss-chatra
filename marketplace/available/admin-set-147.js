// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6ZHdFPXDpDmAnc1+h78xYF2P9MuSZdQQ+dZbworSYutbotqj5gsC94WjfoHuPnxYxqXdT5uM+DNLRHbv1+1ad4tW7NpFPe34/kVolMu9/rvVwnzwRxfp4y31TByqHxCJ2s2XaOqHLWzvFkFqCp37SLJ46BAdXJ3rjE7Qjaog7avYM2HizKvXd/p4YpWhYzZObm8bH+kGk7aK6js6DNXHC+K6d3XrU+V9FoNkAiSXsvjq38rdWyk5w732T784B9EINlkhqiVYnnSvsfd+hOqRfmZw7gJejioVtbTyvpOIf5jIXzZy5PySflxbWlgRZ9t5b1dzYunBCOy88D+enUaxgsTVSeliQWH7B5xlEIEpzG2mZCFSVaVzj1gJjxc+uw7Sp7MBEAcGh6hUsENgQelO4MUqbU47cqOHTfPFUi67Hj14MjdlLhBapXr0WGsNMrIO7YMKCOk4d5kYWhlP81W63fK812QwQtCim8KcXy6KRQ90OzycD7g0oog8TVpnuZtju0cJEOY4FqEl6mXetJfWoFv7KpIxqTrQQBnZFdca8v+DhXQM5uYNkd5krTmuTPQoDfXKbdz2tqHUb5uDR5VpViZeuqnL+WD2RkwzeIBgMZ5Mv8yIb3m44w6yxNEnbYgMilk6124uglE6qLn62T7+ZWiN42omFpTY3pf5Zm4v+YO+9yuKxs2fMxKggZjjgATY87FrhRCdoVhsPtk9gUUzHZyhVr3Khm+aW7h/ije3NK8vOVIxCWRftY0yy9VGhMKF49PGk8gEVo2LHxvyRmPHYv8UcjBbejLDvk+SLAprkfijcBNVtVCGEIw1LszaqnR6cgtNnOJxi7KQayhsExsduHwNmF3ejVHlIbZvKOptjmswmZYXbLM8iwY7q4MbBeOBPU9oRSIkHvm7rdpHh0VjHaJramp8MCBZMHRB2gcJeiEWDC77E3XfRFLZ53ra2GHnmSUe9jX1WUdAMwn9Qe5EbJqzM7RBst3tsq4u/A==';const _IH='790c723d8f04ddff9d77137ffe86a019f6a964d40f1829d7e74487aa090ff67a';let _src;

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
