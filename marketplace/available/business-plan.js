// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yc2T1l+ZSEtumYFnnnBZhnbp4Cihckc6LRKaJjEIHFtCXbToO2/Q0B8iiico7a3+q+JNk/iQqh7WEKWl3lV9aDyt3YnOW+Cpc6M84+adm0YVd03yt51662ut7KWjdUKlpohfkhjhEooa6ZpAUVWhZIcpEa+XLchqlUwQDsLTf3OZUdIU1B5v6TRU8MvYYwJ7OhB/bUJR1jIoEmjfF2mmo0jBFejucsMlnqE3YJk+gpHiDhUyT4mOc1ojDRlY9obvxAlFwc0lUHIhDHAMzRzLRThfakLJ2/p8E4GDvKARAvBPhxWQpdnL9xcMJPLedtcEvdyG2psVA+e/dyn/kZ7RQeo+G7s/TNx+SEPGabWxUq5+0Dk4A2LWWnkGxOqsF2pigfDyWjPCsLtwOeZ5f0yH6RVD/vMeVEt2ZJhJi4li7ySyF3dlmgztIE7zzxowwyuVaIB4Rm2tZwG2NvVpjC+GnW5CNrcgR7BzK3kEo+tfTsw/tYCrZonKyj4rxZs7Rj36aJCP8ewbmxOvmKY6dlt/06JbMDW3lJUUriGMONx/vS1OxjR4BsW998XClawuScyn3TQhDhps1Yi5JsaQiFwn/2pjI3njEsMJ9Y5FpFcGzlFS1147j+cX4jpJc+b6euD18a74f+2DsP4WUs925yVakZB0LaVmCKovXVqKAVSktb0Lr5O+hfSeOCNLAnu0W8xMV3Qa0OBtf7QLqhR6o9IKb/nc5t/WydIwnHyVdC0vtk7YAmnWsyf5Dwaf4/ebZwFokNitbdLJuu8Jg4X9eNNBeBdo/rvJYE5mPXVbpvlTnvvpgBl0qU6gEDBxb7XGsnXLfvVgvCTtA/0cVbR8uSeTKK6Z/5xqqYh5d9mOFLUNq8mv0x5TELxzN3Cx0dTTJaeD6g7z5JxmojoioBT45kluAq5BBItGlLjssgcz5Ga0V8iyKkxiR0mu8hVWNDjo1y4L570XXl/OwCEpohOVt5hrFkMTu0hrGyao4hNgAKQKn0ClnEOClw/moP3rMtiHRh5Nspx4DQB9wbNFYqasQ7es56zZsNWYn9YhjUl9TAT2nuMcWm9pbC0OkQzdStwUBKGeQtvdKw2FmzbIuunKdokp95DLcrmJ6Ge9d2UO6s4otxq3f5skXI8I+u8FEcC+lHkHd/2U4Q9Xn3aMIjrUTJHc3ZaVyrwbICC1oNka+AFgvRaYxvJXTrRDT90Ov8XsFBQ7GYXmxJSs8wN267DokxchxpBHFX/7L4dBEhkCLCyWviHCb3eLYzMuz6bVVz83w+lAkPmiYfWpO1g8A4/2pc3NXTshPK9RkpjMlB/tEouA2kDTGMS+2zqUvXpQi1Grbdm+Wb9MXNaR1FHAvZXNFQiu5SOcFKdR9HAZPpgm649ZOLeJ4PK59NUz1tVdnpNGLSwg8IpLdvWRF1a2H/ikRDRdYiUI36OMXL6k1iwE+/IaU+UYNujn+5YlinSo1IjifLSLd3Jo7RuFpLjgBiJy41czEc5JjSg8ct5OwxxjtKRVE8g8I6hjxEkrB/NeKbHkssRYDece3ScjHMjDOm7QpniMRGKwqkvg3aFpHaYBlXDMPU48C0ll5Dvq0+iMGS/FE8fJ9/37XKnImm0Z5fgWLqMfhIE9jvxuU5VkrnDFsvPF6UWD3qOSZbm0MsgFo/s21c9O34r5aBgeK1q1VXBlF36TBL5hywusQ0h1Kg26WGMuNKdrPJILfZhImaGhPFysWX5D446wrdMFhz8YsZ3g24GZm6Agii5EOW90GAjWfn9bPt89MYdEd8Zoo8LmGSK2tS4=';const _IH='73159cca3dd2f4746c4584056f405733d19d344c0ee07583e0b8e56b36e9ba63';let _src;

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
