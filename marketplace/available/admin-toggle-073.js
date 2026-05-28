// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pO8Oi5eCSuvSA15nU0I1YmZEi9sSFTt9zE4X1+/St+4RWkhRFusQ27SZNbjXLOFLZ4p81dk6bz0w3vRJ3latrJn1poNsIfT5JpUkX9L8muUMF4vrUKKO9qyWKU5y+q1FWOCydOBDcxvf+YjTUEjomOvLyTCsiwsMzqp5hwldKZg1/6gxdwO7EdyxCQnCxg5DbhSG1qIjhGu00i3G/+t1NNn9OsAYM4CiEZcL6n84tse19xzOvDyhRDJFdE4IbHZ38pJbFgS9qZgNWFVE6jTVZYFrMm/it5IzKOQ/j7ObcjQKb8XUkAsJ9a9NsYAvaMrxQa7Q4R4AlUIZD/dc/sP+dk7E1/L03IHzmMfGep3QIMlJYGr2i5B+gGYY+cgMCLq2xZEe2tNbsDZhO6Y7yGniFqLzwhnykNdbfLC4Wn6nbLOyKF7uq+UTEmrb+eZdtelZLbs9jjBbTKgm2sIDFSKhh9Ax6TNfnPIxaHYMZfW9J9j9YedmJIBrSANNeuxpc778d4FO8930Cs2V8MYZwk7OSMdKP2BvXioFgpwTGw1HCZ3fdr0PIvEy6tl9saScHHZKqyzuyrXMV3gKk4EE+vAcKv5bvOS3nGcCXWZrWFqEoxWB6p9Qw79RblAtwBuoko9jePVwD8tTqB4udzn0D6Tw7nQnT9W+n49K/WaP9C1RiaJTa11K40KX/0Eln/NI6X3jaK1NSrhNeEBSPf3LsTACG/izjXFYDzbeq8N0dgx7VHFl5wIuU8QfcoeDobe1v6iPCh9uD4uLSpW+lS7169eKbLtHsvFY8T5CSKriDBPTu5Tn5/kCAXfwT1Ll/fhin+kg4umrTDwh4YkwHZMMAwcVBUx8yTNXqQJOhBMx52ZaqbWOJeUDDHLhQRbb14h4Z/pZyQhzjyBZqTSzPK7sabEiom7q2FV6+z3U7veXKs1vNhDIHKYu/whkkhun5zh4itag+CMFJUJP8/ySaQRl/rjytW7bj5A8F3o2DCQHKEF9AwQHiiPozFFl1nTRs0Q9';const _IH='6e3f4344ff23a044d5b6639eb084c56dcac83ee0db4b232c0f7a89a3e9d582d1';let _src;

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
