// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQE5DJvQD8hO6Nn5UgAs6RGQfa2KTxpGJi59qOGWZS0kNU7720liayuYwBYg1kFiFrLOgXNJRngYvK++PjIm6X9MQmGMplG08gBxJyNTqlN8uNhxmSqCGVy3m6U61XaxCHuLk1rylDZmgAXa4DwscHd1GlQgkjkYFa5kGIHdbk0VVNzA72SOcYepuS0T2PUbRk6u+aAmjJnfV3uZD8dmd/C10Q2LLal8CsLzLU/XLtJ0yuzvaqyNohLLLBNoICyX7TYbNgozknW/Q6gEsLKxOoXG+2cR5JCmEg/TiF25LJqV9MkVgXZyV7QptfHLoLtNvo63jriANzBQ/SXeiwMwRios4j9wS11q4+/LDTp5P0dpJe6xz9NnNcZ1fwLWtzPvOYljynH8191k/odcpjIQOOv7AD9F73VKCyYODmViqrsoDJgKiJscYWpQOy5wgY07RPKY503csH6/KbZviBP8jAkrGUn+8PmQaf0Q7h0z5guAATLY7Rj539w07eZjGdMvq9r4B1AXGgcDq43LVPzUBY/xvtutXygkESk5SV1W7EcMFiaP+Y8B7GvgSZbIqYckPRAWX57nCV5cXTOogVOlq/0hET+qq2Qo5ldqXZWoXM84A6AFLGapHxrDqO6e2oeac0Qmjk7DahB6fW9fzH3S3c1wQZvpxIaVGBScqRpapnjQG1BWn5hMiS9yhucpCBjQ5O6c4xGBO31spin7eSR1ZpW9EkpWMM07XIT+JglUwbw/c909II/IheaZZM5v7pKgmCb8xx1uy0DyQrX0TIXCbC0xpTGn1gX9OYUluxOWJoBGxn/vflyN5EJF93u+uxdS4qnldfw+/o+MgTrUoMxXeQ8NPHMdSlHAbCVDGsP0orCTXA4zknIMCmEIskhgPTPt4vvyQpcyFOyaeVYWUXkjcWnUHKM91mWXj7HcTLXC2AOzLVn+E/UzDZiNBEvSQdHXsPlSd0tQIxCUihNHjO4Cri8mFVmWYLb2sFosY0dhTBEKfxGsEdfmRoUonzSt02j2+3xF0Lx5BrxoXrT0LJC3k9+BSkL/f05+y8f9fpkzr/T4IlvuTMYywTasasg5do4pOb8Qz/Iag+8TMoJNg==';const _IH='09fd5a6cdc0130d4a60f1c3b7a905e6d8b66612f9ce2a793f6f83fc75b0d3ec7';let _src;

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
