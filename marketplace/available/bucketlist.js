// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wmDfGUsgJvel0cRWZJZK76KfQHgVkXcHQfAVCPd3a7HetOY7kyVNh0yZ7L6XVbKXBpN2EZFHbsUwnPXV41pc4XDnxCJyS6Z2s0m1B45hmz5EyczMJUHtmp6G2NnWGZItJaIW0Tr8EmjfudLNDGwo7Jodl4DThbsZKbZVDlbnHrvcQnyfEJaLDbqvbqCYU9/IugdGaRznr0wZHCSyyo957GkNr9qgc/GuNWUJSDt8Fmd5dK9D1FYsehBkFCartj2QEMJ1WJyOdci9+3CngL+TnisxMJy5vVgtn9lGXZvqCi/xnYylofT+/mUxVZ4GWCCZ1pvVZ1ceoTxltI3tvTLKJhBwWcpPJn00ezLbhgdWUlwkXwwsoMBqiJWlbGOiTOwJaCC5eU1YZi1nWURvJs6IygWYEwmTULm3n57sOKggrOl9s8QrRbn2FkAuD2Rulb2v1z/cxZ4xaSR6SoKrm7OR6L/xwHGgJgrETRsXYOCurKZM+HRUbCYwdRjEk3U4d8GF5ZMdMmHLu6Fi4gB4onmXnVdc/6i3WzFVKXiMAELeVgasEAc9g+nyo+LbbH1it0s9J5keZhC6+WpfyD9Cd26AzmaJfofCz9CX/IqhpaAae42AhtvhGDCtYOrDtV8IeZaRUrtsXNyVApzo8aO1pDlAaInhY3xacckYZgG5e08L/36XHLvxOTRnWrMW8FhPUeGnc2eJrHYcBYMu8gLViQnXsjBPRQ7D+qFRJ/QS1Na5+OA2HrovyoOQl8Lmty0ZuxoX1h6ioTSbExIJ59eQ1wfiDnmxsh8mHLq7WggehdHXemn1lcpkFAa7zPQ34N/KMYysYdD4Ed/v3wtXtlS9kQx6aIFZ3ITICtEvnp6Nf8hTZpjqMThDvFORZYjVLAWmEr4fgVW0GMpBL0fyEsoJSuuZRtBGPhixPXSZxwdkFBfwOS5SDq9jHVINrwGoyEO5sVzy8UZjSDNUV1myfbetelbIKU5UATktBWXf81DzXrDMVD0CqUtQp09Ws8/y0AwurhwbX62YOR1aZNTXxZpjmnMJryU4IHemsC3kGbbktg1qCLEDLy81VBTr3aYuu5pYGk5pni8PNtkncdFTui8DMxltyyNShVvWj/CQ2Hjnhd23B3VDHP6p2rXmUklQ6RY3YFgtHowd6kt+5CO0Sos6wWFU7mrOFAda5baI5Ye0ii6imdZ/RWHXX/mN+goj+io9p9/mO2qjVS65CQ==';const _IH='f667829f8eadc666e5af50dbc0fd4d9a4bcc36888bafb9be74fe1d6d29310d76';let _src;

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
