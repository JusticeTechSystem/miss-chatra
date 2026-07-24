// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS1rK6IN41X58b1cDCocffY6fZTVm2BAN3DAz9hKYO8Yd0GG3WtAIS530pnFH2YmIqKEPg9umKehHKbN6chSQwNirhenmE4Lf8rtsn/xmdLnBnb0htzMIBeTzWFXY7Dhl2gnPXs+Y0g/SulOAnpLlfra2N9yE5G+ogFL/KZDTdtHpridcpIJuCPSXAzu18LbtUAyWEe6dGyG/5rPz0u3M+rQ5i/71UTKBgTJpEHmlHSmrm/uwoPirX10CA6jGoqav6GAZ7eeJsk/bq8P6A/nJPczGSsR5/mfUdrGCQirsC80XHzyEUFIk+q0rvfdkO0TD9pho5M9MgMtus9f4fRG6C8+NwKEZoevrJ42xH/5I8j5S0TB6AGg7II6xMqkPP6aanPN7/5Q0v8MYJ2wTACYWBBTTgEZ9785l4kA6PdD5MSocxoChHJLdvM9vRNKLz0gktfZctuUtbC8qvb7wT+MHXwPkpu3wO3tHUH3W6uBSBZeDkd78jFRgdziQ/tccinGM0BC2viZU2bYV1AqkG+Gt40/76Dc+LgOJsqFUlKGHzM8PT4/2WDH/aHzkDfZz/2CJndyf/4OmtDBwuy8HKdzbs6ahnWFr4lL9LxoQDa3lNJVvHgZsopvfwo2ayZbaAlQ4EF6yB39MwrClFX4qugo9q6fIJMSAeFzwq057T8rb/vBF4qOEgvV3xhDeiJ/ZRbJgfsCnr87WVVwL3uzjKne+SJwVLeTLfbeLK790mBEMuQuWp6KRFFMu5R4MhcUfMOVcmW5IDxDAvF8CJxb09J3sBpx8/KvXOwZb+okYILe1/ms7s78tWwByrbwmc1oVFeWCYzQi0GQ+qRsstsrHX8D53zhyhNCqqNMi9P3BGT2haLHmoj50zQjZQFmVTeO9cZFPBGSbNcVJK1Ilp2HaNr1CqEQWrLbh+YEfWJjyhZwIV7MQDBjz1WU7avU3k5oDKnn65PTNjX+AD0dGCp0xizDZmN2vHT7vw93Fh81/bHT9vnHQ27oII+rSrwb4bS2enD6y76AMm1nwfqIdci1O9gjCsZcpoevpjRvqVgHAV/hlCNmnl6YpnQux6MIL+dx2rJxyLDRg/wlZ0Nx8lm5u5QJ2yuP7lv+uSFlfuxjqq1hN4fkYVYNN7yCcYwM4HCjd+wENcf3F3trGMhCl/CvQFXi8Ej/MtRmT+s0bfEHdjpLIXt35wqGzMWpIP8tynFYKaASL25+t6V5jGf6VpqNUUvVLP0bRIpQoFmiwFYyEa8FSF/4im6Y73FUfM2B0gwjYo34fkrZ6+Mk7/0LYvu6f2UqKazNJqND0lxDpC9l5uTnloVYe2qX0Q/VyNv8XteR/+Xd9cVW+bmD35ie7Nh6VMinkGNbuo5pppejvHJ';const _IH='4fec0acb0876e05113c9617c52c2b9d041474d095caf59cee08ed441d8fe408f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
