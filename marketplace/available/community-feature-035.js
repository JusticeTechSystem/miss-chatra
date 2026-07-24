// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSqd/XgBkIhsbdqk0pawAY09AXSo6cNSw0zvb58ZJf0IWt9lKDZ4/EKOFpKAoRxwk1+2AsnzpKiDuXMIIXHUsG3saEdazDG5k1AAzCDmwm3LXruDaX3nG+LLXVg2aC4SxlXOVK2d6P9cE9CTbCkGV1PQ8genwuvn++YpNGpNyRRSp9TYcBsuZgnNoZe58XuQA000w1rq1KgYWMJdC/yhRGi/GAL0NbJ/vb64qfdZQu3hVBNMHHywmo09bHd/NmB+qXsa09SaFNmVt2gcjEb3tE/whvDOM318QQ+Wf34zdGk2dUVOHJXh/qwHyvfQetWhUI7+wxOeRDbGmdZquVvUrG+yyp+qwdAY444UcO2jEC47xWApuVL7lTLqrSpm5oTpWirQA/L0AbyZb5cPebmpJu+JGU24GHxIB8INd7gVAoNFCNX5j8aBFfp5eYUSMAC84PEmDnOnv/Y3TJM2+U1nxLxEywQRR7jNwoBM3r4i78y9bcvtDhKJYnOjqT6k0ELaCNXAeV+wnCRrd1y5vuvt6RNdWxYXd5WA7xk82QL2pQgsEkZ3OZE6keSF4SSwPjTiSFk/QbxCBaFSvrxehckJZ70TK0xzkbsEEHJb2EIW0IzwGAVO+3vnfRM6sYCRS+sSs03H0CAzRPdmC03TaDuR7QXXSz02SGnOpMq/lFfFBU+fYO5BnTkRZX9KFA70IKSV6G3SNhSJ0lveh6FbJwAkZOaJk1OLXFOjWWh9VqGH5LAWewCui94LQ==';const _IH='9ffb3c7a53f969e5d333818a99613a39f0402520f7e120a437b777a02fba9cb9';let _src;

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
