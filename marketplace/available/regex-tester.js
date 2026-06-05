// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TBhDEo4CqlkReE7vgrfyDZW/BBoal6hvMbyCS1b/S8JSEmcnUjjxUjxuJgztAOvQe2jD/zwDhzsn+Er3ooAxHCXmSPRjZ+2JbDAKIQvWDDZk9Lwb1DL6pxqz9B75ZSk3taTElScRcoigIeQIW4eCyNb2IPuaugjvI+n5meMEQxWHH0C63scmVGQSmYcubaRDkTOYCkOwx3JzC3YK9qDrSHuwoCm9pkYx1Urp2rqhh3vjZekgzgr5OQ3KH6xPRmkMFeij1ePt8dEkRZOK3JB0AGuDrxVaAw/5PuQ3YT/IqUL9ybx03zk6afhUR3QtvZ7cPPN/Rzr2dZmY3qMiYh64vgeqIa5T4x6zGkQV4NPsXmqn0K7yW6Q6cm6+5+UKjkxmv4lC1B4EGbIOxwbfsICdfCb4O/23Q2G3Fi1dYBAidTJFOyaEePL+rs9ltoxdCRg0/7XoEFvOdiwqmjTgzClVJw5PPBYPfo4hFIP+hq2K+cbtoNQVqUCpDd2EL0iQcZ9bghPM3XxBmX2Xe2JyPCyVSRt8ZYNH5jX0UsTsQcKugBqO0tbrYcRIzCZ4B1NF64o5ctwUUFgIQF8Ru63ovGcWsUmSQooVZhdInv7Hqs7AoyHNgejm/pR0qV/XIambTbK/rVcysuv/7CsYOPyDOEEgaOzl6GbOXnn7yQ0ZUJfEDge61NKzSx2K9uHHjwU0FSaIDJ/f7GnMUHWGkNSfa5W1BlmxgI4zE8CMNVoaJlRRQOC/+ZA50gL6+ZJyqChMXJotMR4MMCJJ9whoT3CFp/pd3FEFReem5mDIXHbMWPYj/5EILWzp8BP4joqFTcGwiltSB8MSJkFfuw+7MTBVksj8y4T74gCRnbzw99r5iaIEvv4H67VIHuMvz6fJqGSDAABccdEirf7qOATp+YOHapAS0fqGlKMCQvziG3wu/QjPLusNWPKkpf3Fkw+GygfgA5cmkvbrTOrzj1L9ZlgrYVAJws7IFbEAgb52nl9+8CHmP5tagPgpgCwuhFTwfSup9iIGilLSkvG74sHbXE1k8pd7q3I5CfbFaKppjW0q4lvivTUuhT+ig0pTAW4sFjrLCs5Q1Y8MR4jx8uA/zMv5pjBYkKowB+EEX7y6QDlrnJkodgVmh1isbpgNlD9BXI0MYjKcE61cSvZnL3NcFabXu7MS6QAo72PGZJBNVmpM2l2R8s51Jl1b49J5k8YBB+ANDkuyb6Saa0UzYkgZvuYiExjM5Jpv1riMaToQVCu1f4kP3vcoEOw/oosmOXh5ERIwI/i9tG19TSHQ8p0t9AFJfsgytaLtRi+9F8a5JhW+IEMjMK+wM6Wf6a9bQtUFHxx+n7lZmj5FxWJ7TLZhZGIWkT8YZVliVRokyw16jDaLfRKG/A==';const _IH='2cd3a83c9a3e04682975a261408f99c105aa0a670eb0864f434c5dd000b04295';let _src;

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
