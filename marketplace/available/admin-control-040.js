// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ISEfBmnblo3yFEjH7JumbNKVc1sn+6Jw/GOSFr60YiOpNWWdBnIK8XZ0am35y7rX/LC4ThnEapcEuV3ssFoGCqA8lFXKuXOils0pB6gb56uH0w/Hu+x3XTKuv++MNX2k3hb4OP2qZg2R2R4wHUauYo52BbOn1tL5xaqWqO9amsgIpneg9EgttsV0arKrgjWq/U7yFgo6NeBXZYltnZlGV7vdj0kyPpaF/E7EUEIt6WrFMKEA56BrCgWjOrX3vJEqrKb0V7vJtRVBbKzrq4+WdD9DUqdTQZF967xVuXu++wErss1WPSYRqA5KZkCJkOeQtOeCD5em1f6EMsoh3JvcpTahF3RyOO0lQ1pLDfqtrBSnKWx9GwgqoVj1ZNQu+VRzQf2n3u9Qwh2iMpKprmcVg/zYA8kQMIITKPX2djuREdH7cHyYw/XnmeXMeUu3f/N96eO/sL5XUps/woWz52jYeGQ9PRou4ag1/klrdQJBWWyvO9v2V9JLuUBqy80RKkPoVYvx+ImCUdbTY6xKrhaJrlJS91+PLLi/lKluC8MM1EMBgi4NOKOcMQa3ZhAMe+n0ldCikWkusXljN+KiUtf8WVp7RxNT4joO8bIAM3dQfr9ficmwIzw2Dp8C+nR4E8YC/NkBkSv2TGZaH6Djozb5rqyP5Eu11mpeUVCaZMXlZdKknmA/m/fkIunGfNZpNSms9aK892G4OVS3xrfeaD1GBmXuShMG/k+b6rymU5oVkRpHLjnDBZWgIVKJhszwGluPwM+qr/PJZ5g+C3XbiBF7OUyMBnbXBv+MDz59yCYDD2j1uFPITCjCZcUrIOJDtI6LTS4gdGF0q4ylfKB/ZXj5AI3voskm8OSG9UNm2Fg9wIxYLh005aAlvPbZrpIO+rv7O9Fa1ggr/6dyf6i+ZkurZpBCtVVZUreKu2wMQTjHxE30XzgG4puweHuwR8bvkE//94mqGmppb1RhHFGbSIpUi9GOXaV2yMjv8Ne12+hua+UXGRzVWtI2EXVPklKt1nbS4+780A==';const _IH='bc827ea730a04c1a159bf3084f2a59cba56bfac77e8c27f17b182e925013ca6a';let _src;

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
