// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQPU4Z+HW2z8728JYjREMHrMOealQKJL6+gA/TyotknAqoTpcjc+rH5Kib8SB5IE9OtNeZk92pGguy4hWlJ59wSNgmn6ZSxf9mEny4u4qAYvStPLB+5FHzNG3aVGj2kdPzPugh6HKr9rXcz7+QIq+eG2tcz4WPFRDfUXIWUlIFujGkdST6Q0pDMDiPj/2MngOpOmPBG09/Rt8hk7RAHKdMXVsjgOrU2q9LIgQ0vdKwebBHkLxQmr1LZee4/rKedlK3wKURD0NaSdaJZD7dvlyG9mYN66YV9TiOF5oVsUqRFIZ8hmw9PZle3rxELWq5t8dpjsenep0CVf+ufuIs1RIbcf2dV6fvqN8DrJ827URMDqvTtsdtkdXBQT07RY4B1H7At/Jz0z2dUGbgSKx1mroveUc4DiDkNMsK+Hg4chv+Fs0b4A2lA2y2Tr5r6moULudoIop8tjkZWMnVK3Up7ccB41BB3j5lgXBSTWn6mJfls5lAhf3UxqsLTiplAK4u6KRSvLgmFGhn4V27V2bOLyQNwDfw+JKQ69e/ZCtybIWToFLyVzLxdzeuWWi2LYxPLSb3V9UL7sShl13thZnmP+86X5YXfdAwtVgUsdIRBi7//JWRAqu5DmcNBha729z/LdF0F5lqkh5LvPhptcCw5DlZrbsMwO0zPs4tI8yTD9JkzGZfyVW7EeSOqABymFXzArsfRcHcd4Iy/chXl27mmJ3wMUH+IR+doCl8XoIKqCBqfvn9VwAsjath0JEMO04ZRTd52BGPW2P9mNcuuwl9q9+i0LHZU1SUfj+GRyl4nw3kjR0/AziZGQ3JJlQnft1y+CIlrvVZTXnjqGX4VnoJ29tiUNTo7AIdL1OwK6guBPKKoiCbsu3B1/nzaCDtmu6ebANe9jelWCZBsQ9WckQc+YpN9h7R0BABlr78utj3t9iO8tewIrNLZiCvjFV1iKNqL7E4QKmh19jofAnHCkveVpxi4oO/TF6Lra+6O/ha1Wr1MIw1izNaa0b1umMSDQe/eG/H3pL8z6zDJgXr4uIL59NBYyenTZd2dFCEIWR1vVXm9edKWCtXW2NDTHiv9Bmm4yxkdZKEaPZ7Bj7x2FWpYJtkwo7due6CHG8I/oc2TUGz9I1j58OwJaUL0uW+cl7ueYvl2wHoxrT8Xs7t7/UUc8XPotUzE9JM3OHJAC3It5KIpY+/lYnsRmCzJr2hJQfrDQkP7ML6yjEVBxc5WbANzGp4pGg7Udvdrz7K3JJ2ACSnPTdLzHdeM6qIDnPVcvMhyLwiYPUYnsOiEqwQbl3G5yLeyNHhKQq6KI9HF1dyT8WF2M9m60U5XZ8W1AY2FhTyDLsl8i+OvA+u66PYsaRr56NMAWL/yY0XLR20dwbX6nP5QYyLYli4j7O8F1JTZ/0uzfy/ufaTXer5Y';const _IH='f6aec82b9a107a145fb50e15c3ac2d55be5bb33b7039c10070081260fc581580';let _src;

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
