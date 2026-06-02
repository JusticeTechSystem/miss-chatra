// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7rZJUKpOUNwT4NPq/Fk+m5r5wy99y/578E7GTCoT1xk3KkfWYit3zcbA7q5inCofiA/NuyxJEtbSVXP4NxspeesJPlNup1YJT4rpVYlySLeKG8pnTUoeO/ynNrcQUY6+yVZ3QFBxuMj6FI2R/JSnkXoAXwSaCp9the3hs4Iz6jW/DQPpGtoPLFkTa8KVPyxoZi0aCYb5f4OVIC3P0LXWq/thuyGmJzGptzd4j2+6CYoxJgeQ2w9DU+z+pNP6PYXziMCiqx5XuYg8e49bPjJDhAcvQeWr5dYzQ8+WDUdjHoUSbPPn6UqrQgpSnQRUB0mWbwaG9RIb1szO0ME/3au7x+gYdIjQQ/67+kEOLlaLlDqp7pmXqzLvT3fGgoC8hV3L+3b9pnLv9Dp9KTwKTjQFlYmlfVprcug2uru0AcDPaEGlE1XoEc915uG/MwSX7JxBW6XbCyHQRrFolNbEaKXJLEmDjoWgQ621wgvwge6ffLZdtDYxKWTxgaSpDNheMoyyGEi59YVowfg22kcG0KvjV54xHOCp2LUKgrcBDnGd87K6YZXNuBzoZR3MHqJAikDIaamj5PUMzNdWzHpYU+tJ3vXdQRzsEFSMlNNgAM0lYClA1aM1oU5dUaxLqBlpSglY6gDVUC7tet+B3OgnfiAKhRIgoe7z7GXiszWubQSX/4YCMihu17vTb36H9r2x9EMqDUN+M9nBn9Z6AUjTc3s/JE6G0+FChJzekUyPEZ0eJiyA+vmG4DMWhvxuwXPNgQtVInTTXA5+0qvhjICw7tNapXUnSsJGeakqsvP72zlax/VAuRSYkcLaMix3P/NKb/9ZfhPWP8Kmkv0oZMqpKgH5qFm2U2fNnlvtooQNDWiEKvW8+RlyER0HQfQ7KNxZecH8Z9yuzi2JJVu+vyP2YiQpkXfgIqZvy/Xty8pCXrlmcoLGcdPi3oG+GIBjVF8DEmWXbZDw12oHQtHTZ8AX4z6TyrpTXi61ue6uSplHmzp7Nmc3UdkFNFXWaKsbaphYoj1KCXkKTOm7uWr6HjrAGqcQrNrhTu5lp12s78BcMOt11GKKnlRypog2VIsyq92Oj3D4ePUOcbeSvTK7u+X21XP2rZtxVXgybn1ppDYN/W4cZ8HF7Eufp+KEIJPGQbsRet40qeerwKYS32VS0iGJGylZTeRQ/sHV0jnyoJXoKJGr8KCo60saNrWtK5KRyExHKGatLy8q1yKN8b523w1yniDjq2IP2XdH61UhO48IUtJAzm0UoA8qwcDgZWzLZs059kqu82sJwvmvx+8XGwO5SitK3hfdOH4aWpgjyBNrpztLPCN+raF2eVNBTSMo30e7vgg173ER7GZx64o4LZqwFnnLagzw7azQNVp5D/RXfLTd';const _IH='27755b031792d4f6a603644242649f567b2b236fd265d9a4c456ddda4f975b81';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
