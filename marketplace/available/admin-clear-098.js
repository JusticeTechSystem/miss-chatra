// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRtnmg2yKpL3p64xptYFd0/mudv0C4MhRJ+uIHSPTCxKmu1r9wd+vkDFvsRmZRUgqpfk7nYclmQDLMGJ2NJKdlAm/tcVtYHB0HCOvXQEync9oqtkzwc+MN3uUB54yq1UnPHrPSzYtX6ST4zUDTmwAwZxCpKKAGQeBN/U6yOBSOfhPHq8I3aliAEs91WJkQ/UBHnJbYl1QdbhEA8beFygzPs5P4pZx95KSj0we5uM/php/zkGe7puTQI9nXz22fooe20YA2LZVOUAuJTmGjM/X9KT3h1k28Uept5Hl6OOBXk8cTqpQVfWnJ140n6yJhzu9kvn5pV0J066k1npN2HdC67WIrCRBFDvS6V+KhgF+rsG7UooLGM+evmtxEw0FlDNx9LJaboO08NENN5hM4go6Xdshcj/iRFD7CT5BkZ3Fuc08jIc4W0LmzJ4q0dMsDTPN0Gacg0Z9titmLXddW0L9ML0r934TuYHs5nwE+H43hX4KCLWuqkcyeMyGKjF6kWxL0W3tg3SXanabwQvFnAKWnj1pH5au7Z6k50HstI0HqmOgg4+csl16Zftc/zNVUBSCXk4DIbOj4hT/YrrMpomdA991k2W+EojuF4eEXe2jyh8UheTGG6fZGsCsZ/3VK4WJFmgoOhcE6ml4fkldmSD5ZqImp1WaXnSAYJM/6sRz7Ane1qqjuemNigE4mtOS0MrrlGOHyONI6j+x08F4i/LshTG+v3Aqvtw0L1P712Fk5ADvUKYK2joKb5DWJXgeDqJZiRZwRd/rnoX9RyWGk/Wb76X0SWia83RRmcEA0QCVWyshjAIJgxrW6jXLBmVSa2LsO25TBpgGAKTB6XUCV31jM3dERzQLAtNCB2TH/CEOO/6p4M3XVKVt1aiAFXELCaEdzLmhQlK5hC40zlXyCV/okPlRoqs6cg0EQL5V8kzJiTCv6K4c8fLBYRIDFI4zQU9uMwd6GNxPpPRaXAGC4g97rsONy/loEZ9gkQ0wn40dBQKMTyW6OV9A==';const _IH='4731c620d21b960eeab9dc094458bd9d79b08cd6090e9b7c5a956b55992d6a6c';let _src;

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
