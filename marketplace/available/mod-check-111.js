// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRqHOhotmli0vOubSgbWyEVW/6jXGNAPrdLojNcAalzKUEnDVch18UlTIvRXvucRsEmuIDkMZWDnFK4oUQut5hGCbgdz8z61XVZca2bsKZqRPHY5MV5a/xiGT212rulrrKMiyUTUizPQKhJhMVn8U4rFLb9KLwqbuzVukQbwY/9VpRxUsc8YD23GAY9qsZNdWQN5VbN3ElkG7ANSZXSqD6hHJgBo80JrNWxd5G5Pt/p2+M6s2qQeUbj1XUmk2MjPQ2443gyBQgBjMXpmYBfdT8Nzr+W9SMxaITyGs0LvtEXkBZaJmFNsdcLQBd4uBo2xJymDj8vGRhm8IC7zYts450uuCL7KC0dIa5AlCiiyU8j8oRU7J4+WI9d1yYMfWbM3jQS6tkvI/K0G5mktxVwBzApJ/tmXtfEyBL1yUAaoZDKvWb9Q9ifa5q3RnEb1BrezJvxxw7if558BOilMaLsr2DkFZDhur8kHppKSSVEIJCeDdVnxj+g4MDFF916F5/hnYNH4pceLtVwvxbJkpMfxTyKOB9HmSPqJV0PNDxbOO6jYtrXdpYwvh3MbIsRX6JQAnZhzsl6YWO1Ae3gkagp8hfLxSyjb2dfMSzmJ4FLnIep4H2us4rW/l2gsg3hmCrel3xyn/EBtaIMquSkcBf4eZxVFDXKDhJ8aDrJDAHYurGTTDZZcvJ8C/uzAM80KF79WxKIbpdoIQddcF2JBC384tCyOsC2bx8HVvtKXgAOtMrkt9Ks/EcQjNa6sYcnWJdEc9vibKkmmU8bwnj4xxsOCPaT4B4F9TnsMcZTW+MEQzpkb/3M98qBghQHh5MAqPTFd/OvuGPMi+XdnXj1MQlX2RD3kPxGGxSlXI2mUE8jk/gQKVyvFFxMX1lvBOh9XV8R0K+Y9qB/5pJgOInx5UU+WWfQrMHDWqBJpuoyIOLE7vSL3YclEUI0fAooD3NwG9qVbeyOv6aB1bOr/OUk1dcTiblS1KiIsf5cQokYezMetfRxeLHPnprNTxpDIwrloF2R6wSusmEyR56Lsf6ejw9byvLmb+Sx24FOu3SZ1KI4HPEZBZAyJBpRf5oLt0+D5Y+DCNOE0A9pELGipGquG5HIvHcEejquhBYJcVW8cnY+4ifzS8W8KRGtxh/NWP2VqAHqoLuC+sLBvbhZ/lezeK1lrtaansPxKZJ8ZsB6xVMV+o2frQaDAaUB96JxwJb38HgRqQmnUWolvKpc/CTqw4NiAVx2WjSyMRruaWq0qSyGZFYrW+tqf3TBiigX/Bo/ECJvQY9kOOBJXsyr8UJiPxQfmNskZNgiwe697C+0kFyqkifcdZI/dELsrk7Aq3HQ/pYQIwb2fEl3kULjhBitZLcVFp4hbrlNR7rk/X331+DkEcE=';const _IH='231f23716661f97781e8934c4b28125491cfda313961240611a3bd3d4816712d';let _src;

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
