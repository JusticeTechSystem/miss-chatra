// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0s3LYDgowyNv6TPctrU0+J8XJa+yjS26l5zUN/xhZCZdFgZkPdzlfgiBqBxqKEeg52s9915EtYTs8Q6OMFxc+c7BsLpXzQdH5z9vKRt+Y7FhudqWG5zHLxIOPxVVYsuCp6UgLNkK8UvReGQn4YocOPYDcruc1mmMgUFCXfi3BAjT2cHBx92adECICKbTlU+DXZdY2QGNZoZM2C9MwG4DwMK6fDVDdxhE0rSkKcqYxxOcX4aJH3gJds5IYiXoQcILxDUjFoRWhCl+fHGlBsHvibLLNf5glnyUSukCypvYb+ph9YJFA8FFa7H8/IVbXWXJTCU/CzI2wyvhRHwpLwlA94WPookIc5veIRBKvDRolHQdCnEZpRRg5/LPK3pDhut1hLZpoePn+W6cTWBJpAYSWGskPShD1ZouVJ2AvuyzogbGh5DWQMgSxIxA1Bm6pk0RZeMZKp/MGqSsZgrw01fIeUnmBTkzQZ5nEpvI6OIMw4XY5pRIsS7gBRHNq0pv8rCfFkgRQHytvZ3T48TohbXmnzGhK1K2xf7Slu9u0hqMPa3uwoX1WcFf4aovgiORIIP7Yl23JJBxtSKRPguPHOGHEaLAFbuRX88btfp+ImzDLNtunSiMtYbxeV9MNgV7fnKKDiG2fAWILTWYbhHb2uDDFiJWB0CxbmBMHqh24wZcP8MsjVuPtjSA7NtKpXx5oJ1pklN/G5BD7m9ZUXPEm7upi6C413Oi0GF2FTYINjIDBuhEpqUxy6/Y+Ov3+BBGjqZe3HeTrQTZ1EEN6cwkANoso8h1ZbOU1p6jhw1KaMRBU6bCIvgJ1m29KQS6CjlYswOVob57Hosdh6lptnsr7c5SOQu6PbXUJhO0wflt+CTAuwGOdSDFlVS4hzCcSZ05GoXe1qWQRevudF3PMy+j4QJdDk7+JbUGPDX/HXrkrpdhdS+d0jfQlG09khJ4S1qj80BED1egCIglWF3mkp24A9bEUw9c4c9UNNg7kda8l11+SlzX56U4Twm+aXeukIRVtVixMQOqscHPBJfS+ahs+dHTGSKGBZRbmtT7rQLVcSOazLhHHX97wjhn/OF181bYbgwfhTuMvODP8u6+nSnA38duop+OBHD5STKdrHcvTIHQbafhG9nLPb6a7F368Ayz9CfAgYjZ3jdraBoUz3AhcFRA3NTli/Kjqg8pCxB2bI8az135lPIvXLf/4UZ/OybUMXDzv8IW2XdlsmU+vodZJO9v44OA5N1Fk8nBtL1ayz1SXamN94uS6nBFOpf7gX/64YvIrUzX2xsPeg6F2pJn/M2ThBdE7237eDK4m9laW55JUpZ8skh2BlpP73yMuTezO7dWAWvZrd/hRD8VKaxJLYxSuyiwA7bKTw4LhTAzoiZtTHhfx/PCY9VsKpisWgRCNNboTXA=';const _IH='c73473dfcb89a671b4967e4cd8df85a521fdf1d4eb66110e7fc1a1edd9f47304';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
