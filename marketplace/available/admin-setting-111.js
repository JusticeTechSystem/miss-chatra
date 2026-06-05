// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bLJw1PqAYrfus9hTgjjcyIQf2Q/7CwTKULk2r2b2uL+HEweVkwxgcbCykMzY8lqdxb4yV0EBnOnnj/D9p6u5bXE5vvDUWpYq5gv09LReYYNXRNvu6HdcyleELGRU96V42GnlJtZhAI+TYHj1CsaeGomstRZ1x/DIrwKcRH+tOvTSuX8o2uwuIUuOinwCO8ZJdsh2ccOw4z+yO5oKP2Vqc7nURL+3ddV87fu11oBfGZYAwYRKlJRPOEdMYka4lPjfqdz4X6oIqOB2w/GQZe28vtCWPsnSK/OPFmf0suqE9Pmr1YR9iDltQQjBUYExADhBDur3NskXZlBdkRYdBciMOU73Fi65S5cv0xtNLGhVxu5MRfmJDZLe8BP8w4UrqWsmXV59Bnxhax1ocY/0CevI6PClUi3X80cjE84MLEUvp/qfKaZ5mlLRVci49zU6g8gvM1VxzQoIMV/7xAnAK4yBe4WBooEGAprBuSTt+nLx1+I+gwPJStIzZR2/a2xGQZvfMqnGTBpyLsHxz5MUueJ5uKjIcQla5jq3YI0+AofLi8TNea5tdIbrp0ixolKZUbBnhU/YjVmh8+4Qrbd96F4AEULgYVsHT9UxwCIcsZ+TNnrS6Vz7ihIxV6utjrD6VjzAEN521w8lBnKBFo7/bm28256EbDEfrZIIOU6Q2bE+TFCjjQLvZgBEg2u+mrDDl72IWov9FhEFVasON3nmiGB73gmDvMaxfnQ8uGG2ZVh+kOlcDQQ8hMQzs6hUNpYJyurd6Mat206SaqyV6a1ZqikBuppG86wtpPU4M2I/uHrapTZgb2/dMvjF3EZNbx9EGVK6mUZJTMTUXLz7nht3PdrInRDtHF+4xfnrIH4o7wYQiKxk4f7WMBJMc4qCV9jLUNUWPhI7v8f9/2ZdQACKTGx8xRf0ScMmQcgxgddIzyYiHElYJYrYmanDgEeezxMQm6ml7Nq9a/v58iNpT1FFaTz+jK/MiJLt+qOs33DJee0IvatZbdvhIdWB0eIv2/OfS/Gg+C9niHpUSbg=';const _IH='cbede50501c5ab0a46e3d3551056058b313b5775ce562c347dd749e04f888cff';let _src;

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
