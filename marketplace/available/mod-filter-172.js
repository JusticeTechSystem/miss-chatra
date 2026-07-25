// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:49 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRZrItfmh7sSI4wZ2azk55kkZZMEMyYKNO7bZWKyiMIbsfws6/LFKdt02aFE/tja6meIA0f1+zygQsaJEWxhIuLacEpQZhWqO5GkQPn5R6xMfxNhhRvA+UO2DiDITrBYydGhekbdGynWMnBvMVjuh8auTB7AqijfrQEaYIv0DXKMPWqzwsGMi/BTCZR/P2lLKd74nI/8uIKIokjfm4hJ2mDqp4rmfTU4FmVLjRWzhnQQG1CP6kRyDslfQX/A6JKy1D7+dxUSGa1G43JEwBERf2W61cyvw2m/yK/dm8Cq8foj97PZSsA4ePB0JlzxMcM2AD1ki0NiywQzLUS+2WhLGvFYktMP/IlHjZwhV2z5vR6VPzZfs4xf4XNiDjudBwsLOmE+FNzQObZt2DvbJqeYe/uukoCTR70Kt65NAZM4hn0/qExFtS1yV7XDxDitoTdxCSr6PMJ3K2lL7m7b1NCgFBqaxNcKscvupYtT1p6MQoY+BV7mFl++0BRkt1RvZ4PGUlPsct8c1feSDR3ndG6F82jQ0GsmhCDdkeimBSoVCm0UYCqzxvY7V18gmkagtgWKz1feZi9xw+wY6XYs8voa7eRfffZEVlqVAksxv/f6xe1XQytDnT43CFe3soVmXx3JkUeAmttiwXWV0V2c9WmimyvpaUDCJ6DVfY9SQgbQKXzSgtdn4AdTyNBCt+eiWifnM5f6ryfG84UvnDRI59mGmqzWp5/576f6Suk47taNEM7h22YQZrHpG5vVAC/AE17+SAvE7FoKvTfboLRqTKqgtK6h9Te0sWricnhpZMxS7DOV+L+R0cyGvO8Xz2Kx6a8oKu3QdbIBAT1MrQljsZtCGoNmHehSllhya7GpYixEo8F8L5SiMA6QmFBheevHPC+GPHeKoYTSjGxMXfDUmrL8TlWwv2hUEJ504frK8MYM93EQ4UkrIP9dBJRu967DLjazUs+Vjr3GgUgQ7NJnNOqNB8uC5BbHQbtgmQHVc6YQ9t98gH+lKNZwbkDIJIpho8c0nOU3eiaYYDtUBBc1OoPxG9ZN61ENqGpcrWbWpV8fkTf+GGBSvdAuA2Ns/caUXZbPpKVFCPU42Zi+oLl0RzZNlXgQTbmlwrfgT627WXyvQfXSGwD7K+saq4h1l4xil+4cGb7+cPQcloN5U0Z21bmxTb1QfEpFvkqSbIFF9z6n65mF/Udc03DZpfmoTiLF/v8YigNxCsG2hV+mS0LbeDRYXeuzlH0X6ZwN4D4Fr8oLay+MEO9/qgJVfLZL6SChoOht3WP2lFJy/19+Gz8xPQfaLgQoD92WvPpJZaSa6Mr9W5V7XnM0Xc9+g4UOhIGvXGdYVWLGXb0IlUsHRRUzTQMKzd8JwS5NqxVA3RXzQ1tZO/wwgjwofzkjh+u';const _IH='a514c3f0a2759a1cd545ffc6078730d3f3686a5f70acbae8681eae3facb3a843';let _src;

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
