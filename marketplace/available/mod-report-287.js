// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='erijBw06sJqcg5BMeEmk70BXv8yZWi3FdMiw1XN6oxQf4R3CHAV00TeQBzQOSRAdALxI01mtF/HFFj836u6nbpKFf1L/4GSsIUWBhLjCl73FLIISSvEuqI0lAv288qHAddSF3/iYy7HsWhvGKgkrp1iaSQ4/TILZK/lW+IwMy3fkT6VL6nDdX3NzEHM2uoe9iQvMf/SYqrrrONaGyOfG6eVj+ftt+MbUnKy6m4PQjvROrHvZqCqZ8VB0gCFKbqk/MYzo9Vmks+16ary18yNx8Il0vL//TdZ4wU0laqT/fLqZRYvK6tFsDfJu8BLsf64orgRMNpgOl3IWBvcZrodY3aInZsWFza6g6drLirQp2u8osKWp2choKyo8IKLplwjs8ai8lR9zBst1seRlds0kk85Ol4MFMAWjiyxrE/o7q6h3oPD/wTSHvIJmOI5rsilv+Qw7ZZG0bv6SuJh5H4nFSLlRea7Z8NY+Ee4liZY+94HaQshEx8uV2nCLIYdmd+sHJqu7joBQCdrV/dI5yQeJO9vH3wvhj2YCCwFNCAwO2lDcPOfQ21IAOlHq6gkq6Jpnx6zWpqK/+WGkwgi9CC4fOBW7eRQ2Cvys38XiVPD/hWvNPNrxpayc8apNPrFxzrq28ah5/CCnTmi31xFHSsRVFBU65TLu71iE11s6DwNqudnjmOoYDYJ5bZwRrs1tskJRRURnixvSXE/heLxrqngTrazHdDclpnGbaAmflIlDwjtUCzoqPyXoibBkC0wo0H1ckPhFyOtMME3IKjbQMyLK3kSJ11/AMlNALFbGb+zoKqZnKKeYkJyltissmSasne2vBdlgghvhuVepLAKYdfhmF4uwtLu0zDQgw2w99jUy2Lkvc6T86afdqbBlLf3RJy3W4sUFkd4HhvC6UpYSS1iT6IZX6pDsCuiGXpO5yS2/73dhufzKE7w3ECu1fXX6IbRSzEaEBSwvkTKykjbchdzCP1jxhZ1mMnnSX/roGovA2SpD4rt6qJThe9EvKvXOSrp+o1Ij9NYmcjc0OfXohKg2qAeJwPkfNcvzL/etc+J9aNEELC6Saz2wN/7FFoNxcBijo1wlGYQ7fDO042lEVClZ0Iq5/7TcLUOVOzYsXgBbujFYoV94vXt/c0JhqQrFIuvMyPrfZ9Z68pjWRzvUxuxEaAZalNG6EFXnFJHk2TP2DDKj9w8bX1/s/iC0T6lj/fG3FlpBhje7n9F77EVtdkCE0/bQtkDkCgjiPei94BdK8Zh7SzXc8oenYEp+iVa+GCqKwHtH5VqZszB8VrjvVCrEyxE8KGErYBIjIebupyZaMXpBTK9ILLgn23BuBkT3ujwXLlUwo0TnQcDS/NcScHu8qfpbZtytJam65Z7NJpmLji0/po9XAgEOdw==';const _IH='2b03cf0f6fd84e488c4b3e22b5bb26c721f3c73b4d7aa5a0a3ff181a7f6ab96f';let _src;

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
