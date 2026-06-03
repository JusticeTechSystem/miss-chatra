// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GKcbEmV+Km2DziqgeglpHRVCqj2vOoBBqV4/xjey5eASIOgdupXr9t10mfP16YzyUR44z0UFFOjox590AuKSN1HRElfxlReO0K47ykzmO+heAlePL3pLr2Qf8WqL7/oBghK3UG3aqf2ocGRbjz1jbRN6e7kxlxmO3Vnk3uGPgmtV2pDxzwk2v9AF1ka1ACozO2/7wolNcLnkwha972v0KKDSCCHMizENF8fJDwyZ3NfGkm8OIaGCLbzNhwnsjlq7AtPDj+Sak1BgLTl3qWgHdzear3cBSqt+WfrUVBZWVq2NnpFRlOkdtU6A7eXLSfkqdJcHj29IhNfOR+NYSz3dJOwPa8KcWar8yhePaf9HQD3al1a7LgEVnDI6YAZtu3wwt8mkw8RJzIjgdo92zwZMfucq7QWcmyasx4BaZKhTshfeto6V7Tb1BMMRi5DmWlU3IzakFekNgql4EOP4RI8LYokuQlNCEonNfEJ/tTvv0NukuxrLAmZic3TReHMBxPnLHLGah18dRsJe9dJ+LOSi6EI+106LSOKZ/64gjAry6w37wdSj9gt3rVg8MOlF9xWDV4qdMsCIx372rASvgHPX+EH+snrG4XJoM+RW5uaKoeqK0yoZO/Am2xVAVpXFS5RV3+zcy8af12W/HvNK5dqEzlw8knGcN4ktCqpovC2nHhtep66ke9Dqpb9eA4TqN+iSx6W5WDsDJ+by/Js0YVWT3eMPVsywizT0VdiXWWE5rOPRO/BYP8t3Vi3gao6u3pXEe2DMQkQRMaI+nP/sR+qg0LEKv5LGq9L2la1xv4oe0i3R6GwXKdULdIT8gbB//oMGn9VBLLff/Ihjd2QTwOEAt7nSP+fsKpGTgjfNFpkRlpkTdFOZQ6la7+Ltcaah3shPRv2JStTC0dj7woe98GAisGstdey+SSRDGgzCpqmY7TLlq1/0ALsm9pNlDPYtPyxVPuLWGw2U+/YWFoLjFI56mS9DSLB6tpkW2vZCQCNsZC+8D94JfNycMJGmSYcJksnFT0mowrrh4PeCfkx0AtaWgrGaaNqPq5wjAq+88+zO/+KitYhRtT5fNwledyLjpR+lXOeL02Avd69sxd6r9KiZqmvbupLIRJPiKpzOm1IKh5SXDbRYLL2CyUtq7ciVBBHq5uVRk9edPl++csS07rhnYGG0HdCWFT641V3FYIJDmtM9JJTNuKR3QX3/38lZW2BoYXECfDSjOglMqN3fmI60m+Q1wfABhzVis7BqGsfEMsy574YQqVI7qfj6nlyR/jALPwqps3fp/1KtCpfcmHurjqK3wjbupiNTBIhn2cy/lqnQxlIS/stZHPdNym1Tp8OLZWR8cySWbMoljXUFl26FX2FsaeF7HwJPLZP1XuKe';const _IH='dcd0c0442a7e2fed63d8519fc1fa4629c0e87ba53dbbdd192a9abe005a027e37';let _src;

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
