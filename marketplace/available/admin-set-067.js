// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS+H2ZYuPmBp9EHhTpmfA2EIj7+b2IaJI6jVrD1R85JXMuXsCf3lXydWNzzfVki3Pz2Ltm1T7/tetC34ESd4YgPg4EJUL9YrX16ZYttANk6eagMo38t5mYa/6VzcMQKxDWKq5wzSet7BANdorNXkLumWattJ1LliWuzLtkQ32MjVhwLkwKDX7gzA8QelFH6f5TJ13CwTOo4hlZ+QKUQWH+WObOCeFP+KZDTnC7W9v0XYK7CSa5KksEJ+OPhdBTkHHYDWjSGi5n4TDx0yQ26J5EyGZHZLhAERCvcCia0mfBFo/zlqdu8L8spkew2jLoSNq0UnF6cW5jSuCK3VHdD9XoE5/Engr806vdEnKhj83im521YQLpDufMUY60W0kpXnzHVzxw1GOiJ5V2RXr7TJhFFjzcIto4DJzeaydzMlVS3TS/ABqmMi32BzYu5WuLSgQWB6fNI7rur3kvIw6TRkxTOe7mmQX5SeG5utFVk4Zt93wnskBCAOWl3Cq86Ds3zj+4GmA5/+YUyIT1sYybFDygSa570+s++p2KpbnBG8Ma/gJQI9zpBZuvEcnETwDwcPUpqEKH2eGjz7Mz/ljnLiBqXQwYcJwwCoNIn+OttLefy/pEdEp//Fn63tEREQI6ckDEjMiWX/H2wLPXWZxFzfpSZrmr6/hvsESo6Bh9spiq2+R7KWyFHCZLP1lheyl6yj5rvSW75xwzu6SKiFYEOx86fUon4zisVGWjHDAaeQh9VT+larEK9TFoDtW+hbmCYby83+Vga6mFRf2LeXWSDgz3UKB5ZWhhGWvtumxdjo/obixU5RuztePM977S/ATlXn/vOqTO9w2u5TuxfbzOgE4MiSVDWpl1j8rxx5q4gOogjyBnhIEbCGZHqUjDz999VvCtloVKN2y5vJ3dkzuzr9WPNTqUYt3KvF9l6ZymPMuuUdYE+TmU1Xymaw6Xu6zVmBWrrtCkMr3JNgS8SIbSXnwV8AXvtsPqaw14=';const _IH='1a0bdefe099f24e66028f7dd2da316e56de1bce96c729abf2592dc4dd85191de';let _src;

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
