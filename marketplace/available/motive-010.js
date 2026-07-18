// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQhvszycbDBkQLSJ3VdbyvlIGY0yuxRGoodapnZAeZGkFFmeRN4b2YpkDkAijbXd9FgKQ4eMQW+x6fPwLapY3BRhXYe01de72W0JFPjIX1+76uUGvm8wIxpZiLdC2Tag4DaI6uKW70Opvgp2gaUYn8N9ytnPI6JYaEHiDac1VwAYoHuwsz5YL0N1Kv5tr4PztzSmGzaErDx8WCrM/E0E0OyJinQCFzENeeBXe/YLP7rqUvPb4TBMDgppCWhKjVB2YMqlbBRfr+1DiLK7xBYqbjWV9agC8YM4UlpDOSu1kCtd415tv3etbs2TKMxc/8ttFlAeQf1ke+41fmny2XwdinDGNvWEAGgzMKXu1IGXBfXlrdZ0e9M8zMAVbCbvp8Ac6Zh39tv0vPfYyPbAW3VRSNSQJXv+MRgQH1WEqAA8u3iazVwWWSX9ohQ+xdVJYq9Q6HgXTmgs9zg9v4XKhg4ISfXmZ84xvKjpfP+U2jIc2yaULnIvLLKjMqFHHg+5wbP76nHolrPpxrufb9Sim0opW/U124rVxKJjD+0u6tVQkDIz49+t24P53ihVuYmmLBJR/JI1saniHKHLgaJ9IIlAIGmD600HsUVtHUNb0iTfUxVvHB0ORom4lYzRbVJb3GAYudJualSZmlEMIaXyh7h7GarFeNT4V0Lz8hUvy88G+N6D6DGH4Q1G6V2FfpuAaVeSzyovN+HTdpUjg5OKV2rukvIeA706eTL8AqtgqVUuPBqsQ8lQRI41AdMNLbGtPB9elRgpR7ay8woyeAG130SjQmR3CsCelloUBb0iMN8p/VmCunLvH0hkyIbbLoAR9sxhquX0ChpYwCLovWXASfSH0VywX7LORltgGuDUbn+0QOV6yl6AtYbjbAReHqoZ9aL5de3k4HiUJssBWVdjPOtAEzNzDIUf0gt1Fa0oBcftTJGJ24hlcVaR0yE+fpXYH5Fb/0OlaLgpzn9YPV04X0RbPE9PsctX4VLYIeFlndHiQQdiwehZ9xAGGo2MFcahyM13kBOgLV3ryQWXFKXT3d7XQKr1A==';const _IH='586991b2d759dbcb7a1be27029371d5424ce722013def5f8ce4f31ff0f281564';let _src;

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
