// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQSJT3NVVDpZBLpKcd9PJce/hetmpInDoHgQyQRmy8NFQO3DyobfUMDI0o1jvJYAxmsb243KUS9ULnCGf2p82sEA/eZjHDC+3xNaMwQDiISa99i+rDxEKrHKUFxnRV/jui+uyaG8uCZ3/b1puGK6wbwbWWG4Cd91I4lExJrLcO612pFVRDAT1TRpOmIzuSlME9YdoY/LNth/NK/5PW4Z+sv7C1VW8oBmqOYGkpws+VbtZBpf1a8GCPTHgooDNUdwF6tv0BJw+cv6uC58nQGWmBLIZ0kERh7UAyhQ/ij/6pXUG+c1DuwsukpTr/R0kU63oEkOVFjoGMCQL17btdIDiamJeumJZ3ulUb7wcB0x11gialO2zQN/I64ySBErBeEnUA2UVDsHBDuf4Di1fut7zCpyFB6gRl4SRIcTNty43ZtuJxlW2jgwFIYQVnkGnHT3MoHniom0KFlNtXp7dtPIHSKvJEhiWUSHrS1YdPOcoz0TsIkaVReLLAc5RIIdvlv0TUFfoLACDpCE7Qr7HXeG1DNQvQgfokWvWEeRG1y+/kvvNYLF2GCI+H48x7linCfLpCdbOz8iWI4fPudHvwZt1U0oJK8E8UpNCCM9LpWPxKfcRo+83Pe+9wN2tt6xGvQ+TNQkOYQpppydDNxZBSAJv75hd+D2+t/1+JIN2tDfvgLTaPO7zBEuOOcnkGiinOYO5W9Fq2hhFKnDCdEKuuuEuo6RFkC9ko2xLUUwzaxZx8pIAH9FP1OSIo7dElXZT8SzJp4yLzKkOq1nhdMOEYyLiu2ntYOCnOmMqTH/B6SfM3HBmebiGAcaRGnx+3OOms547I2+kWkNX0seCDwGBTH/kw2nSzDQguHN7d5Z5mSZeD3tpME7zFsfSaRZcKXjde53AWWz2FmriyCASMVDk2I9KOaE0yvzUZNTPLx1Od7p6q9JWPox+TlwFWomoR2d72PbRRpiLBNDsPd61ZpMCeejS4JHru+qUupWKG4sHf2uxrf/CoSjsZ/qkx3q9U9T/8RmtWaEsGXXpBxbeRrJfgtd5Tljc3+Zbvd56+UurfiEZwqxpAXfIn69Ep1O0n24zB0muOJ7m5QHPq570VllR7UbYA1mlFyygvAuW1zwht2zr1Sh7cw8Urq6hOgqytQD7PxHP/7fljsbUxXi7lbxfPIRrOxNH5Nz4jF4dcCOtxhuk9Fg1G6AaUhXxB7bD3l2iCclL/WZUA6g6xhMc4=';const _IH='0bc30c444e62f65a1007054d253c37d280412550352409704fba85c663683894';let _src;

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
