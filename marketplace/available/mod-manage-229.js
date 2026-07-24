// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRcGEnQCoYrIfBFnWYmwtw+3iNNoEwJzT2nyh0pbfLWDh4NkaUwjLvZUwDuYEFY2d3vbtfqcqW/86waQrGpNVT8TwVvD1C8Lgovwnr8MDim0+gTiHt8S6jNrEGzLt1jFWzKiP7URp7SvgTXwexvrzNCp6FOI1+gFz2eqJFl5svG2Ux+UZSrRdZGhub7lXruYELneoubHoKnD5pQ3PuJXQ77fJUbZTFwgAG9povXX/wGihsFVxHLKG/EvzyNYpMbAtctZv74GFGhu2ceXrX0lmKL/6Wno4JhWkZNs2N1raBqCKG50ZNJZidXfqbscr7Mv/IGossdQ3jkA5Y7kLkoMPF7gIy4mGHU12w5nK51F6j57asTuST25jiUZAn7S6W8my/L9xKIwL+ztI1/Q3vTPNPxJzYIVPk3rLqel8PfWUBWP9IBk5mp5MpDsSMjvVa/WthKAmMbaE+mxcLe3chnWY7YN/Dn+WRwv0C19Wixqu4hNaBmj6VJfFvtTdSmI+3R7En8mNjDIzun76T8WihG82ABT8xxChoDLSLk4OYisi1Gcg6NoBqnLEXjbNpnwBC6yzAwZouR/Vusb7zaOKAHHPJ8NZJHd9eLBGR87WPps4kgRUToLDqDPimzjBa2MtcPkesEiFKXH/Ps7eRgd5J68Quuz7xt60dStH6mBgpYyod6+YYVf4lw+O81JiKckF00jz9G9nQyuIvvFY2clcnEsoLjEwGQVGH7KL9zFQW7Sor7JPD124PhJkWLLdf9J2F8IMAzuzAB+R73H3aRCIEZfTeEMSXe8bBe2upxaIp21o1/lgDnadWBY305eQosv8PgtH0FJ0CuisToWov0qugBE0EUuB/GkL/++/eYATKoqjiPh4+q18vBbHB4TnXpIrI1m9PJQ/WirBcWd4yONsfP2JdO6rb5JUDn+z5c2OxoFsWfNcWQU64ujT5aPeGkw0fdaidTZ4ezgWtZ4aC7RXOL2cg915EkYO+k2WnUCDdUpOpWrbqfCwLxnNBsQSidvIgzk7MCEpsMHuLOP14uu3T3Xb0T6veMyldrN2Vgsnduj4Kz4l+X4vH1F0lAw9T3k1U7tluJHBDgUFLSiKaLSH58UwLcUqwVLTz4CKHqeLzTqUDkN7kgUiGLH8wlnEqEUBFlc6lvuGPOAufCboMXsBigb7kiqohRU4I1Ec42e/E+sZbHe/v+9vHyeTZ1G/X5EWMGW9YRY38wiEckYRVnfmDmMqgbf34s07TIa/lrUtZpJazc3DIN9fcjNMBlJmDNAUHlgGOcpA0Ym7qxydlmjVLZBw6plCrBZpD6VE210Airn8KTUxc76VZr/yxp3m3tGU/hT0nZej212QxomMQfaX6rW31jbIfkkMBvmg2TCRNt9MTpX130p4JmCZv/';const _IH='5309dafb54f23d2e1880fe774fae834e8a0088386021bd631dc260b650495fde';let _src;

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
