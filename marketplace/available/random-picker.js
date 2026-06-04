// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zJLndZkR6j7W0e3tmHZKFSRmobNK1QSkYt/PCJcXKuZJuuakuyjCzfGG5tDHWy6/JyqFY+S+O6NaAkuiZ5aMfHbyhnEfoOmo1whl4c3KH+Z50IroqyGt9I8Plf0oljXWIpxYP2d3A1Sk8aaTp5QPNvFgzIpixLFOKknUyHwVic6UnVwV+GmeQi2ihMor8VRBxuYTr561Er7vTMmPy0A2JnGOlGeVkOv+mw8/NtVgfQ5QoXRtkmsf0c5Kes2bhOCqsLPiZfRJIPYajTB0C2x6kXinMjHLz2HtE5O+3YEgjseLYhEmRFCz11uWBfpjV+T86BvtfoDMTTZyFy6qlZn0Blv+Gfei9aKcyKga/NbWDllB23e2SKm9HLrE2A1iAGjIPbymWXODGsQhSTIGYYVcT/VAd1SAJLOEr0+jbxGXK0sdapSKqsg7ThDKGn1KgHb991lcLQOWe/7OpcIho4DYAYRodJ1BukolhOZgqabR6Jj3qlz0TZ6W0jct6ec8NTM6jjprKrcneX1uyZfFd9V5W4QQl3wH4dnIhHUMMsoVpiIci6Ip9D3S14p/QV9d6ItW4Z1616JzIcE0XE2NJvMjV1o2vMWXZWECiUq+nhYDtS1ySXcV/I3JJqIeWAAlsYWHfudycVc2CUc8hTPkeguKMOPCXY9kAIrifSljmV5xUt1liypaVLDQCbz3eEktusKRTP56CuIA+H0KCOlu0Cfsq8ihB7lonrp/5Jm+mV9W4eeflGjc3gtAfXYDy4AWqaLGz7vWhk+DKeEzOi7+FAhuy8cna870jCdVu+DuQ6kdLTRWL+2pRytFBFeFPb0I6kBndKJjiHg+cK413mTcYAoygPlngIkJpUCC+znrJNv+kmQL4yH3qof1D72CFGQF/iVDp9tiu/X/Q+VMTrujWXwsCQV/LPPuViRkEYsBZaHfANUd1Kvs5qn0BlgHNZ0CpFavDU06BKvlpwIU6MFQZbKHDw8hXVJ2uMMIAMTEbCpg3oQow5hOBZBhWRVpFtx6nhU3HYN1UXOVQmyfq7jOy4hy8vmUd9l9g6RzwOdYtIFtJNiPsnurFTk+GulvMLemI7ibNA0rovC3uRVFFLwZABfeTmUFB4MA2EbTpCzmtWG//XeNbffve3FD6Tz+Phi7HU9Tkvck+AODnlX+33+ccvVl/ngqEhvTncBlxsv5pWZrXXJzlZL8MOSuEHihi1veTTXD8Nu+VVh/eFFTNXQEgqJKVQiHA7bVZscf7v7U4FYuXOflwij/4HOhaCxO7secGWitxJagY2+wVVfElYsLOZbHTRKeVfLFKSuVjdlW5j2gJVo6xNvWi8bwQpIXwjiGNNIpIZ1TPwoA9DxO4JZWwXgfdSL3b7oZ2zcC1jaYMf76svPv6ihhzLtHU/OMlzzpVn5GZEk+WSANecfL+4NE5ZPvuImtKpYMQn72PMUbPpmUOyziwOUTJMGFLUlgcbqiTTkXIf+UFlUr9xsNdLFeXZ1iyfSePm3IDTWs1XYgnOsBA56sRqc8eXyp377oudCpAcDEnT1nMkPxLsgUfB5ISKmqWR5vI5QKe+jT6SD9RigeO+1Z0xuuvsDWVIBHxy5BdR2+Xn5s8yAv3U4jI2tpolHg+05lODa6Q86sJ3p4XwSgA3AP2QxgmnwQQ7fBH1f2Gke0vMROWVcRjweySv0vfJWtzB6yLrL14nv0ae7VedOv5GTHfcq/Bw==';const _IH='0b06b293a30382b5be2d59dbf006fbe86212012852f0d90523cf42857b0bbc77';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
