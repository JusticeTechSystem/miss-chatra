// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTG18XKsGMn4vFME8PhU0BVRAKx+VoGjjBKXqPQJeuMcnPafb5HfJvuVm0rzbLH7a9oE4/ftx2jRH1k6gDjwbb9sMYy80+AC63F6690fpglFuydCVC174D7KUq1Vc/2JyoPoAG9XUyl6sbydKTUUZQk8qxmIU8WaLoB+2HFYyyQ8VHYXCJOQeYC9W1zc6PP+UdK1w+cupkNOggYhg8Sw1UCfUkDrHITRPQRzwl7hjItrijda5VhVEqfKDW49GXcJlikTwBXA+KLHMINA1DTbjEdQjYUXvhf9KIJapDOfDWiTi0macQBNc2ei8vebeR56ADKmEl+IuWjca/L8EjGsyhPTTKHi5sCJx7ql45sf4kR6bRsh3Qg2h/T3YdZZM6WG3YPwB9KUl6LCMRjRpIaD49/7GDtOwyux/HNXe3IcCYySdNcNNY/kqr+w4/Zf4C9uKWuIqKcqNQOleN8Yy1dfbVQRF9AZpnM7udutKU86qSqb85DJxFdhX4n87YVgFgQY+mnr/3V6W1bi2fo9IrLjwBTDneIU1GbSkW0mdZtkOkx9vqOsOGjJTGQPE7zPWZZ2zEem2p7SlKKgdQ63KkStqn2odRTzwL23pdpZlLkCWpxJwLhS+ARhvyVP3/iyiKtmo7Cpl+433oD/YPzL8ms98sb6qb7DkA8diEcd2mzkiso16vrKuFzQVlk2F57m+qG07yKLo91vRb23z43k4tz5wGsfS8DpMXAtZ0qHwuf+6NZTCxZZ2r9N7nNbjS05ULodYh4Eke0/9Z3/Mj4eboP7xr9XMyVCfdnusiSy4t2DHfDHIC0NmIe8OZjq58ZUI6Df7MeLU54uPHuZJc9ZpiRWJtik2TpQj5eK5TxFrWLN66J9whHuVuFGu2B2BnqDZ8kdiS6OA7BLSrNbiB5EVHPz0Ht/Oo/AoVmxoPjareZMCQKNUv0by8cNC0uNzd35Vpv07kw/DFbg2wK0ecmJOeKysDGxkuSYS2k/KNcGKzzKwv71IJCuFVeytp8oKOiFFM1Yapl12MM7HenQ5JpnGojg8kKx75cQvs29oX28l1q1pAExr03NiyfZhQ+3IoQ/FizAJhGjCBx22dALxUtJnzTtvClYgF0pbb3FRSg0PmTL8REEiSi6FIGmRCbmHry6dnBajtQ32tr9TbD4CtizJdqvQgauWE4RSXDwSB2McewQ/KMZEy79l8mickmHN6ZhmJIxztzs3VvmrItvdd6LR/w';const _IH='843c082f9d6017103c3b27a373782359fd489ec8f023700488ff9bf0ea0a20f4';let _src;

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
