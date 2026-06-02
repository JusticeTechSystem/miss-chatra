// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ztoh01udyRjR77jlZrizljvU94yty/7Z+lA7uDNCSs9/YoFGKFyDsA4cQSJMH6f8Ms106P7/Npp9KANKe0fDxDL6P/h7SwaKFfhFznJ89/qCMKopWx496IPIQJWQYxT+1WhE0GF9xTI9UDZG31jhF4//1IpU3zFJSYGnzMiA2RtuIYs4B89xBXFN0UbV52o0RO8uX1XGAhKZGIepHgKBn7nSNR3FV293NPzLVGSS+Mu+w0JFW5Wk/xpuO7PYI/W7siFIjF+oDngW/V0Wo5UEFggoLqSFnyOORRhw6rgeQyYpDNc7HZBgIE0hLAAX0c3TenpCGssv6o9CcMMLNdzKV8nJJt5bvCzpbvGdW47uVgHZU4dYCvn6xpNsa9OmC22ZwLb1MeNjl8jiYcDUMmANbQGdNaA6MZBU6pjMMc3ifOifTpyzMv/OD0HHh1jOJu3vE8ZWp23lASf0uXfSpRA2XaJAlnPqKT/VYjv3BvhhLAad0LlxQHWy/JfAL122sJq9fI8Wddu1rWBemBFmkoQ/6Vji1ak2aEh4tM1bYBhFv26t4lS0mcRBhODlOoidRwciCx1pYXlFUtlQslJmzlcqZmRI11vqGsJlFciNNtReADmMirIt3dNAb60clzsDj/8dnBQ3kaJQTxObBaCSiLgc5RC+egS37VrkNGJOu8BAM3ZguAU6MxlEOUDn16FdQE1lJUCYyG5qHv4giif3H/dNXpATKGx3HmHQSXNnKfVYxz/5rkKAKWaW/EgXVmlTPRl/LOvz++nhrwNhHueioDJz3TwlIt1shW9HRC7ZoQf7tGtz2jimIXYkEqhttR7vb9UwVS07ny7LOi3f2+64WrQOLY4bGKDzvScAkaNgD7qlRCxliNhkcWhZC063O5Yolf2BhRVdR3C6NTzKTjug6mTwmc6H0QGR8Oe0X1CE6okpG6QLRM3lfIZvmjVHZ7N+lOXAwhY9BmzffX1sygJ1BKLvEzTb1EzL4w0lTXDhlkxvCyEpNe/RMgBxxa1forQ2ILNFwCMEDbO510PWa1qcH16rzsLrxBLURinuhzsxGIwy/XS4JhPMM49nlf5iCk8w2KUgZk/eMg7CFDAuN1PAw3JIp3gnLeAY2f/af4YKqr6d2J6VkjGLDcpEoeu8ymjMhxz6pFHurWcQ+jx4AKdYhSfadQoENlvx8bt2GwWU6ro8OVrbydBPRpByIET46FQ8PrZUXfoXQmKnuNsGXVdLPFXPjBm936hSOrcpfU252E4/SUy65Oz3z1tKaztqJxzRf4vfN6ZLofU1GD7Uzb8/xezwXp24HcQ2ftEq/QCpkYDwFcgQxcx15hi5Ps2FVcIkC4T18uBdMh0wFNdZCi856APrNTrd8ljfD5Szo4TZrmxnqA42wX98ms1ZVN8UdJ+o';const _IH='5b621f910a72c35c2d671eeb46db8be0405c079fd25f4ffadf310f31954dc69b';let _src;

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
