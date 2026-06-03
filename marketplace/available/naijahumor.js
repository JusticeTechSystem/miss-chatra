// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='z6oq7swMJ6vlxLpIMGZ+1pLgkKa0t5eMGR24GmPShgRN+RfJACTMR05TNnsPmYuXM8zISfv4yFnFr9KRTRMhwIlqRPIEMGytLG3nlpNnvk3s8Ankd21BVPGB8AmOjlRRjuEqkug806IgVRX04H87N1nNX9QD9oAJ6ZzTw139E3xrj4LpS0RemylrPyqLwTwOKy6WBXKbfyhalz3x+bt3ocjvPbb+84cLoaK2pW06x5jDd8yxSTVU90UftsrEqdKRy/58YirnBWExQ03ZReNn6oDHll+rsAYsfBSbrlZWbTtz/m9ntzlz8v+mWH55HNBEdm3i8bRxNXZbirRlpTsLEkwZgl+3MxrrW62bNpRmCz7s2ySUkj/J8fPGVAhUgSry/oronLX6l519a92KK54LFZ+7uzS0+8WdqWSsHKm4g3ov1s4yEpgVrM0RsSZ8oYl/dnoY8VKgDQ2cttKKRHv55K60xHur1h1ay204HoItILUdqZ/A7wfwelBeg/SxdvZwVNmdg80W6HxCWjxRA/KMrzaaaezVBGuhs0RcdEU2cUL8ai3jGeO+rK0M2CY9bo/1oWZCd677crtY//6T7U12xcZyhosaIqCpJartgYZpC1KFxkBKRDTz/H7f5OwDoACYyOB2eSgysLpwUHM9sVPJ+WpoTB5c+HLzRjRWs0pdMVp9yMJF8m2l829TQ2Mx6uvnC8HGnK0jog36lxtVkJMh9H8vxna/LU7kX11vmUSgkQxMPb8Qb7ZCiXhFiyGIpLbBRv5gY+Mkao/olCeiZdNS0Q0l5ITDpXfDeMvZHX8pPVVrDxQQ1IYi92Tj29B1UWkj3GTeXrsk0SyFZVyi+qqq+j58cHL/P5AIciqjAWx0/SNRlUOFtN6xWbJwqlBy004z4CwkucSFt5DD/817tLixzEwdG1rzZlqKzVWQ6xlOXJYdqiOp3h2FoBoKQdhvQJfVPYoCGiQsemTAhaF7x7atmY0cKodrWjEPsYylqDyM4l+Dxwwcjgkc0PS1udmNYbIYcVn3VC3GCZ577EkidSdOshjp8Li6Qg1cYMH1Gz4zCmsiZv45/LrBxEl3TDwibcQ0UjKWXQ5Ds0LUOCN8Zzh9oNhvdBjFxVGoOvOYiNlruKaUfn0NgzOGTdsH+iz5ItLAWv26GHUL7KHAvY554SeDlVfbzhVsD8zzeZ38DSxf72i1AeHvijDhAGa1l9Z6/xnOkVEmwzrW';const _IH='9bc5866646dfe91cb1153f1b8d813561a358f48f3fc49166d8892e3913d80856';let _src;

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
