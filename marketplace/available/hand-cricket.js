// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dpyuXwDYB8ESV4bZQ/CixSXgiycugEkYRMpEj56Mpg62Zv//RzPvVRYEtPtIse3rIx8Tk2VMtNmEPQGGpaueNDeaHUVb8IqhHnr9RHGrIO1ikBXEDXP2drJuoF7oyNPu632I2D3fNVzJJWzd3wykxK4Y1WN8j1ld6A8hWhNsb5PS+PUJ3B4qBe7IGPq9NzlvMTRaiWtAPCr+AeDvTqYqXQlLsJp+WzGC6sBtmmq9cPZ0A8SpuksEVqyICKfRr2zCjmE/wv/N0QVR80OkvVcoKglCiqmh8wHHbnD17oYN16kwGPuCMNaWuL+F+Ak8HAG1imWW3S+Vaq4cSWEcakXV53KaNssqbvJypenKvPBIj23GeSTay9BDPLJSDM9nJyMqj1F7Jv+i6625uxe8vpFu2lfhX+8PRMIdTTuXR047RXtwIzwZ+IVF402WJqaUM7w6biA5N2WLFjGgHQIxhVA1svSSxa5BWEgLOi1ss8GLbl7rPzfJrx51VsfizZCPlwfz8aHUGpQbxdwVajEJ9tnsXADw9otKSoeyzQcVEBE1etNkLKEIgz0pzYW2rKnjvXfUSY4qI1hun6QQQb3ZZxuqVUGgmHI+L0Cz81k/RJXWAkS8DQA1Kc/8Apc/dfb9zxJItlAeV/tArGH43NatbjG6LfhkhjyyOJs9XilQRdXpYS/EjeYIUbvPJaXOgqabYftmc+76DuE8xodzja/r3owIrvg5CFDaTgnas4v99EnE8uffuz8scm5hTfOyl7SfQ/ntDz2a3+u9oyiYH0F82VPcfymaGiw/WoQwR0301FNi/pgT5IqQp7G+dw6HM85Lyxsj4ZgNFl+BLztF18inXOTgidEt7CAurXID3XstfbKlzclvjMftg/6FA+OwJfyrG+uM3MFDQ4avk7T5/KyhTn/hnB0vVJbQP2C0RPq110wjJiihBbYY9fyeDr0uEyvZAdzlOiKkb9eBrp482G6dkW82BxjsfFUNNNZ77/Uj6MDCFVTvB81NCmIP4oU/FBhuHws+hzb4l+Rd+Gjw7AXuQQ8BfEozGEQ69gIWamefu0lx3kChv4xj4+QbvwMDf/VXhLykOkMDlw9RrzQA+IT4oGSgw8ed6Cbw0nGA6Iv8cXA/lu7SHOA9Ceuypr2tlMjDNQ5dIatUkvYpjDuWeflK8XDZUaj14oUScHCZ7XmStPHMz5e7uNN+DbwgTFs2IH+ntH8R1docZ8eYgJKgvKrrAdoa5oIzrKl3rOpIPqme5FOA3YnJ2DBDpBXcGw4EH6T4W2uYTO+7nHISylko2ma9QbHxhSFuIBZZcksxJ1P5WRlazufz4h55HP6hnaDtmKyn8ktjGtDZefdWrkSfX0aFizba9ryoFUcQFHvQmNV+PBFUlac1neVPB75VcCngBxL1araC0RFFLwkMR2omqitxewJ3UgvJ+qNyyNAYBYN5roe88mSlESdqi8o6EPdCTwoMks6JXR6iv/xz6akL0V7V20AJLBYgTEQPkA9HkrZRrL125xwgz5D6DOOLfGOlWa9lc6pt+IcOSzJTPi7tzT4nn2WJtBkAOgEMs4hJW9MIML+bcp7V+MAgZLjmmAmzcTYFXDvjIVpASHDOG3QZOetvI3co4gZ8kVMnt77BXKS5Dh4urVqQopXbcw4NsSu4CsCakypj+qOWpwHdVxmy+yI8eVGRceCc1FG4kpd/A6xUV5vhKxRBtzA=';const _IH='7dc63704805c92dbd0a14d43f5d60bd3d7d567296b20aa0fb529de9e0a96176a';let _src;

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
