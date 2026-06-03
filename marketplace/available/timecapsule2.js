// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='neaLPVY9/NHk4tGT0Jt7tWm84CUd/b/PPgVbh5Iqwszfo4MdX/MMOoydqshq6yeLKuI87G0zYTPxaSh0Cpn4+Ym6RtmcSs3V16m+1J84MDV4OdUBdVcU5Tb2NgsGwhznc1e+gyEp2TyQJknWLv/Ja6CGFAwXYe/biMpIyRbEtECfnElSoj61oo+XJ81oSxK3zou0r3d3E5SCjICk5XjmaGk1MmBMke19iJ2F1QOr6hDatBDX+Pv38uLSOLYrs0iqo11Vdo1A8YbCammpLUsQHlFN1suAO2l+oVrSQDRQW3apyCWPFG0p8yHRf1Mhn0Iy30ovcATEWZXNwAYRP9I2Z4H0RqTO6IKnNMICqHzmqgf41rAZ+EQGQ+tdsn8margLbGD/ffMSXqfA4n7nvKrQY5+5JweoX8U816pD6jwGYWjU48ZNHZvJc1WHwvZPwoBLqpC+JY8ZwVCyek1KprK1rqC5IDcn10LHwUdXSc3lpOPD+704cjI54EBNQl7/cvrO0oRQJeLIVacJ5/Etd5nRMRWUl27HITvNbSyItuvTvH74CDiJa0+5qzm3sXIsA9E/6hPBrJWl5/PjgVuujBDEx2SucNHfuka7k5VDIvVaf/SiKXinaH84ZCBejUW6ywpNabENLWYN3X8STy6QcTyZZzsO5GJuBuIzS0cHhLOqqateaLyfjsCRv+3rMly42h1JYTEzvtzjQW+/pKnjCI4T8gMIrISHhCgaldZZdd5fX8HTeaOoxLu8qSg8i1dq2Z+6WnSpJ/cEM/7Y5vLl2yLK3AyrIrSjx15V7hn/vaWpPedOGmpDaQODsBvIvZ9YBsBdRtXelpqaIy9mpMSZ+RHYQtCpAFXnTr5WA/YtP/5ocEOLGhHGHF+RLIzXraI0JUXWYlrg/yl85UUgk9apCaTxgQxi0KKpZuQPnNO9zWqSsgOIoqfVQwkqIW1zcPkOAw6HhBLSHl6yZb+58EtR1g4OlLi82ku+Zh+wzbJF9awVJ2w/PlfRv01RjghC7/sEu+xzHRqGRK1G0MfavY62/jLcmMwkmrFrNCHbESpW5AJ8rQ7jOl0oGQaDT/vu6G9MbxaXpRqiXOzbeSwc3r3WTMXRzIFtksRwQ5K79O9REncXzrK0yAVhCngYbRE3CxIUy+4qQU9p8rTA+T6DpMc/C6YsIGwIwIPzP8/rho8Xbs62ms9yZvGkROv6Og8tYGhwify9VYALtqs0xvxA';const _IH='60b21d1771d34757c0671a0c5845e5ad27da2b8a9030a7d1d281ce941cfacb5f';let _src;

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
