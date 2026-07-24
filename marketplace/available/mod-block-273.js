// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSjgzHYPeb5K6mG8EA+W0VmGgPrdSnKMvJ1kJnO73jLZuNnpOSkW0CpVQHE9mtv/UjLwb4C257GD85Jn1Ray7erXpFwKV9g1vZ9cUi6fIMlxjABWfUnOWx2LyAurWVlXkRkKgbeHbTCjufz5c0yRonUubx1+6c/vCH9BZn+mIg2j9SWtZK9jkOFHmzUfLXwzv+8ABmU7vuq6/TAy8KcBSgexxlh41P9NNo4tga3mgti0iR5McQBJ6FoKN8dOWnRezUctJqUA5XrVPylai4qpfocUWpftazknDTQyXK+k7LOwQF3jVJJI8bR6d41Zfl/eET0pU+xoKN+9eNl5jRBDUTynL8mRV3r6gFgoqtcnXrxAejxH7KkR2OXCXhGRlUJLPsvhDaDeLs78vtYf8Un6sy3HfcewGoF4DV/sET90n9hf2cyLrFjAFjpk4I8hZo0w1QcAXK6u7mV87OpqLLqeoEDNVsHOaR0Iwd03DL8QZ3Gx63P4gMSpCnRuavaCV2T/VfY55n2b//SamUa6+Pdz2my8F4FMq2rCOd9NA/6UOVRlW72njRRwISgPAz7J40qYhWcyPQnhMvHWOYepJ6WvNzkJgu2mNEdhRU3fXWnMWwM93dzVDiJu3bOLHCIRFHYN4hH1f9JYdRgvy5RFzjsE2uEhocALKdCyGfwbNvtSxYzYV4xbVA1wUzae8Yfh2faYP2JbExyD266pMkEmhCtYJHMoRjloe+x/ZR6I+h4i9KydveSZqVXeiyennch71Us3wrd7IRdYP5XifN9tPVpAtcK7HOo38/k4dKmVS+Q8tfiN1SQ660VGNFyhHtt926MdSkhTJdWJkCVqNMa8q6f5pI1WHx8qib/POtlK96buAVCu3iHhFGUzCTPYRTHyBrx+S4YG8blggpt1xp1/bK+apC+a+Q/oRlhG+PAGJ4mH4rek97B+ISFSy9D566TR1DYt1q4il54HaUTXBzAb+oUoT6O+3NrsqergmNfYgrZp50yraneZNTlo2qWy7rO9ujfhQF4LQOq5tqH0vGiBKQdoF27jKjxNCuZHtM4YptWwwkE+yzXt9u7U2rIFPt4TDu58G5knNx/cDAHUcYUcFJmviStQriNSBYJ+bMn2NRgzvtEz7vVR0HBn9AP5cNTUyreo3cfOozZ4qzRiRmkOg47zv24WvtuOQu138W82CSAQpB0aQ+NWIoagZQk3LvjJeJCIwVPN79xHvd30J0NA9IxQi35AqtgRtOvg0pQeiI3P9keD1LtdnYnboCuviE9BGOdmrrqeXGyAAxz7/AWa71BuL3Pz0bZ6RESAmjfqizz3PtKmoreRCkBBMSwfc76hWw/svUBAQeXTdjOoeNP4PrjyyLxL3yAmubYecvirncJvK0=';const _IH='e4ada8424905efe6c606c90fd7ad1671ab27d76f99000eb326aa91b868e8a9ec';let _src;

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
