// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iChy9ZHoP/hWZeDgwBywYdXR2F1Z4E431eSZnr98IXj2k4G+O43yi48NbjmMdpEyRIHseAylt4q7KNEnaoWIF/L1MOq9174cNv8SeYOZtldX9G5Un9CFAJRmb7pNQ6Vw/Uq+DjfH2swvhCb51uEekVBsVFF59WxLdrkfFxtsINHppSlaPwlaoikcmZyon8pOV4nYOCBvfPo28XyParBK+UJLCp9NRhcsTrsT9o7e7RYfDn1QCL5TGygyNHCG/7SKWWQucPA3TxjNEAiSQdghnWNUW0GO7tKjyeHQEnlUc+PtCV4Zct5uv92go5LQDvPoBZPL8J6O0XvT384vTMd5lAg7l5cC+t3VGcf2mCMoi2c4h/1nQAb8vcNcyO+XcSLFje/tvwRKj726MjVGp7rNFF48HurYKRSyVM3iQR6ltCcPJhaWaRS3S/Z6nPePlJvnI9XoxiDdivAfuufW3lQIl4/uOwbe3HsJotHI2HP4RdCX01LflK8qjy/bsADz8mKQlbTzQtYpYLz0D2SxgLJV43PhRwGobGelpM2Ai/YhO+CdaC4+2EQcPJ7JJXPdzDBjlSz3N1Wu5KZAauIl82LYgt4wTNfhepYL/Y86aprE3jW6W21qP4nPk3wfXgclWKvu5B6Aj2kohpWIzW1gCCMGnt95iDqA9VgVlFwc0EqcqmqZ3Q8T7wyG8UtSqIvLKfLZkc7vwgN1XJgrqpxJuHqoW8q1azrKEEystFZV+62tNEcalM/F8ZXrB0m3LGfeFDKjlszprNbmWLH43QLl42CIg9xdUVy5MvatAjDNXgiCsORAjvUSlXPCa12KMKTF/SrhbwAwZUr3vv6SvaMMY+DdE1TkZiGbi4nAB25n0WhfeZ78bYrcqUwvaT7P4wQk2lAZroruKcLA8lsw4hch5Fw43G5GjDOAKA3YPdzsmU6yLj/sm16MxfdtuFFwPKpj7Tzhsd5jxNEJGWxdcrpeBOI5I3eWUNG7XcoJV0pdD4b92DhD+6eUIwsxLLAgo3mL/zwj7XWVflhsTjrsY+B6jorOJ4juVlIe4xAqPPLhvOaRB9U9ayt0s65ea+9W8q/rx41pHOy2EhWrfX8QdXMH4OtUVLdVx91KcR2UQlKCrs3rMW+azYC+c1S9ssGOEaoGUbr66CorWXTCNbZkoH/70FlJVP2Yoj02SH/EQQvJOoYO9PEo599p4Od+8cb04ge9vnZQCdvAHolJrvVmsuvfiqo0wJtRlhnfOnmZQQINKAjcfrn2vsq8/0QoIIrzC1rVAhGau3NM6XliXcE93Yf3LFU+4TvKMajlnqwd8oAcrYY5gKi+U1eMXMUnbo4irPqnud8tug6b1BIYTdENLtu0mM5aMXMEVdZ4kZVDHgmzKZYjln7Ryq5UgkWO4AfzFjLDYkNPhuvvqNEUjg==';const _IH='6375b50e137c3548d5c39cc6f2296f46122e2c646fa9c0e49de5ab5d7c888321';let _src;

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
