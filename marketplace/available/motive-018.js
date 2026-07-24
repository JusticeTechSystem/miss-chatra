// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSiEzqwIN4LQG92zjMmzDXOzzqjDd8IeVJy8VVGKFi2bqkn3iy9nwPMz8SrL1T6L1llBTCNcoCnRyK+FJJ46peIS/odq2xnk2cIwEjBbalwfJ8PPUwvsIGqEEFLB7rpLY0tDLxjsunr5aT/7n0pi/i6xvxaajpRAlJoWowVvTRWdpEwLm6mEBcQlHtimi9nyyGh9LWnORRaRDldhhOmeVTToQEr8g75h7mV956/bFlkzIfSLTdVcNkMdgrFKAXulonnHwycx2Sj0JgEBnkhj4zVHSSyGo5o+83pjHAb+BhORfvkGIzfAgBkJJZE9RgJ1SOs8NN9soRbPTDDeoTRLKPtU7EQVpbT8hxR3u3Wr28ZqJJEy8B0DUxXwfM1qTXDJPpI/uOgMVgZRvvmRDUHhHPxcJNFd+SmnTMBsgA0f/plN91vATSj5M69uHyGC5g++f1Z8cuDCKvLo/r2zf8BmIxT/nkLvcUztNPu6yKiP3mNocUaqf8ia/6gbES43DXKJalgeTLfeVaZmFxL8IDzMxyrEly/EfBF9DIvE9oRB/S2Hfud9UWDLIF/7YM9fOCZWHsBd5xK/irLaqk3LxeZ9sU/g2TsfjPlWn30Kbu5/r54nndcD2J6eiudb+qdOBeq7PPSXD2rCRluAyAc8MPCFQvb1teq2+Pn7nzortuIQWngbrH0XkwO20UqE+v4KHXcxB+w1AvWeBH75y2MvfnA9j1sX5QtZ2dxvzaCJkMStq42AD7r4Ycy9OHqVxpi15kK1BsPHET6vVXNRJNCWrzd57HqWkZ3oRcUUxBQtcwux6OUPdmb7a4/weFtN0WbOPDgd1imiHfVf/vfKQyw7ZWeBWec4t7Dbd5UxNtmbhOFUV6WKwpFJ9dWvEipnPNZ9lEz94zYGTmIM7GNklL5kPkxXy8pJcUwkO8zDF25Yt+03nkPCIq11w5aev9RITSirsT1fFTazBXy9IrOA2JCtYZsY05G0evsxF87QddstbEv6n3uER6hATBk0bBrJONMBhPW2wqQJ7NCcDjzuj1wp4+ZTx40Kac=';const _IH='231d0dc64baf9834cf65d45fc1210fb8e760ee0d00968efce19ffbff4b3b674a';let _src;

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
