// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTBJAkDBPyV97IVX8pC2FhakOppSdyIyq7taORJ69kZzu3QaKhnV3F2LqUkUbKb94a6uqeDtiyDjhjWr36C/ZjZYLF9VFQ2Da4dVwK99V8iASzyZwD+PQGIzNPCaEQdbJpjUP2k8UG3Qhla9mSajrO4qzXTRHnmWEYW8MGn5GiKu1yXxt/+w8ltPJ/1jvhxysqJTQfPH+GRJywUOfpB2VKO6SAjx+mFtNGBYOZ/bfCzRAtBNNGZ4FG44mKEGJGWOJV0SV6T3N/DM56HSth5L75iDz3zV16SZvAiJTaEH73w22ij765IWKNn5m4//4K6klskaORDcJ/YbarCvYO2s6A1GqXYlyYcf1CJ+XYZ1n4N9uuqsYOA5hiy8zLLBs3olCFUJL8+ER9hjPYBEzCZUbXHogrpNLcNNxUOTePrfS/Z3AFZoO6vOgxjpogM10NOO4aaSuf+0l1m83PgRkHija38TKoWi4ygo3t4TZ7Fsf3EUZBq1FdAOzm6WyuD4Q7YIdX4rgrCL7Lzimso3y0uMAplcKAJ0DmJgbVDZb4rbK39zwH0TJuMfBSQrGxD/FPYN0XAmJ2hAYTtA2+ARyGzMGsES8uCeeCqeVLC2ui9qMaMklnOQKu+qd4IL68NP9YWBXTDa50n3Y3NqwVVOugnxV2e/Geh7xFhb8MlYUJPE1sez1h5DSacLYk2xqBxgOkQr87oXMUtCvO/Lc2E8vJ55ls4cN6qnPNtxKdyoO+oiGT3';const _IH='ccb32def7582fe1e6e2ba2e1f28eb41382df97a4203cb8c4b8afee4a6ea6f5fc';let _src;

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
