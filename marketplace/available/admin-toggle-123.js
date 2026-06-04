// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pHtSkbHTqxKUMkxZjBJbCPs2fuXcXi23Gsc5nFpm+17PqR8GE0kqgALNMcQ4y9Yc7pbj02vDuEeAFferK4Lnw87eQs8IR9/AQbpeRWGngvbveZrJeev/+Wbx3j2PNV6GSUE3PX9IrdOOm/lZjKvbOF/e13afn6py1RTpV+w0PB/Qg2Dhy/ANGNZkVErwZGMaxZqyChyeqcnvCD774RgcpvTNI+IEhUcVpMS6zxRMoXbcR8sww0Reu7HTZX/KAwXaAA6Dn1BGTtuPZXuOW9Jk5AeGRZamypvGUgW6CjiDLfmpUaRhubs/Fw7igfwQs8P+NGYfd7TIfvCUjibi9MAwlMrTPF/b4w8GvKjk3Vd6PUIvy2howF0J3wUGNaRDrNNwqvK2az6Pyl+GRAQ/FGxoRbqBA7vvav96ndCvJ+1hFqhA7o1S+aZnxN2Zse/YZO7NIPn+4QX06pK0V8ViafO1StqX4TVB8D3IOxjqS/YCe0+FAFkxdxu1qIiLeuirk5qRG0f26pvBNJEzcfHdRbUih0AMN4+25ZpF1ZfH7BnII8x4jQad/j8bRFW2MRa2nGATEcjEjyCsCdapLBAn6D/w3OC7/ScZ06KNBrVv9JNO5tMnWEg+1VG1B1j8fYxGQvHaWwMjfceUCsOOKQ9XJoas8c3YvNuElCGVtef6OZ62vPSyAwrmI9SEHu1rZ8033w/HXW9zcFfFVmhUW3c6C3zxn4FMydXnXBPgNBvOcsrNC6WyqcKydS7JfnHL5ZaiQpsBaccnoAUx2Ic1dizHkBgusp8+BFIexUUcav7tqvQL1USJA1xA4PWvlDu3K5A7HJ0OgqWdqD6OdrjPtBoCWF2ojZ0Tf8Il8/lg9ERf4+FDE2whmExG6CqN1dtoxYSj3csS1VfCUTFP4E/gZYOT2NVOwOrCPLkJcZGA5JK1YzEn6iNbUv6dSmuQs2ooBcNmF234PUoZmdvfVkKe5B42rM5b0P7AysFUaRhcYICTyATTpzowKZARpnqhNJ4QaXdLcgj4+g==';const _IH='eef95b8650faa581f845acc98459f13b37abbc10f81139d7b6cbe37c31e0c1f6';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
