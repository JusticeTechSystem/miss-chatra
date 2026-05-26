// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9jrvm0GAsrhDBUoeRd5VtSFNkVTRAVqtLBc8J+zJK2h5C6GEIS9k+wrEkPTfSJO1THSiiyYt/gSwcOlroFqNnK5LOxZWokiSjGbZnjCJ9QdgWAHrRwyUUvLL5tjtISmtFSC7RTU5HHVnyW1UrarFes8i3M0E3AFHapearRfOMQxVdWr20x3/vNalDptqCIg6fMf6nt9jYHUNEJl097vZ1LVM04/Yza8T/t/cWJqIXcv7b7ydQ6Ghcil/SZz2v4s2TyQbqaSnauHiyTmAduXsEhxmWFUBlk7C5j+H26JG7jz/DOH0AGtuAksZu0P+1RWbo2RZ0O1HoVBX5DDitUiZKr9Uw6eUyNgnEAjKCfjNQRWn8Pb0cjACNJf2U9Pro3F2lDS5BqINZUyl7JZ9oqAgBMf95jmWPHs7SXDbQwH3yeZhLhTg93CHy8UPq87SITdogNkzKmFgHVeJ0ljvfGD4yfvoTFV1m+kCN/2rXGOThoDn+30HGdWUm/GIrKcTN6maWcT2ZYIggLDm3x9h/i3dh+wL9Bfjg5zXSsVqGZ9Euc8pOfwf/R0WcJ/p1av+Yypf6/CkHdS4xyGmJs5sxWW60AwVEmWWY4eIVWLFNH+zs9ayFAaceNj8Ez/g21AzwwqJmYkQJg47B3C+0auijDs703L89ns449PQZAvtkPr2vjZCEF3LTwGyiPtSOTFzKVnyvDdg1DIpeVl6Rw9OjdlqqTgLn1JCrwpWENGq9HQ=';const _IH='a33e3c81bddb0d411cc4903b9949df83d6ef8d89fb59d02451537b5b08a832b1';let _src;

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
