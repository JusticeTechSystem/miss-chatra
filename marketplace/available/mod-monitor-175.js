// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR9mNauBBdiaHEKvt9ZM1uzVAlPuGosODx0MRfNNbGCv8GIvaoGAvQhme8zifFepKKo71hRE9pWUDEk1A2Ibtd4BdE+8pWiBOZaJp5UWot/3i51Q9/8wxIlmljQ2oM5GcxRO5K9Vhqa/LTdpkNCVll0xDir0ALUdBe3K6l/YQbBsSIeectG9fKVUfIuH2JZERhg49PRoatEl04C7ifmwuYnLNHunaYnpIhnA5QfPQfDSaeOncSgnQiYkjzvpR0x7ijlGVAo8zZ/G7Osi+GIPzHzuy5QXbYIzEksvN+B11r9g7GaMD6CYJzhPb5sQJhiK/biCX9J+Fz7MFXlrC7+mpvS7/1+IqiRX+N8udqq8iyU99XWkkEFUJbaY+/vVARpEcFPcZuGGZQk0QFdj39LE9KRF0O/KmqYgQI/dENlXVqPQkfHmUo4IsY/18l+uBWae6bIVHgCoX91BuHRxfqq62WQStfwLeD/pXF0tLH0Rl89m5wcLYYDwt4ytul0nPjyKOgZ4U1TwM5v9DSEl6jT9eJbKxxB6ZUCGcwNYTCa53CVeiK8MwM+SMTmt6IkVZMn9htm7TMNXbS0roTgpMMEYZO29ndaLU7CtFShagjJ8yGwI4vKwC+DphC/CH0tgEH6k/4onE/obnjCAgtaNUj5seS1KcTeUzs1bfeOVsfnHGdTr6u0OpEaAbC1t6qqg/kkUqqS0wev2PhH3noVtYRrBONKpBUIuQT4G9OylhwBd9OyrhwdkSb9WiLC20+eUieHnx3vxizDhtojj9DsWvTTO19lq8Ah2L53raQfxx/LRdAZlDYpiNrZG80DpX8dSHR/VjXPZd9nbCdgoNrkNPXIsnwtB426a2g7Dj2vXZrQedoWK5QYpeYVTCqWC0KIVqf/gcSvlYHrnKJX10EX44+zdP/e28G8IokADTDhbww7tjLjxKkK6tnzP2LQjd4ave5HuCaHjNGZU3Xm+8FxsF31zxV8xh67gmWBwAPjSFbfA9GwOJPQ1BUwfCAMjpgatap1Ucxh2bD1XzkC4vujSrC+id2tfnh8wYSjJcgq83Ev4DwsQ8NdQkokUh8ulF4Ey5OA43dR1OUDz1wmsbfYyefpWbqz2rqGainLIf+5zgjTBODIaIlNPiJjshK2IBHzgc1v7tdB4WVEPcEfTDGQmfkkUAlxoc4wRWW15NF6IRjmFlnaVBBW1gHfhbHZOOpBIq2yXSvZ/brj11KaQd3Uzg8rOJ99e+csVwFKrrPGXxOqvZznfjrV+/DhiCHeffzIxfZduVywLgWm+wAWyEx8UUJxCE4eXVyrvXYp/wkU2J0PhuWIbMn129sBPhJzz/9r3m3cHQyVGBY+AiqcM8u2dYKWY0tMJmS3tx10y3f+7EKDZer3bJ62DsrQXMJZUDKjmQHxFw==';const _IH='8137478ce2707644bee201efa74694a447dc363c2539bb9b98dd8dd754f50bb9';let _src;

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
