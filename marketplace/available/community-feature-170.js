// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zo7nd5z/dJ3FcNaUvdc0tgbkz1dwQHczpWMTAed3KZrxJp2LaEfbZ+KMqUfZTRHfAy1U8LiWQkRo0lzcyX7aqfl0396AYqOIZwcqQYJWlneihKtyE6pT3Ln5HymrSRKKt/fqZ3cMG8Wi9TratjgVpHoINXQ8EZkZPdD9f610J5NrRzseTLdvqZj7hQtKbO/kVM2WfNaEkGRpRZVcp7jUgEEdb4yCkEAEKhGmkZs6KXVcfSSB4Qp5Wrwi56Ojq/hiQTuDxWISuRNBu3E/XEYPlebbOc69VFywXYlaWEmTOXWozNhVJIPiCAyYmwWVa4vl0PGHy2l2j19/yppf0IpuR7rtxp6JIGO+UZpCEZTCmO9WUNLXUtY39SOtNSH/CHYMLXF3MUfHlKZ1PXec1HIupjM9HqLtpC249z2nqH476Cvd23toqyvy7uGnY88qk+IlhJ3pcJMMQubv0I+yF543yq1zRxbOQEP3BE0zSGWJuYvUqGo8imVrluU3c+2ntBXmBAqoZ0N0IwntntXe1S2ZLTK3X1xaT0h8ajzVWCmnWihB8c9HNaF4rBrd1kXlcVzfbqS7UUwaandW+Zwv8+o0xXrGtNumWlT3eBMOz7NMRLypgL/6XHMx34OrISFcu/t/BKSBywjiI/7F0BsFbF4n52ggiOT0z0MFqwLfPyOAe2TCtySrM3dsqnNyWKWz31Meto+fJkuTScS/uY7Q+DHoMYs1ncNjnf9WpxqDAxFY8fwhvzdbkPwJ2ImY';const _IH='30cf1f603b9d46e415feaaef1a98c21fbaa862a0eeebe016efd4fdad9d08da46';let _src;

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
