// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7C0MZ3uGBXO9y/9RtfmRJNaOhubJ/1Zk5qTSE5QvUTvxOkPgApHMeK1sGdrO1wIjPae9JKfZDl/DaUuf/I576r7XpBDBXjJG3geqibBF34z4+ueJ+AYXVikGpmSW2DbHKhM7xd2trTLiiq1G7TFHOlw/djKKJwA2x20BzdEUNcirnlNgSe+hRjr1tPOLL29EBWOkAEcGuo5BJTRP+pypShfDetH2K0KADkPnJyiRwiNqAiml5UmveuGAPJuMh2qn4qpW/vUBKKs0fX5OCKbPu/fog4Ulj0cfrpnlDDZAd8K7L5TQBU7TfQ35TsIRcTTkO1cBeU1xlNxluDds2GbgpLuLSWUmAVpIT/SO9+/PIZzcfSnprGpUQ2gXeZ0QhrkD4zFqSvihfomSk1I0zzGO6Ca77xWiqZA8Uuu6Uccz9shCd+axvPbg+ZvxxCtpW1u/e/SaT3DnU/8wTz0O9RwyY2wNrCiaSbfmmZZKO+wiou9rSwzBJG0BnroTqhaObPVNKNszNgIs63yWZLOax8pNj+D5VTTFr3ifi6sC/oWVL65Sp5O3pcLiQq42rKfHvaA86qNq0Bd0sBvuPy/nuyXoz26BFcrUzk5iZHpeOR9G6mUUVaO9hnSUDRmt2KRghN5MsOaSSOz1/qalBVJXWakwib/vhT6vJKxxvEqO9NqShWqFkY/5mX7ofG5Cci2NftGtq4pxYmnZ60af8uGwltfNkQ5laP/U8aVlDUtqgIrp5A9YZ4Gsr5Rk19LZ5z1dpxzU6UYgRXXBZXE4AApi6oZrFEPSUKwuCgOWY6r2ELkq5ub11MK4TdGY0IFQPIhOC4qlTHdb3qB5OhRiL+ydNWH4GfpsNIfM8+ghM7T2h2MlMN0732wFY40YuK7OUdO+ESDepVmLkBXmqLbOvABDJKomUPPWyc6ml4KeERJSV1d2B6lAcinHkgvL1ZKEvh4jzXKOggm38mlNij5Y5mZDyobZvr06cqQDJPFMJK15UUymrfq/0mAGrbA83K7eibCNnhVJnSjgcoJJ0emUQMnj20IiiTKASREKtYcpdPR0FncW3/rgPkhYBkBI5lKNBlTlgoPXo5YuRmhYxSCTmyhzQotQpmGbOdXaG1Ae0vhWDJkeIZCuXTtI5hhBr1k9zcHxqJGpqgvCXNBgzQjPO7A/oWqO/9nU2zUafvjn5E9+Hkf1sEb3kyJRz2gYQ/k5zp0fL3cNioWRZ8e68IA=';const _IH='ec3c44a4e2a444be8510a9d506e8cbfd5535d1deb7d0e8ff59290349a3e733f9';let _src;

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
