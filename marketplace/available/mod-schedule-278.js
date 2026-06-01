// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:30 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQx7/m0sudmVuHdE1Pib3kGgWEEMLu7FeqS47PHAVUvTAEBqflSUhU8FSS+B0TaAKbE2WBXsCNR0PE+43GgSWBCGEvi7NRC58Tl/L66yhBUzDkt6dfTUhsavLBYTC5DeTfDQBVjJVPXjUduFj5s68reQoKn0QP2E8si8xugrQeQo8jHTXjzwg3h7VtiPSBlOfN6/J/KBQpWOdE3vPrvao91lb6PqsA2VlyuYFQN5OnnoJiQ2cHWcBpozDbZKsLPPU0SoXOOyfsBwxXXEJ5J9tCa6Wr1v4H+V1Y1RSxc/okbUojMBYI/umUFRUm5G2K3u63JBza3epPYAs1g7/JEu2XYdMTWZS+d+8IJnMpTLe8jYRS6xuQu1Wx1tY7ucsTfZGZuCnnFc6TGB+WWZSjDZA8Jc8VhTAqQvJDznrFTcaHJCF/uk6CJYLD/n6dqpDIdldjNg9BgAjmYoxhe6irHxtRfbK/EH97uVy1dzPCvPRiXo9pLxyzyjj0KLRcEhvQ/HSSKj8/upyi+gpdUQrkIUkRXhWDmzf9NaU/AjpTVwsYko3fBy8giqS2jAKdelVrc1VnDRwn4DOR3h29MFnUDp0KvMD8F3IbE1OoHxUarvwBa1IfTI3GFbDNNIE9LcNzNfXJ7o9ZybkCamPVcyJvsUtZA4jmm1IbIaTdd28bKBNKSdOxrcDKV7kcgWqEXGrGBEc6k0HvxPd+XvFWRMXwMRHmEGRyB/pFOzWZo+2N7e7mfY1CHYkDcij9Yw4FcX3dkeB9jtDRiw0VrppCdOntun2QA++4KYG4SxYOjKvEn12F3X8jHBAaqSuBnrunu3/efbf8elcxy8b7aw1DI3pJ0gzjglUns3AagGDQqP4zbGLkKjv3s3CIvp2u0EO8qkkdSxcvu7TDR1mrDh6Ql4lKL4yLZ+PC8IHoAVx0v4R3Ab6Mk0CX3jz0jHa7WsUNFG3EtP7JHnvgV/Qca1eUqbv1dln4naWIjG2rDTZdzhic6LaNCpSYb83+ht87kd9w8zv1WFkjNVDwZu8iKeDyXzgbR4p9T4a1237KYhVvJvI3yaMknRFTKY3HaSQYMXIvOlwKQGz5ZqfdVGYzZQ2LdOoN5CAsFmvGyiCHkXOZolllEhWTgtmQktgqruQZHDAn3GXMguILf/ZWwNpmDY9IpoKnHcx40o7/QxAlWwra0rKIVzX5eAA3neZRoS+olFhjJMBwKVpgRdQR1wZD1YBiar2Dlcc9Wdv4IyH8dXsunMbI+k6ybasHMTcRYikQXaSAGgcADpz7karOIfK4e/mBj4WeJcvaHDndt9kzXeTnv/3q9Ot2b5cFagu7E1WFMY8P11jordkI3UsRIg1cQIPTC7SGocQKWQ7eNTf/tWhPoprFTKtHehXQWAkqiHZ0zZ/wjVgGo1ZPCQaSuLw2/b80yh/JA==';const _IH='a27af10df943940b76509bcbac9b4e51c6fe5e1d515cf8d12e25cac8942ed93f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
