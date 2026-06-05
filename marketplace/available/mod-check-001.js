// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cULeCjb1szHwaFVu+7Pa4eCpbUmeCa8IxKpRXI64h9Nkco3GBVicOvS5iYitQNQovhdsDt/MP+4Zfg59wNA98dzzJUwLtRaXY/sG10L953T0KbV4K1FQ6cP2MEnri+iRDWQol0wYp5WBdbT5G98ZFPsOyymaoT/TrtdLR+6By70LBS5C9DmBQC2A9lgiMrRC6QeoeXxCNsJLG+A3dbWSxnnk7CLQQbbMW5+hdoUa03757Ak2pgfmHkcqIU7c8IW1eVklfRE5A/kxPIwXkG/pQ0jLL3lusmr/KkoqDXk+0EuR4Rfq971tXrcBcx3odzHrI6pRNlcP+Y26GNRgycVAiFwofws8R53gTRIxkzxNHylmCkxnAiB5V7AN0WCl4C/P83xKfyXeTXFSSU4pY4wphW0ZkxehdduDn9Y/Wq3CCvydgphPCrFraJqvClwXSH0oiKBpPGsJILqWipJs0U5YuIIvsqTS6aER8+dPr2+yhIB9pb96yEVhI/OZHhIyXNoXmn5h2YYGC1BsO9Xl2TaPFrPgRXeMlKnn1GLlBsZkxeokzVYve38dmpSDIu+7nNmfH3KoJUOhFfpTE9iaz3EMK60JW08BoHspUEpnds3bNUw/BcYQXCb9tzxF6LI7r+8JGZoVOUcZECehjqSqgFLJdPG0BQvHB3LLYI4/XDl70PFIl2ugeLIGqgDcKHqW8MBoiWbYhN/Z2LgIt2VXRphaVmo3mQM3RNogqAKmZSt/YhBDww2rIRU6wanLG2artD7fvQ/aOIKRBC/Wn8eqaVs1qgcj2QJO9QLm4Y2oA4+C/nmGsdX3CrkzJnfd9XISR3bep4tC69szvZ8a+tv30GDcItWX9RVmBV7eFwg1R3JpEpyFevhtGK+vHGh86jHMzcu82MvVUbOHc9807WwU3Zo8ITbxgqJiESmoCjFNt3Qxrw+24gCyDqdVEnk9W+EtRtShUm4Xh87IkYG/m4cRxiBzDixav1J6riQhat5XWzNIt8lF//ayjJI7lP77XnFokTx+HUEBJqbB8nmEEduG+3UivqY0AiBp3WGHk/8TwZCeZQNtpx9iCcURBWb6Oz1/CW4YFJV5Ujt46iq/qgn/5DfryVl82OkXEkfPMgq+XbXIOfDoP9V8SWiaOAte7lmNdy1TEAzMtVWGd1YBQjghasWA4D96K9RUyTg4i9YQ/IaR5JIzboFz4a/L7sj5GA8b33zZDqO7CU5EgRfY6NpbhB9jqgjko0fTFKqDxezlLagP1qa5W1XCW/hdPLjG5uG4c3sBuISj9QQqBGy1FwMm/EIpIAnCizanfBCG/koVOYFeuvecVwQnTFFJD6+fGdnrq72EEaX4cuPDJzExdxDhcz5IWy4su+A=';const _IH='fb0802524a66e9ddb6ae81ecb5cea8efe67010646332ddec19dbce42f701ff20';let _src;

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
