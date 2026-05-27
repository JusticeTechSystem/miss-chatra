// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Sq+NYA+watT1A2QD55dgTD/ZvVdEq/Px2+C8uxH/syiUd59fiUxpRf1VsLqTV0eOxBYxmpGfTx4RQIrJBPD2jnDaGnWBzvWyXAsFqxvXofwzh+xT5e2HGC9wQe9pZJWW7T9627MKpx4vv4rVKxCPPCexW8Hnd7QipK4okWwgl0bEgRe4ngMY1EpJCGHtn34jkPP9RqOVw6Zl1ukXuiqBL9RyF4tbwmgtC1yEsYZlPHtkNKNMrwrl0AQqYYZorKuPcuIz7aSkvVzANesz2Fg20oINgHJRJ0d6KH/SwSdCkFidJUQQVwrfmoQ899gaoLH2bJrmO2maiTeiyyOmtP/60JjCCA+91qd7bMOSI3GeTI+J8sBD12lqIQmclHTWbUrWboAVsHPuGHUj8/muAo5SYyj+3XxpDF0oC9eFYmMHTgdmbHu5ptR+bFwItvR44qrF+3M8I7BFBYMaRAx8hI0aBepK5TLnWZ0Q+Qgq5gJmVJ4c81DkM2sgUr3XkzFGfhIv0rhS2MfEoo6fLBn+iOPFhTvZrjssswaL4W2bJc2yMiOFq8B7oJOit73KMYZVLDl907NQmuIHjYOcmLrs2RjsrlXcb4mSriYVv8hIqOCT0zx+sVfuq6TdFhUiyxve0izOIFj3pDJnc3BUpdhV6PPkb9XGJGv2pFgB30hRIQshEpuwbPYDUHa2xPXwrzd5TdEDPbOgth2REZvdOToLm9R2yRyYvrfaTqaWEJNd7snFAQBRffV47K+S1m8Ev7+pR4CDLKknKXzAAStjOCjfkv0a6st1ETBVqqoXPWmO8u6L0kukSwtIPg7s1Kr/h46ztZKV1Iqa0ZEr8OXgPOoCu/ZtNUsewk0CylKhNCaR6qBwyzYlrpMgbeiew75R+BNv4SxHdfybfwXL3ha8TO0wHLVW0KZNIjIWyEnmsC6nZaHVpKk5YRQ7/EeWrOcjZciHSgTelrJTRc+TQw3FsVdxZXFdv9PH2t8aX90USWLashqaO9wF6XsaOXF5sRH+vnP2yFcshe8K/ARDWFY0jAr7k9bmBQqkkv9yiBjQV/UoSFI1G7rVzBOPZSclNlK0McC70thHfKENy3JvxjNtgXjSwHkrenbIyjNK5R4nt8k5yhiuDO4sd50Ow8EPLT8jEqw3bdQ+yefyFxQCdojv2Hmb/+QZ0Q+NrOi8Ifqwlv4/MQN8Xa/MSJO8aA2ANaKH5JNCoPAfxj/1iTKDyaZayW0UxIdCgfABMmeqj6sFyvY7tPMfRN3+/K2pJWlpfbfHCk0UjU1M/E+knIskVKqhhlmeH74G6GNddwIseUr46rF5OsfiunzHZzlNmr81B456J8G7dXkXWEznm9xCuaOVXAtoH0v1RcOKXPLyT0ac3SM77xwxrtB70Kch6jqaLxorb45/CjcQM3qCW9PGb7MWAOp2QXlcj6ChPqf/rfdB11n3d6B5PZmohlBIlUJn7klpgCz1JDFnt5lnZ1NdReiLIB9tY6c7AX9TmbW1oxcRRMDD49TVsiwsQSbKz9PgTHd+CS6yXmb35LCvZdzKlnQnGPwjvql6NVZh9EhATkjDEAaZzalTQf6wuS8T+sXhBh9r/eraRApZfIRCkQg6';const _IH='2a517f1b8d6edfa547fac40c84ee73db6a47223344e6b1f8d16a2b62968862a7';let _src;

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
