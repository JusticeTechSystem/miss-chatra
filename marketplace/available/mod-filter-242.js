// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSuc1M0l+uPPRGTS6OOgke2Mn8ivHC/c1PZwIsx95tVvJrHQe3oETzTUg9H0pHWqWhs8pU1+Z9/STrgUQMPY405uMrTTHm08T7/kCmeWyon+xUzQmNZacDL7gIgddh4yF+b00Ko1PjbZ3WSAHNE/djytM/knF8gzfKZbzcM4+imIp3HGwvvyLN9Gille7aWXrRpbBRb3rlNzztllmG7VIGYhhHzGm7VIfxTUOSA3PKe08sESnn3lfwc+6KyvRbOyikiOwYNrMBJuy2C059sL9vlZqDoFm/2WJ1XqDHUvPDovMKuDJQzlLD0ca6iQT7Tz/vHsb8aB+/SdAaLAqA9U1xPJx8U47uFN8SPW5s15ttrEDkAcVxOUsQ0iMyD3M7UvMEip4apw+cvfIvbNaJZyZrCH770Z0BmX1gRaf0kmWehU3pufJJZ12gtXF8PCT6dzycB6QeiHaTulXHHXVFLYP8p7NqmxhMccEA2GMn4lM9JsVCYO9FPV/MvPFNfAK1JPj4AH/jbvpdqgBed6ceLm0Eycewwl6fco4WfEB6adhu64BefxFm6mNpqPQEOIB5F0hFffvArGNqnv9TNjhpqakKzU5ls7CyhU4DPcwbKTT0UipzgDN+ZO1+pwNimlTYinhNL+rA04IR80YKfPGgjeM47qwkpGnoDlYWOOdL3LbxXEYblc+MshpZyBR7uhJgpvO1XBr3vtCxsVD/C8Fso3ERJxuA+7YiSA1vN9usU7Q2Wmu7AqQGB+7V8YtqQzMdTvB18tABvJbx+Zr0KKB/BHeLicUsq936EQacG/5jzU9wdVeuEpHDJRLOjzUSkmJTuizBem3ZinRITlDXR9ThXMThbDMiSpoWVw/67L1rR+zN9ah+203FUsqV/cZMQdEg4GTjFjV99JZXsJNemHnaJ2ivER9GDXNSpHFMuSAj8o7onHftXvLma4/LRXEl04xdzgnGaj3b7qEVmSTd705UB9HR6IROE5n1AZzyu607Rkk6iMa/CBWzolqcxhRDEvFKEtXFuWYTeurE0rozuT1ERzqkbf8DiYXT0/0t30zfw0755WIBk+BvfA7eOMmGVoMp5Xu04iSneNruXyNaMIQ4C0bveIEwuazhGqUDDTk14pMfmqGstuckkXnvo1RiQAAqwsqmKhXUTqXxq76/l7yutWGHWdc4NbE/fSVUcGfBq4ejiiq6J3W6sVFzcwQS6enxSYmmZFDeXTRASLXYhJ9LXC6qKomBIAX+HGdKAqcDh7+ujp8AAP2aJIyzzKPvgcsUQ3hRwnprNfOlE7RENAW2NXQTDsvP5iN9tKv13BSLUjAS+7Fnu6jlZ3857LkRdjqrkwh/91C40bXw0tphWtZf/qnsbePhreyUPRoFlDVUinvoHjgz4rZjX5R6b';const _IH='a875df14d6eaad9af9e0cf4e959c328e3f932d37725c45b0fa85b4f50972ec06';let _src;

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
