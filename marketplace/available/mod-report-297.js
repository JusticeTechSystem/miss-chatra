// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQsk2qd0DxXGYfBBlGZ/iSxQZjr1xefsQivd6H7F3K5LZ2pILofZs84/o/6/RvuB4mXxqPIwBWXdwabjhrl094SE+vK9BQD8Z8sseiRSeMga+710Sk5FxE9Sr0YgRrW01hqmj6SdWoAOTirWYksheTXuXWwTA8GCjg6cYS41ga9fuQuVlUKaGsy41xrT6cZ9CGg9TW9JwbHnpzk0QR6sUq7jNLlM1NGNMwHpn9lVqwxlVO6w86Z2YexYtGw2z6VTjmHQW+Np21Ttoc6zAUHQOl0pqrQyuj3xvhirKV/pPOnWIvY9vmR12Hv7tplxxG+RkERc2dm/+xbxR03pavV6XMHne5t6xLg/a5kJNBCipum6neasSkIUnjZqfzpFPif7Mx+RC3ii3ClDkCBWNWkkLISOQHRrGdkGj7hIrBND22e2KF5qiMnl8MlL4J1dmIHJgPkbkOugkkAj6aGnGLf1YBzwMFeBI8ic8TdY3xd9wiTsL8r7QqsA9EJkupTu8tkCMkNYwT5Hv9qWfe5OKPIkGzNpYcTJxodC+bZw2/bRS2KY41aQWMhDCeZQsqFObUQxHnzN8jDEyYKJsjIKWnvhbXbfx+VVNGzUev0rBw1eiU7VnWVnpSJnvtgIBQbwZCvTjy0E8lrBcZIu7t+4nAv8nlic0pF0BADJgy6JKSfQd2W4IhDEYnRY+fbKXJ2GprevihNs1QzHy/n/+hvAFrHVuaDaANvAxdp5844NZx7OOZFGirzaRDpXlvwi5YGI4t2fCmwVXUu4GVGnGjl54Yx7HIrgcJz37K51jgyqnAQuvCneWwL3DwOZDQYZ3cfsE2gLybhdAB8uvsC4yrau7tF9MZ4qJAWR12BZ89reuSclDV7Jec9u1q4Xgs3p5yJg5qLWKkEv3cMPsO6oDhYZx5sxZHeWnXuF7JcBrmNUmjy00F5N9gWlgxKqOOCEE0S+KeFDipXJ9woe0Ouus3zMQz71psocL7Wbonbam3ArR49Gy8gontR720bqt0w2k3zDhG8/4sdRXivx05/InbkHZwuTH7iPFNcXp+ungA358pZwVY9Hc+rOnnlnviJfQYWSVHKBRWIH70iJMIwyAckZh3bSE/4lm88b3+q9wwwToP/pVbshkBNVviMA5ViH++KBx76Yv1BJKWt2cqXjM+Wx83hxLmvt3bMJ3LxWgNT4sn0j9t+IGWpQckLv8LTwrgmdVkCwSyQMDQymswM9s8Yr/WCFfJgK0qOJkg4vKVa0UDZ8pqeaitgvO2H6wU0B+fm8ppDf0v/widiILmN0ohSrUJ/HnklFfe4QqkFoEsijOH9rh44X9Mhk+LS1XZwtoZw5QnEuo3Y/RGMEroEmPv54v8AE0nvX5qzzYMkFvYz6qvqQefKggcRZnsgRwKy';const _IH='bf100df5ae78370c7cc9cab180f9ac70eb9f4a0d86e4e1619b4783fa5b19e5e9';let _src;

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
