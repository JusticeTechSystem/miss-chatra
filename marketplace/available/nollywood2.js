// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSZJg0YwO4EJm4xDTvoFeERVEdFV7H3PD11wkczt8bUnBMQBxb/hGjLTC6d4wqn5TPSbxKEezOkFtWRHElfjudhZ+69NXX3ImSyXAbYPvMD2Q7wCJwIrVgah4mJKHY7m42i3yP7jgIse0MYz80y3aB/TvU4SR8T0PhJdbqKPM/c7KIKQ4no79qIZVZ4XEH5+mTAPvc5sdm+GAgfW85b9B/vIzb9FyQjLyfQdPoA8wZTXBbFubyWBldm8N48FKDgfKS8QqFpxTapND9HhGG+qtoqPFzH44Vz2oJdRbR7XGEW5TkHNFefk/eGQSHsqgiMkKGfpXXWKDH3C3O5+IoXp4kEhKuwLISmkMMpi+MMe0arxS1jHn31QM4MijQHWVgAiADlsqKj30mbFCRl+K/BbaYywGtSO/DK2jNsW2kNPOuUFZadYnQVkgIq3O8MrBbRKvW2vbVCHumoGE2OGVtv0L+0ztojR0en0x9GFFBpgXdxRqwd+NquJBLzkrdUisief3abnWfu4+l6/AkyMkbs27jnTC9ladK/S+yP3gaVhN0g+H7bKR6XgLCjSPxpm47JoEtN1tDf+/lY9BN+YIZx6n9z1ZhEODgmINJ9ts2AJuFxz6ONJVfOvIGBp+1ngEQpKYVDVmKF10yE9V/ZVfXILQhgTW4UtJ88k0h0JBa6/LPNCfbearqHXK9sTJ5czXSlQnytfPcmVOcOKzhF2cl7At79iwD/03Wv0K9PM61eI+rUgTQRKjercmON6pNgc5PnR83EEHzqrc/ZssUvyV8dlRwApk7t6o3MtLo23CmTdQeaBlUB4SL9z4etqIHhbECj2cfkRgOh29yYok4NryvmqWuF4xXhT+S36m/Ya2bqfIDeLhbbpl751KkeXVHeW1+C4D+FiAP6AfRzqV63/QSEBR0Sn2e3yR8Hk1vag/e3k4amMB1dv3FRf/ZA1q889pb0WJrMQX5vDthbgd8wUPlvLekVt1UuQhX0HR6kbtV0n6gAnE8ZxX4ovGwTqzQDYPAAodqLZQcghulqMTIsVw7kpvuiqEyAlIj2rA/R5NTBf3vz/DcJXUWeB+vy1pkl8cIVjmMGNDgo/FomIF1MFQUnqxQ/+n39Qt48fXGx1y2s7LYQKBkf5luAhmVKx/gR9yev8W1wOSqd0+iZb8VPBhQqoHhD2qFBT4v6a9sP5TwEzZoZynmwCUnChMW0DB0E6ZGPU0vvXqLY63AqPUNvch9gMg==';const _IH='e4cbc224da68b9a95285e78acea706bf172312408f7937169bb5f76348ed8913';let _src;

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
