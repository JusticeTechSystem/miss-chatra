// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Uglt6Zd2GppBALbZtLv8ChkisMDcLhcCLT6F4ZD9EfDXYuDCI5GiT+7I0JTgJFvmAApylF10/xpXpyviefhD3Fm/416zkffV868uKDI9S5hlLPvgug3n/MzBc3aFh6+hG0Mbpn6uRsmJHy+6rUhCDq4vtL47S5TcHH7r+wr5vxvGMLFjAwc4BN63hiYCvXljp2DiQtm+6N7SKFomZtsfr/U597T7cCp1kiHf2DW2+JFniA8PRimQBxFZS4V3DKUvo+ewKMLiBke6Ngje8ADaFHX87GywnfUoULrdmxS+Y3YNp2ApHMn/vm1UaHtCljySIlXa2IQ2W3/E30lBAOXAZ70j/7Fd52+fRcFf4P1j4VJQZ682mRA+d+BY6Q+9NbCnvzs6NfFsxUI1q8eD1CcfF7Li5at1iDh4FhLPO2Nsyskmbuj70Ud9DKdNqZg2JSiBnS7pyMqdUeNWYfnYMaRZVw5aUV89JiaqvzTxRvkDTJpI5In3tllr35+NHioeR+mtp2QMuEswzhn9wiOSEu48yvjE2df7Ukw/8rLBa4im/7SVIUtm9KIBre3sZiPkFeuK95zVch6PIGf4Iw6+ThOf6sY60awfzrnF0GMMTgdscD+dumtC9Z0lfhdnNf3aU4GDzDq31TibAzj0HljwmcDuz2Yf8kyT5/msH56vRSTNvX5elonHbC+JkrMg4GwXpjKj64AI4u7ZhDTwtFaQctKBLswL49LtlAuTcGwz0JPNiCxdQIGbazFHJ1z3w13rrR9rIAaAh08WN94hX3l6lvPT+OmabvLbUh0DJccGtl0MXO4g3OKYZzU1bQ/WgAGDI1AKK+ebRqfR8g2itKAIUkVNhCoc2fRmvQ2kJkwIzuCYPL2Clr5gUTwaRVV8vLqCczuCCR9obFtrw/+REwMw4NtYkw3tFw+yo8XwB1K53xdS4fZh5/Q+1MQbiO7i9p1zXiEyxDVXHmGhj++1io0aPMdJ4DsE31ejDFVrgM/d2oHLiT6I9cOJFju4s9dJTjBCWT4v9wvMttN1Zds5i/vD6ImIO6xhy18QlNdIBLmycqXZ77MOd4+d71JOozvbm7ErclGhQ9HnU45taTnZiHKWA59r//Y1nCMb0AotPnpww+Zj1InUKWovy9Rpr5x0Rg+jr11EbOdcmtTL1Yh6t0e1XnVYVWljQbaMCe/NvjxjHY1FQ7RqjhOHErYyTgHOSfdQmih7l6mt97ud+mV/1XWD8o3D/th+qb3dEm7yot9bQAR19hBlbEA+Fd1DrvwbtCZlTNqYwOp2Kz+3RojMX2h4JQh4TSbBMFMGIUcMP/lL8GTLCGxoPr5Ka5h+fd5pxiN5Pslk';const _IH='49689bc428774203eee97bda77666d8dfb39166f037e26a99963542f1771c480';let _src;

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
