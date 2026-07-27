// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:47 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSyueiK/KGiSGNOfwTdGW8cKvhQZxRtlbK8Z/6m2cpJ6miienEQmWw507wzwTj0RBRIlalsmbG9xSgDMHJHgldB5/ifkousstY3ohhIyuhb0T74U9jS8K2lALZQ5N/RtlUWULrnn+W245QRDCDss5nTcUl33xmKJZLpHiaabm5aXE5RbNTApLEHxm7WyjtQK9wCU961HF4bd5KxwQ6l5zE2RTxYC/7lO+/DZ9J3o7wTLJY03oMZC9KPLKLDN68NMLmNZeFfA4h43/NfmpQBaab2eWPyHHHbyyU0H9f8iMn86h3a4lBeUmEPmNmY4I80Z9GXXnqJtPaqbH6i0NFaaiSpprEzMyfqW8baZqfWZX0HRkxNGmxruoDS0FpxuVs+FAyUpFScC1FCHQ+vhnl/Sn/yusn+vox041x6O9erV4EwrXAhBWUwIlMtkKT7vtmW572hcMVjNN/ifdTtTiRqR7PNiUdNq/FLSKmGOJrSKs2dePU4ymWQhUYT5Kisqxuw7XJ3IOceg6Jh7+HPmAxE9SjeKHiTZjv8S+Klavp2Ile8Ey92F7NsMGr/N3wA/xwxhvhpn52Pz4TUWqu3UGjA4s2vlfYLJcrsXrTFhwf6wUyNnq/A45hWtzxIAS8/hxIfRG6aFp8XGBf4o5fvpgR0+M8TlyeFmgSp5jKvBkSRrZfyYkY348DIPRgPlMpJhF7rTwQ/XibrSrb0a3W4J+SYWlh8sImITF9qaqAKSeOv8WjiIbEk2KA0+rGCD4MmEFG30O8SKJstj/iU5tv2W99s69P99e0j+LrxxsAtgmILgi8MV3+B7NPjg7S+eywGWWJOaQgQURsAL4GrqhiG7qRxCb/GtcHudhxG3DDOD+Gilvj+SU6jgobCie9gbCdmLSgySSJxP+7iKfCFpydkaw3PDQMc/v33XzX7M1TMTjkzyfZyZIxKNlSJe033aQt5sIE3Dsrl9OS/HCKJ+PkWIeiz7PKnYkPzMXC06SxYBrrWjPh8/bS1VlBkwTxwcAlMvAescoRMouBrBj01hDmYIKw+CwVUcU842Tni/8oHmDX+IbUCNW25dqlZ4zMQdRSze8g50NwykjcuXYAmwGkaRw==';const _IH='98d9d7ed8ed832a866812017a0fdc31352b4cf4bf5bff750ec2e7fbea88e8352';let _src;

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
