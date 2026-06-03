// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zyjdGNiu/clMH/+CZ5MxsxF03PS3Fwjuz4kXmDb+yNyu/P/JxiaOeKRQnHQFBY/7iCgzj+UiAAj6Utz3IIX65j6gmhN4ujk1o1DBHdi7BdLccQz8CZDgtuVxArXwKsjFgPXw2jlYJwiJEj8dyorDhWRzOlxTfsCQqcjr2jmquhLfHoQb7Mh25msW/1lSfht5Dol/nbVc+PXuIM2RilhXA8zi+X/FvtPHAQpiGlLVPw87HIknVsNWutAR04uE9ufwoR8TYPW3br6PvknphVYdYcRPfNPRTYeI+5RMeM1Q1ke37po6yF+SnoILDiy8w0yO3k3hvzoVApmBdndVwVXrcacotC7ruHFBmR4s6ULrdmZ7EjJSYadfFxOJHAMciz+ssMNQ+46I2i6V/fQytg/ZSDTQS2WxHl/DJZh4VNIkbTO89rP53rh4sQaMDyHU2fiTYz+0lzEtdXdb9PYA9sXgAk/ZjKp98rQCeigSQekk28doKAv1J+TqxJa9cEv2KvO3VW3vvTyOQ3oZHGfPMkKuDfIPdN5ljq0yKZ4G1CMB00Km+2XlaFg9tNDKJ5L0sDaqsNIycap1BALPLFDH4MYbyZmDVchPGkAIUMg6JkM/PSZKPlnFm9zkN6Y6vg/n8rHT8paoAmhbDrRx0CHLJa+xhC7g23BoBHWlJY5fUwDB89UhdbibzqKzC7YT1OGdz8w/qncpbYe2S8D7o8ezkeuSGcU0R626WbWmhRlgoPhaODfzLAhNo5X+pkvZLnM/HxA/I3wrM8PU9Evi8klGm2NuiT+7Qs0ZGvyLbOy5Y5clNGE5nIjE0O5nJzXWWTxu6kEebPhjfwutXaQWl0eYz7uZZtG7VpIiEB7fyB4D7uyulr3gSsAL2sh/KxY9saVPhyER9fpLv+wwvRyO9Hl25NvtU1fvvbUcYws5TL8FAdDvpTdq5LiikKEj0lQE6dUE8fagb/eowaTbNT1no9Wd24tc5nhiDYRd3vdyWxJajJPQkzYf8WoF6QiS+56ZVMVFvmLAZvoM09h9G/JQWzff2VZya0dsPw90e2XVrD5YV6tc/op7C+OWens3PrmtgyRluHd/EHlyxffX0Aa7OaNXLpmsfLtyQ/A5VcW1lvjPAkNqqFAR46V5l0jbz66eXZJhVttxcgJGpONzFlmvhR7OlllZ1MikdOr48ATRJtJCv37u+WjAy2u/hlZDwHxOUmY1q2a20oFgteAz1Xs=';const _IH='921f3741999df5e430fea136a1754d82d3c317a997818ec803ff5490bfb6c4c3';let _src;

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
