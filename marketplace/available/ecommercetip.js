// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cKuwfag+xdDdcAsC+8N7N3cWWujSFXN+KQ2nC+QzrHMgVSSj7TVhHccx7hAWxiYnNvsxqmTm6AqRdzt7zDurfEBxGFs2wr1kojb/QS8rtzyjvB+kGmb3DuQ/NgbeuYRef1qTf8G1+GW8Px/0VehR+mx0WgXrwpmzdBIeZplQmdTEvY4RZoCApi8+S+VAZNHTswj+CiVjbiPu6oXU64phRS23+rCuzYgPnbBT8CVXnhWHa+PEwHTghu25SSz4ci8bdzoumDPk2IJCMTblof49tVf6T6YwuRzTQ8Sunnjr9GQht3EjQaw4SLTaqKPkDOFoImywBSeIHrMq1FXqc314nr6SgVu8mywZAVvW1EW3iUTShFAttfhgIz5IiSgdeAtBdPHs0bLZd+p5OPjXjiulOLphXrIJMw3X8u8wnlQeInWZ6xWIgt2RC/sRDHlY60I4RL5DWDoVFV7IexYMTc2eDz5wycHtLQq2qkrhuFVnUKOdka7KOPTfM6qkQMfX0bAiZayQbtI6YWKU2NPEtePKwZv8JltIDJ1LBCrtezlMTELEgauEIXo5jkBKrvZomyg8JG/3oYFa7ILgf7YOeYnDjcc9jggn7lr8/UIul2puUwz6uVIMA63aFriJMc1/dtTtygPKd63rRzWniKVfdiiy0DhBg8uWZSvHwXdqurk67qh+hQbPWgSef3RYh4InvaTSmZIy6bWi4q9Q/UFRvMlU5e/8aVzlDg6vKIAQPn12S9Fx580zx1Q2Vy4h5Tmvc5VL0M8j9/gVYIEy57nqDd5Zju1WtX9yPqoorbST5fBbFSCBl8cZKcdnuBAMrH6pNYQXDHdtw3tIyi1+utiYqUWcQF1qPozlkaC1GIlkLiZHlTPNFbolhE5sIG8oKf6kpXkoBrDLAapkHcfsRhOatrr7bZpuJV+6A148eyi+lZI69KZMw3n8EmIK/ujuF6Bb/Ii7BWmZf78KtDC8md7BVOR0bPgVRdzbX7QtA1fMjHUTracMifN707DrxahfRwQs6/jGqnGzZaXEnq45QoLFkKpremzFSi2vmh5SkbGf+pm8FSrlytrCHbILNWGOFpvbD33sw3jZ+9aKmJEjVekfEnwfmoMKOURAx3VlUqXqU7Ppnurl1s+6DGdOaSxBtZYER4Btc0YoQFdBwohKEXKeIcn/JnVoGyW3LVhNBX9M9aFU5Sb3GW2T/9ckjdpOtSoCTpv0ihiAMttkwpQ=';const _IH='49db486c0e43a8ddaafb476583c73b29743572e144d5f56669be2b1e6f947d78';let _src;

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
