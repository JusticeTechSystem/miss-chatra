// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/g/fhDEigOFpriSIEN8nY+SqyneMuPZ/RpI/jMrpvtapnkW6JURwMyRJBAaS9wmDM+VmVGwjgkx7valUlUR0nQSLjRzJOoMKZBmIQuYtg6L5yFU+a/Ou3U32QNEH04QCOy8yz28xcL8Ptptm5z+qH2S7sIK1lfestys7etqecKWgYamH/Wi5Vwp3FUYlCjAAXaNcBSRmzwfCq46qtzMHJY0BGt2Cw8bmFezmtLNW3L1EBQuxN6aNwz5N1l0qKRNWYLrPTPJxc/9CguxRaUS+EzbaQUG4nGxCox/2X1T28aLqRlZ9v3WY/HIE79A4h7lkCra8KCzX6xmsN2LMnLdzwcyPZvv/OB6km3cQMKKalTo9poHS+m/kVkB2QlWsoWbVAdjZITJJ81RhjxwFDauyno7JuDur7/slJm/U6ne1tD/PAtIynenb3CWKde0wHIxbZaji13l7rTBRNvvJYvgE6PraqiO2RAIYOpNywXb5zAnLA8xeB3S9fyt+knKzCM7CrTcBgJIzpTLDmanp9Aagar/S6XthNqeXMtuCc0uhIu5DwqKUKUvcYNdI8kMDr69Ebl0cKk5wug9it7pDLRcXlSVGfLV0nm8Uu3Y2Cbg98TpZFpysVIk0d5oEMMo626ZOlq48StTtAWvBmaOjFcRwujAEHHJ9IMSdSeYXNLVKPS9ug1h5Vi9mI0bpf7IV6FROpAWmY/8p7IfHexjqb44nKWV5W53im1zsC3vP37k99znCUkkNAsyn7HihKRwCJtlEMyIBp8LWHf0YpZo779wS2MVtVMPv4LvZypbZT3MA0ifu4dB/uigbpIsqd3i/6+6Vr6pbVRs9Tk471TPksGBZZPhjX0YlH3IV/mtCuGEm4dulcQ31VPTYVkXiQjzmtdeQnGyFa6qm6MfknEoahBT+KpsIvk/nq+fodLyhbSDAf6LZOnBvHYrF8GweVVxb/8TwK4uch+oOyQupOimVZSFzzGXQHdX/q3Y6kAFglwADopEuraPU0x2LLJrUI1fOKzZ5MK3LDVMUf+CS9iIbh0uzj78tIENR7CiqxHmGtk7AW9aZj3upF+UOFSLvK1DDEYkDPAbTP03Mx8hOYIdStJBa636fg81P2tGjwLFbssOUcJDLhkK3ijIgLDPgkFCsc/MDc7DGdrD/br1kvVpydqXGpqTaDhIOAC3Qv0KYi6zM3OKeKUoDEonfJRFlNuiLPh/v+ebuwL5jzHqR8EBRlT3DZPtsZjev8FB1gCLeqRTjnqjojbvYJAROiZSmWKgcaR4ji0gTWIOvIj0W5SI+CMvd54ybUUnO2/2RcDV2IpX6qOznWgksmpvMCvj8mZq3iK7PAh+93bG0nz2Vn/bmlBXhJHqc9xpkKs2MwoZzeX5p9LXVPl9tUlzxrg==';const _IH='6a4cabca3e8983e480b6af6df2e9d8be7c04f55ac7c9274ad13fe6181bb23596';let _src;

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
