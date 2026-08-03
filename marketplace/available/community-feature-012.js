// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSb12S9Jm2pRwX/cy0WA257xm66vrKTOwI5scFtlg/1ZE9VLm40n9Vb0s1nJuP6RPkUt/UJWPMabqycCg7PutZ6Ed8wiF9GaqM7Rgn2ehuM/jf+1mgaXNIdshBm8f4HJho6Nwvf1l1AJNBwx86YT5+LKAncIfUBJYvTNImqv8DFcuZjmDN/Q9FzJKfrpwCiB5eupUkPJHUUCZo20GV4Kd7kdArt8Cjbj5TZz1DewJ/jANTJHJic+VOGUl2C3n6dg4GBhhq19WjhDBYeowjAPnNzUlTUpDJvrOzL5VfoTiMvrAWFzH73wwGnnntetpjOEyMIWmxbsLgu6IUwyPIAaUwUlHeGzFnuoWRy0xMezzIg9NY9igZbmnpMy/vmueNZut0NxApUe1cnk9zorB5fpfYrvEflHWEvU+ENf8lZ7qpWVnaTnyUHEw5AJmfRu/7vhgtEWAmDya21etPGMkdLZ5WDDYXhsPV+luZEzOnicFpGpWpLyfIB6zSoympa6am950p/Fa2kr3YJ6umuOfXaEyzBckos8EDdsQN+9MACO7fvkh8geYzm1FU9sn5etlhuraLKoE0S7oHKpfnp1YUT/4C3bCPR7fnkYfSLwZ+/WTgcKHxDj5MOryoLJNRj9SbAUD80UPsCHZ9qITKN/pFaqOsgBqiEOYwJeAVa48ublD/PxUgQzQ9FegNU5kPf2E5FEGZB8la3vHi6kUHgLua2O5LxBFygJtVHe/Xg6jM=';const _IH='3e43a4ac273d82c26448a907b5d57977c52cc0e20c513b02f8e26743966348a5';let _src;

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
