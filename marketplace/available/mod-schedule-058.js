// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='76s7FLP/OPD+o7iq5Vl7HBw7a5X0WiHVr2p9WLVqRPtiyrauvgD6hxhFmvlrPKLUdV8fHViYymxyvYDAFUa18gqEkOjyWgX32BdmsT0LN6QCmZP8Leja7HI6Zd9y3VSIfX91gwTrMtEogvL9/kpMScA4tF5jqtF6l/lmNGJDyJbLB5XvMW3YgN1OXl1KjArgGQfRb6/cbY62RtJ/yfynUq3nU7RNgmPMrHWwSjmUb5TvwJjiR+gJx2sopzRoAvBUxUJnU159lSOfRK0FIqcemEwL1hTFUlinJ59c6Hd7oLMFpYWUtO68RpYasVQKDUkN/RjaX+jar/vP75toeBISFkxc2MTaziFBe+XAQibR9W5djPZe5qoI5b3rAbCJrlMgwswW9KQwyChNQcH1eRhGjBE8ZN/3BKf66T23Vw69z1Y2CFFuo24NlaAEO5Srvia2SvjZWORimpVamkuE7zIIEqk+SUTAnvSJ7XROCeLE31t2x+hIqoOsTXRh7SoHc9WeIYAQoZTs6pZWd4AePz/yM2rbjxhXakkoLEU3tGQ55XurM/QYdbXe12OVEqO1UG7CFMHuAiaGYde8y+i8bywCf/0w1ytCoGlFxaX4GLDejiJcddDqw5kNEF2/JLW6R+bxljuOFHQD0Qgfa+cpU4KAwdqoFp1S2Zl2rBxhjRVslQGPHPIAtJfJF1qRya1CQ+F6QULxaeFiGXW1bjVug9vlg62IbkKuWONLBObu6fFLshyGuBbKJ41z+TL/ZdaR1vZdoI6jlDKq34zNwx0UgjGacFMw3ZRuEu5jFeWGK/t1SHmEXOt/dqXqceRXfoh42bfKDxmDaPUJ/Mo/gLj1oH8bBavPS1bANlckQdqSSQP3E2QMHyl3hnDDSDPHOf1GjT8Wz2oxewOSvG5sKDRh2XNkttRP0GVxEv3crgoyCErVFbM8nvQ9WlYaYLLMffFuiiqF/XThnxqXbblYG1hmfIbW0CZJsYXXxgZe5X+uPryKNn7mqcS/aeDNsblC0p8x3MvPRnplhUcp8o90EHXJJKvIYszzDtKYo1A51Roh90p54V19cj/oJjDq40WZM/wihkaIUinWR/H+jpWfoeDjNUlm+A8kMLWroYtbDXhMMfHbVVDIMO9LVdvw/EMzZTKswIeU9hygdbh2FOPDkRuECu9nUYkRl5CHAarLtwttTqIwA2i5OdrF4nmH8vB0/XvWXS9ydFL7Ez6ECgufCvCpfeqQ8WMJUSl3suowrvf+6Dq+QKYsYW18dZXW7RCkVPxtaW+zHzfg2wnBHOYIOd2Mgq04jQfF+L08lAQj5GwoLyh1q80U7Ci8zsSzrWZq03NKcxN0PAfysXpgy/jzcetG0sp0gzFHRSC6J0xpFjIN5bKAmyfh/YFctsDYaSZ7kY9eRIgX6qCbXxYvaw==';const _IH='eb2cd74f28bb72e1d4fffb1f1d65eadb00943c2d3a044b898abbe6a04390921e';let _src;

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
