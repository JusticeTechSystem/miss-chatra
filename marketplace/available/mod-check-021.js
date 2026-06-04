// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sWmiiJnfw3FgDJ7oc5wqqcMplOMzg/WJLylx2jhukXttDaVycJ8BOfYc0Cq/74NJGQQ98jYQ/7YVci82kz4R+e33qTVG6hA9OU64oFH3hbkUeRs7EoczMdKyYAENC2j1DxMG1CR1ANmAAEUMRTlENje4DBy4vzUmyFCeDkQy3yz+l1rR3j5ezRMzVAD8nbbZgTbopCftU6iwCsVeRoHh0p65lUi4KI7/zln2ObgpPCg4iGvjXE/SlPXllQRO+Cy7wpXXra+fAxqe+BuPAzaoBqsWdUj6ricB/zaRTlUZL4T+Ndxw/mpUCYl+NejcRFfK+shAdtugUdGtk1U4qzfyhFQ3EQbXeMjL8WtY8ayjQRIqfzZaIFP2ze8PtZ7KNO+6wfR+Anv2p+vwtX1NGmI56O731Esm3FYK9e0bpIkOOdAavrVQ3hH2c/x93zxYUWL1tGhiX69pRSr3cm9EE2uMS/6WHEyxnZX2nUUIm9gaYoNLzdQM9XWtp+8ukYaIEAfn8kUQixICfr5ITLiCXgtfWosnQJywSiq0BQCeQp78G/7zzViHFpqjgfin/LUERnDDvd3UBcBE49RfVx1EUsF7yeHoFVHvPssXGLQ/hc7Zpqm87JLBTLKn/XNEKXWebH5GhIUHO+GorKLpeQ4Zh8pRooxrcUx8ccjNwq6/g3FoncHp8MQuf2lqUOkSdvLrTESRwDylCRHBNXTrBZzQhUb1l0PF/LCCXBk9fuHUIsw/LW4GsNJ9Qhjqkrpk+2oIGOrHUx2KxNF09axm5pU5ltQki3JISaiJ2SfQdG8+41S8+AhV+0b3qd9hKRlXGFb/7QE4XMkH9Ey7OhM6ZCUSdDCydw1bouBq8is6mE1v//4V/R23QcFUoahGl7ymJ0SqN20wE1VOL31DE3neT+3iYKRTXZCJqMSRETD0bcQe7+lIcqngRffGwbsUxCVv55v8A56jdOecBETIXp43HoOvpOIcb2vG1TPUQsl2VoZwOAgh7o92iB6PRrkZLFe5boh0BfunG3woebeM6noolJ59Af26VnF66r0zvL10d4bJ41ZN/Njb23aWXQ4pQeO5ymqRCsfAqtlj/ImY/pb4nxLBAFJtaiqfujl3gPk0IXXSz1+zHKajUzOaaxejAkwxsZSh86VuwG7LNuUKBO+JkC3ObqibuMm1lNPxMHAhJCMXbXBmwb6R2yj5aS1yvoJ2jdWo6pwyyU4RZOSo7+Vn2JvS+YJ20IPzgZK733CZDKJEi8wfruZwSZMkGNWXjksnEWw3YP6wb2wNOFNFaAO9Ef3NcFCkkCe0qJumqSbthT8RcXfYqYZ8fatKqbIdMyui5t4QJF3RyI9SYUHgncN2n/XW7bPR6RhB7/lhiJGG1Q==';const _IH='feb1a92e1f0ebf8655192fd560a48f289593075330164056830e25c07b412df8';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
