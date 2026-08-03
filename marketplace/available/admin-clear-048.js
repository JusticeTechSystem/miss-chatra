// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRRC+3P8SpDCreg3fyiBaSrLmmb5SNvofNa6vHIh3CcLilDDTY1Y1qE00mvffhY9wY67RO83gF6Wsxd0OT3M8pNX5i+tgW7AkQXEi9OVYOWk7uA4QjO1kGDURJRuadRrcFUcgqmNVMmwrle1jz9saeQzh+EZtbhQq+x6FCwE6LNIraVrBOJ5+wVWOZWk2nZRisAQjYNn/DMEDAU20UW39kvyPoOdlRpAZAovVHASRQWCC5Vno0cEJVSPQr2ZvbGEHrVwLF5q2p9lY6F2+n8sfxapXhfO0CfeVJSWbzdEmPkWsuV3k8Dj4ZRsRsTw5cish7T1YVeLj5Oyo3ejkKdMZDIgO8ItxfE2E+JC/fmbilGChAiTeAQKsx4ZJvMHlfF1Jn6lTGPgueIo3xyT5/xA0Yz6S+fwSjrakFMKvhz4gi3OgA6fq7Dh/2oHOyShD93fkZEYGQcSNIQQYPs6Yx1TlKsiiwfo/auUrKynJ2tULQvsh2ryDzdg9kNyl9DQs7k8uHQ1+uAdD47+BuiELRnrrLK8yx4A7joN43zinOCZVWOz7zpshQHRytMC4RMsvwaKKz1gt4GhMA3rL9G33foO3STS67P+sO3Yarv/y8YdsD7CjAwh7BEHxcxGNv3AKVN/+KQSCa0q92q4W8vp/4AX1RLhEOrIbguIYX+0OPzv8TbhmsiDVxKGPLVtXRHIOeVmEEPZ/Bpc/CQNK02otudzBXfm6epbnZGRTaQt9m5OXWOaz9BGEpyG9CpfZnXbl3lClCy9dLeVDGk3RuK4dAqmo4lM4o9DijqR83VlkZGIsT0w6EJA7IXAEFOi6YZ9zq0fEFaxzWqlHJhRhk/EoT72xaYPaDuNQGzSNFtEdGn5XRxbd0DJLTUNMb47JYTW69tMtO2Q8sqeNwXNgtsJuktSog1UnpLvViRCne4ZpuJSStSNHEcBZdB+gYCA/Q+V9XVh6erqJeYQtDk+S4om0WxY9W7L/l/8gSbXm+B5GNzfmnruuRT+hg=';const _IH='d9e3a8e4e367a7f4967812a2e1a3ce526c2c9f90fea65f3e02f9b1644bca8cec';let _src;

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
