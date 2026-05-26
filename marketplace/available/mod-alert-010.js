// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mhsUf3gJwJhnnMA5oXiJVFNgZvGEMRDchgNwtrWxkCBeVhkS06mCf8U9ymL4NePBo4CMw8kW8NEU0wa3aW1NeOJVnhcSD2pt98WS4ozQF49tW74Lup69t3wjyLc9bsNsKj6tB/ftFih6GZm5u9Am3pmwM+4BHbS3o9wGLssLVeZC9xR+saLFT00PDuEJMzuAR5uJx1kKrPi4w0kJsk7SuwvlSFOcN1Vg5e1PDqIEiooYN8yCj/A+62PA+xWy94OWSH4IgcTNqjnq5k3dRSXJbIZpjea6OzbX32wDzi3yRFo4FJQ4w7DHIkNiC9lyPxfMWb6TzuJ03+he5F8UNZDNhLE1JEY64APyYyCecbmGPNS3hlBhsEBHLAYyiRf6/NlrorPy7qm5iCppOI+NFrC99AG8Y/slCDUXHBw3mnNY/+iW+8APBWPNVTLM8rKjCKG0QGLBrC5GPVZFvebRzmkZJ+sv59GeNFD5iwlah4+95vIwZu+mRVh+D6jvOlsU5ooIA0U7btnApu3JEJQ7vkyl+IgYuH1FsDNhuWc6YIBEKjxHyU2Oz+olP/YWQ0iL9odfS/L4iXzkQX2GIdTKuoTzHJti3sTYoqePPP44kMQPwNYpkA6iNr+rdeTjsnvW/nwX9IAm2GAgbLKwEhZa2qnE783gDD9GV/xP5B8neX7ejqYzx9eHnCLW7saK2vKREGiFtenjOf08Iw6EP+1M7llDMSrYzQpm/NKEkPa/yBWp2EgNrNVTVbG4WHpYH0Vrnvtr6DUzR4Y7ffgqBpmtSkOE3iSj5ZeY8OuixvLKLGsu2M4AS/eO7PUdKyWKPiH8GXYBtSmG7ctBIqYfaFT9Vyo7m56BnENCa+AXBng3tazfVfRPMjkUK6F6Ez1+RPYvaMp8m2CBw81Kqqk/4ScBruw91ryaPcXolRM6r9MPVn8iKH4Awsh63YcdkGRqhAHSrtfnQ4Auet1AslyDTZ4gbpHTE5Nzmi3SUUAgnmGz9yf8qycHEHIGNP98N/SDLP3HgCIlBjyuL3r+/F+Y5XAdw9O9ra4ab4i4n/f6CSD/iJMZsxjmK4WhNh8IKjNa9sLVPVHl0diXB+TBDHRwfirjy+tLioWvtd72uBJH3hvKihViNywXfpMVMqbi18dDwVZgueHycTzVkLQcaNz2fW9FBH3oOZ4Yq0aSOk1uhv/uln7NIn56FxTjDLklTG+PGH/4tjQeOTCLPBo2GoAspGDcZXcLuFdjS5KTqQjtbSseL4jb9Lqc9dbKY+HyHCXz0cNonKbTW1zOiKonsImttEjuErx+tXyfrDajxFpF0IgrGtQWqZhAH1t9ryM10/S7FoRCt08Cxld/RMEnM7nVGm9xcLaP/+gVyeK5t1qfUA==';const _IH='0b15b9f1ce05ac3e16b9a3f0e0dc361985364a719663453d52731ae84a411507';let _src;

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
