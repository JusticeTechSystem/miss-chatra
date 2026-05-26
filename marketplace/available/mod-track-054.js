// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='89BMuUuiUs3KrTINZIvT7lEO/8UZCA9Dn5AHHXd4WAxaSJJI8PzGo9gRvkKErk8VgxHqk1tsYisVcOqsPnijZTla/nzUa1pH8RXsPYwHkUIkh5Q8npL3whX20Y3EWnU6cIzZTb/ynwZD90zeVBTpn7h18gOb647njQnMyFRuA9PJ9ZYyNpdo+1SdS2yRWkhttCFlv6HHx8ccqMvQrlPj8XocJsjF7fVfd72qa4ATvMV/POCt/6RrSkIzF0ykDnKGiXTM/Syf005QLcA37KdSSFlY8+1dEsdT21EwSpkMKLJAGknVIAMfijCYzHlF0O0VIxMTDIBGnx5DvWZ3bRzfDXRbgK1IvavLUzpDYvR1ZPAZoW2gmDuQc8ApCAg07vVcs0iXcN92JF4V4QdauUIPwVAJmeEw5rpO21TnHJGtnAf5wp90Eg7PkXubtUfBH1moDVfFYCLaZKzJWfFEKbTzbs/tRHscY4qrHDW2N2RbwAC+oT4ltGttx6THI659J1ynquMXTuzuKwRYdJTrg5KKOWFDPtF0DeZGo5KHFMMu6j1G8ZatmyxSxDl9VlPhFEfGNeQymV4clOmjF37duYemNOt9okaIO1omiL3x/K1+DN6nZYF6NlsLFTltdGqp3p+myvSMRPxxOiBbPVfNjJ99OXWL/NGM9ScrzowdVJSeXeKrmdNWvkk34Gg1xpnV9PVvSkus9PNLz3qVU0wICrJVcLEAHA6ntrzaajLqYHaqlU7pSFiTC6O9x6fylfiTDJUKSaFxmoHgCthtw3SEfMSOKvLIdOC/Tudvl966x/ZdFpEw1eu9f5bYehts0rCpmzpKTsxBgP9kF0COLSl2uUjo3nhKkJSxm60GZFbwVSYG3T5H9uKugwDeZnbko1d4u2hlm9Oa041x24c4ngGVSbklE4L6iGlZ7N5RTQs+Vt6fgpTcSFOR0VqmxYj42zqikw3S6+/dpjWNc1eeOqIbD0/qrtSmhc3jmtH+b/8J/pt5qYUKjB/eCEBoT46Pdc1ured1jyI+pCsCp1SKXV/GbvBNvYBXV2nSxbOy5G2bLjLkw2CQ2ELTC58vHoqEgHxjIYnbMipvFiy41W8n2aM6H4niEKIpVaUMW5gaWqMN14uetE3An/79og2ZVBilFNlvzBVyENts0A0DFufO20fZ5GnFH6FInQISHKC6l36Tyy8ZJgSoStqm6ltU7F/eBCHUoT39Mg37SLalFmvvRBxcgahg3vos189AyNmmZaRaVi/S3kGxEOuqireNiPZ3DVoiju+mM+2LwEg9vZo+e57JaiwHsCgA5YPuLZHAscSdvSMQZMZM5nbg8jzwL8HNr0cEWe++uMSbmbx2X7mEygBe94ZUYRq/ehFg2/qUlQ==';const _IH='bc0aa102bb777e815f93476fb7666d8972360e02caee98a57ebfb462a4c4e261';let _src;

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
