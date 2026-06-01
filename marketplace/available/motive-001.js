// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:45 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2Sn2kaRQkst2Ktvt8ON9fc71SJa+4XVlm6MFYs2y02R9Toa1iqZHroteXMMMU0b0/MgSviM+Ito6U59dy15aJE4/3RdRrvcEQzFIv2+eYhKsI6NdrsNBJrI4NLWjaV2uGHwnkDJ7eBSBJHcIsj+GDRqF6/gB6DRS+BOAtDfTXCdNdkKfW2n1WQYpdrvQlHcl8Latr/8hZaanKcvFwo+dyJw5GA4/Ru70SQTkLNY1buTPcvaOdsCjCXlh/B+ftcIzg/FzIWPXkOgKhO6t61wxeI46ZooHeesPsf0cNhmLxugQzWJx3JZxUDRjXFbJZR3e3hPtfdm/ypUmakAZlR5UN/m4Dfe5ThvtT4E3g0hTQcWMUxZ7ixcVStzFBlFUXuQyequiHqFTBiJaHPCTHFtv7jcLFGYvRXYs5XYqvtFARVFxOH4cNg49m3YsdhXakINZBudGyZ7RB3pWflDnjA4q/3EKH8ZlvTSgAzpN28lPqGPP/2O8k0oEDYN1riTrZluyrTyKVqWZ1DM0ndiJj93INlDGDPjM0EGwg5bsYT3wea+AdBiWskNpsSFP7i5NCDkoLZDA5OQOny5WAM2dZNfmrJbgsQUxz51d10HC0q/o9SD6dp/dsH/LDssutEHZyFOOPInN7IFoySVz7FOfx3Ez8VUXXyGMnLoUvdJ3fuKqFeR8dSZzZqjgYdFy5QRb5YMDJ/V30LRUx0bkbOwHcjbPJRBJN/PuhvZnVrPG/e4JwI6YdjBWZznywNtRii8VxQ6M80xV/TaLXK2OOQI0ZWmHGXEkQdXSHlMN6lEdw4djfU+atHayvbINSUCWYrNDFWIjcFH0y2K7o21GTu9mxkl7k+L2VuKI5dMZfHadIO1Kmm0IXEV4Grq0ysNK98lSrFW38t4g582KMGgmZNrZbyv9ygaRbbjnaT4s+caUMPWgtE/nOZzGLBl1gqBii9kUdUhEgzr/UP9CT3AI08pAfGUJxaaqhg45eNO5gc+8Xfwcz5y2EgkFFNtxiHrwjqKlW32j1J6Kr994Y4/B6NdEx3s';const _IH='21fe9df56818336422007bb49b32ce7c4034f65820ec654965fff7b66b8468a7';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
