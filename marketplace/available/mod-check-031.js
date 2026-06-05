// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nTVX/Tr+Z8mM7A+a0d5r1Im0lKBLhjFlNIXW9pozoYlXXeLAz94fZgKooN3/mgVhpkzsTqViPYAmQ+8q3C9jB2Jjh/8bYhWOipv3WF+jzVFCCcfiXInT0eWrXf7ih2xNyLQkKuhoM/zCdfkXpAqmHoDu/RQ7VOL/uOu5zZqiPNwWa8QPU8B7i09Ga1/K0ChpLXmkuyQ0WGkxU4GK37M4lI5g4938ddQ5LUU5E9n564O4ayt/CVfySbN311+le1SC2t0qgd+m0eA/W0wMmLp77Ko824iyaVqZetkeAKEnL6g2ewVmHSjcwaIkJqoYb7CsN40P9NLpgk0AIaSo26PMsNBUpVo506Trm8A1lPvYRuLFw1uuURnuXjzLEO8H3ezkyMRQu2xfJTaEKyx6n0mOujfCgrd4ojA5xb1E9FViCBjitESsPMyhwlgFl093qLpfQGDCK6D44upmEd3AzDgrkrg7AJ8NRTd61ZRbjQEUiocDkrDv9Zu+ZB0UzU7Lz+KKsBkYoy7ou9tqkRUaDla+NYt7t5iZOENuuOzuilQd93eCLZWp0YtMISiu3mt6/KEPAgFHATkW0F96grKzES1JjTcJKrn2/LWj1/GJaFJnB02q3q+CYxyzxhdwoBSiEwAtX8ETScd6cMVefNTm9Z2JG6R8wRTCHTX6HnESM/ZFoih8eqcXNIOBf13YQPjKKIvtAYIA8aSIBtXfjy4SwPxK+gwmQEadT8ctGh75nEzaYA8rZcFNpRgRN+QS3mdifK7yJS+PIDcABObhfr4sh4WqhOf0dh/jZ0zdw5RXxxuFjiT1BVB/lrtEhlna1GDaWiAdBq2G7o857LhVHowT5qbBaFV4jSfTOOOYbKcES/c3g98VmJskfBiZ/KhDVWLxhhB8AdJSKcLK25y+oth5HSr4k/6RKJOTpHfEzpkVc6poNeaFsF++6fEp8ABkEe9AKI55HJeLM4LCcMDPW9ylIvEr7j495iDbDdbIwC1X4UKi1biKjqPp7clIVokWplEGyFMtb9hugys3VnKzTa327iopk1EMK1NsZMNjKUeF/MLaAN8Ctmjnw0lcOSjv8XB9W+C4TIn2sdQN4+euIuqWMRWIk7K/zUO6A1CmG5DJP+eUEFqQpYpTAGUOE2byqu5EQ8xUKp4hf+8kLOIdMS8nW5+jnY42YQyEghxXGpOEsHOMJh7HJKahSOCsYSyjd4WqkHQCfeJER0HBZlwRAdMvmuK+vxzg+5IuFgDrciyu/YS0VNompQaFfX12hwVPsAVwcRPx5/kB+vZyRcdSbHf3VoeJUH6i/hwzc//dSKPTaszHJu5F54kteebEk6raQv/1dYy5nm/hOQjUBRzbhBp8exPrvEiwR+xVqKZp1w==';const _IH='766fb8ada4af5d0551792358939db727094531b033926a9c51c700adad077184';let _src;

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
