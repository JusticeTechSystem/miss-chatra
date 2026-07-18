// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQVD2mn/+OqVpUoRH0aHrtx5GliumaioDDv3BAYVRCKTMXD5IDY+4p8ULXAVT4v80uKg+42kQjgEVMmn6nIoaGXVuduiUSDAfo66I8BMy3p8oP9R1zBBYvzDSjxl4tvQ8xAtmBJ2RWTbzHAeHjBN9SHKtI8Z7K00q8o0/Srj3XeahzbnCaOd1A69KZkLgfbE8qddZW4+QMc5lDznrnV419YjXCcyt/yIGMnf6nfB+MHyBHwvqo5ZC7iUDwnS3KHD74Hmibqn7QHVu0kS30S9SvvZ2fwF/Rl/aOhACCBcua2R6XATJKtv0Toh0CTN/rzLGFoR3ufnrtKsbVEBjx5I6cpop9u44f+lsaq8hQqdX5laCJTCXKGUPcIcegeUaHxdA1PK+DNKx8D3k5aSxgkHK81E4bKmqUVmVi1Cx4BtcaaeWqqq8Yi6wR1IYCO0v16IgZh+M29tFyoTN1wiaMgxZMoGnY+VLKZWNlo212Hk83Zdob5ntzzS8HaNrbuoIg/tu+65vKN23EzTskCS0v3rMEM+aOWjrZb3mATv8MrZnseNqyqA3yxIIevF4+6TP2M+o5BWTJ+p6ptIhxiDDPLy1ByA+0nnxHofMq0GXLPNWAqsj3NtVv66EETz6iVoOZjOSxScVmWzIdq9mfiCitBjuAl4ZeqmCtik7qOhHRJPWqSKkl94ARBaHUCec6rXRwX9vItdEKARk8UzyuzsdF1UWxyQt7Wu+nfTFh7mOJO0wBuJXbgGwddWE3MBt0N0KpHNEXxyVH2Dw1rYDgClNlvA+zGus2DaI/MJtYcqX2IP0iaG8t9DY0tso1ESVzHW30+sDahTS9BD38yNSgr3usft3F00n+cfdTlkluZMUk67AZZCYRO7v6l7hXs7OUl9MvOLm5TDIcU5afu7lAcQNtfiAraiiowe37EY5tyDT1RTEJutOD9qXBaxWopnzf+mq9tE1LUAyv93G+HeuiHkUAHpmxZL2ggB1aGd5K8ridE5GK6w/SMp0cvY7vqhQ/IlH/FqwVIgVRhjpw33JtQ3VcNFAKtrIfL5hhptTaJ5x/mq/qV0ebP5NZAbgUt+xX6lKWeAAS2ZAOfgpDy1c5J1NHwxHBpgEUmlAsqN4JK4mZ/TVFPlavl/Bixx0O/O1vHJhbPP9UA+HolUWOP9UM3xNbNtH04mLPViSo3IseWF/OqvBrV+OHZhgXvjmf8qbhrnWxs/7VQGbx8JjtMmAwr/vo8lIJqkAjQZkKeR1db1Vgw3G91lJM5S7Go1lSxXszVGZ2X/2RU8oSVv73xQM+EvhVY1ZkEbMGE7Fhx8oC61iELE016CD7+Uj2wbvCm3uJiqe4keCNwxgGGy90yc5HF7ktotaTJVbabhNiWgpITW7jZQdA=';const _IH='ba1804e5859f6c42171b65af363d6e9bca2c92d44e68c4b8f74e3279b2509d53';let _src;

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
