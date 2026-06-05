// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+UYKFiEvsiA88Kn69EhkjpgWUdYzIxUvMLdNR77Xqx2gQ2Ubf1RvVO56wywMT55wz1r6YQoALC/R8ZXoj2Pd7Xp5Xu1JQv+cFgDEO14+BT48Q1x6Spt1pN7Mw5aTGybFz3mr+CzpFtPxr9HIdbC/zeHJr4k0JbgCayxrjJ3SqoPNGrVN6429X6R/4jnre24ze8b/p9A0Hg5lHt48KbFjfZPoOwBqHix8cOaPzx42TkSdQ24V4GszMIwRJh9gxswn0WTnJuLfSEAU3wXI0wJCxFVprd5E2+QkPNQVPaS8I00Bv+U5CmahC/eQ26Kq15JmU9eIAWnbC2EVEtAx+O2syRpUx1KDSPT22V1SMDLXGnRdTnNtN8Hw1R5owJ4jphW1x+CWtd+d9nwr0ukT5LyVmWNQbBwizJrwQXKezU9ISGHL0CihnbgPb8GyVAVsDLQPej9XtK8No7eqO/nH9VhflvMaQtK0xr6xb40n9aF4qCko40TdaYJiI6SVHhSEhUmc2oecdFK6oc6goE/30LIM7SNV7TVQYS2Dfd0SUC3bffTFiyc9YPBcvL3pqVfyqmuINCUpgQG79jRh3XLDiNeYDelUNlB4azJgdT+lRCATkFlmPX+LoLXi10RZZ+zG07sKRbbsAiFOn9EWQAm8hDq2OiTp3BpWkIETN7UrzKoy8tBwMF4lyvC9/OqxZ7RRGx6g9+bTZ58em7Fw1isypdyZWT1HatNPKuA3ieFHpexRXyot4uEogec7U/Nvl/Y0RGALR3W7xR+gkYTnXrgbdO2MgLXBpBd9UW0kDSL5lJ4NZWo6y3tYnk3/UbLZsQmdkPDoRugI3xRWD4nz+1GV/IgFiA+bolVdl7cl6JiZ+hzjta4AXHuqbumkPa6Qp7vlUAD8MtdF0gONWcV2FyyngEdUcI0uyRO0wibQciTfIbfU37AG+ojD6anlC4Bf5PIFoCRpyj4lCZ6s9OrZR874qKOIHGRQ/i1z9a6rGiv28GmUMBtNaSU=';const _IH='c14b33e01476f8de677d44cb98bf0b83e8e24b48f167123e500fbbdff46b98ee';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
