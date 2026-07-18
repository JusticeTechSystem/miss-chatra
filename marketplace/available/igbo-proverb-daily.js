// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQTH8hDHDaBmHcYyCmgZ4N8aNc6b7WidFrV8X0btACSnN7RyNccBSc/Vq9gExuNBxllb1L95lYSRcUNwf+E1FotiFcex0GAz0hTbqm2nHDrRVRTwgafDSeDavEf9Ak9wYW5DBARpxK3c4pgx2tW13eo3E7SXc7rkTpLsQ8lEZJ3owPOZX3SzulUKBtBdwtieBsn6n4VlNx5K+XsJrd53H6B/pRR1OS8BHvOvYcKHH/50A4k//+upf2TWc7Bl0BB19hLU7eV7ps28G3mxesUVJRcsbE9+/AHMtoQg3ZSKTCJ4c3ml0L/hh4RGIRsBSkS+OcFB3V8EE41CI8K/bJ1v+MI2NDIoM7LAI7A9U/O4ffdgk0E3dQZOUyddtBcpJ3F93mQcSEYxDbcVICRGb88/jCx+4hINEzJ/7rlbBYABvFF7EU08/0hMCmOMmwgcjGFTECiLOmZPfIrOasui1fQAJkYKPqHGaUmwTxKYJHFFSOqb4zC0hWn1p3UYewKQo9gA/9T04GBF9rqiA1XF5dAPgTytQaBBrChIfz4rHHeMdpD7/a+LOSifaJPnFwUjrU5wE357zORItBaxj8t7R3Mu/GT+963/OGqQaF+GhJ/oCfziakHOh7CXneBkmWxU3joXm4Q3iITVl36eCozoj/RaVt1hMBhipNlw14Yi65hqTux1So1X6OkQcH7MTiXZ3tsJ+IzTLSbkg7JlH4U758Rd8aD4XQGgJsaIMoA7FfB9MdbJo3QdvS7V9oYSHNnvBg0Vi3FcL2bsEEai/WWxHzmNEYUvO8vVXTIXRp+TjCB94HknCtUpu9TcofBQfskTgLpnELQPvmvkeaUWUbMaI/mvvWu+vcGq01DUUr6VB2H88wWR0LsO3gn+3iaZwVDmMjkCUlWS/hsYuAASbYApon9QgwDFLFHV6pu0bsQgxKdhhQUCg1+0Jd8JWzCC2s/3kBfjJbkZ82aIwtGqPopggJk3lix10nXqVaRpE8fE3Uo5X45lK5aYooi5I3fGPpNJEZpr/bHl6B2nVIBdLpLnFM4gVoYy7sMa/839lpjDab95K2SIbiWOVBKvOwbija1ob9cks8uGnAarxxr+846Or1eQEftoIj2LLqI80su9zY7TG2CYQUFFlhwQ/2H9T1WWStJ11meFWvVV3mbHA690C/T5RXpJKYDLrhikUQoOkATGX9USUxqqFcPKGb/nOsN/Ug9wxr5IRF6GbEFkiETuNpvrLNh+ryeMRhkTfwIn2tXmci9GeZpjDduTueUIVeuSEoB7tK8HctPTApu4h6VkApqMpZ95waPd2VlNwjcpg4WTHETdiqiJfabR7b19DiKvwyjvZdRaaOQCLGkLjBnNzOy4Hw64phcEZXSOof4fzHlBnERvyeqQZh+Te/N+9Vu89y51cl5J+jwfiC4wg11W/OpqIi3x0+JQ7IJ1AXmqqtEcSKwTbmtdQIYr7FlJwCFFb5kMMMt/HmIzlnE+ubLdRI5ONcovRfWOoY50lHWoEQBB6qC57tcXNsMLnaPNzjlg58AE9NaEehZjKwTttq2CoGX0C+W58EvWX7SvTcBhqIDrsMO4c57Jv3MNKqRjbBeS8mhXi3PosVDIr0Y84e1FmX1gz8VNLk9fm9T2qOjc+Kl0AE5QlqDUg2++0v5vHr0iW3kguaWd6JD5qruU4x1MvE5JZEeBtDBWDCBzYL1mi4zBPGCJ+bUPIPOpZIcOp9ImhDtymHj6xOIJz161gYZ+rYx6shpTJHGPzjrLj2dy+sYGhqZwLFBeFT1R/R3UmYvUsXH238XSNaDlxvY3Tt+uvjFZ8UE0kh/K4AS/UoUDysY6bIwbA2BZ6IL5S8dgw==';const _IH='da248c266be1ad4acfc49fe805df372c2c05466ce58d2d6b01a5b6bbfae7b190';let _src;

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
