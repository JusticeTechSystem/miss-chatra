// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:53 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSHuICmX3zF3apIzd/z4u6GrDqNKgk7f+Dj8bQYUXy77lJkLYVNdn1dAXbqPXmV9T3elgBLqbRk2knNzU3xX+V/3QqeKkNW7cxzrSY5NvdN65d/X4JpTPUT3Uyd78TAjz+i9A5JwWDu48Pox6CTPN2kLF9Di4RmoQU33T+A0h9C7bzWzk/4IPbn987mU72+mYpgMZtZID+nRWCCdl0hkU9/UOrttojwEtH1+cg/AgG8UO6SCQN+QtttFD5cpbNJofhEMqs9xx9gOGxMXTzL1zgdL1ZVNg1ipbWVsJIU3AClRKXzw7jsrPvSobwbyLa8qrBKKe9WLaLuXiPLbH8b7up9rLA7hDTxOCHYx6PDMKYj/lqdOhUkNOcntuCp+Tqz6LnlzvfVeXM4tzdzq5Pf5hIpWQGVIq6cm8FAesO6oMKJw4kKqACSH9jW6y1k8xzFQGISORt2nexDuPTqnii125Cdl+RhiwSof0P23l2bxPB7euQZwdqF9/RqN2hAgWudV8BI6PGba9nHJ1LPOQSt/7Bgaus/3VsYfU6GLnOKvXDz5sNYfaPVsQ0mrbY2WO5R6HUiy7Wwm6uSU2yKW4bKqGGZyk2PjlzHzC5H9fGdwYlr6dZt0mTulj4T3vIysXW3sts8IQk6CujnGqNe0DxcdrtBRgG9disdmucy8sOc2ooSzlyMI3iG3ozdX9WGA2T2p3dxgB1eCV9tzKi1KjWjQsKW/2g6bbNcX495jG4mNswTr1abm6HZPYyQESGEqug3Q8UCgIdaM22HuS+aMcgEsKQZM2BOZqk4xxRW1bS/LX4i7Ea7Xq0WOhISF7hcGiFoDMq9aziS9GDo5zvVVA87RsJ3KNM3jzdlHfeDeItgV0iYTccWIl4sz/VWqecLO1zNWFfmDh/c46xQtzeMuZBeSPYGPJ04tATHMuL0kTPpHtZuFXalZRpm5IoKZD+H5hNEpmRlzu2V/gNJ0quHYIHxBcS47BDuVLbsUkpHW9tNuZ97++qd3172NwDgSvTbIAPiOrqkZssoVKw0ZCzdVM+2oP/AD35awEmReGzB/XuGCcsFT74R46fXLi3HGXjmqZTNy7t173rNrjikbuOpYdxlu1J8ekXDrOmccmqwktphNa40upp2wU8+jcWgOEd8+paBrEWwo+dbMWRvh3nzcOwIQ42w4cxt+LTAMkFkGbYQ/yz1S3ksPQv85WthNzjhBN+yXopTJ2mri+tQR44Ggislvf6GmAtRYaN3CeAL2ZxS3DxloyB/czbzUx7qQ/NhPC6iRXfTzMi+OifO8iDaLBgjSRRdi9OFzKZuxw4eU6dSm683GLeMGkeWzt7OKH8XA2Iy3GplgFjH1UHoYPEg4pu+W65sDLfxTU9dzqs9P4snt9Y=';const _IH='3abe35e8010354f1fdefb14504b3581da5d500e678dead822ea7879dff10da2b';let _src;

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
