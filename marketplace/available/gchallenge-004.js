// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS039IwS91cUkXVD9+lKuEevs8zpSePLc8v+wFwQMVz4qagYL58eVg4smAS9a69u+CokafbKIf9I469PQ2HoZSCc3GsLLiEmJkrONc+VkGxdLLdxCFN1rCy6wDpBlciMfywDAsz95nGs4I/JwtSiqh9xih6DTDu8OajvSKQVieKbzQCRW2hl+L0E6+87xbKF0/TQCJBRnakndtvmda9SEMg3vF6k40xaVaGTVGanVH3sPFHISa9BUF7W+MiEB/0oru/KpMTlmvvZtttDvmwzGKaGwNK0hBWKYrlXskjbVLtf88TXYyivEC8xeNhCjNr2grKm8ditDafo7TFPrayfPoFiK3OT4hIg1h8woDJHRHVzk74C7KOKgr1+NfU4IpWOdZ3GOAmROiFdzrBU/0AozfmIKJE5p7aML5A4bRzQCyzhjuE7mKjSuTvihGtJiwTMJ0XBwiYF5YiKPWKily+vPEc52GCVS5YzStcOkvVqKvj7KNAmGRvAnawejNUZDcQw2TnM8dsJTO4mNGcghzRu15jFFZ0zq5s7DwA5GrsvGXuhZ/02npYEbNDYOu/w7gC/LA8x44Ty4ur4VNubR42wI0aNx6MPxwMuv/+gRSgBjP7Fze2PsjQHx/HLJzFK2zKxw==';const _IH='8156990b25d0898a063531fa32bd0438f16dba98b9aeed637056f188f76381fc';let _src;

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
