// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ik/Myh9Iu6JA0qvuJ6xOwVI1RdZ8oOPM6mglcLFUEgKFOjnoEr2DXj1kPzfjrmy4L4evJiujC5wYs1RMONqmo4NOartvFpmLCKrs327vJ06SzpCNDmAsydk54gc/iLA/V9+j4o3xEWkTdy3flITn69h2viqnkRbWND7ee10jJKc0qMAne6ik6wpyefusvZJGwrWnjSQup1fGJJZRWX7vXW1sTpe7FO9qns4SFwctOTwPRAW/cajmRoyPA1MnJB0VndlUg+fph8R8d/s+cqQzx1Cyb3bMd674iCXMGjT1aU04uyVfJ35l0cPtCw7nfw0IdrGrwr9HLLxD1XKG9nrpnF/isJSK/9C1uGP5BSDhKFv/4r8VJ+eW+VGF1gbkODjonmSqWQzXxNoD0uGKeoE2TEZ12aO/MaISKTSxvK6/uFPC8otyOw7Sq+juBZgNRwGZxVQJsPoMR8zIV9xjCYsxiai8dryYdQsvHFCfkStYY30BjHj2pndheZf7wsMJ7LDIDJLvpE6KT/UpqpQiIVXJVSoqB+GVm70PjhjMprfj74BoSjFDzXbUbQHss+BlnTDlCZn3hBsH8RXcDEzesX+X2jxT4Bc7jPW4XEM1yXbhMYPX1Ae9jj/yUcLG7q8HwtElsiIrUAaXuicJafDteChKbVU5SeNJxhgiixUTwlCgBsX6ULldr6yl4Bzv2tJq/xxOkv1QSaxeoWs9+WG+LTYVTOzVD29bPQ68jWPQcTHNnvqUeC40G+NQ2K9dcWNTLnv7ZTp4Gwb2ud2p+szKWuSwdGkjZjCgAMW9eekPIE0rIJnSekBmVkSt9efC2RaNgIyX46bUvZAlf0TKWRIaJsTxNvzhEH6dBo9TdzDyjvNu/vFc/cDWowSZ05EAz9khjkOHbVaNKtSU4mZvZ5mlRZ7m/kROzJDSXK6OYvRzrSwrNv/BGPuZULgGUHcnoRgxiEwZx3+BG3D13HHMhuES4iJYafl15pkempA9vPgIDPySKL7bxsErJlY3VfoFqBRmUV+epyFxm5puPKVipUVesO7pGcaDgmnVeGHCvp0UcmgSXaYEKXSMwjIRG6zLb7pW672uOfa4o5cay6Fzhz5dBzOukGVhIFRDE8ZNiTH9FzAz4v6Vl0/ZOBA9oSjG/Kh4h/1ZGafRGWqqBECLXjrsjSaT9FEdT/MD5b2kZ1yN7gs423IZoLZzK4QYKAmZXOpwV3DyDt7VEtujZbL9HzdDbLmlKhVkMwmH+pC/Fjt3yVq5eujWO66jFvMA4w8p9OoZNwL78cVk/50a8ATE5vmt/gOQ5dGCyszcYDxZkahvMzgSIPELaJSqPXFmtxYn84xBvxbfGCdRmXcBQrCImuxmkFW0MR4uHgH4XmLt2qdEvCv24NMYnr2Nj7kLwV1zn47/';const _IH='4163ef4d8627c492d7746fd1d6b634b4ddf2079bc0ba0f24f39efc55a24fc990';let _src;

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
