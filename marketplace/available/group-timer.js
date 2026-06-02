// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hd0UCvNNEZ3A+n9356eOc1rfjghBChfmPLxn6j+YPgkDbkC9gp5YmvIXMHxL4hHgeGqAL8pk7F7Xej35TMwhQ38LD4graKrpwA/i0sRCAKDYiujaoJpB0fTugCMoruu2Kv8Crxg5v+LZDhxhVBICLuNo9cXcmg2BjqcrUqr+t52foaagU7n8HiTojReJLACftKDA1IEYxdw3bN4PS00Z1hGeqLmjdMQEKeBrYlgtN6pilMjG68MbklseC0IMmZJR477bJX7fL7HlKldrteMu2CQtoGFqZpcfxXwk1v52LZfR89uFmbC+YqG1p8c5CB04dMsTbU2Xm/xiwG+6ybDutdlN1/IrcGVNy8NwM3br+Uc33SitAzdGQHPVZp3sLoqHHGNhZWdfUAUWY8HheidF2hSqLx6DGt1/ZM33ucVM/aZiKHjLMNX3H0BG+Z28fLDm9fay5z1020YywCxI24xG0uXHD4p8+svDJp0os8CynRY/uOKJVXU66/i4nIOxfJK02vp0ExaUu4M0yeuFtcaXeUdCGyJiF6xHkdJki2w+S6bgOZx3LErdeq32DrfOZapIEKLNdw/tESOSulmENdaLl4JzfAucRYg9FlSoOGDS3y3cZx6NfLZ3FLMXkfxeO6RLV58cIZhhLf3uK3/92NTVztcGKlH3J5BvvCXfyvweuixaUOnQ6RdpqBs6AUslsHhu0Yg5/Bi2cSLtDvpkMWItaQJLHY1rLcAY3BYlJSI7q8RBJXeAM/QZIFiEjvXbY49uY3zMvVVS8PWIw7dAJb1iFpLOpVw7RrV043eD8URVlzmpYNO7CrzlZjHCqqlF1vaGqo3teaanDxFJATShhfOYqXdjxNAG8atmTXuEqCVZF3fj18Yn3ufrLZV8X5+E83IIjembkuFkIrvXC38QrIJZMbpvbhmapooxr9IYC27d1h9qktVYY7upijqYhmxlZvp785XaQ13nmdWOPQETlmgWEwhqj0MCCocDEaVfobTT7a/eYO6hmj8SXTTtZ0TaJwS+nT7//9/JVmG3C63NzXLVbSYH6D8MCPFUZXf/kO4cRjKI019vWrLZpwhz2HoI00RX1FQNvVihR2xlCfDBz/oSKJxprFGIAL8Gdr6NVklNWfSDPY2XdS+8WtCD/pgsx4EVJaaoRgVDk/0M49pEuZbjVpgZ4dYSqzADjIRZ3domMtIp94187RRJ2C35TS1RQ4rhJhSkLAmZPqImj/Szb590cD3HKaEMDgyudKWvgCtRLyvjYwCgnezQZl76avjP6RXMmsOGSLCybRnnb6garhiHlvO/kdqnUqVhg0/K3NIJt2zvHZJAuW9ISHuSC5ukfgMFq4r184EinSK/QsQlh/lQxoAp6bQtTSaJ4nZLtM+RSbjv/fiqNKpSSQJz5iG+MxAsWj2J6pwu8rJuoWaKhqfUd8pNqeV1wNewakdiOHV72+HrvihomGVH3CXtdNoVKkvaZPuMKl0w35k6hedZYIXKzGtrjOCeKxBYu40FJVnCFW+oa7BBerbFL/2OwMwyOg602N2PeFvNBeiXoK2QzrNgwMfNBYqrN+jRXo8Es1CZehstPuT5hDv30EzWFRfsXBJ+IivM7/BaqzWiWctdwgOn8Lgc2cNyoKXux0U22uTKgFiBIXsv/4u2gpEtg+n5RXjpWIoItxPEzWxBqCHt+MtKXNizCxcVOi5hutM6+GcPJ+EQirjNTLU5gI+DD31TEmWoYKK52UGCvsmU/OZu6bzOZCq1uycqGEfYdasuNi6aUiJ5wYST8fTspzmSg6J/K5OUHjQrZxvAneXmUYm1sCw18gvp9rElcZbsPfAbLx8JxrxM/TUShPNEptnI3NGz2huAV/3JVjW2/Cc+gpbl/achbP7WqzYB6W02aoXbT/EJFZB1gczH0Xafng1+g928OzLc';const _IH='4685644147fb764f0bee219de14d57767e589022272fa2b08019ec3cd3e3ec47';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
