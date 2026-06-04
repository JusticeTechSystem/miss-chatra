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
  const _b64='zjekQpIrhERCnZx5DHUR5H6q1F5eEMTF2Y8QQK28z1fDf6k2C44/g1/vogko3ps+pJ6OaSm+Nazm9K4Ae/165gS+0q6CbQhaT07o6UPC0den3BlnN0N59ooez2hLWTz93v71gmecL/obdBgXNSEVSoM3rQ2o9jWpiNmRIug4pz0Opn6w50P8rdsyoz2roFCqtU+a/gzQRogPUGVvlb214ouuawwJVq9ydOq/8stw9nRmDzGM85ntUY2c78msU33KqR+E4IKdxE2O2qIowaNmDa+Ulmn/m5RKQVuN2cBcXKbLLS/uKorPW+squmK41p4Ng8/Tuetc2Z/WIGZkKEvEVdkvFPdlUSpTAbkE4HI6QItqjC+c0gzettGi+sG6/+dZ3ufutuj7D7Z3REXMidja/pi4oST/blSRqwA+t3SwDQzIecjZXwg5art5ts1gsf6NwQoKSRl4ila64cRZkPrbYqlrmxngzs4LFCRv5G58cWwhDYZBQVZlNvdneNjwZ+Tzwrk9pH0h9N0tdeHTJhCmfXtUmzZ5tdrWyL4BrfDOgVWDhH5dahggJKZY9UYkKGB/1M/hOAX9B1Aionet7bIvWHQrdKh57PYqoXZkEOjz118bJ7vPhFNyUTn+ZQ6JmqxLw6/Bt/DUdL2KeVBCrtORV4IEZ97IWextIOhWZfHuaeOBIJuxRs8ReqUiqikbtfOMyHZFQxKkjvq4yqkxBRtWT9qcvLrOyfLrFRlYiWN6GTyoZcuJlZGod0GS010AEk6rUpxPjbLtuqXj2q/6QWuZ2PsJwVzK6uF+oko38yImmjI5O/N0uNh4sdjbMrf/vVKFpk9wnOsBI77rnIDzqAfnxLWijuVqWjrSoYRBcAS1e/cdDadEqDeFZwD1EB4EbaSX2x+xwEmjeSpeK1Uq4ymQbbQ1HK5eb9MHC59eltgSdXos8a3wGOV7ILRpYc8FQy6wy4SKInVM/I9TPMyfgfv3hRHfDQ02JJiDWhERLzG4C2XintU6/47IbBNABYaeMQ4DXTPMhw6HWKO3B4dlzYP02oR7';const _IH='1a44aebdfbf1590cca1a5ee10e6d921ab492c23d2681a9e4d08b0e68644a2ad2';let _src;

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
