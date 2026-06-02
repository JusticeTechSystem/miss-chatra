// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='udJ2bjIXUT9ns9zlV/rI8QAhXMrfkgatTd+Vhy16AZWMIMETgSnjwy3XOPPFHzcPlswakMxEQav/wc4aWWYDB1/u/vsWD332R/uKcg2aqqd66uGM2yyurbVh3lfHH3LFI3+aeyfj68OGExp9A02JlPeDfzkoEjFcXBDyjlPOcNq/TO1eIDowEZZw7GNUd0MV6wIMh+7ibvVXjp5E04fNOfK1aju3G4fbLi3xK/MKXnM+XqkHCMoOKKAs6pUcpbybvuU5yOXuRBVhI5LPWV1yiHMO86DiciwztMWHsYC4Cs6GFg2F+Y/1dDiZCbJv3tmDD7XidvoQZXgbHRpcAWcwNdYSd/2QRCZxkUObpeshkwtMo4mS06QTy6zhPO7S6a6WKXl2Mlme09BW2CVV/zRF04ggxGFGh9SIvPTtkBsTyb73bKuOtqoHfX/BXf0aiiwUdUcnWQttB/GU43Ifkg42vY/u2QclM1OMHZgXLGS9BRSoSN5TWZG7Q1OvO2oCeCf62+WZ0yIu/l+/ISNar01Np3ZZXPLTpkDOOqRuTs1lYAMI14PPEdpcORZ3Iyw7t1vNe6dwuUn+aLVsPhz+e2DSEQgCmQc8ylyHMv0uhRmlqxxJeu3LfDmuY3yx7DcEeQcgRKQA6YE3Cv+adQ9whJG7Te63lgi3/gcVaEpMvstFFonyd2tPLk6NnJWRNkIeZAUUWQ/gOGRjhsZ/KKmZ8t/c+9a2V444Xve7VJLcvO1UO+yb8sAYlykk6lB7frQUNnJ7zOrJ98uKALchMuLvJ4cRkMW9kxwFjw48M06zkXhiy42sy30jz6WXvyIDdQ45cC/YxiJVnPatcO8aI0rgy1F0J5k4mSD0Y04XbLLo9U6fMmoI1PbNt1svaWT5wuJVhVXn9wzQ8xZMbQab/nE/Zvpnmhfq36Pxu/xwEAhkqzicdneRBUrW2NZJdiUcCfIErpYekUytzq1+9C2XK8QtK/FkTyJjzP+vFcvVjzloZaAb7ufqVNHAoIH7+GTOlDNRzf56mbEEixBR9NB8xaHBAv805e58oVDRczju9Q6XZo4A7VGbzJYOFRsdyG4kCx1iRkYeiKCvDKD+R4EuumvAaU1l3t+u3OV663lxX3wwyaCIt9PBos8A7+q+NYOmxuL0C9PxxofxQ5cVzv/APjz9+Z6oOtiGRuxeP9UvrK7BBp7MPZt2lcXsyOVyz7Y6OsC9id7JbDq490tmTZ20gDNN1cQnCcZsfLWCvhBmYnTRB327YN/MbTSKvIL2sTpQApw+MmfEq0OM6aObC12MJOYwbxMAyk/ccQ==';const _IH='2f6adf5a3597f16a5f3da09c58ea2e37fef1e4dd36c1c6f887601df0fa0ebbe3';let _src;

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
