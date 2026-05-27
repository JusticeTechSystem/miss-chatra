// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Xktw7nqz/KDJbkg+LFH9parWuIpLU491o25W74LYQK2N1pRzvDxuamCsb8IbcBWfXoYKBCRiyOZzr0TiahA9BYirh3tA36/gDfdZivwskxPqQH9Y01L5nWRzDYxZGD0BEM1KyzUp5usRECwemss9Rtf656tlBB922HsWM+04G0bpJ6PWHaBqV2VLRE6mGg0aT+8bqoaFECecKR9xiHQGHbVvhKClqoBDBuziP8Z6bIbo+8pp6eqKPUOGMc7VjxGZt5gMTu8hyUw4WDdjrASegSq3hSkgGbtIHSQCDA65Wa6wv6zTWuQxHjxa+UZXEoNwCz6NdRN5gfHVd3V6S8AXTEc7+FhItdizmN6//kUd0/P0lqu7lmWRYAX5Z5oqwxhZZb0FDJsdAX4pWCgjD4NaPhe721K+vh6PnlbdpqOR44bsrwBzAqkKlWtU2dqHrUu7qaOP+3SCio6dwg1xMDSHUZKtVZAJ+egYGMvyXBUCe8GysCZuFGOc9x/ASM4M7+/KVfWYcPFW6P41mDZhx6mfl1W6pi7ifMLsGHQABuMfuPvKSV/vZ3//oHehjBqoIzjrL6qRoNDBbloCOxJ1NUfdruXO2oRdPR/kdvgBuN6c4ibue/kKfK3jfxbQI5lKeUXu/dC7IWz/ZXi2PCWbsREqJUYzQf8OderX2uZ2puhiQx9nsVGwPmXpilfGvIsGjZ9gaP8GMy1iLsDIzxWoP97KKZc5coutf1Fxrw8+fYIhOG4Fx1EN5ZCCh/xaeKKlxxFEtq4O0Ykahx7k7h20kW4kY4n0rJXlTiQoVP8K+HFr62i8FC4lokMgDsRiHzTEAWeBVZmwvcbpKl9nWY0VmIX3z2wZTMY5cApc1IFxmy1SpEvgiPDTBaQtgXChi70tCGoTlwp07U99R6GxH39aIztPH8YWCOWGSH8Lm7nQNU5dUOZ2dvpwDi/iajdPItLT2vShHJcYCCEXGgoRywNNlN3P/KwSkd2PgeiG2LSyKjXEm9QYMBEifzCnPLiwysyQ6pzyEnbu1RfiZz7fhEfWGTHSI8IiSjYA18YIuQBW8J4l2MiwpiHc1orlQ3/NraMeLlIvYmtzjvDuGo2FHxc3B+MtGZdlLDTbENnF5ZTbK5/5y2uopEDSt8rY+xYJJfsEh4hGwb3MUsLVWhBPbA2mZpFYwjsHIBdPDv6aAGzFIpC8cc0nYM4J4K86ka5BqGb3VlbypNHEU1SVLCCYBGS+JOUF44Kwq9gtJE3gHKJQFRx/yUCXEDyIqAXgADuujfjrVfF4NMutjz5AMTXZkAs/xgb+l/2RDIwERArYQi3Rg4XFb6HBBZme3CcOie4njmWtL2pkooFGsilGsctsiz5HqurCxWyadZYkaZcsw5u/oAGySZ9heitow/3NdQ==';const _IH='31d3582eba2a0aa2f4efb72fe12d2dbb73ed935a46a24730a79978b20640baa6';let _src;

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
