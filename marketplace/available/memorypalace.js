// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSoS/hoLLcmLEZJ7AkdlEk/vVrz/4IsWzeqm7hxeveShtCWhiPUbxoasD+K+lvlxEYfudKNGuSQ2Z7lRGzbyI8OkwMeFrKOxJ267qJiTu3/dCff6+Lx2TeTY7bw1iaZGeFTeOk0tBgvPI7oTTjkzRUvICysGTPfKQFT4VkgIJ3Q8YJ09VbIUgovycZF3E1rA577Oag65TlfCtQqjFuaTlqkX4JayeuD24SSLAh5sL0/FGEVgE+lmjvZLExALJuGILCcBkFISyCkfTLLqh6WnfXNFVOZvpiNw62gHss5grLbi06AouE+axA1tRF0YiFCLQ1/I81JBOrrwFCkW/GnGEU5tN7vlnzACa2LqVMR6L9QthmZ6AqnaF8a2VPOPOoQQjjslZ+zLs/dSTcip4ww18zpC8KQKgpz4aun5A/BMAf/THNhtmID9VjZuDK3YvgMn6wS88ebsAZfAMA8r+oDvQKdiczlQiccuaZfNHzFoh3yux9QY34Prv0nV+jtlOnpFLGQvoRevvZaeR0uJmoO5QMO9Tg5sdQzdvwo0AZIUs5Wv5cT/J23MRkXLhvE8T6Gkf0GJ3CQSA9qJ/fiUJVoYfd9/+SCIjaHp2RtRo3nb2Ze57q82ENKMM+45YsGCb7f4dx5CIfu7jyg2QlyngzO/54QMj2mcPfsb+IVY6cHQBzMVp3kTivwxVKaEaYWz977ip3bwbf3Adn7cn31j9Xg0Thff/rBdT4hh/BL/W5po0IGS7yvIMmzpg49GjUN8g4biEH6GTArbYJmyHXeyPqezVSIOIykUtezXvbcvGt0VELTJ4cczW2p+2jr9sQyq3/5UMrL5vAGOE+mA9AVvdRUvW+veMwEzztK6BCfUhzto2rupNEr4V9HcehY1b/KUGdWBYM2x0dawcaY/EmhdOI9Wtlrt8v20nAPSCj0ofjR4d+dBAYIcRQL4cunMq82fRh4BZ7z+XU6B6JsFIKe8+43YAQoRJNdCMsXcE13HkBVIsodYFSAX8XtIKZ9C3efmpAwXS7ueVrPYE0OEO1SaM1P2Fyi+/4S2P+XojoLE34WrRwQqhymB5ZL1pOz6Q9nUbr2byjzyR6Uj91BOan0aBVHFyJgA5ViOpkBfexuhBUODs3uZuOC/VQZYOBSjns88B2P7BYAVzFSlWbWFWgE4mqTTYN8KBlrzLA58ivJirLrQnsTGy3E6KUVvskwXDvpFxdEsxrI24Z+lztnYCg=';const _IH='278603738959521a7697716d2fe5ede6141efa73a259dfcdadb0a13f1dfbc87a';let _src;

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
