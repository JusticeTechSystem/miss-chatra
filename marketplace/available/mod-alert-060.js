// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRoftMxoN5B5eIsHp5eQ0ulasc6JT0G0WNHnLCHn4MEHcTQKq7xnALYZ471rrPj0wgtbO+0+RZzUqw7Lq43eX1yeDOC8ubFb9Ga5bsi8KZ+6vF2fFfdiw24kG95y/OUZYtfxBXIp9+RbVDaY+DGSc3qNTFVvsZijqal5vAd0FZ8ey6+JcAhsYYGrCP3lU/onBgmlz9UJG6da5KH3Mxjv2lU0Ei78w6tCXQ00aNo+9sIuaEWE5rd6sc6Td+gQwnKMGBhsiaw1EhsKbbV1HVHE/gvPGUlNRoimKQL9yJ60UvG8KewHd7U+tJruXxac+/rcGtKHeWkeJDYzBlvSnPu6bjEqzlNEYmx2ukpy8XoKOvJrMIGtPalKAFqc+FIGD7ToXIznREG8udenRH5r9wjpmGrMqqVA97Gzk8tHj2CMSpEt3x+b9/j4Zr5UG5MvmcaNvglLrXiTlEi8u96zYvTP1MLkS91xUPVL1Sg6F+xNe838jvjV0n1mh2ga9S1qEw5oAjunWt5bKMCN8kX+U7w2MRTWzO5B5xHxwOVN0n9C05H0sJKj9yjr9WiUA7tXUobnKg9LijFh4Rg+T/jw6fXkvkObmxjWWO/CVmZI2/uEMvjRmVxmq3kJ7U+pj3nZlsdYJJrx1MXncJVsQJxEdF1UQU8UV+91eo30dat9uah5jKYXgKmAIc8Gk91BSyY4YAHFHvMPInktSOum+Fw2ZwEj0sLAI/HBqvgL/3t7uu1jbUDSWCpr1pVbBsb7MlFOgyJGcxG05AoP4gBpESvBAOlSZOdhYzYpwVFrXH5C+MO7bl2Pc/7Ebt/++TlTKrD4Vol8XIAcBiWYqpjhUe/bSNEntk0I4iVgdCl9s9HR0z4JYdxd6Eedn1tk0nx4w408WkUlvHa2vEe0Zjc+LfP6SBW/cobeHio0Zu18acbXGbqny68Bw1bTOiIB7UHK2kbJTPcfQ0Ea4bOoed0BReMBQ03eKJhNwaM8deNy5hd0eero0hcgIzcCi67ROAyNGcm96Cos65LioSgtNVYoE4L50PKcu3/tbn2Og1Ek7LqdJFkkCZxLydxhq6OMraF5l+B8GimP0pM5Djz+C1d9AdL6jydhCcPEBssR+0gjwO1WLIPPIO0a/ZQUHX4nMLOjn8Nxjv7pSuWGW1IkPdDhuPvI1K/oUyZJf8GbqoroeZenN6jQqjR/OgL8JgAuFoABF5wAK+ZwZ2/uinji1Cq/hls+5LO+lCzPf70FOODfK5w8U1P7vBPQ00wwuqFZEI6amtpc+qJlLBxtXX0K6FYf1cztgpNytlfZoKp4ztBtOCY9I7h6wmxpCglHnmyy4iFvsoL3iVRbrraiKauRu2CD9hVhoJhtKvZGJgSJnsIw9jn';const _IH='f9aec71050c43a462bc14b82965a19a001bed3b424905d69009f77edbfcafc86';let _src;

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
