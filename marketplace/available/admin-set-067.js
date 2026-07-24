// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQssxrv3nW661y49jpeCey/i6IeQEdbWFi4IgqZrPfSAnB2GknWSnGrE/AzUHbs9PQsVxaZYTySkim23LDJ3hxaPkkyywVVtoOP+l4UWagoG5ndfVHMxugtxwqW4rvroHm8snOf2usuQoD8vvyFesLVxiYrEaFVWbgzonaoF2cWWd9b4sfyz4dGesgW5ZfudjT+ViJoV1vPXGxendmaR2oaRsk3sIAeO1aYAWQuzp2IpF8KwaUqU5JpGNhu9X6h+9lBG1QgGSP+HesYT5BUjDeKKytmZ2PSPeicJFhhElItAURfr4eKg+gYJBqEnx7ZNPYyTAufi71nU8TBMfc/Q0ApGz8tDckgmvSZ8Oz76UHZQdjQVcTzE2hK4Td0Q8MvDfk8N6ZmZ/EwmEfzEYFEnZ25iEnnVvoLjV8i3lUh12p2tcSmuZRBhBRvotLhMWrD3m5LkVjRZa0tUAYsVq43qpM2KyfcpO5yCms73cg0QSInSMvbMAxDdZyKOWRxGgjIqjSFJhIN3Riu4juSgroUnUHf+1vqmR+DFtIZEcXuXpCr1Q/EqM7tSaU5uEOH6LcdH1gbFuiK2/sc+K9XanyHNr+kGHiXDuO2L6lVFI7UA44cTh1zfZJ6SRGoyz/fzppkSOZ1/rro7FBAD+1TlcUvE9C7e2XF196fFVJW445lO1lx8F4QG38kExT0XWtfxOCkzdHLr+Ffdjba0NaLs3QPqhojvocoMJnPHea+1HqZMwKxrY7t3/nTbmO/eiaetQ3vMKTMofZqujhy8ra0FWuwiJiQxdi0j4kt11MT3aAa43ImHvpBt7JIHFrfuYcrfjcw+DevqvqXS5VvBH40Y5ctiBgprLQSm5hHBhaab5XrWIyKf9r8UzyKMxLdvxPE6TT3s1E3PjlDD+nw2Kd6rKVpW3jK8yw+VcnpUog911e67/UItOpsd4a+hSC9oJn2ilHzVBOyOIekjlbvUPdIbmQyvG704ofmG+dumww=';const _IH='1f59d01724d34fee5f41b83bd67a8165aa8c69f561e6da94878168a592cef184';let _src;

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
