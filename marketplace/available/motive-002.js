// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:05 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ55Xo2VO9m6y9zVmj+e/l8KJSRenlfZPviS82fW5NoZKuLhVf5xGx3JZyY7lb55dsoIX7A6LshOsuyv+bE9gXlgNYkd9hTfBEWrhrkXp0pfts2wc9QJ06zdNBcRKkW17sBEtzEzCmv//AZ3hr6Nbf549Vx9tZQYuBS2i9EfQkUBZQXQI7dvJpvQ5Uwqa20rzMoCCB9AM05L60GESQVx7jcjzsk4bxchs/mhfxKtzlBbFvT1CRUbGOhILvP4RCR3qA6pPHDtPJATS7x/i/kcd3k+E13AxxrxkDIn+Mq6iPTqoKx855TMWLP4fbSGOl4GL40PcTuk21k0cFeoGGRZQVWuoDV54hgsjbyUCsmvHODf4KcL8fjuTXK7oKDbJfoQ3A+46qBe6dj0seoca/Zddmfb2vE3xJdcWqod3RyGB8N64MTUzVHOxkpCXcl119fk8aNRAY0g1AfNyOVpcojZVLSOXyQLbqutfTm+rX5xDVdWk2g2TmriGjb5d0xdLzzXHLo6XcAzIQaKKmeKsVYBFXt6K29lkJJNH1hs3JIb1EYNqPL1AVL8QC0JlSy4MrwfEHBy03U+JpYalg6W0+aO/C8Zpq+Jn/C6IILCx9k0ubh8i3b9xhFNpQ7wav/Q3Qp/TZ+oAtYrOa3EbXyYjZyRZ9pjgaBvsBi0bhBQ3DjbX6gsn/STGJ8O4K86ILL8PBKZ/neX6u+JAdWM/g1XH5nLxL4HDda9i9SmfsmSPzm+cmBn3Ex8C45cGhkclbQ2oA1LJhgrhutoaZV7xbq0xPahSwnzjSAL05u0U+2Iel4gp0LOXEj5d5ver3/9/mi9DHjmxtUUKQI7cFZ0XkkRzUk3c2V11kzwKHQiMj8OvuP0Jm6mkjs+JurCa7VYCtzkaQ06z0m5j9IXoTUQcBlc6yX/96J1e6Kbndjng6TK0Y/xkkYxiX1genbuLnvYQIgxa0Bubz6gbVWlYJko82bh1iXWD1Qqgvq1qEFjN+Fx2NW0mURbK9jz9qCabo385/APgX7S/PciNgs8xHIuCSodgedpn';const _IH='b92900daf96951470e602e4dd48a9bc38b0657fe21a49462b75a4d7d53ebfba8';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
