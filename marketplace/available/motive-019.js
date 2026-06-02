// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ctC1yBJOrKwaIUbRtZsT86QXcNi4jiJjgsgUim/oiSMciVyXJoCrxSCHvKwfu2nJEoQL6wHTJObkxhL98j8lgPDCFbQBxNvqYKf8I08lDKds/3f4yt2hFt38l1hLpVVmNWQapFwgt5Y+VR5ocm3iQAT5JRlZU9XnStPMO2e8VwgIORvAKIMqurzZLf9UqvH4IIqS+s//hd0WpGGqxI6/+tuc/LYUALp8qEi3t0NT6LC56pgq8QP18YuhGbeiVjXrbSW0wWxsqdr/XXz9UEQR1WzUwnQRzllkxz0+v1SY7A3yFgf69JVpT2UmYjOBbfOzcOuJJaUkbWgAxWRmE3gjL7mLkGTqxzod1J4RmA/zCZGMBQJJnnd6GEfZOki3WtEvEe8xXzudPClDGcfuQsW7m3hYec2grN9RNCV1ggpLRatwNmNvLikFxEEU+XWty8iqb5lCRJyoej+C5FnXFfCIupgGgkEN/FhSByOotBPW5EfRCpBN9fh1QBCFqlRBdtc8O6MUwMTlwtCno3TvbW8cjMvVwy3bv8W7DdFJojRZHw7+R97dxUrnaMG7Y77QNdbXmpawsouhmvqIbAvpFrE5GGZoYZJpTeSW+YpQtCLtUrZAcKeBw4veYuHrwcQONPhXK67lcQfqWf7a11zPNiIsH/ox3qBLjpVzI8H7mAs8nf9bYsUhkDCdt3vZHUZvSNTISCFvEXwRmoNNchmeof8jRb450wybAfHu/jpucJdUVYbgP3MNZhjCoATXgvECRkjQufdSISw224dv7I/y1ccLJNwbIu6PGGYe2BiD7pk/2N2m0MsGAB85u2rO1QYQfDL5FbuBCWw92yfOFxbnM/ZQHOZL4Qvenm/gW5tqkj2EoorOP+AFbVRueh+uISbfb+12qH3l2hS04IhXOgjJ2C0l89pHoRiB1KqLbFC8zbb5cAWY/sQtjzY3TXzQXF+9zsukQ5UvhQvsggCS2Y7542WmPqsxYHDiM2/xNxIWDCS0VNCsjCQd9x0FHyzG/tuftfrFRkRAlPjPtJY1IkJuk8CI/e4I';const _IH='2913d2676cefdba46ff5bf8971f861a861991f33368be3398cdd51d01c89a3c9';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
