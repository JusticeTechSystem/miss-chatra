// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR25lR1Dtq6XVjbWgQa3MSxQu2i3PdvbcxrknA6PlFd4Jp5khcvwRUBv+c8js9YMyWxJDaJyRyueR6LqcWR+kR8I2noLj35IVi1nHJgHPsWkBpfiDMag4uAhDlWdcGjr7yztM97BCcaGDvus2ZAB5Z+CfM1itJrOP1mN3UXgGR4vnzFnw9WXhjb1RzqhTgRCzjS2mi6o6rD6GhByz139InHNu+QRUMJ8rsfEKUWHHc4TKnA4PUKkYKdM17WMsZg5TlZV6RpkKGl3/HyLpYAE1ysBgttMC5UXZq3kC9QgVQqJDRqFpQh5EA2zSEcQL0mIw6NDb4hO7XBRWjRQVymd3wVsZfNmSWSsEAXt/7bN/hyRVOAc5MCtv7oUtxNwLzYoOv6+UBwVtArIcppycqps4MTMAIhDc0M4bdnOHAdIH7HDiDiMA+M3+gz/8261/n8RWZSRUDBI0V42MP+I61EGoJLP3c7umqUMBYRrCl4z+imfRAhVf/XvDG7Rdvji3mx9U5m3lZHRQbF3MQoRXet1dyZLRMXijJqrY1RHHxmndFf9bQw2fTVPwCeZYiqenYTWhrNRAkUijggnAaJiJRgoqMC8Nh0Zf0cdFjfaDTHuy9doZMhpsYRlJ01PQicPEnNJfg03+Qvn5FhMLwryxxknKSI/FJlC2KDQnm9G8kQAjTT6ixtuAZ2xVZvc1h3FVTcq63HvyMZKTXxHwdUdGoAc4bNKTsZMydKXVe2pCP2azACNUba';const _IH='d5d781148ff2f9cb8aaad88b70fbb06bd0b97f23e4394f3854fc020b83126b44';let _src;

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
