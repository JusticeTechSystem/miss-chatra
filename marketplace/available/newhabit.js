// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/syNrLYqawwk0AtlhOIal1Rrv60+xahWnlJjZMOnSPiJwgjws8RF4tBoKVYQ5VggfJU/pCwizX0WWw9vGdb+5+5lFS3KLYi5888U5W+aMdFfX4ldzKF7p3PEFoOe5VGckekDNcwnevEUxVBNitAf9biQBc1r2qwZXafBriu6sjvm2nsOQ3njmDZsK4Vlen3SMBVEDX8hKoGr75FUqR1OeZP9qXmoSbY0IL7WDlfshjrXSUVSKFGBWrHMUfynjiLht4T/ktttDxh2avXz9wbS+ssxm3TB0hSINayc5jRT8RY75aYBbj/6K/BOVK+nFpdfYi9jh/ou1iZvEM7nRUJphe8Hl68NFLCAjR9rRve2TGdEHapkH8V+fJbraabVqUit5ofr7TTENiS2YLar/vS/3bBrmgnzaDLqgA/YOfrt7vhIUozSF5PNtqCPn8XI4EFrfEtRifY3UhtjmQfpzosk4otv+xk+Pvj7FCoi3s68R5DagnWqeJzJvoEQh5IcKm+WMNKFkocfvZzlGMEdxenYC6R6YmXTuzoLHAh/FXxDgSNxQzzNLfosxSAP0drcjR1YI62aITP+XYL4hwZKHg4XtV/oZWWkFJf28suWVSqCk9VQPJ6NF3B7/NMyTAP/avjDqxZiNoNWIXnEfmEIsjKex4ncMp3yo2KC61AH+Wy7BR2GnQqczFcwwA03p1wMPZIdxNl20UzcpYhsTYSqexpKgwVjplaiabCeu/HrhPN+mi0X+LPt0U69V8Lsk7/xSxhC1IjYdB0ccdNnKyL3/M/S4Jw3Q76wpJknOJwXJd9Wd+C+tzTMVfX0aAZsT15M/YXQKPB8SdY11I7ym0B17xVryNpeiOR98NY6kO/uYPK3KYYXGWUQagYgnWcOBL83TBqe8hIQaTmswxqOBplOJHlkaTbt/tn7ddmZJxC/+fB7f+9gklzdgZq9hO2bdmgzYxi0uWI6YBvKEX69VVHwET0obmAXTe0if7bSDMjEr+Yv9WUB9sbPXUniZyPhtI4WW25OrgsPasNGLtwN4qqANc/LfDkessiWSQ8y6Cgiopn8yNu2ORw1kUeb8Yy9NJGcS/Qi3lv4xt7iWaD79CFJQRdmQmzA0fGm6QfbaMtvzmMT5bWPWR0YqOZfxU6FdQhfA+314RQoIYijG4QnmFTLfEMaVlkkuO1urmY300JC+tszl1J0aG5m+qjlneaFvaw4N4L5';const _IH='39b77cc887d40b4b4cf1955f5b6b77edd7a545e7f03da40b039cc225d6f3dd53';let _src;

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
